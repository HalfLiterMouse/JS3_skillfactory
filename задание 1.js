function func(arrayCity) {
    for (let key in arrayCity) {
        if (arrayCity.hasOwnProperty(key)) {
            console.log(`${key} = ${arrayCity[key]}`);
        }
    }
}

const arrayCity = {
    Польша: 'Варшава',
    Чехия: 'Прага',
    Швеция: 'Стокгольм'
}

func(arrayCity);