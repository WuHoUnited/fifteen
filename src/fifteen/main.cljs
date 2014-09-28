(ns fifteen.main
  "Entry point for the fifteen puzzle for code running in a web browser."
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [fifteen.core :as f]))

(enable-console-print!)

(def app-state "Holds the entire state of the fifteen puzzle."
  (atom {:game (f/make-game)}))

;; Map keyboard inputs

(def key-map
  "Map input characters to commands"
  {\a f/move-left
   \e f/move-right
   \, f/move-up
   \o f/move-down
   \r f/randomize
   \h f/move-left
   \n f/move-right
   \c f/move-up
   \t f/move-down})

(defn key-to-action
  "Convert a key to an action"
  [key]
  (get key-map
       key
       identity))

(defn handle-keypress [event]
  (swap! app-state
         #(update-in % [:game] (key-to-action (char (.-charCode event))))))

(defn num-to-diagonal
  "Returns 0 or 1 indicating which \"diagonal\"/\"color\"
  the number belongs to. This is used to determine the color.
  Note that it is not simple odd/even."
  [num cols]
  (let [num (dec num)]
    (mod (+ (mod num 2)
            (mod (quot num cols) 2))
         2)))

;; Begin Om Views.
;; Note: This was written before I knew how to use Om cursors
;; so although Om CAN be used this way it is NOT how Om is intended to be used.

(defn square-view
  "Generates the single square at location within the board.
  Listener is the mouse-over listener."
  [{{{:keys [cols]} :config :as game} :game
                    [row col :as location] :location
                    listener :listener}]
  (let [num (f/get-number game location)
        className (apply str (interpose " " ["square"
                                             (cond
                                              (nil? num) ""
                                              (zero? (num-to-diagonal num cols)) "even"
                                              :else "odd")]))]
    (dom/div #js {:className className
                  :style #js {:top (str (* row 52) "px")
                              :left (str (* col 52) "px")}
                  :onMouseOver listener}
             num)))

(defn randomize-view
  "Generate the element for randomizing the puzzle."
  [game]
  (dom/button
   #js {:onClick (fn [_]
                   (swap! app-state
                          #(update-in % [:game] f/randomize)))}
   "Random"))

(defn board-view
  "View for the entire Puzzle."
  [{{:keys [rows cols]} :config :as game}]
  (let [blank-location (f/find-blank game)
        listeners {(update-in blank-location [1] dec) (fn [e] (swap! app-state
                                                                     #(update-in % [:game] f/move-right)))
                   (update-in blank-location [1] inc) (fn [e] (swap! app-state
                                                                     #(update-in % [:game] f/move-left)))
                   (update-in blank-location [0] inc) (fn [e] (swap! app-state
                                                                     #(update-in % [:game] f/move-up)))
                   (update-in blank-location [0] dec) (fn [e] (swap! app-state
                                                                     #(update-in % [:game] f/move-down)))}]
    (apply dom/div #js {:className "board"}
           (om/build-all
            #(square-view {:game game
                           :location %
                           :listener (listeners %)})
            (for [row (range rows)
                  col (range cols)]
              [row col])))))

(defn game-view
  "View for the puzzle and randomization"
  [game]
  (dom/div #js {:className "game"}
           (board-view game)
           (randomize-view game)))

;; Begin handling the DOM

;;Render to the DOM
(om/root
 (fn [app owner]
   (game-view (:game @app-state)))
 app-state
 {:target (. js/document (getElementById "app"))})

;;Add the global event listeners.
(.addEventListener js/document "keypress" handle-keypress)
