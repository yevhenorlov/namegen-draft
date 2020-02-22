// This is a {LOCATION_TYPE} called {LOCATION_NAME}
// It has a population of {POPULATION_AMOUNT} with such races as {RACE_LIST}.
// Here are the dwellers:

// {NAME}, {GENDER} {RACE} {OCCUPATION}, who lives at {STREET}.

const dwellersOptions = [
  {
    name: `John Smith`,
    age: 22,
    gender: 'male',
    race: 'dwarf',
    occupation: 'smith',
    street: 'Diagon Alley'
  },
  {
    name: `Princess Caroline`,
    age: 40,
    gender: 'female',
    race: 'cat',
    occupation: 'manager',
    street: 'Cat Street'
  },
  {
    name: `Bojack Horseman`,
    age: 52,
    gender: 'female',
    race: 'cat',
    occupation: 'manager',
    street: 'Cat Street'
  }
];

function createDweller(dwellerOptions) {
  const { name, age, gender, race, occupation, street } = dwellerOptions;
  return `${name} — ${gender} ${race} ${occupation}, who is ${age} years old and lives at ${street}`;
}

const dwellersOver30 = dwellersOptions.filter(function(dweller) {
  if (dweller.age > 30) return dweller;
});
const ageGroups = dwellersOptions.reduce(
  function(acc, dweller) {
    if (dweller.age > 30) {
      acc.over30.push(dweller);
    } else {
      acc.under30.push(dweller);
    }
    return acc;
  },
  {
    over30: [],
    under30: []
  }
);

const children = [1, 1, 2, 3, 5, 8].map(function(number) {
  return { type: 'child', age: number };
});

console.log(children);

const dwellers = dwellersOptions.map(createDweller).join('\n');
