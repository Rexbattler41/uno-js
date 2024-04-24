let colors = ['color1','color2','color3','color4']; // ← array 1
let sides = ['side1','side2','side3','side4','side5','side6']; // ← array 2

function build_die(die_color, die_side) {
    let button = document.createElement('button');
    button.classList.add('dobbelsteen');
    button.classList.add(die_color);
    button.classList.add(die_side);

    button.onclick = die_click;

    return button;
}

function die_click() {
    if (this.parentElement.Id != 'dicepool'){
        document.getElementById('dicepool').appendChild(this)
        grab.style.display = 'inline-block';
    }
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}

let dice = []; // <- alle dobbelstenen (array)

// dobbelstenen verzamellen 
for (let index = 0; index < colors.length; index++) {
    const color = colors[index];

    for (let index = 0; index < sides.length; index++) {
        const side = sides[index];
        
        const die = build_die(color, side);

        dice.push(die);
    }
}

function grab_die() {
    let dicebagnumber = players.value;
    let dicebagid = "dicebag"+dicebagnumber;
    let dicebag = document.getElementById(dicebagid);
    place_dice(dicebag, 1)
}

function place_dice(spot, amount){
    if (dice.length >= amount) {
        for (let index = 0; index < amount; index++) {
            shuffle(dice);
            const die = dice.pop();
            spot.appendChild(die);
        }
    } else {
        alert('Niet genoeg dobbelstenen!');
        let amountOfDiceInPool = document.getElementById("dicepool").childElementCount;
        for (let index = 0; index < amountOfDiceInPool-1; index++) {
            const die = document.getElementById("dicepool").firstElementChild
            dice.push(die)
            die.remove();
        }
        if (dice.length >= amount) {
            place_dice(spot, amount)
        } else {
            alert('game over')
        }
    }
}

place_dice(document.getElementById("dicebag1"), 2)
place_dice(document.getElementById("dicebag2"), 2)
place_dice(document.getElementById("dicebag3"), 2)
place_dice(document.getElementById("dicebag4"), 2)
place_dice(document.getElementById("dicepool"), 1)

grab.addEventListener('click', grab_die);