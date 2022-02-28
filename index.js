import {getAllDogs} from "./service/service.js"

 fetch("https://ghibliapi.herokuapp.com/films").then(res => {
     return res.json();
 }).then(res => {
    res.filter(element => {
        const list = document.querySelector(".list");
        const li = document.createElement("li");
        

        let obj = {};
        obj.title = element.title;
        obj.description = element.description;
        obj.director = element.director;
        obj.release_date = element.release_date;
        
        li.textContent = JSON.stringify(obj);
        list.append(li);

        console.log(obj)
    }); 
    console.log(res)}) 
    .then(res => {
        const json = res.json();
        console.log();
        return json;
    })



 



