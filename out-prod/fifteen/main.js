// Compiled by ClojureScript 0.0-2268
goog.provide('fifteen.main');
goog.require('cljs.core');
goog.require('fifteen.core');
goog.require('fifteen.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_();
fifteen.main.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,fifteen.core.make_game.cljs$core$IFn$_invoke$arity$0()], null));
fifteen.main.key_map = cljs.core.PersistentHashMap.fromArrays(["a","c","e","h",",","n","o","r","t"],[fifteen.core.move_left,fifteen.core.move_up,fifteen.core.move_right,fifteen.core.move_left,fifteen.core.move_up,fifteen.core.move_right,fifteen.core.move_down,fifteen.core.randomize,fifteen.core.move_down]);
fifteen.main.key_to_action = (function key_to_action(key){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(fifteen.main.key_map,key,cljs.core.identity);
});
fifteen.main.num_to_diagonal = (function num_to_diagonal(num,cols){var num__$1 = (num - (1));return cljs.core.mod((cljs.core.mod(num__$1,(2)) + cljs.core.mod(cljs.core.quot(num__$1,cols),(2))),(2));
});
fifteen.main.square_view = (function square_view(p__5856){var map__5861 = p__5856;var map__5861__$1 = ((cljs.core.seq_QMARK_(map__5861))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5861):map__5861);var map__5862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5861__$1,cljs.core.constant$keyword$49);var map__5862__$1 = ((cljs.core.seq_QMARK_(map__5862))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5862):map__5862);var game = map__5862__$1;var map__5863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5862__$1,cljs.core.constant$keyword$16);var map__5863__$1 = ((cljs.core.seq_QMARK_(map__5863))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5863):map__5863);var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5863__$1,cljs.core.constant$keyword$15);var vec__5864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5861__$1,cljs.core.constant$keyword$50);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5864,(0),null);var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5864,(1),null);var location = vec__5864;var listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5861__$1,cljs.core.constant$keyword$51);var num = fifteen.core.get_number(game,location);var className = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["square",(((num == null))?"":(((fifteen.main.num_to_diagonal(num,cols) === (0)))?"even":((cljs.core.constant$keyword$6)?"odd":null)))], null)));return React.DOM.div({"onMouseOver": listener, "style": {"left": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((col * (52)))+"px"), "top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((row * (52)))+"px")}, "className": className},num);
});
fifteen.main.randomize_view = (function randomize_view(game){return React.DOM.button({"onClick": (function (_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fifteen.main.app_state,(function (p1__5865_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5865_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),fifteen.core.randomize);
}));
})},"Random");
});
fifteen.main.board_view = (function board_view(p__5871){var map__5880 = p__5871;var map__5880__$1 = ((cljs.core.seq_QMARK_(map__5880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5880):map__5880);var game = map__5880__$1;var map__5881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5880__$1,cljs.core.constant$keyword$16);var map__5881__$1 = ((cljs.core.seq_QMARK_(map__5881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5881):map__5881);var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5881__$1,cljs.core.constant$keyword$15);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5881__$1,cljs.core.constant$keyword$14);var blank_location = fifteen.core.find_blank(game);var listeners = new cljs.core.PersistentArrayMap.fromArray([cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(blank_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dec),((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fifteen.main.app_state,((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (p1__5866_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5866_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),fifteen.core.move_right);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(blank_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.inc),((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fifteen.main.app_state,((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (p1__5867_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5867_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),fifteen.core.move_left);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(blank_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.inc),((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fifteen.main.app_state,((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (p1__5868_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5868_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),fifteen.core.move_up);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(blank_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.dec),((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fifteen.main.app_state,((function (blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (p1__5869_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5869_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),fifteen.core.move_down);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
);
});})(blank_location,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "board"},om.core.build_all.cljs$core$IFn$_invoke$arity$2(((function (blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (p1__5870_SHARP_){return fifteen.main.square_view(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,game,cljs.core.constant$keyword$50,p1__5870_SHARP_,cljs.core.constant$keyword$51,(listeners.cljs$core$IFn$_invoke$arity$1 ? listeners.cljs$core$IFn$_invoke$arity$1(p1__5870_SHARP_) : listeners.call(null,p1__5870_SHARP_))], null));
});})(blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
,(function (){var iter__4268__auto__ = ((function (blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function iter__5882(s__5883){return (new cljs.core.LazySeq(null,((function (blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (){var s__5883__$1 = s__5883;while(true){
var temp__4126__auto__ = cljs.core.seq(s__5883__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var row = cljs.core.first(xs__4624__auto__);var iterys__4264__auto__ = ((function (s__5883__$1,row,xs__4624__auto__,temp__4126__auto__,blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function iter__5884(s__5885){return (new cljs.core.LazySeq(null,((function (s__5883__$1,row,xs__4624__auto__,temp__4126__auto__,blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows){
return (function (){var s__5885__$1 = s__5885;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__5885__$1);if(temp__4126__auto____$1)
{var s__5885__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__5885__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__5885__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__5887 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__5886 = (0);while(true){
if((i__5886 < size__4267__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__5886);cljs.core.chunk_append(b__5887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
{
var G__5888 = (i__5886 + (1));
i__5886 = G__5888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5887),iter__5884(cljs.core.chunk_rest(s__5885__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5887),null);
}
} else
{var col = cljs.core.first(s__5885__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),iter__5884(cljs.core.rest(s__5885__$2)));
}
} else
{return null;
}
break;
}
});})(s__5883__$1,row,xs__4624__auto__,temp__4126__auto__,blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
,null,null));
});})(s__5883__$1,row,xs__4624__auto__,temp__4126__auto__,blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
;var fs__4265__auto__ = cljs.core.seq(iterys__4264__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols)));if(fs__4265__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4265__auto__,iter__5882(cljs.core.rest(s__5883__$1)));
} else
{{
var G__5889 = cljs.core.rest(s__5883__$1);
s__5883__$1 = G__5889;
continue;
}
}
} else
{return null;
}
break;
}
});})(blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
,null,null));
});})(blank_location,listeners,map__5880,map__5880__$1,game,map__5881,map__5881__$1,cols,rows))
;return iter__4268__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
})()));
});
fifteen.main.game_view = (function game_view(game){return React.DOM.div({"className": "game"},fifteen.main.board_view(game),fifteen.main.randomize_view(game));
});
om.core.root((function (app,owner){return fifteen.main.game_view(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fifteen.main.app_state)));
}),fifteen.main.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$48,document.getElementById("app")], null));
fifteen.main.handle_keypress = (function handle_keypress(event){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fifteen.main.app_state,(function (p1__5890_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5890_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),fifteen.main.key_to_action(cljs.core.char$(event.charCode)));
}));
});
document.addEventListener("keypress",fifteen.main.handle_keypress);
