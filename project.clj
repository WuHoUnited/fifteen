(defproject fifteen "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.5"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "fifteen"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "fifteen.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "fifteen-prod.js"
                                   :output-dir "out-prod"
                                   :optimizations :advanced
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})