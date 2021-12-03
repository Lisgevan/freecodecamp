/* TODO: Use the code below to add result and arguments to the DOM
 const outcomeEL = document.querySelector( "#outcome" );

 const showResult = result => {
 	console.dir(result("10011")[1][0]);
 	outcomeEL.innerHTML += `For "${result("10011")[1][0]}", the result is: ${result("10011")[0]}` + "<br />";
 };

 let result = function convertToInteger(str) {
 	const a = parseInt(str, 2);
 	return [a, arguments];
 };

 showResult(result);


//--------------------------------------------//
*/
const oop = document.querySelector(".js-oop");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const oopResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		oop.innerHTML += `
        <button
                class="border-solid border-4 border-light-blue-500  text-center accordion p-4 font-black bg-gray-400 hover:bg-red-700 rounded-sm"><div>Section-${
					item["section"] < 10 ? "0" + item["section"] : item["section"]
				}:</div>
                <div> ${item["title"]}</div>
                </button>
        <div class="panel bg-blue-100 p-4">
            <p class="underline">The solution is:</p> <pre> <code class="overflow-ellipsis">${
				item["solution"]
			}</code> </pre>
        </div>
        `;
	}
};

// const showResult = result => {
// 	// console.dir(result[0]["section"]);
// 	for (let item of result) {
// 		console.dir(item["section"]);
// 		entryEL.innerHTML += `
//         <h3 id='js-title' class="font-bold underline">
//         ${item["title"]}
//         </h3>
//         <p class="flex-wrap"><pre id='js-outcome'>
//         For section-${
// 			item["section"] < 10 ? "0" + item["section"] : item["section"]
// 		}, the result is: <code class="overflow-ellipsis">${item["solution"]}</code>
//         <hr />
//         </pre></p>
//         `;
// 	}
// };

