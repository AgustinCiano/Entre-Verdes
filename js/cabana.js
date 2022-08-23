
const traerDatos = async () => {
    try{
        const resp = await fetch("../data.json");
        const cabana = await resp.json();        
        localStorage.setItem("cabana", JSON.stringify(cabana));    
    }catch (error) {
        console.log("error");
    }        
};

traerDatos();


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
}



