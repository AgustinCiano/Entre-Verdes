




let cabanaElegida = JSON.parse(localStorage.getItem("cabana")).filter(elemento => elemento.id == localStorage.getItem("idCabanaElegida"));




let cardReserva = document.getElementById("cardReserva")

let submit = document.getElementById("submit");



submit.addEventListener("click", crearReserva);


function crearReserva(){
    if(localStorage.getItem('nombre') === null){

        let inputNombre = document.getElementById("nombre");
        localStorage.setItem("nombre", inputNombre.value);
    
        let inputApellido = document.getElementById("apellido");
        localStorage.setItem("apellido", (inputApellido.value));
    
        let inputTelefono = document.getElementById("telefono");
        localStorage.setItem("telefono", (inputTelefono.value));
    
        let inputCantDias = document.getElementById("contadorDiasHosp");
        localStorage.setItem("cantDias", (inputCantDias.value));
    
        let inputEmail = document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);
        
        let inputMasc = document.getElementById("mascota");
        localStorage.setItem("mascota", inputMasc.value);
             
        
        for(const cabana of cabanaElegida){
            
            let cardReserva = document.createElement("div");
            cardReserva.classList.add("cardReserva")
            cardReserva.innerHTML = `
            <h2>Cabaña ${cabana.nombreCabana}</h2>
            <p>A nombre de: ${inputNombre.value} ${apellido.value}</p>
            <p>Telefono: ${inputTelefono.value}</p>
            <p>Email: ${inputEmail.value}</p>
            <p>Capacidad: ${cabana.capacidad} personas</p>
            <p>Mascota: ${inputMasc.value}</p>
            <p>Precio por dia: $${cabana.precio}<p/>
            <p>Cantidad de días: ${JSON.parse(inputCantDias.value)}<p/>
            <p>Precio estadía: $${cabana.precio * JSON.parse(inputCantDias.value)}<p/>`;
            
            document.body.append(cardReserva);
        }
        Swal.fire({
            title: 'Hecho!',       
            text: 'Ya creaste tu reserva, podés ver los datos en "Tus Reservas"',        
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
    
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ya tenés una reserva a tu nombre, checkeala en tus Reservas',
            footer: '<a href="./tusReservas.html">Ir a Reservas</a>'
          })
    }
};
