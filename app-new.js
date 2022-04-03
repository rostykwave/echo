
///Main
window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateEcho);
};

function calculateEcho() {

    // ivs,lvWall
    // const rv = parseFloat(document.querySelector("#rv").value);
    // const la = parseFloat(document.querySelector("#la").value);
    const rv = 4;
    const la = 4;
    const aorta = 3.9;
    const ivs = 2;
    const lvWall = 2;
    const lv = 7;

    // const aorta = parseFloat(document.querySelector("#aorta").value);
    // const ivs = parseFloat(document.querySelector("#ivs").value);
    // const lvWall = parseFloat(document.querySelector("#lvWall").value);
    // const lv = parseFloat(document.querySelector("#lv").value);

    let alertNotificationHTML = document.querySelector('#alert');
    let alertNotification = '';
    let resultHTML = document.querySelector("#result");
    let result = '';
    // let rvResult;
    // let laResult = 'StartL';
    let aortaResult;
    let wallsResult;
    let lvResult;
    let norma;
    let functionResult = '';

   

    ///array of objects
    const heartChambers = [
        { logName: 'rv', name: rv, uaname: 'правого шлуночка', min: 0.9, max: 2.6, maxmax: 5, results: '' },
        { logName: 'la', name: la, uaname: 'лівого передсердя', min: 1.9, max: 4, maxmax: 8, results: '' },
        { logName: 'aorta', name: aorta, uaname: 'аорти', min: 2, max: 3.7, maxmax: 8, results: '' },
        { logName: 'lv', name: lv, uaname: 'лівого шлуночка', min: 3.5, max: 5.7, maxmax: 9, results: '' },
    ]

    const heartWalls = [
        { logName: 'ivs', name: ivs, uaname: 'міжшлуночкової перегородки', min: 0.6, max: 1.1, maxmax: 4, results: '' },
        { logName: 'lvWall', name: lvWall, uaname: 'задньої стінки лівого шлуночка', min: 0.6, max: 1.1, maxmax: 4, results: '' },
    ]


   

    /////Функція з перевірки розмірів
    const checkDimension = function (heartPart) {
        if (isNaN(heartPart)) {
            alertNotification = 'Введіть числове значення';
        } else if (heartPart <= 0) {
            alertNotification = 'Введіть додатнє число';
        } else if (heartPart > maxmaxP) {
            alertNotification = 'Введене значення є завеликим';
        } else if (heartPart > maxP) {
            functionResult = 'D';
            alertNotification = '';
        } else if (heartPart < minP) {
            functionResult = 'S';
            alertNotification = '';
        } else {
            functionResult = 'N';
            alertNotification = '';
        }
        
        return functionResult;
    }


    //////Стратегія

    // 1 - перебір масиву об'єктів
    // введення в масив змінної для рузультату

    // 2 - виокремлення змінних для розміру
    // 3 - прогін через функцію checkDimunsions
    // 4 - видається особситий рузультат в свою змінну: N, D, S
    // 5 - логіка, яка порівнює і дає зважений результат


    /////Перевірка дилятації
    const results = [];
    let dilatation = 'Дилятація '

    for (const heartPart of heartChambers) {
        console.log(heartPart.name);
        ///тимчасові змінні
        uanameP = heartPart.uaname;
        minP = heartPart.min;
        maxP = heartPart.max;
        maxmaxP = heartPart.maxmax;
        ///////
        ////виконання функції з перевірки розмірів
        checkDimension(heartPart.name);
        ///завпис в об'єкт масива
        heartPart.results = functionResult;
        results.push(functionResult);

        ///додавання в змінну тексту через кому
        
        if (functionResult === 'D') {
            dilatation += `${heartPart.uaname}, `;
        }

    }
   
    ///вивід таблиці заповненого масива
    console.table(heartChambers);
    
    console.log(results);
    console.log(dilatation);
    ///перебір масиву та інтерпретація
    

    for (let i = 0; i < results.length; i += 1) {
       
        if (results[0] === 'D' && results[1] === 'D' && results[2] === 'D' && results[3] === 'D') {
            result = 'Дилятація всіх камер серця. '
        } else if (results[0] === 'D' && results[3] === 'D' && results[1] === 'D') {
            result = 'Дилятація лівого передсердя та шлуночків серця. '
        } else if (results[0] === 'D' && results[3] === 'D' && results[2] === 'D') {
            result = 'Дилятація аорти та шлуночків серця. '
        } else if (results[0] === 'D' && results[3] === 'D') {
            result = 'Дилятація шлуночків серця. '
        } else if (results[0] !== 'D' && results[1] !== 'D' && results[2] !== 'D' && results[3] !== 'D') {
            result = 'Розміри камер серця в межах норми. '
        } else {
            result = dilatation.slice(0, dilatation.length - 2) + '. ';
        }
    }

    console.log(result);






    //////Перевірка МШПі і ЗС
    ///зробити це функцією (додавання результатів в масив)

    const resultsWalls = [];
   

    for (const heartPart of heartWalls) {
        console.log(heartPart.name);
        ///тимчасові змінні
        uanameP = heartPart.uaname;
        minP = heartPart.min;
        maxP = heartPart.max;
        maxmaxP = heartPart.maxmax;
        ///////
        ////виконання функції з перевірки розмірів
        checkDimension(heartPart.name);
        ///завпис в об'єкт масива
        heartPart.results = functionResult;
        resultsWalls.push(functionResult);

        ///додавання в змінну тексту через кому
        
        //     if (functionResult === 'D') {
        //        dilatation += `${heartPart.uaname}, `;
        //    }

    }
    console.log(resultsWalls);

    for (let i = 0; i < resultsWalls.length; i += 1) {
       
        if (resultsWalls[0] === 'D' && resultsWalls[1] === 'D') {
            result += 'Гіпертрофія стінок лівого шлуночка';
        } else if (resultsWalls[0] === 'D') {
            result += 'Гіпертрофія міжшлуночкової перегородки';
        } else {
            result += 'Гіпертрофія задньої стінки лівого шлуночка';
        }

        console.log(result);

        ////Вивід в HTML
        alertNotificationHTML.textContent = alertNotification;
        resultHTML.textContent = result;
    }


    ////Висновки розділити функції для камер і для стінок, різні масиви

    //Стрічка для зменшених розмірів

    // послідовне об'єднання стрічок в один result += dilatation += walls += smallSize

    ///Розібратись як виввести ноорму коли нема дилятації

    ///зробити функцію для МШП і ЗСЛШ

    ///work with alert

}