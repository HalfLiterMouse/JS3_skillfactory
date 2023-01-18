function strInObj(str, arrayCity){
    if (line in arrayCity) return true;
    else return false
}

const arrayCity = {
    Польша: 'Варшава',
    Чехия: 'Прага',
    Швеция: 'Стокгольм'
}

const line = 'Польша';

console.log(strInObj(line, arrayCity));