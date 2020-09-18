// Имеем функцию getPerson(name, from, to), которая возвращает объект {name: name, age: Math.random()}.
// Необходимо:

// Создать массив из 5 таких объектов.
// Найти средний возраст и самого старшего человека.
// Вынести людей с одинаковым именем в отдельный массив.

let nameArr=['Колюсик','Валентинчик','Галечка','Олечка','Оксанка','Степка'];


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
function getArrPeople(){
	let  arr=[]
	for(let i=0;i<5;i++){
		arr.push(getPerson(getRandomName(nameArr),3,70))
	}
	return arr
}
	

// функция,которая возвращает средний возраст толпы
function averageAge(arr){
		let verage=0;
		arr.map((item) =>verage+=item.age);
		return  verage/arr.length
	}

//  Вычисляем старенького
 function old(arr){
	let a=[];
		arr.map((item) =>{
			return a.push(item.age)
	})
	return a=Math.max(...a)
 }

// Вычисляем одноименцев

function theSameName(arr){
	let count=arr.reduce(function(prev,item){
		prev[item.name]=(prev[item.name] || 0)+1;
		return  prev
},{})


let same= arr.filter(function(obj){
return count[obj.name]>1
})

return same
}

	// ----------------------------------------------------------------------
	
	console.log('---------------1-------------------');

	let arrPeople = getArrPeople();
	console.log('Человечий массив ', arrPeople);

	console.log('---------------2-------------------');

	let averageAg=averageAge(arrPeople);
	console.log('Средний возраст человечков: ', averageAg);

	let oldPerson= old(arrPeople);
	console.log('Возраст самого старого человек: ',oldPerson);

	console.log('---------------3-------------------');

	let sameN=theSameName(arrPeople)
	console.log('Людишки с одиковыми именами: ', theSameName(arrPeople));

