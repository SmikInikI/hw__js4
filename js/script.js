//------Задание 1


let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]); 
}


//------Задание 2

let arra = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arra.length; i++) {
	if (arra[i] < -3 && arra[i] > -10) {
		console.log(arra[i]);
	}
}


//------Задание 3


//------Задание 4

let arre = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arre.length; i++) {
  let num = String(arre[i]);
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}


//------Задание 5

let arrq = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
 
for (let i = 0; i < arrq.length; i++) {
    if (arrq[i] == 'сб' || arrq[i] == 'вс') {
        document.write('<b>' + arrq[i] + '</b> ');
    } else {
        document.write(arrq[i] + ' ');
    }
 
}


//------Задание 6


let arrs = [1, 2, 3];
console.log(arrs[arrs.length - 1])


//------Задание 7

let num = 0;
let arrh = [];

while (true) {
    let num = prompt('Введите число');
    if (num == '' || num == 0) {
        alert('Ошибка ввода');
        break;
    } else {
        arrh.push(num);
    }
}
console.log(arrh.sort());


//------Задание 8


let arrb = [12, false, 'Текст', 4, 2, -5, 0];

console.log(arrb.reverse());
