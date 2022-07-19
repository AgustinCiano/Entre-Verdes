
let cabana = [
    {id: 1, nombre: "De la Asequia", capacidad: "8", precio: 8000, cantDias: 5},
    {id: 2, nombre: "Del Bosque", capacidad: "6", precio: 6000, cantDias: 5},
    {id: 3, nombre: "Del Mirador", capacidad: "4", precio: 4000, cantDias: 5},
];

let cardReserva = document.getElementById("cardReserva")

let submitAsequia = document.getElementById("submitAsequia");

let idCabanaElegida = 2;
let cabanaElegida = cabana.filter(elemento => elemento.id === idCabanaElegida);
/* console.log(cabanaElegida); */


submitAsequia.addEventListener("click", crearReserva);

function crearReserva(){
    for(const cabana of cabanaElegida){
        let cardReserva = document.createElement("div");
        cardReserva.innerHTML = `<h2>Cabaña ${cabana.nombre}</h2>
        <p>A nombre de: ${inputNombre.value} ${apellido.value}</p>
        <p>Telefono: ${inputTelefono.value}</p>
        <p>Email: ${inputEmail.value}</p>
        <p>Capacidad: ${cabana.capacidad} personas</p>
        <p>Precio por dia: $${cabana.precio}<p/>
        <p>Cantidad de días: ${JSON.parse(inputCantDias.value)}<p/>
        <p>Precio estadía: $${cabana.precio * JSON.parse(inputCantDias.value)}<p/>
        <p>______________<p>`;
        
        document.body.append(cardReserva);
    }
    Swal.fire({
        title: 'Hecho!',
        text: 'Reservaste la Cabaña del Bosque',        
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        
        
    })
    
};


let inputNombre = document.getElementById("nombre");
localStorage.setItem("nombre", JSON.stringify(inputNombre.value));

let inputApellido = document.getElementById("apellido");
localStorage.setItem("apellido", JSON.stringify(inputApellido.value));

let inputTelefono = document.getElementById("telefono");
localStorage.setItem("telefono", inputTelefono.value);

let inputCantDias = document.getElementById("contadorDiasHosp");
localStorage.setItem("cantDias", JSON.stringify(inputCantDias.value));

let inputEmail = document.getElementById("email");
localStorage.setItem("email", inputEmail.value);



let botonLimpiar = document.getElementById("limpiarFormu")

botonLimpiar.addEventListener("click", limpiarFormu);

function limpiarFormu(){
    localStorage.clear();
};
