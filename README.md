fifteen
=======

#Fifteen Puzzle in ClojureScript


ThisThis project is an implementation of the famous "Fifteen puzzle" in `ClojureScript`
and `Om` which can be played in a web browser.

The fifteen puzzle is a puzzle which is played with fifteen pieces on a 4x4 grid.
The pieces are shuffled and then the goal of the puzzle is to put the pieces back into place as pictured below.
```
  1   2   3   4
  5   6   7   8
  9  10  11  12
 13  14  15
```

#Quick Start

To begin playing

1) Run `lein cljsbuild once` to build the project

2) open up the `public/prod/index.html` in a web browser

The game is controlled by a mouse. When you move the mouse over a square touching the empty square
it will be swapped with the empty square.
