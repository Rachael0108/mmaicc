!(function (n) {
  var e = n.document,
    t = e.documentElement,
    i = 750,
    d = i / 100,
    o = "orientationchange" in n ? "orientationchange" : "resize",
    a = function () {
      var n = t.clientWidth || 320;
      if (n <= 750) {
        t.style.fontSize = n / d + "px";
        e.body.style.fontSize = "13px";
      }
    };
  e.addEventListener &&
    (n.addEventListener(o, a, !1),
    e.addEventListener("DOMContentLoaded", a, !1));
})(window);
