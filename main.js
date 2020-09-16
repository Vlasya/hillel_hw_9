// Имеем функцию getPerson(name, from, to), которая возвращает объект {name: name, age: Math.random()}.
// Необходимо:

// Создать массив из 5 таких объектов.
// Найти средний возраст и самого старшего человека.
// Вынести людей с одинаковым именем в отдельный массив.

let nameArr=['Колюсик','Валентинчик','Галечка','Олечка','Оксанка','Степка'];
let arrPeople= [];

//  Нет в ТЗ,но так интереснее. Рандомные имена
function getRandomName(arr){
	let randomName= Math.floor(Math.random()*arr.length);
	return arr[randomName]
}

// Получаем рамдомный человечий возраст
function getRandomNumber(min,max){
	return Math.floor(Math.random()*(max-min)+min)
}

// Получаем нового человечка с именем и возрастом
function getPerson(name, from, to){
	return{
		name:name,
		age:getRandomNumber(from,to),
	}
}

// Человечий массив с рандомными именами и возрастом
	for(let i=0;i<5;i++){
		arrPeople.push(getPerson(getRandomName(nameArr),3,70))
	}
	
	let averageAge=0;
	let maxAge=0;
	arrPeople.forEach(function(item,index,arr){
		console.log('item: ', item.age);
		averageAge+=Math.ceil(item.age/arr.length)
		maxAge=Math.max(item.age)

		return averageAge,maxAge
	})
console.log(averageAge);
console.log(maxAge);
console.log('Человечий массив ', arrPeople);



 