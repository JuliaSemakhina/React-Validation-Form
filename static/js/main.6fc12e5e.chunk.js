(this["webpackJsonpreact-validation-form"]=this["webpackJsonpreact-validation-form"]||[]).push([[0],{16:function(e,s,a){},18:function(e,s,a){"use strict";a.r(s);var r=a(1),t=a.n(r),n=a(7),c=a.n(n),i=(a(16),a(2)),l=a(3),o=a(5),m=function(e,s){var a=Object(r.useState)({username:"",email:"",password:"",password2:""}),t=Object(i.a)(a,2),n=t[0],c=t[1],m=Object(r.useState)({}),d=Object(i.a)(m,2),j=d[0],u=d[1],b=Object(r.useState)(!1),p=Object(i.a)(b,2),h=p[0],O=p[1];return Object(r.useEffect)((function(){0===Object.keys(j).length&&h&&e()}),[j]),{handleChange:function(e){var s=e.target,a=s.name,r=s.value;c(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},a,r)))},values:n,handleSubmit:function(e){e.preventDefault(),u(s(n)),O(!0)},errors:j}};function d(e){var s={};return e.username.trim()||(s.username="Username is required"),e.email?/^[A-Z0-9._%+-]+@[A-Z-9._-]+\.[A-Z]{2,}$/i.test(e.email)||(s.email="Email address is invalid"):s.email="Email is required",e.password?e.password.length<6&&(s.password="Password needs to be at least 6 characters"):s.password="Password is required",e.password2?e.password2!==e.password&&(s.password2="Passwords do not match"):s.password2="Password is required",s}a(6);var j=a(0),u=function(e){var s=e.submitForm,a=m(s,d),r=a.handleChange,t=a.values,n=a.handleSubmit,c=a.errors;return Object(j.jsx)("div",{className:"form-content-right",children:Object(j.jsxs)("form",{className:"form",onSubmit:n,noValidate:!0,children:[Object(j.jsx)("h1",{children:"Get started with us today! Create your account by filling out the information below."}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(j.jsx)("input",{id:"username",type:"text",className:"form-input",name:"username",placeholder:"Enter your username",value:t.username,onChange:r}),c.username&&Object(j.jsx)("p",{children:c.username})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(j.jsx)("input",{id:"email",type:"email",className:"form-input",name:"email",placeholder:"Enter your email",value:t.email,onChange:r}),c.email&&Object(j.jsx)("p",{children:c.email})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(j.jsx)("input",{id:"password",type:"password",className:"form-input",name:"password",placeholder:"Enter your password",value:t.password,onChange:r}),c.password&&Object(j.jsx)("p",{children:c.password})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"password",className:"form-label",children:"Confirm Password"}),Object(j.jsx)("input",{id:"password2",type:"password",className:"form-input",name:"password2",placeholder:"Repeat your password",value:t.password2,onChange:r}),c.password2&&Object(j.jsx)("p",{children:c.password2})]}),Object(j.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign Up"}),Object(j.jsxs)("span",{className:"form-input-login",children:["Already have an account? Login ",Object(j.jsx)("a",{href:"#",children:"here"})]})]})})},b=a(8),p=a(9),h=a(11),O=a(10),f=function(e){Object(h.a)(a,e);var s=Object(O.a)(a);function a(){return Object(b.a)(this,a),s.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"form-content-right",children:[Object(j.jsx)("div",{className:"form-success",children:"We have received your request!"}),Object(j.jsx)("img",{src:"img/mars.png",alt:"success",className:"form-img-2"})]})}}]),a}(t.a.Component),x=function(){var e=Object(r.useState)(!1),s=Object(i.a)(e,2),a=s[0],t=s[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("span",{className:"close-btn",children:"x"}),Object(j.jsx)("div",{className:"form-content-left",children:Object(j.jsx)("img",{src:"img/planet.jpg",alt:"travel",className:"form-img"})}),a?Object(j.jsx)(f,{}):Object(j.jsx)(u,{submitForm:function(){t(!0)}})]})})};var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})};c.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},6:function(e,s,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.6fc12e5e.chunk.js.map