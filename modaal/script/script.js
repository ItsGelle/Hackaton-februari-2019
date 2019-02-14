let modaal = document.querySelector('#achtergrond');
let venster = document.querySelector('#venster');
let inhoud = document.querySelector('#modaalInhoud');
let triggers = document.querySelectorAll('.trigger');
let modalen = new Object();

//Sluiten
const sluitVenster = () => {
    inhoud.innerHTML = "";
    modaal.parentNode.removeChild(modaal);
};

venster.addEventListener('click', (e) => {
    e.stopPropagation();
});

sluiten.addEventListener('click', sluitVenster);
modaal.addEventListener('click', sluitVenster);

// Vensters
for(let i = 0; i < triggers.length; i++) {
    let item = triggers[i].hash.substr(1);
    modalen[item] = document.getElementById(item);
    // Klik event
    triggers[i].addEventListener('click', (e)=>{
        e.preventDefault();
        inhoud.appendChild(modalen[item]);
        document.body.appendChild(modaal);
    })
}

for(element in modalen) {
    modalen[element].parentNode.removeChild(modalen[element]);
}

sluitVenster();
