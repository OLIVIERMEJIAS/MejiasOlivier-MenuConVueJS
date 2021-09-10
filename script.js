const pag = {
    data() {
      return {
        mostrar: true,
        nombre: "Sabor Gourmet",
        parrafo: "Lorem ipsum dolor sit...",
        clicks: 0,
        cont: 0,
        mensaje: "Ver más...",
        
        
    }
    },
    methods: {
        mensajes(){
            clicks++;
            if (clicks===1){
                mensaje="Ver menos...";
                parrafo= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ullam ducimus magnam consequuntur blanditiis sint quibusdam ipsa. Quia saepe sunt vitae. Inventore quibusdam impedit placeat consequuntur rerum repellendus sed mollitia laudantium sequi, quaerat fugit, nemo ducimus, consectetur distinctio officiis ullam quidem id quae. Repellat repellendus labore amet sequi est reprehenderit quia, vel cupiditate nemo atque possimus maxime, blanditiis obcaecati eaque!";
            }else if (click===2){
                mensaje="Ver más...";
                parrafo="Lorem ipsum dolor, sit...";
                clicks=0;
            }
        },

        primerCambioPagina(){
            mostrar=false;
        }

    }
  }
  let app1= Vue.createApp(pag).mount('#pagina1');
  


const paginaAjust = {
    data() {
      return {
        url:"",
        bloquear:"abled",
        nombres:"",
        descripciones:"",
        nombres1:['Empanada Arreglada','Chalupa','Pelota','Quesadilla','Hamburguesa','Nacho'],
        descripciones1:['Deliciosa empanada con carne mechada arreglada con repollo y salsas','Deliciosa chalupa con frijoles, carne, queso amarillo y chimichurrí','Deliciosa mezcla de carne mechada, queso mozarella en pan de hamburguesa','Deliciosa quesadilla con carne, queso mozarella y queso amarillo','Deliciosa hamburguesa especial de la casa con los más frescos ingedientes','Delicioso nacho con carne mechada, queso mozarella, salsa de queso, lechuga, chimichurrí y salsas'],
        nombres2:['Papaya en Leche','Rompopé','Tamarindo','Banano y Fresa','Agua de Sapo','Piña con Arroz'],
        descripciones2:['Batido grandioso de payaya licuada con leche, avena al gusto','Rompopé con la receta de la casa, con canela y licor al gusto','Refrescante refresco helado de tamarindo con tamarindo de excelente calidad','Excelente batido helado de banano, fresa en leche','Tradicional agua de sapo, con limón dulce de tapa y jengibre de gran frescura','Receta de la abuela, delicioso batido de piña y arroz cocinados, leche al gusto'],
        nombres3:['Torta Chilena','Cupcakes de Vainilla','Pastel de Vainilla','Arroz con Leche','Tamal de Maicena','Empanadas de Chiverré'],
        descripciones3:['Torta chilena con la receta original, rellena de dulce de leche','Esponjosos cupcakes de vainilla, decorador con crema chantilli','Pastel de vainilla con relleno de crema de mantequilla y lustre de limón','Receta de la casa, con especias aromáticas y los mejores ingredientes, para esa textura que tanto gusta','Exquisito tamal de maicena, con leche o leche agría a su gusto, coco al gusto','Emapanad de chiverré hecho en casa, receta tradicional']
        
      }
    },
    methods: {
        cargarPagina(direccion){
            if (cont === 1){
                url:"comida";
                nombres=nombres1;
                descripciones=descripcion1;
                if (direccion==='derecha'){
                     cont++;
                }else{
                    cont--;
                    mostrar= true;
                }
            }else if (cont === 2){
                url:"refresco";
                nombres=nombres2;
                descripciones=descripcion2;
                if (direccion==='derecha'){
                    cont++;
               }else{
                   cont--;
               }
            }else if (cont === 3){
                url:"postre";
                nombres=nombres3;
                descripciones=descripcion3;
                if (direccion==='derecha'){
                    cont++;
               }else{
                   cont--;
               }
            }
        },

        bloquear(){
            if(cont===3){
                bloquear:"disabled";
            }else{
                bloquear:"enabled";
            }
        }

    }
    

}
  
  
let ajustable= Vue.createApp(paginaAjust).mount('#paginaAjustable');


