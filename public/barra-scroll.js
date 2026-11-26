// --sb = ancho real de la barra de scroll.
// Las secciones a sangre se alinean con el contenedor central usando
// calc((100vw - var(--sb) - 1440px) / 2 + pad). Hay que restar la barra
// porque 100vw la incluye y el ancho del contenido no: sin esto quedan
// 7px corridas respecto al resto de la pagina.
//
// No alcanza con medir en el <head>, en 'load' ni observando el <body>:
// en todos esos momentos React todavia no pinto y el body tiene
// height 100%, asi que no hay scroll que medir. Se mide en un intervalo
// corto durante el arranque y despues solo cuando cambia el tamaño.
(function () {
  var previo = -1;
  function set() {
    var v = window.innerWidth - document.documentElement.clientWidth;
    if (v !== previo) {
      previo = v;
      document.documentElement.style.setProperty('--sb', v + 'px');
    }
  }
  set();
  window.addEventListener('resize', set);
  var t = setInterval(set, 150);
  setTimeout(function () { clearInterval(t); set(); }, 6000);
})();
