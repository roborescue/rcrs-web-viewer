"undefined"==typeof Worker||"undefined"!=typeof location&&"file:"===location.protocol?"undefined"!=typeof global&&"undefined"!=typeof require?this.LZMA=function(n){return require(n||"./lzma_worker-min.js").LZMA}:"undefined"!=typeof window&&window.document?function(){var a,e=this,o=function(n){var o=document.createElement("script");o.type="text/javascript",o.src=n,o.onload=function(){e.LZMA=r},document.getElementsByTagName("head")[0].appendChild(o)};function r(n){var t;return o(n),t={compress:function(n,o,e,r){a.LZMA_WORKER?a.LZMA_WORKER.compress(n,o,e,r):setTimeout(function(){t.compress(n,o,e,r)},50)},decompress:function(n,o,e){a.LZMA_WORKER?a.LZMA_WORKER.decompress(n,o,e):setTimeout(function(){t.decompress(n,o,e)},50)},lzma2_compress:function(n,o,e,r){a.LZMA_WORKER?a.LZMA_WORKER.lzma2_compress(n,o,e,r):setTimeout(function(){t.lzma2_compress(n,o,e,r)},50)},lzma2_decompress:function(n,o,e){a.LZMA_WORKER?a.LZMA_WORKER.lzma2_decompress(n,o,e):setTimeout(function(){t.lzma2_decompress(n,o,e)},50)},worker:function(){return null}}}"undefined"!=typeof window?a=window:global&&(a=global),e.LZMA=r}():console.error("Can't load the LZMA2 worker. Sorry."):this.LZMA=function(n){var i={},s=new Worker(n||"./lzma_worker-min.js");return s.onmessage=function(n){3===n.data.action?i[n.data.cbn]&&"function"==typeof i[n.data.cbn].on_progress&&i[n.data.cbn].on_progress(n.data.result):i[n.data.cbn]&&"function"==typeof i[n.data.cbn].on_finish&&(i[n.data.cbn].on_finish(n.data.result,n.data.error),delete i[n.data.cbn])},s.onerror=function(n){var o=new Error(n.message+" ("+n.filename+":"+n.lineno+")");for(var e in i)i[e].on_finish(null,o);console.error("Uncaught error in lzma_worker",o)},{compress:function(n,o,e,r){t(1,n,o,e,r)},decompress:function(n,o,e){t(2,n,!1,o,e)},lzma2_compress:function(n,o,e,r){t(4,n,o,e,r)},lzma2_decompress:function(n,o,e){t(5,n,!1,o,e)},worker:function(){return s}};function t(n,o,e,r,t){for(var a;a=Math.floor(1e7*Math.random()),void 0!==i[a];);i[a]={on_finish:r,on_progress:t},s.postMessage({action:n,cbn:a,data:o,mode:e})}};