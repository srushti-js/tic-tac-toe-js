let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbutton");
let turnO = true;
let newgame = document.querySelector(".newgame");
let msgcontainer = document.querySelector(".msgcontainer");

const WinningPatterns = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO == true) {
            //Player O's turn
            box.innerText = "O";
            turnO = false;
        }
        else {
            //Player X's turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()

    })
});

const checkWinner = () => {
    for (let pattern of WinningPatterns) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != "" && pos0val == pos1val && pos1val == pos2val) {
            alert("Player " + pos0val + " has won the game!");
        }
    }
}
resetbutton.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
});

newgame.addEventListener("click", () => {
    turnO = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
});
