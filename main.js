// Всем элементам типа Number добавить метод isPrime(), который возвращает true/false в зависимости от того, является число простым или нет.

Number.prototype.isPrime=function(){
	for(i=2,sqr=Math.sqrt(this);i<=sqr;i++){
		if(this%i===0){
			return false
		}
	}
	return this>1
}

// let x= 5
// console.log('x.isPrime(): ', x.isPrime());
