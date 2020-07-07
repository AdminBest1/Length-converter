// Idea of markup and converter from Traversy Media. Using Brackets and Bootstrap. Values to calculate were taken from Google converter. Google search used.

// input
const input = document.querySelector('#input');

// array from outputs (come to h4 with previous element sibling)
const outputs = Array.from(document.querySelectorAll('.converter__output'));

// Disabling input without unit selected & display none for output
input.setAttribute('disabled', '');
document.querySelector('#outputbox').style.display = "none";

// Calculate KILOMETERS function
function calcKm() {
    outputs[0].innerHTML = input.value * 3280.84; // to Feet
    outputs[1].innerHTML = input.value * 1093.61; // to Yards
    outputs[2].innerHTML = input.value / 1.852; // to Nautical mile
}

// Calculate YARDS function
function calcYards() {
    outputs[0].innerHTML = input.value / 1093.61; // to Kilometers
    outputs[1].innerHTML = input.value * 3; // to Feet
    outputs[2].innerHTML = input.value / 2025.37; // to Nautical mile
}

// Calculate FEET function
function calcFeet() {
    outputs[0].innerHTML = input.value / 3280.84; // to Kilometers
    outputs[1].innerHTML = input.value / 3; // to Yards
    outputs[2].innerHTML = input.value / 6076; // to Nautical mile
}

// Calculate NAUTICAL MILE function
function calcNm() {
    outputs[0].innerHTML = input.value * 1.852; // to Kilometers
    outputs[1].innerHTML = input.value * 2025.37; // to Yards
    outputs[2].innerHTML = input.value * 6076.12; // to Feet
}

// event when select changed
const select = document.querySelector('select');
select.addEventListener(`change`, changingSelect);

function changingSelect(e) {

    document.querySelector('#outputbox').style.display = ""; // Enable display

    // Enabling input
    input.removeAttribute('disabled', '');

    // KILOMETERS SELECTED
    if(e.target.value === "km") {

        // Adding h4s
        let units = ['Feet:', 'Yards:', 'Nautical mile:'];
        for(let i = 0; i < units.length; i++) {
            outputs[i].previousElementSibling.innerHTML = units[i];
        }

        // Calc Kilometers
        input.addEventListener(`input`, calcKm);

        // Double for already inputed value
        calcKm();
    }

    // YARDS SELECTED
    else if(e.target.value === "yard") {

        // Adding h4s
        let units = ['Kilometers:', 'Feet:', 'Nautical mile:'];
        for(let i = 0; i < units.length; i++) {
            outputs[i].previousElementSibling.innerHTML = units[i];
        }

        // Calculate event YARDS
        input.addEventListener(`input`, calcYards);

        // Double for already inputed value
        calcYards();
    }

    // FEET SELECTED
    else if(e.target.value === "feet") {

        // Adding h4s
        let units = ['Kilometers:', 'Yards:', 'Nautical mile:'];
        for(let i = 0; i < units.length; i++) {
            outputs[i].previousElementSibling.innerHTML = units[i];
        }

        // Calculate event FEET
        input.addEventListener(`input`, calcFeet);

        // Double for already inputed value
        calcFeet();
    }

    // NAUTICAL MILE SELECTED
    else if(e.target.value === "nm") {

        // Adding h4s
        let units = ['Kilometers:', 'Yards:', 'Feet:'];
        for(let i = 0; i < units.length; i++) {
            outputs[i].previousElementSibling.innerHTML = units[i];
        }

        // Calculate event NAUTICAL MILE
        input.addEventListener(`input`, calcNm)

        // Double for already inputed value
        calcNm();
    }
}

