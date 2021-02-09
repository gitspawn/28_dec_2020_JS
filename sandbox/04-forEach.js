// [].forEach((element, index, arr) => { })

let people = [
    { id: 1, name: "Vova", age: 22, budget: 4000, isComlete: true },
    { id: 2, name: "Sara", age: 30, budget: 3400, isComlete: false },
    { id: 3, name: "Mike", age: 45, budget: 1500, isComlete: true },
    { id: 4, name: "Bob", age: 18, budget: 400, isComlete: false },
];

// people.forEach((person, i, arr) => {
//     // console.log(person)
//     // console.log(i)
//     console.log(arr)
//     // console.log('Element: ', elem, 'Index', index)
//     // console.log(arr)
// });

// people.forEach((person, index, persosArr) => {
//     console.log(person.name)
// })

window.addEventListener("load", displayPeople);

function displayPeople() {
    let html = "";
    people.forEach(function (person, index, arrPerson) {
        html += `
          <ul class="list">
            <li class='list__item'>Name: ${person.name}</li>
            <li class='list__item'>Age: ${person.age}</li>
            <li class='list__item'>Bujet: ${person.budget}</li>
            <li class='list__item'>isComlete: ${person.isComlete}</li>
          </ul>
      `;
    });
    return (document.body.innerHTML = html);
}
