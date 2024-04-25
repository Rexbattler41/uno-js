let Card = [];
let cardpool = document.getElementById('cardpool');

function build_card(die_color, die_side) {
    let button = document.createElement('button');
    button.classList.add('card');
    button.classList.add(die_color);
    button.classList.add(die_side);

    button.onclick = die_click;

    return button;
}

function build_all_dice(){
    let colors = ['color1','color2','color3','color4']; // ← array 1
    let nummers = ['nr0','nr1','nr1','nr2','nr2','nr3','nr3','nr4','nr4','nr5','nr5','nr6','nr6','nr7','nr7','nr8','nr8','nr9','nr9','nr_plus2','nr_plus2','nr_reverse','nr_reverse','nr_skip','nr_skip','nr_joker','nr_plus4']; // ← array 2


    // dobbelstenen verzamellen 
    for (let index = 0; index < colors.length; index++) {
        const color = colors[index];
    
        for (let index = 0; index < nummers.length; index++) {
            const nummer = nummers[index];
            const card = build_card(color, nummer);
            Card.push(card);
        }
    }
}

function die_click() {
    if (this.parentElement.id != 'cardpool'){
        let canBePlaced = false;
        
        let lastInCardpool = cardpool.lastElementChild;
        let classes =lastInCardpool.classList;

        for (let index = 0; index < classes.length; index++) {
            const elementClass = classes[index];
            if (elementClass != 'card' && canBePlaced == false) {
                canBePlaced = this.classList.contains(elementClass)
            }
        }

        if (canBePlaced) {
            let playerCardDeck = this.parentElement
            cardpool.appendChild(this);
            grab.style.display = 'inline-block';
            if (playerCardDeck.childElementCount == 0) {
                alert('You won')
            }
        } else {
            alert('cannot be placed')
        }
    }
}

function button_click() {
    let carddecknumber = players.value;
    let carddeckid = "carddeck"+carddecknumber;
    let carddeck = document.getElementById(carddeckid);
    give_card(carddeck, 1);
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}

function give_card(spot, amount) {
    if (Card.length >= amount) {
        for (let index = 0; index < amount; index++) {
            shuffle(Card);
            const card = Card.pop();
            spot.appendChild(card);
        }
    } else {
        alert('Niet genoeg dobbelstenen, we schudden ze terug!');
        let amountOfCardInPool = cardpool.childElementCount;
        for (let index = 0; index < amountOfCardInPool-1; index++) {
            const card = cardpool.firstElementChild;
            Card.push(card);
            card.remove();
        }

        if (Card.length >= amount) {
            give_card(spot, amount);
        }else{
            alert('game over!');
        }
    }
}

function setup(){
    build_all_dice();

    for (let index = 1; index <= 4; index++) {
        const element = document.getElementById("carddeck"+index);
        give_card(element, 2);
    }

    give_card(cardpool, 1);
    grab.addEventListener('click', button_click);
}

setup();