





if(localStorage.getItem('nombre') === null){
    let cardReserva = document.createElement("div");
    cardReserva.classList.add("cardReservaNull")
        cardReserva.innerHTML = `
        <div>
        <a href="../htmls/selecCabana.html" class="boton">
            <h2>Ir a Alquiler</h2>
        </a>
        </div>`;
        
        document.body.append(cardReserva);
        
    }else{
        let cabanaElegida = JSON.parse(localStorage.getItem("cabana")).filter(elemento => elemento.id == localStorage.getItem("idCabanaElegida"));
        for(const cabana of cabanaElegida){
            
            let cardReserva = document.createElement("div");
            cardReserva.classList.add("cardReserva")
            cardReserva.innerHTML = `
            <h2>Cabaña ${cabana.nombreCabana}</h2>
            <p>A nombre de: ${localStorage.getItem("nombre")} ${localStorage.getItem("apellido")}</p>
            <p>Telefono: ${localStorage.getItem("telefono")}</p>
            <p>Email: ${localStorage.getItem("email")}</p>
            <p>Capacidad: ${cabana.capacidad} personas</p>
        <p>Mascota: ${localStorage.getItem("mascota")}</p>
        <p>Precio por dia: $${cabana.precio}<p/>
        <p>Cantidad de días: ${localStorage.getItem("cantDias")}<p/>
        <p>Precio estadía: $${cabana.precio * localStorage.getItem("cantDias")}<p/>`;
        
        document.body.append(cardReserva);
    }


};
       




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