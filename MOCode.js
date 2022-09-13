//First two functions ('returnRandBase' and 'mockUpStrand' were written by Codecademy. The rest of the code was written by me.

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let survivors = [];
//create object factory function
let pAequorFactory = (num, bases) => {
  return {
    specimenNum: num,
    dna: bases,
    /* create object method 'mutate' to change one random base in the dna strand in order to represent dna mutation */
    mutate: (dnaStrand) => {
      //define dnaBases array within scope of method
      const dnaBases =  ['A', 'T', 'C', 'G'];
      //define 'mutated' variable to represent base being changed
      let mutated = dnaStrand[Math.floor(Math.random() * 16)];
      //define 'newBase' variable to represent new base
      let newBase = dnaBases[Math.floor(Math.random() * 4)];
      //change base in object 'dna' property by splicing
      removedBase = dnaStrand.splice(dnaStrand.indexOf(mutated), 1, newBase);
      this.dna = dnaStrand;
      /* I wrote this switch statement to verify that the new base being added was not the same as the old base (i.e. replacing a base 'E' with another 'E')*/
      //check if the base being mutated is the same as the new base
      switch (mutated === newBase) {
        /* if they are the same, remove the base from the 'dnaBases' array so it cannot be chosen again, then pick from the remaining bases and assign it to variable 'newBase2'. 'newBase2' is then spliced into the dnaStrand array */
        case true:
          dnaBases.splice(dnaStrand.indexOf(newBase), 1);
          newBase2 = dnaBases[Math.floor(Math.random() * 3)];
          removedBase = dnaStrand.splice(newBase, 1, newBase2);
          this.dna = dnaStrand;
          break;
        //if they are different, do nothing
        case false:
          break;
      }
      //return the new dna strand (as per the project instructions)
      return this.dna;
    },

    compareDna: (pObject) => {
      let sameDna = 0;
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < pObject.dna.length; j++) {
          if (pObject.dna[j] === this.dna[i]) {
              sameDna += 1;
          }
        }
      }
      console.log('this specimen and that specimen have ' + sameDna / 15 * 10 + '% DNA in common');
    },
    
    willLikelySurvive: function () {
      let cgList = [];
      console.log(this.dna);
      for (let i = 0; i < this.dna.length; i++) {
        //console.log(i);
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cgList.push(this.dna[i]);
        }
      }
      //console.log(cgList);
      if (cgList.length >= 9) {
        return true;
      } else {
        return false;
      }
    },
  }
}

let do30Times = () => {
  let i = 0;
  do {
    survivors[i] = pAequorFactory(i, mockUpStrand());
    if (survivors[i].willLikelySurvive() === false) {
      i--;
    }
    i++;
  } while (survivors.length < 30);
  return survivors;
}



/* assign variable 'pAequor1' to the result of calling pAequorFactory with 1 and result of 'mockUpStrand' function as arguments */
let pAequor1 = pAequorFactory(1, mockUpStrand());

//logging 'pAequor1' to check results
console.log(pAequor1);
console.log('\n');

//logging 'mutate' method called on pAequor1 to check results
console.log(pAequor1.mutate(pAequor1.dna));
console.log('\n');

//loggging 'pAequor1' after 'mutate' method called to check results
console.log(pAequor1);
console.log('\n');

let pAequor2 = pAequorFactory(2, mockUpStrand());

console.log(pAequor2);
console.log('\n');

pAequor1.compareDna(pAequor2);
console.log('\n');

console.log(pAequor1.willLikelySurvive());
console.log('\n');

console.log(pAequor2.willLikelySurvive());
console.log('\n');

console.log(do30Times(pAequorFactory()));

console.log(survivors.length);












