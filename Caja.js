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

var parcialProm = 0;
var listaPrecios = [];

var subtotalProm = 0;

var listaCompra = [];

var subtotalNormal = 0;
var subtotalResiduo = 0;
var total = 0;
listaPrecios.push(new Articulo(`A`,1,10,true,2,15));
listaPrecios.push(new Articulo(`B`,1,20,true,3,50));
listaPrecios.push(new Articulo(`C`,1,15,true,2,25));
listaPrecios.push(new Articulo(`D`,1,20,false, undefined,undefined));
let b = document.getElementById("ingresar");
b.addEventListener("click", ingresarArticulos);

let j = document.getElementById("total");
j.addEventListener("click", totalizar);

   function ingresarArticulos()
   {
         onsubmit = "return ingresarArticulos()" 

     
      

        let codigo = document.getElementById("codigo").value;
        let c = document.getElementById("cantidad");
        let cantidad = parseInt(c.value);
        
       
    
    
        listaCompra.push(new Articulo(codigo,cantidad));

        document.getElementById("codigo").value=""    
        document.getElementById("cantidad").value=""  
       
        //console.log(listaCompra);

   }

      
       

function totalizar()
{
     
  const listaCompradepurada = listaCompra.reduce((iterador, valorActual) =>
  {
    const artRepetido = iterador.find(articulo => articulo.codigo === valorActual.codigo);
    
    if (artRepetido) {
      return iterador.map((articulo) => {
        if (articulo.codigo === valorActual.codigo) {
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
  

    
   listaCompradepurada.forEach(iterador => 
    {
  
      let equivalente = listaPrecios.find (element =>element.codigo === iterador.codigo)
      {
          if (equivalente!= undefined && equivalente.promocion === true)
          {
          
                    
            parcialProm = parseInt(iterador.cantidad / equivalente.cantPromocion);
            console.log(parcialProm);
            subtotalProm = (parcialProm * equivalente.precioPromocion);
            console.log (subtotalProm); 
          
                 
    
            if (iterador.cantidad % equivalente.cantPromocion != 0)
            {
              subtotalResiduo = iterador.cantidad % equivalente.cantPromocion * equivalente.precioUnitario;
              console.log(subtotalResiduo);
            }
              totalProm = subtotalProm + subtotalResiduo;
              console.log(totalProm);
              totalProm.innerHTML += (`${iterador.Articulo} ${totalProm}<br>`);
              console.log("hola");
          }
          else
          {
            
            subtotalNormal = iterador.cantidad * equivalente.precioUnitario;
            
            totalNormal.innerHTML += (`${iterador.Articulo} ${totalNormal}<br>`); 
          } 
          total = subtotalProm + subtotalResiduo + subtotalNormal;
          total.innerHTML += (`El total para esta compra es € ${total}<br>`);
          console.log(total);
      }   
      
    });            
} 
  
