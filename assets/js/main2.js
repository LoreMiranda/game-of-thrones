const containerRoot2 = document.getElementById("root2"); //hago mi constante para llamar a mi root por el id
let data2 = (EPISODES.episodes); //variable para llamar a la data
const seasonSelectList = document.getElementById("seasonList2");//variable para el filtro (llamo al id de la lista de temporadas)


const showData2 = (data2) =>{ //hago la funcion para que me muestre la data 
let result2 = ""; //y otra variable de string vacío para que me guarde todo acá

data2.forEach(element => { //hago un forEach para que ejecute la función de arriba por cada elemento del array
    if(element.seasonNum !== "") {//le doy condición con if, si el elemento no es un string vacío (distinto), entonces que me imprima lo de abajo
        result2 = containerRoot2.innerHTML += `
        <div>
        <div class="card">
        <div class="box">        
        <h3>${element.episodeTitle}</h3>
        <p>${element.episodeDescription}<br></p>
        <p>Season: ${element.seasonNum}</p>         
        </div>
        </div>
        </div>
        </div>`
}
});
return result2; 
}

//FUNCION PARA FILTRAR

seasonSelectList.addEventListener("change", () => {//para que escuche los cambios de la lista de temporadas
    let condition = seasonList2.value  //la condición es cada vez que cambie, tomará el valor asignado a cada temporada de la lista del html
    let seasonFilter = filterByTemp(data2, condition);
    //se limpia el div de lista de temporadas
    containerRoot2.innerHTML= "";
    seasonFilter.forEach(element => {
        if (element.episodeDescription === ""){
        containerRoot2.innerHTML +=`
        <div>
        <div class="card">
        <div class="box">
        <h3>${element.episodeTitle}</h3>
        <p>Descripción no disponible</p>
        <p>${element.episodeDescription}><br></p>        
        <p>Season: ${element.seasonNum}</p>        
        </div>
        </div>
        </div>`
        }else{
        containerRoot2.innerHTML +=`
        <div>
        <div class="card">
        <div class="box">
        <h3>${element.episodeTitle}</h3>        
        <p>${element.episodeDescription}><br></p>        
        <p>Season: ${element.seasonNum}</p>        
        </div>
        </div>
        </div>`
}
})
});
;
window.onload = showData2(data2);