window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateEcho);
};

function calculateEcho() {

    // ivs,lvWall
    const rv = parseFloat(document.querySelector("#rv").value);
    const ivs = parseFloat(document.querySelector("#ivs").value);
    const lvWall = parseFloat(document.querySelector("#lvWall").value);

    let result = document.querySelector("#result");
    let rvResult;
    let wallsResult;
    let norma;

    //Умова для ПШ
    if (rv > 2.6) {
       rvResult = `Дилятація правого шлуночка. `
    } else {
        rvResult = '';
    }

    // Умови для МШП і ЗСЛШ
    if (ivs > 1.1 && lvWall > 1.1) {
        wallsResult = `Гіпертрофія стінок ЛШ. `;
} else if (ivs > 1.1) {
    wallsResult = `Гіпертрофія МШП. `;
    } else if (lvWall > 1.1){
        wallsResult = `Гіпертрофія задньої стінки ЛШ. `;
    } else {
        wallsResult = '';
    }

    // Розміри камер серця в межах норми
    if (rvResult === '' && wallsResult === '') {
        norma = 'Розміри камер серця в межах норми';
    } else {
        norma = '';
    }

    ///Виведення інформації
    result.innerHTML = rvResult + wallsResult + norma ;
}


///Завдання:
//зв'язати всі результати по інпутам в один і вивести в одне вікно
///зробити перевірку на введення null і undefined, букв, ком між числами

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

