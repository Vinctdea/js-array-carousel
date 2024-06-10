
// Dato un array contenente una lista di cinque immagini
const imgData = ["img/01.webp", "img/02.webp", "img/03.webp","img/04.webp", "img/05.webp"];
console.log(imgData);
const container = document.querySelector(".container")

// creare ciclo per leggere array 
for (let i = 0; i < imgData.length; i++) {
    let numeroImg = imgData[i];
    console.log(numeroImg); 

    // generare elemento div con img
    let contenuto = `
    <div class="item">
        <img src="${numeroImg}">
    </div>`;
    
    // inserisco i div+img creati
    container.innerHTML += contenuto;
}

// seleziono la lista
const items = document.getElementsByClassName("item");
let itemAttivi = 0;


// aggiungo la classe item
items[itemAttivi].classList.add("active");

// associo bottoni
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// click next
next.addEventListener("click",
    function(){
        if (itemAttivi < imgData.length -1) {

        // tolgo la classe active al precedente
        items[itemAttivi].classList.remove("active");

        // incremento il valore di itemAttivi
        itemAttivi++;

        // associo classe active
        items[itemAttivi].classList.add("active");
            
        }else if(itemAttivi === imgData.length -1){
            items[itemAttivi].classList.remove("active");
            itemAttivi=0;
            items[itemAttivi ].classList.add("active");
            

        }


    }
);

// click prev
prev.addEventListener("click",
    function(){
        if (itemAttivi > 0 ) {

        // tolgo la classe active al precedente
        items[itemAttivi].classList.remove("active");

        // decremento il valore di itemAttivi
        itemAttivi--;

        // associo classe active
        items[itemAttivi].classList.add("active");
            
        } else if( itemAttivi <= 0){

            items[itemAttivi].classList.remove("active");
             itemAttivi= imgData.length -1;
            items[itemAttivi].classList.add("active");
            
        }


    }
);


