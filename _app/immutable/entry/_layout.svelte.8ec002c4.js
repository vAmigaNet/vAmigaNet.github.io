import{S as Le,i as he,s as ye,D as n,E as i,o as cr,e as ot,b as $,n as _r,h as L,k as ge,r as ne,a as at,l as _e,m as Se,u as ie,c as st,p as ce,F as U,v as er,G as ba,z as Ye,H as ma,A as je,B as Xe,I as Na,J as ka,K as Ia,g as ke,d as Ie,C as ze,L as La,x as tt}from"../chunks/index.5b7df20d.js";import{a as nt,p as ee,i as H,d as x,c as Je,b as or,O as a,W as ha,T as w,R as Sr,l as ya,e as ue,j as ar,f as Ua,g as sr,h as wa,I as rt,k as Ga,m as nr,w as Va,M as lr,n as dr,o as fr,q as pr,r as Er,s as Cr,t as Or,u as Mr,v as Dr,x as Rr,y as Pr,z as Tr,A as Ar,B as br,C as mr,D as Nr,E as kr,F as Ir,G as Lr,H as ir,J as hr,K as yr,L as Ur,N as wr,P as Gr,Q as Vr,S as Hr,U as xr,V as Wr,X as Br,Y as Kr,Z as Fr,_ as Yr,$ as jr,a0 as Xr,a1 as zr,a2 as Jr,a3 as qr,a4 as Qr,a5 as Zr,a6 as vr,a7 as $r,a8 as eo,a9 as to,aa as ro,ab as oo,ac as ao,ad as so,ae as no,af as io,ag as co,ah as uo,ai as go,aj as _o,ak as So,al as lo,am as fo,an as po,ao as Eo,ap as Co,aq as Oo,ar as Mo,as as Do,at as Ro,au as Po,av as To,aw as Ao,ax as bo,ay as mo,az as No,aA as ko,aB as Io,aC as Lo,aD as ho,aE as yo,aF as Uo,aG as wo,aH as Go,aI as Vo,aJ as Ho,aK as tr,aL as xo,aM as Wo,aN as Bo,aO as Ko,aP as Fo,aQ as Yo,aR as jo,aS as Xo,aT as zo,aU as Jo,aV as qo,aW as Qo,aX as Zo,aY as vo,aZ as $o,a_ as ea,a$ as ta,b0 as ra,b1 as oa,b2 as aa,b3 as sa,b4 as na,b5 as ia,b6 as ca,b7 as ua,b8 as ga,b9 as _a,ba as Sa,bb as la,bc as da,bd as rr,be as Ha,bf as fa,bg as pa}from"../chunks/constants.a31dbb8f.js";function xa(o,l,r){let t,s;n(o,nt,E=>r(11,t=E)),n(o,ee,E=>r(12,s=E));let g,_,C,D,O,P=0;async function d(){if(g){console.log("Audio context already initialized: ",g.state);return}g=new AudioContext,g.onstatechange=()=>console.log("Audio Context: state = "+g.state);let E=g.createGain();E.gain.value=.15,E.connect(g.destination),t.setSampleRate(g.sampleRate),await g.audioWorklet.addModule("js/audio-processor.js");const b=new AudioWorkletNode(g,"audio-processor",{outputChannelCount:[2],processorOptions:{pointers:[t.leftChannelBuffer(),t.rightChannelBuffer()],buffer:s.HEAPF32.buffer,length:2048}});b.port.onmessage=h=>{t.updateAudio(h.data)},b.connect(g.destination),g.state==="suspended"&&await g.resume(),await T()}async function T(){_||(_=await S("sounds/insert.mp3")),C||(C=await S("sounds/eject.mp3")),D||(D=await S("sounds/step.mp3")),O||(O=await S("sounds/stephd.mp3"))}function m(E,b){R(_,E)}function f(E,b){R(C,E)}function M(E,b){R(D,E)}function k(E,b){R(O,E)}async function R(E,b,h){if(E==null||P>=3)return;const y=g.createGain();y.gain.value=.004*b,y.connect(g.destination);const N=g.createBufferSource();N.buffer=E,N.addEventListener("ended",()=>{P--}),N.connect(y),N.start(),P++}async function S(E){console.log("load_sound: url = "+E);let h=await(await fetch(E)).arrayBuffer();return await g.decodeAudioData(h)}return[d,m,f,M,k]}class Wa extends Le{constructor(l){super(),he(this,l,xa,null,ye,{setup:0,playInsertSound:1,playEjectSound:2,playStepSound:3,playClickSound:4})}get setup(){return this.$$.ctx[0]}get playInsertSound(){return this.$$.ctx[1]}get playEjectSound(){return this.$$.ctx[2]}get playStepSound(){return this.$$.ctx[3]}get playClickSound(){return this.$$.ctx[4]}}function Ba(o,l,r){let t,s,g,_,C,D;n(o,ee,u=>r(31,t=u)),n(o,nt,u=>r(32,s=u)),n(o,H,u=>r(33,g=u)),n(o,x,u=>r(34,_=u)),n(o,Je,u=>r(35,C=u)),n(o,or,u=>r(25,D=u));let O=[{opt:a.WARP_MODE,default:[ha.auto].toString()},{opt:a.THEME,default:w.default.toString()},{opt:a.CANVAS_BORDER,default:"0"},{opt:a.SHAKING,default:"1"}],P=[{opt:a.CPU_REVISION,default:"0"},{opt:a.AGNUS_REVISION,default:"0"},{opt:a.DENISE_REVISION,default:"0"},{opt:a.RTC_MODEL,default:"0"},{opt:a.CHIP_RAM,default:"512"},{opt:a.SLOW_RAM,default:"512"},{opt:a.FAST_RAM,default:"0"},{opt:a.BANK_MAP,default:"0"},{opt:a.INIT_PATTERN,default:"0"},{opt:a.UNMAPPED,default:"0"},{opt:a.SLOW_RAM_MIRROR,default:"1"},{opt:a.SLOW_RAM_DELAY,default:"1"},{opt:a.DF0,default:"1"},{opt:a.DF1,default:"1"},{opt:a.DF2,default:"0"},{opt:a.DF3,default:"0"},{opt:a.HD0,default:"1"},{opt:a.HD1,default:"0"},{opt:a.HD2,default:"0"},{opt:a.HD3,default:"0"}],d=[{opt:a.BLIITTER_ACCURACY,default:"2"},{opt:a.TODBUG,default:"1"},{opt:a.PTR_DROPS,default:"1"},{opt:a.ECLOCK_SYNCING,default:"1"},{opt:a.DRIVE_SPEED,default:"1"},{opt:a.DRIVE_MECHANICS,default:"1"},{opt:a.OPT_LOCK_DSKSYNC,default:"0"},{opt:a.OPT_AUTO_DSKSYNC,default:"0"},{opt:a.CLX_SPR_SPR,default:"0"},{opt:a.CLX_SPR_PLF,default:"0"},{opt:a.CLX_PLF_PLF,default:"0"},{opt:a.ACCURATE_KEYBOARD,default:"1"}],T=[{opt:a.AUDVOL0,default:"100"},{opt:a.AUDVOL1,default:"100"},{opt:a.AUDVOL2,default:"100"},{opt:a.AUDVOL3,default:"100"},{opt:a.AUDVOLL,default:"50"},{opt:a.AUDVOLR,default:"50"},{opt:a.STEP_VOLUME,default:"50"},{opt:a.POLL_VOLUME,default:"50"},{opt:a.INSERT_VOLUME,default:"50"},{opt:a.EJECT_VOLUME,default:"50"}],m=[{opt:a.RENDER_MODE,default:Sr.smooth.toString()},{opt:a.FLICKER_WEIGHT,default:"0"},{opt:a.PALETTE,default:"0"},{opt:a.BRIGHTNESS,default:"50"},{opt:a.CONTRAST,default:"100"},{opt:a.SATURATION,default:"50"}],f=w.default,M=0,k=1,R=Sr.smooth,S=50,E;ya(()=>ue.opts.toArray()).subscribe(u=>{r(24,E=u)});async function h(){console.log("registerDefaults"),await y(),await N(),await Ue(),await le(),await de()}async function y(){for(const u of O)await W(u.opt,u.default)}async function N(){for(const u of P)await W(u.opt,u.default)}async function Ue(){for(const u of d)await W(u.opt,u.default)}async function le(){for(const u of T)await W(u.opt,u.default)}async function de(){for(const u of m)await W(u.opt,u.default)}async function W(u,c){try{await ue.opts.add({key:u,value:c})}catch{}}async function we(){console.log("restoreDefaults"),await fe(),await pe(),await Ee(),await Ce(),await Oe()}async function fe(){for(const u of O)await B(u.opt);await y(),await te()}async function pe(){for(const u of P)await B(u.opt);await N(),await q()}async function Ee(){for(const u of d)await B(u.opt);await N(),await q()}async function Ce(){for(const u of T)await B(u.opt);await le(),await re()}async function Oe(){for(const u of m)await B(u.opt);await de(),await oe()}async function B(u){try{const c=await ue.opts.delete(u)}catch{console.log("Failed to remove entry",u)}}async function Me(){console.log("loadSettings"),await te(),await q(),await De(),await re(),await oe()}async function te(){for(const u of O)await K(u.opt)}async function q(){for(const u of P)await K(u.opt)}async function De(){for(const u of d)await K(u.opt)}async function re(){for(const u of T)await K(u.opt)}async function oe(){for(const u of m)await K(u.opt)}async function K(u){try{const c=await ue.opts.get(u);Q(u,c.value)}catch{}}async function Ge(){console.log("saveSettings"),await Re(),await Pe(),await Te(),await Ae(),await be()}async function Re(){for(const u of O)await F(u.opt)}async function Pe(){for(const u of P)await F(u.opt)}async function Te(){for(const u of d)await F(u.opt)}async function Ae(){for(const u of T)await F(u.opt)}async function be(){for(const u of m)await F(u.opt)}async function F(u){const c=ae(u);try{const Ne=await ue.opts.put({key:u,value:c})}catch{}}function ae(u){switch(u){case a.THEME:return[f].toString();case a.CANVAS_BORDER:return M.toString();case a.SHAKING:return k.toString();case a.CPU_REVISION:return s.getConfig(t.OPT_CPU_REVISION).toString();case a.CPU_SPEED:return s.getConfig(t.OPT_CPU_OVERCLOCKING).toString();case a.WARP_MODE:return s.getConfig(t.OPT_WARP_MODE).toString();case a.AGNUS_REVISION:return s.getConfig(t.OPT_AGNUS_REVISION).toString();case a.DENISE_REVISION:return s.getConfig(t.OPT_DENISE_REVISION).toString();case a.RTC_MODEL:return s.getConfig(t.OPT_RTC_MODEL).toString();case a.CHIP_RAM:return s.getConfig(t.OPT_CHIP_RAM).toString();case a.SLOW_RAM:return s.getConfig(t.OPT_SLOW_RAM).toString();case a.FAST_RAM:return s.getConfig(t.OPT_FAST_RAM).toString();case a.BANK_MAP:return s.getConfig(t.OPT_BANKMAP).toString();case a.INIT_PATTERN:return s.getConfig(t.OPT_RAM_INIT_PATTERN).toString();case a.UNMAPPED:return s.getConfig(t.OPT_UNMAPPING_TYPE).toString();case a.SLOW_RAM_MIRROR:return s.getConfig(t.OPT_SLOW_RAM_MIRROR).toString();case a.SLOW_RAM_DELAY:return s.getConfig(t.OPT_SLOW_RAM_DELAY).toString();case a.DF0:return s.getDriveConfig(t.OPT_DRIVE_CONNECT,0).toString();case a.DF1:return s.getDriveConfig(t.OPT_DRIVE_CONNECT,1).toString();case a.DF2:return s.getDriveConfig(t.OPT_DRIVE_CONNECT,2).toString();case a.DF3:return s.getDriveConfig(t.OPT_DRIVE_CONNECT,3).toString();case a.HD0:return s.getDriveConfig(t.OPT_HDC_CONNECT,0).toString();case a.HD1:return s.getDriveConfig(t.OPT_HDC_CONNECT,1).toString();case a.HD2:return s.getDriveConfig(t.OPT_HDC_CONNECT,2).toString();case a.HD3:return s.getDriveConfig(t.OPT_HDC_CONNECT,3).toString();case a.BLIITTER_ACCURACY:return s.getConfig(t.OPT_BLIITTER_ACCURACY).toString();case a.TODBUG:return s.getConfig(t.OPT_TODBUG).toString();case a.PTR_DROPS:return s.getConfig(t.OPT_PTR_DROPS).toString();case a.ECLOCK_SYNCING:return s.getConfig(t.OPT_ECLOCK_SYNCING).toString();case a.DRIVE_SPEED:return s.getConfig(t.OPT_DRIVE_SPEED).toString();case a.DRIVE_MECHANICS:return s.getConfig(t.OPT_DRIVE_MECHANICS).toString();case a.OPT_LOCK_DSKSYNC:return s.getConfig(t.OPT_LOCK_DSKSYNC).toString();case a.OPT_AUTO_DSKSYNC:return s.getConfig(t.OPT_AUTO_DSKSYNC).toString();case a.CLX_SPR_SPR:return s.getConfig(t.OPT_CLX_SPR_SPR).toString();case a.CLX_SPR_PLF:return s.getConfig(t.OPT_CLX_SPR_PLF).toString();case a.CLX_PLF_PLF:return s.getConfig(t.OPT_CLX_PLF_PLF).toString();case a.ACCURATE_KEYBOARD:return s.getConfig(t.OPT_ACCURATE_KEYBOARD).toString();case a.AUDVOL0:return s.getDriveConfig(t.OPT_AUDVOL,0).toString();case a.AUDVOL1:return s.getDriveConfig(t.OPT_AUDVOL,1).toString();case a.AUDVOL2:return s.getDriveConfig(t.OPT_AUDVOL,2).toString();case a.AUDVOL3:return s.getDriveConfig(t.OPT_AUDVOL,3).toString();case a.AUDVOLL:return s.getConfig(t.OPT_AUDVOLL).toString();case a.AUDVOLR:return s.getConfig(t.OPT_AUDVOLR).toString();case a.STEP_VOLUME:return s.getDriveConfig(t.OPT_STEP_VOLUME,0).toString();case a.POLL_VOLUME:return s.getDriveConfig(t.OPT_POLL_VOLUME,0).toString();case a.INSERT_VOLUME:return s.getDriveConfig(t.OPT_INSERT_VOLUME,0).toString();case a.EJECT_VOLUME:return s.getDriveConfig(t.OPT_EJECT_VOLUME,0).toString();case a.RENDER_MODE:return R.toString();case a.PALETTE:return s.getConfig(t.OPT_PALETTE).toString();case a.BRIGHTNESS:return s.getConfig(t.OPT_BRIGHTNESS).toString();case a.CONTRAST:return s.getConfig(t.OPT_CONTRAST).toString();case a.SATURATION:return s.getConfig(t.OPT_SATURATION).toString();case a.FLICKER_WEIGHT:return S.toString();default:return console.warn("get: Invalid option: ",u),"???"}}function me(u){return Number(ae(u))}function Ve(u){return me(u)!=0}function Q(u,c){switch(u){case a.THEME:We(Number(c));break;case a.CANVAS_BORDER:M=Number(c);break;case a.SHAKING:k=Number(c);break;case a.CPU_REVISION:s.configure(t.OPT_CPU_REVISION,Number(c));break;case a.CPU_SPEED:s.configure(t.OPT_CPU_OVERCLOCKING,Number(c));break;case a.WARP_MODE:s.configure(t.OPT_WARP_MODE,Number(c));break;case a.AGNUS_REVISION:s.configure(t.OPT_AGNUS_REVISION,Number(c));break;case a.DENISE_REVISION:s.configure(t.OPT_DENISE_REVISION,Number(c));break;case a.RTC_MODEL:s.configure(t.OPT_RTC_MODEL,Number(c));break;case a.CHIP_RAM:s.configure(t.OPT_CHIP_RAM,Number(c));break;case a.SLOW_RAM:s.configure(t.OPT_SLOW_RAM,Number(c));break;case a.FAST_RAM:s.configure(t.OPT_FAST_RAM,Number(c));break;case a.BANK_MAP:s.configure(t.OPT_BANKMAP,Number(c));break;case a.INIT_PATTERN:s.configure(t.OPT_RAM_INIT_PATTERN,Number(c));break;case a.UNMAPPED:s.configure(t.OPT_UNMAPPING_TYPE,Number(c));break;case a.SLOW_RAM_MIRROR:s.configure(t.OPT_SLOW_RAM_MIRROR,Number(c));break;case a.SLOW_RAM_DELAY:s.configure(t.OPT_SLOW_RAM_DELAY,Number(c));break;case a.DF0:break;case a.DF1:s.configureDrive(t.OPT_DRIVE_CONNECT,1,c),c==0&&s.configureDrive(t.OPT_DRIVE_CONNECT,2,0),c==0&&s.configureDrive(t.OPT_DRIVE_CONNECT,3,0);break;case a.DF2:c==1&&s.configureDrive(t.OPT_DRIVE_CONNECT,1,1),s.configureDrive(t.OPT_DRIVE_CONNECT,2,c),c==0&&s.configureDrive(t.OPT_DRIVE_CONNECT,3,0);break;case a.DF3:c==1&&s.configureDrive(t.OPT_DRIVE_CONNECT,1,1),c==1&&s.configureDrive(t.OPT_DRIVE_CONNECT,2,1),s.configureDrive(t.OPT_DRIVE_CONNECT,3,c);break;case a.HD0:s.configureDrive(t.OPT_HDC_CONNECT,0,c);break;case a.HD1:s.configureDrive(t.OPT_HDC_CONNECT,1,c);break;case a.HD2:s.configureDrive(t.OPT_HDC_CONNECT,2,c);break;case a.HD3:s.configureDrive(t.OPT_HDC_CONNECT,3,c);break;case a.BLIITTER_ACCURACY:s.configure(t.OPT_BLIITTER_ACCURACY,Number(c));break;case a.TODBUG:s.configure(t.OPT_TODBUG,Number(c));break;case a.PTR_DROPS:s.configure(t.OPT_PTR_DROPS,Number(c));break;case a.ECLOCK_SYNCING:s.configure(t.OPT_ECLOCK_SYNCING,Number(c));break;case a.DRIVE_SPEED:s.configure(t.OPT_DRIVE_SPEED,Number(c));break;case a.DRIVE_MECHANICS:s.configureDrive(t.OPT_DRIVE_MECHANICS,0,Number(c)),s.configureDrive(t.OPT_DRIVE_MECHANICS,1,Number(c)),s.configureDrive(t.OPT_DRIVE_MECHANICS,2,Number(c)),s.configureDrive(t.OPT_DRIVE_MECHANICS,3,Number(c));break;case a.OPT_LOCK_DSKSYNC:s.configure(t.OPT_LOCK_DSKSYNC,Number(c));break;case a.OPT_AUTO_DSKSYNC:s.configure(t.OPT_AUTO_DSKSYNC,Number(c));break;case a.CLX_SPR_SPR:s.configure(t.OPT_CLX_SPR_SPR,Number(c));break;case a.CLX_SPR_PLF:s.configure(t.OPT_CLX_SPR_PLF,Number(c));break;case a.CLX_PLF_PLF:s.configure(t.OPT_CLX_PLF_PLF,Number(c));break;case a.ACCURATE_KEYBOARD:s.configure(t.OPT_ACCURATE_KEYBOARD,Number(c));break;case a.AUDVOL0:s.configureDrive(t.OPT_AUDVOL,0,Number(c));break;case a.AUDVOL1:s.configureDrive(t.OPT_AUDVOL,1,Number(c));break;case a.AUDVOL2:s.configureDrive(t.OPT_AUDVOL,2,Number(c));break;case a.AUDVOL3:s.configureDrive(t.OPT_AUDVOL,3,Number(c));break;case a.AUDVOLL:s.configure(t.OPT_AUDVOLL,Number(c));break;case a.AUDVOLR:s.configure(t.OPT_AUDVOLR,Number(c));break;case a.STEP_VOLUME:s.configure(t.OPT_STEP_VOLUME,Number(c));break;case a.POLL_VOLUME:s.configure(t.OPT_POLL_VOLUME,Number(c));break;case a.INSERT_VOLUME:s.configure(t.OPT_INSERT_VOLUME,Number(c));break;case a.EJECT_VOLUME:s.configure(t.OPT_EJECT_VOLUME,Number(c));break;case a.RENDER_MODE:R=Number(c);break;case a.PALETTE:s.configure(t.OPT_PALETTE,Number(c));break;case a.BRIGHTNESS:s.configure(t.OPT_BRIGHTNESS,Number(c));break;case a.CONTRAST:s.configure(t.OPT_CONTRAST,Number(c));break;case a.SATURATION:s.configure(t.OPT_SATURATION,Number(c));break;case a.FLICKER_WEIGHT:S=Number(c);break;default:console.warn("set: Invalid option: ",u)}Je.set(C)}function He(u,c){console.log("setNum: ",c,c.toString()),Q(u,c.toString())}function xe(u,c){Q(u,c?"true":"false")}function We(u){console.log("setTheme",u),f=u;let c="";switch(f){case w.default:c="mytheme",i(x,_=!0,_),i(H,g="invert",g);break;case w.light:c="light",i(x,_=!0,_),i(H,g="invert",g);break;case w.dark:c="dark",i(x,_=!0,_),i(H,g="invert",g);break;case w.coffee:c="coffee",i(x,_=!1,_),i(H,g="",g);break;case w.cupcake:c="cupcake",i(x,_=!1,_),i(H,g="",g);break;case w.forest:c="forest",i(x,_=!0,_),i(H,g="invert",g);break;case w.aqua:c="aqua",i(x,_=!1,_),i(H,g="",g);break;case w.garden:c="garden",i(x,_=!0,_),i(H,g="invert",g);break;case w.pastel:c="pastel",i(x,_=!1,_),i(H,g="",g);break;default:console.log("Invalid theme")}document.querySelector("html").setAttribute("data-theme",c)}return o.$$.update=()=>{o.$$.dirty[0]&16777216&&console.log("CONFIG DB: ",E),o.$$.dirty[0]&33554432&&D&&(h(),Me())},[we,fe,pe,Ee,Ce,Oe,Me,te,q,De,re,oe,Ge,Re,Pe,Te,Ae,be,ae,me,Ve,Q,He,xe,E,D]}class Ka extends Le{constructor(l){super(),he(this,l,Ba,null,ye,{restoreDefaults:0,restoreGeneralDefaults:1,restoreMachineDefaults:2,restoreCompatibilityDefaults:3,restoreAudioDefaults:4,restoreVideoDefaults:5,loadSettings:6,loadGeneralSettings:7,loadMachineSettings:8,loadCompatibilitySettings:9,loadAudioSettings:10,loadVideoSettings:11,saveSettings:12,saveGeneralSettings:13,saveMachineSettings:14,saveCompatibilitySettings:15,saveAudioSettings:16,saveVideoSettings:17,get:18,getNum:19,getBool:20,set:21,setNum:22,setBool:23},null,[-1,-1])}get restoreDefaults(){return this.$$.ctx[0]}get restoreGeneralDefaults(){return this.$$.ctx[1]}get restoreMachineDefaults(){return this.$$.ctx[2]}get restoreCompatibilityDefaults(){return this.$$.ctx[3]}get restoreAudioDefaults(){return this.$$.ctx[4]}get restoreVideoDefaults(){return this.$$.ctx[5]}get loadSettings(){return this.$$.ctx[6]}get loadGeneralSettings(){return this.$$.ctx[7]}get loadMachineSettings(){return this.$$.ctx[8]}get loadCompatibilitySettings(){return this.$$.ctx[9]}get loadAudioSettings(){return this.$$.ctx[10]}get loadVideoSettings(){return this.$$.ctx[11]}get saveSettings(){return this.$$.ctx[12]}get saveGeneralSettings(){return this.$$.ctx[13]}get saveMachineSettings(){return this.$$.ctx[14]}get saveCompatibilitySettings(){return this.$$.ctx[15]}get saveAudioSettings(){return this.$$.ctx[16]}get saveVideoSettings(){return this.$$.ctx[17]}get get(){return this.$$.ctx[18]}get getNum(){return this.$$.ctx[19]}get getBool(){return this.$$.ctx[20]}get set(){return this.$$.ctx[21]}get setNum(){return this.$$.ctx[22]}get setBool(){return this.$$.ctx[23]}}function Fa(o,l,r){let t,s,g,_,C;n(o,ee,d=>r(2,t=d)),n(o,ar,d=>r(3,s=d)),n(o,Ua,d=>r(4,g=d)),n(o,sr,d=>r(5,_=d)),n(o,wa,d=>r(6,C=d));let{gamepads:D={}}=l;cr(()=>{console.log("GamepadManager: onMount"),window.addEventListener("gamepadconnected",d=>{r(0,D[d.gamepad.index]=d.gamepad,D)},!1),window.addEventListener("gamepaddisconnected",d=>{delete D[d.gamepad.index]},!1)});function O(){return C==rt.gamepad1||C==rt.gamepad2?_:g==rt.gamepad1||g==rt.gamepad2?s:null}function P(){var k,R,S,E,b,h,y,N;const d=navigator.getGamepads();if(d.length==0)return;const T=d[0];if(!T)return;const m=T.buttons[0].pressed,f=T.axes[0].valueOf(),M=T.axes[1].valueOf();m?(k=O())==null||k.trigger(t.PRESS_FIRE):(R=O())==null||R.trigger(t.RELEASE_FIRE),f<-.5?(S=O())==null||S.trigger(t.PULL_LEFT):f>.5?(E=O())==null||E.trigger(t.PULL_RIGHT):(b=O())==null||b.trigger(t.RELEASE_X),M<-.5?(h=O())==null||h.trigger(t.PULL_UP):M>.5?(y=O())==null||y.trigger(t.PULL_DOWN):(N=O())==null||N.trigger(t.RELEASE_Y)}return o.$$set=d=>{"gamepads"in d&&r(0,D=d.gamepads)},o.$$.update=()=>{o.$$.dirty&1&&console.log("Gamepads: ",D)},[D,P]}class Ya extends Le{constructor(l){super(),he(this,l,Fa,null,ye,{gamepads:0,pollState:1})}get pollState(){return this.$$.ctx[1]}}function Ea(o){let l,r,t,s,g,_,C=o[3].ErrorCodeKey(o[1])+"",D,O,P,d,T,m;return{c(){l=ge("div"),r=ge("div"),t=ge("p"),s=ne("Emulator failure. Uncaught exception "),g=ne(o[1]),_=ne(" ("),D=ne(C),O=ne(")"),P=at(),d=ge("p"),T=ne(o[4]),this.h()},l(f){l=_e(f,"DIV",{class:!0});var M=Se(l);r=_e(M,"DIV",{class:!0});var k=Se(r);t=_e(k,"P",{class:!0});var R=Se(t);s=ie(R,"Emulator failure. Uncaught exception "),g=ie(R,o[1]),_=ie(R," ("),D=ie(R,C),O=ie(R,")"),R.forEach(L),P=st(k),d=_e(k,"P",{class:!0});var S=Se(d);T=ie(S,o[4]),S.forEach(L),k.forEach(L),M.forEach(L),this.h()},h(){ce(t,"class","p-1"),ce(d,"class","p-1"),ce(r,"class","h-24 w-full border-none flex flex-col justify-center text-lg font-azeret text-center"),ce(l,"class",m="relative flex justify-center bg-black text-red-600 border-[10px] "+o[2])},m(f,M){$(f,l,M),U(l,r),U(r,t),U(t,s),U(t,g),U(t,_),U(t,D),U(t,O),U(r,P),U(r,d),U(d,T)},p(f,M){M&2&&er(g,f[1]),M&10&&C!==(C=f[3].ErrorCodeKey(f[1])+"")&&er(D,C),M&16&&er(T,f[4]),M&4&&m!==(m="relative flex justify-center bg-black text-red-600 border-[10px] "+f[2])&&ce(l,"class",m)},d(f){f&&L(l)}}}function ja(o){let l,r=o[0]&&Ea(o);return{c(){r&&r.c(),l=ot()},l(t){r&&r.l(t),l=ot()},m(t,s){r&&r.m(t,s),$(t,l,s)},p(t,[s]){t[0]?r?r.p(t,s):(r=Ea(t),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},i:_r,o:_r,d(t){r&&r.d(t),t&&L(l)}}}function Xa(o,l,r){let t,s,g,_,C,D;n(o,Ga,d=>r(1,g=d)),n(o,ee,d=>r(7,_=d)),n(o,nr,d=>r(3,C=d)),n(o,Va,d=>r(4,D=d));let O=!1,P=!0;return o.$$.update=()=>{o.$$.dirty&128&&r(6,t=_!=null),o.$$.dirty&99&&g&&t&&!O&&(r(0,O=!0),setInterval(()=>{r(5,P=!P)},800)),o.$$.dirty&32&&r(2,s=P?"border-red-600":"border-black")},[O,g,s,C,D,P,t,_]}class za extends Le{constructor(l){super(),he(this,l,Xa,ja,ye,{})}}function Ja(o,l,r){let t,s,g,_,C,D,O,P,d,T,m,f,M,k,R,S,E,b,h,y,N,Ue,le,de,W,we,fe,pe,Ee,Ce,Oe,B,Me,te,q,De,re,oe,K,Ge,Re,Pe,Te,Ae,be,F,ae,me,Ve,Q,He,xe,We,u,c,Ne,it,ct,ut,gt,_t,St,lt,dt,ft,pt,Et,Ct,Ot,Mt,Dt,Rt,Pt,se,Z,v,Y,Tt,At,bt,mt,Be,j,X,z,J,Nt,kt,It,Lt,ht,yt,I,Ut,qe,Qe,wt,Gt,Ze,Vt,Ht,xt,Ke,ve,Wt,Bt,Kt,Ft,Yt,G,jt,Xt,zt,Jt,qt,Qt,Zt,vt,Fe;n(o,ee,e=>r(10,t=e)),n(o,lr,e=>r(11,s=e)),n(o,dr,e=>r(12,g=e)),n(o,fr,e=>r(13,_=e)),n(o,pr,e=>r(14,C=e)),n(o,Er,e=>r(15,D=e)),n(o,Cr,e=>r(16,O=e)),n(o,Or,e=>r(17,P=e)),n(o,Mr,e=>r(18,d=e)),n(o,Dr,e=>r(19,T=e)),n(o,Rr,e=>r(20,m=e)),n(o,Pr,e=>r(21,f=e)),n(o,Tr,e=>r(22,M=e)),n(o,Ar,e=>r(23,k=e)),n(o,br,e=>r(24,R=e)),n(o,mr,e=>r(25,S=e)),n(o,Nr,e=>r(26,E=e)),n(o,kr,e=>r(27,b=e)),n(o,Ir,e=>r(28,h=e)),n(o,Lr,e=>r(29,y=e)),n(o,ir,e=>r(30,N=e)),n(o,hr,e=>r(31,Ue=e)),n(o,yr,e=>r(32,le=e)),n(o,Ur,e=>r(33,de=e)),n(o,wr,e=>r(34,W=e)),n(o,Gr,e=>r(35,we=e)),n(o,Vr,e=>r(36,fe=e)),n(o,Hr,e=>r(37,pe=e)),n(o,xr,e=>r(38,Ee=e)),n(o,Wr,e=>r(39,Ce=e)),n(o,Br,e=>r(40,Oe=e)),n(o,Kr,e=>r(41,B=e)),n(o,Fr,e=>r(42,Me=e)),n(o,Yr,e=>r(43,te=e)),n(o,jr,e=>r(44,q=e)),n(o,Xr,e=>r(45,De=e)),n(o,zr,e=>r(46,re=e)),n(o,Jr,e=>r(47,oe=e)),n(o,qr,e=>r(48,K=e)),n(o,Qr,e=>r(49,Ge=e)),n(o,Zr,e=>r(50,Re=e)),n(o,vr,e=>r(51,Pe=e)),n(o,$r,e=>r(52,Te=e)),n(o,eo,e=>r(53,Ae=e)),n(o,to,e=>r(54,be=e)),n(o,ro,e=>r(55,F=e)),n(o,oo,e=>r(56,ae=e)),n(o,ao,e=>r(57,me=e)),n(o,so,e=>r(58,Ve=e)),n(o,no,e=>r(59,Q=e)),n(o,io,e=>r(60,He=e)),n(o,co,e=>r(61,xe=e)),n(o,uo,e=>r(62,We=e)),n(o,go,e=>r(63,u=e)),n(o,_o,e=>r(64,c=e)),n(o,So,e=>r(65,Ne=e)),n(o,lo,e=>r(66,it=e)),n(o,fo,e=>r(67,ct=e)),n(o,po,e=>r(68,ut=e)),n(o,Eo,e=>r(69,gt=e)),n(o,Co,e=>r(70,_t=e)),n(o,Oo,e=>r(71,St=e)),n(o,Mo,e=>r(72,lt=e)),n(o,Do,e=>r(73,dt=e)),n(o,Ro,e=>r(74,ft=e)),n(o,Po,e=>r(75,pt=e)),n(o,To,e=>r(76,Et=e)),n(o,Ao,e=>r(77,Ct=e)),n(o,bo,e=>r(78,Ot=e)),n(o,mo,e=>r(79,Mt=e)),n(o,No,e=>r(80,Dt=e)),n(o,ko,e=>r(81,Rt=e)),n(o,Io,e=>r(82,Pt=e)),n(o,Lo,e=>r(83,se=e)),n(o,ho,e=>r(84,Z=e)),n(o,yo,e=>r(85,v=e)),n(o,Uo,e=>r(86,Y=e)),n(o,wo,e=>r(87,Tt=e)),n(o,Go,e=>r(88,At=e)),n(o,Vo,e=>r(89,bt=e)),n(o,Ho,e=>r(90,mt=e)),n(o,tr,e=>r(91,Be=e)),n(o,xo,e=>r(92,j=e)),n(o,Wo,e=>r(93,X=e)),n(o,Bo,e=>r(94,z=e)),n(o,Ko,e=>r(95,J=e)),n(o,Fo,e=>r(96,Nt=e)),n(o,Yo,e=>r(97,kt=e)),n(o,jo,e=>r(98,It=e)),n(o,Xo,e=>r(99,Lt=e)),n(o,zo,e=>r(100,ht=e)),n(o,Jo,e=>r(101,yt=e)),n(o,nt,e=>r(102,I=e)),n(o,qo,e=>r(103,Ut=e)),n(o,Qo,e=>r(104,qe=e)),n(o,Zo,e=>r(105,Qe=e)),n(o,vo,e=>r(106,wt=e)),n(o,$o,e=>r(107,Gt=e)),n(o,Je,e=>r(108,Ze=e)),n(o,ea,e=>r(109,Vt=e)),n(o,ta,e=>r(110,Ht=e)),n(o,ra,e=>r(111,xt=e)),n(o,oa,e=>r(112,Ke=e)),n(o,or,e=>r(113,ve=e)),n(o,aa,e=>r(114,Wt=e)),n(o,sa,e=>r(115,Bt=e)),n(o,na,e=>r(116,Kt=e)),n(o,ia,e=>r(117,Ft=e)),n(o,ca,e=>r(118,Yt=e)),n(o,ua,e=>r(119,G=e)),n(o,ga,e=>r(120,jt=e)),n(o,ar,e=>r(121,Xt=e)),n(o,sr,e=>r(122,zt=e)),n(o,nr,e=>r(123,Jt=e)),n(o,_a,e=>r(124,qt=e)),n(o,Sa,e=>r(125,Qt=e)),n(o,la,e=>r(126,Zt=e)),n(o,da,e=>r(127,vt=e)),n(o,rr,e=>r(128,Fe=e)),cr(()=>{console.log("Proxy: onMount()"),i(ee,t.processMsg=Aa,t)});async function Oa(e){await N.setup();try{console.log("Showcase:",e.title),I.powerOff(),console.log("Installing ROM:",e.roms),t.installRoms(e.roms),console.log("Configuring Chip RAM:",e.memory[0]),I.configure(t.OPT_CHIP_RAM,e.memory[0]),console.log("Configuring Slow RAM:",e.memory[1]),I.configure(t.OPT_SLOW_RAM,e.memory[1]),console.log("Configuring Fast RAM:",e.memory[2]),I.configure(t.OPT_FAST_RAM,e.memory[2]),console.log("Configuring drives:",e.adf.length),Ze.set(a.DF1,e.adf.length>1);for(let p=0;p<e.adf.length;p++)console.log("Inserting disk "+p+":",e.adf[p]),await $e(e.adf[p],p);console.log("Configuring warp mode: "+e.warp),Ze.set(a.WARP_MODE,e.warp),console.log("Launchine emulator..."),I.run(),e.title=="Absolute Inebriation"&&(console.log("Scheduling disk change (inebriation)"),I.setAlarmAbs(3e3,1)),e.title=="Eon"&&(console.log("Scheduling disk change (eon)"),I.setAlarmAbs(7600,2)),console.log("Done")}catch(p){throw console.log("CATCHED "+p),p}}function ur(){console.error("Exception "+I.errorCode()+": "+I.what())}async function $e(e,p){try{console.log("Fetching adf/"+e);let $t=await(await fetch("adf/"+e)).arrayBuffer(),gr=new Uint8Array($t);console.log("Calling $amiga.insertDisk",gr,p),I.insertDisk(gr,p),console.log("Disk inserted")}catch{ur()}}async function et(e){if(e==0)return G.deleteRom(),G.deleteExt(),i(rr,Fe=e,Fe),!0;try{const p=await ue.roms.get(e);return p?(p!=null&&p.rom?(G.loadRom(p.rom,p.rom.length),i(rr,Fe=e,Fe)):G.deleteRom(),p!=null&&p.ext?G.loadExt(p.ext,p.ext.length):G.deleteExt(),!0):!1}catch{return!1}}async function Ma(e){for(const p of e)if(await et(p))return!0;return!1}async function Da(e){let p=G.analyzeRom(e,e.byteLength);if(console.log("ROM analyzed: ",p),p.crc32){try{const V=p.title,$t=await ue.roms.add({crc32:p.crc32,title:p.title,version:p.version,released:p.released,model:p.model,isAros:p.isAros,isDiag:p.isDiag,isCommodore:p.isCommodore,isHyperion:p.isHyperion,isPatched:p.isPatched,isUnknown:p.isUnknown,rom:e,ext:null,extStart:0});console.log(`${V} successfully added with id ${$t}`)}catch{console.log("Failed to add Kickstart")}console.log("Opening Kickstart viewer"),i(da,vt=Ha.kickstart,vt)}}async function Ra(){await et(fa.Aros)}async function Pa(){await et(fa.DiagROM)}function Ta(){console.log("Creating proxies..."),i(la,Zt=new t.AgnusProxy,Zt),i(Sa,Qt=new t.CPUProxy,Qt),i(_a,qt=new t.DeniseProxy,qt),i(Ko,J=new t.DriveProxy(0),J),i(Bo,z=new t.DriveProxy(1),z),i(Wo,X=new t.DriveProxy(2),X),i(xo,j=new t.DriveProxy(3),j),i(oa,Ke=new t.DiskControllerProxy,Ke),i(nr,Jt=new t.EnumProxy,Jt),i(Uo,Y=new t.HardDriveProxy(0),Y),i(yo,v=new t.HardDriveProxy(1),v),i(ho,Z=new t.HardDriveProxy(2),Z),i(Lo,se=new t.HardDriveProxy(3),se),i(sr,zt=new t.JoystickProxy(1),zt),i(ar,Xt=new t.JoystickProxy(2),Xt),i(ga,jt=new t.KeyboardProxy,jt),i(ua,G=new t.MemoryProxy,G),i(ca,Yt=new t.MouseProxy(1),Yt),i(ia,Ft=new t.MouseProxy(2),Ft),i(Zo,Qe=new t.PaulaProxy,Qe),i(na,Kt=new t.RetroShellProxy,Kt),i(nt,I=new t.AmigaProxy,I),console.log("Launching the emulator..."),I.launch(),console.log("Configuring the emulator..."),I.configure(t.OPT_AGNUS_REVISION,t.AGNUS_ECS_2MB),i(sa,Bt={ArrowLeft:t.PULL_LEFT,ArrowRight:t.PULL_RIGHT,ArrowUp:t.PULL_UP,ArrowDown:t.PULL_DOWN,ControlRight:t.PRESS_FIRE,Space:t.PRESS_FIRE},Bt),i(aa,Wt={KeyS:t.PULL_LEFT,KeyD:t.PULL_RIGHT,KeyE:t.PULL_UP,KeyX:t.PULL_DOWN,KeyC:t.RELEASE_FIRE},Wt),(async()=>{console.log("Installing Roms...");const e=[3304125791,2798523958,3283989056,1062194186];t.installRoms(e),console.log("Initialization completed"),i(or,ve=!0,ve)})()}function A(){if(!ve)return;const e=Ke.getState(),p=Ke.getSelected(),V=e==t.DRIVE_DMA_WRITE;i(ra,xt=I.poweredOn(),xt),i(ta,Ht=I.isRunning(),Ht),i(Qo,qe=I.isWarping(),qe),i(ea,Vt=Ze.getNum(a.WARP_MODE),Vt),i($o,Gt=I.isTracking(),Gt),i(vo,wt=Qe.isMuted()||qe,wt),i(qo,Ut=I.isHalted(),Ut),i(tr,Be=[J.isConnected(),z.isConnected(),X.isConnected(),j.isConnected()],Be),i(Jo,yt=[J.hasDisk(),z.hasDisk(),X.hasDisk(),j.hasDisk()],yt),i(zo,ht=[J.motor(),z.motor(),X.motor(),j.motor()],ht),i(Xo,Lt=[p==0&&V,p==1&&V,p==2&&V,p==3&&V],Lt),i(jo,It=[J.hasModifiedDisk(),z.hasModifiedDisk(),X.hasModifiedDisk(),j.hasModifiedDisk()],It),i(Yo,kt=[J.hasProtectedDisk(),z.hasProtectedDisk(),X.hasProtectedDisk(),j.hasProtectedDisk()],kt),i(Fo,Nt=[J.currentCyl(),z.currentCyl(),X.currentCyl(),j.currentCyl()],Nt),i(tr,Be=[Y.isConnected(),Y.isConnected(),v.isConnected(),Z.isConnected()],Be),i(Ho,mt=[Y.isConnected(),v.isConnected(),Z.isConnected(),se.isConnected()],mt),i(Vo,bt=[Y.currentCyl(),v.currentCyl(),Z.currentCyl(),se.currentCyl()],bt),i(Go,At=[Y.isReading(),v.isReading(),Z.isReading(),se.isReading()],At),i(wo,Tt=[Y.isWriting(),v.isWriting(),Z.isWriting(),se.isWriting()],Tt)}function Aa(e){let p=e.type;switch(e.value,p){case t.MSG_NONE:i(Io,Pt++,Pt);break;case t.MSG_CONFIG:i(ko,Rt++,Rt);break;case t.MSG_POWER:i(No,Dt++,Dt),A();break;case t.MSG_RUN:i(mo,Mt++,Mt),A();break;case t.MSG_PAUSE:i(bo,Ot++,Ot),A();break;case t.MSG_STEP:i(Ao,Ct++,Ct);break;case t.MSG_RESET:i(To,Et++,Et),A();break;case t.MSG_SHUTDOWN:i(Po,pt++,pt);break;case t.MSG_ABORT:i(Ro,ft++,ft);break;case t.MSG_WARP:i(Do,dt++,dt),A();break;case t.MSG_TRACK:i(Mo,lt++,lt),A();break;case t.MSG_MUTE:i(Oo,St++,St),A();break;case t.MSG_POWER_LED_ON:i(Co,_t++,_t);break;case t.MSG_POWER_LED_DIM:i(Eo,gt++,gt);break;case t.MSG_POWER_LED_OFF:i(po,ut++,ut);break;case t.MSG_CONSOLE_CLOSE:i(fo,ct++,ct);break;case t.MSG_CONSOLE_UPDATE:i(lo,it++,it);break;case t.MSG_CONSOLE_DEBUGGER:i(So,Ne++,Ne);break;case t.MSG_SCRIPT_DONE:i(_o,c++,c);break;case t.MSG_SCRIPT_PAUSE:i(go,u++,u);break;case t.MSG_SCRIPT_ABORT:i(uo,We++,We);break;case t.MSG_SCRIPT_WAKEUP:i(co,xe++,xe);break;case t.MSG_VIDEO_FORMAT:i(io,He++,He);break;case t.MSG_OVERCLOCKING:i(no,Q++,Q);break;case t.MSG_BREAKPOINT_REACHED:i(so,Ve++,Ve);break;case t.MSG_BREAKPOINT_UPDATED:i(ao,me++,me);break;case t.MSG_WATCHPOINT_REACHED:i(oo,ae++,ae);break;case t.MSG_WATCHPOINT_UPDATED:i(ro,F++,F);break;case t.MSG_CATCHPOINT_REACHED:i(to,be++,be);break;case t.MSG_CATCHPOINT_UPDATED:i(eo,Ae++,Ae);break;case t.MSG_SWTRAP_REACHED:i($r,Te++,Te);break;case t.MSG_CPU_HALT:i(vr,Pe++,Pe),A();break;case t.MSG_COPPERBP_REACHED:i(Zr,Re++,Re);break;case t.MSG_COPPERBP_UPDATED:i(Qr,Ge++,Ge);break;case t.MSG_COPPERWP_REACHED:i(qr,K++,K);break;case t.MSG_COPPERWP_UPDATED:i(Jr,oe++,oe);break;case t.MSG_VIEWPORT:i(zr,re++,re);break;case t.MSG_MEM_LAYOUT:i(Xr,De++,De);break;case t.MSG_DRIVE_CONNECT:i(jr,q++,q),A();break;case t.MSG_DRIVE_SELECT:i(Yr,te++,te);break;case t.MSG_DRIVE_READ:i(Fr,Me++,Me);break;case t.MSG_DRIVE_WRITE:i(Kr,B++,B),A();break;case t.MSG_DRIVE_LED:i(Br,Oe++,Oe);break;case t.MSG_DRIVE_MOTOR:i(Wr,Ce++,Ce),A();break;case t.MSG_DRIVE_STEP:i(xr,Ee++,Ee),A(),N.playStepSound(e.drive.volume,e.drive.pan);break;case t.MSG_DRIVE_POLL:i(Hr,pe++,pe),A(),N.playStepSound(e.drive.volume,e.drive.pan);break;case t.MSG_DISK_INSERT:i(Vr,fe++,fe),A(),N.playInsertSound(e.drive.volume,e.drive.pan);break;case t.MSG_DISK_EJECT:i(Gr,we++,we),A(),N.playEjectSound(e.drive.volume,e.drive.pan);break;case t.MSG_DISK_PROTECTED:i(wr,W++,W),A();break;case t.MSG_HDC_CONNECT:i(Ur,de++,de),A();break;case t.MSG_HDC_STATE:i(yr,le++,le),A();break;case t.MSG_HDR_STEP:i(hr,Ue++,Ue),N.playClickSound(e.drive.volume,e.drive.pan);break;case t.MSG_HDR_READ:i(Lr,y++,y),A();break;case t.MSG_HDR_WRITE:i(Ir,h++,h),A();break;case t.MSG_HDR_IDLE:i(kr,b++,b),A();break;case t.MSG_CTRL_AMIGA_AMIGA:i(Nr,E++,E);break;case t.MSG_SHAKING:i(mr,S++,S);break;case t.MSG_SER_IN:i(br,R++,R);break;case t.MSG_SER_OUT:i(Ar,k++,k);break;case t.MSG_AUTO_SNAPSHOT_TAKEN:i(Tr,M++,M);break;case t.MSG_USER_SNAPSHOT_TAKEN:i(Pr,f++,f);break;case t.MSG_SNAPSHOT_RESTORED:i(Rr,m++,m),A();break;case t.MSG_RECORDING_STARTED:i(Dr,T++,T);break;case t.MSG_RECORDING_STOPPED:i(Mr,d++,d);break;case t.MSG_RECORDING_ABORTED:i(Or,P++,P);break;case t.MSG_DMA_DEBUG:i(Cr,O++,O),console.log("DMA_DEBUG: value = ",e.value,typeof e.value),i(Er,D=e.value,D);break;case t.MSG_SRV_STATE:i(pr,C++,C);break;case t.MSG_SRV_RECEIVE:i(fr,_++,_);break;case t.MSG_SRV_SEND:i(dr,g++,g);break;case t.MSG_ALARM:i(lr,s++,s),console.log("Alarm received: ",e.value),e.value==1&&(console.log("Inserting disk 2..."),$e("AbsoluteInebriation2.adf",0)),e.value==2&&(console.log("Inserting disk 2..."),$e("Eon2.adf",0));break}}return[Oa,ur,$e,et,Ma,Da,Ra,Pa,Ta,A]}class qa extends Le{constructor(l){super(),he(this,l,Ja,null,ye,{runShowcase:0,reportException:1,insert:2,installRom:3,installRoms:4,addRom:5,installAros:6,installDiagRom:7,onRuntimeInitialized:8,updateStateVariables:9},null,[-1,-1,-1,-1,-1])}get runShowcase(){return this.$$.ctx[0]}get reportException(){return this.$$.ctx[1]}get insert(){return this.$$.ctx[2]}get installRom(){return this.$$.ctx[3]}get installRoms(){return this.$$.ctx[4]}get addRom(){return this.$$.ctx[5]}get installAros(){return this.$$.ctx[6]}get installDiagRom(){return this.$$.ctx[7]}get onRuntimeInitialized(){return this.$$.ctx[8]}get updateStateVariables(){return this.$$.ctx[9]}}function Ca(o){let l,r,t,s,g;return{c(){l=ge("script"),r=ne("console.log('Loading vAmiga.js');"),t=at(),s=ge("script"),this.h()},l(_){l=_e(_,"SCRIPT",{});var C=Se(l);r=ie(C,"console.log('Loading vAmiga.js');"),C.forEach(L),t=st(_),s=_e(_,"SCRIPT",{src:!0});var D=Se(s);D.forEach(L),this.h()},h(){La(s.src,g="vAmiga.js")||ce(s,"src",g)},m(_,C){$(_,l,C),U(l,r),$(_,t,C),$(_,s,C)},d(_){_&&L(l),_&&L(t),_&&L(s)}}}function Qa(o){let l,r,t,s,g,_,C,D,O,P,d={};l=new Wa({props:d}),o[7](l);let T={};r=new Ka({props:T}),o[8](r);let m={};t=new Ya({props:m}),o[9](t);let f={};s=new qa({props:f}),o[10](s);let M=o[0]&&Ca();C=new za({});const k=o[6].default,R=ba(k,o,o[5],null);return{c(){Ye(l.$$.fragment),Ye(r.$$.fragment),Ye(t.$$.fragment),Ye(s.$$.fragment),M&&M.c(),g=ot(),_=at(),Ye(C.$$.fragment),D=at(),O=ge("div"),R&&R.c(),this.h()},l(S){const E=ma("svelte-1wfwfx3",document.head);je(l.$$.fragment,E),je(r.$$.fragment,E),je(t.$$.fragment,E),je(s.$$.fragment,E),M&&M.l(E),g=ot(),E.forEach(L),_=st(S),je(C.$$.fragment,S),D=st(S),O=_e(S,"DIV",{class:!0});var b=Se(O);R&&R.l(b),b.forEach(L),this.h()},h(){ce(O,"class","relative")},m(S,E){Xe(l,document.head,null),Xe(r,document.head,null),Xe(t,document.head,null),Xe(s,document.head,null),M&&M.m(document.head,null),U(document.head,g),$(S,_,E),Xe(C,S,E),$(S,D,E),$(S,O,E),R&&R.m(O,null),P=!0},p(S,[E]){const b={};l.$set(b);const h={};r.$set(h);const y={};t.$set(y);const N={};s.$set(N),S[0]?M||(M=Ca(),M.c(),M.m(g.parentNode,g)):M&&(M.d(1),M=null),R&&R.p&&(!P||E&32)&&Na(R,k,S,S[5],P?Ia(k,S[5],E,null):ka(S[5]),null)},i(S){P||(ke(l.$$.fragment,S),ke(r.$$.fragment,S),ke(t.$$.fragment,S),ke(s.$$.fragment,S),ke(C.$$.fragment,S),ke(R,S),P=!0)},o(S){Ie(l.$$.fragment,S),Ie(r.$$.fragment,S),Ie(t.$$.fragment,S),Ie(s.$$.fragment,S),Ie(C.$$.fragment,S),Ie(R,S),P=!1},d(S){o[7](null),ze(l),o[8](null),ze(r),o[9](null),ze(t),o[10](null),ze(s),M&&M.d(S),L(g),S&&L(_),ze(C,S),S&&L(D),S&&L(O),R&&R.d(S)}}}function Za(o,l,r){let t,s,g,_;n(o,ee,f=>r(1,t=f)),n(o,ir,f=>r(2,s=f)),n(o,Je,f=>r(3,g=f)),n(o,pa,f=>r(4,_=f));let{$$slots:C={},$$scope:D}=l,O=!1;cr(()=>{console.log("+layout: onMount()"),window.Module=t,r(0,O=!0)});function P(f){tt[f?"unshift":"push"](()=>{s=f,ir.set(s)})}function d(f){tt[f?"unshift":"push"](()=>{g=f,Je.set(g)})}function T(f){tt[f?"unshift":"push"](()=>{_=f,pa.set(_)})}function m(f){tt[f?"unshift":"push"](()=>{t=f,ee.set(t)})}return o.$$set=f=>{"$$scope"in f&&r(5,D=f.$$scope)},[O,t,s,g,_,D,C,P,d,T,m]}class es extends Le{constructor(l){super(),he(this,l,Za,Qa,ye,{})}}export{es as default};
