(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r,a,o,i,c,l=n(0),s=n.n(l),u=n(10),m=n.n(u),d=n(3),f=n(4),b=n(7),p=n(5),h=n(6),g=n(9),j=n(1),y=(n(22),n(2));function v(){a=document.getElementById("navbar").offsetTop,o=document.getElementById("about").offsetTop,i=document.getElementById("projects").offsetTop,c=document.getElementById("contact").offsetTop}var O=function(e,t,n){var r;return function(){var a=this,o=arguments,i=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(a,o)},t),i&&e.apply(a,o)}}(function(){var e=this.state;r!==document.documentElement.scrollHeight&&(r=document.documentElement.scrollHeight,v()),window.pageYOffset>=o-50?(e.navPosition="fixed",e.aboutHeight="65rem",e.aboutPadding="15rem 5rem 10rem 5rem"):(e.navPosition="static",e.aboutHeight="60rem",e.aboutPadding="10rem 5rem 10rem 5rem"),window.pageYOffset<=o-153?(e.styles.home={color:"rgba(255,50,50,.9)"},e.styles.about={},e.styles.projects={},e.styles.contact={}):window.pageYOffset>=c-420?(e.styles.home={},e.styles.about={},e.styles.projects={},e.styles.contact={color:"rgba(255,50,50,.9)"}):window.pageYOffset>=i-120?(e.styles.home={},e.styles.about={},e.styles.projects={color:"rgba(255,50,50,.9)"},e.styles.contact={}):window.pageYOffset>=a-120&&(e.styles.home={},e.styles.about={color:"rgba(255,50,50,.9)"},e.styles.projects={},e.styles.projects={}),this.setState(e)},5),E=n(8),w=n.n(E);function k(){var e=Object(j.a)(["\n  font-size: 5rem;\n  font-weight: 600;\n  color: rgb(249,249,249);\n"]);return k=function(){return e},e}function P(){var e=Object(j.a)(["\n  display: inline-block;\n  position: absolute;\n  top: 23%;\n  left: 50%;\n  transform: translateX(-50%);\n  letter-spacing: .3rem;\n  color: rgb(240,240,240);\n  font-family: 'Play', sans-serif;\n  font-size: 4.7rem;\n  border: 1rem solid rgb(245,245,245);\n  padding: 2rem 4rem 2.5rem 4rem;\n  background-color: transparent;\n  font-weight: 10;\n"]);return P=function(){return e},e}function x(){var e=Object(j.a)(["\n  width: 285rem;\n  height: 85rem;\n  background: rgba(255,50,50,.9);\n  border-width: 15rem 0 15rem 0;\n  border-style: solid;\n  opacity: .85;\n  border-color: rgb(25,25,25);\n  position: absolute;\n  top: 5rem;\n  left: -100rem;\n  animation: "," 120s linear infinite;\n"]);return x=function(){return e},e}function T(){var e=Object(j.a)(["\n  background-color: rgb(25,25,25);\n  height: 100vh\n  position: relative;\n  overflow: hidden;\n  border-width: 5rem 0rem 5rem 0rem;\n  border-style: solid;\n  border-color: rgb(245,245,245);\n"]);return T=function(){return e},e}function H(){var e=Object(j.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return H=function(){return e},e}var C=Object(y.b)(H()),B=y.a.header(T()),I=y.a.div(x(),C),S=y.a.p(P()),z=y.a.span(k()),Y=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement(B,{id:"header"},s.a.createElement(I,null),s.a.createElement(S,null,"Hi, I'm ",s.a.createElement(z,null,"Javier Mach\xedn"),".",s.a.createElement("br",null),"Full-stack web developer."),s.a.createElement(w.a,{href:"#about",class:"header-anchor"},"Learn more about me"))}}]),t}(l.Component);function J(){var e=Object(j.a)(["\n      text-transform: uppercase;\n      background-color: rgb(25,25,25);\n      font-family: sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: ",";\n      top: 0;\n      width: 100%;\n      height: 5rem;\n    "]);return J=function(){return e},e}var M=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=y.a.nav(J(),this.props.navPosition);return s.a.createElement(e,{id:"navbar"},s.a.createElement(w.a,{style:this.props.styles.home,offset:"50",href:"#header"},"HOME"),s.a.createElement(w.a,{style:this.props.styles.about,offset:"50",href:"#about"},"ABOUT"),s.a.createElement(w.a,{style:this.props.styles.projects,offset:"50",href:"#projects"},"PROJECTS"),s.a.createElement(w.a,{style:this.props.styles.contact,offset:"50",href:"#contact"},"CONTACT"))}}]),t}(l.Component);function q(){var e=Object(j.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background-color: lightblue;\n      padding: ",";\n      height: ",";\n    "]);return q=function(){return e},e}function _(){var e=Object(j.a)(["\n  text-transform: uppercase;\n  color: green;\n  padding: 3rem 2rem;\n  text-align: left;\n"]);return _=function(){return e},e}function A(){var e=Object(j.a)(["\n  padding: 3rem 2rem;\n"]);return A=function(){return e},e}var D=y.a.div(A()),L=y.a.p(_()),W=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=y.a.section(q(),this.props.aboutPadding,this.props.aboutHeight);return s.a.createElement(e,{id:"about"},s.a.createElement(D,null,"img container"),s.a.createElement(L,null,"aboutme text"))}}]),t}(l.Component);function X(){var e=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: lightgreen;\n  border: 1px solid black;\n"]);return X=function(){return e},e}function F(){var e=Object(j.a)(["\n  grid-area: det;\n  width: 100%;\n  height: 100%;\n"]);return F=function(){return e},e}function N(){var e=Object(j.a)(['\n  display: grid;\n  grid-template-areas:\n    "det det det"\n    "det det det"\n    "1fr 1fr 1fr"\n    "1fr 1fr 1fr";\n  align-items: center;\n  background-color: pink;\n  width: 100%;\n  height: 85rem;\n  margin: 0 auto;\n  padding: 7rem 35rem;\n']);return N=function(){return e},e}var R=y.a.section(N()),U=y.a.div(F()),$=y.a.div(X()),G=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement(R,{id:"projects"},s.a.createElement(U,null,"Project Detailed"),s.a.createElement($,null,"Project"),s.a.createElement($,null,"Project"),s.a.createElement($,null,"Project"),s.a.createElement($,null,"Project"),s.a.createElement($,null,"Project"),s.a.createElement($,null,"Project"))}}]),t}(l.Component);function K(){var e=Object(j.a)(["\n  display: block;\n  border: 1px solid black;\n  padding: 1rem 2rem;\n  margin: 1rem auto;\n"]);return K=function(){return e},e}function Q(){var e=Object(j.a)(["\n  padding: 1rem 2rem;\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: 2rem;\n  margin-top: 1rem;\n  width: 32rem;\n"]);return Q=function(){return e},e}function V(){var e=Object(j.a)(["\n  padding: 1rem 2rem;\n  display: block;\n  font-family: sans-serif;\n  font-size: 2rem;\n  margin-top: 1rem;\n  width: 32rem;\n"]);return V=function(){return e},e}function Z(){var e=Object(j.a)(["\n  position: absolute;\n  background-color: rgb(250,250,250);\n  padding: 5rem 10rem;\n  top: 5rem;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return Z=function(){return e},e}function ee(){var e=Object(j.a)(["\n  position: relative;\n  text-transform: uppercase;\n  background-color: rgb(20,20,20);\n  color: rgb(250,250,250);\n  height: 50rem;\n"]);return ee=function(){return e},e}var te=y.a.section(ee()),ne=y.a.form(Z()),re=y.a.input(V()),ae=y.a.textarea(Q()),oe=y.a.input(K()),ie=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement(te,{id:"contact"},s.a.createElement(ne,{action:"https://formspree.io/javier_machin_acosta@hotmail.com",method:"POST"},s.a.createElement(re,{required:!0,placeholder:"Enter your name",type:"text",name:"name"}),s.a.createElement(re,{required:!0,placeholder:"Enter your email",type:"email",name:"_replyto"}),s.a.createElement(ae,{rows:"4",cols:"21",required:!0,placeholder:"Message",name:"message"}),s.a.createElement(oe,{type:"submit",value:"Send"})))}}]),t}(l.Component);function ce(){var e=Object(j.a)(["\n  text-align: center;\n  color: blue;\n  font-size: 3rem;\n  background-color: palevioletred;\n"]);return ce=function(){return e},e}var le=y.a.div(ce()),se=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={navPosition:"static",aboutHeight:"60rem",aboutPadding:"10rem 5rem 10rem 5rem",styles:{home:{color:"rgba(255,50,50,.9)"},about:{},projects:{},contact:{}}},n.handleScroll=O.bind(Object(g.a)(Object(g.a)(n))),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;v(),window.addEventListener("scroll",function(){e.handleScroll()})}},{key:"render",value:function(){return s.a.createElement(le,null,s.a.createElement(Y,null),s.a.createElement(M,{navPosition:this.state.navPosition,styles:this.state.styles}),s.a.createElement(W,{aboutHeight:this.state.aboutHeight,aboutPadding:this.state.aboutPadding}),s.a.createElement(G,null),s.a.createElement(ie,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(s.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.db6c8c1d.chunk.js.map