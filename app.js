window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateEcho);
};

function calculateEcho() {
    let ivs = parseFloat(document.querySelector("#ivs").value);

    let result = document.querySelector("#result");

    if (ivs > 1.1) {
        result.innerHTML = `Гіпертрофія МШП`;
} else {
    result.innerHTML = `Норма`;
    }
}


// let ivs = 1.1


// if (ivs >1.1) {
//     console.log('Гіпертрофія МШП')
// } else {
//     console.log('Норма')
// }

// const ivs = document.querySelector('#ivs.textContent')
// console.log(ivs)

// if (ivs >1.1) {
//     console.log('Гіпертрофія МШП')
// } else {
//     console.log('Норма')
// }

