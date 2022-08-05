import React, { Component } from "react";
import Cabecera from "./components/Cabecera";
import ProductCard from "./components/ProductCard";
import InfoProducto from "./components/InfoProducto";
import Carrito from "./components/Carrito";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.key = 0;
    this.state = {
      abrioProducto: false,
      verCarrito: false,
      dataInfoProducto: {
        index: 0,
        title: "",
        pais: "",
        count: 0,
        valorU: 0,
        info: ""
      },
      productosCarrito: [],
      numCarritoAdd: 0,
      dulcesLeche: [{
        pais: "Argentina",
        marca: {
          title: "Sancor",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/sancorok.jpg",
          count: 17,
          valorU: 5200,
          info: `Hoy la calidad claramente no es la misma: tono marrón clarito, aroma escaso, textura blanda, resulta igualmente ligero en la boca, 
          incluso menos dulce de lo esperado, sin mayores sorpresas. Es admisible, no vayan a creer, pero tiene menos gracia que el jueves, como dirían en España.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "Manfrey",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/manfreyok-1.jpg",
          count: 22,
          valorU: 4200,
          info: `Ya el color, más claro que el resto, anticipa que no vamos a vivir lo que se dice una montaña rusa de emociones en el paladar. 
          Esto lo confirman su consistencia (suave), su aroma (tenue, con algún chispazo de vainilla) y su sabor, que dura poco en la boca. El conjunto 
          es como un partido promedio del Nacional B: pasable, pero no da para el recuerdo.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "Armonia",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/armoniaok.jpg",
          count: 28,
          valorU: 4995,
          info: `Muestra un aroma vainillesco que tarda en aparecer, sabor levemente ácido y una textura que resulta igualmente tímida en la boca y hace recordar a Palito Ortega cantando “¿para cuándo, joven?”. 
          Buenas intenciones aunque le faltan cinco pa´l peso.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "Coto",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/cotook.jpg",
          count: 12,
          valorU: 3910,
          info: `Exhibiendo una consistencia aceptable, aroma más marcado a vainilla (hay incluso alguna llamativa notita de avellanas) y mayor permanencia en boca, 
          muestra incluso un toque de miel en el retrogusto que llama la atención. No obstante, si bien aceptable, el conjunto no parece estar para las grandes ligas y quizá no justifique su precio, más bien alto.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "Vacalin",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/vacalinok.jpg",
          count: 50,
          valorU: 3615,
          info: `Con un bonito envase que recuerda al cuero de la vaca, su aspecto es más oscuro y su consistencia más estructurada. Podríamos pensar en un dulce de sabor más marcado, pero su aroma es leve, su textura 
          untuosa y su recuerdo, breve. Amaga estar para más pero se limita a cumplir, como tanto empleado público.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "La Serenisima",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/la-serenisima-cla%CC%81sico-ok.jpg",
          count: 37,
          valorU: 4315,
          info: `Llama la atención tanto lo corredizo de su consistencia (parece derretirse en el plato), como la intensidad de su color; en la boca se desplaza con facilidad y presenta una acidez marcada pero no desagradable.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "Milkaut",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/milkautok1.jpg",
          count: 22,
          valorU: 3005,
          info: `Color marrón más claro, con reflejos teja, casi naranjas, convincente consistencia, aroma definido a vainilla con notas de leche y chocolate, resulta más suave de lo previsto en boca y tiene un retrogusto –perceptible pero de difícil identificación– que no convence del todo.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "El Puente Tradicional",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/elpuenteok.jpg",
          count: 32,
          valorU: 3205,
          info: `Color intermedio y aroma suave, vainilloso sin caer en exageraciones (como sí lo hace su colega repostero). En el debe, el sabor no dura mucho en boca; con todo, resulta agradable en el balance y cumple.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "San Ignacio",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/san-ignaciook.jpg",
          count: 34,
          valorU: 5205,
          info: `Consistencia musculosa, tono marrón oscuro con breves destellos anaranjados: su aspecto promete redondez y estructura, y cumple. El aroma se percibe sin problemas, mostrando notas a chocolate blanco, leche y vainilla que invitan a probarlo. 
          En boca tampoco defrauda: bien dulce, bien untuoso, eficaz. Convence.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "La serenisima Colonial",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/dulce-de-leche-colonialok.jpg",
          count: 227,
          valorU: 3105,
          info: `Su consistencia no parece sólida pero las apariencias engañan: lo es, al igual que su aspecto y su aroma, no tan potente como podría esperarse. El resto es pura felicidad: agradable textura en su paso por boca, con una acidez presente pero muy bien 
          equilibrada (a diferencia de su colega Clásico) que vuelve distintivo y placentero su sabor. Deja un lindo recuerdo y dan ganas de ir por más.`
        }
      }, {
        pais: "Argentina",
        marca: {
          title: "La serenisima Tradicional Argentina",
          backgroundImage: "https://vinomanos.com/wp-content/uploads/2020/10/DDDLtrad_1000ok.jpg",
          count: 87,
          valorU: 5800,
          info: `Impacta con el conjunto de su consistencia, su aroma elegante (el chocolate con leche dice presente, al igual que la infaltable vainilla e incluso algún dejo pasajero a café), su untuosidad, su notable retrogusto, todo logrando un balance convincente. 
          Es más bien tirando a caro, pero justifica el precio y contentará a los paladares más exigentes.`
        }
      }]
    }
  }

  abrirCarrito(si) {
    if (si) {
      return <Carrito data={this.state.productosCarrito} 
              onClick={{cancelar: () => this.cancelarCompra(this),
              efectuarPago: (fun) => this.efectuarPago(this, fun),
              operar: (id) => this.closeProducto(this, id),
              ver: (id) => this.verProducto(this, id) }} />
    } else {
      return (
        <div id="gridProductsCards">
          {
            this.state.dulcesLeche.map((d, i) => {
              this.key++;
              return <ProductCard onClick={(i) => this.verProducto(this, i)} 
              data={d.marca} key={this.key + ""} iden={{pais: d.pais, index: i}} />
            })
          }
        </div>
      );
    }
  }
  verCarrito(t) {
    t.setState({
      verCarrito: true
    });
  }
  closeCarrito(t) {
    t.setState({
      verCarrito: false
    });
  }

  cancelarCompra(t){
    if(t.state.numCarritoAdd != 0){
      let pre = confirm("¿Desea cancelar su compra?");
      if(pre){
        t.state.productosCarrito.forEach(ele => {
          for(let i = 0; i < ele.take; i++){
            t.state.dulcesLeche[ele.id].marca.count += 1;
          }
        });

        t.setState({
          productosCarrito: [],
          numCarritoAdd: 0,
          dulcesLeche: t.state.dulcesLeche,
          verCarrito: false,
          verProducto: false
        });
      }
    }
  }
  efectuarPago(t, fun){
    let camposLlenos = true;
    document.querySelectorAll(".campoForm").forEach(camp => {
      if(camp.value.trim() == "") camposLlenos = false;
    });
    if(!camposLlenos) alert("Debes llenar todos los campos");
    else{
      let pre = confirm("¿Desea continuar con el pago?");
      if(pre){
        t.setState({
          productosCarrito: [],
          numCarritoAdd: 0,
          abrioProducto: false,
          verCarrito: false
        });
        fun(true);
      }
    }
  }

  abrioProducto(si) {
    let a1 = document.querySelector("#cortinaIfoProduct");
    let a2 = document.querySelector("#contenido");
    if (a1 && a2) {
      if (si) {
        document.querySelector("#cortinaIfoProduct").style.display = "block";
        document.querySelector("#cortinaIfoProduct").style.animation = "abrirCortina .8s forwards";
        setTimeout(() => {
          document.querySelector("#contenido").style.display = "flex";
        }, 800);
      } else {
        document.querySelector("#cortinaIfoProduct").style.display = "none";
        document.querySelector("#contenido").style.display = "none";
      }
    }
  }
  verProducto(t, i) {
    t.setState({
      abrioProducto: true,
      dataInfoProducto: {
        index: i,
        title: this.state.dulcesLeche[i].marca.title,
        pais: this.state.dulcesLeche[i].pais,
        count: this.state.dulcesLeche[i].marca.count,
        valorU: this.state.dulcesLeche[i].marca.valorU,
        info: this.state.dulcesLeche[i].marca.info,
      }
    });
  }
  closeProducto(t, anadido) {
    if(anadido.index || anadido.index == 0){
      if(t.state.dulcesLeche[anadido.index].marca.count == 0) alert("Este producto se ha acabado");
      else{
        t.state.dulcesLeche[anadido.index].marca.count -= 1;
        t.state.dataInfoProducto.count -= 1;
        let yasTA = false, ix;
        op: {
          for(let i in t.state.productosCarrito){
            if(t.state.productosCarrito[i].title == t.state.dulcesLeche[anadido.index].marca.title){
              yasTA = true;
              ix = i;
              break op;
            }
          }
        }
        if(yasTA){
          t.state.productosCarrito[ix].count -= 1;
          t.state.productosCarrito[ix].take += 1;
          t.state.productosCarrito[ix].total += t.state.dulcesLeche[anadido.index].marca.valorU;
        }else if(t.state.productosCarrito.length != 0){
          t.state.productosCarrito.push({
            id: anadido.index,
            title: t.state.dulcesLeche[anadido.index].marca.title,
            count: t.state.dulcesLeche[anadido.index].marca.count,
            take: 1,
            total: t.state.dulcesLeche[anadido.index].marca.valorU,
            valorU: t.state.dulcesLeche[anadido.index].marca.valorU
          });
        }else {
          t.state.productosCarrito = [{
            id: anadido.index,
            title: t.state.dulcesLeche[anadido.index].marca.title,
            count: t.state.dulcesLeche[anadido.index].marca.count,
            take: 1,
            total: t.state.dulcesLeche[anadido.index].marca.valorU,
            valorU: t.state.dulcesLeche[anadido.index].marca.valorU
          }];
        }
        t.setState({
          dulcesLeche: t.state.dulcesLeche,
          dataInfoProducto: t.state.dataInfoProducto,
          productosCarrito: t.state.productosCarrito,
          numCarritoAdd: (t.state.numCarritoAdd + 1)
        });
      }
    }else if(anadido.quitarUno){
      if(anadido.quitarUno.quitarMarca){
        t.state.dulcesLeche[anadido.quitarUno.index].marca.count += t.state.productosCarrito[anadido.quitarUno.ix].take;
        t.state.dataInfoProducto.count += t.state.productosCarrito[anadido.quitarUno.ix].take;
        t.state.numCarritoAdd -= t.state.productosCarrito[anadido.quitarUno.ix].take;
        
        t.state.productosCarrito.splice(anadido.quitarUno.ix, 1);
        t.setState({
          dulcesLeche: t.state.dulcesLeche,
          dataInfoProducto: t.state.dataInfoProducto,
          productosCarrito: t.state.productosCarrito,
          numCarritoAdd: t.state.numCarritoAdd
        });
      }else {
        if(t.state.productosCarrito[anadido.quitarUno.ix].take == 0) alert("Ya has vaciado todos los productos");
        else{
          t.state.dulcesLeche[anadido.quitarUno.index].marca.count += 1;
          t.state.dataInfoProducto.count += 1;
          
          t.state.productosCarrito[anadido.quitarUno.ix].count += 1;
          t.state.productosCarrito[anadido.quitarUno.ix].take -= 1;
          t.state.productosCarrito[anadido.quitarUno.ix].total -= t.state.dulcesLeche[anadido.quitarUno.index].marca.valorU;
    
          t.setState({
            dulcesLeche: t.state.dulcesLeche,
            dataInfoProducto: t.state.dataInfoProducto,
            productosCarrito: t.state.productosCarrito,
            numCarritoAdd: (t.state.numCarritoAdd - 1)
          });
        }
      }
    }else{
      t.setState({
        abrioProducto: false
      });
    }
  }

  render() {
    return (
      <div id="appDiv">
        <Cabecera onClick={{ home: () => this.closeCarrito(this), carrito: () => this.verCarrito(this) }} 
                  count={this.state.numCarritoAdd} />
        <InfoProducto onClick={(anadido) => this.closeProducto(this, anadido)} data={this.state.dataInfoProducto} />
        {this.abrirCarrito(this.state.verCarrito)}
        {this.abrioProducto(this.state.abrioProducto)}
      </div>
    );
  }
}

export default App;