let box             = document.querySelectorAll('.boxes');
let msgContainer    = document.querySelector('#msgContainer');
let newGameBtn      = document.querySelector('#newGame');
let resetGameBtn    = document.querySelector('#resetGame');
let winnersPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetGame = () => {
    for(let resetBox of box){
        resetBox.disabled = false;
        resetBox.innerText = "";
        msgContainer.classList.add('hide');
    }
}
const disableBoxes = () => {
    for(let disable of box){
        disable.disabled = true;
    }
}
let trunX = true;
box.forEach((element, key) => {
    element.onclick = () => {
        if(trunX){
            element.innerText = "X";
            trunX = false;
        }else{
            element.innerText = "O";
            trunX = true;
        }
        element.disabled = true;
        checkWinner();
        console.log('button was clicked',key);
    }
});

const checkWinner = () => {
    for (let winner of winnersPattern) {
        let pos1Val = box[winner[0]].innerText;
        let pos2Val = box[winner[1]].innerText;
        let pos3Val = box[winner[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                msgContainer.firstElementChild.innerText = `Congratulation the winner is ${pos1Val}`;
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame);
resetGameBtn.addEventListener('click', resetGame);
