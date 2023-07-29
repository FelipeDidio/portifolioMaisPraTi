const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = ()=> {
    mario.classList.add("jump");

    setTimeout(() =>{
        mario.classList.remove("jump");
    }, 500);
};

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", ""); /*O .replace, neste caso, pega a medida indicada(botton) e retira a unidade de medida(px) e fica só o num */

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 112){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}`;

        mario.src = "image/game-over.png";
        mario.Style.widht = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);

    }
}, 10);

document.addEventListener("keydown", jump);
