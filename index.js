



/* window.location */



/* let cabana = [
    {id: 1, nombre: "De la Asequia", capacidad: "8", precio: 8000},
    {id: 2, nombre: "Del Bosque", capacidad: "4", precio: 4000},
    {id: 3, nombre: "Del Mirador", capacidad: "6", precio: 6000},
]; */


/* botonCardAsequia.addEventListener("click", () => console.log("click")); */




/* if(eleccion === "c"){
    
    
    let container = document.getElementById("container");
    let filtro =  parseInt(prompt("Precio maximo: de $4000 a $8000"));
    let filtroPrecio = cabana.filter(elemento => elemento.precio <= filtro);
    let cantDias = prompt("Cuántos dias te vas a hospedar?");
    
    for(const cabana of filtroPrecio){
        let item = document.createElement("div");
        item.innerHTML = `
                        
                        <h2>Cabaña ${cabana.nombre}</h2>
                        <p>Capacidad: ${cabana.capacidad} personas</p>
                        <b>Precio por dia: $${cabana.precio}<b/>
                        <p>Cantidad de días: ${cantDias}</p>
                        <p>Descuento Especial: -$${(cabana.precio * cantDias) - (cabana.precio * cantDias * descJubi)}</p>
                        <p>Total estadía: $${cabana.precio * cantDias * descJubi}<p/>
                        <p>______________<p>`;
    
                        container.append(item);
    };
} */