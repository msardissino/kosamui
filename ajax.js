// alert("Funcion!");
$(document).ready(function(){
  $('.caja1').on('click','button.switchSpray', function(){
    $.ajax('resultado.html', {
        beforeSend: function(){
          $('.loader').text('load.gif');
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
          $('.loader').text('load.gif');
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
          $('.loader').text('load.gif');
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
// async function getData(url){
//   const respuesta = await fetch(url);
//   // cuando termine se ejecuta lo que sigue
//   const data = await respuesta.json()
//   return data;
// }



`<div class="container producto-final">
<div class="row">
  <div class="col-12 col-sm-3 col-md-4 img-producto-final" style="display: flex; justify-content: center; align-items: center; width: 100%;">
    <img src="png/spray-ffr" alt="Bamboo">
  </div>
  <div class="col-12 col-sm-9 col-md-8 descripcion-producto-final">
    <h3> - Bamboo - </h3>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia quae iusto nulla minima, consequuntur illo soluta eum accusamus autem?</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <hr>
    <h6>Otras Fragancias disponibles</h6>
    <ul>
      <li><span class="icon-double-right"></span>Bebé</li>
      <li><span class="icon-double-right"></span> Naranja + Sandalo</li>
      <li><span class="icon-double-right"></span>Citrus Verbena</li>
      <li><span class="icon-double-right"></span>Mix de flores blancas</li>
      <li><span class="icon-double-right"></span>Vainilla Tropical</li>
      <li><span class="icon-double-right"></span>Pomelo + Sandía</li>
    </ul>
    <hr>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestiae nostrum quo est velit exercitationem.</p>
  </div>
</div>

</div>`