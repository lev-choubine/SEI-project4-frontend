(this["webpackJsonpmern-auth-frontend"]=this["webpackJsonpmern-auth-frontend"]||[]).push([[0],{134:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c(66),i=c.n(s),o=c(17),r=(c(77),c(2)),l=c(11),d=c(71),j=c(3),u=c.n(j),m=c(4),b=c(29);var p=function(e){e?u.a.defaults.headers.common.Authorization=e:delete u.a.defaults.headers.common.Authorization},h=(c(95),c(96),c(97),function(e){return Object(a.jsx)("nav",{className:"nav",children:e.isAuth?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"userNav",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{alt:e.user.name,src:e.user.image_url,class:"iconPic2"})}),Object(a.jsx)("div",{className:"namaewa",children:e.user.name}),Object(a.jsx)("div",{className:"namaewa",children:Object(a.jsx)("button",{className:"namaewa navbutton",onClick:function(){var t;document.querySelector("#profile")||(e.user&&(t="/chat/".concat(e.user.id)),window.location.href=t),document.querySelector("#home").style.display="block",document.querySelector("#profile").style.display="none"},children:"Home"})}),Object(a.jsx)("div",{className:"namaewa",children:Object(a.jsx)("button",{className:"namaewa navbutton",onClick:function(){var t;document.querySelector("#profile")||(e.user&&(t="/chat/".concat(e.user.id)),window.location.href=t),document.querySelector("#profile").style.display="block",document.querySelector("#home").style.display="none"},children:"Profile"})}),Object(a.jsx)("div",{className:"namaewa",children:Object(a.jsx)("span",{onClick:e.handleLogout,className:"nav-link logout-link",children:"Logout"})})]})}):Object(a.jsxs)("div",{className:"userNav2",children:[Object(a.jsx)("div",{className:"namaewa one",children:Object(a.jsx)(o.b,{to:"/signup",children:"Create Account"})}),Object(a.jsx)("div",{className:"namaewa two",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})})]})})});var O=function(){return Object(a.jsx)("footer",{className:"footer bg-dark",children:Object(a.jsx)("div",{className:"container text-center",children:Object(a.jsx)("span",{children:"\u30bb\u30c8\u30aa\u30b9\u30c8\u30fc\u30b1\u30f3"})})})};var f=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"landing-header",children:"Token"}),Object(a.jsx)("img",{className:"landing-pic",src:"https://res.cloudinary.com/dok4pz3i3/image/upload/v1611757637/foptixzgdufugkds2vgg.jpg"})]})})},x=c(7),v=c.n(x),g=c(18),y=c(30),N=c(31),k=c(33),w=c(32),S=function(e){Object(k.a)(c,e);var t=Object(w.a)(c);function c(e){var a;return Object(y.a)(this,c),(a=t.call(this,e)).handleImageUpload=function(){var e=document.querySelector('input[type="file"]').files,t=new FormData;return t.append("file",e[0]),t.append("upload_preset","ml_default"),fetch("https://api.Cloudinary.com/v1_1/dok4pz3i3/image/upload",{method:"POST",body:t}).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.url){e.next=4;break}return alert("Must choose a file to upload!"),e.abrupt("return");case 4:a.props.photo(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.state={imageUrl:null,imageAlt:null,redirect:!1},a}return Object(N.a)(c,[{key:"render",value:function(){var e=this.state,t=e.imageUrl,c=e.imageAlt;return Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{className:"left-side",children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"choosePicForm",children:[Object(a.jsxs)("div",{id:"choose-file-btn-div",class:"btn btn-light",children:[Object(a.jsx)("div",{id:"choose-file-sub-div",children:"choose file"}),Object(a.jsx)("input",{id:"choose-file-btn",className:"chooseFile",type:"file",class:"hide_file"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"button",className:"submitPhoto btn btn-light",onClick:this.handleImageUpload,children:"Submit"})})]})})}),Object(a.jsx)("section",{className:"right-side",children:t&&Object(a.jsx)("img",{src:t,alt:c,className:"displayed-image"})})]})}}]),c}(n.Component),C=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),p=b[0],h=b[1],O=Object(n.useState)(""),f=Object(r.a)(O,2),x=f[0],y=f[1],N=Object(n.useState)(!1),k=Object(r.a)(N,2),w=k[0],C=k[1],I=Object(n.useState)(""),P=Object(r.a)(I,2),A=P[0],B=P[1],E=Object(n.useState)(""),F=Object(r.a)(E,2),M=F[0],_=F[1],U=Object(n.useState)(""),L=Object(r.a)(U,2),T=L[0],D=L[1],q=Object(n.useState)(""),z=Object(r.a)(q,2),H=z[0],Y=z[1],J=Object(n.useState)(""),K=Object(r.a)(J,2),V=K[0],X=K[1],G=Object(n.useState)(""),Z=Object(r.a)(G,2),R=Z[0],W=Z[1],Q=function(e){D(e.target.value)},$=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(p===x&&p.length>=8&&A>17&&""!==R&&""!==A&&""!==c&&""!==T&&""!==H&&""!==V)){e.next=7;break}return a={name:c,email:l,password:p,age:A,gender:T,bio:M,preference:H,location:V,photo:R},e.next=5,u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/register"),a).then((function(e){C(!0)})).catch((function(e){alert("Email already in use")}));case 5:e.next=8;break;case 7:p!==x?alert("Password confirmation does not match password"):p.length<8?alert("Password must be at least 8 characters"):A<18||""===A?alert("Must be 18 or over"):""===R?alert("must upload image"):""===c?alert("must register a name"):""===T?alert("must specify gender"):""===T?alert("must specify preference"):""===V&&alert("Please select your location");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return w?Object(a.jsx)(m.a,{to:"/login"}):Object(a.jsx)("div",{className:"row mt-4",children:Object(a.jsx)("div",{className:"col-md-7 offset-md-3",children:Object(a.jsxs)("div",{className:"card card-body",children:[Object(a.jsx)("h2",{className:"py-2",children:"Signup"}),Object(a.jsxs)("form",{onSubmit:$,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",value:c,onChange:function(e){s(e.target.value)},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",value:l,onChange:function(e){d(e.target.value)},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",value:p,onChange:function(e){h(e.target.value)},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(a.jsx)("input",{type:"password",name:"confirmPassword",value:x,onChange:function(e){y(e.target.value)},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"age",children:"Age (must be over 18)"}),Object(a.jsx)("input",{type:"number",name:"age",value:A,onChange:function(e){B(parseInt(e.target.value))},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"location",children:"Location"}),Object(a.jsxs)("select",{name:"location",id:"location-drop-down",onChange:function(e){X(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select your location"}),Object(a.jsx)("option",{value:"Atlanta, GA",children:"Atlanta, GA"}),Object(a.jsx)("option",{value:"Austin, TX",children:"Austin, TX"}),Object(a.jsx)("option",{value:"Boston, MA",children:"Boston, MA"}),Object(a.jsx)("option",{value:"Cleveland, OH",children:"Cleveland, OH"}),Object(a.jsx)("option",{value:"DC",children:"DC"}),Object(a.jsx)("option",{value:"Denver, CO",children:"Denver, CO"}),Object(a.jsx)("option",{value:"El Paso, TX",children:"El Paso, TX"}),Object(a.jsx)("option",{value:"Jacksonville, FL",children:"Jacksonville, FL"}),Object(a.jsx)("option",{value:"Kansas City, KS",children:"Kansas City, KS"}),Object(a.jsx)("option",{value:"Las Vegas, NV",children:"Las Vegas, NV"}),Object(a.jsx)("option",{value:"Los Angeles, CA",children:"Los Angeles, CA"}),Object(a.jsx)("option",{value:"Miami, FL",children:"Miami, FL"}),Object(a.jsx)("option",{value:"Minneapolis, MN",children:"Minneapolis, MN"}),Object(a.jsx)("option",{value:"Nashville, TN",children:"Nashville, TN"}),Object(a.jsx)("option",{value:"New York, NY",children:"New York, NY"}),Object(a.jsx)("option",{value:"Oakland, CA",children:"Oakland, CA"}),Object(a.jsx)("option",{value:"Philadelphia, PA",children:"Philadelphia, PA"}),Object(a.jsx)("option",{value:"Phoenix, AZ",children:"Phoenix, AZ"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"Bio",children:"Bio"}),Object(a.jsx)("input",{type:"text",name:"bio",value:M,onChange:function(e){_(e.target.value)},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"radio",id:"male",name:"gender",value:"male",onChange:Q}),Object(a.jsx)("label",{for:"male",children:"Male"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"radio",id:"female",name:"gender",value:"female",onChange:Q}),Object(a.jsx)("label",{for:"female",children:"Female"}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"Preference",children:"Preference"}),Object(a.jsxs)("select",{name:"preference",id:"preference",onChange:function(e){Y(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select your preference"}),Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Both",children:"Both"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Upload your profile picture"}),Object(a.jsx)(S,{photo:W}),Object(a.jsx)("input",{type:"hidden",name:"photo",value:R,onChange:function(e){W(e.target.value)},className:"form-control"})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Submit"})]})]})})})},I="https://token-app-backend.herokuapp.com/",P=function(e){var t,c=Object(n.useState)(""),s=Object(r.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(r.a)(l,2),j=d[0],h=d[1],O=function(){var t=Object(g.a)(v.a.mark((function t(c){var a,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),n={email:(a={email:i,password:j}).email,online:!0},t.next=5,u.a.post("".concat(I,"/api/users/login"),a).then((function(t){var c=t.data.token;localStorage.setItem("jwtToken",c),p(c);var a=Object(b.a)(c);e.nowCurrentUser(a),u.a.post("".concat(I,"/api/users/profile/status"),n)})).catch((function(e){alert("Either email or password is incorrect")}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.user&&(t="/chat/".concat(e.user.id)),e.user?Object(a.jsx)(m.a,{to:t}):Object(a.jsx)("div",{className:"row mt-4",children:Object(a.jsx)("div",{className:"col-md-7 offset-md-3",children:Object(a.jsxs)("div",{className:"card card-body",children:[Object(a.jsx)("h2",{className:"py-2",children:"Login"}),Object(a.jsxs)("form",{onSubmit:O,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",value:i,onChange:function(e){o(e.target.value)},className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){h(e.target.value)},className:"form-control"})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Submit"})]})]})})})},A=c(28),B=c(70),E=c(68),F=c.n(E),M="newChatMessage",_=function(e,t,c,a,s){var i=Object(n.useState)([]),o=Object(r.a)(i,2),d=o[0],j=o[1],u=Object(n.useRef)();Object(n.useEffect)((function(){return u.current=F()("https://token-app-backend.herokuapp.com/",{query:{roomId:e}}),u.current.on(M,(function(e){var t=Object(l.a)(Object(l.a)({},e),{},{ownedByCurrentUser:e.senderId===u.current.id});j((function(e){return[].concat(Object(B.a)(e),[t])}))})),function(){u.current.disconnect()}}),[e]);return{messages:d,sendMessage:function(e){u.current.emit(M,{body:e,senderId:t,id:c,type:a,image:s})}}},U=c(69),L=c.n(U);var T=function(e){var t=Object(n.useState)(),c=Object(r.a)(t,2),s=(c[0],c[1]),i=e.user._id,o=e.me,l=e.id,d=e.pic,j=Date.now(),m=_(i,o,l,"swipe",d,j),b=(m.messages,m.sendMessage),p=Object(n.useState)("I like your profile!"),h=Object(r.a)(p,2),O=h[0],f=h[1],x=Object(n.useState)([]),v=Object(r.a)(x,2),g=(v[0],v[1],function(e){return!0===e?"Online":"Offline"}),y=function(t,c){"left"===t?e.toggle():function(){b(O),f("Your profile was liked by ".concat(e.me));var t={id:e.id,content:"".concat(e.me," liked your profile!"),date:Date.now(),my_id:i,type:"swipe",read:!1,pic:e.pic,email:e.user.email,name:e.me,online:e.status};u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/notifications"),t).then((function(t){e.toggle()})).catch((function(e){}))}(),s(t)};return Object(a.jsx)("div",{children:0===e.user.length?Object(a.jsx)("p",{children:"Sorry We Couldn't Find Anyone in your area!"}):Object(a.jsx)("div",{className:"like-button",children:Object(a.jsx)("div",{id:"me",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"tinder",children:Object(a.jsx)(L.a,{className:"swipe",onSwipe:function(t){return y(t,e.user.name)},onCardLeftScreen:function(){e.user.name},children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:g(e.user.online),src:e.user.image_url})})},Date.now())}),Object(a.jsxs)("div",{id:"information",children:[Object(a.jsx)("p",{id:"user-name",children:e.user.name}),Object(a.jsx)("div",{id:"adduressu",children:Object(a.jsxs)("div",{id:"swipe-info",children:[Object(a.jsx)("p",{children:e.user.age}),Object(a.jsx)("p",{children:e.user.bio}),Object(a.jsx)("p",{children:e.user.location}),Object(a.jsx)("p",{children:g(e.user.online)})]})})]})]})})})})},D=function(e){var t=e.room,c=e.me,s=e.room,i=e.pic,o=(Date.now(),_(t,c,s,"chat",i)),l=o.messages,d=o.sendMessage,j=Object(n.useState)(""),m=Object(r.a)(j,2),b=m[0],p=m[1],h=Object(n.useState)(""),O=Object(r.a)(h,2);O[0],O[1];e.reload(l);return Object(a.jsxs)("div",{className:"home-container",children:[l.map((function(t,c){return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:"message-item ".concat(t.ownedByCurrentUser?"my-message":"received-message"),children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{className:"chat-div",children:e.me===t.senderId?Object(a.jsxs)("div",{className:"youSay",children:[Object(a.jsx)("img",{className:"iconPic",src:t.image}),Object(a.jsxs)("p",{className:"chat-body",children:[" ",t.body]})]}):Object(a.jsxs)("div",{className:"they-say",children:[Object(a.jsx)("img",{className:"iconPic",src:t.image}),Object(a.jsx)("p",{className:"chat-names",children:t.senderId}),Object(a.jsxs)("p",{className:"chat-body",children:[" ",t.body]})]})})]},c)})})),Object(a.jsxs)("div",{id:l.time,children:[Object(a.jsx)("input",{className:"imputtowa",type:"text",placeholder:"enter message",value:b,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("button",{className:"send",id:e.room+e.me,onClick:function(t){if(""!==b){d(b),p(t.target.value);var c={id:e.id,content:"Missed message: ".concat(b),date:Date.now(),my_id:e.saveMessage,type:"chat",read:!1,pic:e.pic,email:e.email,name:e.me};u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/notifications"),c).then((function(e){})).catch((function(e){}))}},children:"Send"})]})]})};var q=function(e){var t=e.room,c=e.name,s=e.id,i=e.pic,o=_(t,c,s,"chat",i),l=(o.messages,o.sendMessage),d=Object(n.useState)("Let's Chat"),j=Object(r.a)(d,2),m=j[0],b=j[1];return Object(a.jsx)("div",{children:"chat"===e.type?Object(a.jsx)("div",{className:"blue",id:e.room,children:Object(a.jsx)(D,{room:e.id+e.room,me:e.name,id:e.id,type:"chat",pic:e.pic,reload:e.reload,saveMessage:e.room})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"chat",id:e.room,children:Object(a.jsx)(D,{saveMessage:e.room,chat:function(){document.getElementById("".concat(e.room)).style.display="block"},room:e.room+e.id,me:e.name,id:e.id,type:"chat",pic:e.pic,reload:e.reload})}),Object(a.jsx)("button",{id:e.room+e.id,onClick:function(){document.getElementById("".concat(e.room)).style.display="block",document.getElementById("".concat(e.room+e.id)).style.display="none",l(m),b("liked"),e.reload("me"),e.reload("you");var t={id:e.id,content:"".concat(e.name," wants to chat"),date:Date.now(),my_id:e.room,type:"chat",read:!1,pic:e.pic,email:e.email,name:e.name};u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/notifications"),t).then((function(e){})).catch((function(e){}))},children:"Chat"})]})})};var z=function(e){var t=Object(n.useState)(e.alerts.length),c=Object(r.a)(t,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(r.a)(o,2),d=l[0],j=l[1],m=e.alerts.map((function(t,c){return Object(a.jsx)("div",{children:!1===t.read?Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t.pic,className:"iconPic"}),Object(a.jsx)("button",{className:"yourName",onClick:function(){!0===t.read&&i(s-1),document.getElementById("".concat(t.email+c)).style.display="block";var a={email:t.email,id:t._id,user:t.my_id};u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/notifications/read"),a).then((function(t){e.refresh("auth token"),e.refresh("app.js")})).catch((function(e){}))},children:"Hide"}),Object(a.jsx)("p",{id:t.email+c,className:"single-notif",children:t.content}),Object(a.jsx)("div",{class:"chatBox",children:Object(a.jsx)(q,{reload:j,room:t.from_sender,name:e.me,id:t.my_id,email:t.email,type:t.type,pic:e.pic})}),Object(a.jsx)("hr",{})]}):Object(a.jsx)("div",{})})}));Object(n.useEffect)((function(){i(e.alerts.length),i(s-b)}),[e,d]);var b=e.alerts.filter((function(e){return e.read})).length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{id:"notifyId",onClick:function(){document.getElementById("my-alerts").style.display="block",document.getElementById("hide-notifs").style.display="block"},children:["Notifications (",e.alerts.length-b,")"]}),Object(a.jsx)("button",{id:"hide-notifs",onClick:function(){document.getElementById("my-alerts").style.display="none",document.getElementById("hide-notifs").style.display="none"},children:"Hide Notifications"}),Object(a.jsx)("div",{id:"my-alerts",children:m})]})};var H=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(r.a)(o,2),d=l[0],j=l[1];Object(n.useEffect)((function(){u.a.get("".concat("https://token-app-backend.herokuapp.com/","/api/users/myinfo/").concat(e.email)).then((function(e){i(e.data.user[0].notifications)})).catch((function(e){}))}),[e.email,e.messages,d]);var m=e.user?e.user:"";return Object(a.jsxs)("div",{id:"here",children:[Object(a.jsx)("div",{id:"home",children:Object(a.jsx)(T,{toggle:e.toggle,user:m,pic:e.pic,id:e.id,me:e.me,room:e.user._id})}),Object(a.jsx)("div",{id:"red",children:Object(a.jsx)(z,{alerts:s,me:e.me,my_email:e.email,pic:e.pic,messages:e.messages,refresh:j})})]})},Y=function(e){Object(k.a)(c,e);var t=Object(w.a)(c);function c(e){var a;return Object(y.a)(this,c),(a=t.call(this,e)).handleImageUpload=function(){var e=document.querySelector('input[type="file"]').files,t=new FormData;return t.append("file",e[0]),t.append("upload_preset","ml_default"),fetch("https://api.Cloudinary.com/v1_1/dok4pz3i3/image/upload",{method:"POST",body:t}).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(v.a.mark((function e(t){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.url){e.next=4;break}return alert("Must choose a file to upload!"),e.abrupt("return");case 4:return n={email:a.props.email,image_url:c},e.next=7,u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/profile/setup/image"),n).then((function(e){a.props.pic(!0),a.props.pic(!1)})).catch((function(e){}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.displayImageUploader=function(){document.getElementById("image-form").style.display="block",document.getElementById("cancel-image-upload").style.display="block",document.getElementById("update-pic-btn").style.display="none"},a.cancelUploadImage=function(){document.getElementById("image-form").style.display="none",document.getElementById("cancel-image-upload").style.display="none",document.getElementById("update-pic-btn").style.display="block"},a.state={imageUrl:null,imageAlt:null,redirect:!1},a}return Object(N.a)(c,[{key:"render",value:function(){var e=this.state,t=e.imageUrl,c=e.imageAlt;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("section",{className:"left-side",children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{class:"btn btn-outline-primary",id:"update-pic-btn",onClick:this.displayImageUploader,children:"Update profile picture"})}),Object(a.jsx)("form",{id:"image-form",children:Object(a.jsxs)("div",{className:"choosePicForm",children:[Object(a.jsxs)("div",{id:"choose-file-btn-div",class:"btn btn-outline-dark",children:[Object(a.jsx)("div",{id:"choose-file-sub-div",children:"choose file"}),Object(a.jsx)("input",{id:"choose-file-btn",className:"chooseFile",type:"file",class:"hide_file"})]}),Object(a.jsx)("div",{id:"submit-button",children:Object(a.jsx)("button",{class:"btn btn-outline-success",type:"button",onClick:this.handleImageUpload,children:"submit"})})]})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{id:"cancel-image-upload",class:"btn btn-outline-danger",onClick:this.cancelUploadImage,children:"cancel"})})]}),Object(a.jsx)("section",{className:"right-side",children:t&&Object(a.jsx)("img",{src:t,alt:c,className:"displayed-image"})})]})}}]),c}(n.Component);var J=function(e){var t=Object(n.useState)(e.pic),c=Object(r.a)(t,2),s=(c[0],c[1],Object(n.useState)([])),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){var t;t="".concat("https://token-app-backend.herokuapp.com/","/api/users/myphoto/").concat(e.email),e.email&&u.a.get(t).then((function(e){l(e.data.user[0].image_url),console.log("hi!!!!")})).catch((function(e){}))}),[e.email,e.pic]),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"profilePic",src:o})})};var K=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=(c[0],c[1]);return Object(n.useEffect)((function(){var t;t="".concat("https://token-app-backend.herokuapp.com/","/api/users/myinfo/").concat(e.info.email),e.info.email&&u.a.get(t).then((function(e){s(e.data.user[0].notifications)})).catch((function(e){}))}),[e]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"showNotifsDiv"}),Object(a.jsxs)("div",{id:"my-prof-info",children:[Object(a.jsx)("p",{children:e.info.age}),Object(a.jsx)("p",{children:e.info.bio}),Object(a.jsx)("p",{children:e.info.gender}),Object(a.jsxs)("p",{children:[" ",e.info.location]}),Object(a.jsxs)("p",{id:"preference",children:["Preference: ",e.info.preference]})]})]})};var V=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{id:"name-on-prof",children:e.user.name}),Object(a.jsx)(K,{info:e.info})]})},X="https://token-app-backend.herokuapp.com/",G=function(e){var t=e.match.params.roomId,c=e.user.name,s=_(t,c),i=s.messages,o=(s.sendMessage,Object(n.useState)("")),l=Object(r.a)(o,2),d=(l[0],l[1],Object(n.useState)([])),j=Object(r.a)(d,2),m=j[0],b=j[1],p=Object(n.useState)(!1),h=Object(r.a)(p,2),O=h[0],f=h[1],x=Object(n.useState)([]),v=Object(r.a)(x,2),g=v[0],y=v[1],N=Object(n.useState)(""),k=Object(r.a)(N,2),w=(k[0],k[1]),S=function(){var t;t="Both"!==e.user.preference?"".concat(X,"/api/users/users/").concat(e.user.gender,"/").concat(e.user.preference,"/").concat(e.user.email,"/").concat(e.user.location):"".concat(X,"/api/users/users/random/").concat(e.user.gender,"/").concat(e.user.email,"/").concat(e.user.location),u.a.get(t).then((function(e){b(e.data.profile)})).catch((function(e){}))};return Object(n.useEffect)((function(){var t;S(),t="".concat(X,"/api/users/myinfo/").concat(e.user.email),e.user.email&&u.a.get(t).then((function(e){y(e.data.user[0])})).catch((function(e){}))}),[e.user.email]),Object(a.jsxs)("div",{id:"master",children:[Object(a.jsxs)("div",{id:"profile",children:[Object(a.jsx)(J,{email:e.user.email,pic:O}),Object(a.jsxs)("div",{id:"showNotifsDiv",children:[Object(a.jsx)(Y,{email:e.user.email,pic:f}),Object(a.jsx)(V,Object(A.a)({user:e.user,info:g,email:e.user.email,pic:f},"pic",O))]})]}),Object(a.jsx)("div",{id:"swipe",children:Object(a.jsx)(H,{user:m,me:e.user.name,id:e.user.id,email:e.user.email,status:g.online,pic:g.image_url,toggle:S,messages:i})}),Object(a.jsx)("div",{className:"chat-room-container",id:"notify",children:Object(a.jsx)("div",{className:"messages-container",children:Object(a.jsx)("div",{className:"messages-list",children:i.map((function(t,c){return Object(a.jsxs)("p",{className:"message-item ".concat(t.ownedByCurrentUser?"my-message":"received-message"),children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{class:"chatBox",children:[Object(a.jsx)("img",{className:"profilePic",src:t.image}),Object(a.jsx)("p",{children:t.senderId}),Object(a.jsxs)("p",{children:[" ",t.body]})]}),Object(a.jsx)("div",{class:"chatBox they-say",children:Object(a.jsx)(q,{room:t.id,name:e.user.name,id:e.user.id,email:m.email,type:t.type,pic:g.image_url,reload:w})})]}),Object(a.jsx)("div",{})]},c)}))})})})]})},Z=function(e){var t=e.component,c=Object(d.a)(e,["component"]),n=localStorage.getItem("jwtToken");return Object(a.jsx)(m.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return n?Object(a.jsx)(t,Object(l.a)(Object(l.a)({},c),e)):Object(a.jsx)(m.a,{to:"/login"})}}))};var R=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),o=Object(r.a)(i,2),d=o[0],j=o[1];Object(n.useEffect)((function(){var e;localStorage.getItem("jwtToken")?(e=Object(b.a)(localStorage.getItem("jwtToken")),p(localStorage.jwtToken),s(e)):j(!1)}),[]);var x=function(e){s(e),j(!0)};return c&&"/chat/".concat(c.id),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{handleLogout:function(){var e={email:c.email,online:!1};if(u.a.post("".concat("https://token-app-backend.herokuapp.com/","/api/users/profile/status"),e),localStorage.getItem("jwtToken"))return localStorage.removeItem("jwtToken"),s(null),j(!1),Object(a.jsx)(m.a,{to:"/"})},isAuth:d,user:c}),Object(a.jsx)("div",{className:"container mt-5",children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{path:"/signup",component:C}),Object(a.jsx)(m.b,{exact:!0,path:"/",component:f}),Object(a.jsx)(m.b,{path:"/login",render:function(e){return Object(a.jsx)(P,Object(l.a)(Object(l.a)({},e),{},{nowCurrentUser:x,setIsAuthenticated:j,user:c}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/chat",component:D,user:c}),Object(a.jsx)(Z,{exact:!0,path:"/chat/:roomId",component:G,user:c})]})}),Object(a.jsx)(O,{})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,135)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),W()},77:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[134,1,2]]]);
//# sourceMappingURL=main.08d935e8.chunk.js.map