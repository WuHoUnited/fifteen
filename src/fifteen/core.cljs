(ns fifteen.core)

(defrecord Config [rows cols])
(defrecord Game [config board])

(def default-config (->Config 4 4))

(defn make-game
  ([]
   (make-game default-config))
  ([{:keys [rows cols] :as config}]
   (let [num-squares (* rows cols)
         board (conj (vec (range 1 num-squares))
                     nil)]
     (->Game config board))))

(defn to-row-col [{:keys [rows cols] :as config} index]
  [(quot index cols) (mod index cols)])

(defn to-index [{:keys [rows cols] :as config} [row col]]
  (+ (* row cols)
     col))

(defn switch [{:keys [config board] :as game} loc-1 loc-2]
  (let [index-1 (to-index config loc-1)
        index-2 (to-index config loc-2)
        new-board (-> board
                      (assoc-in [index-1] (board index-2))
                      (assoc-in [index-2] (board index-1)))]
    (assoc-in game [:board] new-board)))

(defn get-number [{:keys [config board] :as game}
                  location]
  (board (to-index config location)))

(defn find-blank [{:keys [config board]
                   :as board}]
  (loop [index 0
         [x & xs] board]
    (if (nil? x)
      (to-row-col config index)
      (recur (inc index) xs))))

(defn in-bounds? [{:keys [rows cols] :as config} [row col]]
  (and (<= 0 row)
       (< row rows)
       (<= 0 col)
       (< col cols)))

(defn move [{:keys [board config]
                  {:keys [rows cols]} :config
                  :as game} update-location-fn]
  (let [[blank-row blank-col :as blank-location] (find-blank game)
        new-location (update-location-fn blank-location)]
    (if (in-bounds? config new-location)
      (switch game blank-location new-location)
      game)))

(defn move-down [game]
  (move game #(update-in % [0] dec)))

(defn move-up [game]
  (move game #(update-in % [0] inc)))

(defn move-right [game]
  (move game #(update-in % [1] dec)))

(defn move-left [game]
  (move game #(update-in % [1] inc)))


(defn random-move [game]
  ((rand-nth [move-right move-left move-down move-up])
   game))

(defn randomize [game]
  (->> (iterate random-move game)
       (take 10000)
       last))


