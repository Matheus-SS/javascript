const container = document.querySelector("#container");
const close = document.querySelectorAll(".close");
const overlay = document.querySelector(".overlay");
const k = document.querySelector(".k");
const kyo = document.querySelector(".kyo");
const leona = document.querySelector(".leona");
const iori = document.querySelector(".iori");
const ryo = document.querySelector(".ryo");
const athena = document.querySelector(".athena");
const terry = document.querySelector(".terry")



container.addEventListener('click', e=>{
    //pega a classe de cada diamond clicado
    const item = e.target.classList[0];
    //de acordo com a classe de cada diamond aparece o card e historia correspondente
    switch(item){
        case "item1":
            container.style.display = "none";
            overlay.style.display = "flex";
            leona.style.display = "block";
        break;
        case "item2":
            container.style.display = "none";
            overlay.style.display = "flex";
            terry.style.display = "block";
        break;
        case "item3":
            container.style.display = "none";
            overlay.style.display = "flex";
            kyo.style.display = "block";
        break;
        case "item4":
            container.style.display = "none";
            overlay.style.display = "flex";
            iori.style.display = "block";
        break;
        case "item5":
            container.style.display = "none";
            overlay.style.display = "flex";
            k.style.display = "block";
        break;
        case "item6":
            container.style.display = "none";
            overlay.style.display = "flex";
            athena.style.display = "block";
        break;
        case "item7":
            container.style.display = "none";
            overlay.style.display = "flex";
            ryo.style.display = "block";
        break;
    default:
        console.log("something wrong");
        break;
    }
});

//para cada span da classe close dentro do meu html é adicionado um evento click de fechar
close.forEach(item => {
    item.addEventListener('click',e =>{
        e.target.parentElement.style.display = 'none';
        overlay.style.display = 'none';
        container.style.display = 'grid';
    });
});
