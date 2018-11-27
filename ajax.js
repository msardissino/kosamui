// alert("Funcion!");
$(document).ready(function(){
  $('.caja1').on('click','button.switchSpray', function(){
    $.ajax('resultado.html', {
        beforeSend: function(){
          $('.loader').text('Cargando...');
        }
    })
    .done(function(respuesta){
        $('.caja2').html(respuesta);
      })
    .always(function(){
      $('.loader').text('Finalizo la Carga.');
    });
      
  });
  $('.caja1').on('click','button.switchDifu', function(){
    $.ajax('resultado2.html', {
        beforeSend: function(){
          $('.loader').text('Cargando...');
        }
    })
    .done(function(respuesta){
        $('.caja2').html(respuesta);
      })
    .always(function(){
      $('.loader').text('Finalizo la Carga.');
    });
      
  });
  $('.caja1').on('click','button.switchFresh', function(){
    $.ajax('resultado3.html', {
        beforeSend: function(){
          $('.loader').text('Cargando...');
        }
    })
    .done(function(respuesta){
        $('.caja2').html(respuesta);
      })
    .always(function(){
      $('.loader').text('Finalizo la Carga.');
    });
      
  });

});