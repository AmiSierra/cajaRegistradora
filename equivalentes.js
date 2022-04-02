
let listaCompradepurada = [{   
  cod_articulo: 'C',          
  cantidad: 2,      
 
},
{
  cod_articulo: 'D',          
  cantidad: 5,      
  
},

{
  cod_articulo: 'B',          
  cantidad: 1,      
  
},

];


listaCompradepurada.forEach(iterador => {
  const equivalente = listaCompradepurada.find (articulo =>articulo.codigo === listaPrecios.articulo);
  if (equivalente)
  {
    return
    [...listaCompradepurada.articulo, listaPrecios.promocion];

  }
  if (listaCompradepurada.promocion === `true`)
  {
    console.log(`lo logré`);
   
  }
}



  let listaPrecios = [
  {   
    cod_articulo: 'C',          
    cantidad: 2,      
    promocion: true,

  },
  {
    cod_articulo: 'D',          
    cantidad: 5,      
    promocion: false,
  },
  
  {
    cod_articulo: 'B',          
    cantidad: 1,      
    promocion: true,
  },
  
  ];

