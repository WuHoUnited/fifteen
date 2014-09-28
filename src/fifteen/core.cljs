(ns fifteen.core
  "Contains the core logic for the fifteen puzzle.")

;; Define Data Types

(defrecord Config [rows cols]) ;Configuration information for a game.
(defrecord Game [config board]) ;A fifteen puzzle.

(def DEFAULT_CONFIG "The standard fifteen puzzle is a 4 x 4 grid."
  (->Config 4 4))

(defn make-game
  "Makes a fifteen puzzle. Uses DEFAULT_CONFIG if no config is specified."
  ([]
   (make-game DEFAULT_CONFIG))
  ([{:keys [rows cols] :as config}]
   (let [num-squares (* rows cols)
         board (conj (vec (range 1 num-squares))
                     nil)]
     (->Game config board))))

;; Define functions for converting between an index representation
;; of a location and a [row col] representation.

(defn to-row-col
  "Converts an index to a [row col] representation."
  [{:keys [rows cols] :as config} index]
  [(quot index cols) (mod index cols)])

(defn to-index
  "Converts a [row col] representation to an index."
  [{:keys [rows cols] :as config} [row col]]
  (+ (* row cols)
     col))

;; Begin defining more useful functions for manipulating the board

(defn switch
  "Swaps loc-1 and loc-2 in game.
  loc-1 and loc-2 are in [row col] representation."
  [{:keys [config board] :as game} loc-1 loc-2]
  (let [index-1 (to-index config loc-1)
        index-2 (to-index config loc-2)
        new-board (-> board
                      (assoc-in [index-1] (board index-2))
                      (assoc-in [index-2] (board index-1)))]
    (assoc-in game [:board] new-board)))

(defn get-number
  "Gets the number at location or nil if there is no number.
  location is in [row col] format."
  [{:keys [config board] :as game}
   location]
  (board (to-index config location)))

(defn find-blank
  "Returns the [row col] of the empty square."
  [{:keys [config board]
    :as board}]
  (loop [index 0
         [x & xs] board]
    (if (nil? x)
      (to-row-col config index)
      (recur (inc index) xs))))

(defn in-bounds?
  "Returns whether [row rol] is a valid location for the given config."
  [{:keys [rows cols] :as config} [row col]]
  (and (<= 0 row)
       (< row rows)
       (<= 0 col)
       (< col cols)))

;; Begin the movement functions

(defn move
  "Moves a piece in the game. The update-location-fn is a function
  which when applied to the [row col] representation of the blank location
  will return the new location for the blank. The blank will end up getting
  swapped with whatever is at its new location."
  [{:keys [board config]
    {:keys [rows cols]} :config
    :as game}
   update-location-fn]
  (let [[blank-row blank-col :as blank-location] (find-blank game)
        new-location (update-location-fn blank-location)]
    (if (in-bounds? config new-location)
      (switch game blank-location new-location)
      game)))

(defn move-down
  "Try to move a piece down (blank moves up)"
  [game]
  (move game #(update-in % [0] dec)))

(defn move-up
  "Try to move a piece up (blank moves down)"
  [game]
  (move game #(update-in % [0] inc)))

(defn move-right
  "Try to move a piece right (blank moves left)"
  [game]
  (move game #(update-in % [1] dec)))

(defn move-left
  "Try to move a piece left (blank moves right)"
  [game]
  (move game #(update-in % [1] inc)))


;;Begin randomizing functions

(defn random-move
  "Make a random move in the game.
  Note: currently this may actually return the same game
  if the randomly selected move is illegal."
  [game]
  ((rand-nth [move-right move-left move-down move-up])
   game))

(defn randomize
  "Randomly shuffle the game."
  [game]
  (->> (iterate random-move game)
       (take 10000)
       last))


