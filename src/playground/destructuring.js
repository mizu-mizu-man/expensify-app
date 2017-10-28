// const person = {
//   name: 'Alexey',
//   age: 34,
//   location: {
//     city: 'Moscow',
//     temp: '+7'
//   }
// };
//
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}.`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);


const address = ['Ayvazovsky street 6', 'Moscow', 'Russia', '117593'];
const [, city, country = 'Russia'] = address;
console.log(`You are in ${city} ${country}`);

const item = ['Coffee (iced)', '$2.00', '$2.60', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
