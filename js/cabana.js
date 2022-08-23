



const lista = document.getElementById("lista");

const traerDatos = async () => {
    try{
        const resp = await fetch("../data.json");
        const cabana = await resp.json();

        
            /* const li = document.createElement('li');
            li.innerHTML = `
            <h2> ${post.id}</h3>`;
            lista.append(li); */
            /* let cabana = [
                {id: 1, nombreCabana: "De la Asequia", capacidad: "8", precio: "8000"},
                {id: 2, nombreCabana: "Del Bosque", capacidad: "6", precio: "6000"},
                {id: 3, nombreCabana: "Del Mirador", capacidad: "4", precio: "4000"},
            ]; */


        
        localStorage.setItem("cabana", JSON.stringify(cabana));
    }catch (error) {
        console.log(cabana);
    }
        
    


        
        
};


traerDatos();





/* let cabana = [
    {id: 1, nombreCabana: "De la Asequia", capacidad: "8", precio: "8000"},
    {id: 2, nombreCabana: "Del Bosque", capacidad: "6", precio: "6000"},
    {id: 3, nombreCabana: "Del Mirador", capacidad: "4", precio: "4000"},
];

localStorage.setItem("cabana", JSON.stringify(cabana));

let selecAsequia = document.getElementById("selecAsequia")
let selecBosque = document.getElementById("selecBosque")
let selecMirador = document.getElementById("selecMirador")

selecAsequia.addEventListener("click", setIdAsequia);
selecBosque.addEventListener("click", setIdBosque);
selecMirador.addEventListener("click", setIdMirador);

function setIdAsequia(){
    localStorage.setItem("idCabanaElegida", 1);
}

function setIdBosque(){
    localStorage.setItem("idCabanaElegida", 2);
}

function setIdMirador(){
    localStorage.setItem("idCabanaElegida", 3);
} */

/* const cabana = document.getElementById("cabana"); */

/* fetch("./data.json")
.then(resp => resp.jason())
.then(cabana => {
    cabana.forEach(cabana => {
        const li = document.getElementById('li');
        li.innerHTML = `
        <h2>${cabana.nombre}</h2>`
    ;
    lista.append(li);
    });
}) */




