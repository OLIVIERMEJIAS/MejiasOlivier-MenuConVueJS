const pag = {
    data() {
      return {
        portada: true,
        pagina1: false,
        pagina2: false,
        pagina3: false,
        itemGrande: "",
        nombre: "Sabor Gourmet",
        msj: "Ver más...",
        nom:"",
        descripcion:"",
        parrafo:"",
        linea:"",
        imagen:"",
        nombres1:['Empanada Arreglada','Chalupa','Pelota','Quesadilla','Hamburguesa','Nacho'],
        descripciones1:['Deliciosa empanada con carne mechada arreglada con repollo y salsas','Deliciosa chalupa con frijoles, carne, queso amarillo y chimichurrí','Deliciosa mezcla de carne mechada, queso mozarella en pan de hamburguesa','Deliciosa quesadilla con carne, queso mozarella y queso amarillo','Deliciosa hamburguesa especial de la casa con los más frescos ingedientes','Delicioso nacho con carne mechada, queso mozarella, salsa de queso, lechuga, chimichurrí y salsas'],
        nombres2:['Papaya en Leche','Rompopé','Tamarindo','Banano y Fresa','Agua de Sapo','Piña con Arroz'],
        descripciones2:['Batido grandioso de payaya licuada con leche, avena al gusto','Rompopé con la receta de la casa, con canela y licor al gusto','Refrescante refresco helado de tamarindo con tamarindo de excelente calidad','Excelente batido helado de banano, fresa en leche','Tradicional agua de sapo, con limón dulce de tapa y jengibre de gran frescura','Receta de la abuela, delicioso batido de piña y arroz cocinados, leche al gusto'],
        nombres3:['Torta Chilena','Cupcakes de Vainilla','Pastel de Vainilla','Arroz con Leche','Tamal de Maicena','Empanadas de Chiverré'],
        descripciones3:['Torta chilena con la receta original, rellena de dulce de leche','Esponjosos cupcakes de vainilla, decorador con crema chantilli','Pastel de vainilla con relleno de crema de mantequilla y lustre de limón','Receta de la casa, con especias aromáticas y los mejores ingredientes, para esa textura que tanto gusta','Exquisito tamal de maicena, con leche o leche agría a su gusto, coco al gusto','Emapanadas de chiverré, miel hecha en casa, receta tradicional']
     }
    },
    methods: {
        cambioMsj(){
            parrafo = document.getElementById("portada__parrafo");
            linea = document.getElementById("portada__linea");
            if (this.msj==="Ver más..."){
                this.msj="Ver menos...";
                parrafo.setAttribute("class","portada__parrafo portada__parrafo--mostrar");
                linea.setAttribute("class","portada__linea portada__linea--ocultar");
            }else{
                this.msj="Ver más...";
                this.parrafo="Lorem ipsum dolor, sit...";
                parrafo.setAttribute("class","portada__parrafo");
                linea.setAttribute("class","portada__linea");
            }
        },
        primerCambioPagina(){
            this.portada=false;
            this.pagina1= true;
            
        },
        click(_item,_numPag){
            itemGrande = document.getElementById("itemIndividual__itemGrande");
            switch(_numPag){
                case 1:
                    this.nom=this.nombres1[_item];
                    this.descripcion=this.descripciones1[_item];
                    switch(_item){
                        case 0:
                            this.imagen="/imagenes/comida1.jpeg";
                            break;
                        case 1:
                            this.imagen="/imagenes/comida2.jpeg";
                            break;
                        case 2:
                            this.imagen="/imagenes/comida3.jpeg";
                            break;
                        case 3:
                            this.imagen="/imagenes/comida4.jpeg";
                            break;
                        case 4:
                            this.imagen="/imagenes/comida5.jpeg";
                            break;
                        case 5:
                            this.imagen="/imagenes/comida6.jpeg";
                  }
                  itemGrande.setAttribute("src",this.imagen);
                    break;
                case 2:
                    this.nom=this.nombres2[_item];
                    this.descripcion=this.descripciones2[_item];
                    switch(_item){
                        case 0:
                            this.imagen="/imagenes/refresco1.jpeg";
                            break;
                        case 1:
                            this.imagen="/imagenes/refresco2.jpeg";
                            break;
                        case 2:
                            this.imagen="/imagenes/refresco3.jpeg";
                            break;
                        case 3:
                            this.imagen="/imagenes/refresco4.jpeg";
                            break;
                        case 4:
                            this.imagen="/imagenes/refresco5.jpeg";
                            break;
                        case 5:
                            this.imagen="/imagenes/refresco6.jpeg";
                            break;
                    }
                    itemGrande.setAttribute("src",this.imagen);
                    break;
                    
                case 3:
                    this.nom=this.nombres3[_item];
                    this.descripcion=this.descripciones3[_item];
                    switch(_item){
                        case 0:
                            this.imagen="/imagenes/postre1.jpeg";
                            break;
                        case 1:
                            this.imagen="/imagenes/postre2.jpeg";
                            break;
                        case 2:
                            this.imagen="/imagenes/postre3.jpeg";
                            break;
                        case 3:
                            this.imagen="/imagenes/postre4.jpeg";
                            break;
                        case 4:
                            this.imagen="/imagenes/postre5.jpeg";
                            break;
                        case 5:
                            this.imagen="/imagenes/postre6.jpeg";
                            break;
                    }
                    itemGrande.setAttribute("src",this.imagen);
                    break;
            }
        },
       

        cambioIzq(pagina){
            this.nom="";
            this.descripcion="";
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
            this.nom="";
            this.descripcion="";
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
        },
        pagin1(){
            if(pagina1){
                itemGrande = document.getElementById("itemIndividual__itemGrande");
                for (let i = 0; i < 6; i++) {
                    if(i===0){
                        this.nom=this.nombres1[i];
                        this.descripcion=this.descripciones1[i];
                        this.imagen="/imagenes/comida1.jpeg";
                        itemGrande.setAttribute("src",this.imagen);
                    }else{
                        setInterval(()=>{
                            this.nom=this.nombres1[i];
                            this.descripcion=this.descripciones1[i];
                            switch(i){
                                case 1:
                                    this.imagen="/imagenes/comida2.jpeg";
                                    break;
                                case 2:
                                    this.imagen="/imagenes/comida3.jpeg";
                                    break;
                                case 3:
                                    this.imagen="/imagenes/comida4.jpeg";
                                    break;
                                case 4:
                                    this.imagen="/imagenes/comida5.jpeg";
                                    break;
                                case 5:
                                    this.imagen="/imagenes/comida6.jpeg";
                                    break;
                          }
                          itemGrande.setAttribute("src",this.imagen);
                        },10000);
                    }
                     
                }
            }

        },
        pagin2(){
            if(pagina2){
                itemGrande = document.getElementById("itemIndividual__itemGrande");
                for (let i = 0; i < 6; i++) {
                    if(i===0){
                        this.nom=this.nombres2[i];
                        this.descripcion=this.descripciones2[i];
                        this.imagen="/imagenes/refresco1.jpeg";
                        itemGrande.setAttribute("src",this.imagen);
                    }else{
                        setInterval(()=>{
                            this.nom=this.nombres1[i];
                            this.descripcion=this.descripciones1[i];
                            switch(i){
                                case 1:
                                    this.imagen="/imagenes/refresco2.jpeg";
                                    break;
                                case 2:
                                    this.imagen="/imagenes/refresco3.jpeg";
                                    break;
                                case 3:
                                    this.imagen="/imagenes/refresco4.jpeg";
                                    break;
                                case 4:
                                    this.imagen="/imagenes/refresco5.jpeg";
                                    break;
                                case 5:
                                    this.imagen="/imagenes/refresco6.jpeg";
                                    break;
                          }
                          itemGrande.setAttribute("src",this.imagen);
                        },10000);
                    }
                     
                }
            }

        },
        pagin3(){
            if(pagina3){
                itemGrande = document.getElementById("itemIndividual__itemGrande");
                for (let i = 0; i < 6; i++) {
                    if(i===0){
                        this.nom=this.nombres3[i];
                        this.descripcion=this.descripciones3[i];
                        this.imagen="/imagenes/postre1.jpeg";
                        itemGrande.setAttribute("src",this.imagen);
                    }else{
                        setInterval(()=>{
                            this.nom=this.nombres1[i];
                            this.descripcion=this.descripciones1[i];
                            switch(i){
                                case 1:
                                    this.imagen="/imagenes/postre2.jpeg";
                                    break;
                                case 2:
                                    this.imagen="/imagenes/postre3.jpeg";
                                    break;
                                case 3:
                                    this.imagen="/imagenes/postre4.jpeg";
                                    break;
                                case 4:
                                    this.imagen="/imagenes/postre5.jpeg";
                                    break;
                                case 5:
                                    this.imagen="/imagenes/postre6.jpeg";
                                    break;
                          }
                          itemGrande.setAttribute("src",this.imagen);
                        },10000);
                    }
                     
                }
            }

        }


    }
    
    
}
  Vue.createApp(pag).mount('#menu');
  





