(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),s=t.n(c),i=t(1),m=t(2),r=t(5),o=t(3),u=t(4),h=(t(15),function(e){function a(){return Object(i.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#skills"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home"))))}}]),a}(n.Component)),d=(t(16),function(e){function a(){return Object(i.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"header",id:"home"},l.a.createElement("div",{className:"row"},l.a.createElement("img",{className:"head-img",src:"./images/logo1.png",alt:"header-logo"}),l.a.createElement(h,null),l.a.createElement("div",{className:"block_name_job"},l.a.createElement("p",{className:"name"},"Anastasiia Kokhan"),l.a.createElement("p",{className:"job"},"Front-end Developer"))))}}]),a}(n.Component)),p=(t(17),function(e){function a(){return Object(i.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"about",id:"about"},l.a.createElement("div",{className:"block"},l.a.createElement("p",{className:"section-name"},"ABOUT"),l.a.createElement("div",{className:"col-40-right"},l.a.createElement("h2",{className:"about-headline"},"Goals"),l.a.createElement("p",{className:"about-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at urna interdum maximus. Aenean sit amet tempus nibh, id placerat leo. Suspendisse in urna vel mi semper tempor vel vitae odio. Phasellus consequat erat lobortis metus pulvinar, eu pretium orci blandit. Sed nec turpis ipsum. Quisque tempus mi vitae ligula consectetur hendrerit ut a leo. Quisque euismod a ligula ac molestie. Maecenas eget ipsum justo. Maecenas eget porta ipsum, in placerat nisl.")),l.a.createElement("div",{className:"col-15"},l.a.createElement("img",{className:"about-img",src:"./images/about.png",alt:"about-img"})),l.a.createElement("div",{className:"col-40"},l.a.createElement("h2",{className:"about-headline"},"Dreams"),l.a.createElement("p",{className:"about-text-right"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at urna interdum maximus. Aenean sit amet tempus nibh, id placerat leo. Suspendisse in urna vel mi semper tempor vel vitae odio. Phasellus consequat erat lobortis metus pulvinar, eu pretium orci blandit. Sed nec turpis ipsum. Quisque tempus mi vitae ligula consectetur hendrerit ut a leo. Quisque euismod a ligula ac molestie. Maecenas eget ipsum justo. Maecenas eget porta ipsum, in placerat nisl."))))}}]),a}(n.Component)),b=(t(18),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).items=[{name:"HTML5",level:8},{name:"CSS3",level:5},{name:"JavaScript",level:10},{name:"ReactJS",level:8},{name:"AngularJS",level:8}],t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"skills",id:"skills"},l.a.createElement("div",{className:"block"},l.a.createElement("p",{className:"section-name"},"SKILLS"),l.a.createElement("ul",{className:"col-50"},this.items.map(function(e){var a=e.name,t=e.level;return l.a.createElement("li",{className:"skills-name",key:a},l.a.createElement("label",null,a),l.a.createElement("span",{className:"circle-wrapper"},Array.from({length:10}).map(function(e,a){return l.a.createElement("div",{className:"circle".concat(t>a?" done":"")})})))}))))}}]),a}(n.Component)),E=t(6),g=(t(19),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).state={name:"",email:"",message:""},t.handleNameChange=t.handleNameChange.bind(Object(E.a)(Object(E.a)(t))),t.handleEmailChange=t.handleEmailChange.bind(Object(E.a)(Object(E.a)(t))),t.handleMassegeChange=t.handleMassegeChange.bind(Object(E.a)(Object(E.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(Object(E.a)(t))),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("Name value is:",this.state.name),console.log("Email value is:",this.state.email),console.log("Massege value is:",this.state.massege)}},{key:"handleNameChange",value:function(e){console.log("name was changed",e.target.value),this.setState({name:e.target.value})}},{key:"handleEmailChange",value:function(e){console.log("email was changed",e.target.value),this.setState({email:e.target.value})}},{key:"handleMassegeChange",value:function(e){console.log("massege was changed",e.target.value),this.setState({massege:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"contact",id:"contact"},l.a.createElement("div",{className:"block"},l.a.createElement("p",{className:"section-name"},"CONTACT"),l.a.createElement("div",{className:"col-40"},l.a.createElement("p",{className:"contact-headline"},"Phone number:"),l.a.createElement("p",{className:"contact-text"},"+38093-604-2747"),l.a.createElement("p",{className:"contact-headline"},"Email:"),l.a.createElement("p",{className:"contact-text"},"Kokhan.a25@gmail.com"),l.a.createElement("p",{className:"contact-headline"},"Skype:"),l.a.createElement("p",{className:"contact-text"},"+380936042747")),l.a.createElement("div",{className:"col-60"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{className:"in-name",type:"text",name:"Name",placeholder:"Name",value:this.state.name,onChange:this.handleNameChange}),l.a.createElement("br",null),l.a.createElement("input",{className:"in-email",type:"email",name:"Email",placeholder:"Email",value:this.state.email,onChange:this.handleEmailChange}),l.a.createElement("br",null),l.a.createElement("textarea",{className:"in-text",placeholder:"Send a message",value:this.state.massege,onChange:this.handleMassegeChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"in-button"},"SEND")))))}}]),a}(n.Component)),v=function(e){function a(){return Object(i.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(p,null),l.a.createElement("hr",null),l.a.createElement(b,null),l.a.createElement("hr",null),l.a.createElement(g,null))}}]),a}(n.Component),N=(t(20),function(e){function a(){return Object(i.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"foot-text"},l.a.createElement("b",null,"Mobile: ")," +38093-604-2747"),l.a.createElement("p",{className:"foot-text"},l.a.createElement("b",null,"Email: ")," Kokhan.a25@gmail.com"),l.a.createElement("p",{className:"foot-text"},l.a.createElement("b",null,"Skype: ")," +380936042747"),l.a.createElement("img",{className:"foot-img",src:"./images/logo.png",alt:"footer-logo"}))}}]),a}(n.Component)),f=(t(21),t(22),function(e){function a(){return Object(i.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement(N,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2d9d43e3.chunk.js.map