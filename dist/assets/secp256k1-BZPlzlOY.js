import{H as se,d as ce,t as fe,e as _t,f as ae,h as ue,i as le,s as de}from"./index-DGPiA5iO.js";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const mt=BigInt(0),bt=BigInt(1),he=BigInt(2);function nt(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function gt(e){if(!nt(e))throw new Error("Uint8Array expected")}function ct(e,n){if(typeof n!="boolean")throw new Error(e+" boolean expected, got "+n)}const we=Array.from({length:256},(e,n)=>n.toString(16).padStart(2,"0"));function ft(e){gt(e);let n="";for(let t=0;t<e.length;t++)n+=we[e[t]];return n}function st(e){const n=e.toString(16);return n.length&1?"0"+n:n}function kt(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return e===""?mt:BigInt("0x"+e)}const $={_0:48,_9:57,A:65,F:70,a:97,f:102};function Ct(e){if(e>=$._0&&e<=$._9)return e-$._0;if(e>=$.A&&e<=$.F)return e-($.A-10);if(e>=$.a&&e<=$.f)return e-($.a-10)}function at(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const n=e.length,t=n/2;if(n%2)throw new Error("hex string expected, got unpadded hex of length "+n);const r=new Uint8Array(t);for(let i=0,s=0;i<t;i++,s+=2){const f=Ct(e.charCodeAt(s)),a=Ct(e.charCodeAt(s+1));if(f===void 0||a===void 0){const o=e[s]+e[s+1];throw new Error('hex string expected, got non-hex character "'+o+'" at index '+s)}r[i]=f*16+a}return r}function tt(e){return kt(ft(e))}function Ut(e){return gt(e),kt(ft(Uint8Array.from(e).reverse()))}function ut(e,n){return at(e.toString(16).padStart(n*2,"0"))}function Zt(e,n){return ut(e,n).reverse()}function ge(e){return at(st(e))}function P(e,n,t){let r;if(typeof n=="string")try{r=at(n)}catch(s){throw new Error(e+" must be hex string or Uint8Array, cause: "+s)}else if(nt(n))r=Uint8Array.from(n);else throw new Error(e+" must be hex string or Uint8Array");const i=r.length;if(typeof t=="number"&&i!==t)throw new Error(e+" of length "+t+" expected, got "+i);return r}function wt(...e){let n=0;for(let r=0;r<e.length;r++){const i=e[r];gt(i),n+=i.length}const t=new Uint8Array(n);for(let r=0,i=0;r<e.length;r++){const s=e[r];t.set(s,i),i+=s.length}return t}function pe(e,n){if(e.length!==n.length)return!1;let t=0;for(let r=0;r<e.length;r++)t|=e[r]^n[r];return t===0}function ye(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}const xt=e=>typeof e=="bigint"&&mt<=e;function Et(e,n,t){return xt(e)&&xt(n)&&xt(t)&&n<=e&&e<t}function et(e,n,t,r){if(!Et(n,t,r))throw new Error("expected valid "+e+": "+t+" <= n < "+r+", got "+n)}function Gt(e){let n;for(n=0;e>mt;e>>=bt,n+=1);return n}function me(e,n){return e>>BigInt(n)&bt}function be(e,n,t){return e|(t?bt:mt)<<BigInt(n)}const Rt=e=>(he<<BigInt(e-1))-bt,St=e=>new Uint8Array(e),Mt=e=>Uint8Array.from(e);function Wt(e,n,t){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");let r=St(e),i=St(e),s=0;const f=()=>{r.fill(1),i.fill(0),s=0},a=(...A)=>t(i,r,...A),o=(A=St())=>{i=a(Mt([0]),A),r=a(),A.length!==0&&(i=a(Mt([1]),A),r=a())},u=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let A=0;const d=[];for(;A<n;){r=a();const v=r.slice();d.push(v),A+=r.length}return wt(...d)};return(A,d)=>{f(),o(A);let v;for(;!(v=d(u()));)o();return f(),v}}const Ee={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||nt(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,n)=>n.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function pt(e,n,t={}){const r=(i,s,f)=>{const a=Ee[s];if(typeof a!="function")throw new Error("invalid validator function");const o=e[i];if(!(f&&o===void 0)&&!a(o,e))throw new Error("param "+String(i)+" is invalid. Expected "+s+", got "+o)};for(const[i,s]of Object.entries(n))r(i,s,!1);for(const[i,s]of Object.entries(t))r(i,s,!0);return e}const Be=()=>{throw new Error("not implemented")};function Ot(e){const n=new WeakMap;return(t,...r)=>{const i=n.get(t);if(i!==void 0)return i;const s=e(t,...r);return n.set(t,s),s}}const ve=Object.freeze(Object.defineProperty({__proto__:null,aInRange:et,abool:ct,abytes:gt,bitGet:me,bitLen:Gt,bitMask:Rt,bitSet:be,bytesToHex:ft,bytesToNumberBE:tt,bytesToNumberLE:Ut,concatBytes:wt,createHmacDrbg:Wt,ensureBytes:P,equalBytes:pe,hexToBytes:at,hexToNumber:kt,inRange:Et,isBytes:nt,memoized:Ot,notImplemented:Be,numberToBytesBE:ut,numberToBytesLE:Zt,numberToHexUnpadded:st,numberToVarBytesBE:ge,utf8ToBytes:ye,validateObject:pt},Symbol.toStringTag,{value:"Module"}));class Xt extends se{constructor(n,t){super(),this.finished=!1,this.destroyed=!1,ce(n);const r=fe(t);if(this.iHash=n.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const i=this.blockLen,s=new Uint8Array(i);s.set(r.length>i?n.create().update(r).digest():r);for(let f=0;f<s.length;f++)s[f]^=54;this.iHash.update(s),this.oHash=n.create();for(let f=0;f<s.length;f++)s[f]^=106;this.oHash.update(s),s.fill(0)}update(n){return _t(this),this.iHash.update(n),this}digestInto(n){_t(this),ae(n,this.outputLen),this.finished=!0,this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){const n=new Uint8Array(this.oHash.outputLen);return this.digestInto(n),n}_cloneInto(n){n||(n=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:r,finished:i,destroyed:s,blockLen:f,outputLen:a}=this;return n=n,n.finished=i,n.destroyed=s,n.blockLen=f,n.outputLen=a,n.oHash=t._cloneInto(n.oHash),n.iHash=r._cloneInto(n.iHash),n}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Dt=(e,n,t)=>new Xt(e,n).update(t).digest();Dt.create=(e,n)=>new Xt(e,n);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Z=BigInt(0),z=BigInt(1),J=BigInt(2),xe=BigInt(3),Lt=BigInt(4),Vt=BigInt(5),jt=BigInt(8);function V(e,n){const t=e%n;return t>=Z?t:n+t}function Se(e,n,t){if(n<Z)throw new Error("invalid exponent, negatives unsupported");if(t<=Z)throw new Error("invalid modulus");if(t===z)return Z;let r=z;for(;n>Z;)n&z&&(r=r*e%t),e=e*e%t,n>>=z;return r}function Y(e,n,t){let r=e;for(;n-- >Z;)r*=r,r%=t;return r}function Ht(e,n){if(e===Z)throw new Error("invert: expected non-zero number");if(n<=Z)throw new Error("invert: expected positive modulus, got "+n);let t=V(e,n),r=n,i=Z,s=z;for(;t!==Z;){const a=r/t,o=r%t,u=i-s*a;r=t,t=o,i=s,s=u}if(r!==z)throw new Error("invert: does not exist");return V(i,n)}function Ie(e){const n=(e-z)/J;let t,r,i;for(t=e-z,r=0;t%J===Z;t/=J,r++);for(i=J;i<e&&Se(i,n,e)!==e-z;i++)if(i>1e3)throw new Error("Cannot find square root: likely non-prime P");if(r===1){const f=(e+z)/Lt;return function(o,u){const E=o.pow(u,f);if(!o.eql(o.sqr(E),u))throw new Error("Cannot find square root");return E}}const s=(t+z)/J;return function(a,o){if(a.pow(o,n)===a.neg(a.ONE))throw new Error("Cannot find square root");let u=r,E=a.pow(a.mul(a.ONE,i),t),A=a.pow(o,s),d=a.pow(o,t);for(;!a.eql(d,a.ONE);){if(a.eql(d,a.ZERO))return a.ZERO;let v=1;for(let p=a.sqr(d);v<u&&!a.eql(p,a.ONE);v++)p=a.sqr(p);const N=a.pow(E,z<<BigInt(u-v-1));E=a.sqr(N),A=a.mul(A,N),d=a.mul(d,E),u=v}return A}}function Ae(e){if(e%Lt===xe){const n=(e+z)/Lt;return function(r,i){const s=r.pow(i,n);if(!r.eql(r.sqr(s),i))throw new Error("Cannot find square root");return s}}if(e%jt===Vt){const n=(e-Vt)/jt;return function(r,i){const s=r.mul(i,J),f=r.pow(s,n),a=r.mul(i,f),o=r.mul(r.mul(a,J),f),u=r.mul(a,r.sub(o,r.ONE));if(!r.eql(r.sqr(u),i))throw new Error("Cannot find square root");return u}}return Ie(e)}const qe=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Ne(e){const n={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},t=qe.reduce((r,i)=>(r[i]="function",r),n);return pt(e,t)}function Oe(e,n,t){if(t<Z)throw new Error("invalid exponent, negatives unsupported");if(t===Z)return e.ONE;if(t===z)return n;let r=e.ONE,i=n;for(;t>Z;)t&z&&(r=e.mul(r,i)),i=e.sqr(i),t>>=z;return r}function Le(e,n){const t=new Array(n.length),r=n.reduce((s,f,a)=>e.is0(f)?s:(t[a]=s,e.mul(s,f)),e.ONE),i=e.inv(r);return n.reduceRight((s,f,a)=>e.is0(f)?s:(t[a]=e.mul(s,t[a]),e.mul(s,f)),i),t}function Qt(e,n){const t=n!==void 0?n:e.toString(2).length,r=Math.ceil(t/8);return{nBitLength:t,nByteLength:r}}function Jt(e,n,t=!1,r={}){if(e<=Z)throw new Error("invalid field: expected ORDER > 0, got "+e);const{nBitLength:i,nByteLength:s}=Qt(e,n);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let f;const a=Object.freeze({ORDER:e,isLE:t,BITS:i,BYTES:s,MASK:Rt(i),ZERO:Z,ONE:z,create:o=>V(o,e),isValid:o=>{if(typeof o!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof o);return Z<=o&&o<e},is0:o=>o===Z,isOdd:o=>(o&z)===z,neg:o=>V(-o,e),eql:(o,u)=>o===u,sqr:o=>V(o*o,e),add:(o,u)=>V(o+u,e),sub:(o,u)=>V(o-u,e),mul:(o,u)=>V(o*u,e),pow:(o,u)=>Oe(a,o,u),div:(o,u)=>V(o*Ht(u,e),e),sqrN:o=>o*o,addN:(o,u)=>o+u,subN:(o,u)=>o-u,mulN:(o,u)=>o*u,inv:o=>Ht(o,e),sqrt:r.sqrt||(o=>(f||(f=Ae(e)),f(a,o))),invertBatch:o=>Le(a,o),cmov:(o,u,E)=>E?u:o,toBytes:o=>t?Zt(o,s):ut(o,s),fromBytes:o=>{if(o.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+o.length);return t?Ut(o):tt(o)}});return Object.freeze(a)}function te(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const n=e.toString(2).length;return Math.ceil(n/8)}function ee(e){const n=te(e);return n+Math.ceil(n/2)}function He(e,n,t=!1){const r=e.length,i=te(n),s=ee(n);if(r<16||r<s||r>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+r);const f=t?Ut(e):tt(e),a=V(f,n-z)+z;return t?Zt(a,i):ut(a,i)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Yt=BigInt(0),yt=BigInt(1);function It(e,n){const t=n.negate();return e?t:n}function ne(e,n){if(!Number.isSafeInteger(e)||e<=0||e>n)throw new Error("invalid window size, expected [1.."+n+"], got W="+e)}function At(e,n){ne(e,n);const t=Math.ceil(n/e)+1,r=2**(e-1);return{windows:t,windowSize:r}}function Te(e,n){if(!Array.isArray(e))throw new Error("array expected");e.forEach((t,r)=>{if(!(t instanceof n))throw new Error("invalid point at index "+r)})}function ze(e,n){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((t,r)=>{if(!n.isValid(t))throw new Error("invalid scalar at index "+r)})}const qt=new WeakMap,re=new WeakMap;function Nt(e){return re.get(e)||1}function ke(e,n){return{constTimeNegate:It,hasPrecomputes(t){return Nt(t)!==1},unsafeLadder(t,r,i=e.ZERO){let s=t;for(;r>Yt;)r&yt&&(i=i.add(s)),s=s.double(),r>>=yt;return i},precomputeWindow(t,r){const{windows:i,windowSize:s}=At(r,n),f=[];let a=t,o=a;for(let u=0;u<i;u++){o=a,f.push(o);for(let E=1;E<s;E++)o=o.add(a),f.push(o);a=o.double()}return f},wNAF(t,r,i){const{windows:s,windowSize:f}=At(t,n);let a=e.ZERO,o=e.BASE;const u=BigInt(2**t-1),E=2**t,A=BigInt(t);for(let d=0;d<s;d++){const v=d*f;let N=Number(i&u);i>>=A,N>f&&(N-=E,i+=yt);const p=v,c=v+Math.abs(N)-1,h=d%2!==0,y=N<0;N===0?o=o.add(It(h,r[p])):a=a.add(It(y,r[c]))}return{p:a,f:o}},wNAFUnsafe(t,r,i,s=e.ZERO){const{windows:f,windowSize:a}=At(t,n),o=BigInt(2**t-1),u=2**t,E=BigInt(t);for(let A=0;A<f;A++){const d=A*a;if(i===Yt)break;let v=Number(i&o);if(i>>=E,v>a&&(v-=u,i+=yt),v===0)continue;let N=r[d+Math.abs(v)-1];v<0&&(N=N.negate()),s=s.add(N)}return s},getPrecomputes(t,r,i){let s=qt.get(r);return s||(s=this.precomputeWindow(r,t),t!==1&&qt.set(r,i(s))),s},wNAFCached(t,r,i){const s=Nt(t);return this.wNAF(s,this.getPrecomputes(s,t,i),r)},wNAFCachedUnsafe(t,r,i,s){const f=Nt(t);return f===1?this.unsafeLadder(t,r,s):this.wNAFUnsafe(f,this.getPrecomputes(f,t,i),r,s)},setWindowSize(t,r){ne(r,n),re.set(t,r),qt.delete(t)}}}function Ue(e,n,t,r){if(Te(t,e),ze(r,n),t.length!==r.length)throw new Error("arrays of points and scalars must have equal length");const i=e.ZERO,s=Gt(BigInt(t.length)),f=s>12?s-3:s>4?s-2:s?2:1,a=(1<<f)-1,o=new Array(a+1).fill(i),u=Math.floor((n.BITS-1)/f)*f;let E=i;for(let A=u;A>=0;A-=f){o.fill(i);for(let v=0;v<r.length;v++){const N=r[v],p=Number(N>>BigInt(A)&BigInt(a));o[p]=o[p].add(t[v])}let d=i;for(let v=o.length-1,N=i;v>0;v--)N=N.add(o[v]),d=d.add(N);if(E=E.add(d),A!==0)for(let v=0;v<f;v++)E=E.double()}return E}function oe(e){return Ne(e.Fp),pt(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Qt(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Kt(e){e.lowS!==void 0&&ct("lowS",e.lowS),e.prehash!==void 0&&ct("prehash",e.prehash)}function Ze(e){const n=oe(e);pt(n,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:t,Fp:r,a:i}=n;if(t){if(!r.eql(i,r.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof t!="object"||typeof t.beta!="bigint"||typeof t.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...n})}const{bytesToNumberBE:Re,hexToBytes:_e}=ve;class Ce extends Error{constructor(n=""){super(n)}}const G={Err:Ce,_tlv:{encode:(e,n)=>{const{Err:t}=G;if(e<0||e>256)throw new t("tlv.encode: wrong tag");if(n.length&1)throw new t("tlv.encode: unpadded data");const r=n.length/2,i=st(r);if(i.length/2&128)throw new t("tlv.encode: long form length too big");const s=r>127?st(i.length/2|128):"";return st(e)+s+i+n},decode(e,n){const{Err:t}=G;let r=0;if(e<0||e>256)throw new t("tlv.encode: wrong tag");if(n.length<2||n[r++]!==e)throw new t("tlv.decode: wrong tlv");const i=n[r++],s=!!(i&128);let f=0;if(!s)f=i;else{const o=i&127;if(!o)throw new t("tlv.decode(long): indefinite length not supported");if(o>4)throw new t("tlv.decode(long): byte length is too big");const u=n.subarray(r,r+o);if(u.length!==o)throw new t("tlv.decode: length bytes not complete");if(u[0]===0)throw new t("tlv.decode(long): zero leftmost byte");for(const E of u)f=f<<8|E;if(r+=o,f<128)throw new t("tlv.decode(long): not minimal encoding")}const a=n.subarray(r,r+f);if(a.length!==f)throw new t("tlv.decode: wrong value length");return{v:a,l:n.subarray(r+f)}}},_int:{encode(e){const{Err:n}=G;if(e<W)throw new n("integer: negative integers are not allowed");let t=st(e);if(Number.parseInt(t[0],16)&8&&(t="00"+t),t.length&1)throw new n("unexpected DER parsing assertion: unpadded hex");return t},decode(e){const{Err:n}=G;if(e[0]&128)throw new n("invalid signature integer: negative");if(e[0]===0&&!(e[1]&128))throw new n("invalid signature integer: unnecessary leading zero");return Re(e)}},toSig(e){const{Err:n,_int:t,_tlv:r}=G,i=typeof e=="string"?_e(e):e;gt(i);const{v:s,l:f}=r.decode(48,i);if(f.length)throw new n("invalid signature: left bytes after parsing");const{v:a,l:o}=r.decode(2,s),{v:u,l:E}=r.decode(2,o);if(E.length)throw new n("invalid signature: left bytes after parsing");return{r:t.decode(a),s:t.decode(u)}},hexFromSig(e){const{_tlv:n,_int:t}=G,r=n.encode(2,t.encode(e.r)),i=n.encode(2,t.encode(e.s)),s=r+i;return n.encode(48,s)}},W=BigInt(0),U=BigInt(1);BigInt(2);const Pt=BigInt(3);BigInt(4);function Me(e){const n=Ze(e),{Fp:t}=n,r=Jt(n.n,n.nBitLength),i=n.toBytes||((p,c,h)=>{const y=c.toAffine();return wt(Uint8Array.from([4]),t.toBytes(y.x),t.toBytes(y.y))}),s=n.fromBytes||(p=>{const c=p.subarray(1),h=t.fromBytes(c.subarray(0,t.BYTES)),y=t.fromBytes(c.subarray(t.BYTES,2*t.BYTES));return{x:h,y}});function f(p){const{a:c,b:h}=n,y=t.sqr(p),m=t.mul(y,p);return t.add(t.add(m,t.mul(p,c)),h)}if(!t.eql(t.sqr(n.Gy),f(n.Gx)))throw new Error("bad generator point: equation left != right");function a(p){return Et(p,U,n.n)}function o(p){const{allowedPrivateKeyLengths:c,nByteLength:h,wrapPrivateKey:y,n:m}=n;if(c&&typeof p!="bigint"){if(nt(p)&&(p=ft(p)),typeof p!="string"||!c.includes(p.length))throw new Error("invalid private key");p=p.padStart(h*2,"0")}let q;try{q=typeof p=="bigint"?p:tt(P("private key",p,h))}catch{throw new Error("invalid private key, expected hex or "+h+" bytes, got "+typeof p)}return y&&(q=V(q,m)),et("private key",q,U,m),q}function u(p){if(!(p instanceof d))throw new Error("ProjectivePoint expected")}const E=Ot((p,c)=>{const{px:h,py:y,pz:m}=p;if(t.eql(m,t.ONE))return{x:h,y};const q=p.is0();c==null&&(c=q?t.ONE:t.inv(m));const L=t.mul(h,c),I=t.mul(y,c),b=t.mul(m,c);if(q)return{x:t.ZERO,y:t.ZERO};if(!t.eql(b,t.ONE))throw new Error("invZ was invalid");return{x:L,y:I}}),A=Ot(p=>{if(p.is0()){if(n.allowInfinityPoint&&!t.is0(p.py))return;throw new Error("bad point: ZERO")}const{x:c,y:h}=p.toAffine();if(!t.isValid(c)||!t.isValid(h))throw new Error("bad point: x or y not FE");const y=t.sqr(h),m=f(c);if(!t.eql(y,m))throw new Error("bad point: equation left != right");if(!p.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class d{constructor(c,h,y){if(this.px=c,this.py=h,this.pz=y,c==null||!t.isValid(c))throw new Error("x required");if(h==null||!t.isValid(h))throw new Error("y required");if(y==null||!t.isValid(y))throw new Error("z required");Object.freeze(this)}static fromAffine(c){const{x:h,y}=c||{};if(!c||!t.isValid(h)||!t.isValid(y))throw new Error("invalid affine point");if(c instanceof d)throw new Error("projective point not allowed");const m=q=>t.eql(q,t.ZERO);return m(h)&&m(y)?d.ZERO:new d(h,y,t.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(c){const h=t.invertBatch(c.map(y=>y.pz));return c.map((y,m)=>y.toAffine(h[m])).map(d.fromAffine)}static fromHex(c){const h=d.fromAffine(s(P("pointHex",c)));return h.assertValidity(),h}static fromPrivateKey(c){return d.BASE.multiply(o(c))}static msm(c,h){return Ue(d,r,c,h)}_setWindowSize(c){N.setWindowSize(this,c)}assertValidity(){A(this)}hasEvenY(){const{y:c}=this.toAffine();if(t.isOdd)return!t.isOdd(c);throw new Error("Field doesn't support isOdd")}equals(c){u(c);const{px:h,py:y,pz:m}=this,{px:q,py:L,pz:I}=c,b=t.eql(t.mul(h,I),t.mul(q,m)),S=t.eql(t.mul(y,I),t.mul(L,m));return b&&S}negate(){return new d(this.px,t.neg(this.py),this.pz)}double(){const{a:c,b:h}=n,y=t.mul(h,Pt),{px:m,py:q,pz:L}=this;let I=t.ZERO,b=t.ZERO,S=t.ZERO,B=t.mul(m,m),R=t.mul(q,q),T=t.mul(L,L),H=t.mul(m,q);return H=t.add(H,H),S=t.mul(m,L),S=t.add(S,S),I=t.mul(c,S),b=t.mul(y,T),b=t.add(I,b),I=t.sub(R,b),b=t.add(R,b),b=t.mul(I,b),I=t.mul(H,I),S=t.mul(y,S),T=t.mul(c,T),H=t.sub(B,T),H=t.mul(c,H),H=t.add(H,S),S=t.add(B,B),B=t.add(S,B),B=t.add(B,T),B=t.mul(B,H),b=t.add(b,B),T=t.mul(q,L),T=t.add(T,T),B=t.mul(T,H),I=t.sub(I,B),S=t.mul(T,R),S=t.add(S,S),S=t.add(S,S),new d(I,b,S)}add(c){u(c);const{px:h,py:y,pz:m}=this,{px:q,py:L,pz:I}=c;let b=t.ZERO,S=t.ZERO,B=t.ZERO;const R=n.a,T=t.mul(n.b,Pt);let H=t.mul(h,q),j=t.mul(y,L),l=t.mul(m,I),w=t.add(h,y),g=t.add(q,L);w=t.mul(w,g),g=t.add(H,j),w=t.sub(w,g),g=t.add(h,m);let x=t.add(q,I);return g=t.mul(g,x),x=t.add(H,l),g=t.sub(g,x),x=t.add(y,m),b=t.add(L,I),x=t.mul(x,b),b=t.add(j,l),x=t.sub(x,b),B=t.mul(R,g),b=t.mul(T,l),B=t.add(b,B),b=t.sub(j,B),B=t.add(j,B),S=t.mul(b,B),j=t.add(H,H),j=t.add(j,H),l=t.mul(R,l),g=t.mul(T,g),j=t.add(j,l),l=t.sub(H,l),l=t.mul(R,l),g=t.add(g,l),H=t.mul(j,g),S=t.add(S,H),H=t.mul(x,g),b=t.mul(w,b),b=t.sub(b,H),H=t.mul(w,j),B=t.mul(x,B),B=t.add(B,H),new d(b,S,B)}subtract(c){return this.add(c.negate())}is0(){return this.equals(d.ZERO)}wNAF(c){return N.wNAFCached(this,c,d.normalizeZ)}multiplyUnsafe(c){const{endo:h,n:y}=n;et("scalar",c,W,y);const m=d.ZERO;if(c===W)return m;if(this.is0()||c===U)return this;if(!h||N.hasPrecomputes(this))return N.wNAFCachedUnsafe(this,c,d.normalizeZ);let{k1neg:q,k1:L,k2neg:I,k2:b}=h.splitScalar(c),S=m,B=m,R=this;for(;L>W||b>W;)L&U&&(S=S.add(R)),b&U&&(B=B.add(R)),R=R.double(),L>>=U,b>>=U;return q&&(S=S.negate()),I&&(B=B.negate()),B=new d(t.mul(B.px,h.beta),B.py,B.pz),S.add(B)}multiply(c){const{endo:h,n:y}=n;et("scalar",c,U,y);let m,q;if(h){const{k1neg:L,k1:I,k2neg:b,k2:S}=h.splitScalar(c);let{p:B,f:R}=this.wNAF(I),{p:T,f:H}=this.wNAF(S);B=N.constTimeNegate(L,B),T=N.constTimeNegate(b,T),T=new d(t.mul(T.px,h.beta),T.py,T.pz),m=B.add(T),q=R.add(H)}else{const{p:L,f:I}=this.wNAF(c);m=L,q=I}return d.normalizeZ([m,q])[0]}multiplyAndAddUnsafe(c,h,y){const m=d.BASE,q=(I,b)=>b===W||b===U||!I.equals(m)?I.multiplyUnsafe(b):I.multiply(b),L=q(this,h).add(q(c,y));return L.is0()?void 0:L}toAffine(c){return E(this,c)}isTorsionFree(){const{h:c,isTorsionFree:h}=n;if(c===U)return!0;if(h)return h(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:c,clearCofactor:h}=n;return c===U?this:h?h(d,this):this.multiplyUnsafe(n.h)}toRawBytes(c=!0){return ct("isCompressed",c),this.assertValidity(),i(d,this,c)}toHex(c=!0){return ct("isCompressed",c),ft(this.toRawBytes(c))}}d.BASE=new d(n.Gx,n.Gy,t.ONE),d.ZERO=new d(t.ZERO,t.ONE,t.ZERO);const v=n.nBitLength,N=ke(d,n.endo?Math.ceil(v/2):v);return{CURVE:n,ProjectivePoint:d,normPrivateKeyToScalar:o,weierstrassEquation:f,isWithinCurveOrder:a}}function Ve(e){const n=oe(e);return pt(n,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...n})}function je(e){const n=Ve(e),{Fp:t,n:r}=n,i=t.BYTES+1,s=2*t.BYTES+1;function f(l){return V(l,r)}function a(l){return Ht(l,r)}const{ProjectivePoint:o,normPrivateKeyToScalar:u,weierstrassEquation:E,isWithinCurveOrder:A}=Me({...n,toBytes(l,w,g){const x=w.toAffine(),O=t.toBytes(x.x),k=wt;return ct("isCompressed",g),g?k(Uint8Array.from([w.hasEvenY()?2:3]),O):k(Uint8Array.from([4]),O,t.toBytes(x.y))},fromBytes(l){const w=l.length,g=l[0],x=l.subarray(1);if(w===i&&(g===2||g===3)){const O=tt(x);if(!Et(O,U,t.ORDER))throw new Error("Point is not on curve");const k=E(O);let C;try{C=t.sqrt(k)}catch(K){const M=K instanceof Error?": "+K.message:"";throw new Error("Point is not on curve"+M)}const _=(C&U)===U;return(g&1)===1!==_&&(C=t.neg(C)),{x:O,y:C}}else if(w===s&&g===4){const O=t.fromBytes(x.subarray(0,t.BYTES)),k=t.fromBytes(x.subarray(t.BYTES,2*t.BYTES));return{x:O,y:k}}else{const O=i,k=s;throw new Error("invalid Point, expected length of "+O+", or uncompressed "+k+", got "+w)}}}),d=l=>ft(ut(l,n.nByteLength));function v(l){const w=r>>U;return l>w}function N(l){return v(l)?f(-l):l}const p=(l,w,g)=>tt(l.slice(w,g));class c{constructor(w,g,x){this.r=w,this.s=g,this.recovery=x,this.assertValidity()}static fromCompact(w){const g=n.nByteLength;return w=P("compactSignature",w,g*2),new c(p(w,0,g),p(w,g,2*g))}static fromDER(w){const{r:g,s:x}=G.toSig(P("DER",w));return new c(g,x)}assertValidity(){et("r",this.r,U,r),et("s",this.s,U,r)}addRecoveryBit(w){return new c(this.r,this.s,w)}recoverPublicKey(w){const{r:g,s:x,recovery:O}=this,k=I(P("msgHash",w));if(O==null||![0,1,2,3].includes(O))throw new Error("recovery id invalid");const C=O===2||O===3?g+n.n:g;if(C>=t.ORDER)throw new Error("recovery id 2 or 3 invalid");const _=(O&1)===0?"02":"03",F=o.fromHex(_+d(C)),K=a(C),M=f(-k*K),rt=f(x*K),X=o.BASE.multiplyAndAddUnsafe(F,M,rt);if(!X)throw new Error("point at infinify");return X.assertValidity(),X}hasHighS(){return v(this.s)}normalizeS(){return this.hasHighS()?new c(this.r,f(-this.s),this.recovery):this}toDERRawBytes(){return at(this.toDERHex())}toDERHex(){return G.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return at(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const h={isValidPrivateKey(l){try{return u(l),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const l=ee(n.n);return He(n.randomBytes(l),n.n)},precompute(l=8,w=o.BASE){return w._setWindowSize(l),w.multiply(BigInt(3)),w}};function y(l,w=!0){return o.fromPrivateKey(l).toRawBytes(w)}function m(l){const w=nt(l),g=typeof l=="string",x=(w||g)&&l.length;return w?x===i||x===s:g?x===2*i||x===2*s:l instanceof o}function q(l,w,g=!0){if(m(l))throw new Error("first arg must be private key");if(!m(w))throw new Error("second arg must be public key");return o.fromHex(w).multiply(u(l)).toRawBytes(g)}const L=n.bits2int||function(l){if(l.length>8192)throw new Error("input is too large");const w=tt(l),g=l.length*8-n.nBitLength;return g>0?w>>BigInt(g):w},I=n.bits2int_modN||function(l){return f(L(l))},b=Rt(n.nBitLength);function S(l){return et("num < 2^"+n.nBitLength,l,W,b),ut(l,n.nByteLength)}function B(l,w,g=R){if(["recovered","canonical"].some(D=>D in g))throw new Error("sign() legacy options not supported");const{hash:x,randomBytes:O}=n;let{lowS:k,prehash:C,extraEntropy:_}=g;k==null&&(k=!0),l=P("msgHash",l),Kt(g),C&&(l=P("prehashed msgHash",x(l)));const F=I(l),K=u(w),M=[S(K),S(F)];if(_!=null&&_!==!1){const D=_===!0?O(t.BYTES):_;M.push(P("extraEntropy",D))}const rt=wt(...M),X=F;function Bt(D){const ot=L(D);if(!A(ot))return;const vt=a(ot),lt=o.BASE.multiply(ot).toAffine(),Q=f(lt.x);if(Q===W)return;const dt=f(vt*f(X+Q*K));if(dt===W)return;let ht=(lt.x===Q?0:2)|Number(lt.y&U),it=dt;return k&&v(dt)&&(it=N(dt),ht^=1),new c(Q,it,ht)}return{seed:rt,k2sig:Bt}}const R={lowS:n.lowS,prehash:!1},T={lowS:n.lowS,prehash:!1};function H(l,w,g=R){const{seed:x,k2sig:O}=B(l,w,g),k=n;return Wt(k.hash.outputLen,k.nByteLength,k.hmac)(x,O)}o.BASE._setWindowSize(8);function j(l,w,g,x=T){var ht;const O=l;w=P("msgHash",w),g=P("publicKey",g);const{lowS:k,prehash:C,format:_}=x;if(Kt(x),"strict"in x)throw new Error("options.strict was renamed to lowS");if(_!==void 0&&_!=="compact"&&_!=="der")throw new Error("format must be compact or der");const F=typeof O=="string"||nt(O),K=!F&&!_&&typeof O=="object"&&O!==null&&typeof O.r=="bigint"&&typeof O.s=="bigint";if(!F&&!K)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let M,rt;try{if(K&&(M=new c(O.r,O.s)),F){try{_!=="compact"&&(M=c.fromDER(O))}catch(it){if(!(it instanceof G.Err))throw it}!M&&_!=="der"&&(M=c.fromCompact(O))}rt=o.fromHex(g)}catch{return!1}if(!M||k&&M.hasHighS())return!1;C&&(w=n.hash(w));const{r:X,s:Bt}=M,D=I(w),ot=a(Bt),vt=f(D*ot),lt=f(X*ot),Q=(ht=o.BASE.multiplyAndAddUnsafe(rt,vt,lt))==null?void 0:ht.toAffine();return Q?f(Q.x)===X:!1}return{CURVE:n,getPublicKey:y,getSharedSecret:q,sign:H,verify:j,ProjectivePoint:o,Signature:c,utils:h}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ye(e){return{hash:e,hmac:(n,...t)=>Dt(e,n,le(...t)),randomBytes:ue}}function Ke(e,n){const t=r=>je({...e,...Ye(r)});return{...t(n),create:t}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ie=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ft=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Pe=BigInt(1),Tt=BigInt(2),$t=(e,n)=>(e+n/Tt)/n;function Fe(e){const n=ie,t=BigInt(3),r=BigInt(6),i=BigInt(11),s=BigInt(22),f=BigInt(23),a=BigInt(44),o=BigInt(88),u=e*e*e%n,E=u*u*e%n,A=Y(E,t,n)*E%n,d=Y(A,t,n)*E%n,v=Y(d,Tt,n)*u%n,N=Y(v,i,n)*v%n,p=Y(N,s,n)*N%n,c=Y(p,a,n)*p%n,h=Y(c,o,n)*c%n,y=Y(h,a,n)*p%n,m=Y(y,t,n)*E%n,q=Y(m,f,n)*N%n,L=Y(q,r,n)*u%n,I=Y(L,Tt,n);if(!zt.eql(zt.sqr(I),e))throw new Error("Cannot find square root");return I}const zt=Jt(ie,void 0,void 0,{sqrt:Fe}),$e=Ke({a:BigInt(0),b:BigInt(7),Fp:zt,n:Ft,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const n=Ft,t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Pe*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=t,f=BigInt("0x100000000000000000000000000000000"),a=$t(s*e,n),o=$t(-r*e,n);let u=V(e-a*t-o*i,n),E=V(-a*r-o*s,n);const A=u>f,d=E>f;if(A&&(u=n-u),d&&(E=n-E),u>f||E>f)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:A,k1:u,k2neg:d,k2:E}}}},de);BigInt(0);$e.ProjectivePoint;export{$e as secp256k1};
