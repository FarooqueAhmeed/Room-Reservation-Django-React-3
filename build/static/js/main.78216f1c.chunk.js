(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{131:function(e,t,a){e.exports=a.p+"static/media/loading.5bc723f8.gif"},156:function(e,t,a){e.exports=a(282)},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),l=a.n(o),c=a(301),i=(a(161),a(162),a(163),a(164),a(165),a(12)),m=a(40),s=a(41),u=a(43),d=a(42),p=a(5),h=a(293);function E(e){var t=e.data.map((function(e,t){return r.a.createElement("div",{className:"carousel-item",key:t},r.a.createElement(p.b,{to:"/single-room/".concat(e.room_slug)},r.a.createElement("img",{className:"d-block w-100 hero-image",src:e.cover_image,alt:"Fourth slide"})),r.a.createElement("div",{className:"carousel-caption d-md-block"},r.a.createElement(p.b,{to:"/single-room/".concat(e.room_slug),className:"text-decoration-none text-white"},r.a.createElement(h.a,null," ",e.title," ")),r.a.createElement("p",null,"$ ",e.price_per_night)))}));return r.a.createElement(r.a.Fragment,null,t)}function g(e){var t=e.data,a=t.slice(1).map((function(e,t){return r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"".concat(t+1),key:t})}));return r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel","data-interval":"3000"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement(p.b,{to:"/single-room/".concat(t[0].room_slug)},r.a.createElement("img",{className:"d-block w-100 hero hero-image",src:t[0].cover_image,alt:"First slide"})),r.a.createElement("div",{className:"carousel-caption d-md-block"},r.a.createElement(p.b,{to:"/single-room/".concat(t[0].room_slug),className:"text-decoration-none text-white"},r.a.createElement(h.a,null," ",t[0].title)),r.a.createElement("p",null," $ ",t[0].price_per_night," "))),r.a.createElement(E,{data:t.slice(1)})),r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),a),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}function f(e){var t=e.title;return r.a.createElement("div",{className:"title text-center my-5"},r.a.createElement(h.a,null,t))}function b(e){var t=e.service,a=e.details,n=e.title;return r.a.createElement("div",{className:"col-md-3 mb-1"},r.a.createElement("div",{className:"card service-card"},t,r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h6",{className:"card-title"},n),r.a.createElement("p",{className:"card-text text-justify"},a))))}function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Services"}),r.a.createElement("div",{className:"row services align-items-center justify-content my-2"},[{title:"Free Cocktail",details:"Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up"},{title:"Free Beer",details:"Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up"},{title:"Free Shuttle Van",details:"Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up"},{title:"Free Hiking",details:"Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up"}].map((function(e,t){return r.a.createElement(b,{service:e.serviceName,title:e.title,details:e.details,key:t})}))))}var N=a(6),k=a(14),y=a(11),x=a(37),_=a.n(x),C=function(e,t){return Object(k.a)(new Set(e.map((function(e){return e[t]}))))};function w(){var e=Object(n.useContext)(I),t=e.rooms,a=e.category_name,o=e.handleChange,l=e.capacity,c=e.price_per_night,i=e.maxPrice,m=e.minPrice,s=e.reserved,u=["All"].concat(Object(k.a)(C(t,"category_name"))).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),d=Object(k.a)(C(t,"capacity")).sort().map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"rooms-filter"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputCategory"},"Category"),r.a.createElement("select",{id:"inputCategory",className:"form-control",name:"category_name",value:a,onChange:o},u)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputCapacity"},"Capacity"),r.a.createElement("select",{id:"inputCapacity",className:"form-control",name:"capacity",value:l,onChange:o},d)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"customRange3"},"Room Cost Max $",c),r.a.createElement("input",{name:"price_per_night",value:c,type:"range",className:"custom-range pt-2",min:m,max:i,step:"1.0",id:"customRange3",onChange:o})),r.a.createElement("div",{className:"form-check pt-4"},r.a.createElement("input",{name:"reserved",checked:s,type:"checkbox",className:"form-check-input",id:"reserved",onChange:o}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Available"))))}var I=r.a.createContext(),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;n.setState(Object(y.a)({},t,a),n.filterRooms)},n.filterRooms=function(){var e=n.state,t=e.rooms,a=e.category_name,r=e.capacity,o=e.price_per_night,l=e.minRoomSize,c=e.maxRoomSize,i=e.reserved,m=Object(k.a)(t);"all"!==a&&(m=m.filter((function(e){return e.category_name===a}))),"1"!==r&&(m=m.filter((function(e){return e.capacity>=parseInt(r)}))),m=(m=m.filter((function(e){return e.price_per_night<=parseInt(o)}))).filter((function(e){return e.room_size>=parseInt(l)&&e.room_size<=parseInt(c)})),i&&(m=m.filter((function(e){return!1===e.is_booked}))),n.setState({sortedRooms:m})},n.handleLogin=function(e,t,a){e.preventDefault();var r={username:t.username,password:t.password};_.a.post("/accounts/login/",r).then((function(e){n.setState({isUserAuthenticated:!0,username:r.username,token:e.data.access,user_id:e.data.user_id,isAdmin:e.data.is_admin},n.setCheckedInRooms);var t=e.data.access,a=e.data.user_id,o=e.data.username,l=e.data.is_admin;localStorage.setItem("access-token",t),localStorage.setItem("user_id",a),localStorage.setItem("username",o),localStorage.setItem("is_admin",l)})).catch((function(e){document.getElementById("login-error-header").innerHTML="Unauthorized Credentials",setTimeout((function(){document.getElementById("login-error-header").innerHTML=""}),4e3)}))},n.setCheckedInRooms=function(){var e={headers:{Authorization:"Bearer ".concat(n.state.token)}};n.state.isAdmin&&_.a.get("/hotel/get_current_checked_in_rooms/",e).then((function(e){n.setState({checkedInRooms:e.data,filteredCheckedInRooms:e.data})})).catch((function(e){console.log(e.message)}))},n.handleCheckOut=function(e){var t={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.state.token)}};_.a.post("/hotel/checkout/",{pk:e},t).then((function(t){n.state.rooms.forEach((function(t){t.id===e&&(t.is_booked=!1)}));var a=n.state.checkedInRooms.filter((function(t){return t.room_id!==e}));n.setState({checkedInRooms:a,filteredCheckedInRooms:a}),document.getElementById("common-message").innerHTML=t.data,setTimeout((function(){document.getElementById("common-message").innerHTML=""}),3e3)})).catch((function(e){console.log(e.message)}))},n.handleBook=function(e){n.state.rooms.forEach((function(t){t.id===e&&(t.is_booked=!0)}))},n.handleLogout=function(){return localStorage.removeItem("access-token"),localStorage.removeItem("username"),localStorage.removeItem("user_id"),localStorage.removeItem("is_admin"),n.setState({isUserAuthenticated:!1,username:"",token:"",user_id:"",isAdmin:!1}),r.a.createElement(i.a,{to:"/"})},n.handleRegister=function(e,t,a){e.preventDefault(),_.a.post("/accounts/register/",t).then((function(e){a.push("/login")})).catch((function(e){document.getElementById("register-message").innerHTML=e.response.data.response}))},n.handleSearchKey=function(e){n.setState({searchKey:e.target.value},n.filterCheckedInRooms)},n.filterCheckedInRooms=function(){if(""!==n.state.searchKey){var e=n.state.filteredCheckedInRooms.filter((function(e){return e.room_slug.toString().includes(n.state.searchKey)}));n.setState({filteredCheckedInRooms:e})}else n.setState({filteredCheckedInRooms:n.state.checkedInRooms})},n.state={username:"",user_id:"",isUserAuthenticated:!1,token:"",isAdmin:!1,rooms:[],sortedRooms:[],featuredRooms:[],checkedInRooms:[],filteredCheckedInRooms:[],loading:!0,category_name:"all",capacity:"1",price_per_night:0,maxPrice:0,minPrice:0,maxRoomSize:0,minRoomSize:0,reserved:!1,searchKey:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.a.get("/hotel/get_room_list/").then((function(t){var a=t.data.filter((function(e){return e.featured})),n=parseInt(Math.min.apply(Math,Object(k.a)(C(t.data,"price_per_night")))),r=parseInt(Math.max.apply(Math,Object(k.a)(C(t.data,"price_per_night")))),o=parseInt(Math.max.apply(Math,Object(k.a)(C(t.data,"room_size")))),l=parseInt(Math.min.apply(Math,Object(k.a)(C(t.data,"room_size")))),c=localStorage.getItem("access-token"),i="",m=!1,s="",u=!1;c&&(m=!0,i=localStorage.getItem("username"),s=localStorage.getItem("user_id"),u="true"===(u=localStorage.getItem("is_admin"))),e.setState({isUserAuthenticated:m,username:i,user_id:s,token:c,isAdmin:u,rooms:t.data,sortedRooms:t.data,featuredRooms:a,price_per_night:r,minPrice:n,maxPrice:r,maxRoomSize:o,minRoomSize:l,loading:!1})})).then((function(t){e.state.isAdmin&&e.setCheckedInRooms()})).catch((function(e){console.log(e)}))}},{key:"createAlert",value:function(e,t,a){var n=document.querySelector("#".concat(a));n.setAttribute("class","alert alert-".concat(t));var r=document.createElement("a"),o=document.createTextNode("  X");r.setAttribute("href","#"),r.setAttribute("id","close-alert"),r.appendChild(o),n.innerHTML=e,n.appendChild(r),n.style.display="block",document.querySelector("#".concat("close-alert")).addEventListener("click",(function(){return document.querySelector("#login-error-header").style.display="none"}))}},{key:"render",value:function(){return r.a.createElement(I.Provider,{value:Object(N.a)(Object(N.a)({},this.state),{},{handleChange:this.handleChange,login:this.handleLogin,logout:this.handleLogout,register:this.handleRegister,handleBook:this.handleBook,checkout:this.handleCheckOut,searchBy:this.handleSearchKey})},this.props.children)}}]),a}(n.Component),S=a(294),O=a(303),R=a(295);function F(e){var t=e.room,a=t.cover_image,n=t.title,o=t.price_per_night,l=t.room_slug,c=t.is_booked;return r.a.createElement(S.a,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden"},r.a.createElement(p.b,{to:"/single-room/".concat(l)},r.a.createElement(O.a,{src:a,alt:""})),r.a.createElement(S.a,{p:"6"},r.a.createElement(S.a,{d:"flex",alignItems:"baseline"},r.a.createElement(R.a,{borderRadius:"full",px:"2",colorScheme:"teal"},"New"),r.a.createElement(S.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2"},!0===c?"Reserved":"Book Now")),r.a.createElement(S.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0},n),r.a.createElement(S.a,null,"$ ",o)))}var q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.context.featuredRooms.slice(0,4).map((function(e){return r.a.createElement(F,{key:e.id,room:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Featured Rooms"}),r.a.createElement("div",{className:"container featured-rooms"},e))}}]),a}(n.Component);q.contextType=I;var L=a(131),T=a.n(L);function P(){return r.a.createElement("div",{className:"loading-component"},r.a.createElement("img",{className:"img-fluid",src:T.a,alt:"Loading....."}))}var B=a(296),A=a(297),z=a(298);var D=function(){return r.a.createElement("footer",null,r.a.createElement(B.a,null,r.a.createElement(A.a,null,r.a.createElement(z.a,{className:"text-center py-3"},"CopyRight \xa9 zizopixels"))))},M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.context.loading?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{data:this.context.rooms.slice(0,4)}),r.a.createElement(q,null),r.a.createElement(v,null),r.a.createElement(D,null))}}]),a}(n.Component);function H(e){var t=e.rooms.map((function(e){return r.a.createElement(F,{room:e,key:e.id})}));return r.a.createElement(r.a.Fragment,null,t)}function U(){var e=Object(n.useContext)(I).sortedRooms;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement(f,{title:"Filter Rooms"}),r.a.createElement(w,null),r.a.createElement(f,{title:"Rooms"}),r.a.createElement("div",{className:"room-list"},0===e.length?r.a.createElement("h3",null," No room found "):r.a.createElement(H,{rooms:e}))),r.a.createElement(D,null))}function V(e){var t=e.room;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron bannertext-white text-center",style:{backgroundImage:'url("'.concat(t.cover_image,'")'),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}},r.a.createElement("h1",{className:"display-4 font-weight-bold text-white"},t.title),r.a.createElement("hr",{className:"my-4"}),t.is_booked?r.a.createElement("p",{className:"lead btn btn-danger btn-lg"},"Reserved"):r.a.createElement("p",{className:"lead"},"(",r.a.createElement(p.b,{to:{pathname:"/book/".concat(t.id),state:{room:t}},className:"btn btn-primary btn-lg",role:"button"},"Book Room"),")")))}function K(e){var t=e.match,a=Object(n.useContext)(I).rooms.find((function(e){return e.room_slug===t.params.room_slug}));return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{room:a}),r.a.createElement("div",{className:"container my-5 align-items-center justify-content"},r.a.createElement(f,{title:"Description"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("h6",null,"Details"),r.a.createElement("p",{className:"text-justify",style:{width:"80%"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("h6",null,"Information"),r.a.createElement("p",null,"Price $",a.price_per_night),r.a.createElement("p",null,"Size ",a.room_size," Sqr Feet"),r.a.createElement("p",null,"Capacity Maxium ",a.capacity," People"),r.a.createElement("p",null,"Meals Included"))),r.a.createElement(f,{title:"Facilities"}),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))),r.a.createElement(D,null)):r.a.createElement("div",null,"Eroror")}M.contextType=I;var W=a(4);function $(e){var t=e.divClass,a=e.htmlForLabel,n=e.labelName,o=e.inputClass,l=e.inputType,c=e.inputName,i=e.inputValue,m=e.inputPlaceHolder,s=e.onChange,u=e.required;return r.a.createElement("div",{className:t},r.a.createElement("label",{htmlFor:a},n),r.a.createElement("input",{className:o,type:l,name:c,value:i,placeholder:m,onChange:s,required:u}))}function G(e){var t=e.room,a=Object(n.useContext)(I),o=a.token,l=parseInt(a.user_id),c=Object(n.useState)({email:"",phone_number:"",checking_date:"",checkout_date:""}),i=Object(W.a)(c,2),m=i[0],s=i[1];return r.a.createElement("form",{className:"booking-form mt-5",onSubmit:function(e){e.preventDefault();var n=/^\+?(88)?01[0-9]{9}/.test(m.phone_number)?(document.getElementById("phoneID").style.display="none",document.getElementById("phone").innerHTML="",new Date(m.checkout_date)<new Date(m.checking_date)?(document.getElementById("checkoutID").style.display="block",document.getElementById("checkout").innerHTML="Checkout Date should be greater than Checkin Date",!1):(document.getElementById("checkoutID").style.display="none",document.getElementById("checkout").innerHTML="",!0)):(document.getElementById("phoneID").style.display="block",document.getElementById("phone").innerHTML="Invalid Phone Number",!1),r={email:m.email,phone_number:m.phone_number,checking_date:m.checking_date,checkout_date:m.checkout_date,room:t.id,customer:l};if(n){var c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o)}};_.a.post("/hotel/book/",r,c).then((function(e){return s({email:"",phone_number:"",checking_date:"",checkout_date:""},a.handleBook(t.id)),e.data})).then((function(e){document.getElementById("common-message").innerHTML="".concat(e.response),setTimeout((function(){document.getElementById("common-message").innerHTML=""}),3e3)})).catch((function(e){}))}}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6 m-auto text-center"},r.a.createElement(p.b,{to:"/single-room/".concat(t.room_slug),role:"button"},r.a.createElement("button",null,"Goto Room")))),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputEmail",labelName:"Email",inputClass:"form-control",inputType:"email",inputName:"email",inputValue:m.email,inputPlaceHolder:"Enter Email",onChange:function(e){return s(Object(N.a)(Object(N.a)({},m),{},{email:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputPhoneNumber",labelName:"Phone Number",inputClass:"form-control",inputType:"text",inputName:"phone_number",inputValue:m.phone_number,inputPlaceHolder:"Enter Phone Number",onChange:function(e){return s(Object(N.a)(Object(N.a)({},m),{},{phone_number:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row",id:"phoneID",style:{display:"none"}},r.a.createElement("div",{className:"form-group col-md-6 m-auto text-danger"},r.a.createElement("p",{id:"phone"}))),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputCheckingDate",labelName:"Checking Date",inputClass:"form-control",inputType:"datetime-local",inputName:"checking_date",inputValue:m.checking_date,inputPlaceHolder:"Enter Checking Date",onChange:function(e){return s(Object(N.a)(Object(N.a)({},m),{},{checking_date:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputCheckoutDate",labelName:"Checkout Date",inputClass:"form-control",inputType:"datetime-local",inputName:"checkout_date",inputValue:m.checkout_date,inputPlaceHolder:"Enter Checkout Date",onChange:function(e){return s(Object(N.a)(Object(N.a)({},m),{},{checkout_date:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row",id:"checkoutID",style:{display:"none"}},r.a.createElement("div",{className:"form-group col-md-6 m-auto text-danger"},r.a.createElement("p",{id:"checkout"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 m-auto text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary px-5 my-3"},"Book"))))}function J(e){var t=e.history,a=Object(n.useContext)(I),o=Object(n.useState)({username:"",password:""}),l=Object(W.a)(o,2),c=l[0],m=l[1];return a.isUserAuthenticated?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:"container m-auto align-items-center justify-content-center"},r.a.createElement("form",{onSubmit:function(e){return a.login(e,c,t)},className:"mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6 m-auto"},r.a.createElement("p",{id:"login-error-header",className:"col-md-6 m-auto pb-2 font-weight-bold text-danger"}),r.a.createElement("label",{htmlFor:"inputUserName"},"Username"),r.a.createElement("input",{className:"form-control",type:"text",name:"username",value:c.username,placeholder:"Username",onChange:function(e){return m(Object(N.a)(Object(N.a)({},c),{},{username:e.target.value}))},required:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6 m-auto"},r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password",value:c.password,placeholder:"Password",onChange:function(e){return m(Object(N.a)(Object(N.a)({},c),{},{password:e.target.value}))},required:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("button",{type:"submit",className:"btn btn-primary px-5 my-3"},"Login"),r.a.createElement("p",null,"If you have not created an account yet",r.a.createElement(p.b,{to:"/register",className:"text-decoration-none"}," ","Sign up"," "),"first")))),r.a.createElement(D,null))}function X(e){var t=e.history,a=e.location,o=Object(n.useContext)(I);if(!a.state)return r.a.createElement(i.a,{to:"/rooms"});var l=a.state.room;return o.isUserAuthenticated?r.a.createElement("div",{className:"container"},r.a.createElement(G,{room:l}),r.a.createElement(D,null)):r.a.createElement(J,{history:t,location:a})}function Q(e){var t=e.history,a=Object(n.useContext)(I),o=Object(n.useState)({username:"",email:"",password1:"",password2:""}),l=Object(W.a)(o,2),c=l[0],m=l[1],s=c.username,u=c.email,d=c.password1,h=c.password2;return a.isUserAuthenticated?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:"container m-auto align-items-center justify-content-center"},r.a.createElement("form",{onSubmit:function(e){return a.register(e,c,t)},className:"mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6 m-auto pb-3"},r.a.createElement("p",{className:"text-uppercase text-danger font-weight-bold",id:"register-message"}))),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputForUsername",labelName:"Username",inputClass:"form-control",inputType:"text",inputName:"username",inputValue:s,inputPlaceHolder:"Enter Username",onChange:function(e){return m(Object(N.a)(Object(N.a)({},c),{},{username:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputForEmail",labelName:"Email",inputClass:"form-control",inputType:"email",inputName:"email",inputValue:u,inputPlaceHolder:"Enter Email",onChange:function(e){return m(Object(N.a)(Object(N.a)({},c),{},{email:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputPassword1",labelName:"Password",inputClass:"form-control",inputType:"password",inputName:"password1",inputValue:d,inputPlaceHolder:"Enter Password",onChange:function(e){return m(Object(N.a)(Object(N.a)({},c),{},{password1:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement($,{divClass:"form-group col-md-6 m-auto",htmlForLabel:"inputPassword2",labelName:"Confirm",inputClass:"form-control",inputType:"password",inputName:"password2",inputValue:h,inputPlaceHolder:"Confirm Password",onChange:function(e){return m(Object(N.a)(Object(N.a)({},c),{},{password2:e.target.value}))},required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("button",{type:"submit",className:"btn btn-primary px-5 my-3"},"Register"),r.a.createElement("p",null,"Already have an account ?",r.a.createElement(p.b,{to:"/login",className:"text-decoration-none"}," ","Login"," "),"here")))),r.a.createElement(D,null))}function Y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"my-5"},r.a.createElement("h4",{className:"text-danger m-auto text-center "},"404 Page Not Found")),r.a.createElement("div",{className:"m-auto text-center"},r.a.createElement(p.b,{to:"/rooms",className:"btn btn-primary",role:"button"},"Goto Rooms")),r.a.createElement(D,null))}var Z=function(e){var t=e.headList.map((function(e,t){return r.a.createElement("th",{key:t,scope:"col"},e)}));return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),t))},ee=function(e){var t=e.rooms,a=e.checkout,n=t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.room_slug),r.a.createElement("td",null,e.customer_name),r.a.createElement("td",null,e.phone_number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e.room_id)},className:"btn btn-outline-dark"},"Checkout")))}));return r.a.createElement("tbody",null,n)},te=function(e){var t=e.columns,a=e.data,n=e.checkout;return r.a.createElement("div",{className:"table-responsive-md"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement(Z,{headList:t}),r.a.createElement(ee,{rooms:a,checkout:n})))};function ae(){var e=Object(n.useContext)(I),t=e.filteredCheckedInRooms;return e.isAdmin?r.a.createElement("div",{className:"container pt-5"},r.a.createElement("form",null,r.a.createElement("div",{className:"title my-2 text-center"},r.a.createElement("h4",null,"List of Booked Rooms")),r.a.createElement("div",{className:"row my-4"},r.a.createElement("div",{className:"col-md-12 my-2"},r.a.createElement("input",{className:"dashboard-input",name:"searchKey",value:e.searchKey,type:"text",placeholder:"Enter room slug to search",onChange:function(t){return e.searchBy(t)}})))),t.length<1?r.a.createElement("div",null,"No Checkings"):r.a.createElement(te,{columns:["Room","Booked By","Phone Number","Action"],data:t,checkout:e.checkout}),r.a.createElement(D,null)):r.a.createElement("h1",null,"Not Authorized to View This Page")}var ne=a(302),re=a(304),oe=a(299),le=a(300);function ce(){var e=Object(n.useContext)(I);return r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"danger",style:{paddingTop:"10px",textAlign:"center"}},r.a.createElement(le.a,{fluid:!0},"This is a demo project (zizopixels)")),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav "},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement(h.a,{size:"md"},"Room Reservation")))),r.a.createElement(p.b,{to:"/rooms",className:"nav-link"},r.a.createElement(ne.a,{colorScheme:"teal"},"Rooms")),e.isUserAuthenticated?r.a.createElement(p.b,{to:"/",className:"nav-link",role:"button",onClick:e.logout},r.a.createElement(ne.a,{colorScheme:"teal"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{spacing:"20px"},r.a.createElement(ne.a,{colorScheme:"teal"},r.a.createElement(p.b,{to:"/login"},"Log in")),r.a.createElement(ne.a,{colorScheme:"teal",mr:"4"},r.a.createElement(p.b,{to:"/register"},"Sign Up")))),e.isAdmin&&e.isUserAuthenticated?r.a.createElement(p.b,{to:"/dashboard",className:"nav-link"},r.a.createElement(ne.a,{colorScheme:"teal"},"Dashboard")):""),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center pt-3"},r.a.createElement("p",{className:"success-message font-weight-bold",id:"common-message"}))))}var ie=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(ce,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(i.b,{path:"/rooms",render:function(e){return r.a.createElement(U,e)}}),r.a.createElement(i.b,{path:"/single-room/:room_slug",render:function(e){return r.a.createElement(K,e)}}),r.a.createElement(i.b,{path:"/book/:room_id",render:function(e){return r.a.createElement(X,e)}}),r.a.createElement(i.b,{path:"/login",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(i.b,{path:"/register",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(i.b,{path:"/dashboard",render:function(e){return r.a.createElement(ae,e)}}),r.a.createElement(i.b,{render:function(e){return r.a.createElement(Y,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p.a,null,r.a.createElement(j,null,r.a.createElement(c.a,null,r.a.createElement(ie,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.78216f1c.chunk.js.map