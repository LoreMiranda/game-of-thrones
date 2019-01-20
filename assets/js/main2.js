const containerRoot2 = document.getElementById("root2");
let data2 = (EPISODES.episodes);
//const seasonFilter2 = document.getElementById("seasons2");




const showData2 = (data2) =>{
    let result2 = "";

   data2.forEach(element => {
     //   if (element.characterName !== "") {
    if(element.seasonNum !== "") 

        result2 = containerRoot2.innerHTML += `
        <div>
        <div class="card">
        <div class="box">        
        <h3>${element.episodeTitle}</h3>
        <p>${element.episodeDescription}><br></p>
        <p>${element.seasonNum}    </p> 
      </div>
    </div>
    </div>`

});
return result2;
}
/*
seasonFilter2.addEventListener("change", () => {
    let condition = seasonFilter2.value  //cada vez que cambie el tipo desde el select, la condicion toma el valor desde html
    let filtered2 = gotFilter(data2, condition);
    //se limpia el div
    containerRoot2.innerHTML= "";
    filtered2.forEach(element => {
        containerRoot2.innerHTML +=`
        <div>
        <div class="card">
        <div class="box">
        <div class=${element.episodeTitle}>
        <h2 Episodio=${element.episodeNum}><br></h2>
        <p Temporada: ${element.seasonNum}>        
      </div>
    </div>
    </div>`
})

}
)*/
window.onload = showData2(data2);