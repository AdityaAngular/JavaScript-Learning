// ------------------------------------ Program 1 ------------------------------
let name={
	firstName:"Adiya",
	lastName:"pal",
	printFUllName: function(){
		console.log(this.firstName,this.lastName);
	}
}

let name2={
	firstName:"kunal",
	lastName:"Kapil"
}

name.printFUllName.call(name2);

//  ----------------------------------- Program 2 ------------------------------

let yourEducation =function(degree1, degree2, degree3){
	console.log(degree1,degree2,degree3,this.name)
}

let yourName={
	name:"Aditya"
}

yourEducation.apply(yourName,["class10","class12","b-tech"]); //Output-class10 class12 b-tech Aditya

// ------------------------------------ Program 3 ------------------------------
function showVal(arg){
	console.log(arg[0],arg[1])
}

showVal(1,2);
// showVal(['ravi','aditya']);