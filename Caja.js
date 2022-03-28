class Articulo
{
constructor(co,c,pu,pr,cp,pp)
  {
    this.codigo = co;
    this.cantidad = c;
    this.precioUnitario = pu;
    this.promocion = pr;
    this.cantPromocion = cp;
    this.precioPromocion = pp;
    
  }
}


   function ingresarArticulos()
   {
         /*onsubmit = "return ingresarArticulos()" */

     
      

        let codigo = document.getElementById("codigo").value;
    

        let c = document.getElementById("cantidad");
        let cantidad = parseInt(c.value);
    
    
        listaCompra.push(new Articulo(codigo,cantidad));

        document.getElementById("codigo").value=""    //ojo, esto no lo he puesto en github
        document.getElementById("cantidad").value=""  //no lo he puesto en github
       
        console.log(listaCompra);


      
        
   } 
      
    

   function totalizar()
   {
     
  const listaCompradepurada = listaCompra.reduce((iterador, valorActual) => {
    const artRepetido = iterador.find(articulo => articulo.cod_articulo === valorActual.cod_articulo);
    
    if (artRepetido) {
      return iterador.map((articulo) => {
        if (articulo.cod_articulo === valorActual.cod_articulo) {
          return {
            ...articulo,
            cantidad: articulo.cantidad + valorActual.cantidad
          }
        }
    
        return articulo;
      });
    }
    
    return [...iterador, valorActual];
    }, []); 
    
   
    console.log(listaCompradepurada);
  }
  
    
             
           
              


let listaPrecios = [];
let listaCompra = [];
listaPrecios.push(new Articulo(`A`,1,10,true,2,15));
listaPrecios.push(new Articulo(`B`,1,20,true,3,50));
listaPrecios.push(new Articulo(`C`,1,15,true,2,25));
listaPrecios.push(new Articulo(`D`,1,20,false, undefined,undefined));

let b = document.getElementById("ingresar");
b.addEventListener("click", ingresarArticulos);



let j = document.getElementById("total");
j.addEventListener("click", totalizar);







