(defproject fifteen "0.1.0-SNAPSHOT"
  :description "Play the Fifteen Puzzle in a web browser."
  :url "https://github.com/WuHoUnited/fifteen"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.5"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "prod"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "public/prod/fifteen.js"
                                   :optimizations :advanced
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}
                       {:id "fifteen"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "public/dev/fifteen.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :source-map true}}]})
