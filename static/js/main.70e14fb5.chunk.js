(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{259:function(t,e){},268:function(t,e){},286:function(t,e){},288:function(t,e){},307:function(t,e){},308:function(t,e){},370:function(t,e){},372:function(t,e){},405:function(t,e){},407:function(t,e){},408:function(t,e){},413:function(t,e){},415:function(t,e){},421:function(t,e){},423:function(t,e){},436:function(t,e){},448:function(t,e){},451:function(t,e){},456:function(t,e){},464:function(t,e){},472:function(t,e){},474:function(t,e){},574:function(t,e,n){},575:function(t,e,n){"use strict";n.r(e);var c,o,a,r,i,s,l,u,d,x,p,b,h,j,g,f,m=n(1),O=n(94),y=n.n(O),A=n(18),C=n.n(A),v=n(46),S=n(64),w=n(15),T=n(63),N=n(76),E=n.n(N),M=n(233),_=n.n(M),k=n(77),P=n(234),D=n(21),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},I),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},t),{},{account:e.payload.account});default:return t}},R={loading:!1,totalSupply:-1,cost:0,maxMintAmountPerTx:0,maxMintAmountPerAddress:0,paused:!0,onlyWhitelisted:!0,minted:0,error:!1,errorMsg:""},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,cost:e.payload.cost,maxMintAmountPerTx:e.payload.maxMintAmountPerTx,maxMintAmountPerAddress:e.payload.maxMintAmountPerAddress,paused:e.payload.paused,onlyWhitelisted:e.payload.onlyWhitelisted,minted:e.payload.minted,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},R),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},F=Object(k.b)({blockchain:L,data:W}),K=[P.a],U=Object(k.c)(k.a.apply(void 0,K)),Y=Object(k.d)(F,U),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},H=function(){return function(){var t=Object(v.a)(C.a.mark((function t(e){var n,c,o,a,r,i,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return n=t.sent,t.next=7,Y.getState().blockchain.smartContract.methods.getCost().call();case 7:return c=t.sent,t.next=10,Y.getState().blockchain.smartContract.methods.getMaxMintAmountPerTx().call();case 10:return o=t.sent,t.next=13,Y.getState().blockchain.smartContract.methods.getMaxMintAmountPerAddress().call();case 13:return a=t.sent,t.next=16,Y.getState().blockchain.smartContract.methods.getPaused().call();case 16:return r=t.sent,t.next=19,Y.getState().blockchain.smartContract.methods.getOnlyWhitelisted().call();case 19:return i=t.sent,t.next=22,Y.getState().blockchain.smartContract.methods.numberMinted(Y.getState().blockchain.account).call();case 22:s=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n,cost:c,maxMintAmountPerTx:o,maxMintAmountPerAddress:a,paused:r,onlyWhitelisted:i,minted:s}}),t.next=30;break;case 26:t.prev=26,t.t0=t.catch(1),console.log(t.t0),e(z("Could not load data from contract."));case 30:case"end":return t.stop()}}),t,null,[[1,26]])})));return function(e){return t.apply(this,arguments)}}()},B=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var e=Object(v.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(H());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=n(16),q=Q.a.div(c||(c=Object(w.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),X=Q.a.div(o||(o=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(r||(r=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),tt=Q.a.p(l||(l=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),et=(Q.a.p(u||(u=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),nt=(Q.a.div(x||(x=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(3)),ct=n(544).MerkleTree,ot=n(573),at=Q.a.button(p||(p=Object(w.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.button(b||(b=Object(w.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),it=Q.a.div(h||(h=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),st=Q.a.img(j||(j=Object(w.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),lt=Q.a.img(g||(g=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ut=Q.a.a(f||(f=Object(w.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dt=function(){var t,e,n=Object(T.b)(),c=Object(T.c)((function(t){return t.blockchain})),o=Object(T.c)((function(t){return t.data})),a=Object(m.useState)(!1),r=Object(S.a)(a,2),i=r[0],s=r[1],l=Object(m.useState)("Click to mint your NFT."),u=Object(S.a)(l,2),d=u[0],x=u[1],p=Object(m.useState)(0),b=Object(S.a)(p,2),h=b[0],j=b[1],g=Object(m.useState)("visible"),f=Object(S.a)(g,2),O=f[0],y=f[1],A=Object(m.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),w=Object(S.a)(A,2),N=w[0],M=w[1],k=["0xf4ca3774096d639A7bBaaf5DFf3604428704F9f6","0xd61D548CC43D17D894d84f117Eb61C07e60d7e24"].map((function(t){return ot(t)})),P=new ct(k,ot,{sortPairs:!0}),D=(P.getRoot(),function(){L(),h>0&&(o.onlyWhitelisted?function(){var t=N.WEI_COST,e=N.GAS_LIMIT,o=String(t*h),a=String(1*e);console.log("Cost: ",o),console.log("Gas limit: ",a),x("Minting your ".concat(N.NFT_NAME,"...")),s(!0);var r=ot(c.account),i=P.getHexProof(r);c.smartContract.methods.mintWhitelist(i,h).send({gasLimit:String(a),to:N.CONTRACT_ADDRESS,from:c.account,value:o}).once("error",(function(t){console.log(t),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),x("WOW, the ".concat(N.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(H(c.account))}))}():I())}),I=function(){var t=N.WEI_COST,e=N.GAS_LIMIT,o=String(t*h),a=String(1*e);console.log("Cost: ",o),console.log("Gas limit: ",a),x("Minting your ".concat(N.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(h).send({gasLimit:String(a),to:N.CONTRACT_ADDRESS,from:c.account,value:o}).once("error",(function(t){console.log(t),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),x("WOW, the ".concat(N.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(H(c.account))}))},L=function(){Number(o.maxMintAmountPerAddress)-Number(o.minted)<=0&&Number(o.maxMintAmountPerAddress)>0?(x("You've reached the maximum number of mints allowed."),j(0),y("hidden")):(x("Click to mint your NFT."),y("visible"))},R=function(){""!==c.account&&null!==c.smartContract&&n(H(c.account))},W=function(){var t=Object(v.a)(C.a.mark((function t(){var e,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,M(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.useEffect)((function(){W()}),[]),Object(m.useEffect)((function(){R()}),[c.account]),Object(m.useEffect)((function(){L()}),[o.minted,o.maxMintAmountPerAddress]),Object(nt.jsx)(q,{children:Object(nt.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:N.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(nt.jsx)("a",{href:"https://coolcookiesnft.com",children:Object(nt.jsx)(st,{alt:"logo",src:"/config/images/logo.png",onMouseOver:function(t){t.currentTarget.src="/config/images/logo-black.png"},onMouseOut:function(t){t.currentTarget.src="/config/images/logo.png"}})}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(it,{flex:1,style:{padding:24},test:!0,children:[Object(nt.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)("a",{href:"https://coolcookiesnft.com",children:Object(nt.jsx)(lt,{alt:"example",src:"/config/images/example.gif"})})}),Object(nt.jsx)(Z,{}),Object(nt.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[Number(o.totalSupply)>=0?o.totalSupply:"?"," / ",N.MAX_SUPPLY]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(nt.jsx)(ut,{target:"_blank",href:N.SCAN_LINK,children:(t=N.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(nt.jsx)(J,{}),Number(o.totalSupply)>=N.MAX_SUPPLY?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",N.NFT_NAME," on"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(ut,{target:"_blank",href:N.MARKETPLACE_LINK,children:N.MARKETPLACE})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",N.SYMBOL," costs ",N.DISPLAY_COST," ",N.NETWORK.SYMBOL,"."]}),Object(nt.jsx)(X,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(nt.jsx)(J,{}),""===c.account||null===c.smartContract?Object(nt.jsxs)($,{ai:"center",jc:"center",children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",N.NETWORK.NAME," network"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(at,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(v.a)(C.a.mark((function t(e){var n,c,o,a,r,i,s,l,u;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=t.sent,t.next=12,o.json();case 12:if(a=t.sent,r=window,!(i=r.ethereum)||!i.isMetaMask){t.next=33;break}return E.a.setProvider(i),s=new _.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(u=new E.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){e(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(B("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(B("Something went wrong."));case 31:t.next=34;break;case 33:e(B("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),R()},children:"CONNECT"}),""!==c.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(nt.jsx)(V,{}),Object(nt.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(nt.jsx)(rt,{style:{lineHeight:.4,visibility:O},disabled:o.paused||i?1:0,onClick:function(t){t.preventDefault(),function(){var t=h-1;t<0&&(t=0),j(t),L()}()},children:"-"}),Object(nt.jsx)(V,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)",visibility:O},children:h}),Object(nt.jsx)(V,{}),Object(nt.jsx)(rt,{style:{lineHeight:.4,visibility:O},disabled:o.paused||i?1:0,onClick:function(t){t.preventDefault(),function(){var t=Number(o.maxMintAmountPerAddress)-Number(o.minted),e=h+1;t>=Number(o.maxMintAmountPerTx)||0==Number(o.maxMintAmountPerAddress)?e>Number(o.maxMintAmountPerTx)&&(e=Number(o.maxMintAmountPerTx)):e>t&&(e=t),j(e),L()}()},children:"+"})]}),Object(nt.jsx)(J,{}),Object(nt.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(nt.jsx)(at,{disabled:0==h||o.paused||i?1:0,onClick:function(t){t.preventDefault(),D(),R()},hidden:"hidden"==O?1:0,children:o.paused?"PAUSED":i?"BUSY":o.onlyWhitelisted?"PRESALE MINT":"MINT"})})]})]}),Object(nt.jsx)(V,{})]}),Object(nt.jsx)(Z,{}),Object(nt.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)("a",{href:"https://coolcookiesnft.com",children:Object(nt.jsx)(lt,{alt:"example",src:"/config/images/example.gif"})})})]}),Object(nt.jsx)(V,{}),Object(nt.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",N.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",N.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,579)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};n(574);y.a.render(Object(nt.jsx)(T.a,{store:Y,children:Object(nt.jsx)(dt,{})}),document.getElementById("root")),xt()}},[[575,1,2]]]);
//# sourceMappingURL=main.70e14fb5.chunk.js.map