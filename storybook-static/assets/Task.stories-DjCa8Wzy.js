import{f as l}from"./index-DHoHw54S.js";import{j as s}from"./jsx-runtime-CB5fy6C8.js";import{P as t}from"./index-D3ylJrlI.js";function o({task:{id:e,title:c,state:i},onArchiveTask:_,onPinTask:x}){return s.jsxs("div",{className:`list-item ${i}`,children:[s.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[s.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:i==="TASK_ARCHIVED"}),s.jsx("span",{className:"checkbox-custom",onClick:()=>_(e)})]}),s.jsx("label",{htmlFor:`title-${e}`,"aria-label":c,className:"title",children:s.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),i!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",onClick:()=>x(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:s.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}o.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onArchiveTask:t.func,onPinTask:t.func};o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}};const A={onArchiveTask:l(),onPinTask:l()},b={component:o,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...A}},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,k,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const D=["ActionsData","Default","Pinned","Archived"],v=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:A,Archived:n,Default:a,Pinned:r,__namedExportsOrder:D,default:b},Symbol.toStringTag,{value:"Module"}));export{a as D,o as T,v as a};
