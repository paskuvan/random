$(function(){
  //Capturar el click
  $(document).on('click','#foo',function(){
    //Arreglo con los números
    var arr = ['Selector', 'Ala Surfing', 'TopIn', 'Biomotions', 'Leasity', 'Bluecare', 
    'TodosReciclamos', 'Mudblock', 'NoFreeze', 'Cuidar', 'Piromax', 'ByPala', 
    'Cuidadores.cl'];
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
