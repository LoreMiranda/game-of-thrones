//console.log(data)
//const episodes = EPISODES;

//for (let i = 0, i > data.length; i++);
//for (let i = 0; i < data.length; i++){
  //  console.log(data[i].characterName);
    //console.log(data[i].episodeDescription);
   // console.log(data[i].episodeTitle);

const data = (DATA.characters);
const data2 = (EPISODES.episodes);

   for ( let i = 0; i < data2.length; i++){
   }
   const gotFilter = (data2, condition) => {
    const gotFiltered = data2.filter(element => {
        return element.seasons.indexOf(condition) > -1
    })
    return gotFiltered;
}
