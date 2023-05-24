//Задание 5

// Переписать консольное приложение из Задания 4 на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными.
// Соблюдать best practices.
// Использовать синтаксис ES6.


//Классы

class PriborElectro {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  // если включен
  plugIn() {
    console.log(this.name + " включен(а) в розетку!");
    this.isPlugged = true;
  }
  
  // если выключен
  unplug() {
    console.log(this.name + " выключен(а) из розетки!");
    this.isPlugged = false;
  }
}

// Прибор 1 Лампа
class Lamp extends PriborElectro {
  constructor (name, brand, power, colorTemper) {
    super(name, power);
    this.brand = brand;
    this.colorTemper = colorTemper;
    this.isPlugged = true;
  }
}

// Прибор 2 Комп
class Computer extends PriborElectro {
  constructor(name, brand, power, memory, typeUse) {
    super(name, power); 
    this.brand = brand;
    this.memory = memory;
    this.typeUse = typeUse;
    this.isPlugged = false;
  }
}

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