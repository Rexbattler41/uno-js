let colors = ['color1','color2','color3','color4']; // ← array 1
let nummers = ['nr0','nr1','nr1','nr2','nr2','nr3','nr3','nr4','nr4','nr5','nr5','nr6','nr6','nr7','nr7','nr8','nr8','nr9','nr9','nr_plus2','nr_plus2','nr_reverse','nr_reverse','nr_skip','nr_skip','nr_joker','nr_plus4']; // ← array 2

function build_card(card_color, card_nummer) {
    let button = document.createElement('button');
    button.classList.add('card');
    button.classList.add(card_color);
    button.classList.add(card_nummer);

    button.onclick = card_click;

    return button;
}

function card_click() {
    deck.push(this);
    this.remove();
    grab.style.display = 'inline-block'
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}

let deck = [];

for (let index = 0; index < colors.length; index++){
    const color = colors[index];
    for (let index = 0; index < nummers.length; index++){
        const nummer = nummers[index];
        const card = build_card(color, nummer);
        deck.push(card)
    }
}

function grab_card(){
    if (deck.length > 0){
        shuffle(deck);
        const Deck = deck.pop();
        carddeck.appendChild(Deck);
    } else {
        alert('Kaarten zijn op!');
        this.style.display = 'none';
    }
}

grab.addEventListener('click', grab_card);