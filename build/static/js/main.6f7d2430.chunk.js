(this.webpackJsonpson=this.webpackJsonpson||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Geralt of Rivia","image":"./imgs/geralt.jpg"},{"id":2,"name":"Ciri","image":"./imgs/ciri.jpg"},{"id":3,"name":"Yennefer of Vengeburg","image":"./imgs/yen.jpg"},{"id":4,"name":"Triss Merigold","image":"./imgs/triss.jpg"},{"id":5,"name":"Dandelion","image":"./imgs/dandelion.jpg"},{"id":6,"name":"Moussack","image":"./imgs/moussack.jpg"},{"id":7,"name":"Zoltan Chivay","image":"./imgs/zoltan.jpg"},{"id":8,"name":"Lambert","image":"./imgs/lambert.jpg"},{"id":9,"name":"Vessemir","image":"./imgs/vessemir.jpg"},{"id":10,"name":"Gaunter O\'Dimm","image":"./imgs/gaunter.jpg"}]')},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),c=a.n(r),s=(a(14),a(3)),o=a(4),m=a(7),l=a(5),u=a(8);a(15);var g=function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark",id:"navi"},i.a.createElement("img",{src:"./imgs/icon.png",className:"photo"}),i.a.createElement("h1",{id:"thePhoto"},"Sailor Moon"))};a(16);var d=function(e){return i.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":""," theContainer")},e))};a(17);var f=function(e){return i.a.createElement("div",{className:"titleDiv"},i.a.createElement("div",{className:"text-center"},i.a.createElement("p",null,e.message),i.a.createElement("span",{className:"theTitle score"},"Current Score: ",e.score," || Top Score: ",e.topscore)))};a(18);var h=function(e){return i.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":""," text-center theRow")},e))};a(19);var p=function(e){return i.a.createElement("img",{onClick:function(){return e.imageClick(e.id,e.name,e.clicked)},className:"rounded imageBorder",src:e.image,alt:e.name,key:e.id})};var v=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return i.a.createElement("div",Object.assign({className:t},e))},E=a(6),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={witchercard:E,message:"Click a Character to Start",score:0,topScore:0},a.shuffleImages=function(){console.log(a.state.witchercard),a.setState({witchercard:a.state.witchercard.sort((function(){return Math.random()-.5}))})},a.imageClick=function(e,t,n){var i=a.state.witchercard;i.forEach((function(t){t.id===e&&t.clicked?(i.forEach((function(e){e.clicked=!1})),a.setState({message:"Sorry - You Already Clicked That witcher. Try Again!",score:0}),console.log("lost")):t.id!==e||t.clicked||(t.clicked=!0,a.setState({message:"Great Choice!",score:a.state.score+1,topScore:a.state.score+1>a.state.topScore?a.state.score+1:a.state.topScore}))})),a.state.score+1===i.length&&a.setState({message:"You won! Play again!",score:0,topScore:0}),a.shuffleImages()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.shuffleImages()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,null),i.a.createElement(d,null,i.a.createElement(f,{message:this.state.message,score:this.state.score,topscore:this.state.topScore}),i.a.createElement(h,null,this.state.witchercard.map((function(t){return i.a.createElement(v,{size:"sm"},i.a.createElement(p,{id:t.id,key:t.id,name:t.name,image:t.image,shuffle:e.shuffleImages,imageClick:e.imageClick}))})))))}}]),t}(n.Component);c.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6f7d2430.chunk.js.map