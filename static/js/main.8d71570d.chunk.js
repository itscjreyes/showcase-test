(this["webpackJsonpindustry-showcase"]=this["webpackJsonpindustry-showcase"]||[]).push([[0],{17:function(e,t,a){},24:function(e,t,a){e.exports=a(58)},29:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),s=(a(29),a(18)),o=a(19),i=a(3),u=a(22),d=a(23),m=a(20),h=a.n(m),p=(a(47),function(){return r.a.createElement("section",{className:"banner"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("a",{href:"https://crowdriff.com",className:"logo"},r.a.createElement("img",{src:"https://crowdriffstg.wpengine.com/wp-content/uploads/crowdriff-logo-all-white.svg",alt:"CrowdRiff"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("h1",null,"Travel & Tourism Industry Response Community"),r.a.createElement("p",null,"On this page, you can find a curated stream of content to equip you with the insights and knowledge on what other travel & tourism brands are doing to effectively respond to this current pandemic."))))}),f=a(6),g=a(5),v=(a(17),{option:function(e,t){return Object(f.a)({},e,{color:t.isSelected||t.isFocused?"#10b5f5":"#77848A",background:t.isSelected||t.isFocused?"#E7F8FE":"transparent",padding:"15px"})}}),E=[{value:"",label:"All Industries"},{value:"Destinations",label:"Destinations"},{value:"Attractions & Museums",label:"Attractions & Museums"}],y=function(e){var t=e.industry,a=e.handleChange;return r.a.createElement("div",{className:"filter-select industry"},r.a.createElement(g.a,{value:t,options:E,onChange:a,isSearchable:!1,styles:v,placeholder:"Industry"}))},w={option:function(e,t){return Object(f.a)({},e,{color:t.isSelected||t.isFocused?"#10b5f5":"#77848A",background:t.isSelected||t.isFocused?"#E7F8FE":"transparent",padding:"15px"})}},b=[{value:"",label:"All Types"},{value:"Example",label:"Example"},{value:"Blog",label:"Blog"},{value:"Webinar",label:"Webinar"}],N=function(e){var t=e.type,a=e.handleChange;return r.a.createElement("div",{className:"filter-select type"},r.a.createElement(g.a,{value:t,options:b,onChange:a,isSearchable:!1,styles:w,placeholder:"Type"}))},C=(a(50),function(e){var t=e.type,a=e.industry,n=e.handleTypeChange,l=e.handleIndustryChange;return r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"container"},r.a.createElement(N,{value:t,handleChange:n}),r.a.createElement(y,{value:a,handleChange:l})))}),k=(a(51),function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"}))});a(52);var S=function(e){var t=e.key,a=e.title,n=e.description,l=e.image,c=e.content,s=e.link,o={backgroundImage:"url("+l+")"};return r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"card",key:t},r.a.createElement("div",{className:"img-wrapper",style:o}),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"title-description"},r.a.createElement("h3",null,a),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"date-tag"},r.a.createElement("span",{className:"date"},"March 30, 2020"),r.a.createElement("span",{className:"tag"},c))))},I=(a(53),function(e){return console.log(e.size),r.a.createElement("section",{className:"listing-wrapper"},r.a.createElement("div",{className:"container"},e.data.slice(0,e.size).map((function(e,t){return r.a.createElement(S,{key:t,title:e.title.rendered,description:e.acf.description,image:e.acf.image,content:e.acf.content,link:e.acf.link})}))))}),j=(a(54),function(e){var t=e.handleClick;return r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"more-posts-btn",onClick:t},"Load More Posts"))}),O=(a(55),function(){return r.a.createElement("section",{className:"no-results"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Sorry, there are no matches. Please try again.")))}),F=(a(56),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://crowdriff.com",className:"logo"},r.a.createElement("img",{src:"https://crowdriffstg.wpengine.com/wp-content/uploads/crowdriff-logo-sm.png",alt:"CrowdRiff"})),r.a.createElement("p",null,"\xa92020 CrowdRiff Inc.")))}),M=(a(57),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:[],type:"",industry:"",isLoaded:!1,pageSize:4},e.handleTypeChange=e.handleTypeChange.bind(Object(i.a)(e)),e.handleIndustryChange=e.handleIndustryChange.bind(Object(i.a)(e)),e.handleMorePosts=e.handleMorePosts.bind(Object(i.a)(e)),e.fetchPosts=e.fetchPosts.bind(Object(i.a)(e)),e}return Object(o.a)(a,[{key:"handleTypeChange",value:function(e){this.setState({type:e.value,pageSize:4})}},{key:"handleIndustryChange",value:function(e){this.setState({industry:e.value,pageSize:4})}},{key:"handleMorePosts",value:function(){this.setState((function(e){return{pageSize:e.pageSize+4}}))}},{key:"fetchPosts",value:function(){var e=this;h.a.get("https://crowdriffstg.wpengine.com/wp-json/wp/v2/showcase/").then((function(t){return e.setState({data:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"sortData",value:function(){this.state.data.sort((function(e,t){return parseFloat(t.acf.date)-parseFloat(e.acf.date)}))}},{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.type,n=e.industry,l=e.isLoaded,c=e.pageSize;this.sortData(),console.log(t);var s=t.slice();return a&&(s=s.filter((function(e){return e.acf.content.includes(a)}))),n&&(s=s.filter((function(e){return e.acf.industry.includes(n)}))),r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(C,{type:a,industry:n,handleTypeChange:this.handleTypeChange,handleIndustryChange:this.handleIndustryChange}),!l&&r.a.createElement(k,null),s.length>0&&l?r.a.createElement("div",null,r.a.createElement(I,{data:s,size:c}),r.a.createElement(j,{handleClick:this.handleMorePosts})):r.a.createElement(O,null),r.a.createElement(F,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.8d71570d.chunk.js.map