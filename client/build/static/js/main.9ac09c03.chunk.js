(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,a,t){e.exports=t(72)},46:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(10),c=t(11),l=t(13),r=t(12),s=t(0),m=t.n(s),i=t(16),o=t(3),u=t(33),d=(t(46),t(73)),E=t(76),p=t(74),v=function(){return m.a.createElement(E.a,{className:"navbar navbar-expand-lg navbar-dark bg-dark"},m.a.createElement(d.a,null,m.a.createElement("a",{className:"navbar-brand",href:"#"},"Online Funko Pop"),m.a.createElement(p.a,{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},m.a.createElement("span",{className:"navbar-toggler-icon"})),m.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},m.a.createElement("ul",{className:"navbar-nav"},m.a.createElement("li",{className:"nav-item active"},m.a.createElement("a",{className:"nav-link",href:"#"},"Home ",m.a.createElement("span",{className:"sr-only"},"(current)"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{className:"nav-link",href:"#"},"Current Order")),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{className:"nav-link",href:"#"},"Order Status"))))))},b=t(15),f=t.n(b),N=t(75),g=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).state={products:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/products").then((function(a){var t=a.data;e.setState({products:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.products;return m.a.createElement(d.a,null,m.a.createElement("h3",null,"List of products"),m.a.createElement(N.a,null,e?e.map((function(e,a){return m.a.createElement("div",{className:"col-4",key:a},m.a.createElement("div",{className:"card"},m.a.createElement("img",{className:"card-img product-img",src:e.imgUrl,alt:e.name}),m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},e.name),m.a.createElement("p",{className:"card-text"},e.description),m.a.createElement("div",{className:"options d-flex flex-fill"},m.a.createElement("select",{className:"custom-select mr-1"},m.a.createElement("option",{defaultChecked:!0},"Size"),m.a.createElement("option",{value:"1"},"Small"),m.a.createElement("option",{value:"2"},"Medium"),m.a.createElement("option",{value:"3"},"Large"))),m.a.createElement("div",{className:"buy d-flex justify-content-between align-items-center"},m.a.createElement("div",{className:"price text-success"},m.a.createElement("h5",{className:"mt-4"},e.price)),m.a.createElement(i.b,{to:"/productInfo/".concat(e.urlId)},m.a.createElement(p.a,{className:"btn btn-dark mt-3"},m.a.createElement("i",{className:"fas fa-shopping-cart"})," Create Order"))))))})):null))}}]),t}(s.Component),h=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this)).state={product:[],id:e.match.params.id},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/products/".concat(this.state.id)).then((function(a){var t=a.data;e.setState({product:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.product;return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement("br",null),m.a.createElement("div",{className:"card mb-3"},m.a.createElement("div",{className:"row no-gutters"},m.a.createElement("div",{className:"col-4"},m.a.createElement("img",{src:e.imgUrl,className:"card-img",alt:e.name})),m.a.createElement("div",{className:"card-body d-flex flex-column"},m.a.createElement("h5",{className:"card-title"},e.name),m.a.createElement("p",{className:"card-text"},e.description),m.a.createElement("p",{className:"card-text"},m.a.createElement("small",{className:"text-muted"},e.price)),m.a.createElement(p.a,{className:"align-self-end mt-auto btn btn-lg btn-block btn-primary"},"Test"))))))}}]),t}(s.Component),k=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).state={name:"React"},e}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(i.a,null,m.a.createElement(s.Fragment,null,m.a.createElement(v,null),m.a.createElement(o.a,{exact:!0,path:"/",component:g}),m.a.createElement(o.a,{exact:!0,path:"/productInfo/:id",component:h}),m.a.createElement(d.a,null,m.a.createElement(o.c,null))))}}]),t}(s.Component);Object(u.render)(m.a.createElement(k,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9ac09c03.chunk.js.map