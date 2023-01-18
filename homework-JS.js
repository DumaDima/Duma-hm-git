//task 1
let hamburger = 2;
let fries = 4;
    if (hamburger >= 3 && fries >2){
    console.log('Всі наїлися!!');
       }   else {
    console.log('Ми ідем в інше кафе');
};
//task 2
let tShirt = 1900
    if(tShirt > 999 && tShirt <= 1900){
        console.log(tShirt)
    }
//task 3 variant 1
let tShirt1 = 2000
    if(tShirt1 < 1000 || tShirt1 > 1900){
        console.log(tShirt1)
    }
   //task 3 variant 2
    let tShirt2 = 1200
    if(tShirt2 < 1000 != tShirt2 > 1900){
        console.log(tShirt2)
    }
    //task 4
   let season = 5;
   if(season == 1){
    console.log('Winter')
   }
   else if(season == 2){
    console.log('Spring')
   }
    else if(season == 3){
    console.log('Summer')
    }
    else if(season == 4){
    console.log('Aumumn')
    }
    else{
        console.log('information not found')
    }
    //task 5
    let a = 1;
    let b = 3;
    let c = 5;
    if(a<b && c>b){
        console.log (b);
    }
//task 6
let number = '5'
switch(number){
    case'1':
        console.log('Понеділок')
        break;
    case'2':
        console.log('Вівторок')
        break;
    case'3':
        console.log('Середа')
        break;
    case'4':
        console.log('Четвер')
        break;
    case'5':
        console.log('Пятниця')
        break;
    case'6':
        console.log('Субота')
        break;
    case'7':
        console.log('Неділя')
        break;
    default: 
        console.log('This is default output')
        break;
}
//task 7
let number1 = 100
switch (number1*2){
case 200:
    console.log('Множення на 2') 
    break;
default: 
        console.log('This is default output')
        break;
}
let number2 = 100
switch (number2+2){
    case 102:
    console.log('Додавання до числа') 
    break;
    default: 
        console.log('This is default output')
        break;
}
let number3 = 100
switch (number3-2){
    case 98:
    console.log('Віднімання від числа') 
    break;
    default: 
        console.log('This is default output')
        break;
}
let number4 = 100
switch (number4/2){
    case 50:
    console.log('Ділення числа на 2') 
    break;
    default: 
        console.log('This is default output')
        break;
}
