let btnRef = document.querySelectorAll(".button-resource");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let winningPattern = [ 
[0,1,2], 
[0,3,6], 
[2,5,8], 
[6,7,8],
[3,4,5], 
[1,4,7], 
[0,4,8], 
[2,4,6] 
];

let xTurn = true;
let count = 0;


const disabledbuttons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
}

const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerText ="";
        element.disabled = false;
    });
    popupRef.classList.add("hide");
};

const winFunction = (letter) => {
    disabledbuttons();
    if(letter == "X"){
        msgRef.innerHTML = " 'X' Wins";
    }
    else{
        msgRef.innerHTML = " 'O' Wins";
    }
};

const drawFunction = () => {
    disabledbuttons();
    msgRef.innerHTML = " no winner"
};

newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

const winChecker = () => {
    for(let i of winningPattern){
        let[element1, element2, element3] = [
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        
        if(element1 != "" && (element2 != "") & element3 != ""){
            if(element1 == element2 && element2 == element3){
            
                winFunction(element1);
            }
        }
    } 
};

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(xTurn){
            xTurn=false;
            element.innerText = "X"
            element.disabled = true;
        }
        else{
            xTurn = true;
            element.innerText = "O";
            element.disabled = true; 
        };
        count += 1;
        if(count == 9){
           drawFunction();
        };
        winChecker();
    });
});

window.onload = enableButtons;