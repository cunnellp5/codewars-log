const name = 'Snickers';
const age = 2;
const sentence = `my dog ${name} is  ${age * 7} years old`;

const person = {
    name: 'phil',
    job: 'poop collector',
    city: 'poopville',
    bio: 'no thanks'
};

// const markup = `
//     <div class="person">
//         <h2>
//             ${person.name}
//             <span class="job">${person.job}</span>
//         </h2>
//         <p class="location">${person.city}</p>
//         <p class="location">${person.bio}</p>
//     </div>
// `;

const dogs = [
    {name: 'snicker', age: 3},
    {name: 'joe', age: 23},
    {name: 'bo', age: 5},
];

const markup = `
    <ul class="dogs">
        ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
    </ul>
`

document.body.innerHTML = markup;
