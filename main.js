const makeParagraph = (sentence) => {
  let paragraph = '';
  sentence.forEach((sen) => paragraph = paragraph + sen + ' ')
  return paragraph.trim()
}

const averageDogAge = (dogs) => {
  let avg = 0;
  let count = 0;
  
  dogs.forEach(dog => {
    if(dog.species === 'dog') {
      avg = avg + dog.age
      count++;
    }
  })

  return avg/count;
}

const addToDigits = (digits, digit) => {
  const restOfDigits = digits.splice(-1) // can't remember how to retrieve the rest of the digits
  const digitsStringSplit = digits.toString().split('');
  return (Number(digitsStringSplit[0] + Number(restOfDigits))) + digit;
}

const nightOwls = (owls) => owls.filter((owl)=>{
  if(owl.localTime >= 100 && owl.localTime <= 400) {
    return owl.asleep === false;
  }
} )

const nap = (naps) => { 
  naps.filter((owl)=> {
  if(owl.localTime >= 100 && owl.localTime <= 400) {
    return owl.asleep === true;
  }
})

}

const findIndices = () => {

}

const Faqtory = () => {
 return {
  questions: [],
  length: 0,

  addQuestion: function() {
    return "What is your site all about?";

  }
}

}


class Dog {
  constructor(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  makeNoise() {
    return "Woof."
  }
}

class GreatDane extends Dog{
  constructor(name, color) {
    super(name, "Great Dane", color)
  }

  makeNoise() {
    return "WOOF."
  }

}

class Beagle extends Dog{
  constructor(name) {
    super(name, "Beagle", "white/black/brown")
  }

  makeNoise() {
    return "Awooooooooo."
  }
}

class Pointer extends Dog {
  constructor(name, color) {
    super(name, "Pointer", color)
}
      point() {
        if(this.breed === "Pointer") {
          return "Over there!"
        } else {
          return "Woof."
        }
  
      }
}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}