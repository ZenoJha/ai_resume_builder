"use strict";(self.webpackChunkai_resume=self.webpackChunkai_resume||[]).push([[5771],{15771:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(80055),n=_(74135),T=_(21272),C=_(1433),R=_(5409),i=_(47456),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(2506),O=_(5790),A=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),P=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),N=_(51187),j=_(39404),H=_(58692),F=_(501),V=_(57646),x=_(23120),G=_(44414),$=_(25962),Y=_(14664),c=_(42588),z=_(90325),X=_(62785),Z=_(87443),e=_(41032),J=_(22957),Q=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(75977),t_=_(90056),s_=_(51866),O_=_(78319),M_=_(55151),D_=_(79077),P_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},74135:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(1433),n=_(67031),T=_(54894),C=_(17703),R=_(47456);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,T.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,o.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:A,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};a.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:A,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,A,D,L])}}}]);
