window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateEcho);
};

function calculateEcho() {

    // ivs,lvWall
    const rv = parseFloat(document.querySelector("#rv").value);
    const la = parseFloat(document.querySelector("#la").value);
    const ivs = parseFloat(document.querySelector("#ivs").value);
    const lvWall = parseFloat(document.querySelector("#lvWall").value);

    let result = document.querySelector("#result");
    let rvResult;
    let laResult;
    let wallsResult;
    let norma;

    //Умова для ПШ
    if (rv > 2.6) {
       rvResult = `Дилятація правого шлуночка. `
    } else {
        rvResult = '';
    }

    //Умова для ЛП
    if (la > 4) {
       laResult = `Дилятація лівого передсердя. `
    } else {
        laResult = '';
    }

    // Умови для МШП і ЗСЛШ
    if (ivs > 1.1 && lvWall > 1.1) {
        wallsResult = `Гіпертрофія стінок лівого шлуночка. `;
} else if (ivs > 1.1) {
    wallsResult = `Гіпертрофія міжшлуночкової перегородки. `;
    } else if (lvWall > 1.1){
        wallsResult = `Гіпертрофія задньої стінки лівого шлуночка. `;
    } else {
        wallsResult = '';
    }

    // Розміри камер серця в межах норми
    if (rvResult === '' && wallsResult === '') {
        norma = 'Розміри камер серця в межах норми. ';
    } else {
        norma = '';
    }

    ///Виведення інформації
    result.innerHTML = rvResult + laResult + wallsResult + norma ;
}


///Завдання:
//зв'язати всі результати по інпутам в один і вивести в одне вікно
///зробити перевірку на введення null і undefined, букв, ком між числами

