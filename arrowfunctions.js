var names = ['tom', 'dick', 'jane'];

names.forEach(function(name){
	console.log(name);
})


names.forEach((name)=>{console.log(name);})

names.forEach((name)=> console.log(name))

var returnMe = (name) => name + "!";

console.log(returnMe("jim"));

var person = {
	name: "john",
	greet: function(){
		names.forEach((name)=>{console.log(this.name + "says hi to" + name)})
	}
}

person.greet();

var add = (a, b)=> a+b;

console.log(add(1, 23));