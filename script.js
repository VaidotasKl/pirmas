document.addEventListener("DOMContentLoaded", function () {
    document.title = "nesigauna";
    document.getElementById("manas").innerHTML = "naujas tekstas";
    // document.getElementById("removable").innerHTML = "";


    function calculate(number, time, callback) {
        setTimeout(() => {
            const result = number * 2;
            callback(result);
        }, time);
    }
    function showResult(resultatas) {
        console.log('Rezultatas:', resultatas); // Spausdiname rezultatą į konsolę
    }

    // Naudojame funkciją calculate su skaičiumi 5, laiku 1000ms ir callback funkcija showResult
    calculate(15, 1000, showResult);

    const container = document.getElementById("container");
    const removable = document.getElementById("removable");
    container.removeChild(removable);

    const cars = ['audi', 'bmw', 'volvo', 'maz', 'kraz'];
    for (let i = 0; i < cars.length; i++) {console.log(cars[i]);}

    
});








