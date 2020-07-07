AOS.init()

fetch(`http://hundred-words.herokuapp.com/cem-palavras`)
.then(response => response.json())
   
.then(jsonBody => {
    for(let i=0; i<jsonBody.length; i++){
        document.querySelector("#name"+i).innerHTML = jsonBody[i].name;
        document.querySelector("#description"+i).innerHTML = jsonBody[i].description;
    }

    console.log(jsonBody);
});

