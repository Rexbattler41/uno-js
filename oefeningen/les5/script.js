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
    dice.push(this);
    this.remove();
    grab.style.display = 'inline-block'
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
    let dicebagNumber = players.value;
    let dicebagId = "dicebag"+dicebagNumber;
    let dicebag = document.getElementById(dicebagId);

    if (dice.length > 0) {
        shuffle(dice);
        const die = dice.pop();
        dicebag.appendChild(die);
    } else {
        alert('Dobbelstenen zijn op!');
        this.style.display = 'none';
    }
}

grab.addEventListener('click', grab_die);