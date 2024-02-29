let colors = ['color1','color2','color3']; // ← array 1
let sides = ['side1','side2','side3','side4','side5','side6']; // ← array 2

function build_die(die_color, die_side) {
    return '<div class="dobbelsteen '+die_color+' '+die_side+'"></div>';
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}

let dice = [];

// dobbelstenen verzamelen
for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    
    for (let index = 0; index < sides.length; index++) {
        const side = sides[index];
        
        const die = build_die(color, side)

        dice.push(die);
    }
}

function grab_dice(){
    if (dice.length > 0){
        shuffle(dice);
        const die = dice.pop();
        dicebag.innerHTML += die;
    } else {
        alert('Dobbelstenen zijn op!');
        this.remove();
    }
}

grab.addEventListener('click', grab_dice);