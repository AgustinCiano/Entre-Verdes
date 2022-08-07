




    if(localStorage.getItem('nombre') === null){
        let cardReserva = document.createElement("div");
        cardReserva.classList.add("cardReservaNull")
        cardReserva.innerHTML = `
        <h2>Aún no tenés reservas</h2>`;
            
        document.body.append(cardReserva);

    }else{
        let cardReserva = document.createElement("div");
        cardReserva.classList.add("cardReserva")
        cardReserva.innerHTML = `
        <h2>Cabaña ${localStorage.getItem("cabaña")}</h2>
        <p>A nombre de: ${localStorage.getItem("nombre")} ${localStorage.getItem("apellido")}</p>
        <p>Telefono: ${localStorage.getItem("telefono")}</p>
        <p>Email: ${localStorage.getItem("email")}</p>
        <p>Capacidad: ${JSON.parse(localStorage.getItem("cantPers"))} personas</p>
        <p>Mascota: ${localStorage.getItem("mascota")}</p>
        <p>Precio por dia: $${JSON.parse(localStorage.getItem("precioDia"))}<p/>
        <p>Cantidad de días: ${JSON.parse(localStorage.getItem("cantDias"))}<p/>
        <p>Precio estadía: $${JSON.parse(localStorage.getItem("precioDia")) * JSON.parse(localStorage.getItem("cantDias"))}<p/>`;
            
        document.body.append(cardReserva);
    }
       




let botonLimpiar = document.getElementById("limpiarFormu")

botonLimpiar.addEventListener("click", limpiarFormu);

function limpiarFormu(){
    
    Swal.fire({
        title: 'Hecho!',       
        text: 'Cancelaste la reserva',        
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',

    })
    localStorage.clear();
};