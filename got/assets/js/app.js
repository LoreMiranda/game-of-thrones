const filterByTemp = (data2, condition) =>{
    if(condition === "0"){
        return data2;
    }
    return data2.filter(element =>{
        return element.seasonNum === parseInt(condition);
    });
};
