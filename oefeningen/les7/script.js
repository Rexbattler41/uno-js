let dice = [];
let dicepool = document.getElementById('dicepool');

function build_die(die_color, die_side) {
    let button = document.createElement('button');
    button.classList.add('dobbelsteen');
    button.classList.add(die_color);
    button.classList.add(die_side);

    button.onclick = die_click;

    return button;
}

function build_all_dice(){
    let colors = ['color1','color2','color3','color4']; // ← array 1
    let sides = ['side1','side2','side3','side4','side5','side6']; // ← array 2

    // dobbelstenen verzamellen 
    for (let index = 0; index < colors.length; index++) {
        const color = colors[index];
    
        for (let index = 0; index < sides.length; index++) {
            const side = sides[index];
            const die = build_die(color, side);
            dice.push(die);
        }
    }
}

function die_click() {
    if (this.parentElement.id != 'dicepool'){
        let canBePlaced = false;
        
        let lastInDicepool = dicepool.lastElementChild;
        let classes =lastInDicepool.classList;

        for (let index = 0; index < classes.length; index++) {
            const elementClass = classes[index];
            if (elementClass != 'dobbelsteen' && canBePlaced == false) {
                canBePlaced = this.classList.contains(elementClass)
            }
        }

        if (canBePlaced) {
            let playerDiceBag = this.parentElement
            dicepool.appendChild(this);
            grab.style.display = 'inline-block';
            if (playerDiceBag.childElementCount == 0) {
                alert('You won')
            }
        } else {
            alert('cannot be placed')
        }
    }
}

function button_click() {
    let dicebagnumber = players.value;
    let dicebagid = "dicebag"+dicebagnumber;
    let dicebag = document.getElementById(dicebagid);
    place_dice(dicebag, 1);
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}

function place_dice(spot, amount) {
    if (dice.length >= amount) {
        for (let index = 0; index < amount; index++) {
            shuffle(dice);
            const die = dice.pop();
            spot.appendChild(die);
        }
    } else {
        alert('Niet genoeg dobbelstenen, we schudden ze terug!');
        let amountOfDiceInPool = dicepool.childElementCount;
        for (let index = 0; index < amountOfDiceInPool-1; index++) {
            const die = dicepool.firstElementChild;
            dice.push(die);
            die.remove();
        }

        if (dice.length >= amount) {
            place_dice(spot, amount);
        }else{
            alert('game over!');
        }
    }
}

function setup(){
    build_all_dice();

    for (let index = 1; index <= 4; index++) {
        const element = document.getElementById("dicebag"+index);
        place_dice(element, 2);
    }

    place_dice(dicepool, 1);
    grab.addEventListener('click', button_click);
}

setup();