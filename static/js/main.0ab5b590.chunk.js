(this["webpackJsonptodo-ts-redux"]=this["webpackJsonptodo-ts-redux"]||[]).push([[0],{271:function(e,t,n){},399:function(e,t){},401:function(e,t){},416:function(e,t){},418:function(e,t){},446:function(e,t){},448:function(e,t){},449:function(e,t){},454:function(e,t){},456:function(e,t){},462:function(e,t){},464:function(e,t){},483:function(e,t){},495:function(e,t){},498:function(e,t){},515:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),i=n(14),o=n.n(i),s=(n(271),n(10)),u=n(22),l=n(564),j=n(557),d=n(555),b=n(565),f=n(571),m=n(8),O=n(27),h=n.n(O),p=n(48),g=n(24),x=n(248),v=n.n(x).a.create({baseURL:"https://data-multi-user.herokuapp.com/"}),k=Object(g.b)("task/fetchToken",function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("tasks",{params:{order:t.order,filterBy:t.filterBy,page:t.activePage,taskCount:t.itemPerPage}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(g.b)("task/createTask",function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("task",{name:t,done:!1});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(g.b)("task/changeTaskName",function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.patch("task/".concat(t.id),{name:t.name});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(g.b)("task/changeDoneStatus",function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.patch("task/".concat(t.id),{done:t.done});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(g.b)("task/deketetask",function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.delete("task/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(g.c)({name:"task",initialState:{tasks:[],pageCount:1,activePage:1,isLoading:!1,hasError:!1,changeElement:null},reducers:{changeActivePage:function(e,t){e.activePage=t.payload}},extraReducers:(r={},Object(m.a)(r,k.pending,(function(e){e.isLoading=!1,e.hasError=!1})),Object(m.a)(r,k.fulfilled,(function(e,t){e.tasks=t.payload.tasks,e.pageCount=t.payload.pageCount,e.isLoading=!0,e.hasError=!1})),Object(m.a)(r,k.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(m.a)(r,y.pending,(function(e){e.isLoading=!0})),Object(m.a)(r,y.fulfilled,(function(e){e.changeElement=!e.changeElement})),Object(m.a)(r,y.rejected,(function(e){e.hasError=!0})),Object(m.a)(r,S.pending,(function(e){})),Object(m.a)(r,S.fulfilled,(function(e){e.changeElement=!e.changeElement})),Object(m.a)(r,S.rejected,(function(e){e.hasError=!0})),Object(m.a)(r,w.pending,(function(e){e.isLoading=!0})),Object(m.a)(r,w.fulfilled,(function(e){e.changeElement=!e.changeElement})),Object(m.a)(r,w.rejected,(function(e){e.hasError=!0})),Object(m.a)(r,E.pending,(function(e){e.isLoading=!0})),Object(m.a)(r,E.fulfilled,(function(e){e.changeElement=!e.changeElement})),Object(m.a)(r,E.rejected,(function(e){e.hasError=!0})),r)}),C=N.actions.changeActivePage,P=function(e){return e.task.tasks},L=function(e){return e.task.pageCount},I=function(e){return e.task.isLoading},B=function(e){return e.task.changeElement},F=function(e){return e.task.activePage},T=N.reducer,q=n(2),R=function(){var e=Object(s.b)();return Object(q.jsx)(f.a,{margin:"normal",id:"outlined-basic",label:"New to do",variant:"outlined",size:"small",fullWidth:!0,type:"text",onKeyPress:function(t){return function(t){var n=t.key,r=t.target;"Enter"===n&&r.value.trim()&&(e(y(r.value)),r.value="")}(t)}})},A=n(556),D=n(517),W=n(250),U=n.n(W),V=n(251),z=n.n(V),K=function(){var e=Object(s.b)(),t=Object(s.c)(F),n=Object(s.c)(L),r=new Array(n).fill(1).map((function(e,t){return t+1})),a=function(t){"string"===typeof t.currentTarget.value&&e(C(Number(t.currentTarget.value)))};return Object(q.jsxs)(A.a,{color:"primary","aria-label":"contained button group",children:[Object(q.jsx)(D.a,{onClick:function(e){return a(e)},value:1,children:Object(q.jsx)(U.a,{})}),r.map((function(e){return Object(q.jsx)(D.a,{onClick:function(e){return a(e)},value:e,variant:t===e?"contained":void 0,children:e},"item-".concat(e))})),Object(q.jsx)(D.a,{onClick:function(e){return a(e)},value:r.length,children:Object(q.jsx)(z.a,{})})]})},G=n(518),J=n(558),M=n(572),H=n(550),$=n(560),Q=n(561),X=n(559),Y=n(252),Z=n.n(Y),_=function(e){var t=e.task,n=Object(s.b)(),r=Object(c.useState)(!1),a=Object(u.a)(r,2),i=a[0],o=a[1],l=Object(c.useState)(!1),d=Object(u.a)(l,2),b=d[0],f=d[1],m=function(){o(!i)},O=t.createdAt.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),h=t.createdAt.match(/T(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]))/g),p=null!==O&&null!==h?"".concat(h[0].replace("T","")," ").concat(O[0]):"Not date";return Object(q.jsx)(j.a,{container:!0,children:Object(q.jsxs)(G.a,{children:[Object(q.jsx)(j.a,{item:!0,xs:1,children:Object(q.jsx)(J.a,{children:Object(q.jsx)(M.a,{color:"primary",onChange:function(e){return n(w({id:e.target.value,done:e.target.checked}))},checked:t.done,value:t.id})})}),Object(q.jsx)(j.a,{item:!0,xs:8,children:i?Object(q.jsx)(H.a,{fullWidth:!0,defaultValue:t.name,autoFocus:!0,name:t.id,onBlur:function(){return m()},onKeyDown:function(e){return"Escape"===e.key&&o(!1)},onKeyPress:function(e){return function(e){var t=e.key,r=e.target;"Enter"===t&&r.value.trim()&&n(S({id:r.name,name:r.value}))}(e)},onKeyUp:function(e){return"Enter"===e.key&&o(!1)}}):Object(q.jsx)($.a,{primary:t.name,onClick:function(){return m()}})}),Object(q.jsx)(j.a,{item:!0,xs:2,children:Object(q.jsx)($.a,{primary:p})}),Object(q.jsx)(j.a,{item:!0,xs:1,children:Object(q.jsx)(Q.a,{children:Object(q.jsx)(X.a,{edge:"end",disabled:b,"aria-label":"delete",onClick:function(e){n(E(e.currentTarget.value)),f(!0)},value:t.id,children:Object(q.jsx)(Z.a,{})})})})]})})},ee=n(89),te=n(569),ne=n(562),re=function(e){var t=e.onChangeItemFilter,n=e.itemPerPage;return Object(q.jsxs)(te.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:t,children:[Object(q.jsx)(ne.a,{value:5,children:"5"}),Object(q.jsx)(ne.a,{value:10,children:"10"}),Object(q.jsx)(ne.a,{value:20,children:"20"})]})},ae=n(563),ce=Object(g.c)({name:"filter",initialState:{filterByButtons:["all","done","undone"],filterBy:"all",orderValue:["ASC","DESC"],order:"DESC"},reducers:{changeOrder:function(e,t){e.order=t.payload},changeFilterBy:function(e,t){e.filterBy=t.payload}}}),ie=ce.actions,oe=ie.changeOrder,se=ie.changeFilterBy,ue=function(e){return e.filter.orderValue},le=function(e){return e.filter.filterBy},je=function(e){return e.filter.order.toUpperCase()},de=function(e){return e.filter.filterByButtons},be=ce.reducer,fe=function(){var e=Object(s.c)(de),t=Object(s.c)(le),n=Object(s.b)();return Object(q.jsx)(A.a,{color:"primary","aria-label":"outlined primary button group",children:e.map((function(e){return Object(q.jsx)(D.a,{size:"medium",variant:t===e?"contained":void 0,onClick:function(e){n(se(e.currentTarget.value)),n(C(1))},value:e,children:e},e)}))})},me=function(){var e=Object(s.c)(je),t=Object(s.c)(ue),n=Object(s.b)();return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(A.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:t.map((function(t){return Object(q.jsx)(D.a,{size:"medium",variant:e===t?"contained":void 0,onClick:function(e){return n(oe(e.currentTarget.value))},value:t,children:t},t)}))})})},Oe=Object(ae.a)((function(e){return{root:{flexGrow:1},paper:{paddingTop:e.spacing(1),paddingBottom:e.spacing(2),color:e.palette.text.secondary,justifyContent:"space-between"}}})),he=function(e){var t=e.onChangeItemFilter,n=e.itemPerPage,r=Oe();return Object(q.jsx)("div",{className:r.paper,children:Object(q.jsxs)(j.a,{container:!0,spacing:3,children:[Object(q.jsx)(j.a,{item:!0,xs:6,children:Object(q.jsx)(fe,{})}),Object(q.jsxs)(j.a,{item:!0,xs:3,alignItems:"center",container:!0,children:[Object(q.jsx)(ee.a,{variant:"subtitle1",children:"Sort by:"}),Object(q.jsx)(me,{})]}),Object(q.jsxs)(j.a,{item:!0,xs:3,alignItems:"center",container:!0,children:[Object(q.jsx)(ee.a,{variant:"subtitle1",children:"Page count"}),Object(q.jsx)(re,{onChangeItemFilter:t,itemPerPage:n})]})]})})},pe=function(){var e=Object(c.useState)(5),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(s.c)(je),i=Object(s.c)(le),o=Object(s.c)(P),f=Object(s.c)(I),m=Object(s.c)(L),O=Object(s.c)(B),h=Object(s.c)(F),p=Object(s.b)();Object(c.useEffect)((function(){sessionStorage.token&&p(k({order:a,filterBy:i,activePage:h,itemPerPage:n}))}),[p,O,h,a,i,n]);return Object(q.jsx)(l.a,{maxWidth:"md",children:Object(q.jsxs)(j.a,{children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(R,{})}),Object(q.jsx)(he,{onChangeItemFilter:function(e){r(e.target.value),p(C(1))},itemPerPage:n}),Object(q.jsx)(j.a,{item:!0,alignItems:"center",container:!0,xs:12,children:f&&m>1&&Object(q.jsx)(K,{})}),Object(q.jsx)(d.a,{children:f?o.map((function(e){return Object(q.jsx)(_,{task:e},e.id)})):Object(q.jsx)(b.a,{})})]})})},ge=n(56),xe=n(41),ve=n(77),ke=function(e){var t=Object(ge.c)(e),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(q.jsx)(j.a,{item:!0,children:Object(q.jsx)(f.a,Object(ve.a)(Object(ve.a)({fullWidth:!0,margin:"normal",error:!(!a.touched||!a.error),helperText:a.touched&&a.error&&a.error,variant:"outlined"},r),e))})},ye=Object(g.b)("user/fetchToken",function(){var e=Object(p.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Se=Object(g.b)("user/registration",function(){var e=Object(p.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("signup",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),we={firstName:sessionStorage.firstName||"",lastName:sessionStorage.lastName||"",token:sessionStorage.token||"",isLoading:!0,hasError:!1},Ee=Object(g.c)({name:"user",initialState:we,reducers:{clearUserData:function(e){e.firstName=e.lastName=e.token="",e.isLoading=e.hasError=!1}},extraReducers:(a={},Object(m.a)(a,ye.pending,(function(e){e.isLoading=!1,e.hasError=!1})),Object(m.a)(a,ye.fulfilled,(function(e,t){e.token=t.payload.token,e.firstName=t.payload.firstName,e.lastName=t.payload.lastName,sessionStorage.setItem("token",e.token),sessionStorage.setItem("firstName",e.firstName),sessionStorage.setItem("lastName",e.lastName),e.isLoading=!0,e.hasError=!1})),Object(m.a)(a,ye.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(m.a)(a,Se.pending,(function(e){e.isLoading=!1,e.hasError=!1})),Object(m.a)(a,Se.fulfilled,(function(e,t){e.token=t.payload.token,e.firstName=t.payload.firstName,e.lastName=t.payload.lastName,sessionStorage.setItem("token",e.token),sessionStorage.setItem("firstName",e.firstName),sessionStorage.setItem("lastName",e.lastName),e.isLoading=!0,e.hasError=!1})),Object(m.a)(a,Se.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),a)}),Ne=Ee.actions.clearUserData,Ce=function(e){return e.user.firstName},Pe=function(e){return e.user.lastName},Le=function(e){return e.user.isLoading},Ie=Ee.reducer,Be=Object(g.c)({name:"auth",initialState:{loginForm:!0,authStatus:!1},reducers:{toggleLoginForm:function(e){e.loginForm=!e.loginForm},toggleAuthStatus:function(e,t){e.authStatus=t.payload},logOut:function(e){sessionStorage.clear(),e.authStatus=!1}}}),Fe=Be.actions,Te=Fe.toggleLoginForm,qe=Fe.toggleAuthStatus,Re=Fe.logOut,Ae=function(e){return e.auth.loginForm},De=function(e){return e.auth.authStatus},We=Be.reducer,Ue=function(){var e=Object(s.b)();return Object(q.jsx)(ge.b,{initialValues:{email:"",password:""},validationSchema:xe.a({email:xe.b().email("Invalid email address").required("Required"),password:xe.b().min(8,"Must be 8 characters or more").required("Required")}),onSubmit:function(t,n){var r=n.setSubmitting;e(ye(t)),e(qe(!0)),r(!1)},children:Object(q.jsxs)(ge.a,{children:[Object(q.jsx)(ke,{name:"email",label:"Email"}),Object(q.jsx)(ke,{name:"password",label:"Password",type:"password",autoComplete:"current-password"}),Object(q.jsx)(j.a,{item:!0,children:Object(q.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Log in"})})]})})},Ve=function(){var e=Object(s.b)();return Object(q.jsx)(ge.b,{initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:xe.a({firstName:xe.b().required("Required"),lastName:xe.b().required("Required"),email:xe.b().email("Invalid email address").required("Required"),password:xe.b().min(8,"Must be 8 characters or more").required("Required")}),onSubmit:function(t,n){var r=n.setSubmitting;e(Se(t)),e(qe(!0)),r(!1)},children:Object(q.jsxs)(ge.a,{children:[Object(q.jsx)(ke,{name:"firstName",label:"First name"}),Object(q.jsx)(ke,{name:"lastName",label:"Last name"}),Object(q.jsx)(ke,{name:"email",label:"Email"}),Object(q.jsx)(ke,{name:"password",label:"Password",type:"password",autoComplete:"current-password"}),Object(q.jsx)(j.a,{item:!0,children:Object(q.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Sign up"})})]})})},ze=function(){var e=Object(s.c)(Ae);return Object(q.jsx)(j.a,{container:!0,spacing:10,justify:"center",alignItems:"center",children:Object(q.jsx)(j.a,{item:!0,xs:5,children:e?Object(q.jsx)(Ue,{}):Object(q.jsx)(Ve,{})})})},Ke=n(574),Ge=n(570),Je=n(568),Me=n(566),He=n(567),$e=Object(ae.a)((function(e){return{root:{justifyContent:"space-between"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Qe=function(){var e=Object(s.c)(Ae),t=Object(s.c)(Ce),n=Object(s.c)(Pe),r=Object(s.c)(De),a=Object(s.c)(Le),c=Object(s.b)(),i=$e();return Object(q.jsx)("div",{className:i.root,children:Object(q.jsx)(Me.a,{position:"static",children:Object(q.jsx)(He.a,{children:Object(q.jsxs)(j.a,{container:!0,alignItems:"center",justify:"space-between",children:[Object(q.jsx)(j.a,{item:!0,xs:3,children:Object(q.jsx)(ee.a,{variant:"h6",className:i.title,children:"To do list"})}),r&&a&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(j.a,{item:!0,xs:8,children:Object(q.jsx)(ee.a,{variant:"body1",align:"right",children:"".concat(t," ").concat(n)})}),Object(q.jsx)(j.a,{item:!0,xs:1,children:Object(q.jsx)(D.a,{color:"inherit",onClick:function(){return c(Re())},children:"Log Out"})})]}),Object(q.jsx)(j.a,{item:!0,xs:1,children:!(r&&a)&&Object(q.jsx)(D.a,{color:"inherit",onClick:function(){c(Te()),c(Ne())},children:e?"Sign up":"Login"})})]})})})})},Xe=Object(g.c)({name:"error",initialState:{errorStatus:!1,statusCode:null,message:"",errorStack:{}},reducers:{createError:function(e,t){e.statusCode=t.payload.statusCode,e.message=t.payload.message,e.errorStatus=!0},closeError:function(e,t){"clickaway"!==t.payload&&(e.errorStatus=!1,e.message=e.message="",e.errorStack={})}}}),Ye=Xe.actions,Ze=Ye.createError,_e=Ye.closeError,et=function(e){return e.error.errorStatus},tt=function(e){return e.error.statusCode},nt=function(e){return e.error.message},rt=Xe.reducer,at=n(258);var ct=function(){var e=Object(s.c)(De),t=Object(s.c)(Le),n=Object(s.c)(et),r=Object(s.c)(tt),a=Object(s.c)(nt),i=Object(s.b)();return Object(c.useLayoutEffect)((function(){var e=sessionStorage.getItem("token");if(null!==e){var t=at.decode(e.split(" ")[1]);null!==t&&"string"!==typeof t&&Date.now()>t.exp&&i(qe(!0)),v.defaults.headers={Authorization:sessionStorage.getItem("token")}}})),Object(q.jsxs)(l.a,{children:[Object(q.jsx)(Qe,{}),e&&t&&Object(q.jsx)(pe,{}),!(e&&t)&&Object(q.jsx)(ze,{}),Object(q.jsx)(Ke.a,{open:n,autoHideDuration:6e3,onClose:function(e,t){return i(_e(t))},children:Object(q.jsxs)(Ge.a,{severity:"error",children:[Object(q.jsx)(Je.a,{children:"Error ".concat(r)}),a]})})]})},it=Object(g.a)({reducer:{auth:We,user:Ie,filter:be,error:rt,task:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v.interceptors.response.use(void 0,(function(e){var t;return[422,404,400].includes(null===(t=e.response)||void 0===t?void 0:t.status)&&(it.dispatch(Ze(e.response.data)),"Invalid token"===e.response.data.message&&it.dispatch(Re()),console.log("interceptors:",e.response.data)),Promise.reject(e)})),o.a.render(Object(q.jsx)(s.a,{store:it,children:Object(q.jsx)(ct,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[515,1,2]]]);
//# sourceMappingURL=main.0ab5b590.chunk.js.map