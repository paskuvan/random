$(function(){
  //Capturar el click
  $(document).on('click','#foo',function(){
    //Arreglo con los números
    var arr = [ 'Consolida', 'Barrio Ecosustentable', 'SmartDock', 'Lifeware', 'Gold', 
    'MiMulti', 'Pato Sobreruedas'];
    //iterar las casillas
    $('.number').each(function(){
      //limpiar la casilla
      $(this).html('');
      //Sacar un índice aleatorio del arreglo
      let random = Math.floor(Math.random() * arr.length );
      //Sacamos el número que corresponda al índice
      let num = arr[ random ];
      //quitamos el índice del arreglo
       arr.splice(random, 1);

      //ponemos el número en la casilla
      $(this).append( num );
    });
  });
})
