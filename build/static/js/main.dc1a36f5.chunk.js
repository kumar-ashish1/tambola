(this.webpackJsonptambola=this.webpackJsonptambola||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(15),o=n.n(r);function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}function c(e){for(var t=0,n=0;n<e.length;++n)t+=e[n].length;return t}function l(e,t){for(var n=0,s=0;s<e[t].length;++s)0!==e[t][s]&&++n;return n}function u(e,t){for(var n=0;n<9;++n)if(3===e[n].length)for(var s=0;s<3;++s)t[s][n]=e[n][s];for(var a=0,r=[],o=0;o<9;++o)2===e[o].length&&r.push(o);for(var c=r.length,u=0;u<c;++u){var h=i(0,r.length-1),d=r[h],m=[[0,1],[0,2],[1,2]][a%3];t[m[0]][d]=e[d][0],t[m[1]][d]=e[d][1],r.splice(h,1),++a}for(var b=0;b<9;++b)if(1===e[b].length){for(var p=i(0,2);0!==t[p][b]||5===l(t,p);)p=i(0,2);t[p][b]=e[b][0]}return t}function h(e){for(var t=function(){for(var e=[],t=[],n=[],s=[],a=[],r=[],o=[],l=[],u=[],h=1;h<=9;++h)e.push(h);for(var d=10;d<=19;++d)t.push(d);for(var m=20;m<=29;++m)n.push(m);for(var b=30;b<=39;++b)s.push(b);for(var p=40;p<=49;++p)a.push(p);for(var j=50;j<=59;++j)r.push(j);for(var f=60;f<=69;++f)o.push(f);for(var v=70;v<=79;++v)l.push(v);for(var O=80;O<=90;++O)u.push(O);for(var g=[e,t,n,s,a,r,o,l,u],w=[],y=[],k=[],x=[],N=[],W=[],S=0;S<9;++S)w.push([]),y.push([]),k.push([]),x.push([]),N.push([]),W.push([]);for(var T=[w,y,k,x,N,W],C=0;C<9;++C)for(var A=g[C],H=0;H<6;++H){var P=i(0,A.length-1),F=A[P];T[H][C].push(F),A.splice(P,1)}var B=g[g.length-1],G=i(0,B.length-1),R=B[G];T[i(0,T.length-1)][8].push(R),B.splice(G,1);for(var M=0;M<3;++M)for(var I=0;I<9;++I){var D=g[I];if(0!==D.length)for(var U=i(0,D.length-1),E=D[U],_=!1;!1===_;){var L=T[i(0,T.length-1)];15!==c(L)&&2!==L[I].length&&(_=!0,L[I].push(E),D.splice(U,1))}}for(var z=0;z<9;++z){var Y=g[z];if(0!==Y.length)for(var q=i(0,Y.length-1),K=Y[q],X=!1;!1===X;){var J=T[i(0,T.length-1)];15!==c(J)&&3!==J[z].length&&(X=!0,J[z].push(K),Y.splice(q,1))}}for(var V=0;V<6;++V)for(var Q=0;Q<9;++Q)T[V][Q].sort((function(e,t){return e-t}));return T}(),n=function(){for(var e=[],t=0;t<6;++t){for(var n=[],s=0;s<3;++s)n.push([0,0,0,0,0,0,0,0,0]);e[t]=n}return console.log("houses",e),e}(),s=0;s<e;++s)u(t[s],n[s]);for(var a=[],r=0;r<e;++r){for(var o=[],l=0;l<3;++l){for(var h=[],d=0;d<9;++d)h[d]={value:n[r][l][d],check:!1};o[l]=h}a[r]=o}return a}var d=function(e){return e.preventDefault(),e.returnValue="All the game state will be lost. Are you sure you want to leave?","All the game state will be lost. Are you sure you want to leave?"},m=(n(62),n(3)),b=n(4),p=n(5),j=n(6),f=(n(63),n(51)),v=n(38),O=(n(68),n(0));var g=function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.jsxs)("table",{className:"config-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"award-name-heading",children:" Award Name "}),Object(O.jsx)("th",{className:"award-number-heading",children:" How Many? "}),Object(O.jsx)("th",{})]})}),Object(O.jsx)("tbody",{children:e.awards.map((function(t,n){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"award-name",children:Object(O.jsx)("input",{readOnly:!0,type:"text",name:"nameAward",placeholder:"Enter Award Name",value:e.awards[n].nameAward,onChange:e.handleChangeHost(n)})}),Object(O.jsx)("td",{className:"award-number",children:Object(O.jsx)("input",{type:"number",name:"numAward",placeholder:"Enter Number of Awards",min:"1",max:"1",readOnly:!0,value:e.awards[n].numAward,onChange:e.handleChangeHost(n)})}),Object(O.jsx)("td",{className:"cross-button",children:Object(O.jsx)("button",{type:"button",onClick:e.handleRemoveSpecificRow(n),children:"X"})})]},n)}))})]}),Object(O.jsxs)("div",{className:"buttons-container",children:[Object(O.jsx)("button",{className:"add-row",type:"button",onClick:e.handleAddRow,children:"Add Award"}),Object(O.jsx)("button",{className:"start-game",type:"submit",children:"Start Game"})]})]})},w=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).clickHandler=function(){var e=!s.state.check;s.setState({check:e,value:s.state.value}),void 0!==s.props.changeTicketState&&void 0!==s.props.index&&s.props.changeTicketState(s.props.index,e)},s.state={value:s.props.value,check:void 0!==s.props.check&&s.props.check},s}return Object(b.a)(n,[{key:"componentDidUpdate",value:function(e){e.check!==this.props.check&&this.props.check&&this.setState({check:this.props.check})}},{key:"render",value:function(){var e=this.state.check?"checked":"unchecked";return Object(O.jsxs)("div",{className:"box",onClick:this.clickHandler,children:[Object(O.jsx)("div",{className:e}),Object(O.jsx)("div",{className:e}),Object(O.jsx)("p",{children:0===this.props.value?"":this.props.value})]})}}]),n}(s.Component),y=function(e){var t=e.numbers.map((function(e){return Object(O.jsx)(w,{value:e.value,check:e.check})}));return Object(O.jsx)("div",{className:"board-line",children:t})},k=n(30);function x(e){return e.calledWinUsername||e.user.username}var N=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).reward=void 0,s.deleteNotification=function(){s.setState({notificationObj:null});var e=document.getElementById("ticket-board-container");e&&e.setAttribute("style","opacity: 1")},s.state={notificationObj:null},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("ticket-board-container");this.props.socket.on("callWinToHost",(function(n){e.reward.rewardMe(),e.setState({notificationObj:n}),null===t||void 0===t||t.setAttribute("style","opacity:0.2;"),setTimeout((function(){e.deleteNotification()}),5e3)})),this.props.socket.on("resultsForPC",(function(n){e.reward.rewardMe(),e.setState({notificationObj:n}),null===t||void 0===t||t.setAttribute("style","opacity:0.2;"),setTimeout((function(){e.deleteNotification()}),5e3)}))}},{key:"render",value:function(){var e,t=this,n=this.state.notificationObj?Object(O.jsx)("div",{className:"notification-container",children:Object(O.jsxs)("div",{className:"notification",children:[Object(O.jsx)("p",{className:"main animated rubberBand",children:(e=this.state.notificationObj,void 0!==e.result?e.result+" "+e.callWinType:"Call: "+e.callWinType)}),Object(O.jsx)("p",{className:"sub animated bounce",children:x(this.state.notificationObj)})]})}):null;return Object(O.jsxs)(O.Fragment,{children:[n,Object(O.jsx)(k.a,{ref:function(e){t.reward=e},type:"confetti",config:{elementCount:100,angle:90,spread:90,decay:.95,lifetime:150}})]})}}]),n}(s.Component),W=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).state={message:""},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.on("callWinToHost",(function(t){"Host"===e.props.playerType?e.setState({message:"Other players are waiting on you to check tickets"}):e.setState({message:"Waiting for host to check the player tickets"})})),this.props.socket.on("hostCompletedChecking",(function(){e.setState({message:""})}))}},{key:"render",value:function(){return Object(O.jsx)("p",{className:"waiting",children:this.state.message})}}]),n}(s.Component),S=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).interval=void 0,s.updateTimer=function(){var e=s.state.seconds;e>=1&&(s.setState({seconds:e-1}),1===e&&s.props.endGame())},s.state={seconds:10,hasGameEnded:!1},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.updateTimer()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e="";return this.state.seconds>0&&(e="animated infinite bounceIn"),Object(O.jsxs)("div",{className:"game-over",children:[Object(O.jsx)("p",{children:"Game will be over in:"}),Object(O.jsx)("p",{className:"timer "+e,children:this.state.seconds})]})}}]),n}(s.Component);function T(e){for(var t=[],n=0;n<10;++n)t[n]={value:e+n,check:!1};return t}function C(){for(var e=[],t=0;t<9;++t)e[t]=T(10*t+1);return e}var A=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(m.a)(this,n),(s=t.call(this,e)).handleNewNumber=function(e){var t=e%10===0?9:e%10-1,n=e%10===0?e/10-1:Math.floor(e/10),a=s.state.allBoardNumbers;a[n][t]={value:e,check:!0},s.setState({allBoardNumbers:a,goneNumbers:s.state.goneNumbers+1})};var a=function(e){var t,n,s;for(s=e.length-1;s>0;s--)t=Math.floor(Math.random()*(s+1)),n=e[s],e[s]=e[t],e[t]=n;return e}(function(){for(var e=[],t=0;t<90;++t)e[t]=t+1;return e}());return s.state={shuffledBoardNumbers:a,goneNumbers:0,allBoardNumbers:C(),showTimer:!1},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.on("showTimer",(function(){var t=document.querySelector("button.new-number");t.disabled=!0,t.classList.add("disabled-button"),e.setState({showTimer:!0})})),this.props.socket.on("callWinToHost",(function(){!0===e.state.showTimer&&e.setState({showTimer:!1})}))}},{key:"render",value:function(){var e=this,t=null;this.state.showTimer&&(t=Object(O.jsx)(S,{socket:this.props.socket,endGame:this.props.endGame}));var n=0,s=function(e){for(var t=[],n=0;n<e.length;++n)t.push(Object(O.jsx)(y,{index:n,numbers:e[n]},n));return t}(this.state.allBoardNumbers);return Object(O.jsxs)("div",{className:"board-component-main",children:[Object(O.jsx)("button",{className:"new-number",onClick:function(){n=e.state.shuffledBoardNumbers[e.state.goneNumbers],e.handleNewNumber(n),e.props.socket.emit("newNumber",n)},children:"Generate New"}),Object(O.jsx)("button",{className:"new-number",onClick:function(){e.props.socket.emit("GameFinished")},children:"End Game"}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"new-number-host-container",children:Object(O.jsx)("p",{className:"new-number-host",children:this.state.shuffledBoardNumbers[this.state.goneNumbers-1]?this.state.shuffledBoardNumbers[this.state.goneNumbers-1]:""})})}),t,Object(O.jsx)(W,{socket:this.props.socket,playerType:"Host"}),Object(O.jsxs)("div",{className:"notification-parent",children:[Object(O.jsx)("div",{id:"ticket-board-container",className:"no-click",children:s}),Object(O.jsx)(N,{socket:this.props.socket,type:"host"})]})]})}}]),n}(s.Component);var H=function(e){var t=function(e,t){for(var n=[],s=0;s<e.length;++s)n[s]=Object(O.jsx)(w,{value:e[s].value,check:e[s].check,changeTicketState:t,index:s},s);return n}(e.numbers,(function(t,n){e.changeTicketState(e.index,t,n)}));return Object(O.jsx)("div",{className:"line",children:t})};var P=function(e){var t=function(t,n,s){e.changeTicketState(e.houseIndex,t,n,s)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(H,{index:0,numbers:e.houseNumbers[0],changeTicketState:t},0),Object(O.jsx)(H,{index:1,numbers:e.houseNumbers[1],changeTicketState:t},1),Object(O.jsx)(H,{index:2,numbers:e.houseNumbers[2],changeTicketState:t},2)]})};var F=function(e){for(var t=function(t,n,s,a){e.changeTicketState&&e.changeTicketState(t,n,s,a)},n=[],s=0;s<e.numHouses;++s)n[s]=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{changeTicketState:t,houseNumbers:e.houses[s],houseIndex:s},s),Object(O.jsx)("br",{})]});return Object(O.jsx)("div",{children:n})},B=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(m.a)(this,n),(s=t.call(this,e)).awardButtons=void 0,s.awardButtons=[];for(var a=function(e){s.awardButtons.push(Object(O.jsx)("button",{onClick:function(){console.log(s.props.awards[e].nameAward)},children:s.props.awards[e].nameAward},e))},r=1;r<s.props.awards.length;++r)a(r);return s}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"winning-buttons",children:this.awardButtons})}}]),n}(s.Component),G=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).state={isShown:!1},s}return Object(b.a)(n,[{key:"render",value:function(){for(var e=[],t=this.props.numbers.length-1;t>=0;--t)e.push(Object(O.jsx)("p",{children:this.props.numbers[t]},t));return Object(O.jsxs)("div",{className:"gone-numbers-container",children:[Object(O.jsx)("button",{id:"gone-numbers-button",onClick:function(){var e=document.getElementById("gone-numbers-menu"),t=document.getElementById("gone-numbers-button");null!==e&&null!==t&&("none"!==window.getComputedStyle(e).getPropertyValue("display")?(e.style.display="none",t.innerHTML="Gone Numbers"):(e.style.display="block",e.classList.add("animated","fadeIn"),t.innerHTML="X"))},children:"Gone Numbers"}),Object(O.jsx)("div",{id:"gone-numbers-menu",children:e})]})}}]),n}(s.Component),R=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).goneNumbers=void 0,s.generateRandomKey=function(){return 1e4*Math.random()},s.state={newNumber:0},s.goneNumbers=[],s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.on("newNumberFromHost",(function(t){e.goneNumbers.push(t.newNumber),e.setState({newNumber:t.newNumber})}))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"new-number-player",children:"New Number "}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"new-number-player-container custom-pulse",children:Object(O.jsx)("p",{className:"only-new-number-player",children:this.state.newNumber?this.state.newNumber:""})},this.generateRandomKey())}),Object(O.jsx)(G,{numbers:this.goneNumbers})]})}}]),n}(s.Component),M=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).houses=void 0,s.changeTicketState=function(e,t,n,a){var r=s.houses[e][t][n].value;s.houses[e][t][n]={value:r,check:a},console.log("here it is after changing",s.houses)},s.handleWinningCall=function(e){s.props.socket.emit("callWinFromPC",{callWinType:e,houses:s.houses})},s.winningButtons=Object(O.jsx)(B,{awards:s.props.awards,winCallBack:s.handleWinningCall},0),s.houses=h(s.props.numHouses),s.state={showTimer:!1},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.on("showTimer",(function(){e.setState({showTimer:!0})})),this.props.socket.on("callWinToHost",(function(){!0===e.state.showTimer&&e.setState({showTimer:!1})}))}},{key:"render",value:function(){var e=null;return this.state.showTimer&&(e=Object(O.jsx)(S,{socket:this.props.socket,endGame:this.props.endGame})),Object(O.jsxs)("div",{className:"pc-ticket",children:[Object(O.jsx)(R,{socket:this.props.socket}),e,Object(O.jsx)(W,{playerType:"PC",socket:this.props.socket}),Object(O.jsxs)("div",{className:"notification-parent",children:[Object(O.jsx)("div",{id:"ticket-board-container",children:Object(O.jsx)(F,{houses:this.houses,changeTicketState:this.changeTicketState,numHouses:this.props.numHouses})}),Object(O.jsx)(N,{socket:this.props.socket,type:"Pc"})]}),this.winningButtons]})}}]),n}(s.Component),I=n(52);var D=function(e){return Object(O.jsxs)("div",{className:"result-buttons",children:[Object(O.jsx)("button",{onClick:function(){e.resultCallback(e.win)},children:e.win}),Object(O.jsx)("button",{onClick:function(){e.resultCallback(e.bogey)},children:e.bogey})]})};function U(e,t){for(var n=0,s=0;s<t.length;s++)(0==t[s].value||_(e,t[s].value)&&t[s].check)&&n++;return n==t.length}function E(e){var t,n=0;do{t=e[n],n++}while(0!=t.value);return t}function _(e,t){var n=!1;if(0==t)return!0;for(var s=0;s<e.length;s++)if(e[s]==t){n=!0,console.log(t,e[s],"exits");break}return n}var L=function(e){var t="";"First Line"==e.callWinObj.callWinType&&(console.log(e.callWinObj.callWinType,e.callWinObj.goneNumbers,e.callWinObj.houses[0][0]),t=U(e.callWinObj.goneNumbers,e.callWinObj.houses[0][0])?"True":"False"),"Second Line"==e.callWinObj.callWinType&&(console.log(e.callWinObj.callWinType,e.callWinObj.goneNumbers,e.callWinObj.houses[0][1]),t=U(e.callWinObj.goneNumbers,e.callWinObj.houses[0][1])?"True":"False"),"Third Line"==e.callWinObj.callWinType&&(console.log(e.callWinObj.callWinType,e.callWinObj.goneNumbers,e.callWinObj.houses[0][2]),t=U(e.callWinObj.goneNumbers,e.callWinObj.houses[0][2])?"True":"False"),"Corners"==e.callWinObj.callWinType&&(t=function(e,t,n,s){var a=E(t),r=E(t.reverse()),o=E(s),i=E(s.reverse());return U(e,[a,r,o,i])}(e.callWinObj.goneNumbers,e.callWinObj.houses[0][0],e.callWinObj.houses[0][1],e.callWinObj.houses[0][2])?"True":"False"),"Full House"==e.callWinObj.callWinType&&(t=U(e.callWinObj.goneNumbers,e.callWinObj.houses[0][0])&&U(e.callWinObj.goneNumbers,e.callWinObj.houses[0][1])&&U(e.callWinObj.goneNumbers,e.callWinObj.houses[0][2])?"True":"False");var n=Object(O.jsxs)("div",{className:"host-ticket",children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"win-call-type",children:e.callWinObj.callWinType}),Object(O.jsxs)("p",{className:"player-name",children:[e.callWinObj.user.username,"'s Ticket (Win: ",t,")"]}),Object(O.jsx)("div",{className:"no-click",children:Object(O.jsx)(F,{houses:e.callWinObj.houses,numHouses:e.callWinObj.houses.length})}),Object(O.jsx)(D,{win:"Confirm Win!",bogey:"Bogey!",resultCallback:function(t){e.socket.emit("resultsFromHost",{result:t,callWinType:e.callWinObj.callWinType,userCalledForWin:e.callWinObj.user}),e.removeTicketFromHost(e.callWinObj.user.id+e.callWinObj.callWinType)}},0)]});return Object(O.jsx)(O.Fragment,{children:n})},z=n(32),Y=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).hasWalkthroughShown=void 0,s.walkThroughSteps=[{target:".host-ticket",content:"This is the player's ticket. They think they have won this award. Your task is to check the 'crossed' numbers on this ticket and tell the players if this is a valid win or a Bogey!",disableBeacon:!0,placement:"bottom",disableOverlay:!0}],s.removeTicket=function(e){var t=s.state.ticketFromPlayers;if(delete t[e],s.setState({ticketFromPlayers:t}),0===Object.keys(t).length&&t.constructor===Object){var n=document.querySelector("button.new-number");n.disabled=!1,n.classList.remove("disabled-button"),s.props.socket.emit("hostCompletedChecking")}},s.state={ticketFromPlayers:{},runWalkthrough:!1},s.hasWalkthroughShown=!s.props.showWalkthrough,s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.on("callWinToHost",(function(t){var n=e.state.ticketFromPlayers,s=!e.hasWalkthroughShown;n[t.user.id+t.callWinType]=t,e.setState({ticketFromPlayers:n,runWalkthrough:s});var a=document.querySelector("button.new-number");a.disabled=!0,a.classList.add("disabled-button")}))}},{key:"render",value:function(){for(var e=[],t=0,n=Object.entries(this.state.ticketFromPlayers);t<n.length;t++){var s=Object(I.a)(n[t],2),a=s[0],r=s[1],o=Object(O.jsx)(L,{socket:this.props.socket,callWinObj:r,removeTicketFromHost:this.removeTicket},a);e.push(o)}return Object(O.jsxs)(O.Fragment,{children:[e,Object(O.jsx)(z.a,{steps:this.walkThroughSteps,run:this.state.runWalkthrough,continuous:!0,disableOverlayClose:!0,showProgress:!0,showSkipButton:!0,spotlightClicks:!0,styles:{options:{zIndex:1e4,primaryColor:"#0e141f",textColor:"#0e141f"}}})]})}}]),n}(s.Component),q=(n(73),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).newNumber=0,s.state={remainingAwards:s.props.awards,whoWonWhat:{}},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.on("newNumberFromHost",(function(t){e.newNumber=t.newNumber;for(var n=0;n<e.state.remainingAwards.length;++n)if(0===parseInt(e.state.remainingAwards[n].numAward)){var s=document.querySelector(".winning-buttons button:nth-child(".concat(n,")"));s&&(s.disabled=!0,s.classList.add("disabled-button"))}})),this.props.socket.on("hostCompletedChecking",(function(){for(var t=!1,n=0;n<e.state.remainingAwards.length;++n)parseInt(e.state.remainingAwards[n].numAward)>0&&(t=!0);t||"Host"!==e.props.playerType||e.props.socket.emit("showTimer")})),this.props.socket.on("resultsForPC",(function(t){if("Confirm Win!"===t.result){for(var n=e.state.remainingAwards,s=e.state.whoWonWhat,a=0;a<n.length;++a)if(n[a].nameAward===t.callWinType)if(void 0===s[t.callWinType]&&(s[t.callWinType]={}),void 0===s[t.callWinType][e.newNumber]){s[t.callWinType][e.newNumber]=[t.calledWinUsername];var r=parseInt(n[a].numAward);--r,n[a].numAward=r.toString()}else s[t.callWinType][e.newNumber].push(t.calledWinUsername);e.setState({remainingAwards:n,whoWonWhat:s})}}))}},{key:"render",value:function(){for(var e=Object(O.jsx)("span",{className:"zero-awards-left",children:"x0"}),t=[],n=0;n<this.state.remainingAwards.length;++n){var s=[];for(var a in this.state.whoWonWhat[this.state.remainingAwards[n].nameAward])this.state.whoWonWhat[this.state.remainingAwards[n].nameAward].hasOwnProperty(a)&&s.push(this.state.whoWonWhat[this.state.remainingAwards[n].nameAward][a].join(" | "));t.push(s.join(", "))}for(var r=[],o=1;o<this.state.remainingAwards.length;++o)r.push(Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"award",children:this.state.remainingAwards[o].nameAward}),Object(O.jsx)("td",{className:"left",children:"0"===this.state.remainingAwards[o].numAward?e:"x"+this.state.remainingAwards[o].numAward}),Object(O.jsx)("td",{className:"won-by",children:t[o]})]},o));return Object(O.jsxs)("div",{className:"prizes-container",children:[Object(O.jsx)("p",{className:"award-status",children:"Award Status"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("table",{className:"prizes",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"award",children:"Award"}),Object(O.jsx)("th",{className:"left",children:"Left"}),Object(O.jsx)("th",{className:"won-by",children:"Won By"})]}),r]})]})}}]),n}(s.Component)),K=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(m.a)(this,n),(s=t.call(this,e)).diffTypeSteps=void 0;var a=[{target:".snackbar",content:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"You are the host!"}),Object(O.jsx)("p",{children:"Share this link with your friends so that they can play in this game created by you."})]}),disableBeacon:!0},{target:".config-table",content:"You can use this section to add, delete or customize awards",disableBeacon:!0},{target:".ready-players-container",content:"You will see all players and their status in the game here.",disableBeacon:!0},{target:".start-game",content:"Click this button after all players have joined to start the game.",disableBeacon:!0,spotlightClicks:!1}];return s.diffTypeSteps={config:{PC:[{target:"#pc-config-table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=number]",content:"Select the number of tickets you want to play with.",disableBeacon:!0},{target:"button.ready",content:'Click this button to mark yourself "Ready" after you select the number of tickets you want to play with.',disableBeacon:!0},{target:".ready-players-container",content:"You will see all players and their status in the game here.",disableBeacon:!0}],Host:a},game:{PC:[{target:".new-number-player-container",content:"The new random number called by the host will be shown here",disableBeacon:!0},{target:"#gone-numbers-button",content:"To view all the previous numbers, click this button.",disableBeacon:!0},{target:"#ticket-board-container",content:"This is your Tambola ticket. You can cross a number if it matches the called number.",disableBeacon:!0},{target:".winning-buttons",content:"If you think you are winning an award, call for that award using these buttons. Your ticket will then be checked by the host for a Bogey!",disableBeacon:!0},{target:"table.prizes",content:"Remaining awards and winners will be shown here.",disableBeacon:!0}],Host:[{target:".new-number",content:"Clicking this generates a new random number which will be displayed on every player's screen.",disableBeacon:!0},{target:"table.prizes",content:"Remaining awards and winners will be shown here.",disableBeacon:!0}]}},s}return Object(b.a)(n,[{key:"componentDidUpdate",value:function(e){console.log("componendidupdate called with run ",this.props.runWalkthrough),this.props.runWalkthrough!==e.runWalkthrough&&this.setState({run:this.props.runWalkthrough})}},{key:"render",value:function(){var e=this.props.playerType,t=this.props.type,n=this.diffTypeSteps[t][e];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(z.a,{steps:n,run:this.props.runWalkthrough,continuous:!0,disableOverlayClose:!0,showProgress:!0,showSkipButton:!0,spotlightClicks:!0,styles:{options:{zIndex:1e4,primaryColor:"#0e141f",textColor:"#0e141f"}}})})}}]),n}(s.Component),X=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).ticketFromPlayer=void 0,s.winningCallFromPlayer=void 0,s.userCalledForWin=void 0,s.reward=void 0,s.endGame=function(){s.setState({hasGameEnded:!0}),s.reward.rewardMe(),window.removeEventListener("beforeunload",d);var e=0,t=setInterval((function(){s.reward.rewardMe(),4===++e&&clearInterval(t)}),2e3)},s.state={hasGameEnded:!1},s}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=null,n=null,s="";return this.state.hasGameEnded&&(s="game-ended no-click",n=Object(O.jsx)("p",{className:"game-over animated rubberBand",children:"Game Over"})),"PC"===this.props.type?t=Object(O.jsxs)("div",{className:"everything-but-prizes",children:[Object(O.jsx)(K,{type:"game",playerType:"PC",runWalkthrough:this.props.runWalkthrough}),Object(O.jsx)("div",{className:s,children:Object(O.jsx)(M,{socket:this.props.socket,numHouses:this.props.numHouses,awards:this.props.awards,endGame:this.endGame})}),n]}):"Host"===this.props.type&&(t=Object(O.jsxs)("div",{className:"everything-but-prizes",children:[Object(O.jsx)(K,{type:"game",playerType:"Host",runWalkthrough:this.props.runWalkthrough}),Object(O.jsxs)("div",{className:s,children:[Object(O.jsx)(A,{socket:this.props.socket,endGame:this.endGame}),Object(O.jsx)(Y,{socket:this.props.socket,showWalkthrough:this.props.runWalkthrough})]}),n]})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"main-container",children:[t,Object(O.jsx)(q,{socket:this.props.socket,awards:this.props.awards,playerType:this.props.type,endGame:this.endGame})]}),Object(O.jsx)("div",{className:"game-over-reward",children:Object(O.jsx)(k.a,{ref:function(t){e.reward=t},type:"confetti",config:{elementCount:90,angle:70,spread:70,decay:.95,lifetime:100}})})]})}}]),n}(s.Component),J=(n(74),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).state={isShown:s.props.isShown},s}return Object(b.a)(n,[{key:"render",value:function(){var e,t=this,n="flex";return e=!1===this.props.isShown?"animated bounceOutRight":"animated bounceInRight",this.props.initiallyHidden&&(n="none"),Object(O.jsx)("div",{className:e,children:Object(O.jsxs)("div",{className:"snackbar",style:{display:n},children:[Object(O.jsx)("p",{className:"snackbar-text",children:this.props.message}),Object(O.jsx)("button",{onClick:function(){t.props.handleClose()},children:"X"})]})})}}]),n}(s.Component)),V=n(37),Q=n.n(V),Z=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).hideToastInitially=void 0,s.handlleHostConfigDone=function(){s.state.isModalOpen&&s.setState({isModalOpen:!1}),s.props.socket.emit("HostConfigDone",s.state.awards),console.log("config submitted from host",s.state.awards)},s.handleChangeHost=function(e){return function(t){var n=t.target,a=n.name,r=n.value,o=s.state.awards;o[e][a]=r,s.setState({awards:o})}},s.handleAddRow=function(){s.setState({awards:[].concat(Object(v.a)(s.state.awards),[{nameAward:"",numAward:""}])})},s.handleRemoveRow=function(){s.setState({awards:s.state.awards.slice(0,-1)})},s.handleRemoveSpecificRow=function(e){return function(){var t=Object(v.a)(s.state.awards);t.splice(e,1),s.setState({awards:t})}},s.handleChangePC=function(e){var t=e.target.value;"PC"===s.state.type&&s.setState({numHouses:t})},s.handleSubmit=function(e){if(s.setState({readyClient:!0}),"Host"===s.state.type)if(s.state.numOfUsers>0){for(var t=!0,n=0;n<s.state.PcsStatus.length;++n)s.state.PcsStatus[n].ready||(t=!0);t?s.handlleHostConfigDone():s.setState({isModalOpen:!0})}else s.hideToastInitially=!1,s.setState({isToastOpen:!0});else"PC"===s.state.type&&s.props.socket.emit("PcReady",s.state.numHouses);e.preventDefault()},s.state={type:"PC",numHouses:1,numOfUsers:0,userName:"",emp_code:"",readyHost:!1,readyClient:!0,gameFinished:!1,PcsStatus:[],isModalOpen:!1,isToastOpen:!1,watchTutorialModal:!0,runWalkthrough:!1,hasGameAlreadyStarted:!1,calledWinWithBogeyTicket:!1,awards:[{nameAward:"Users",numAward:"1"},{nameAward:"First Line",numAward:"1"},{nameAward:"Second Line",numAward:"1"},{nameAward:"Third Line",numAward:"1"},{nameAward:"Corners",numAward:"1"},{nameAward:"Full House",numAward:"1"}],hostDisconnected:!1},s.hideToastInitially=!0,s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.pathname.substr(window.location.pathname.lastIndexOf("/")+1),n=new URLSearchParams(window.location.search).get("type");this.setState({type:n}),"PC"==n&&(console.log("emp_code: "+this.props.emp_code),Q()({method:"post",url:"https://techkilla.com/tambola/tambola_users.php",headers:{"content-type":"application/json"},data:{name:this.props.name,emp_code:this.props.emp_code}}).then((function(e){console.log("result: "+e.data)})).catch((function(e){return console.log(e.message)}))),this.props.socket.emit("joinRoom",{room:t,username:this.props.name,emp_code:this.props.emp_code}),this.props.socket.on("gameHasAlreadyStarted",(function(){e.setState({hasGameAlreadyStarted:!0})})),this.props.socket.on("numOfUsers",(function(t){e.setState({numOfUsers:t})})),this.props.socket.on("userConnected",(function(t){"Host"===t.type&&(e.props.socket.on("notifyHostConnection",(function(t){var n=e.state.PcsStatus,s={user:t,ready:!1,numTickets:0};n.push(s),e.setState({PcsStatus:n}),e.props.socket.emit("PcsStatus",t,n)})),e.props.socket.on("PcReady",(function(t,n){for(var s=e.state.PcsStatus,a=0;a<s.length;++a)s[a].user.id===t.id&&(s[a].ready=!0,s[a].numTickets=n);e.setState({PcsStatus:s}),e.props.socket.emit("PcsStatus",t,s)})),e.props.socket.on("userDisconnect",(function(t){for(var n=e.state.PcsStatus,s=0;s<n.length;++s)n[s].user.id===t.id&&n.splice(s,1);e.setState({PcsStatus:n}),e.props.socket.emit("PcsStatus",t,n)})))})),this.props.socket.on("HostConfigDone",(function(t){e.setState({awards:t,readyHost:!0})})),this.props.socket.on("resultsForPC",(function(t){e.props.name==t.calledWinUsername&&e.props.emp_code==t.calledWinUserEmpCode&&("Bogey!"===t.result?(e.props.socket.disconnect(),e.setState({calledWinWithBogeyTicket:!0})):(console.log("emp_code winning: "+e.props.emp_code),Q()({method:"post",url:"https://techkilla.com/tambola/tambola_result.php",headers:{"content-type":"application/json"},data:{name:t.calledWinUsername,emp_code:t.calledWinUserEmpCode,award:t.callWinType}}).then((function(e){console.log("result: "+e.data)})).catch((function(e){return console.log(e.message)}))))})),this.props.socket.on("PcsStatus",(function(t){e.setState({PcsStatus:t})})),this.props.socket.on("HostDisconnected",(function(t){console.log(t,": host disconnected"),e.setState({hostDisconnected:!0}),e.props.socket.disconnect()})),this.props.socket.on("GameFinished",(function(){console.log("Game Finished"),"PC"==e.state.type&&e.props.socket.disconnect(),e.setState({gameFinished:!0})}))}},{key:"render",value:function(){var e=this;if(this.state.hostDisconnected)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"host-configuration",children:"Host left the game. Please close this tab. Generate a new room if you want to play more."}),Object(O.jsx)("a",{href:String(window.location),style:{color:"white"},children:Object(O.jsx)("button",{children:"Back"})})]});if(this.state.calledWinWithBogeyTicket)return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{className:"host-configuration",children:"Unfortunatly your ticket was bogey. Thankyou for playing ."})});if(this.state.gameFinished&&"Host"==this.state.type)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"host-configuration",children:"Game Finished. Thankyou for playing."}),Object(O.jsx)("a",{href:String(window.location),style:{color:"white"},children:Object(O.jsx)("button",{children:"Back"})})]});if(this.state.gameFinished)return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{className:"host-configuration",children:"Game Finished. Thankyou for playing."})});var t=null;return this.state.readyHost&&this.state.readyClient?t=Object(O.jsx)(X,{socket:this.props.socket,numHouses:this.state.numHouses,name:this.props.name,emp_code:this.props.emp_code,type:this.state.type,awards:this.state.awards,runWalkthrough:this.state.runWalkthrough}):"Host"===this.state.type?(this.state.awards[0]={nameAward:"Users",numAward:String(this.state.numOfUsers)},t=Object(O.jsxs)("div",{className:"config-container",children:[Object(O.jsx)(K,{playerType:"Host",type:"config",runWalkthrough:this.state.runWalkthrough}),Object(O.jsx)(J,{message:"There are no players in the game right now",isShown:this.state.isToastOpen,handleClose:function(){e.setState({isToastOpen:!1})},initiallyHidden:this.hideToastInitially}),Object(O.jsx)("h1",{className:"host-configuration",children:"Game Setup"}),Object(O.jsx)("hr",{}),Object(O.jsx)(g,{awards:this.state.awards,handleChangeHost:this.handleChangeHost,handleAddRow:this.handleAddRow,handleRemoveRow:this.handleRemoveRow,handleRemoveSpecificRow:this.handleRemoveSpecificRow,handleSubmit:this.handleSubmit})]})):"PC"===this.state.type&&(t=Object(O.jsxs)("div",{className:"config-container",children:[Object(O.jsx)(K,{playerType:"PC",type:"config",runWalkthrough:this.state.runWalkthrough}),Object(O.jsx)("h1",{className:"pc-configuration",children:"Player Setup"}),Object(O.jsx)("hr",{}),Object(O.jsx)("form",{onSubmit:this.handleSubmit,children:Object(O.jsx)("table",{className:"config-table",id:"pc-config-table",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"number-tickets",children:"Number of Users:"}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"number",max:"6",min:"1",disabled:!0,value:String(this.state.numOfUsers),onChange:this.handleChangePC,required:!0})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Waiting for host to start the game"}),Object(O.jsx)("td",{})]})]})})})]})),Object(O.jsx)(O.Fragment,{children:t})}}]),n}(s.Component),$=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(m.a)(this,n),(s=t.call(this,e)).handleChange=function(e){var t=e.target.value;""!==t?s.setState({isEmpty:!1,name:t}):s.setState({isEmpty:!0,name:t})},s.handleKeyPress=function(e){var t=e.target.value;"Enter"===e.key&&""!==t&&(console.log("enter press here!"),s.setState({submitted:!0}))},s.handleSubmit=function(e){s.setState({submitted:!0}),e.preventDefault()};var a=new URLSearchParams(window.location.search),r=a.get("name"),o=a.get("emp_id"),i="_"+Math.random().toString(36).substr(2,9);return void 0==r&&(r="guest"+i),void 0==o&&(o="emp"+i),s.state={isEmpty:!1,name:r,submitted:!0,emp_code:o},s}return Object(b.a)(n,[{key:"render",value:function(){if(this.state.submitted)return Object(O.jsx)(Z,{socket:this.props.socket,name:this.state.name,emp_code:this.state.emp_code});var e={};e=this.state.isEmpty?{visibility:"hidden"}:{visibility:"visible"};var t=Object(O.jsx)("div",{style:e,children:Object(O.jsx)("button",{onClick:this.handleSubmit,children:"OK"})});return Object(O.jsx)("div",{className:"enter-name-container",children:Object(O.jsxs)("div",{className:"enter-name",children:[Object(O.jsx)("p",{className:"enter-name-question",children:"Hi. What's your name?"}),Object(O.jsx)("input",{id:"enter-name",type:"text",value:this.state.name,placeholder:"Type your answer here...",onChange:this.handleChange,onKeyPress:this.handleKeyPress,spellCheck:"false",autoFocus:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),t]})})}}]),n}(s.Component),ee=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).state={socket:Object(f.a)("/",{upgrade:!1,transports:["websocket"]})},s}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",src:"../logo.png",alt:""}),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)($,{socket:this.state.socket})})]})}}]),n}(s.Component);window.addEventListener("beforeunload",d),o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(ee,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.dc1a36f5.chunk.js.map