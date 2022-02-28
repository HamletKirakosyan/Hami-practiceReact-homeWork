const getAllDogs = async() => {

    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const json = await response.json();
    console.log(json);
    return json.message;
}

export {getAllDogs};