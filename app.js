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

    let alertNotification = document.querySelector('#alert');
    let result = document.querySelector("#result");
    let rvResult;
    let laResult;
    let aortaResult;
    let wallsResult;
    let lvResult;
    let norma;

    //Умова для ПШ
    // if (rv > 2.6) {
    //    rvResult = `Дилятація правого шлуночка. `
    // } else {
    //     rvResult = '';
    // }

    if (rv === '' ) {
        // alert('Введіть розмір Правого шлуночка у см')
        alertNotification1 = 'Введіть розмір у см';
    } else if (isNaN(rv)) {
        // alert('Введіть числове значення розміру Правого шлуночка у см')
        alertNotification1 = 'Введіть числове значення';
    } else if (rv <= 0) {
        // alert('Введіть додатнє число розміру Правого шлуночка у см')
        alertNotification1 = 'Введіть додатнє число';
    } else if (rv > 7) {
        // alert('Введене значення для розміру Правого шлуночка у см є завеликим')
        alertNotification1 = 'Введене значення є завеликим';
    } else if (rv > 2.6) {
        rvResult = `Дилятація правого шлуночка. `;
        alertNotification1 = '';
    } else if (rv < 0.9) {
        rvResult = `Розміри правого шлуночка є нижчими від норми. `;
        alertNotification1 = '';
    } else {
        rvResult = '';
        alertNotification1 = '';
    }

    //Створити масив даних, де завести всі дані про конкретний відділ серця, параметри для проходження перевірки тощо
    //створити фунецію/цикл, які автоматично проганятимуть ці перевірки

    //Умова для ЛП
    if (la > 4) {
        laResult = `Дилятація лівого передсердя. `;
    } else {
        laResult = '';
    }

    //Умова для аорти
    if (aorta > 3.7) {
        aortaResult = `Дилятація висхідного відділу аорти. `;
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

    // console.log(result);
    // console.log(typeof(result));

    // result.innerHTML = rvResult + laResult + aortaResult + lvResult + wallsResult + norma;

    result.textContent = rvResult + laResult + aortaResult + lvResult + wallsResult + norma;

    alertNotification.textContent = alertNotification1;
    // console.log(result);

    // console.log(alertNotification1);
    
}


///Завдання:
//зв'язати всі результати по інпутам в один і вивести в одне вікно
///зробити перевірку на введення null і undefined, букв, ком між числами

