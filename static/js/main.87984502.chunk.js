(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},130:function(e,t){},174:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(20),c=n.n(l),s=(n(75),n(6)),r=n(7),i=n(2),u=n(8),m=n(9),d=n(4),g=n.n(d),h=n(32),p=n.n(h),b=n(62),f=n(15),v=n(63),k=new(function(){function e(){Object(s.a)(this,e),this.auth0=new v.a.WebAuth({domain:"dev-n62m1pcd.auth0.com",audience:"https://dev-n62m1pcd.auth0.com/userinfo",clientID:"47debda654e625f0c1b7857677c46f3a",redirectUri:"http://localhost:3000/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(r.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise((function(t,n){e.auth0.parseHash((function(a,o){return a?n(a):o&&o.idToken?(e.idToken=o.idToken,e.profile=o.idTokenPayload,e.expiresAt=1e3*o.idTokenPayload.exp,void t()):n(a)}))}))}},{key:"signOut",value:function(){this.idToken=null,this.profile=null,this.expiresAt=null}}]),e}()),E=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.handleAuthentication();case 2:this.props.history.replace("/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("p",null,"Loading profile...")}}]),n}(a.Component),j=(Object(f.g)(E),n(1));n(97),n(98);function w(){var e=new j.a,t=e.get("refresh_token");if(""==e.get("username")){var n={grant_type:"refresh_token",refresh_token:t,client_id:"47debda654e625f0c1b7857677c46f3a",client_secret:"feb3726cf8c1934b61d29c23dcb2283b"};g.a.post("https://api.codechef.com/oauth/token",n,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){console.log(t),e.set("username",t.data.result.data.access_token,t.data.result.data.expires_in),e.set("refresh_token",t.data.result.data.refresh_token,864e8)})).catch((function(e){console.log(e.message)}))}}var S=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).setCookie=function(){var e=new j.a;console.log(e.get("visited")),console.log(a.state.clicked),e.set("username",a.state.token,{path:"/"}),console.log(a.state.clicked),a.setState({clicked:"AAA"})},a.X=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,a){e[n]=a}));return e},a.submitHandler=function(){var e=new j.a;console.log(a.state.clicked),e.set("visited","11",{path:"/"}),window.location.replace("https://api.codechef.com/oauth/authorize?response_type=code&client_id=47debda654e625f0c1b7857677c46f3a&state=xyz&redirect_uri=https://sahil110310.github.io/frontend/"),console.log(e.get("visited"))},a.anthorpage=function(){a.setState({clicked:"AAA"}),console.log(a.state.clicked)},a.getToken=function(){var e=new j.a;console.log(e.get("visited")),console.log(a.state.clicked);var t={grant_type:"authorization_code",code:a.X().code,client_id:"47debda654e625f0c1b7857677c46f3a",client_secret:"feb3726cf8c1934b61d29c23dcb2283b",redirect_uri:"https://sahil110310.github.io/frontend/"};g.a.post("https://api.codechef.com/oauth/token",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){console.log(t),e.set("username",t.data.result.data.access_token,t.data.result.data.expires_in),e.set("refresh_token",t.data.result.data.refresh_token,864e8),a.setState({token:t.data.result.data.access_token,refresh_token:t.data.result.data.refresh_token})})).catch((function(e){console.log(e.message)})),a.setState({clicked:"AA"}),console.log(a.state.clicked),console.log(e.get("refresh_token"))};return a.state={list:[],token:"",clicked:"!",show:!0,refresh_token:""},a.submitHandler=a.submitHandler.bind(Object(i.a)(a)),a.getToken=a.getToken.bind(Object(i.a)(a)),a.X=a.X.bind(Object(i.a)(a)),a.anthorpage=a.anthorpage.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"HiItems",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.state.list,t=e.map((function(e){return e.code})),n=e.map((function(e){return e.name})),a=(t.concat(n),new j.a);return console.log(a.get("visited")),console.log(a.get("refresh_token")),"AAA"==this.state.clicked?o.a.createElement(f.a,{to:"/frontend/contest/"}):o.a.createElement("div",null,o.a.createElement("button",{onClick:this.submitHandler},"Login"),"!"==this.state.clicked&&this.getToken(),o.a.createElement("button",{onClick:this.setCookie,className:"button1"},"submit"),o.a.createElement("div",{className:"qqp"},o.a.createElement("h1",{className:"texti"},"Welcome To Contest Arena")))}}]),n}(a.Component);o.a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(182),y=n(3),C=(n(24),n(100),n(28),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).onTextchanged=function(e){var t=a.state.list,n=t.map((function(e){return e.code.toString()})),o=t.map((function(e){return e.name.toString()})),l=n.concat(o);a.setState((function(){return{codelist:l}})),console.log(a.state.codelist);var c=e.target.value;if(console.log(c.length),c.length>0){a.setState({show:!0});var s=new RegExp("".concat(c),"i"),r=l.sort().filter((function(e){return s.test(e)}));a.setState((function(){return{suggestions:r,taxt:c}})),console.log(a.state.taxt)}else a.setState((function(){return{taxt:c}}))},a.renderSuggestion=function(){var e=a.state.suggestions;if(console.log(e.length),e.length>0)return o.a.createElement("div",null,o.a.createElement("ul",null,a.state.suggestions.map((function(e,t){return o.a.createElement("li",{key:t},e)}))))},a.getDataAxios=function(){var e=(new j.a).get("username");console.log("Bearer "+e),g.a.get("https://api.codechef.com/contests",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+e}}).then((function(e){a.setState({list:e.data.result.data.content.contestList})})).catch((function(e){console.log(e.message)}));var t=a.state.list;console.log(t)},a.suggestionSelected=function(e){a.setState((function(){return{taxt:a.state.var2[e],suggestions:[]}})),console.log(a.state.var2[e]),console.log(e)},a.logout=function(e){e.preventDefault(),console.log(a.state.clicked);var t=new j.a;t.remove("username"),t.remove("refresh_token"),a.setState({clicked:"logout"})},a.mapping=function(){var e={};console.log(a.state.var2),a.state.list.map((function(t,n){return e[t.name]=t.code})),a.state.list.map((function(t,n){return e[t.code]=t.code})),a.setState({var2:e,show:!1}),console.log(e)},a.nextpage=function(){var e=a.state.taxt;(new j.a).set("contestcode",e,{path:"/"}),a.setState({clicked:"AA"})};new j.a;return a.state={list:[],codelist:[],problemlist:[],finallist:[],token:"ht",taxt:"",clicked:"A",suggestions:[],show:!0,var2:null},a.getDataAxios=a.getDataAxios.bind(Object(i.a)(a)),a.renderSuggestion=a.renderSuggestion.bind(Object(i.a)(a)),a.nextpage=a.nextpage.bind(Object(i.a)(a)),a.logout=a.logout.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.suggestions;console.log(t.length);var n=this.state.taxt;new j.a;console.log("/frontend/contest/problem/");this.state.problemlist.map((function(e){return e.problemCode.toString()}));return console.log(this.state.clicked),w(),"logout"==this.state.clicked?o.a.createElement(f.a,{to:"/frontend/ranking"}):"AA"==this.state.clicked?o.a.createElement(f.a,{to:"/frontend/contest/problem/"}):o.a.createElement("div",null,o.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),0===this.state.list.length&&this.getDataAxios(),this.state.show&&this.state.list.length>0&&this.mapping(),o.a.createElement("div",{className:"limiter"},o.a.createElement("div",{className:"container-login100"},o.a.createElement("div",{className:"wrap-login100"},o.a.createElement("div",{class:"login100-form-title pp"},o.a.createElement("span",{class:"login100-form-title-1"},"SELECT CONTEST")),o.a.createElement("form",{className:"login100-form "},o.a.createElement("div",{className:"wrap-input100 validate-input m-b-26","data-validate":"Username is required"},o.a.createElement("span",{className:"label-input100"},"Contest"),o.a.createElement("input",{type:"text",className:"input100",value:n,onChange:this.onTextchanged,placeholder:"Enter contestname"}),o.a.createElement("ul",null,this.state.suggestions.map((function(t,n){return o.a.createElement("div",{className:"lii",key:n,onClick:function(){return e.suggestionSelected(t)}},t)}))),o.a.createElement("span",{class:"focus-input100"})),o.a.createElement("div",{class:"container-login100-form-btn"},o.a.createElement("button",{class:"login100-form-btn",onClick:this.nextpage},"submit")))))),o.a.createElement("ul",null,this.state.suggestions.map((function(t,n){return o.a.createElement("div",{className:"lii",key:n,onClick:function(){return e.suggestionSelected(t)}},t)}))))}}]),n}(o.a.Component)),N=(n(105),n(46),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).sleep=function(e){for(var t=(new Date).getTime();t+e>=(new Date).getTime(););},a.getinfo=function(e){var t=new j.a,n=t.get("contestcode").toString(),o=t.get("username"),l=a.state.username1;console.log(l);if(console.log(n),g.a.get("https://api.codechef.com/submissions/?result=&year=&username=".concat(l,"&language=&problemCode=&contestCode=").concat(n,"&fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+o}}).then((function(e){a.setState({object:e.data.result.data.content})})).catch((function(e){console.log(e.message)})),null!=a.state.object){a.state.object.length<20&&a.setState({length:a.state.object.length})}},a.showproblem=function(e){var t=new j.a,n=t.get("username"),o=t.get("contestcode");g.a.get("https://api.codechef.com/contests/".concat(o,'?fields=&sortBy=&sortOrder="asc"'),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+n}}).then((function(e){console.log(e),a.setState({problemlist:e.data.result.data.content.problemsList,starttime:e.data.result.data.content.startDate,lasttime:e.data.result.data.content.endDate,bannerfile:e.data.result.data.content.bannerFile})})).catch((function(e){console.log(e.message)})),console.log(a.state.problemlist.length)},a.converttomili=function(){var e=a.state.starttime.toString(),t=new Date(e).getTime(),n=a.state.lasttime.toString(),o=new Date(n).getTime();console.log(t),console.log(o);var l=Math.round((new Date).getTime());console.log(l),a.setState({starttime1:t,lasttime1:o,currenttime1:l})},a.showranking=function(){a.setState((function(){return{clicked:"Ranking"}}))},a.logout=function(e){console.log(a.state.clicked);var t=new j.a;t.remove("username"),t.remove("refresh_token"),a.setState({clicked:"logout"})},a.userinfo=function(){var e=new j.a,t=e.get("contestcode").toString(),n=e.get("username"),o=null;console.log(t),g.a.get("https://api.codechef.com/users/me",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+n}}).then((function(e){o=e.data.result.data.content.problemStats.solved,a.setState({username1:e.data.result.data.content.username,solved:o})})).catch((function(e){console.log(e.message)})),console.log(a.state.username1)};new j.a;return a.state={list:[],codelist:[],problemlist:[],finallist:[],token:"ht",taxt:"",object:null,clicked:"A",suggestions:[],show:!1,problemname:"",var:"A",starttime:0,lasttime:0,currenttime:0,starttime1:0,lasttime1:0,currenttime1:0,bannerfile:"",solved:null,ram:[],solved1:null,username1:"",length:20},a.showproblem=a.showproblem.bind(Object(i.a)(a)),a.showranking=a.showranking.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"render",value:function(){var e=new j.a;w();e.get("contestcode"),this.state.problemlist.map((function(e){return e.problemCode.toString()}));if("AA"==this.state.clicked){this.state.taxt.toString();return console.log(this.state.taxt),o.a.createElement(f.a,{to:"/frontend/contest/problem/"+this.state.taxt.toString()})}return"Ranking"==this.state.clicked?o.a.createElement(f.a,{to:"/frontend/contest/ranking/"}):"logout"==this.state.clicked?o.a.createElement(f.a,{to:"/frontend/"}):o.a.createElement("div",null,o.a.createElement("button",{onClick:this.logout,class:"butoon3"},"Logout"),o.a.createElement("div",{className:"allpage"},0===this.state.problemlist.length&&this.showproblem(),o.a.createElement("div",{className:"first"},o.a.createElement("img",{src:this.state.bannerfile,alt:"ram",className:"image"}),o.a.createElement("table",{className:"bb"},o.a.createElement("tbody",null,o.a.createElement("tr",{className:"b"},o.a.createElement("th",{className:"b"},o.a.createElement("b",null,"Problem name")),o.a.createElement("th",{className:"b"},o.a.createElement("b",null,"successful submission")),o.a.createElement("th",{className:"b"},o.a.createElement("b",null,"accuracy"))),this.state.problemlist.map((function(e,t){return o.a.createElement("tr",{key:t,className:"b"},o.a.createElement("td",{className:"b"},o.a.createElement(y.b,{to:"/contest/problem/"+e.problemCode},e.problemCode)," "),o.a.createElement("td",{className:"b"},e.successfulSubmissions),o.a.createElement("td",{className:"b"},e.accuracy.toFixed(2)))}))))),o.a.createElement("div",{className:"second"},0===this.state.currenttime1&&this.converttomili(),o.a.createElement("div",{className:"ranking"},o.a.createElement("div",{className:"ranklist"},o.a.createElement("p",{className:"a"},o.a.createElement("u",null,"Contest Ranklist")),o.a.createElement("button",{onClick:this.showranking,className:"butoon4"},"Go to Contest Rank"))),o.a.createElement("div",{className:"ranking1"},o.a.createElement("div",{className:"ranklist1"},o.a.createElement("h1",null,"contest")))),o.a.createElement("div",{className:"ranking2"},null==this.state.solved&&this.userinfo(),o.a.createElement("button",{onClick:this.getinfo,className:"butoon2"},"Click to see activity"),o.a.createElement("div",{className:"ranklist2"},o.a.createElement("p",{className:"a"},o.a.createElement("u",null,"Recent Activity"))),null!=this.state.object&&o.a.createElement("table",{className:"qq"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"problemCode"),o.a.createElement("th",null,"Result")),this.state.object.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.problemCode),o.a.createElement("td",null,e.result))})))))))}}]),n}(o.a.Component)),O=(n(148),n(152),n(164),n(169),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).showproblem=function(){var e=new j.a,t=e.get("username"),a=e.get("contestcode"),o=e.get("problemcode1");console.log(o),console.log(a),console.log(t);g.a.get("https://api.codechef.com/contests/".concat(a,"/problems/").concat(o,"?fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){console.log(e),n.setState({object:e.data.result.data.content,languages:e.data.result.data.content.languagesSupported})})).catch((function(e){console.log(e.message)}));n.state.problemdetails;console.log(n.state.languages)},n.problemSelected=function(e){(new j.a).set("problemcode",e);var t=e;n.setState((function(){return{clicked:"AA"}})),n.setState((function(){return{taxt:t}}))},n.go=function(){n.setState({clicked:"GO"})},n.givcode=function(){var e=window.location.href.split("/"),t=new j.a,n=e[5];console.log(n),t.set("problemcode1",n,{path:"/"}),console.log(t.get("problemcode1"))},n.logout=function(e){console.log(n.state.clicked);var t=new j.a;t.remove("username"),t.remove("refresh_token"),n.setState({clicked:"logout"})};var o=new j.a;return n.state={list:[],codelist:[],problemlist:[],finallist:[],object:null,languages:[],languageselected:"",token:"ht",taxt:o.get("problemcode1"),clicked:"A",value:"",suggestions:[],print:null},n.showproblem=n.showproblem.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"selectedText",value:function(e){this.setState((function(){return{languageselected:e,suggestions:[]}}))}},{key:"render",value:function(){if(w(),"logout"==this.state.clicked)return o.a.createElement(f.a,{to:"/frontend/"});if("GO"==this.state.clicked){var e=new j.a,t=(e.get("username"),e.get("contestcode"),e.get("problemcode").toString(),"/frontend/contest/problem/"+this.state.taxt+"/submit");return console.log(t),o.a.createElement(f.a,{to:t})}if(null!=this.state.object){var a=n(171);console.log(this.state.object.body);var l=this.state.object.body;l=(l=l.split("###").join("")).split("<br />"),console.log(l);this.state.object.body.toString();return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),o.a.createElement("div",{className:"bhai"},o.a.createElement("h1",null,this.state.object.problemName),o.a.createElement("h4",null,this.state.object.problemCode),o.a.createElement("hr",null),l.map((function(e){return o.a.createElement("div",null,o.a.createElement(a,null,e),o.a.createElement("br",null))})),o.a.createElement("button",{onClick:this.go,className:"butoon1"},"submit")))}this.state.object,new j.a;return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),this.givcode(),null===this.state.object&&this.showproblem())}}]),a}(o.a.Component)),x=(n(174),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).getScore=function(e){var t,n,l=[];for(t=0;t<a.state.problemcodes.length;t++){for(n=0;n<e.problemScore.length;n++)if(e.problemScore[n].problemCode==a.state.problemcodes[t]){l.push(e.problemScore[n].score);break}n==e.problemScore.length&&l.push(0)}return l.map((function(e,t){return o.a.createElement("td",{key:t},e)}))},a.ranking=function(){var e=new j.a,t=e.get("username"),n=e.get("contestcode");e.get("problemcode");g.a.get("https://api.codechef.com/rankings/".concat(n,"?fields=&country=&institution=&institutionType=&offset=&limit=&sortBy=&sortOrder="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){var t=e.data.result.data.content[0].problemScore.map((function(e){return e.problemCode.toString()}));a.setState({object:e.data.result.data.content,problemwiseresult:t})})).catch((function(e){console.log(e.message)}));a.state.object;console.log(a.state.object)},a.contestdetails=function(){var e=new j.a,t=e.get("username"),n=e.get("contestcode");if(g.a.get("https://api.codechef.com/contests/".concat(n),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){a.setState({problemlist:e.data.result.data.content.problemsList})})).catch((function(e){console.log(e.message)})),console.log(a.state.problemlist),a.state.problemlist.length>0){console.log(a.state.problemlist.length),console.log(a.state.problemlist);var o=a.state.problemlist.map((function(e){return e.problemCode}));a.setState({problemcodes:o}),console.log(a.state.problemcodes.length),a.setState({clicked:"Yes"})}},a.logout=function(e){console.log(a.state.clicked);var t=new j.a;t.remove("username"),t.remove("refresh_token"),a.setState({clicked:"logout"})};return a.state={object:[],problemwiseresult:[],clicked:"",institution:"",problemscore:[],problemcodes:[],problemlist:[]},a.ranking=a.ranking.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return w(),"logout"==this.state.clicked?o.a.createElement(f.a,{to:"/frontend/"}):"Yes"==this.state.clicked?o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),o.a.createElement("div",{className:"respTable"},o.a.createElement("table",{className:"p"},o.a.createElement("tbody",null,o.a.createElement("tr",{className:"pppp"},o.a.createElement("th",{className:"hh"},o.a.createElement("b",null,"RANK")),o.a.createElement("th",{className:"hh"},o.a.createElement("b",null,"USERNAME")),o.a.createElement("th",{className:"hh"},o.a.createElement("b",null,"TOTAL SCORE")),this.state.problemcodes.map((function(e,t){return o.a.createElement("th",{className:"hh",key:t},e)}))),this.state.object.map((function(t,n){return o.a.createElement("tr",{className:"pppp",key:n},o.a.createElement("td",null,t.rank.toString()),o.a.createElement("td",null,t.username),o.a.createElement("td",null,t.totalScore),e.getScore(t))}))))))):o.a.createElement("div",null,this.ranking(),this.contestdetails())}}]),n}(o.a.Component)),T=(n(175),n(177),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).showproblem=function(){var e=new j.a,t=e.get("username"),n=e.get("contestcode"),o=e.get("problemcode1");g.a.get("https://api.codechef.com/contests/".concat(n,"/problems/").concat(o,"?fields="),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){a.setState({object:e.data.result.data.content,languages:e.data.result.data.content.languagesSupported})})).catch((function(e){console.log(e.message)}));a.state.problemdetails},a.logout=function(e){console.log(a.state.clicked);var t=new j.a;t.remove("username"),t.remove("refresh_token"),a.setState({clicked:"logout"})},a.submit=function(){var e=new j.a,t=e.get("username"),n=(e.get("contestcode"),e.get("problemcode1"),a.state.code.toString(),a.state.language.toString(),a.state.input.toString(),{sourceCode:a.state.code.toString(),language:a.state.language,input:a.state.input.toString()});console.log(t),g.a.post("https://api.codechef.com/ide/run",n,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){a.setState({link:e.data.result.data.link})})).catch((function(e){console.log(e.message)})),console.log(a.state.link);a.state.problemdetails;if(""!=a.state.link){var o=a.state.link.toString();console.log(o);g.a.get("https://api.codechef.com/ide/status?link=".concat(o),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}).then((function(e){a.setState({output:e.data.result.data.output})})).catch((function(e){console.log(e.message)})),console.log(a.state.output)}},a.handleChange=function(e){e.persist();var t=e.target.value;a.setState({language:t}),console.log(t)},a.changecode=function(e){var t=e.target.value;a.setState({code:t})},a.changeinput=function(e){var t=e.target.value;a.setState({input:t})};var o=new j.a;return a.state={object:null,languages:[],languageselected:"",token:"ht",taxt:o.get("problemcode1"),clicked:"A",value:"",language:"C++ 6.3",code:"",input:"",output:"",link:"",error:""},a.showproblem=a.showproblem.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"render",value:function(){if(w(),"logout"==this.state.clicked)return o.a.createElement(f.a,{to:"/frontend/"});if(null!=this.state.object){var e=this.state.languages[0];console.log(e);return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.logout,className:"butoon3"},"Logout"),o.a.createElement("div",{className:"qq"},o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Language"),o.a.createElement("td",null,o.a.createElement("select",{onChange:this.handleChange},this.state.languages.map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("h5",null,"Source code:")),o.a.createElement("td",null,o.a.createElement("textarea",{rows:"20",cols:"70",value:this.state.code,onChange:this.changecode}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("h5",null,"Input"),o.a.createElement("br",null)),o.a.createElement("td",null," ",o.a.createElement("textarea",{rows:"5",cols:"50",value:this.state.input,onChange:this.changeinput}))),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement("h5",null,"Output")),o.a.createElement("td",null," ",o.a.createElement("textarea",{rows:"5",cols:"50",value:this.state.output}),o.a.createElement("br",null)))),o.a.createElement("td",null,o.a.createElement("button",{onClick:this.submit},"submit"))))}return o.a.createElement("div",null,null===this.state.object&&this.showproblem())}}]),n}(o.a.Component));c.a.render(o.a.createElement(A.a,null,o.a.createElement(y.a,null,o.a.createElement(f.d,null,o.a.createElement(f.b,{path:"/frontend/",exact:!0,component:S}),o.a.createElement(f.b,{path:"/frontend/contest",exact:!0,component:C}),o.a.createElement(f.b,{path:"/frontend/contest/ranking/",exact:!0,component:x}),o.a.createElement(f.b,{path:"/frontend/contest/problem",exact:!0,component:N}),o.a.createElement(f.b,{path:"/frontend/contest/problem/:id/:id1",exact:!0,component:T}),o.a.createElement(f.b,{path:"/frontend/contest/problem/:id",exact:!0,component:O})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n(178)},75:function(e,t,n){},97:function(e,t,n){e.exports=n.p+"static/media/codechef.6f201314.jpeg"},98:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.87984502.chunk.js.map