const oopList = [
	{
		section: 01,
		title: `Create a Basic JavaScript Object`,
		exercise: `Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.`,
		starterCode: `
		let dog = {

		};
		`,
		solution: `
		let dog = {
			name: "dog",
			numLegs: 4,
		};
		`,
	},
	{
		section: 02,
		title: `Use Dot Notation to Access the Properties of an Object`,
		exercise: `Print both properties of the dog object to your console.`,
		starterCode: `
		let dog = {
			name: "Spot",
			numLegs: 4
		};
		// Only change code below this line
		`,
		solution: `
		let dog = {
			name: "Spot",
			numLegs: 4
		};
		// Only change code below this line
		console.log(dog.name)
		console.log(dog.numLegs)
		`,
	},
	{
		section: 03,
		title: `Create a Method on an Object`,
		exercise: `Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.`,
		starterCode: `
		let dog = {
			name: "Spot",
			numLegs: 4,

		};

		dog.sayLegs();
		`,
		solution: `
		let dog = {
			name: "Spot",
			numLegs: 4,
			sayLegs:()=>{
				return 'This dog has 4 legs.'
		}
		};

		dog.sayLegs();
		`,
	},
	{
		section: 04,
		title: `Make Code More Reusable with the this Keyword`,
		exercise: `Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.`,
		starterCode: `
		let dog = {
			name: "Spot",
			numLegs: 4,
			sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
		};

		dog.sayLegs();
		`,
		solution: `
		let dog = {
			name: "Spot",
			numLegs: 4,
			sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
		};

		dog.sayLegs();
		`,
	},
	{
		section: 05,
		title: `Define a Constructor Function`,
		exercise: `Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.`,
		starterCode: `
		
		`,
		solution: `
		function Dog(){
			this.name = "Dog";
			this.color = "black";
			this.numLegs = 4;
		}
		`,
	},
	{
		section: 06,
		title: `Use a Constructor to Create Objects`,
		exercise: `Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.`,
		starterCode: `
		function Dog() {
			this.name = "Rupert";
			this.color = "brown";
			this.numLegs = 4;
		}
		// Only change code below this line
		`,
		solution: `
		function Dog() {
			this.name = "Rupert";
			this.color = "brown";
			this.numLegs = 4;
		}
		// Only change code below this line

		let hound = new Dog()
		`,
	},
	{
		section: 07,
		title: `Extend Constructors to Receive Arguments`,
		exercise: `Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.`,
		starterCode: `
		function Dog() {

		}
		`,
		solution: `
		function Dog(name, color, numLegs=4) {
			this.name = name;
			this.color = color;
			this.numLegs = numLegs;
		}

		const terrier= new Dog('doggy', 'black')
		`,
	},
	{
		section: 08,
		title: `Verify an Object's Constructor with instanceof`,
		exercise: `Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.`,
		starterCode: `
		function House(numBedrooms) {
			this.numBedrooms = numBedrooms;
		}

		// Only change code below this line
		`,
		solution: `
		function House(numBedrooms) {
			this.numBedrooms = numBedrooms;
		}

		// Only change code below this line
		const myHouse = new House(2);

		myHouse instanceof House;
		`,
	},
	{
		section: 09,
		title: `Understand Own Properties`,
		exercise: `Add the own properties of canary to the array ownProps.`,
		starterCode: `
		function Bird(name) {
			this.name = name;
			this.numLegs = 2;
		}

		let canary = new Bird("Tweety");
		let ownProps = [];
		// Only change code below this line
		`,
		solution: `
		function Bird(name) {
			this.name = name;
			this.numLegs = 2;
		}

		let canary = new Bird("Tweety");
		let ownProps = [];
		// Only change code below this line
		for (let property in canary) {
			if(canary.hasOwnProperty(property)) {
				ownProps.push(property);
			}
		}
		`,
	},
	{
		section: 10,
		title: `Use Prototype Properties to Reduce Duplicate Code`,
		exercise: `Add a numLegs property to the prototype of Dog`,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}



		// Only change code above this line
		let beagle = new Dog("Snoopy");
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		Dog.prototype.numLegs=4;

		// Only change code above this line
		let beagle = new Dog("Snoopy");
		`,
	},
	{
		section: 11,
		title: `Iterate Over All Properties`,
		exercise: `Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.`,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}

		Dog.prototype.numLegs = 4;

		let beagle = new Dog("Snoopy");

		let ownProps = [];
		let prototypeProps = [];

		// Only change code below this line
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		Dog.prototype.numLegs = 4;

		let beagle = new Dog("Snoopy");

		let ownProps = [];
		let prototypeProps = [];

		// Only change code below this line
		for (let property in beagle) {
			if(beagle.hasOwnProperty(property)) {
				ownProps.push(property);
			} else {
				prototypeProps.push(property);
			}
		}
		`,
	},
	{
		section: 12,
		title: `Understand the Constructor Property`,
		exercise: `Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
`,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}

		// Only change code below this line
		function joinDogFraternity(candidate) {

		}
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		// Only change code below this line
		function joinDogFraternity(candidate) {
			return candidate.constructor===Dog;
		}
		`,
	},
	{
		section: 13,
		title: `Change the Prototype to a New Object`,
		exercise: `Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.`,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}

		Dog.prototype = {
		// Only change code below this line

		};
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		Dog.prototype = {
		// Only change code below this line
			numLegs: 4,
			eat: function(){},
			describe: function(){},
		};
		`,
	},
	{
		section: 14,
		title: `Remember to Set the Constructor Property when Changing the Prototype`,
		exercise: `Define the constructor property on the Dog prototype.`,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}

		// Only change code below this line
		Dog.prototype = {

			numLegs: 4,
			eat: function() {
				console.log("nom nom nom");
			},
			describe: function() {
				console.log("My name is " + this.name);
			}
		};
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		// Only change code below this line
			Dog.prototype = {
			constructor:Dog,
			numLegs: 4,
			eat: function() {
				console.log("nom nom nom");
			},
			describe: function() {
				console.log("My name is " + this.name);
			}
		};
		`,
	},
	{
		section: 15,
		title: `Understand Where an Object’s Prototype Comes From`,
		exercise: `Use isPrototypeOf to check the prototype of beagle.`,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}

		let beagle = new Dog("Snoopy");

		// Only change code below this line
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		let beagle = new Dog("Snoopy");

		// Only change code below this line
		Dog.prototype.isPrototypeOf(beagle);
		`,
	},
	{
		section: 16,
		title: `Understand the Prototype Chain`,
		exercise: ``,
		starterCode: `
		function Dog(name) {
			this.name = name;
		}

		let beagle = new Dog("Snoopy");

		Dog.prototype.isPrototypeOf(beagle);  // yields true

		// Fix the code below so that it evaluates to true
		???.isPrototypeOf(Dog.prototype);
		`,
		solution: `
		function Dog(name) {
			this.name = name;
		}

		let beagle = new Dog("Snoopy");

		Dog.prototype.isPrototypeOf(beagle);  // yields true

		// Fix the code below so that it evaluates to true
		Object.prototype.isPrototypeOf(Dog.prototype);
		`,
	},
	{
		section: 17,
		title: `Use Inheritance So You Don't Repeat Yourself`,
		exercise: `The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.`,
		starterCode: `
		function Cat(name) {
			this.name = name;
		}

		Cat.prototype = {
			constructor: Cat,
			eat: function() {
				console.log("nom nom nom");
			}
		};

		function Bear(name) {
			this.name = name;
		}

		Bear.prototype = {
			constructor: Bear,
			eat: function() {
				console.log("nom nom nom");
			}
		};

		function Animal() { }

		Animal.prototype = {
			constructor: Animal,

		};
		`,
		solution: `
		function Cat(name) {
			this.name = name;
		}

		Cat.prototype = {
			constructor: Cat,
		};

		function Bear(name) {
			this.name = name;
		}

		Bear.prototype = {
			constructor: Bear,
		};

		function Animal() { }

		Animal.prototype = {
			constructor: Animal,
			eat: function() {
				console.log("nom nom nom");
			}
		};
		`,
	},
	{
		section: 18,
		title: `Inherit Behaviors from a Supertype`,
		exercise: `Use Object.create to make two instances of Animal named duck and beagle.`,
		starterCode: `
		function Animal() { }

		Animal.prototype = {
			constructor: Animal,
			eat: function() {
				console.log("nom nom nom");
			}
		};

		// Only change code below this line

		let duck; // Change this line
		let beagle; // Change this line
		`,
		solution: `
		function Animal() { }

		Animal.prototype = {
			constructor: Animal,
			eat: function() {
				console.log("nom nom nom");
			}
		};

		// Only change code below this line

		let duck=Object.create(Animal.prototype); // Change this line
		let beagle=Object.create(Animal.prototype); // Change this line
		`,
	},
	{
		section: 19,
		title: `Set the Child's Prototype to an Instance of the Parent`,
		exercise: `Modify the code so that instances of Dog inherit from Animal.`,
		starterCode: `
		function Animal() { }

		Animal.prototype = {
			constructor: Animal,
			eat: function() {
				console.log("nom nom nom");
			}
		};

		function Dog() { }

		// Only change code below this line


		let beagle = new Dog();
		`,
		solution: `
		function Animal() { }

		Animal.prototype = {
			constructor: Animal,
			eat: function() {
				console.log("nom nom nom");
			}
		};

		function Dog() { }

		// Only change code below this line
		Dog.prototype = Object.create(Animal.prototype);

		let beagle = new Dog();
		`,
	},
	{
		section: 20,
		title: `Reset an Inherited Constructor Property`,
		exercise: `Fix the code so duck.constructor and beagle.constructor return their respective constructors.`,
		starterCode: `
		function Animal() { }
		function Bird() { }
		function Dog() { }

		Bird.prototype = Object.create(Animal.prototype);
		Dog.prototype = Object.create(Animal.prototype);

		// Only change code below this line



		let duck = new Bird();
		let beagle = new Dog();
		`,
		solution: `
		function Animal() { }
		function Bird() { }
		function Dog() { }

		Bird.prototype = Object.create(Animal.prototype);
		Dog.prototype = Object.create(Animal.prototype);

		// Only change code below this line

		Bird.prototype.constructor = Bird;
		Dog.prototype.constructor = Dog;

		let duck = new Bird();
		let beagle = new Dog();
		`,
	},
	{
		section: 21,
		title: `Add Methods After Inheritance`,
		exercise: `Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.`,
		starterCode: `
		function Animal() { }
		Animal.prototype.eat = function() { console.log("nom nom nom"); };

		function Dog() { }

		// Only change code below this line




		// Only change code above this line

		let beagle = new Dog();
		`,
		solution: `
		function Animal() { }
		Animal.prototype.eat = function() { console.log("nom nom nom"); };

		function Dog() { }

		// Only change code below this line
		Dog.prototype = Object.create(Animal.prototype);
		Dog.prototype.constructor = Dog;
		Dog.prototype.bark = ()=>console.log('Woof!');



		// Only change code above this line

		let beagle = new Dog();
		`,
	},
	{
		section: 22,
		title: `Override Inherited Methods`,
		exercise: `Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.`,
		starterCode: `
		function Bird() { }

		Bird.prototype.fly = function() { return "I am flying!"; };

		function Penguin() { }
		Penguin.prototype = Object.create(Bird.prototype);
		Penguin.prototype.constructor = Penguin;

		// Only change code below this line



		// Only change code above this line

		let penguin = new Penguin();
		console.log(penguin.fly());
		`,
		solution: `
		function Bird() { }

		Bird.prototype.fly = function() { return "I am flying!"; };

		function Penguin() { }
		Penguin.prototype = Object.create(Bird.prototype);
		Penguin.prototype.constructor = Penguin;

		// Only change code below this line

		Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };

		// Only change code above this line

		let penguin = new Penguin();
		console.log(penguin.fly());
		`,
	},
	{
		section: 23,
		title: `Use a Mixin to Add Common Behavior Between Unrelated Objects`,
		exercise: `Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.`,
		starterCode: `
		let bird = {
			name: "Donald",
			numLegs: 2
		};

		let boat = {
			name: "Warrior",
			type: "race-boat"
		};

		// Only change code below this line
		`,
		solution: `
		let bird = {
			name: "Donald",
			numLegs: 2
		};

		let boat = {
			name: "Warrior",
			type: "race-boat"
		};

		// Only change code below this line

		const glideMixin = function(obj){
			obj.glide = ()=>{}
		}

		glideMixin(bird);
		glideMixin(boat);
		`,
	},
	{
		section: 24,
		title: `Use Closure to Protect Properties Within an Object from Being Modified Externally`,
		exercise: `Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.`,
		starterCode: `
		function Bird() {
			this.weight = 15;


		}
		`,
		solution: `
		function Bird() {
			let weight = 15;
			this.getWeight= function(){
				return weight;
			}

		}
		`,
	},
	{
		section: 25,
		title: `Understand the Immediately Invoked Function Expression (IIFE)`,
		exercise: `Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).`,
		starterCode: `
		function makeNest() {
			console.log("A cozy nest is ready");
		}

		makeNest();
		`,
		solution: `
		(()=>{
			console.log("A cozy nest is ready");
		})()
		`,
	},
	{
		section: 26,
		title: `Use an IIFE to Create a Module`,
		exercise: `Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.`,
		starterCode: `
		let isCuteMixin = function(obj) {
			obj.isCute = function() {
				return true;
			};
		};
		let singMixin = function(obj) {
			obj.sing = function() {
				console.log("Singing to an awesome tune");
			};
		};
		`,
		solution: `
		const funModule = (function(){
			return{
				isCuteMixin: function(obj) {
				obj.isCute = function() {
				return true;
				};
			},
			singMixin: function(obj) {
				obj.sing = function() {
				console.log("Singing to an awesome tune");
				};
			},
			}
		})();
		`,
	},
];

oopResults(oopList);
