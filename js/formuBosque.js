
let cabana = [
    {id: 1, nombre: "De la Asequia", capacidad: "8", precio: 8000, cantDias: 5},
    {id: 2, nombre: "Del Bosque", capacidad: "6", precio: 6000, cantDias: 5},
    {id: 3, nombre: "Del Mirador", capacidad: "4", precio: 4000, cantDias: 5},
];

let cardReserva = document.getElementById("cardReserva")

let submitBosque = document.getElementById("submitBosque");

let idCabanaElegida = 2;
let cabanaElegida = cabana.filter(elemento => elemento.id === idCabanaElegida);
/* console.log(cabanaElegida); */


submitBosque.addEventListener("click", crearReserva);

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

        localStorage.setItem("cabaña", "Del Bosque");

        localStorage.setItem("cantPers", 6)
        
        localStorage.setItem("precioDia", 6000)

        for(const cabana of cabanaElegida){
            let cardReserva = document.createElement("div");
            cardReserva.classList.add("cardReserva")
            cardReserva.innerHTML = `
            <h2>Cabaña ${cabana.nombre}</h2>
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
        text: 'Reservaste la Cabaña del Bosque, ya podés ver los datos en "Reservas"',        
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ya tenés una reserva a tu nombre, checkeala en tus Reservas',
            footer: '<a href="./reservas.html">Ir a Reservas</a>'
        })
    }    
};

