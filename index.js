
alert("Bienvenido a Entre Verdes!")

let usuario = prompt("Ingresá tu nombre:")

/* let diasHosp = prompt("¿Cuantos dias te vas a hospedar?") */

let desc = prompt("¿Tenés código de descuento? si / no")

/* let precioDia = 5000 */

let descJubi = 0.9

let eleccion = prompt("Elegí cabaña por a) Nombre / b) Capacidad / c) Precio máximo por día")

/* let cantDias = prompt("Cuántos dias te vas a hospedar?") */


let cabana = [
    {id: 1, nombre: "De la Asequia", capacidad: "8", precio: 8000},
    {id: 2, nombre: "Del Bosque", capacidad: "6", precio: 6000},
    {id: 3, nombre: "Del Mirador", capacidad: "4", precio: 4000},
]


if(desc === "si"){

    if(eleccion === "c"){
    
    
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
    }else if(eleccion === "a"){
    
    
        let container = document.getElementById("container");
        let filtro = parseInt(prompt(" 1) De la Asequia, 2) Del Bosque, 3) Del Mirador"));
        let filtroId = cabana.filter(elemento => elemento.id == filtro);
        let cantDias = prompt("Cuántos dias te vas a hospedar?");
        
        for(const cabana of filtroId){
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
    
    }else if(eleccion === "b"){
    
        let container = document.getElementById("container");
        let filtro = parseInt(prompt("Capacidad de 4 a 8 personas"));
        let filtroCapacidad = cabana.filter(elemento => elemento.capacidad >= filtro);
        let cantDias = prompt("Cuántos dias te vas a hospedar?");
        
        

        for(const cabana of filtroCapacidad){
            
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
        

    }



}else{
    if(eleccion === "c"){
    
    
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
                            <p>Total estadía: $${cabana.precio * cantDias}<p/>
                            <p>______________<p>`;
        
                            container.append(item);
        };
    }else if(eleccion === "a"){
    
    
        let container = document.getElementById("container");
        let filtro = parseInt(prompt(" 1) De la Asequia, 2) Del Bosque, 3) Del Mirador"));
        let filtroId = cabana.filter(elemento => elemento.id == filtro);
        let cantDias = prompt("Cuántos dias te vas a hospedar?");
        
        for(const cabana of filtroId){
            let item = document.createElement("div");
            item.innerHTML = `

                            <h2>Cabaña ${cabana.nombre}</h2>
                            <p>Capacidad: ${cabana.capacidad} personas</p>
                            <b>Precio por dia: $${cabana.precio}<b/>
                            <p>Cantidad de días: ${cantDias}</p>
                            <p>Total estadía: $${cabana.precio * cantDias}<p/>
                            <p>______________<p>`;
        
                            container.append(item);
        };
    
    }else if(eleccion === "b"){
    
        let container = document.getElementById("container");
        let filtro = parseInt(prompt("Capacidad de 4 a 8 personas"));
        let filtroCapacidad = cabana.filter(elemento => elemento.capacidad >= filtro);
        let cantDias = prompt("Cuántos dias te vas a hospedar?");
        
        for(const cabana of filtroCapacidad){
            let item = document.createElement("div");
            item.innerHTML = `
            
                            <h2>Cabaña ${cabana.nombre}</h2>
                            <p>Capacidad: ${cabana.capacidad} personas</p>
                            <b>Precio por dia: $${cabana.precio}<b/>
                            <p>Cantidad de días: ${cantDias}</p>
                            <p>Total estadía: $${cabana.precio * cantDias}<p/>
                            <p>______________<p>`;
        
                            container.append(item);
    };
    }


}





    
    
    
    










/* let contenedor = document.querySelectorAll(".texto");
console.log(contenedor); */