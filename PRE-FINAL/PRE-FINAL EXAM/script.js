
function Person(name, age, fitness, date, cardio, time1, time2,stretching, time3, time4) {
    this.name = name;
    this.age = age;
    this.fitness = fitness;
    this.date = date;
    this.cardio = cardio;
    this.time1 = time1;
    this.time2 = time2;
    this.stretching = stretching;
    this.time3 = time3;
    this.time4 = time4;
  }
  
  function Createnew() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const fitness = document.getElementById("fitness").value;
    const date = document.getElementById("date").value;
    const cardio = document.getElementById("cardio").value;
    const time1 = document.getElementById("time1").value;
    const time2 = document.getElementById("time2").value;
    const stretching = document.getElementById("stretching").value;
    const time3 = document.getElementById("time3").value;
    const time4 = document.getElementById("time4").value;
  
    const person = new Person(name, age, fitness, date, cardio, time1, time2,stretching, time3, time4);
    displayPerson(person);
  }
  
  function displayPerson(person) {
      let P=0;
      P++;
    const personDataDiv = document.getElementById("personData");
    personDataDiv.innerHTML += `
      <h2>PROFILE PICTURE ${P++
        
      }</h2>
      <p>Name: ${person.name}</p>
      <p>Age: ${person.age}</p>
      <p>Fitness Goals: ${person.fitness}</p>
      <h2>WORKOUT PLANS</h2>
      <p>Cardio Exercise: ${person.cardio}</p>
      <p>Stretching Exercise: ${person.stretching}</p>
      <p>Date: ${person.date}</p>
       <h2>WORKOUT TIME</h2>
      <p>Cardion Time: ${person.time1} to ${person.time2}</p>
      <p>Stretching Time: ${person.time3} to ${person.time4}</p>
      <hr>
    `;
  }