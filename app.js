window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateEcho);
};

function calculateEcho() {

    // ivs,lvWall
    const rv = parseFloat(document.querySelector("#rv").value);
    const la = parseFloat(document.querySelector("#la").value);
    const aorta = parseFloat(document.querySelector("#aorta").value);
    const ivs = parseFloat(document.querySelector("#ivs").value);
    const lvWall = parseFloat(document.querySelector("#lvWall").value);
    const lv = parseFloat(document.querySelector("#lv").value);

    let result = document.querySelector("#result");
    let rvResult;
    let laResult;
    let aortaResult;
    let wallsResult;
    let lvResult;
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

    //Умова для аорти
    if (aorta > 3.7) {
       aortaResult = `Дилятація висхідного відділу аорти. `
    } else {
        aortaResult = '';
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

     //Умова для лівого шлуночка
    if (lv > 5.7) {
       lvResult = `Дилятація лівого шлуночка. `
    } else {
        lvResult = '';
    }

    // Розміри камер серця в межах норми
    if (rvResult === '' && laResult === '' && aortaResult === '' && lvResult === '' && wallsResult === '') {
        norma = 'Розміри камер серця в межах норми. ';
    } else {
        norma = '';
    }

    ///Виведення інформації
    result.innerHTML = rvResult + laResult + aortaResult + lvResult + wallsResult + norma ;
}


///Завдання:
//зв'язати всі результати по інпутам в один і вивести в одне вікно
///зробити перевірку на введення null і undefined, букв, ком між числами

