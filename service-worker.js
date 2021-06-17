/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "00ecdb4be7f37199e08c0fe391a8f3ce"
  },
  {
    "url": "assets/css/0.styles.63e3b23d.css",
    "revision": "79faee198f8785cca87860a78aa11d23"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "138d613c444689265f1573f06940982a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.5a167270.js",
    "revision": "ac0e0189a72ac90fc153e8dbf999d88f"
  },
  {
    "url": "assets/js/10.4e581aaa.js",
    "revision": "a3b08e01e757294f269f22eb253a7d6d"
  },
  {
    "url": "assets/js/11.7c4ed8fd.js",
    "revision": "d0bf45bfd324023141ba0605d47ce9e7"
  },
  {
    "url": "assets/js/12.1b51ef0a.js",
    "revision": "5ebfb248eec1658ef4fb40d32300ac1a"
  },
  {
    "url": "assets/js/13.50835ffd.js",
    "revision": "3e098d855dc67b9d07b6c2d2d93053e8"
  },
  {
    "url": "assets/js/14.c07cacaa.js",
    "revision": "395bd6a83e7deb5c7e6c17108a464022"
  },
  {
    "url": "assets/js/15.3b820718.js",
    "revision": "610d99dc1d640f09d537a17cb9e42ad5"
  },
  {
    "url": "assets/js/16.6cdc45dc.js",
    "revision": "b19c9913d261a058b76a765e233878bf"
  },
  {
    "url": "assets/js/17.969d0f27.js",
    "revision": "b2b38b124941ea69022221a3a2c50e08"
  },
  {
    "url": "assets/js/18.8c5b680d.js",
    "revision": "43d73ef7e3de2335467da9d038dd11c3"
  },
  {
    "url": "assets/js/19.650d18fc.js",
    "revision": "9e0d96b6deb69242aa0c5a40c01ef774"
  },
  {
    "url": "assets/js/2.209ccd48.js",
    "revision": "89809e8ec8b6f48be74fc3b64817195c"
  },
  {
    "url": "assets/js/20.5043bf31.js",
    "revision": "6d1390fcd525c4d063d5ae52595c2745"
  },
  {
    "url": "assets/js/21.b8152bfc.js",
    "revision": "fe78efb665cbf0f5b5c58e5c287e8557"
  },
  {
    "url": "assets/js/22.b4b4d382.js",
    "revision": "f5c8131ca33e613562f25c7361d5832c"
  },
  {
    "url": "assets/js/23.e436d398.js",
    "revision": "7f40794a5f166dc9bca39cdd1224c793"
  },
  {
    "url": "assets/js/24.83eb211e.js",
    "revision": "ecfad4f6b5f2e1daea2d567d5116f355"
  },
  {
    "url": "assets/js/25.f31bbeab.js",
    "revision": "c46e9c55b211bd63af57a74f3c9db5eb"
  },
  {
    "url": "assets/js/26.e2e7c0f6.js",
    "revision": "14a4045466b3152aebdbdeabdd4a4491"
  },
  {
    "url": "assets/js/4.b952c74b.js",
    "revision": "43e226ce7228c908057e0bded20091ee"
  },
  {
    "url": "assets/js/5.e24c3427.js",
    "revision": "b2d9d520cc9808ed3b621bbea59860c3"
  },
  {
    "url": "assets/js/6.9e916963.js",
    "revision": "3a7f95099f649243b687904ee6f51f4f"
  },
  {
    "url": "assets/js/7.f0e728e7.js",
    "revision": "439a50016145cc169ed8a8e0f2967651"
  },
  {
    "url": "assets/js/8.39cdb07c.js",
    "revision": "4084fca611a1ae684ba19afa061c5f90"
  },
  {
    "url": "assets/js/9.bc2dfc56.js",
    "revision": "b3fa06a9c0b9bfbcaaccac70fccf5300"
  },
  {
    "url": "assets/js/app.459d1340.js",
    "revision": "a51d27b38e625723788e5e442b2aa9b0"
  },
  {
    "url": "assets/js/MouseClickEffect.js",
    "revision": "f38d5e9040404b16eaaf08b5e953e793"
  },
  {
    "url": "blogs/baodian/high/call_apply_bind.html",
    "revision": "554bee89d71f8b87ec5a7472847bace6"
  },
  {
    "url": "blogs/baodian/high/index.html",
    "revision": "3c3b40ffc3df373f84aac66a8f9fe73c"
  },
  {
    "url": "blogs/baodian/zero/CSS_base.html",
    "revision": "a67a9ca05f445a11a73950b208fc36e0"
  },
  {
    "url": "blogs/baodian/zero/HTML_base.html",
    "revision": "3d2976875f0354b0ba13a99d9e9d233e"
  },
  {
    "url": "blogs/baodian/zero/index.html",
    "revision": "4bd135265aec94754726f4249852b929"
  },
  {
    "url": "blogs/baodian/zero/miniprogram.html",
    "revision": "6ab3418ccf0d7e10f193e38f3952f30a"
  },
  {
    "url": "blogs/notebook/2019/css/wap_pit.html",
    "revision": "945235b23564f14ab9c4801360edd285"
  },
  {
    "url": "blogs/notebook/2020/css/css3_filter.html",
    "revision": "7bab5a3de10f2d266850a811f05b0725"
  },
  {
    "url": "blogs/notebook/2020/css/css3_watermark.html",
    "revision": "5086340f77b1766102fd1635b0b6a177"
  },
  {
    "url": "blogs/notebook/2020/other/flex_img.html",
    "revision": "508a187cb675b461f056993450b9ed10"
  },
  {
    "url": "blogs/notebook/2020/vue/vue_create_err.html",
    "revision": "f6643d774d114620462b6630975a15a0"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "22d238b4256e0ffdc47630133fedaa6b"
  },
  {
    "url": "categories/index.html",
    "revision": "607a9f4ca96f2ac093fc26f9d6d1f82e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2eef4367908d579b2f04fd110c17b53a"
  },
  {
    "url": "docs/vue/vue2.x_dev_skills.html",
    "revision": "3679d22f9a149836dbe90e2187a9f3c7"
  },
  {
    "url": "index.html",
    "revision": "290654bd0180bac87ce25912cab47ac5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "81a05f1dd80fe8596c10851018ac2e15"
  },
  {
    "url": "tag/index.html",
    "revision": "aa9642bcc9be1b0853bc901d92c40dd2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0d47523d6a4b62767e9c2ca195d7d58e"
  },
  {
    "url": "tag/中级/index.html",
    "revision": "5eac8cbbbede837d444eacd15455a17b"
  },
  {
    "url": "tag/初级/index.html",
    "revision": "5c7452ca9f60e13ecbd66be4407544b9"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "ee4ab2d23bc7ff2b68466b48e444b1bc"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "4cd801cdb4cee81b0b52d2e7122b5d4e"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "95184287bbeffb19bb812c9c9a6cd906"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "d04a10e4f516cf5538cfb305ef8dd883"
  },
  {
    "url": "tag/高级/index.html",
    "revision": "ce9fd094d3e24e9026e7274bcb0197a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "b4ce589985cfe0d00d691c18f6726501"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
