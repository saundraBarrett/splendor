(this.webpackJsonpsplendor=this.webpackJsonpsplendor||[]).push([[0],{118:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),o=c(13),r=c.n(o),s=(c(118),c(14)),a=c(31),m=c(20),l=c(177),y=c(189),g=c(190),d=c(179),E=c(9),v=c.n(E),j=c(185),u=[{id:1,type:"Local"},{id:2,type:"Robot"},{id:3,type:"Remote"}],q=c(2),b=function(e){var t=Object(i.useState)({id:e.i,type:e.type,name:e.name}),c=Object(m.a)(t,2),n=c[0],o=c[1];return Object(q.jsxs)(l.a,{container:!0,direction:"row",spacing:3,children:[Object(q.jsx)(l.a,{item:!0,xs:6,children:Object(q.jsxs)(y.a,{style:{minWidth:"240px"},variant:"outlined",name:"player-type-".concat(e.i),children:[Object(q.jsx)(g.a,{id:"player-type",children:"Player Type"}),Object(q.jsx)(j.a,{labelId:"player-type",id:e.i,value:0,onChange:function(t){return e.onChangePlayerType(t)},children:v.a.map(u,(function(t){return Object(q.jsx)("option",{value:t.id,children:t.type},e.i+t.id)}))})]},"player-type-".concat(e.i))}),Object(q.jsx)(l.a,{item:!0,xs:6,children:Object(q.jsxs)(y.a,{name:"player-name-".concat(e.i),children:[Object(q.jsx)(g.a,{children:"Player Name:"}),Object(q.jsx)(d.a,{onChange:function(t){return function(t){var c=n;c.name=t.target.value,o(c),e.doneUpdatingPlayer(n)}(t)}})]},"player-name-".concat(e.i))})]})};var O=function(e){for(var t=v.a.find(u,{type:"Local"}),c=[{id:0,type:t.id},{id:1,type:t.id}],n=Object(s.c)(),o=Object(i.useState)(c),r=Object(m.a)(o,2),E=r[0],j=r[1],O=function(e){e.target.value!==t.id&&alert("Only local players allowed now!")},R=function(e){var t=v.a.findIndex(E,(function(t){return t.id==e.id})),c=Object(a.a)(E);c[t]=e,j(c)},f=[],L=0;L<E.length;L++)f.push(Object(q.jsx)(b,{i:L,type:t.id,onChangePlayerType:O,doneUpdatingPlayer:R},"player-setup_"+L));return Object(q.jsx)(l.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(q.jsxs)("div",{style:{backgroundColor:"white",width:"50%"},children:[Object(q.jsx)(l.a,{item:!0,children:Object(q.jsxs)(y.a,{fullWidth:!0,children:[Object(q.jsx)(g.a,{htmlFor:"number-of-players",children:"Number of Players"}),Object(q.jsx)(d.a,{id:"number-of-players",defaultValue:"2",type:"number",inputProps:{min:"2",max:"4"},onChange:function(e){return function(e){if(e>E.length)j([].concat(Object(a.a)(E),[{type:t.id}]));else if(e<E.length){var c=v.a.initial(E);j(c)}}(e.target.value)}})]})}),Object(q.jsx)(l.a,{item:!0,children:f}),Object(q.jsx)(l.a,{item:!0,children:Object(q.jsx)("button",{onClick:function(){return n({type:"START_GAME",players:E})},children:"Start Game"})})]})})},R=c(16),f=c.n(R),L=function(e){return Object(q.jsx)("div",{className:"token-container",onClick:e.onClickFunction?function(){return e.onClickFunction(e.token.id)}:null,children:Object(q.jsx)("div",{className:"token token-"+e.token.gem,children:Object(q.jsx)("div",{className:"count-"+e.token.qty,children:e.token.qty})})})};var p=function(e){console.log(e);for(var t=[],c=0;c<1;c++)t.push(Object(q.jsx)(L,{token:e.token,onClickFunction:e.onClickFunction},"token_"+c));return Object(q.jsx)(l.a,{item:!0,className:"token-stack",children:t})};var B=Object(s.b)((function(e){return{gameTokens:e.game.tokens}}))((function(e){var t=Object(s.c)(),c=Object(i.useState)([]),n=Object(m.a)(c,2),o=n[0],r=n[1],l=function(e){r((function(t){return[].concat(Object(a.a)(t),[e])}))};return Object(i.useEffect)((function(){3===o.length&&(t({type:"REMOVE_TOKEN_FROM_BOARD",chips:o}),t({type:"END_PLAYER_TURN"}),r([]))})),Object(q.jsx)(f.a,{container:!0,direction:"column",children:e.gameTokens.map((function(e,t){return Object(q.jsx)(p,{token:e,i:t,onClickFunction:l,selectedChips:o},"token-stack_"+t)}))})})),x=c(182);var P=Object(s.b)((function(e){return{players:e.game.players}}))((function(e){return Object(q.jsx)(f.a,{container:!0,direction:"column",style:{marginTop:"2em"},children:e.players.map((function(e,t){return Object(q.jsx)(x.a,{color:"primary",badgeContent:0,children:Object(q.jsx)("div",{style:{height:"10vh",backgroundColor:"red",width:"100%",marginBottom:"1em",borderRadius:"0 10px 10px 0"},children:e.name})})}))})})),h=c.p+"static/media/sapphire.5361b8d5.png",C=c.p+"static/media/emerald.84aea5eb.png",A=c.p+"static/media/ruby.1ccb5125.png",N=c.p+"static/media/diamond.f68b3adf.png",I=c.p+"static/media/onyx.1a6421b0.png",T=c.p+"static/media/gold.6237158e.png",D=function(e){switch(e.gem){case"SAPPHIRE":return Object(q.jsx)("img",{src:h});case"EMERALD":return Object(q.jsx)("img",{src:C});case"RUBY":return Object(q.jsx)("img",{src:A});case"DIAMOND":return Object(q.jsx)("img",{src:N});case"ONYX":return Object(q.jsx)("img",{src:I});case"GOLD":return Object(q.jsx)("img",{src:T});default:return null}},U=c(188),G=c(186),W=c(183),H=c(184),K=c(191),k=function(e){return console.log(e),Object(q.jsxs)(l.a,{item:!0,container:!0,className:"card overlay card-"+e.card.gem,display:"flex",p:1,m:2,bgcolor:"background.paper",children:[0!==e.card.victoryPoints?Object(q.jsxs)(K.a,{className:"victory-points",children:[" ",e.card.victoryPoints," "]}):null,Object(q.jsx)(K.a,{flexGrow:1,textAlign:"right",className:"gem-container",justifyContent:"flex-end",children:Object(q.jsx)(D,{gem:e.card.gem})})]})},_=function(e){return Object(q.jsx)(l.a,{item:!0,alignSelf:"flex-end",className:"cost-container",children:v.a.map(e.card.cost,(function(e){return Object(q.jsx)("div",{className:"cost cost_"+e.gem,children:Object(q.jsx)("span",{className:"quantity",children:e.qty})},"cost_"+e.gem)}))})};function S(e){return Math.floor(Math.random()*e)}function w(e){return v.a.shuffle(e)}function M(e){var t=Object(s.c)(),c=n.a.useState(!1),i=Object(m.a)(c,2),o=i[0],r=i[1],a=n.a.useState(!1),y=Object(m.a)(a,2),g=y[0],d=y[1],E=n.a.useState(!1),j=Object(m.a)(E,2),u=j[0],b=j[1],O=function(){r(!1)};return Object(q.jsxs)("div",{children:[Object(q.jsx)(l.a,{container:!0,xs:!0,variant:"outlined",color:"primary",onClick:function(){r(!0),d(function(e,t){for(var c=e.cost,i=0;i<c.length;i++){var n=v.a.find(t.tokens,{gem:c[i].gem}).qty+v.a.find(t.tokens,{gem:c[i].gem}).qty;if(console.log(n),n<c[i].qty)return!1}return!0}(e.card,e.activePlayer)),b(3!==e.activePlayer.reserved.length)},children:Object(q.jsxs)(l.a,{container:!0,direction:"column",children:[Object(q.jsx)(k,{card:e.card}),Object(q.jsx)(_,{card:e.card})]})}),Object(q.jsxs)(U.a,{onClose:O,"aria-labelledby":"customized-dialog-title",open:o,children:[Object(q.jsxs)(W.a,{dividers:!0,children:[Object(q.jsx)(k,{card:e.card}),Object(q.jsx)(_,{card:e.card})]}),Object(q.jsxs)(H.a,{children:[Object(q.jsx)(G.a,{autoFocus:!0,onClick:function(){var c=e.card;t({type:"PLAYER_RESERVE_CARD",card:c}),r(!1),t({type:"END_PLAYER_TURN"})},color:"primary",disabled:!u,children:"Reserve"}),Object(q.jsx)(G.a,{autoFocus:!0,onClick:function(){var c=e.card;t({type:"PLAYER_TAKE_CARD",card:c}),r(!1),t({type:"END_PLAYER_TURN"})},color:"primary",disabled:!g,children:"Buy"}),Object(q.jsx)(G.a,{autoFocus:!0,onClick:O,color:"primary",children:"Cancel"})]})]})]})}var Y=Object(s.b)((function(e){return{activePlayer:v.a.find(e.game.players,{active:!0})}}))((function(e){return Object(q.jsx)(l.a,{item:!0,xs:2,style:{margin:"1em"},className:"card-container "+e.card.gem+e.card.level,children:Object(q.jsx)(M,{card:e.card,activePlayer:e.activePlayer})})}));var F=function(e){var t=e.rowCards.slice(0,4).map((function(e){return Object(q.jsx)(Y,{card:e},"card_"+e.id)}));return Object(q.jsx)(l.a,{container:!0,children:t})},V=c(88),z=c.n(V),X=c(104),J=function(e){return Object(q.jsx)("div",{className:"card-badge "+e.gem,children:e.qty})},$=c.p+"static/media/catherine_de_medici.413e18c4.jpeg",Q=function(){var e=Object(X.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Z=function(e){Object(i.useEffect)((function(){Q(e).then((function(e){o(e)}))}),[]);var t=Object(i.useState)(),c=Object(m.a)(t,2),n=c[0],o=c[1];return Object(q.jsxs)(l.a,{item:!0,xs:2,container:!0,className:"noble-container",style:{margin:"1em",backgroundImage:"url(".concat(n,")")},children:[Object(q.jsx)(l.a,{item:!0,container:!0,xs:3,sm:2,className:"overlay",direction:"column",justify:"flex-end",children:v.a.map(e.noble.cost,(function(e){return Object(q.jsx)(J,{gem:e.gem,qty:e.qty},"card-badge_"+e.gem)}))}),Object(q.jsx)(l.a,{item:!0,xs:6,sm:8}),Object(q.jsx)(l.a,{item:!0,container:!0,className:"overlay ",xs:3,sm:2,direction:"column",justify:"flex-end",alignContent:"flex-end",children:Object(q.jsx)("span",{style:{fontSize:"2em",color:"white"},children:e.noble.victoryPoints})})]},"noble-container_"+e.id)};var ee=Object(s.b)((function(e){return{nobles:e.game.nobles}}))((function(e){console.log(e);var t=Object(i.useState)(),c=Object(m.a)(t,2),n=c[0],o=c[1];return Object(i.useEffect)((function(){fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=portrait&hasImages=true").then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}),(function(e){console.log(e)}))}),[]),Object(q.jsx)(l.a,{container:!0,children:v.a.map(e.nobles,(function(e){return Object(q.jsx)(Z,{noble:e,nobleImages:n},e.id)}))})}));var te=Object(s.b)((function(e){return{cards:e.game.cards}}))((function(e){var t=Object(i.useState)(),c=Object(m.a)(t,2),n=(c[0],c[1]);return Object(i.useEffect)((function(){fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=nobles").then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){console.log(e)}))}),[]),Object(q.jsxs)(f.a,{container:!0,direction:"column",children:[Object(q.jsx)(ee,{}),Object(q.jsx)(F,{rowCards:v.a.filter(e.cards,{level:3})},"card-row_3"),Object(q.jsx)(F,{rowCards:v.a.filter(e.cards,{level:2})},"card-row_2"),Object(q.jsx)(F,{rowCards:v.a.filter(e.cards,{level:1})},"card-row_1")]})}));var ce=function(){return Object(i.useEffect)((function(){fetch("https://api.boardgameatlas.com/api/search?ids=O0G8z5Wgz1&client_id=lSESTfkllX").then((function(e){return console.log(e)})).then((function(e){return console.log(e)}))})),Object(q.jsx)("div",{})};var ie=function(){return Object(q.jsxs)(f.a,{container:!0,children:[Object(q.jsx)(ce,{}),Object(q.jsx)(f.a,{item:!0,xs:1,children:Object(q.jsx)(P,{})}),Object(q.jsx)(f.a,{item:!0,xs:10,children:Object(q.jsx)(te,{})}),Object(q.jsx)(f.a,{item:!0,xs:1,children:Object(q.jsx)(B,{})})]})};var ne=function(e){return Object(q.jsxs)(f.a,{container:!0,direction:"row",margin:2,children:[Object(q.jsx)(f.a,{item:!0,xs:1}),e.tokens.map((function(t,c){var i=v.a.find(e.gems,(function(e){return e.id===t.id}));return Object(q.jsxs)(f.a,{item:!0,xs:1,container:!0,direction:"row",className:"player-count "+t.gem,style:{marginLeft:30},children:[Object(q.jsx)(f.a,{item:!0,xs:6,children:Object(q.jsx)(J,{gem:i.gem,qty:i.qty})}),Object(q.jsx)(f.a,{item:!0,xs:6,children:Object(q.jsx)(L,{token:t})})]},"token_"+t.id)}))]})};var oe=Object(s.b)((function(e){return{activePlayer:v.a.find(e.game.players,{active:!0})}}))((function(e){return Object(q.jsxs)(f.a,{container:!0,direction:"row",m:4,children:[Object(q.jsx)("h2",{children:e.activePlayer.name}),Object(q.jsx)(ne,{tokens:e.activePlayer.tokens,gems:e.activePlayer.gems})]})}));c(153);var re=Object(s.b)((function(e){return{gameState:e.game.gameState}}))((function(e){return Object(s.c)(),Object(q.jsx)("div",{className:"App",children:"started"!==e.gameState?Object(q.jsx)(O,{}):Object(q.jsxs)(n.a.Fragment,{children:[Object(q.jsx)(ie,{}),Object(q.jsx)(oe,{})]})})})),se=c(105),ae=c(23),me=c(8),le="START_GAME",ye="REMOVE_TOKEN_FROM_BOARD",ge="ADD_TOKEN_TO_BOARD",de="PLAYER_TAKE_CARD",Ee="PLAYER_RESERVE_CARD",ve="END_PLAYER_TURN",je={GREEN:"EMERALD",BLUE:"SAPPHIRE",RED:"RUBY",WHITE:"DIAMOND",BLACK:"ONYX",YELLOW:"GOLD"},ue=function(e,t){return[{id:1,gem:je.RED,qty:e},{id:2,gem:je.BLACK,qty:e},{id:3,gem:je.BLUE,qty:e},{id:4,gem:je.GREEN,qty:e},{id:5,gem:je.WHITE,qty:e},{id:6,gem:je.YELLOW,qty:t}]},qe=[{id:1,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:1},{gem:je.RED,qty:1}]},{id:2,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:2},{gem:je.GREEN,qty:1},{gem:je.RED,qty:1}]},{id:3,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.WHITE,qty:2},{gem:je.BLUE,qty:2},{gem:je.RED,qty:1}]},{id:4,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.GREEN,qty:1},{gem:je.BLACK,qty:1},{gem:je.RED,qty:3}]},{id:5,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.GREEN,qty:2},{gem:je.RED,qty:1}]},{id:6,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.WHITE,qty:2},{gem:je.GREEN,qty:2}]},{id:7,level:1,victoryPoints:0,gem:je.BLACK,cost:[{gem:je.GREEN,qty:3}]},{id:8,level:1,victoryPoints:1,gem:je.BLACK,cost:[{gem:je.BLUE,qty:4}]},{id:9,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.WHITE,qty:1},{gem:je.GREEN,qty:1},{gem:je.RED,qty:1},{gem:je.BLACK,qty:1}]},{id:10,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.WHITE,qty:1},{gem:je.GREEN,qty:1},{gem:je.RED,qty:2},{gem:je.BLACK,qty:1}]},{id:11,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.WHITE,qty:1},{gem:je.GREEN,qty:2},{gem:je.RED,qty:2}]},{id:12,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:3},{gem:je.RED,qty:1}]},{id:13,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.WHITE,qty:1},{gem:je.BLACK,qty:2}]},{id:14,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.GREEN,qty:2},{gem:je.BLACK,qty:2}]},{id:15,level:1,victoryPoints:0,gem:je.BLUE,cost:[{gem:je.BLACK,qty:3}]},{id:16,level:1,victoryPoints:1,gem:je.BLUE,cost:[{gem:je.RED,qty:4}]},{id:17,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:1},{gem:je.RED,qty:1},{gem:je.BLACK,qty:1}]},{id:18,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:2},{gem:je.RED,qty:1},{gem:je.BLACK,qty:1}]},{id:19,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.BLUE,qty:2},{gem:je.GREEN,qty:2},{gem:je.BLACK,qty:1}]},{id:20,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.WHITE,qty:3},{gem:je.BLUE,qty:1},{gem:je.BLACK,qty:1}]},{id:21,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.RED,qty:2},{gem:je.BLACK,qty:1}]},{id:22,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.BLUE,qty:2},{gem:je.BLACK,qty:2}]},{id:23,level:1,victoryPoints:0,gem:je.WHITE,cost:[{gem:je.BLUE,qty:3}]},{id:24,level:1,victoryPoints:1,gem:je.WHITE,cost:[{gem:je.GREEN,qty:4}]},{id:25,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:1},{gem:je.RED,qty:1},{gem:je.BLACK,qty:1}]},{id:26,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:1},{gem:je.RED,qty:1},{gem:je.BLACK,qty:2}]},{id:27,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.BLUE,qty:1},{gem:je.RED,qty:2},{gem:je.BLACK,qty:2}]},{id:28,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:3},{gem:je.GREEN,qty:1}]},{id:29,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.WHITE,qty:2},{gem:je.BLUE,qty:1}]},{id:30,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.RED,qty:2},{gem:je.BLUE,qty:2}]},{id:31,level:1,victoryPoints:0,gem:je.GREEN,cost:[{gem:je.RED,qty:3}]},{id:32,level:1,victoryPoints:1,gem:je.GREEN,cost:[{gem:je.BLACK,qty:4}]},{id:33,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:1},{gem:je.BLACK,qty:1}]},{id:34,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.WHITE,qty:2},{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:1},{gem:je.BLACK,qty:1}]},{id:35,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.WHITE,qty:2},{gem:je.GREEN,qty:1},{gem:je.BLACK,qty:2}]},{id:36,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.WHITE,qty:1},{gem:je.RED,qty:1},{gem:je.BLACK,qty:3}]},{id:37,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.BLUE,qty:2},{gem:je.GREEN,qty:1}]},{id:38,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.WHITE,qty:2},{gem:je.RED,qty:2}]},{id:39,level:1,victoryPoints:0,gem:je.RED,cost:[{gem:je.WHITE,qty:3}]},{id:40,level:1,victoryPoints:1,gem:je.RED,cost:[{gem:je.WHITE,qty:4}]},{id:41,level:2,victoryPoints:1,gem:je.BLACK,cost:[{gem:je.WHITE,qty:3},{gem:je.BLUE,qty:2},{gem:je.GREEN,qty:2}]},{id:42,level:2,victoryPoints:1,gem:je.BLACK,cost:[{gem:je.WHITE,qty:3},{gem:je.GREEN,qty:3},{gem:je.BLACK,qty:2}]},{id:43,level:2,victoryPoints:2,gem:je.BLACK,cost:[{gem:je.BLUE,qty:1},{gem:je.GREEN,qty:4},{gem:je.RED,qty:2}]},{id:44,level:2,victoryPoints:2,gem:je.BLACK,cost:[{gem:je.GREEN,qty:5},{gem:je.RED,qty:3}]},{id:45,level:2,victoryPoints:2,gem:je.BLACK,cost:[{gem:je.WHITE,qty:5}]},{id:46,level:2,victoryPoints:3,gem:je.BLACK,cost:[{gem:je.BLACK,qty:6}]},{id:47,level:2,victoryPoints:1,gem:je.BLUE,cost:[{gem:je.BLUE,qty:2},{gem:je.GREEN,qty:2},{gem:je.RED,qty:3}]},{id:48,level:2,victoryPoints:1,gem:je.BLUE,cost:[{gem:je.BLUE,qty:2},{gem:je.GREEN,qty:3},{gem:je.BLACK,qty:3}]},{id:49,level:2,victoryPoints:2,gem:je.BLUE,cost:[{gem:je.BLUE,qty:3},{gem:je.WHITE,qty:5}]},{id:50,level:2,victoryPoints:2,gem:je.BLUE,cost:[{gem:je.WHITE,qty:2},{gem:je.BLACK,qty:4},{gem:je.RED,qty:1}]},{id:51,level:2,victoryPoints:2,gem:je.BLUE,cost:[{gem:je.BLUE,qty:5}]},{id:52,level:2,victoryPoints:3,gem:je.BLUE,cost:[{gem:je.BLUE,qty:6}]},{id:53,level:2,victoryPoints:1,gem:je.WHITE,cost:[{gem:je.GREEN,qty:3},{gem:je.RED,qty:2},{gem:je.BLACK,qty:2}]},{id:54,level:2,victoryPoints:1,gem:je.WHITE,cost:[{gem:je.WHITE,qty:2},{gem:je.BLUE,qty:3},{gem:je.RED,qty:3}]},{id:55,level:2,victoryPoints:2,gem:je.WHITE,cost:[{gem:je.GREEN,qty:1},{gem:je.BLACK,qty:2},{gem:je.RED,qty:4}]},{id:56,level:2,victoryPoints:2,gem:je.WHITE,cost:[{gem:je.BLACK,qty:3},{gem:je.RED,qty:5}]},{id:57,level:2,victoryPoints:2,gem:je.WHITE,cost:[{gem:je.RED,qty:5}]},{id:58,level:2,victoryPoints:3,gem:je.WHITE,cost:[{gem:je.WHITE,qty:6}]},{id:59,level:2,victoryPoints:1,gem:je.GREEN,cost:[{gem:je.WHITE,qty:3},{gem:je.GREEN,qty:2},{gem:je.RED,qty:3}]},{id:60,level:2,victoryPoints:1,gem:je.GREEN,cost:[{gem:je.WHITE,qty:2},{gem:je.BLUE,qty:3},{gem:je.BLACK,qty:2}]},{id:61,level:2,victoryPoints:2,gem:je.GREEN,cost:[{gem:je.WHITE,qty:4},{gem:je.BLUE,qty:2},{gem:je.BLACK,qty:1}]},{id:62,level:2,victoryPoints:2,gem:je.GREEN,cost:[{gem:je.GREEN,qty:3},{gem:je.BLUE,qty:5}]},{id:63,level:2,victoryPoints:2,gem:je.GREEN,cost:[{gem:je.GREEN,qty:5}]},{id:64,level:2,victoryPoints:3,gem:je.GREEN,cost:[{gem:je.GREEN,qty:6}]},{id:65,level:2,victoryPoints:1,gem:je.RED,cost:[{gem:je.WHITE,qty:2},{gem:je.RED,qty:2},{gem:je.BLACK,qty:3}]},{id:66,level:2,victoryPoints:1,gem:je.RED,cost:[{gem:je.BLUE,qty:3},{gem:je.RED,qty:2},{gem:je.BLACK,qty:3}]},{id:67,level:2,victoryPoints:2,gem:je.RED,cost:[{gem:je.WHITE,qty:1},{gem:je.BLUE,qty:4},{gem:je.GREEN,qty:2}]},{id:68,level:2,victoryPoints:2,gem:je.RED,cost:[{gem:je.WHITE,qty:3},{gem:je.BLACK,qty:5}]},{id:69,level:2,victoryPoints:2,gem:je.RED,cost:[{gem:je.BLACK,qty:5}]},{id:70,level:2,victoryPoints:3,gem:je.RED,cost:[{gem:je.RED,qty:6}]},{id:71,level:3,victoryPoints:3,gem:je.BLACK,cost:[{gem:je.WHITE,qty:3},{gem:je.BLUE,qty:3},{gem:je.GREEN,qty:5},{gem:je.RED,qty:3}]},{id:72,level:3,victoryPoints:4,gem:je.BLACK,cost:[{gem:je.RED,qty:7}]},{id:73,level:3,victoryPoints:4,gem:je.BLACK,cost:[{gem:je.GREEN,qty:3},{gem:je.RED,qty:6},{gem:je.BLACK,qty:3}]},{id:74,level:3,victoryPoints:5,gem:je.BLACK,cost:[{gem:je.RED,qty:7},{gem:je.BLACK,qty:3}]},{id:75,level:3,victoryPoints:3,gem:je.BLUE,cost:[{gem:je.WHITE,qty:3},{gem:je.GREEN,qty:3},{gem:je.RED,qty:3},{gem:je.BLACK,qty:5}]},{id:76,level:3,victoryPoints:4,gem:je.BLUE,cost:[{gem:je.WHITE,qty:7}]},{id:77,level:3,victoryPoints:4,gem:je.BLUE,cost:[{gem:je.WHITE,qty:6},{gem:je.BLUE,qty:3},{gem:je.BLACK,qty:3}]},{id:78,level:3,victoryPoints:5,gem:je.BLUE,cost:[{gem:je.WHITE,qty:7},{gem:je.BLUE,qty:3}]},{id:79,level:3,victoryPoints:3,gem:je.WHITE,cost:[{gem:je.GREEN,qty:3},{gem:je.BLUE,qty:3},{gem:je.RED,qty:5},{gem:je.BLACK,qty:3}]},{id:80,level:3,victoryPoints:4,gem:je.WHITE,cost:[{gem:je.BLACK,qty:7}]},{id:81,level:3,victoryPoints:4,gem:je.WHITE,cost:[{gem:je.WHITE,qty:3},{gem:je.RED,qty:3},{gem:je.BLACK,qty:6}]},{id:82,level:3,victoryPoints:5,gem:je.WHITE,cost:[{gem:je.WHITE,qty:3},{gem:je.BLACK,qty:7}]},{id:83,level:3,victoryPoints:3,gem:je.GREEN,cost:[{gem:je.WHITE,qty:5},{gem:je.BLACK,qty:3},{gem:je.BLUE,qty:3},{gem:je.RED,qty:3}]},{id:84,level:3,victoryPoints:4,gem:je.GREEN,cost:[{gem:je.BLUE,qty:7}]},{id:85,level:3,victoryPoints:4,gem:je.GREEN,cost:[{gem:je.WHITE,qty:3},{gem:je.BLUE,qty:6},{gem:je.GREEN,qty:3}]},{id:86,level:3,victoryPoints:5,gem:je.GREEN,cost:[{gem:je.BLUE,qty:7},{gem:je.GREEN,qty:3}]},{id:87,level:3,victoryPoints:3,gem:je.RED,cost:[{gem:je.WHITE,qty:3},{gem:je.BLUE,qty:5},{gem:je.GREEN,qty:3},{gem:je.BLACK,qty:3}]},{id:88,level:3,victoryPoints:4,gem:je.RED,cost:[{gem:je.GREEN,qty:7}]},{id:89,level:3,victoryPoints:4,gem:je.RED,cost:[{gem:je.BLUE,qty:3},{gem:je.GREEN,qty:6},{gem:je.RED,qty:3}]},{id:90,level:3,victoryPoints:5,gem:je.RED,cost:[{gem:je.GREEN,qty:7},{gem:je.RED,qty:3}]}],be=[{id:1,victoryPoints:3,imageCode:"CAT_MEDICI",cost:[{gem:je.GREEN,qty:3},{gem:je.BLUE,qty:3},{gem:je.RED,qty:3}]},{id:2,victoryPoints:3,imageCode:"ELI_AUSTRIA",cost:[{gem:je.BLUE,qty:3},{gem:je.BLACK,qty:3},{gem:je.WHITE,qty:3}]},{id:3,victoryPoints:3,imageCode:"ISA_CASTILE",cost:[{gem:je.BLACK,qty:4},{gem:je.WHITE,qty:4}]},{id:4,victoryPoints:3,imageCode:"NIC_MACHIA",cost:[{gem:je.BLUE,qty:4},{gem:je.WHITE,qty:4}]},{id:5,victoryPoints:3,imageCode:"SUL_MAGNI",cost:[{gem:je.BLUE,qty:4},{gem:je.GREEN,qty:4}]},{id:6,victoryPoints:3,imageCode:"ANN_BRITAN",cost:[{gem:je.GREEN,qty:3},{gem:je.BLUE,qty:3},{gem:je.WHITE,qty:3}]},{id:7,victoryPoints:3,imageCode:"CHARLES_V",cost:[{gem:je.BLACK,qty:3},{gem:je.RED,qty:3},{gem:je.WHITE,qty:3}]},{id:8,victoryPoints:3,imageCode:"FRAN_FRANCE",cost:[{gem:je.BLACK,qty:3},{gem:je.RED,qty:3},{gem:je.GREEN,qty:3}]},{id:9,victoryPoints:3,imageCode:"HENRY_VIII",cost:[{gem:je.BLACK,qty:4},{gem:je.RED,qty:4}]},{id:10,victoryPoints:3,imageCode:"MARY_STUART",cost:[{gem:je.GREEN,qty:4},{gem:je.RED,qty:4}]}],Oe={tokens:ue(7,5),gameState:"initializing"};var Re=Object(ae.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:var c=S(t.players.length),i=v.a.map(t.players,(function(e,t){return v.a.assign(e,{id:t,name:e.name,type:e.type,active:c===t,tokens:ue(0,0),gems:ue(0,0),reserved:[],victoryPoints:0})}));return Object(me.a)(Object(me.a)({},e),{},{gameState:"started",players:i,cards:w(qe),nobles:w(be).slice(0,4)});case ye:return Object(me.a)(Object(me.a)({},e),{},{tokens:e.tokens.map((function(e,c){return t.chips.includes(e.id)?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty-1}):e})),players:e.players.map((function(e,c){return e.active?Object(me.a)(Object(me.a)({},e),{},{tokens:e.tokens.map((function(e,c){return t.chips.includes(e.id)?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty+1}):e}))}):e}))});case ge:var n=v.a.findIndex(e.tokens,(function(e){return e.id===t.id}));return Object(me.a)(Object(me.a)({},e),{},{tokens:e.tokens.map((function(e,t){return t===n?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty+1}):e})),players:e.players.map((function(e,t){return e.active?Object(me.a)(Object(me.a)({},e),{},{tokens:e.tokens.map((function(e,t){return t===n?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty-1}):e}))}):e}))});case de:var o=v.a.findIndex(e.cards,(function(e){return e.id===t.card.id})),r=v.a.findIndex(e.tokens,(function(e){return e.gem===t.card.gem}));console.log(t.card);var s=Object(a.a)(e.cards);return s.splice(o,1),Object(me.a)(Object(me.a)({},e),{},{cards:s,players:e.players.map((function(e,c){return e.active?Object(me.a)(Object(me.a)({},e),{},{gems:e.gems.map((function(e,t){return t===r?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty+1}):e})),victoryPoints:e.victoryPoints+t.card.victoryPoints}):e}))});case Ee:var m=v.a.findIndex(e.tokens,(function(e){return"GOLD"===e.gem})),l=v.a.findIndex(e.cards,(function(e){return e.id===t.card.id})),y=Object(a.a)(e.cards);return y.splice(l,1),Object(me.a)(Object(me.a)({},e),{},{cards:y,tokens:e.tokens.map((function(e,t){return t===m?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty-1}):e})),players:e.players.map((function(e,c){return e.active?Object(me.a)(Object(me.a)({},e),{},{reserved:[].concat(Object(a.a)(e.reserved),[t.card]),tokens:e.tokens.map((function(e,t){return t===m?Object(me.a)(Object(me.a)({},e),{},{qty:e.qty+1}):e}))}):e}))});case ve:console.log("ending player turn");var g=v.a.findIndex(e.players,(function(e){return e.active})),d=g+1;return e.players[d]||(d=0),console.log(d),Object(me.a)(Object(me.a)({},e),{},{players:e.players.map((function(e,t){return Object(me.a)(Object(me.a)({},e),{},{active:t===d})}))});default:return e}}}),fe=Object(se.a)({reducer:Re,devTools:!1});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(q.jsx)(n.a.StrictMode,{children:Object(q.jsx)(s.a,{store:fe,children:Object(q.jsx)(re,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[154,1,2]]]);
//# sourceMappingURL=main.9aa44858.chunk.js.map