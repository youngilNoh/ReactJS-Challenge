# ReactJS-Challenge
 ReactJS 2 weeks challenge with nico

---
---
---

# 공부 내용

# Arrow Functions
Return 하지 않으면 아무런 값도 받아올 수 없음. 
```javascript
const say = (name) => {return “why”+name;}
```
Arrow Function은 중괄호 치지 않으면 함축적으로 return이 포함되어 있음.
```javascript
const say = (name) => “why”+name;
```
아무런 값도 돌아오지 않았을 때, 함수에서 default값을 지정해줄 수 있음 
```javascript
const say = (name=“Anonymous”) => “why”+name;
```

# Template Literals
` (백틱)을 사용해서 작성할 것 
```javascript
const say = (name=“Anonymous”) => `why ${name}`;
```

# Object Destructuring
```javascript
const human = {
	name: “Nico”,
	lastName: “Serrano”,
	nationality: “Wish I was Korean”,
	favFood: {
		breakfast: “sang”,
	},
}

Const name = human.name;
Const lastName = human.lastName;
Const difName =. human.nationality;
```
위 방식은 비효율적임

```javascript
Const {name, lastName, nationality: difName, favFood: {breakfast}} = human;
```
이러한 방식으로 사용할 것

# Spread Operator
```javascript
Const days = ["Mon","Tue","Wed"];
Const otherDays = ["The","Fri","Sat"];
Const everyDay = […days, …otherDays, "Sun"];
```

# Classes
```javascript
Class Human {
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}
}

Class Baby extends Human {
	cry() {
		console.log("Waaaa");
	}
}

Const Nico = new Human("nico", "serrano");
Const myBaby = new Baby("mini", "me");
```

# Array map
```javascript
const days = ["Mon","Tue","Wed","The","Fri","Sat","Sun"];
const addNumber = (day, index) => `#${index} 😂${day}`
const smilingDays = days.map(addNumber);
console.log(smilingDays);
```

# Array filter
```javascript
const numbers = [2, 3, 44, 53, 2, 24, 13, 35, 46, 75];
const biggerThanFifteen = numbers.filter(number => number > 15);
```

# forEach includes push
forEach는 각각의 배열에 대해 행동만을 함, return값이 없음
includes는 배열 내에 요소가 존재하는지 확인할 수 있음
push는 배열 내에 요소를 추가
```javascript
const greetings = ["Hi", "Howdy", "Suup"]
if(!greetings.includes("Hello")) {
    greetings.push("Hello");
}

greetings.forEach(greeting => {console.log(greeting)});
```

---
---
---

<a href="https://codesandbox.io/s/day-three-blueprint-forked-wgkvb?file=/src/Components/App.js"> Day3 Challenge </a>