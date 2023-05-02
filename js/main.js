const team = [

    {
        "nome": "Wayne Barnett",
        ruolo: "Founder & CEO",
        "foto": "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        ruolo: "Chief Editor",
        "foto": "./img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        ruolo: "Office Manager",
        "foto": "./img/walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        ruolo: "Social Media Manager",
        "foto": "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        ruolo: "Developer",
        "foto": "./img/scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        ruolo: "Graphic Designer",
        "foto": "./img/barbara-ramos-graphic-designer.jpg"
    }

];

console.log(team);

let main = document.getElementById("ourTeam");

for (let i = 0; i < team.length; i++) {
    const newDiv = document.createElement("div")
    const img = document.createElement("img")
    let newDiv2;
    
    for (const key in team[i]) {
        
        if (team[i][key].includes(".jpg")) {
            img.src = team[i][key];
            newDiv.appendChild(img)
        } else {
            newDiv2 = document.createElement("div")
            newDiv2.innerText += team[i][key];
            newDiv.appendChild(newDiv2)
        }

    }
    main.appendChild(newDiv)
}
