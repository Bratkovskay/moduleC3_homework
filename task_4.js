/*Задание 4

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase — для названий функций-конструкторов и классов;
информативные имена;
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса ES6 (кроме функции-конструкторов) и т.д.*/

//ФУНКЦИИ

function PriborElectro(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// если включен
PriborElectro.prototype.plugIn = function() {
    console.log(this.name + " включен(а) в розетку!");
    this.isPlugged = true;
};

// если выключен
PriborElectro.prototype.unplug = function() {
    console.log(this.name + " выключен(а) из розетки!");
    this.isPlugged = false;
};

// Прибор 1 Лампа
function Lamp(name, brand, power, colorTemper) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.colorTemper = colorTemper;
    this.isPlugged = true;
}

Lamp.prototype = new PriborElectro();

// Прибор 2 Ноут
function Computer(name, brand, power, memory, typeUse) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.memory = memory;
    this.typeUse = typeUse;
    this.isPlugged = false;
}

Computer.prototype = new PriborElectro();

// экземпляр лампы
const decorLamp = new Lamp("Decor lamp", "Эра NLED", 5, "Warm");

// экземпляр компьютера
const lapTop = new Computer("Laptop", "HP", 120, "256 Гб", "game");

// Лампа выключена
decorLamp.unplug();

// Ноут включен
lapTop.plugIn();

// результат
console.log(lapTop)
console.log(decorLamp)