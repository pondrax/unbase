import{d as je,b as ge,t as fe}from"../chunks/db.36096a15.js";import{s as Se,n as we,c as Ee,f as Me,a as Ie}from"../chunks/scheduler.776094f6.js";import{S as Ne,i as ke,e as u,s as E,t as F,c as i,a as m,l as xe,f as I,b as L,d as c,g as e,h as Te,j as t,m as Oe,p as Ve,k as C,o as Ue}from"../chunks/index.e335023c.js";import{e as ye}from"../chunks/each.e59479a4.js";import{g as qe}from"../chunks/navigation.2d362eb2.js";import{t as Ae}from"../chunks/lang.cf9d6496.js";async function Fe(){return{authProviders:(await je.collection("users").listAuthMethods()).authProviders}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,load:Fe},Symbol.toStringTag,{value:"Module"}));function De(s,l,n){const a=s.slice();return a[5]=l[n],a}function Pe(s){let l,n,a,r,v,N,D,d=s[0]("sign.with")+"",b,P,g=s[5].name+"",y,V,j,q;return{c(){l=u("form"),n=u("input"),a=E(),r=u("button"),v=u("img"),D=E(),b=F(d),P=E(),y=F(g),V=E(),this.h()},l(T){l=i(T,"FORM",{method:!0});var f=m(l);n=i(f,"INPUT",{type:!0,name:!0}),a=I(f),r=i(f,"BUTTON",{btn:!0,"w-full":!0,flex:!0,"h-auto":!0,"justify-start":!0,"gap-5":!0});var O=m(r);v=i(O,"IMG",{src:!0,alt:!0,"h-8":!0,"p-1":!0}),D=I(O),b=L(O,d),P=I(O),y=L(O,g),O.forEach(c),V=I(f),f.forEach(c),this.h()},h(){e(n,"type","hidden"),e(n,"name","provider"),n.value=s[5].name,Me(v.src,N=`/oauth/${s[5].name}.svg`)||e(v,"src",N),e(v,"alt","provider"),e(v,"h-8",""),e(v,"p-1",""),e(r,"btn","~ outline"),e(r,"w-full",""),e(r,"flex",""),e(r,"h-auto",""),e(r,"justify-start",""),e(r,"gap-5",""),e(l,"method","post")},m(T,f){Te(T,l,f),t(l,n),t(l,a),t(l,r),t(r,v),t(r,D),t(r,b),t(r,P),t(r,y),t(l,V),j||(q=Oe(l,"submit",Ve(s[2])),j=!0)},p(T,f){f&1&&d!==(d=T[0]("sign.with")+"")&&C(b,d)},d(T){T&&c(l),j=!1,q()}}}function Le(s){let l,n,a,r,v='<img src="/favicon.png" alt="favicon"/>',N,D,d=s[0]("sign.title")+"",b,P,g,y,V,j=s[0]("userOrEmail.label")+"",q,T,f,O,re,k,z,G=s[0]("password.label")+"",W,ae,S,X,le,x,J=s[0]("sign.btn.in")+"",Y,oe,U,ne,H,se,A,M,K,ue,Q=s[0]("back.home")+"",Z,ie,he,R=ye(s[1]),p=[];for(let o=0;o<R.length;o+=1)p[o]=Pe(De(s,R,o));return{c(){l=u("div"),n=u("div"),a=u("div"),r=u("div"),r.innerHTML=v,N=E(),D=u("div"),b=F(d),P=E(),g=u("form"),y=u("div"),V=u("span"),q=F(j),T=E(),f=u("input"),re=E(),k=u("div"),z=u("span"),W=F(G),ae=E(),S=u("input"),le=E(),x=u("button"),Y=F(J),oe=E(),U=u("div"),ne=E(),H=u("div");for(let o=0;o<p.length;o+=1)p[o].c();se=E(),A=u("div"),M=u("a"),K=u("i"),ue=E(),Z=F(Q),this.h()},l(o){l=i(o,"DIV",{"h-screen":!0,"p-2":!0});var w=m(l);n=i(w,"DIV",{"bg-base-a":!0,"rounded-box":!0,flex:!0,"justify-center":!0,"items-center":!0,"h-full":!0});var h=m(n);a=i(h,"DIV",{"max-w-100":!0,"w-full":!0,"p-5":!0,"bg-base":!0,"rounded-box":!0,shadow:!0});var _=m(a);r=i(_,"DIV",{avatar:!0,"w-24":!0,"h-24":!0,"top--10":!0,"rounded-3xl":!0,"bg-base-a":!0,ring:!0,"data-svelte-h":!0}),xe(r)!=="svelte-13bmjjt"&&(r.innerHTML=v),N=I(_),D=i(_,"DIV",{});var ce=m(D);b=L(ce,d),ce.forEach(c),P=I(_),g=i(_,"FORM",{method:!0});var B=m(g);y=i(B,"DIV",{"form-control":!0});var $=m(y);V=i($,"SPAN",{});var pe=m(V);q=L(pe,j),pe.forEach(c),T=I($),f=i($,"INPUT",{input:!0,name:!0,placeholder:!0,autocomplete:!0}),$.forEach(c),re=I(B),k=i(B,"DIV",{"form-control":!0});var ee=m(k);z=i(ee,"SPAN",{});var me=m(z);W=L(me,G),me.forEach(c),ae=I(ee),S=i(ee,"INPUT",{input:!0,type:!0,name:!0,placeholder:!0}),ee.forEach(c),le=I(B),x=i(B,"BUTTON",{btn:!0,"mt-3":!0,"w-full":!0});var ve=m(x);Y=L(ve,J),ve.forEach(c),B.forEach(c),oe=I(_),U=i(_,"DIV",{"text-center":!0,"my-5":!0,"border-y-2":!0,"h-1":!0}),m(U).forEach(c),ne=I(_),H=i(_,"DIV",{});var _e=m(H);for(let de=0;de<p.length;de+=1)p[de].l(_e);_e.forEach(c),se=I(_),A=i(_,"DIV",{"mt-10":!0,"text-center":!0});var be=m(A);M=i(be,"A",{href:!0,btn:!0});var te=m(M);K=i(te,"I",{"i-bx-home-alt":!0}),m(K).forEach(c),ue=I(te),Z=L(te,Q),te.forEach(c),be.forEach(c),_.forEach(c),h.forEach(c),w.forEach(c),this.h()},h(){e(r,"avatar",""),e(r,"w-24",""),e(r,"h-24",""),e(r,"top--10",""),e(r,"rounded-3xl",""),e(r,"bg-base-a",""),e(r,"ring","2 stone offset-2"),e(f,"input",""),e(f,"name","email"),e(f,"placeholder",O=s[0]("userOrEmail.placeholder")),e(f,"autocomplete","off"),f.autofocus=!0,f.required=!0,e(y,"form-control",""),e(S,"input",""),e(S,"type","password"),e(S,"name","password"),e(S,"placeholder",X=s[0]("password.placeholder")),S.required=!0,e(k,"form-control",""),e(x,"btn","~ secondary"),e(x,"mt-3",""),e(x,"w-full",""),e(g,"method","post"),e(U,"text-center",""),e(U,"my-5",""),e(U,"border-y-2",""),e(U,"h-1",""),e(K,"i-bx-home-alt",""),e(M,"href","/"),e(M,"btn","~ outline"),e(A,"mt-10",""),e(A,"text-center",""),e(a,"max-w-100",""),e(a,"w-full",""),e(a,"p-5",""),e(a,"bg-base",""),e(a,"rounded-box",""),e(a,"shadow",""),e(n,"bg-base-a",""),e(n,"rounded-box",""),e(n,"flex",""),e(n,"justify-center",""),e(n,"items-center",""),e(n,"h-full",""),e(l,"h-screen",""),e(l,"p-2","")},m(o,w){Te(o,l,w),t(l,n),t(n,a),t(a,r),t(a,N),t(a,D),t(D,b),t(a,P),t(a,g),t(g,y),t(y,V),t(V,q),t(y,T),t(y,f),t(g,re),t(g,k),t(k,z),t(z,W),t(k,ae),t(k,S),t(g,le),t(g,x),t(x,Y),t(a,oe),t(a,U),t(a,ne),t(a,H);for(let h=0;h<p.length;h+=1)p[h]&&p[h].m(H,null);t(a,se),t(a,A),t(A,M),t(M,K),t(M,ue),t(M,Z),f.focus(),ie||(he=Oe(g,"submit",Ve(s[2])),ie=!0)},p(o,[w]){if(w&1&&d!==(d=o[0]("sign.title")+"")&&C(b,d),w&1&&j!==(j=o[0]("userOrEmail.label")+"")&&C(q,j),w&1&&O!==(O=o[0]("userOrEmail.placeholder"))&&e(f,"placeholder",O),w&1&&G!==(G=o[0]("password.label")+"")&&C(W,G),w&1&&X!==(X=o[0]("password.placeholder"))&&e(S,"placeholder",X),w&1&&J!==(J=o[0]("sign.btn.in")+"")&&C(Y,J),w&7){R=ye(o[1]);let h;for(h=0;h<R.length;h+=1){const _=De(o,R,h);p[h]?p[h].p(_,w):(p[h]=Pe(_),p[h].c(),p[h].m(H,null))}for(;h<p.length;h+=1)p[h].d(1);p.length=R.length}w&1&&Q!==(Q=o[0]("back.home")+"")&&C(Z,Q)},i:we,o:we,d(o){o&&c(l),Ue(p,o),ie=!1,he()}}}function He(s,l,n){let a,r;Ee(s,Ae,d=>n(0,a=d)),Ee(s,fe,d=>n(4,r=d));let{data:v}=l,N=v.authProviders;async function D({target:d}){if(d instanceof HTMLFormElement){const b=new FormData(d);let P;b.get("provider")?P=await ge.provider(String(b.get("provider"))):P=await ge.login(String(b.get("email")),String(b.get("password"))),P?(Ie(fe,r=[{action:a("sign.success")}],r),qe("/app")):Ie(fe,r=[{error:a("sign.failed")}],r)}}return s.$$set=d=>{"data"in d&&n(3,v=d.data)},[a,N,D,v]}class Qe extends Ne{constructor(l){super(),ke(this,l,He,Le,Se,{data:3})}}export{Qe as component,Ke as universal};
