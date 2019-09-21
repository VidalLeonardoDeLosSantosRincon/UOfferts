$(document).ready(function(){

    $(".slider").ripples({
        resolution: 1280,
        dropRadius: 2,
        perturbance: 0.04
    });
    
    });

    let ofertas = [


        {
            Id:1,
            image:"cell2.jpg",
            titulo:"Iphone 7",
            precio: 15000,
            ubicacion:  {
                lat: 41.475822,
                lng: 2.277770,
            }
           },
           {
               Id:2,
               image:"mouse.jpg",
               titulo:"Mouse Gamer",
               precio: 1200,
               ubicacion:  {
                lat: 35.375822,
                lng: 3.177770,
            }
              },
              {
                Id:3,
                image:"teclado.jpg",
                titulo:"Teclado Iluminado",
                precio: 3000,
                ubicacion :  {
                    lat: 21.375822,
                    lng: 1.177770,
                }
              },
              {
               Id:4,
               image:"watch2.jpg",
               titulo:"Smart Watch",
               precio: 6500,
               ubicacion: {
                   lat: 45.375822,
                   lng: 2.177770,
               }
              },
              {
               Id:5,
               image:"xbox360.jpg",
               titulo:"Xbox 360 Slim",
               precio: 8000,
               ubicacion:  {
                lat: 41.378822,
                lng: 5.178770,
            }
              },
              {
                Id:6,
                image:"discoDuro.jpg",
                titulo:"Disco Duro Portatil",
                precio: 2900,
                ubicacion:  {
                    lat: 41.355822,
                    lng: 12.177795,
                }
              }
              

              
    ];


    let container = document.querySelector('#container');
   
    for( o in ofertas){
        console.log(ofertas[o].titulo);
        container.innerHTML += 
        `<div class="border caja">  
        <img src="img/${ofertas[o].image}" alt="">
        <h6 id="nombre">${ofertas[o].titulo}</h6>
        <h6>Precio: <span class="text-success">RD$ ${ofertas[o].precio}</span></h6>
        <input type="button" id="btnLocation" onClick="verLocation()" value="Ubicacion" >
        <!--<input type="text" value="${ofertas[o].ubicacion.lat},${ofertas[o].ubicacion.lng}">-->
    </div>`;   
       
    }

    let cont_map= document.querySelector('#cont_map');
    cont_map.addEventListener("mouseleave",noLocation);



    // definimos valor por defecto
    var myOptions = {
        zoom: 6,
        center: new google.maps.LatLng(45.375822,2.177770),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


   
    function verLocation(){

            // generamos el mapa
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);


    
    for(d in ofertas){

        
        var latlng = new google.maps.LatLng(ofertas[d].ubicacion.lat, ofertas[d].ubicacion.lng);
    
            var marker = new google.maps.Marker({
                position: latlng,
                title: ofertas[d].titulo,
                draggable: false
            });
    
            
           marker.setMap(map);
           var popup = new google.maps.InfoWindow({
            content: 'Oferta '+ofertas[d].titulo,
            position: latlng
           });
    
          popup.open(map);
    
        }

        cont_map.style.visibility = "visible";

    }   
    function noLocation(){

       cont_map.style.visibility = "hidden";

    }





    (function(){
        var miVideo = document.getElementById("video");
        miVideo.volume = 0.1;
        var btnMute= document.getElementById("btnplay");
        btnMute.addEventListener("click",mute);
  
            function mute(){
              if(miVideo.muted){
                miVideo.muted = false;
                document.getElementById("btnplay").type="image";
                document.getElementById("btnplay").src="imagenes/mute.png";
  
              }else{
                miVideo.muted= true;
                document.getElementById("btnplay").type="image";
                document.getElementById("btnplay").src="imagenes/unnamed.png";
              }
            }
  
          })();

   
    

