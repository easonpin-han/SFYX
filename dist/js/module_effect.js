"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Lunbo=void 0;var _createClass=function(){function n(o,e){for(var l=0;l<e.length;l++){var n=e[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}return function(o,e,l){return e&&n(o.prototype,e),l&&n(o,l),o}}(),_module_tool=require("./module_tool.js");function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}require("./module_index_render.js");var Lunbo=function(){function e(o){_classCallCheck(this,e),this.slide=(0,_module_tool.$)("#slide_show"),this.bannerol=(0,_module_tool.$)("#index_slide ol"),this.lunbonumli=(0,_module_tool.$)("#lunboNum li","all"),this.imgli=(0,_module_tool.$)(".slide_wrap ol li","all"),this.timer=null,this.num=0}return _createClass(e,[{key:"init",value:function(){this.numliLunbo(),this.autoLunbo()}},{key:"numliLunbo",value:function(){for(var o=this,n=this,e=function(l){o.lunbonumli[l].onmouseover=function(){for(var o=(0,_module_tool.siblingsOf)(this),e=0;e<o.length;e++)(0,_module_tool.removeClass)(o[e],"cur");(0,_module_tool.addClass)(this,"cur"),(0,_module_tool.bufferMove)(n.bannerol,{left:-1e3*l}),n.num=l},o.slide.onmouseover=function(){console.log(1),clearInterval(n.timer)},o.slide.onmouseout=function(){console.log(0),n.autoLunbo()}},l=0;l<this.lunbonumli.length;l++)e(l)}},{key:"autoLunbo",value:function(){var u=this;this.bannerol.appendChild(this.imgli[0].cloneNode(!0)),clearInterval(this.timer),this.timer=setInterval(function(){if(u.num++,u.num<=8){if(8===u.num){for(var o=(u.num=0,_module_tool.siblingsOf)(u.lunbonumli[0]),e=0;e<o.length;e++)(0,_module_tool.removeClass)(o[e],"cur");(0,_module_tool.addClass)(u.lunbonumli[0],"cur")}for(var l=(0,_module_tool.siblingsOf)(u.lunbonumli[u.num]),n=0;n<l.length;n++)(0,_module_tool.removeClass)(l[n],"cur");(0,_module_tool.addClass)(u.lunbonumli[u.num],"cur"),(0,_module_tool.bufferMove)(u.bannerol,{left:-1e3*u.num})}else u.num=0,u.bannerol.style.cssText="left:0"},2e3)}}]),e}();exports.Lunbo=Lunbo;