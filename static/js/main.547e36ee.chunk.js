(this.webpackJsonpToDo=this.webpackJsonpToDo||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),A=n.n(a),l=n(7),o=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(2),s=n(3),c=n(1),i=n(4),U=n(5),p=n(8),m=n.n(p),u=function(e){Object(U.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).addEntry=e.addEntry.bind(Object(c.a)(e)),e}return Object(s.a)(n,[{key:"addEntry",value:function(e){var t=this;return A.a.createElement("li",{key:e.id},A.a.createElement("p",{className:"text"},e.string),A.a.createElement("p",{className:"date"},e.DATE),A.a.createElement("p",{className:"del",onClick:function(){return t.props.remove(e.id)}},"DEL"))}},{key:"render",value:function(){var e=this.props.entry.map(this.addEntry);return A.a.createElement("ul",{className:"list"},e)}}]),n}(A.a.Component),v=0,f=function(e){Object(U.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={entries:[]},e.addTask=e.addTask.bind(Object(c.a)(e)),e.remove=e.remove.bind(Object(c.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("entries"));return this.setState({entries:e}),A.a.createElement(u,{entry:e,remove:this.remove})}},{key:"addTask",value:function(e){var t=this,n=this._inputElement.value,a=(new Date).toLocaleDateString("es-CL"),A={string:n,id:++v,DATE:a};""!==n?(this.setState((function(e){return{entries:e.entries.concat(A)}}),(function(){localStorage.setItem("entries",JSON.stringify(t.state.entries))})),this._inputElement.value="",e.preventDefault()):alert("Please enter a Task to do")}},{key:"remove",value:function(e){var t=this;this.setState({entries:this.state.entries.filter((function(t){return e!==t.id}))},(function(){localStorage.setItem("entries",JSON.stringify(t.state.entries))}))}},{key:"render",value:function(){var e=this;return A.a.createElement("div",null,A.a.createElement("div",{id:"logo"},A.a.createElement("img",{src:m.a,alt:"To-Do Logo"}),A.a.createElement("p",{id:"head"},"Make your To-Do List!")),A.a.createElement("div",{className:"addTask"},A.a.createElement("form",{onSubmit:this.addTask},A.a.createElement("input",{type:"text",placeholder:"What is your task?",ref:function(t){e._inputElement=t}}),A.a.createElement("button",{type:"submit",className:"add"},"ADD"))),A.a.createElement(u,{entry:this.state.entries,remove:this.remove}))}}]),n}(A.a.Component);o.a.render(A.a.createElement("div",null,A.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t){e.exports="data:image/png;base64,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"},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.547e36ee.chunk.js.map