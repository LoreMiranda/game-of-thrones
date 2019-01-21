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
        <br>
        <h5>${element.characterName}<br></h5>        
        </div>
        </div>
        </div>`
}
    );
return result;
}

window.onload = showData(data);