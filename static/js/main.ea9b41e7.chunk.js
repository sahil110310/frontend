(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},105:function(e,t,a){},130:function(e,t){},174:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(22),c=a.n(o),s=(a(75),a(4)),r=a(5),i=a(3),m=a(7),u=a(8),d=a(6),h=a.n(d),g=a(16),b=a(1);a(92);function p(){var e=new b.a,t=e.get("refresh_token");if(null==e.get("username")){var a={grant_type:"refresh_token",refresh_token:t,client_id:"47debda654e625f0c1b7857677c46f3a",client_secret:"feb3726cf8c1934b61d29c23dcb2283b"};h.a.post("https://api.codechef.com/oauth/token",a,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){e.set("username",t.data.result.data.access_token,{path:"/",expires:new Date(Date.now()+36e5)}),e.set("refresh_token",t.data.result.data.refresh_token,{path:"/",expires:new Date(Date.now()+864e6)})})).catch((function(e){console.log(e.message)}))}}var E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).setCookie=function(){var e=new b.a;console.log(e.get("visited")),console.log(n.state.clicked),e.set("username",n.state.token,{path:"/"}),console.log(n.state.clicked),n.setState({clicked:"AAA"})},n.givecode=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,a,n){e[a]=n}));return e},n.submitHandler=function(){var e=new b.a;console.log(n.state.clicked),e.set("visited","YES",{path:"/"}),e.set("username","NO",{path:"/"}),window.location.replace("https://api.codechef.com/oauth/authorize?response_type=code&client_id=47debda654e625f0c1b7857677c46f3a&state=xyz&redirect_uri=https://sahil110310.github.io/frontend/"),console.log(e.get("visited"))},n.anthorpage=function(){n.setState({clicked:"AAA"}),console.log(n.state.clicked)},n.getToken=function(){var e=new b.a;console.log(e.get("visited")),console.log(n.state.clicked);var t={grant_type:"authorization_code",code:n.givecode().code,client_id:"47debda654e625f0c1b7857677c46f3a",client_secret:"feb3726cf8c1934b61d29c23dcb2283b",redirect_uri:"https://sahil110310.github.io/frontend/"};h.a.post("https://api.codechef.com/oauth/token",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){console.log(t),e.set("username",t.data.result.data.access_token,{path:"/",expires:new Date(Date.now()+36e5)}),e.set("refresh_token",t.data.result.data.refresh_token,{path:"/",expires:new Date(Date.now()+864e6)}),n.setState({token:t.data.result.data.access_token,refresh_token:t.data.result.data.refresh_token})})).catch((function(e){console.log(e.message)})),n.setState({clicked:"AA"}),console.log(n.state.clicked),console.log(e.get("refresh_token"))};return n.state={list:[],token:"",clicked:"!",show:!0,refresh_token:""},n.submitHandler=n.submitHandler.bind(Object(i.a)(n)),n.getToken=n.getToken.bind(Object(i.a)(n)),n.givecode=n.givecode.bind(Object(i.a)(n)),n.anthorpage=n.anthorpage.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"HiItems",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.state.list;n.set("visited","YES",{path:"/"});var t=e.map((function(e){return e.code})),a=e.map((function(e){return e.name})),n=(t.concat(a),new b.a);return console.log(n.get("visited")),console.log(n.get("refresh_token")),"AAA"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/contest/"}):l.a.createElement("div",{className:"all"},l.a.createElement("button",{onClick:this.submitHandler,className:"apibutton1"},"Login"),"!"==this.state.clicked&&this.getToken(),"YES"==n.get("visited")&&this.setState({clicked:"AAA"}),l.a.createElement("div",null,l.a.createElement("div",{className:"font1"},"Welcome To Contest Arena")))}}]),a}(n.Component);l.a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(182),v=a(2),k=a(35),N=a.n(k),j=a(64),w=a(65),S=new(function(){function e(){Object(s.a)(this,e),this.auth0=new w.a.WebAuth({domain:"dev-n62m1pcd.auth0.com",audience:"https://dev-n62m1pcd.auth0.com/userinfo",clientID:"47debda654e625f0c1b7857677c46f3a",redirectUri:"http://localhost:3000/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(r.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise((function(t,a){e.auth0.parseHash((function(n,l){return n?a(n):l&&l.idToken?(e.idToken=l.idToken,e.profile=l.idTokenPayload,e.expiresAt=1e3*l.idTokenPayload.exp,void t()):a(n)}))}))}},{key:"signOut",value:function(){this.idToken=null,this.profile=null,this.expiresAt=null}}]),e}()),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.handleAuthentication();case 2:this.props.history.replace("/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("p",null,"Loading profile...")}}]),a}(n.Component),C=(Object(g.g)(y),a(18),a(99),a(100),a(11)),A=a.n(C),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).onTextchanged=function(e){var t=n.state.list,a=t.map((function(e){return e.code.toString()})),l=t.map((function(e){return e.name.toString()})),o=a.concat(l);n.setState((function(){return{codelist:o}})),console.log(n.state.codelist);var c=e.target.value;if(console.log(c.length),c.length>0){n.setState({show:!0});var s=new RegExp("".concat(c),"i"),r=o.sort().filter((function(e){return s.test(e)}));n.setState((function(){return{suggestions:r,taxt:c}})),console.log(n.state.taxt)}else n.setState((function(){return{taxt:c}}))},n.renderSuggestion=function(){var e=n.state.suggestions;if(console.log(e.length),e.length>0)return l.a.createElement("div",null,l.a.createElement("ul",null,n.state.suggestions.map((function(e,t){return l.a.createElement("li",{key:t},e)}))))},n.getDataAxios=function(){var e=(new b.a).get("username");console.log("Bearer "+e),h.a.get("https://api.codechef.com/contests",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+e}}).then((function(e){n.setState({list:e.data.result.data.content.contestList,clicked:"tt"})})).catch((function(e){console.log(e.message)}));var t=n.state.list;console.log(t)},n.suggestionSelected=function(e){n.setState((function(){return{taxt:n.state.var2[e],suggestions:[]}})),console.log(n.state.var2[e]),console.log(e)},n.logout=function(e){e.preventDefault(),console.log(n.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),n.setState({clicked:"logout"})},n.mapping=function(){var e={};console.log(n.state.var2),n.state.list.map((function(t,a){return e[t.name]=t.code})),n.state.list.map((function(t,a){return e[t.code]=t.code})),n.setState({var2:e,show:!1}),console.log(e)},n.nextpage=function(){var e=n.state.taxt;(new b.a).set("contestcode",e,{path:"/"}),n.setState({clicked:"AA"})};new b.a;return n.state={list:[],codelist:[],problemlist:[],finallist:[],token:"ht",taxt:"",clicked:"false",suggestions:[],show:!0,var2:null,nam:"",lading:"false"},n.getDataAxios=n.getDataAxios.bind(Object(i.a)(n)),n.renderSuggestion=n.renderSuggestion.bind(Object(i.a)(n)),n.nextpage=n.nextpage.bind(Object(i.a)(n)),n.logout=n.logout.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;p();var t=this.state.suggestions;console.log(t.length);var a=this.state.taxt,n=new b.a;console.log("/frontend/contest/problem/");this.state.problemlist.map((function(e){return e.problemCode.toString()}));return console.log(this.state.clicked),n.set("purunaam","nahtikhabr",{path:"/"}),console.log(n.get("purunaam")),"logout"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/"}):l.a.createElement("div",null,l.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),0===this.state.list.length&&this.getDataAxios(),this.state.show&&this.state.list.length>0&&this.mapping(),l.a.createElement("div",{className:"limiter"},l.a.createElement("div",{className:"container-login100"},l.a.createElement("div",{className:"wrap-login100"},l.a.createElement("div",{class:"login100-form-title pp"},l.a.createElement("span",{class:"login100-form-title-1"},"SELECT CONTEST")),l.a.createElement("form",{className:"login100-form "},l.a.createElement("div",{className:"wrap-input100 validate-input m-b-26","data-validate":"Username is required"},l.a.createElement("span",{className:"label-input100"},"Contest"),l.a.createElement("input",{type:"text",className:"input100",value:a,onChange:this.onTextchanged,placeholder:"Enter contestname"}),l.a.createElement("ul",null,this.state.suggestions.map((function(t,a){return l.a.createElement("div",{className:"lii",key:a,onClick:function(){return e.suggestionSelected(t)}},t)}))),l.a.createElement("span",{class:"focus-input100"})),l.a.createElement("div",{class:"container-login100-form-btn"},l.a.createElement(v.b,{to:"/frontend/contest/problem/"},l.a.createElement("button",{class:"login100-form-btn",onClick:this.nextpage},"submit"))))))))}}]),a}(l.a.Component),x=(a(105),a(30),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).sleep=function(e){for(var t=(new Date).getTime();t+e>=(new Date).getTime(););},n.showproblem=function(e){var t=new b.a,a=t.get("username"),l=t.get("contestcode");h.a.get("https://api.codechef.com/contests/".concat(l,'?fields=&sortBy=&sortOrder="asc"'),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+a}}).then((function(e){console.log(e),n.setState({problemlist:e.data.result.data.content.problemsList,starttime:e.data.result.data.content.startDate,lasttime:e.data.result.data.content.endDate,object1:e.data.result.data.content})})).catch((function(e){console.log(e.message)})),console.log(n.state.object1)},n.showtime=function(){return n.state.lasttime1<n.state.currenttime1?l.a.createElement("div",{className:"ranklist1"},l.a.createElement("p",{className:"a"},"Content Ends")):n.state.lasttime1>n.state.currenttime1&&n.state.starttime1>n.state.currenttime1?l.a.createElement("div",null,l.a.createElement("div",{className:"ranklist3"},l.a.createElement("p",{className:"a"},"Content Starts In")),l.a.createElement("div",null,l.a.createElement(A.a,{initialTime:Number(n.state.starttime1)-Number(n.state.currenttime1),direction:"backward"},(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{cellpadding:"10",className:"bb1"},l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Days")),l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Hrs")),l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Min")),l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Sec"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Days,null)," ")),l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Hours,null))),l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Minutes,null))),l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Seconds,null))))))})))):n.state.lasttime1>n.state.currenttime1&&n.state.starttime1<n.state.currenttime1?l.a.createElement("div",null,l.a.createElement("div",{className:"ranklist3"},l.a.createElement("p",{className:"a"},"Content Ends In")),l.a.createElement("div",null,l.a.createElement(A.a,{initialTime:Number(n.state.lasttime1)-Number(n.state.currenttime1),direction:"backward"},(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{cellpadding:"10",className:"bb1"},l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Days")),l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Hrs")),l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Min")),l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Sec"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Days,null)," ")),l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Hours,null))),l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Minutes,null))),l.a.createElement("td",{className:"b11"},l.a.createElement("i",null,l.a.createElement(A.a.Seconds,null))))))})))):void 0},n.converttomili=function(){var e=n.state.starttime.toString(),t=new Date(e).getTime(),a=n.state.lasttime.toString(),l=new Date(a).getTime();console.log(t),console.log(l);var o=Math.round((new Date).getTime());console.log(o),n.setState({starttime1:t,lasttime1:l,currenttime1:o,clicked:"AAA"})},n.showranking=function(){n.setState((function(){return{clicked:"Ranking"}}))},n.logout=function(e){console.log(n.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),n.setState({clicked:"logout"})};new b.a;return n.state={list:[],codelist:[],problemlist:[],finallist:[],token:"ht",taxt:"",object:null,clicked:"A",suggestions:[],show:!1,problemname:"",var:"A",starttime:"",lasttime:"",currenttime:"",starttime1:"",lasttime1:"",currenttime1:"",bannerfile:"",object1:null,solved:null,ram:[],solved1:null,username1:"",length:20},n.showproblem=n.showproblem.bind(Object(i.a)(n)),n.showranking=n.showranking.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){var e=new b.a;p();e.get("contestcode");console.log(this.state.object1);this.state.problemlist.map((function(e){return e.problemCode.toString()}));if("AA"==this.state.clicked){this.state.taxt.toString();return console.log(this.state.taxt),l.a.createElement(g.a,{to:"/frontend/contest/problem/"+this.state.taxt.toString()})}return"Ranking"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/contest/ranking/"}):"logout"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/"}):l.a.createElement("div",null,l.a.createElement("button",{onClick:this.logout,class:"butoon3"},"Logout"),l.a.createElement("div",{className:"allpage"},""==this.state.starttime&&this.showproblem(),l.a.createElement("div",{className:"first"},null!=this.state.object1&&l.a.createElement("img",{src:this.state.object1.bannerFile,alt:"Coming Soon",className:"image"}),l.a.createElement("table",{className:"bb"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"b"},l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"Problem name")),l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"successful submission")),l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"accuracy"))),this.state.problemlist.map((function(e,t){return l.a.createElement("tr",{key:t,className:"b"},l.a.createElement("td",{className:"b"},l.a.createElement(v.b,{to:"/frontend/contest/problem/"+e.problemCode+"/"},e.problemCode)," "),l.a.createElement("td",{className:"b"},e.successfulSubmissions),l.a.createElement("td",{className:"b"},e.accuracy.toFixed(2)))}))))),l.a.createElement("div",{className:"second"},"A"==this.state.clicked&&null!=this.state.object1&&this.converttomili(),l.a.createElement("div",{className:"ranking"},l.a.createElement("div",{className:"ranklist"},l.a.createElement("p",{className:"a"},l.a.createElement("u",null,"Contest Ranklist")),l.a.createElement(v.b,{to:"/frontend/contest/ranking/"},l.a.createElement("button",{onClick:this.showranking,className:"butoon4"},"Go to Contest Rank")))),l.a.createElement("div",{className:"ranking1"},l.a.createElement("div",{className:!0},this.showtime()))),l.a.createElement("div",{className:"ranking2"},l.a.createElement(v.b,{to:"/frontend/"+e.get("contestcode")+"/activity/"},l.a.createElement("button",{onClick:this.getinfo,className:"butoon2"},"Click to see activity")),l.a.createElement("div",{className:"ranklist2"},l.a.createElement("p",{className:"a"},l.a.createElement("u",null,"Recent Activity"))))))}}]),a}(l.a.Component)),T=(a(148),a(152),a(164),a(169),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).showproblem=function(){var e=new b.a,t=e.get("username"),n=e.get("contestcode"),l=e.get("problemcode1");console.log(l),console.log(n),console.log(t);h.a.get("https://api.codechef.com/contests/".concat(n,"/problems/").concat(l,"?fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){console.log(e),a.setState({object:e.data.result.data.content,languages:e.data.result.data.content.languagesSupported})})).catch((function(e){console.log(e.message)}));a.state.problemdetails;console.log(a.state.languages)},a.problemSelected=function(e){(new b.a).set("problemcode",e);var t=e;a.setState((function(){return{clicked:"AA"}})),a.setState((function(){return{taxt:t}}))},a.go=function(){a.setState({clicked:"GO"})},a.givcode=function(){var e=window.location.href.split("/"),t=new b.a,a=e[6];console.log(a),t.set("problemcode1",a,{path:"/"}),console.log(t.get("problemcode1"))},a.logout=function(e){console.log(a.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),a.setState({clicked:"logout"})};var l=new b.a;return a.state={list:[],codelist:[],problemlist:[],finallist:[],object:null,languages:[],languageselected:"",token:"ht",taxt:l.get("problemcode1"),clicked:"A",value:"",suggestions:[],print:null},a.showproblem=a.showproblem.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"selectedText",value:function(e){this.setState((function(){return{languageselected:e,suggestions:[]}}))}},{key:"render",value:function(){var e=new b.a;if(p(),"logout"==this.state.clicked)return l.a.createElement(g.a,{to:"/frontend/"});if("GO"==this.state.clicked){e.get("username"),e.get("contestcode"),e.get("problemcode");var t="/frontend/contest/problem/"+e.get("problemcode1")+"/submit/";return console.log(t),l.a.createElement(g.a,{to:t})}if(null!=this.state.object){a(171);console.log(this.state.object.body);this.state.object.body.toString();return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),l.a.createElement("div",{className:"bhai"},l.a.createElement("h1",null,this.state.object.problemName),l.a.createElement("h4",null,this.state.object.problemCode),l.a.createElement("hr",null),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.object.body}}),l.a.createElement(v.b,{to:"/frontend/contest/problem/"+e.get("problemcode1")+"/submit/"},l.a.createElement("button",{className:"butoon1"},"submit"))))}this.state.object;return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),this.givcode(),null===this.state.object&&this.showproblem())}}]),n}(l.a.Component)),_=(a(174),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).getScore=function(e){var t,a,o=[];for(t=0;t<n.state.problemcodes.length;t++){for(a=0;a<e.problemScore.length;a++)if(e.problemScore[a].problemCode==n.state.problemcodes[t]){o.push(e.problemScore[a].score);break}a==e.problemScore.length&&o.push(0)}return o.map((function(e,t){return l.a.createElement("td",{key:t},e)}))},n.ranking=function(){var e=new b.a,t=e.get("username"),a=e.get("contestcode");e.get("problemcode");h.a.get("https://api.codechef.com/rankings/".concat(a,"?fields=&country=&institution=&institutionType=&offset=&limit=&sortBy=&sortOrder="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){var t=e.data.result.data.content[0].problemScore.map((function(e){return e.problemCode.toString()}));n.setState({object:e.data.result.data.content,problemwiseresult:t})})).catch((function(e){console.log(e.message)}));n.state.object;console.log(n.state.object)},n.contestdetails=function(){var e=new b.a,t=e.get("username"),a=e.get("contestcode");if(h.a.get("https://api.codechef.com/contests/".concat(a),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){n.setState({problemlist:e.data.result.data.content.problemsList})})).catch((function(e){console.log(e.message)})),console.log(n.state.problemlist),n.state.problemlist.length>0){console.log(n.state.problemlist.length),console.log(n.state.problemlist);var l=n.state.problemlist.map((function(e){return e.problemCode}));n.setState({problemcodes:l}),console.log(n.state.problemcodes.length),n.setState({clicked:"Yes"})}},n.logout=function(e){console.log(n.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),n.setState({clicked:"logout"})};return n.state={object:[],problemwiseresult:[],clicked:"",institution:"",problemscore:[],problemcodes:[],problemlist:[]},n.ranking=n.ranking.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return p(),"logout"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/"}):"Yes"==this.state.clicked?l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),l.a.createElement("div",{className:"respTable"},l.a.createElement("table",{className:"p"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"pppp"},l.a.createElement("th",{className:"hh"},l.a.createElement("b",null,"RANK")),l.a.createElement("th",{className:"hh"},l.a.createElement("b",null,"USERNAME")),l.a.createElement("th",{className:"hh"},l.a.createElement("b",null,"TOTAL SCORE")),this.state.problemcodes.map((function(e,t){return l.a.createElement("th",{className:"hh",key:t},e)}))),this.state.object.map((function(t,a){return l.a.createElement("tr",{className:"pppp",key:a},l.a.createElement("td",null,t.rank.toString()),l.a.createElement("td",null,l.a.createElement(v.b,{to:"/frontend/ranking/"+t.username+"/"},t.username)),l.a.createElement("td",null,t.totalScore),e.getScore(t))}))))))):l.a.createElement("div",null,this.ranking(),this.contestdetails())}}]),a}(l.a.Component)),D=(a(175),a(177),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).showproblem=function(){var e=new b.a,t=e.get("username"),a=e.get("contestcode"),l=e.get("problemcode1");h.a.get("https://api.codechef.com/contests/".concat(a,"/problems/").concat(l,"?fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){n.setState({object:e.data.result.data.content,languages:e.data.result.data.content.languagesSupported})})).catch((function(e){console.log(e.message)}));n.state.problemdetails},n.logout=function(e){console.log(n.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),n.setState({clicked:"logout"})},n.submit=function(){var e=new b.a,t=e.get("username"),a=(e.get("contestcode"),e.get("problemcode1"),n.state.code.toString(),n.state.language.toString(),n.state.input.toString(),{sourceCode:n.state.code.toString(),language:n.state.language,input:n.state.input.toString()});console.log(t),h.a.post("https://api.codechef.com/ide/run",a,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){n.setState({link:e.data.result.data.link})})).catch((function(e){console.log(e.message)})),console.log(n.state.link);n.state.problemdetails;if(""!=n.state.link){var l=n.state.link.toString();console.log(l);h.a.get("https://api.codechef.com/ide/status?link=".concat(l),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){n.setState({output:e.data.result.data.output})})).catch((function(e){console.log(e.message)})),console.log(n.state.output)}},n.handleChange=function(e){e.persist();var t=e.target.value;n.setState({language:t}),console.log(t)},n.changecode=function(e){var t=e.target.value;n.setState({code:t})},n.changeinput=function(e){var t=e.target.value;n.setState({input:t})};var l=new b.a;return n.state={object:null,languages:[],languageselected:"",token:"ht",taxt:l.get("problemcode1"),clicked:"A",value:"",language:"C++ 6.3",code:"",input:"",output:"",link:"",error:""},n.showproblem=n.showproblem.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){if(p(),"logout"==this.state.clicked)return l.a.createElement(g.a,{to:"/frontend/"});if(null!=this.state.object){var e=this.state.languages[0];console.log(e);return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),l.a.createElement("div",{className:"qq"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Language"),l.a.createElement("td",null,l.a.createElement("select",{onChange:this.handleChange},this.state.languages.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h5",null,"Source code:")),l.a.createElement("td",null,l.a.createElement("textarea",{rows:"20",cols:"70",value:this.state.code,onChange:this.changecode}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h5",null,"Input"),l.a.createElement("br",null)),l.a.createElement("td",null," ",l.a.createElement("textarea",{rows:"5",cols:"50",value:this.state.input,onChange:this.changeinput}))),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("h5",null,"Output")),l.a.createElement("td",null," ",l.a.createElement("textarea",{rows:"5",cols:"50",value:this.state.output}),l.a.createElement("br",null)))),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.submit,className:"butoon1"},"submit"))))}return l.a.createElement("div",null,null===this.state.object&&this.showproblem())}}]),a}(l.a.Component)),R=(a(178),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).showuser=function(){var e=new b.a,t=e.get("username"),a=e.get("contestcode"),l=e.get("usercode1");console.log(a),console.log(t);h.a.get("https://api.codechef.com/users/".concat(l,"?fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){console.log(e),n.setState({object:e.data.result.data.content})})).catch((function(e){console.log(e.message)}));n.state.problemdetails},n.givcode=function(){var e=window.location.href.split("/"),t=new b.a,a=e[5];console.log(a),t.set("usercode1",a,{path:"/"}),console.log(t.get("usercode1"))},n.logout=function(e){console.log(n.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),n.setState({clicked:"logout"})};return n.state={object:null,problemwiseresult:[],clicked:"",institution:"",problemscore:[],problemcodes:[],problemlist:[]},n}return Object(r.a)(a,[{key:"render",value:function(){return p(),"logout"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/"}):null!=this.state.object?l.a.createElement("div",null,l.a.createElement("div",{className:"allpage1"},l.a.createElement("div",{className:"first1"},l.a.createElement("table",{className:"bb1"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"User name")),l.a.createElement("td",{className:"b"},this.state.object.username)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Full name")),l.a.createElement("td",{className:"b"},this.state.object.fullname)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Country")),l.a.createElement("td",{className:"b"},this.state.object.country.name)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"State")),l.a.createElement("td",{className:"b"},this.state.object.state.name)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"City")),l.a.createElement("td",{className:"b"},this.state.object.city.name)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"Student/Professionals")),l.a.createElement("td",{className:"b"},this.state.object.occupation)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},l.a.createElement("b",null,"organization")),l.a.createElement("td",{className:"b"},this.state.object.organization))))),l.a.createElement("div",{className:"second1"},l.a.createElement("div",{className:"ranking11"},l.a.createElement("div",{className:"al1"},this.state.object.ratings.allContest),l.a.createElement("div",{className:"al2"},this.state.object.band),l.a.createElement("div",{className:"al3"},l.a.createElement("u",null,"Global Rank")),l.a.createElement("div",{className:"al4"},l.a.createElement("u",null,"Country Rank")),l.a.createElement("div",{className:"al5"},this.state.object.rankings.allContestRanking.global),l.a.createElement("div",{className:"al6"},this.state.object.rankings.allContestRanking.country),l.a.createElement("div",null,l.a.createElement("table",{className:"user1"},l.a.createElement("tr",null,l.a.createElement("th",{className:"b"},"Contest "),l.a.createElement("th",{className:"b"},"Rating"),l.a.createElement("th",{className:"b"},"Global Rank"),l.a.createElement("th",{className:"b"},"Country Rank")),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},"Long Challange "),l.a.createElement("td",{className:"b"},this.state.object.ratings.long),l.a.createElement("td",{className:"b"},this.state.object.rankings.longRanking.global),l.a.createElement("td",{className:"b"},this.state.object.rankings.longRanking.country)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},"Cook-off "),l.a.createElement("td",{className:"b"},this.state.object.ratings.short),l.a.createElement("td",{className:"b"},this.state.object.rankings.shortRanking.global),l.a.createElement("td",{className:"b"},this.state.object.rankings.shortRanking.country)),l.a.createElement("tr",null,l.a.createElement("td",{className:"b"},"LaunchTime "),l.a.createElement("td",{className:"b"},this.state.object.ratings.lTime),l.a.createElement("td",{className:"b"},this.state.object.rankings.ltimeRanking.global),l.a.createElement("td",{className:"b"},this.state.object.rankings.ltimeRanking.country)))))))):l.a.createElement("div",null,this.givcode(),this.showuser())}}]),a}(l.a.Component)),L=(a(179),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).sleep=function(e){for(var t=(new Date).getTime();t+e>=(new Date).getTime(););},n.getinfo=function(){var e=new b.a,t=e.get("contestcode"),a=e.get("username");if(console.log(t),h.a.get("https://api.codechef.com/submissions/?result=&year=&username=&language=&problemCode=&contestCode=".concat(t,"&fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+a}}).then((function(e){console.log(e),n.setState({object:e.data.result.data.content})})).catch((function(e){console.log(e.message)})),null!=n.state.object){n.state.object.length<10&&n.setState({length:n.state.object.length})}},n.logout=function(e){console.log(n.state.clicked);var t=new b.a;t.remove("username",{path:"/"}),t.remove("refresh_token",{path:"/"}),t.remove("visited",{path:"/"}),n.setState({clicked:"logout"})};new b.a;return n.state={token:"ht",taxt:"",object:null,clicked:"A",suggestions:[],show:!1,problemname:"",var:"A",starttime:"",lasttime:"",currenttime:"",starttime1:"",lasttime1:"",currenttime1:"",bannerfile:"",object1:null,solved:null,ram:[],solved1:null,username1:"",length:10},n}return Object(r.a)(a,[{key:"render",value:function(){new b.a;return p(),"logout"==this.state.clicked?l.a.createElement(g.a,{to:"/frontend/"}):null!=this.state.object?l.a.createElement("div",null,l.a.createElement("button",{onClick:this.logout,class:"butoon3"},"Logout"),l.a.createElement("div",{className:"allpage"},l.a.createElement("div",null,l.a.createElement("table",{className:"activity1"},l.a.createElement("p",{className:"a"},l.a.createElement("u",null,"Recent Activity")),l.a.createElement("tbody",null,l.a.createElement("tr",{className:"b"},l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"Date")),l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"username")),l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"problemCode")),l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"result")),l.a.createElement("th",{className:"b"},l.a.createElement("b",null,"language"))),this.state.object.map((function(e,t){return l.a.createElement("tr",{key:t,className:"b"},l.a.createElement("td",{className:"b"},e.date," "),l.a.createElement("td",{className:"b"},l.a.createElement(v.b,{to:"/frontend/ranking/"+e.username+"/"},e.username)),l.a.createElement("td",{className:"b"},e.problemCode," "),l.a.createElement("td",{className:"b"},e.result),l.a.createElement("td",{className:"b"},e.language))}))))))):l.a.createElement("div",null,this.getinfo())}}]),a}(l.a.Component));c.a.render(l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{path:"/frontend/",exact:!0,component:E}),l.a.createElement(g.b,{path:"/frontend/ide/",exact:!0,component:D}),l.a.createElement(g.b,{path:"/frontend/ranking/:id3/",exact:!0,component:R}),l.a.createElement(g.b,{path:"/frontend/:id4/activity/",exact:!0,component:L}),l.a.createElement(g.b,{path:"/frontend/contest/",exact:!0,component:O}),l.a.createElement(g.b,{path:"/frontend/contest/ranking/",exact:!0,component:_}),l.a.createElement(g.b,{path:"/frontend/contest/problem",exact:!0,component:x}),l.a.createElement(g.b,{path:"/frontend/contest/problem/:id/:id1",exact:!0,component:D}),l.a.createElement(g.b,{path:"/frontend/contest/problem/:id",exact:!0,component:T})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(180)},75:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.ea9b41e7.chunk.js.map