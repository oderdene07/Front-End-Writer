if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const o=e=>c(e,r),f={module:{uri:r},exports:a,require:o};i[r]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(s(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.c107c08b.css",revision:null},{url:"css/chunk-138cff5e.0095c962.css",revision:null},{url:"css/chunk-2412c288.3c082c22.css",revision:null},{url:"css/chunk-4165ba0c.fc2bfa03.css",revision:null},{url:"css/chunk-881d4466.b78ea779.css",revision:null},{url:"css/chunk-c9b2cb4c.4c12025a.css",revision:null},{url:"css/chunk-vendors.55204a1e.css",revision:null},{url:"images/1.png",revision:"0143ebb6774335b177e520cf9eea8ae4"},{url:"images/1_dream.png",revision:"699c1ace9f74c373da6287c3777c812d"},{url:"images/50x50.png",revision:"c2718ada38785fbc72be57bf04a311a7"},{url:"img/1_dream.699c1ace.png",revision:"699c1ace9f74c373da6287c3777c812d"},{url:"img/2_performance.6bfedab5.png",revision:"6bfedab59badecf17e76e0f5c8391463"},{url:"img/3_speed.31a2cbf4.png",revision:"31a2cbf4c9bcefd115ae94c2a01ecc8e"},{url:"img/4_money.6aa7547a.png",revision:"6aa7547a4deebd50825362f8ef54a745"},{url:"img/5_productivity.3e3e119f.png",revision:"3e3e119ff2df4358ef0e4ac86506f12c"},{url:"img/6_quality.b219db48.png",revision:"b219db48900b7607aa6b2620dc66acf2"},{url:"img/7_lead.c1507ac2.png",revision:"c1507ac284c59e803deba1299efc9fdb"},{url:"img/bolorsoft.2f7c023c.png",revision:"2f7c023ce6b5ee57ea7104b4856f3905"},{url:"img/chimege_writer.d750f66e.svg",revision:"d750f66e59ec8e5115faa3f626e306dd"},{url:"img/flag_en.218f936f.png",revision:"218f936fc192343d0485baaa35fe5e18"},{url:"img/flag_mn.fc5e3cf2.png",revision:"fc5e3cf238f8ac7100052aef7367d28e"},{url:"img/home.3fc06425.png",revision:"3fc06425480854d4b142a6756394b215"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"img/logo.f6d81452.svg",revision:"f6d814526ba0eaeba0749e5ea9e87a8c"},{url:"index.html",revision:"a14c7cf2669b0cb4de95042fe0cb5ba9"},{url:"js/app.83f6c6df.js",revision:null},{url:"js/chunk-138cff5e.d871e6ba.js",revision:null},{url:"js/chunk-2412c288.0929952e.js",revision:null},{url:"js/chunk-4165ba0c.f56ded5c.js",revision:null},{url:"js/chunk-881d4466.8ee4c0ad.js",revision:null},{url:"js/chunk-c9b2cb4c.b1a31b04.js",revision:null},{url:"js/chunk-vendors.d49bf1f9.js",revision:null},{url:"manifest.json",revision:"bbbeb97ed00038bc5eb3f83daec4d78f"},{url:"precache-manifest.193c561398f90c2ce0b880e732e77e36.js",revision:"193c561398f90c2ce0b880e732e77e36"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"service-worker.js",revision:"646141a2e700afc3dd943929576df52b"}],{})}));
//# sourceMappingURL=service-worker.js.map