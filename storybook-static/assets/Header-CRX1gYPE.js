import{j as e}from"./jsx-runtime-CB5fy6C8.js";import"./index-D9zwcjsT.js";import{P as s}from"./index-D3ylJrlI.js";import{B as i}from"./Button-D3Dw6PA-.js";const r=({user:n,onLogin:l,onLogout:o,onCreateAccount:a})=>e.jsx("header",{children:e.jsxs("div",{className:"storybook-header",children:[e.jsxs("div",{children:[e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{fill:"none",fillRule:"evenodd",children:[e.jsx("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.jsx("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.jsx("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e.jsx("h1",{children:"Acme"})]}),e.jsx("div",{children:n?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"welcome",children:["Welcome, ",e.jsx("b",{children:n.name}),"!"]}),e.jsx(i,{size:"small",onClick:o,label:"Log out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(i,{size:"small",onClick:l,label:"Log in"}),e.jsx(i,{primary:!0,size:"small",onClick:a,label:"Sign up"})]})})]})});r.propTypes={user:s.shape({name:s.string.isRequired}),onLogin:s.func.isRequired,onLogout:s.func.isRequired,onCreateAccount:s.func.isRequired};r.defaultProps={user:null};r.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"string",required:!0}}},required:!1},onLogin:{description:"",type:{name:"func"},required:!0},onLogout:{description:"",type:{name:"func"},required:!0},onCreateAccount:{description:"",type:{name:"func"},required:!0}}};export{r as H};
