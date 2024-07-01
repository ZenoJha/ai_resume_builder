"use strict";(self.webpackChunkai_resume=self.webpackChunkai_resume||[]).push([[666],{75977:(Y,I,t)=>{t.d(I,{F:()=>g});var s=t(92132),A=t(21272),U=t(52724),v=t(36726),m=t(1433),B=t(28604),L=t(54894);const g=({displayedFilters:C})=>{const[p,R]=A.useState(!1),{formatMessage:y}=(0,L.A)(),u=A.useRef(null),f=()=>{R(K=>!K)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(U.a,{paddingTop:1,paddingBottom:1,children:[(0,s.jsx)(v.$,{variant:"tertiary",ref:u,startIcon:(0,s.jsx)(B.A,{}),onClick:f,size:"S",children:y({id:"app.utils.filters",defaultMessage:"Filters"})}),p&&(0,s.jsx)(m.LC,{displayedFilters:C,isVisible:p,onToggle:f,source:u})]}),(0,s.jsx)(m.cZ,{filtersSchema:C})]})}},20666:(Y,I,t)=>{t.d(I,{ProtectedListPage:()=>Et});var s=t(92132),A=t(88996),U=t(88441),v=t(95690),m=t(44940),B=t(19122),L=t(52724),g=t(12248),C=t(37750),p=t(600),R=t(61152),y=t(99690),u=t(19692),f=t(17060),K=t(17408),H=t(17699),J=t(52370),N=t(82869),X=t(49436),Z=t(36531),b=t(7132),_=t(1433),c=t(54894),T=t(47456),k=t(75977),W=t(21272),w=t(64770),q=t(98616),tt=t(62490),st=t(83925),j=t(33544),mt=t(15126),gt=t(63299),Mt=t(67014),Dt=t(59080),Pt=t(79275),Ot=t(14718),Lt=t(82437),ut=t(2506),ct=t(5790),At=t(12083),Ct=t(35223),pt=t(5409),ft=t(74930),Tt=t(2600),ht=t(48940),It=t(41286),Ut=t(56336),vt=t(13426),Bt=t(84624),Rt=t(77965),yt=t(54257),Kt=t(71210),Wt=t(51187),jt=t(39404),xt=t(58692),St=t(501),Ft=t(57646),Nt=t(23120),$t=t(44414),Vt=t(25962),zt=t(14664),Gt=t(42588),Qt=t(90325),Yt=t(62785),Ht=t(87443),Jt=t(41032),Xt=t(22957),Zt=t(93179),bt=t(73055),kt=t(15747),wt=t(85306),qt=t(26509),ts=t(32058),ss=t(81185),es=t(82261);const et=T.n.injectEndpoints({endpoints:e=>({getAuditLogs:e.query({query:i=>({url:"/admin/audit-logs",config:{params:i}})}),getAuditLog:e.query({query:i=>`/admin/audit-logs/${i}`})}),overrideExisting:!1}),{useGetAuditLogsQuery:at,useGetAuditLogQuery:nt}=et,$=()=>{const{formatDate:e}=(0,c.A)();return r=>{const a=(0,tt.A)(r),d=e(a,{dateStyle:"long"}),n=e(a,{timeStyle:"medium",hourCycle:"h24"});return`${d}, ${n}`}},V={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},x=e=>V[e]||e,it=({handleClose:e,logId:i})=>{const r=(0,_.hN)(),{_unstableFormatAPIError:a}=(0,_.wq)(),{data:d,error:n,isLoading:o}=nt(i);W.useEffect(()=>{n&&(r({type:"warning",message:a(n)}),e())},[n,a,e,r]);const l=$(),E=d&&"date"in d?l(d.date):"";return(0,s.jsxs)(A.k,{onClose:e,labelledBy:"title",children:[(0,s.jsx)(U.r,{children:(0,s.jsx)(w.B,{label:E,id:"title",children:(0,s.jsx)(q.m,{isCurrent:!0,children:E})})}),(0,s.jsx)(v.c,{children:(0,s.jsx)(ot,{isLoading:o,data:d,formattedDate:E})})]})},ot=({isLoading:e,data:i,formattedDate:r})=>{const{formatMessage:a}=(0,c.A)();if(e)return(0,s.jsx)(m.s,{padding:7,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(B.a,{children:"Loading content..."})});const{action:d,user:n,payload:o}=i;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L.a,{marginBottom:3,children:(0,s.jsx)(g.o,{variant:"delta",id:"title",children:a({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,s.jsxs)(C.x,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:a({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:x(d)},{model:o?.model})}),(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:r}),(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:n?.displayName||"-"}),(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:n?.id.toString()||"-"})]}),(0,s.jsx)(p.j,{value:JSON.stringify(o,null,2),disabled:!0,label:a({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})},h=({actionLabel:e,actionName:i})=>(0,s.jsxs)(m.s,{direction:"column",alignItems:"baseline",gap:1,children:[(0,s.jsx)(g.o,{textColor:"neutral600",variant:"sigma",children:e}),(0,s.jsx)(g.o,{textColor:"neutral600",children:i})]}),dt=({pagination:e}={pagination:{page:1,pageCount:0,pageSize:50,total:0}})=>(0,s.jsx)(L.a,{paddingTop:4,children:(0,s.jsxs)(m.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,s.jsx)(_._u,{}),(0,s.jsx)(_.W7,{pagination:e})]})}),S=({headers:e,rows:i,onOpenModal:r})=>{const{formatMessage:a}=(0,c.A)(),d=$(),n=({type:o,value:l,model:E})=>o==="date"?d(l):o==="action"?a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:x(l)},{model:E}):l||"-";return(0,s.jsx)(R.N,{children:i.map(o=>(0,s.jsxs)(y.Tr,{...(0,_.qM)({fn:()=>r(o.id)}),children:[e?.map(({key:l,name:E,cellFormatter:M})=>{const D=o[E];return(0,s.jsx)(u.Td,{children:(0,s.jsx)(g.o,{textColor:"neutral800",children:n({type:l,value:M?M(D):D,model:o.payload?.model})})},l)}),(0,s.jsx)(u.Td,{..._.dG,children:(0,s.jsx)(m.s,{justifyContent:"end",children:(0,s.jsx)(f.K,{onClick:()=>r(o.id),"aria-label":a({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${o.action} action`}),noBorder:!0,icon:(0,s.jsx)(st.A,{})})})})]},o.id))})};S.defaultProps={rows:[]},S.propTypes={headers:j.array.isRequired,rows:j.array,onOpenModal:j.func.isRequired};const rt=({canReadAuditLogs:e,canReadUsers:i})=>{const r=(0,_.hN)(),{_unstableFormatAPIError:a}=(0,_.wq)(),[{query:d}]=(0,_.sq)(),{data:n,error:o,isError:l,isLoading:E}=(0,T.k)({},{skip:!i,refetchOnMountOrArgChange:!0});W.useEffect(()=>{o&&r({type:"warning",message:a(o)})},[o,r,a]);const{data:M,isLoading:D,isError:F,error:P}=at(d,{refetchOnMountOrArgChange:!0,skip:!e});return W.useEffect(()=>{P&&r({type:"warning",message:a(P)})},[P,r,a]),{auditLogs:M,users:n?.users??[],isLoading:E||D,hasError:F||l}},z=({value:e,options:i,onChange:r}={value:void 0})=>{const{formatMessage:a}=(0,c.A)(),d=a({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,s.jsx)(K.G3,{"aria-label":d,value:e,onChange:r,children:i?.map(({label:n,customValue:o})=>(0,s.jsx)(H.j,{value:o,children:n},o))})},G=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],_t=({formatMessage:e,users:i,canReadUsers:r})=>{const a=[{name:"action",metadatas:{customOperators:G,label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:z,options:Object.keys(V).map(d=>({label:e({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:x(d)},{model:void 0}),customValue:d}))},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(r&&i){const d=n=>n.username?n.username:n.firstname&&n.lastname?e({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:n.firstname,lastname:n.lastname}):n.email;return[...a,{name:"user",metadatas:{customOperators:G,label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i.map(n=>({label:d(n),customValue:n.id.toString()})),customInput:z},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return a},lt=()=>{const{formatMessage:e}=(0,c.A)(),i=(0,T.j)(O=>O.admin_app.permissions.settings),{allowedActions:{canRead:r,canReadUsers:a},isLoading:d}=(0,_.ec)({...i?.auditLogs,readUsers:i?.users.read||[]}),[{query:n},o]=(0,_.sq)(),{auditLogs:l,users:E,isLoading:M,hasError:D}=rt({canReadAuditLogs:r,canReadUsers:a});(0,_.L4)();const F=_t({formatMessage:e,users:E,canReadUsers:a}),P=[{name:"action",key:"action",metadatas:{label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0}},{name:"date",key:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0}},{key:"user",name:"user",metadatas:{label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1},cellFormatter:O=>O?O.displayName:""}];if(D)return(0,s.jsx)(J.P,{children:(0,s.jsx)(N.s,{children:(0,s.jsx)(L.a,{paddingTop:8,children:(0,s.jsx)(_.hH,{})})})});const Q=M||d;return(0,s.jsxs)(X.g,{"aria-busy":Q,children:[(0,s.jsx)(_.x7,{name:e({id:"global.auditLogs",defaultMessage:"Audit Logs"})}),(0,s.jsx)(Z.Q,{title:e({id:"global.auditLogs",defaultMessage:"Audit Logs"}),subtitle:e({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,s.jsx)(b.B,{startActions:(0,s.jsx)(k.F,{displayedFilters:F})}),(0,s.jsxs)(N.s,{children:[(0,s.jsx)(_.Ee,{contentType:"Audit logs",headers:P,rows:l?.results||[],withBulkActions:!0,isLoading:Q,children:(0,s.jsx)(S,{headers:P,rows:l?.results||[],onOpenModal:O=>o({id:`${O}`})})}),l?.pagination&&(0,s.jsx)(dt,{pagination:l.pagination})]}),n?.id&&(0,s.jsx)(it,{handleClose:()=>o({id:null},"remove"),logId:n.id})]})},Et=()=>{const e=(0,T.j)(i=>i.admin_app.permissions.settings?.auditLogs?.main);return(0,s.jsx)(_.kz,{permissions:e,children:(0,s.jsx)(lt,{})})}}}]);
