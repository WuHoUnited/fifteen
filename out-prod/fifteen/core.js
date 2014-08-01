// Compiled by ClojureScript 0.0-2268
goog.provide('fifteen.core');
goog.require('cljs.core');

/**
* @constructor
* @param {*} rows
* @param {*} cols
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
fifteen.core.Config = (function (rows,cols,__meta,__extmap){
this.rows = rows;
this.cols = cols;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
fifteen.core.Config.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4129__auto____$1,k__4130__auto__,null);
});
fifteen.core.Config.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k4946,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__4948 = (((k4946 instanceof cljs.core.Keyword))?k4946.fqn:null);switch (G__4948) {
case "cols":
return self__.cols;

break;
case "rows":
return self__.rows;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4946,else__4132__auto__);

}
});
fifteen.core.Config.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer(writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4144__auto__,pr_pair__4146__auto__,"#fifteen.core.Config{",", ","}",opts__4145__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$14,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$15,self__.cols],null))], null),self__.__extmap));
});
fifteen.core.Config.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
fifteen.core.Config.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new fifteen.core.Config(self__.rows,self__.cols,self__.__meta,self__.__extmap,self__.__hash));
});
fifteen.core.Config.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
fifteen.core.Config.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap(this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
fifteen.core.Config.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map(this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
fifteen.core.Config.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$14,null,cljs.core.constant$keyword$15,null], null), null),k__4139__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new fifteen.core.Config(self__.rows,self__.cols,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4139__auto__)),null));
}
});
fifteen.core.Config.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__4945){var self__ = this;
var this__4136__auto____$1 = this;var pred__4949 = cljs.core.keyword_identical_QMARK_;var expr__4950 = k__4137__auto__;if(cljs.core.truth_((pred__4949.cljs$core$IFn$_invoke$arity$2 ? pred__4949.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$14,expr__4950) : pred__4949.call(null,cljs.core.constant$keyword$14,expr__4950))))
{return (new fifteen.core.Config(G__4945,self__.cols,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4949.cljs$core$IFn$_invoke$arity$2 ? pred__4949.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$15,expr__4950) : pred__4949.call(null,cljs.core.constant$keyword$15,expr__4950))))
{return (new fifteen.core.Config(self__.rows,G__4945,self__.__meta,self__.__extmap,null));
} else
{return (new fifteen.core.Config(self__.rows,self__.cols,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4137__auto__,G__4945),null));
}
}
});
fifteen.core.Config.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$14,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$15,self__.cols],null))], null),self__.__extmap));
});
fifteen.core.Config.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__4945){var self__ = this;
var this__4128__auto____$1 = this;return (new fifteen.core.Config(self__.rows,self__.cols,G__4945,self__.__extmap,self__.__hash));
});
fifteen.core.Config.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4135__auto__))
{return cljs.core._assoc(this__4134__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4135__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
fifteen.core.Config.cljs$lang$type = true;
fifteen.core.Config.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"fifteen.core/Config");
});
fifteen.core.Config.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write(writer__4164__auto__,"fifteen.core/Config");
});
fifteen.core.__GT_Config = (function __GT_Config(rows,cols){return (new fifteen.core.Config(rows,cols));
});
fifteen.core.map__GT_Config = (function map__GT_Config(G__4947){return (new fifteen.core.Config(cljs.core.constant$keyword$14.cljs$core$IFn$_invoke$arity$1(G__4947),cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(G__4947),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4947,cljs.core.constant$keyword$14,cljs.core.array_seq([cljs.core.constant$keyword$15], 0))));
});

/**
* @constructor
* @param {*} config
* @param {*} board
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
fifteen.core.Game = (function (config,board,__meta,__extmap){
this.config = config;
this.board = board;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
fifteen.core.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4129__auto____$1,k__4130__auto__,null);
});
fifteen.core.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k4954,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__4956 = (((k4954 instanceof cljs.core.Keyword))?k4954.fqn:null);switch (G__4956) {
case "board":
return self__.board;

break;
case "config":
return self__.config;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4954,else__4132__auto__);

}
});
fifteen.core.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer(writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4144__auto__,pr_pair__4146__auto__,"#fifteen.core.Game{",", ","}",opts__4145__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$16,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.board],null))], null),self__.__extmap));
});
fifteen.core.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
fifteen.core.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new fifteen.core.Game(self__.config,self__.board,self__.__meta,self__.__extmap,self__.__hash));
});
fifteen.core.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
fifteen.core.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap(this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
fifteen.core.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map(this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
fifteen.core.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$16,null,cljs.core.constant$keyword$17,null], null), null),k__4139__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new fifteen.core.Game(self__.config,self__.board,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4139__auto__)),null));
}
});
fifteen.core.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__4953){var self__ = this;
var this__4136__auto____$1 = this;var pred__4957 = cljs.core.keyword_identical_QMARK_;var expr__4958 = k__4137__auto__;if(cljs.core.truth_((pred__4957.cljs$core$IFn$_invoke$arity$2 ? pred__4957.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$16,expr__4958) : pred__4957.call(null,cljs.core.constant$keyword$16,expr__4958))))
{return (new fifteen.core.Game(G__4953,self__.board,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4957.cljs$core$IFn$_invoke$arity$2 ? pred__4957.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__4958) : pred__4957.call(null,cljs.core.constant$keyword$17,expr__4958))))
{return (new fifteen.core.Game(self__.config,G__4953,self__.__meta,self__.__extmap,null));
} else
{return (new fifteen.core.Game(self__.config,self__.board,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4137__auto__,G__4953),null));
}
}
});
fifteen.core.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$16,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.board],null))], null),self__.__extmap));
});
fifteen.core.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__4953){var self__ = this;
var this__4128__auto____$1 = this;return (new fifteen.core.Game(self__.config,self__.board,G__4953,self__.__extmap,self__.__hash));
});
fifteen.core.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4135__auto__))
{return cljs.core._assoc(this__4134__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4135__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
fifteen.core.Game.cljs$lang$type = true;
fifteen.core.Game.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"fifteen.core/Game");
});
fifteen.core.Game.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write(writer__4164__auto__,"fifteen.core/Game");
});
fifteen.core.__GT_Game = (function __GT_Game(config,board){return (new fifteen.core.Game(config,board));
});
fifteen.core.map__GT_Game = (function map__GT_Game(G__4955){return (new fifteen.core.Game(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(G__4955),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__4955),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4955,cljs.core.constant$keyword$16,cljs.core.array_seq([cljs.core.constant$keyword$17], 0))));
});
fifteen.core.default_config = fifteen.core.__GT_Config((4),(4));
fifteen.core.make_game = (function() {
var make_game = null;
var make_game__0 = (function (){return make_game.cljs$core$IFn$_invoke$arity$1(fifteen.core.default_config);
});
var make_game__1 = (function (p__4961){var map__4963 = p__4961;var map__4963__$1 = ((cljs.core.seq_QMARK_(map__4963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4963):map__4963);var config = map__4963__$1;var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4963__$1,cljs.core.constant$keyword$15);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4963__$1,cljs.core.constant$keyword$14);var num_squares = (rows * cols);var board = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),num_squares)),null);return fifteen.core.__GT_Game(config,board);
});
make_game = function(p__4961){
switch(arguments.length){
case 0:
return make_game__0.call(this);
case 1:
return make_game__1.call(this,p__4961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_game.cljs$core$IFn$_invoke$arity$0 = make_game__0;
make_game.cljs$core$IFn$_invoke$arity$1 = make_game__1;
return make_game;
})()
;
fifteen.core.to_row_col = (function to_row_col(p__4964,index){var map__4966 = p__4964;var map__4966__$1 = ((cljs.core.seq_QMARK_(map__4966))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4966):map__4966);var config = map__4966__$1;var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4966__$1,cljs.core.constant$keyword$15);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4966__$1,cljs.core.constant$keyword$14);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot(index,cols),cljs.core.mod(index,cols)], null);
});
fifteen.core.to_index = (function to_index(p__4967,p__4968){var map__4971 = p__4967;var map__4971__$1 = ((cljs.core.seq_QMARK_(map__4971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4971):map__4971);var config = map__4971__$1;var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4971__$1,cljs.core.constant$keyword$15);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4971__$1,cljs.core.constant$keyword$14);var vec__4972 = p__4968;var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4972,(0),null);var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4972,(1),null);return ((row * cols) + col);
});
fifteen.core.switch$ = (function switch$(p__4973,loc_1,loc_2){var map__4975 = p__4973;var map__4975__$1 = ((cljs.core.seq_QMARK_(map__4975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4975):map__4975);var game = map__4975__$1;var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4975__$1,cljs.core.constant$keyword$17);var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4975__$1,cljs.core.constant$keyword$16);var index_1 = fifteen.core.to_index(config,loc_1);var index_2 = fifteen.core.to_index(config,loc_2);var new_board = cljs.core.assoc_in(cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_1], null),(board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(index_2) : board.call(null,index_2))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_2], null),(board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(index_1) : board.call(null,index_1)));return cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$17], null),new_board);
});
fifteen.core.get_number = (function get_number(p__4976,location){var map__4978 = p__4976;var map__4978__$1 = ((cljs.core.seq_QMARK_(map__4978))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4978):map__4978);var game = map__4978__$1;var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4978__$1,cljs.core.constant$keyword$17);var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4978__$1,cljs.core.constant$keyword$16);return (board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1(fifteen.core.to_index(config,location)) : board.call(null,fifteen.core.to_index(config,location)));
});
fifteen.core.find_blank = (function find_blank(p__4979){var map__4985 = p__4979;var map__4985__$1 = ((cljs.core.seq_QMARK_(map__4985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4985):map__4985);var board = map__4985__$1;var board__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4985__$1,cljs.core.constant$keyword$17);var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4985__$1,cljs.core.constant$keyword$16);var index = (0);var G__4987 = board__$1;var vec__4988 = G__4987;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4988,(0),null);var xs = cljs.core.nthnext(vec__4988,(1));var index__$1 = index;var G__4987__$1 = G__4987;while(true){
var index__$2 = index__$1;var vec__4989 = G__4987__$1;var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4989,(0),null);var xs__$1 = cljs.core.nthnext(vec__4989,(1));if((x__$1 == null))
{return fifteen.core.to_row_col(config,index__$2);
} else
{{
var G__4990 = (index__$2 + (1));
var G__4991 = xs__$1;
index__$1 = G__4990;
G__4987__$1 = G__4991;
continue;
}
}
break;
}
});
fifteen.core.in_bounds_QMARK_ = (function in_bounds_QMARK_(p__4992,p__4993){var map__4996 = p__4992;var map__4996__$1 = ((cljs.core.seq_QMARK_(map__4996))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4996):map__4996);var config = map__4996__$1;var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4996__$1,cljs.core.constant$keyword$15);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4996__$1,cljs.core.constant$keyword$14);var vec__4997 = p__4993;var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4997,(0),null);var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4997,(1),null);return (((0) <= row)) && ((row < rows)) && (((0) <= col)) && ((col < cols));
});
fifteen.core.move = (function move(p__4998,update_location_fn){var map__5002 = p__4998;var map__5002__$1 = ((cljs.core.seq_QMARK_(map__5002))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5002):map__5002);var game = map__5002__$1;var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5002__$1,cljs.core.constant$keyword$16);var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5002__$1,cljs.core.constant$keyword$17);var map__5003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5002__$1,cljs.core.constant$keyword$16);var map__5003__$1 = ((cljs.core.seq_QMARK_(map__5003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5003):map__5003);var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5003__$1,cljs.core.constant$keyword$15);var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5003__$1,cljs.core.constant$keyword$14);var vec__5004 = fifteen.core.find_blank(game);var blank_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5004,(0),null);var blank_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5004,(1),null);var blank_location = vec__5004;var new_location = (update_location_fn.cljs$core$IFn$_invoke$arity$1 ? update_location_fn.cljs$core$IFn$_invoke$arity$1(blank_location) : update_location_fn.call(null,blank_location));if(fifteen.core.in_bounds_QMARK_(config,new_location))
{return fifteen.core.switch$(game,blank_location,new_location);
} else
{return game;
}
});
fifteen.core.move_down = (function move_down(game){return fifteen.core.move(game,(function (p1__5005_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5005_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.dec);
}));
});
fifteen.core.move_up = (function move_up(game){return fifteen.core.move(game,(function (p1__5006_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5006_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.inc);
}));
});
fifteen.core.move_right = (function move_right(game){return fifteen.core.move(game,(function (p1__5007_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5007_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dec);
}));
});
fifteen.core.move_left = (function move_left(game){return fifteen.core.move(game,(function (p1__5008_SHARP_){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__5008_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.inc);
}));
});
fifteen.core.random_move = (function random_move(game){return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fifteen.core.move_right,fifteen.core.move_left,fifteen.core.move_down,fifteen.core.move_up], null)).call(null,game);
});
fifteen.core.randomize = (function randomize(game){return cljs.core.last(cljs.core.take((10000),cljs.core.iterate(fifteen.core.random_move,game)));
});
