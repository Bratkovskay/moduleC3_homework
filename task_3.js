/*Задание 3
Написать функцию, которая создает пустой объект, но без прототипа.*/


function nullObj() {
  return Object.create(null);
}
