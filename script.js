const pag = {
    data() {
      return {
        portada: true,
        pagina1: false,
        pagina2: false,
        pagina3: false,
        nombre: "Sabor Gourmet",
        parrafo: "Lorem ipsum dolor sit...",
        cont: 0,
        msj: "Ver más...",
        nombres:"",
        descripciones:"",
        comida:['comida1.jpeg','comida2.jpeg','comida3.jpeg','comida4.jpeg','comida5.jpeg','comida6.jpeg'],
        nombres1:['Empanada Arreglada','Chalupa','Pelota','Quesadilla','Hamburguesa','Nacho'],
        descripciones1:['Deliciosa empanada con carne mechada arreglada con repollo y salsas','Deliciosa chalupa con frijoles, carne, queso amarillo y chimichurrí','Deliciosa mezcla de carne mechada, queso mozarella en pan de hamburguesa','Deliciosa quesadilla con carne, queso mozarella y queso amarillo','Deliciosa hamburguesa especial de la casa con los más frescos ingedientes','Delicioso nacho con carne mechada, queso mozarella, salsa de queso, lechuga, chimichurrí y salsas'],
        nombres2:['Papaya en Leche','Rompopé','Tamarindo','Banano y Fresa','Agua de Sapo','Piña con Arroz'],
        descripciones2:['Batido grandioso de payaya licuada con leche, avena al gusto','Rompopé con la receta de la casa, con canela y licor al gusto','Refrescante refresco helado de tamarindo con tamarindo de excelente calidad','Excelente batido helado de banano, fresa en leche','Tradicional agua de sapo, con limón dulce de tapa y jengibre de gran frescura','Receta de la abuela, delicioso batido de piña y arroz cocinados, leche al gusto'],
        nombres3:['Torta Chilena','Cupcakes de Vainilla','Pastel de Vainilla','Arroz con Leche','Tamal de Maicena','Empanadas de Chiverré'],
        descripciones3:['Torta chilena con la receta original, rellena de dulce de leche','Esponjosos cupcakes de vainilla, decorador con crema chantilli','Pastel de vainilla con relleno de crema de mantequilla y lustre de limón','Receta de la casa, con especias aromáticas y los mejores ingredientes, para esa textura que tanto gusta','Exquisito tamal de maicena, con leche o leche agría a su gusto, coco al gusto','Emapanad de chiverré hecho en casa, receta tradicional']
        
        
        
    }
    },
    methods: {
        cambioMsj(){
            if (this.msj==="Ver más..."){
                this.msj="Ver menos...";
                this.parrafo= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ullam ducimus magnam consequuntur blanditiis sint quibusdam ipsa. Quia saepe sunt vitae. Inventore quibusdam impedit placeat consequuntur rerum repellendus sed mollitia laudantium sequi, quaerat fugit, nemo ducimus, consectetur distinctio officiis ullam quidem id quae. Repellat repellendus labore amet sequi est reprehenderit quia, vel cupiditate nemo atque possimus maxime, blanditiis obcaecati eaque!";
            }else{
                this.msj="Ver más...";
                this.parrafo="Lorem ipsum dolor, sit...";

            }
        },

        primerCambioPagina(){
            this.portada=false;
            this.pagina1= true;
        },

        cambioIzq(pagina){
            switch(pagina){
                case 1:
                    this.pagina1=false;
                    this.portada=true;
                    break;
                case 2:
                    this.pagina2=false;
                    this.pagina1=true;
                    break;
                case 3:
                    this.pagina3=false;
                    this.pagina2=true;
                    break;
            }
        },

        cambioDer(pagina){
            switch(pagina){
                case 1:
                    this.pagina1=false;
                    this.pagina2=true;
                    break;
                case 2:
                    this.pagina2=false;
                    this.pagina3=true;
                    break;
                case 3:
                    this.pagina3=false;
                    this.portada=true;
                    break;
            }
        }

    },
    
  }
  Vue.createApp(pag).mount('#menu');
  





