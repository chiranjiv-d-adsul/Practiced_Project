calculateTemp = () => {
    const numberTemp = parseFloat(document.getElementById('temp').value);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    };

    const FahTocel = (fahr) => {
        let celsius = Math.round((fahr - 32) * 5/9);
        return celsius;
    };

    let result;
    if (valueTemp === 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `${result} Fahrenheit`;
    } else {
        result = FahTocel(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `${result} Celsius`;
    }
};









