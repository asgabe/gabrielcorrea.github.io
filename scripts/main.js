!function(e) {

  function t(r) {

    if (n[r]) return n[r].exports;
      
    var o = n[r] = {
      exports: {},
      id: r,
      loaded: !1
    };

    return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
  }

  var n = {};
  
  return t.m = e, t.c = n, t.p = "", t(0)  
}([function(e, t) {
  !function() {
    "use strict";

    var e = function() {
      var e = document.createElement("link");
      
      e.addEventListener("load", e.removeAttribute.bind(e, "media")), e.href = "styles/major.css", e.media = "none", e.rel = "stylesheet", document.head.appendChild(e)
    },
    
    t = function() {
      e()
    };
  
    document.addEventListener("DOMContentLoaded", t)
  }()
}]);