

async function breedListAll() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
}

breedListAll();


function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
        <select onchange="loadByBreed(this.value)">
        <option value="">--Select a breed--</option>
        ${Object.keys(breedList).map((breed) => {
            let returnedBreed = [
                'Akita', 
                'Beagle', 
                'Dalmatian', 
                'German Shepherd', 
                'Husky', 
                'Labrador', 
                'Pug', 
                'Golden Retriever', 
                'Cocker Spaniel', 
            ];
    
            let objBreed = returnedBreed.reduce((acc,val)=>{
                acc[val]=val;
                return acc;
            },{})
            let a=[];
            for(let i=0;i<Object.keys(breedList).length;i++){
                let current=Object.keys(breedList)[i]
                if(objBreed[current]){
                    a.push(Object.keys(breedList)[i])
                }
            }
        return `<option>${a[breed]}</option>`
    }).join("")} 
            </select>        
        
    `
};


async function loadByBreed() {
    if(breed !== "--Select a breed--") {
        const response = fetch(`https://dog.ceo/api/breed/${a[breed]}/images`)
        const data =  await response.json();
        createImage(data.message);
    }
};

function createImage(images) {
    document.getElementById("breeds").innerHTML = `
        <div style="background-image: url('${images[0]}')"></div>
    `
}

