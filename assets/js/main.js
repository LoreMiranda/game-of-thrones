const containerRoot = document.getElementById("root");
const data = (DATA.characters);


const showData = (data) =>{
let result = "";

   data.forEach(element => {    
        result = containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="img">
        <img src=${element.characterImageThumb}>
        </div>
        <h2>${element.characterName}<br></h2>        
        </div>
        </div>
        </div>`
}
    );
return result;
}

window.onload = showData(data);