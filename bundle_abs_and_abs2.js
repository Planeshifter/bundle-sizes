(()=>{var e=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var _r=e((Ml,Ar)=>{"use strict";var fn=typeof Object.defineProperty=="function"?Object.defineProperty:null;Ar.exports=fn});var Rr=e((Xl,Fr)=>{"use strict";var pn=_r();function vn(){try{return pn({},"x",{}),!0}catch(r){return!1}}Fr.exports=vn});var Gr=e((Ul,kr)=>{"use strict";var yn=Object.defineProperty;kr.exports=yn});var Mr=e((Yl,Vr)=>{"use strict";var T=Object.prototype,Lr=T.toString,Br=T.__defineGetter__,Cr=T.__defineSetter__,bn=T.__lookupGetter__,mn=T.__lookupSetter__;function gn(r,t,i){var n,a,l,o;if(typeof r!="object"||r===null||Lr.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof i!="object"||i===null||Lr.call(i)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if(a="value"in i,a&&(bn.call(r,t)||mn.call(r,t)?(n=r.__proto__,r.__proto__=T,delete r[t],r[t]=i.value,r.__proto__=n):r[t]=i.value),l="get"in i,o="set"in i,a&&(l||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&Br&&Br.call(r,t,i.get),o&&Cr&&Cr.call(r,t,i.set),r}Vr.exports=gn});var Ur=e((Hl,Xr)=>{"use strict";var dn=Rr(),qn=Gr(),jn=Mr(),B;dn()?B=qn:B=jn;Xr.exports=B});var Hr=e((Dl,Yr)=>{"use strict";var hn=Ur();function xn(r,t,i){hn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}Yr.exports=xn});var q=e((zl,Dr)=>{"use strict";var wn=Hr();Dr.exports=wn});var C=e((Wl,zr)=>{"use strict";function On(r){return typeof r=="number"}zr.exports=On});var Jr=e((Jl,Wr)=>{"use strict";function Sn(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Wr.exports=Sn});var Qr=e((Kl,Kr)=>{"use strict";var Tn=Jr();Kr.exports=Tn});var $r=e((Ql,Zr)=>{"use strict";var En=Qr(),Pn=En();function Nn(){return Pn&&typeof Symbol.toStringTag=="symbol"}Zr.exports=Nn});var I=e((Zl,re)=>{"use strict";var In=$r();re.exports=In});var V=e(($l,ee)=>{"use strict";var An=Object.prototype.toString;ee.exports=An});var ie=e((rc,te)=>{"use strict";var _n=V();function Fn(r){return _n.call(r)}te.exports=Fn});var ne=e((ec,se)=>{"use strict";var Rn=Object.prototype.hasOwnProperty;function kn(r,t){return r==null?!1:Rn.call(r,t)}se.exports=kn});var ue=e((tc,ae)=>{"use strict";var Gn=ne();ae.exports=Gn});var le=e((ic,oe)=>{"use strict";var Ln=typeof Symbol=="function"?Symbol.toStringTag:"";oe.exports=Ln});var fe=e((sc,ce)=>{"use strict";var Bn=ue(),A=le(),M=V();function Cn(r){var t,i,n;if(r==null)return M.call(r);i=r[A],t=Bn(r,A);try{r[A]=void 0}catch(a){return M.call(r)}return n=M.call(r),t?r[A]=i:delete r[A],n}ce.exports=Cn});var w=e((nc,pe)=>{"use strict";var Vn=I(),Mn=ie(),Xn=fe(),X;Vn()?X=Xn:X=Mn;pe.exports=X});var ye=e((ac,ve)=>{"use strict";ve.exports=Number});var F=e((uc,be)=>{"use strict";var Un=ye();be.exports=Un});var ge=e((oc,me)=>{"use strict";var Yn=F(),Hn=Yn.prototype.toString;me.exports=Hn});var qe=e((lc,de)=>{"use strict";var Dn=ge();function zn(r){try{return Dn.call(r),!0}catch(t){return!1}}de.exports=zn});var U=e((cc,je)=>{"use strict";var Wn=I(),Jn=w(),Kn=F(),Qn=qe(),Zn=Wn();function $n(r){return typeof r=="object"?r instanceof Kn?!0:Zn?Qn(r):Jn(r)==="[object Number]":!1}je.exports=$n});var xe=e((fc,he)=>{"use strict";var ra=C(),ea=U();function ta(r){return ra(r)||ea(r)}he.exports=ta});var H=e((pc,Oe)=>{"use strict";var we=q(),Y=xe(),ia=C(),sa=U();we(Y,"isPrimitive",ia);we(Y,"isObject",sa);Oe.exports=Y});var D=e((vc,Se)=>{"use strict";var na=Number.POSITIVE_INFINITY;Se.exports=na});var Ee=e((yc,Te)=>{"use strict";var aa=F(),ua=aa.NEGATIVE_INFINITY;Te.exports=ua});var Ne=e((bc,Pe)=>{"use strict";var oa=Math.floor;Pe.exports=oa});var Ae=e((mc,Ie)=>{"use strict";var la=Ne();Ie.exports=la});var Fe=e((gc,_e)=>{"use strict";var ca=Ae();function fa(r){return ca(r)===r}_e.exports=fa});var R=e((dc,Re)=>{"use strict";var pa=Fe();Re.exports=pa});var z=e((qc,ke)=>{"use strict";var va=D(),ya=Ee(),ba=R();function ma(r){return r<va&&r>ya&&ba(r)}ke.exports=ma});var W=e((jc,Ge)=>{"use strict";var ga=H().isPrimitive,da=z();function qa(r){return ga(r)&&da(r)}Ge.exports=qa});var J=e((hc,Le)=>{"use strict";var ja=H().isObject,ha=z();function xa(r){return ja(r)&&ha(r.valueOf())}Le.exports=xa});var Ce=e((xc,Be)=>{"use strict";var wa=W(),Oa=J();function Sa(r){return wa(r)||Oa(r)}Be.exports=Sa});var E=e((wc,Me)=>{"use strict";var Ve=q(),K=Ce(),Ta=W(),Ea=J();Ve(K,"isPrimitive",Ta);Ve(K,"isObject",Ea);Me.exports=K});var Q=e((Oc,Xe)=>{"use strict";var Pa=E().isPrimitive;function Na(r){return Pa(r)&&r>=0}Xe.exports=Na});var Z=e((Sc,Ue)=>{"use strict";var Ia=E().isObject;function Aa(r){return Ia(r)&&r.valueOf()>=0}Ue.exports=Aa});var He=e((Tc,Ye)=>{"use strict";var _a=Q(),Fa=Z();function Ra(r){return _a(r)||Fa(r)}Ye.exports=Ra});var We=e((Ec,ze)=>{"use strict";var De=q(),$=He(),ka=Q(),Ga=Z();De($,"isPrimitive",ka);De($,"isObject",Ga);ze.exports=$});var rr=e((Pc,Je)=>{"use strict";var La=E().isPrimitive;function Ba(r){return La(r)&&r>0}Je.exports=Ba});var er=e((Nc,Ke)=>{"use strict";var Ca=E().isObject;function Va(r){return Ca(r)&&r.valueOf()>0}Ke.exports=Va});var Ze=e((Ic,Qe)=>{"use strict";var Ma=rr(),Xa=er();function Ua(r){return Ma(r)||Xa(r)}Qe.exports=Ua});var et=e((Ac,rt)=>{"use strict";var $e=q(),tr=Ze(),Ya=rr(),Ha=er();$e(tr,"isPrimitive",Ya);$e(tr,"isObject",Ha);rt.exports=tr});var it=e((_c,tt)=>{"use strict";var Da=4294967295>>>0;tt.exports=Da});var nt=e((Fc,st)=>{"use strict";var za=R(),Wa=it();function Ja(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&za(r.length)&&r.length>=0&&r.length<=Wa}st.exports=Ja});var ut=e((Rc,at)=>{"use strict";var Ka=nt();at.exports=Ka});var lt=e((kc,ot)=>{"use strict";var Qa=ut();function Za(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return t;function t(i){var n,a;if(!Qa(i)||(n=i.length,n===0))return!1;for(a=0;a<n;a++)if(r(i[a])===!1)return!1;return!0}}ot.exports=Za});var ft=e((Gc,ct)=>{"use strict";var $a=lt();ct.exports=$a});var vt=e((Lc,pt)=>{"use strict";var ru=/./;pt.exports=ru});var ir=e((Bc,yt)=>{"use strict";function eu(r){return typeof r=="boolean"}yt.exports=eu});var mt=e((Cc,bt)=>{"use strict";var tu=Boolean.prototype.toString;bt.exports=tu});var dt=e((Vc,gt)=>{"use strict";var iu=mt();function su(r){try{return iu.call(r),!0}catch(t){return!1}}gt.exports=su});var sr=e((Mc,qt)=>{"use strict";var nu=I(),au=w(),uu=dt(),ou=nu();function lu(r){return typeof r=="object"?r instanceof Boolean?!0:ou?uu(r):au(r)==="[object Boolean]":!1}qt.exports=lu});var ht=e((Xc,jt)=>{"use strict";var cu=ir(),fu=sr();function pu(r){return cu(r)||fu(r)}jt.exports=pu});var Ot=e((Uc,wt)=>{"use strict";var xt=q(),nr=ht(),vu=ir(),yu=sr();xt(nr,"isPrimitive",vu);xt(nr,"isObject",yu);wt.exports=nr});var Tt=e((Yc,St)=>{"use strict";function bu(){return new Function("return this;")()}St.exports=bu});var Pt=e((Hc,Et)=>{"use strict";var mu=typeof self=="object"?self:null;Et.exports=mu});var It=e((Dc,Nt)=>{"use strict";var gu=typeof window=="object"?window:null;Nt.exports=gu});var _t=e((zc,At)=>{"use strict";var du=typeof global=="object"?global:null;At.exports=du});var Lt=e((Wc,Gt)=>{"use strict";var qu=Ot().isPrimitive,ju=Tt(),Ft=Pt(),Rt=It(),kt=_t();function hu(r){if(arguments.length){if(!qu(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ju()}if(Ft)return Ft;if(Rt)return Rt;if(kt)return kt;throw new Error("unexpected error. Unable to resolve global object.")}Gt.exports=hu});var Ct=e((Jc,Bt)=>{"use strict";var xu=Lt();Bt.exports=xu});var Xt=e((Kc,Mt)=>{"use strict";var wu=Ct(),Vt=wu(),Ou=Vt.document&&Vt.document.childNodes;Mt.exports=Ou});var Yt=e((Qc,Ut)=>{"use strict";var Su=Int8Array;Ut.exports=Su});var Dt=e((Zc,Ht)=>{"use strict";var Tu=vt(),Eu=Xt(),Pu=Yt();function Nu(){return typeof Tu=="function"||typeof Pu=="object"||typeof Eu=="function"}Ht.exports=Nu});var ar=e(($c,zt)=>{"use strict";function Iu(){return/^\s*function\s*([^(]*)/i}zt.exports=Iu});var Jt=e((rf,Wt)=>{"use strict";var Au=ar(),_u=Au();Wt.exports=_u});var Zt=e((ef,Qt)=>{"use strict";var Fu=q(),Kt=ar(),Ru=Jt();Fu(Kt,"REGEXP",Ru);Qt.exports=Kt});var ri=e((tf,$t)=>{"use strict";var ku=w(),ur;function Gu(r){return ku(r)==="[object Array]"}Array.isArray?ur=Array.isArray:ur=Gu;$t.exports=ur});var ti=e((sf,ei)=>{"use strict";var Lu=ri();ei.exports=Lu});var si=e((nf,ii)=>{"use strict";var Bu=ti();function Cu(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return t;function t(i){var n,a;if(!Bu(i)||(n=i.length,n===0))return!1;for(a=0;a<n;a++)if(r(i[a])===!1)return!1;return!0}}ii.exports=Cu});var or=e((af,ni)=>{"use strict";var Vu=si();ni.exports=Vu});var ui=e((uf,ai)=>{"use strict";function Mu(r){return r!==null&&typeof r=="object"}ai.exports=Mu});var li=e((of,oi)=>{"use strict";var Xu=q(),Uu=or(),lr=ui();Xu(lr,"isObjectLikeArray",Uu(lr));oi.exports=lr});var fi=e((lf,ci)=>{"use strict";var Yu=li();function Hu(r){return Yu(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}ci.exports=Hu});var vi=e((cf,pi)=>{"use strict";var Du=fi();pi.exports=Du});var bi=e((ff,yi)=>{"use strict";var zu=w(),Wu=Zt().REGEXP,Ju=vi();function Ku(r){var t,i,n;if(i=zu(r).slice(8,-1),(i==="Object"||i==="Error")&&r.constructor){if(n=r.constructor,typeof n.name=="string")return n.name;if(t=Wu.exec(n.toString()),t)return t[1]}return Ju(r)?"Buffer":i}yi.exports=Ku});var cr=e((pf,mi)=>{"use strict";var Qu=bi();mi.exports=Qu});var di=e((vf,gi)=>{"use strict";var Zu=cr();function $u(r){var t;return r===null?"null":(t=typeof r,t==="object"?Zu(r).toLowerCase():t)}gi.exports=$u});var ji=e((yf,qi)=>{"use strict";var ro=cr();function eo(r){return ro(r).toLowerCase()}qi.exports=eo});var xi=e((bf,hi)=>{"use strict";var to=Dt(),io=di(),so=ji(),no=to()?so:io;hi.exports=no});var Oi=e((mf,wi)=>{"use strict";var ao=xi();function uo(r){return ao(r)==="function"}wi.exports=uo});var fr=e((gf,Si)=>{"use strict";var oo=Oi();Si.exports=oo});var Ei=e((df,Ti)=>{"use strict";var lo=ft(),co=fr(),fo=lo(co);Ti.exports=fo});var pr=e((qf,Pi)=>{"use strict";function po(r){return typeof r=="string"}Pi.exports=po});var Ii=e((jf,Ni)=>{"use strict";var vo=String.prototype.valueOf;Ni.exports=vo});var _i=e((hf,Ai)=>{"use strict";var yo=Ii();function bo(r){try{return yo.call(r),!0}catch(t){return!1}}Ai.exports=bo});var vr=e((xf,Fi)=>{"use strict";var mo=I(),go=w(),qo=_i(),jo=mo();function ho(r){return typeof r=="object"?r instanceof String?!0:jo?qo(r):go(r)==="[object String]":!1}Fi.exports=ho});var ki=e((wf,Ri)=>{"use strict";var xo=pr(),wo=vr();function Oo(r){return xo(r)||wo(r)}Ri.exports=Oo});var br=e((Of,Li)=>{"use strict";var Gi=q(),yr=ki(),So=pr(),To=vr();Gi(yr,"isPrimitive",So);Gi(yr,"isObject",To);Li.exports=yr});var Vi=e((Sf,Ci)=>{"use strict";var Bi=q(),mr=or(),gr=br(),dr=mr(gr);Bi(dr,"primitives",mr(gr.isPrimitive));Bi(dr,"objects",mr(gr.isObject));Ci.exports=dr});var Xi=e((Tf,Mi)=>{"use strict";var Eo=9007199254740991;Mi.exports=Eo});var Yi=e((Ef,Ui)=>{"use strict";var Po=R(),No=Xi();function Io(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Po(r.length)&&r.length>=0&&r.length<=No}Ui.exports=Io});var Di=e((Pf,Hi)=>{"use strict";var Ao=Yi();Hi.exports=Ao});var Wi=e((Nf,zi)=>{"use strict";function _o(r){return Math.abs(r)}zi.exports=_o});var qr=e((If,Ji)=>{"use strict";var Fo=Wi();Ji.exports=Fo});var Qi=e((Af,Ki)=>{"use strict";function Ro(r,t,i,n,a,l,o,v,y){var m,f,b,d;for(m=l,b=0;b<r;b++){for(f=y,d=0;d<t&&i[m+d*a]===o[f];d++)f+=v;if(d===t)return b;m+=n}return-1}Ki.exports=Ro});var rs=e((_f,$i)=>{"use strict";var jr=We().isPrimitive,ko=et(),hr=E().isPrimitive,Go=Ei(),Lo=fr(),Bo=Vi().primitives,Zi=Di(),Co=br().isPrimitive,Vo=qr(),Mo=Qi();function Xo(r,t,i,n,a,l){var o,v,y,m,f,b;if(Lo(r))b=r;else if(!Go(r))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+r+"`.");if(!Bo(t))throw new TypeError("invalid argument. Second argument must be an array of strings. Value: `"+t+"`.");if(!Zi(i)&&i!==null)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+i+"`.");if(!ko(n))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+n+"`.");if(!jr(a))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+a+"`.");if(!jr(l))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+l+"`.");if(y=a+l,y===0)throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(b){if(m=t.length/y,!hr(m))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(m=r.length,t.length!==m*y)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(i&&i.length!==m)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(y*3+1===n)v=!1;else if(y*4+1===n)v=!0;else throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");return v?o=4:o=3,f=a*o+1,d;function d(){var j,P,h,G,N,L,x,O,g,S,c,_;if(L=arguments.length,L!==n)throw L<n?new Error("invalid invocation. Insufficient arguments."):new Error("invalid invocation. Too many arguments.");if(O=arguments[0],!hr(O))throw new TypeError("invalid argument. First argument must be an integer.");for(N=[O],G=[],c=1;c<n;c+=o){if(g=arguments[c],!Co(g))throw c<f?new TypeError("invalid argument. Input array data type argument must be a string."):new TypeError("invalid argument. Output array data type argument must be a string.");G.push(g)}for(j=[],c=3;c<n;c+=o){if(g=arguments[c],!hr(g))throw c<f?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");j.push(g)}if(v)for(P=[],c=4;c<n;c+=o){if(g=arguments[c],!jr(g))throw c<f?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");P.push(g)}for(h=[],c=2;c<n;c+=o){if(g=arguments[c],!Zi(g))throw c<f?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(_=(c-2)/o,v){if(x=P[_]+(O-1)*j[_],O>0&&(x<0||x>=g.length))throw c<f?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((O-1)*Vo(j[_])>=g.length)throw c<f?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");h.push(g)}if(x=Mo(m,y,t,y,1,0,G,1,0),x<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(b?S=b:S=r[x],i?v?S(h,N,j,P,i[x]):S(h,N,j,i[x]):v?S(h,N,j,P):S(h,N,j),l===1)return h[y-1];if(l!==0)return h.slice(a)}}$i.exports=Xo});var xr=e((Ff,es)=>{"use strict";var Uo=rs();es.exports=Uo});var is=e((Rf,ts)=>{"use strict";function Yo(r,t,i,n){var a,l,o,v,y,m,f,b;if(f=t[0],!(f<=0))for(a=i[0],l=i[1],a<0?o=(1-f)*a:o=0,l<0?v=(1-f)*l:v=0,y=r[0],m=r[1],b=0;b<f;b++)m[v]=n(y[o]),o+=a,v+=l}ts.exports=Yo});var ns=e((kf,ss)=>{"use strict";function Ho(r,t,i,n,a){var l,o,v,y,m,f,b,d;if(b=t[0],!(b<=0))for(v=n[0],y=n[1],l=i[0],o=i[1],m=r[0],f=r[1],d=0;d<b;d++)f[y]=a(m[v]),v+=l,y+=o}ss.exports=Ho});var wr=e((Gf,us)=>{"use strict";var Do=q(),as=is(),zo=ns();Do(as,"ndarray",zo);us.exports=as});var os=e((Lf,Wo)=>{Wo.exports=["float64","float64","float64","generic","float32","float32","float32","float64","float32","generic","generic","generic","int32","int32","int32","uint32","int32","float64","int32","generic","int16","int16","int16","int32","int16","uint16","int16","uint32","int16","float32","int16","float64","int16","generic","int8","int8","int8","int16","int8","int32","int8","uint8","int8","uint8c","int8","uint16","int8","uint32","int8","float32","int8","float64","int8","generic","uint32","uint32","uint32","float64","uint32","generic","uint16","int32","uint16","uint16","uint16","uint32","uint16","float32","uint16","float64","uint16","generic","uint8","int16","uint8","int32","uint8","uint8","uint8","uint8c","uint8","uint16","uint8","uint32","uint8","float32","uint8","float64","uint8","generic","uint8c","int16","uint8c","int32","uint8c","uint8","uint8c","uint8c","uint8c","uint16","uint8c","uint32","uint8c","float32","uint8c","float64","uint8c","generic"]});var ls=e((Bf,Jo)=>{Jo.exports={nargs:7,nin:1,nout:1}});var fs=e((Cf,cs)=>{"use strict";function Ko(r){return Math.abs(r)}cs.exports=Ko});var vs=e((Vf,ps)=>{"use strict";var Qo=fs();ps.exports=Qo});var bs=e((Mf,ys)=>{"use strict";function Zo(r){var t,i;return i=r|0,t=i>>31|0,(i^t)-t|0}ys.exports=Zo});var gs=e((Xf,ms)=>{"use strict";var $o=bs();ms.exports=$o});var qs=e((Uf,ds)=>{"use strict";function rl(r){return r}ds.exports=rl});var hs=e((Yf,js)=>{"use strict";var el=qs();js.exports=el});var ws=e((Hf,xs)=>{"use strict";var p=qr(),Or=vs(),k=gs(),u=hs(),tl=[p,p,Or,Or,Or,p,k,k,k,k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u];xs.exports=tl});var Ss=e((Df,Os)=>{"use strict";var il=xr(),sl=wr(),nl=os(),Sr=ls(),al=ws(),ul=il(sl,nl,al,Sr.nargs,Sr.nin,Sr.nout);function ol(r,t,i,n,a,l,o){return ul(r,t,i,n,a,l,o)}Os.exports=ol});var Ts=e((zf,ll)=>{ll.exports=["float64","float64","float64","generic","float32","float32","float32","float64","float32","generic","generic","generic","int32","int32","int32","uint32","int32","float64","int32","generic","int16","int16","int16","int32","int16","uint16","int16","uint32","int16","float32","int16","float64","int16","generic","int8","int8","int8","int16","int8","int32","int8","uint8","int8","uint8c","int8","uint16","int8","uint32","int8","float32","int8","float64","int8","generic","uint32","uint32","uint32","float64","uint32","generic","uint16","int32","uint16","uint16","uint16","uint32","uint16","float32","uint16","float64","uint16","generic","uint8","int16","uint8","int32","uint8","uint8","uint8","uint8c","uint8","uint16","uint8","uint32","uint8","float32","uint8","float64","uint8","generic","uint8c","int16","uint8c","int32","uint8c","uint8","uint8c","uint8c","uint8c","uint16","uint8c","uint32","uint8c","float32","uint8c","float64","uint8c","generic"]});var Es=e((Wf,cl)=>{cl.exports={nargs:7,nin:1,nout:1}});var Ns=e((Jf,Ps)=>{"use strict";function fl(r){return r*r}Ps.exports=fl});var As=e((Kf,Is)=>{"use strict";var pl=Ns();Is.exports=pl});var Fs=e((Qf,_s)=>{"use strict";var vl=typeof Math.fround=="function"?Math.fround:null;_s.exports=vl});var ks=e((Zf,Rs)=>{"use strict";var yl=w(),bl=typeof Float32Array=="function";function ml(r){return bl&&r instanceof Float32Array||yl(r)==="[object Float32Array]"}Rs.exports=ml});var Ls=e(($f,Gs)=>{"use strict";var gl=ks();Gs.exports=gl});var Cs=e((rp,Bs)=>{"use strict";var dl=typeof Float32Array=="function"?Float32Array:null;Bs.exports=dl});var Xs=e((ep,Ms)=>{"use strict";var ql=Ls(),jl=D(),Vs=Cs();function hl(){var r,t;if(typeof Vs!="function")return!1;try{t=new Vs([1,3.14,-3.14,5e40]),r=ql(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===jl}catch(i){r=!1}return r}Ms.exports=hl});var Ys=e((tp,Us)=>{"use strict";var xl=Xs();Us.exports=xl});var Ds=e((ip,Hs)=>{"use strict";var wl=typeof Float32Array=="function"?Float32Array:void 0;Hs.exports=wl});var Ws=e((sp,zs)=>{"use strict";function Ol(){throw new Error("not implemented")}zs.exports=Ol});var Ks=e((np,Js)=>{"use strict";var Sl=Ys(),Tl=Ds(),El=Ws(),Tr;Sl()?Tr=Tl:Tr=El;Js.exports=Tr});var $s=e((ap,Zs)=>{"use strict";var Pl=Ks(),Qs=new Pl(1);function Nl(r){return Qs[0]=r,Qs[0]}Zs.exports=Nl});var en=e((up,rn)=>{"use strict";var Er=Fs(),Il=$s();typeof Er!="function"&&(Er=Il);rn.exports=Er});var sn=e((op,tn)=>{"use strict";var Pr=en();function Al(r){return Pr(Pr(r)*Pr(r))}tn.exports=Al});var an=e((lp,nn)=>{"use strict";var _l=sn();nn.exports=_l});var on=e((cp,un)=>{"use strict";var s=As(),Nr=an(),Fl=[s,s,Nr,Nr,Nr,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s];un.exports=Fl});var cn=e((fp,ln)=>{"use strict";var Rl=xr(),kl=wr(),Gl=Ts(),Ir=Es(),Ll=on(),Bl=Rl(kl,Gl,Ll,Ir.nargs,Ir.nin,Ir.nout);function Cl(r,t,i,n,a,l,o){return Bl(r,t,i,n,a,l,o)}ln.exports=Cl});global.abs=Ss();global.abs2=cn();})();
