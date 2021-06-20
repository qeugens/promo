$(document).ready(function(){
  $('.checkbox').click(function(){
    $(this).toggleClass('active')
    $('.plan').toggleClass('inner')
  })
  let zones;
  $('.zones').mouseover(function(){
    zones = '.' + $(this).attr('data-index')
    console.log(zones)
    $('.tablo_content').removeClass("info")
    $(zones).addClass('info')
  })
  document.getElementById('ready').onclick = function() {
  document.getElementById('ready').innerHTML = 'Готово';
  }
  const pickr = new Pickr({
      el: '.color-picker',
      theme: 'monolith',
      container: '.picker',
      swatches: null,
      showAlways: true,
      appClass: 'custom-picker',

      components: {
          // Main components
          preview: true,
          opacity: false,
          hue: true,
          // Input / output Options
          interaction: {
              hex: false,
              rgba: false,
              hsla: false,
              hsva: false,
              cmyk: false,
              input: true,
              clear: false,
              save: false
          }
      }
  });


});
