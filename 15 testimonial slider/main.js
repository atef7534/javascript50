let people = [
  {
    name: "atef yasser",
    age : 22,
    about: "I would also like to say thank you to all your\
    staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    image: "imgs/atef.jpg"
  },
  {
    name: "ziad yasser",
    age : 25,
    about: "This is simply unbelievable! I would be lost without Apple. \
    The very best. Not able to tell you how happy I am with Apple.",
    image: "imgs/ziad.jpg"
  },
];
let container = document.querySelector(".container");
let personIdx = 0;

show(personIdx);

function show()
{
  if (personIdx >= people.length)
    personIdx = 0;

  let rows = document.querySelectorAll(".row");
  for (let i = 0; i < rows.length; i++)
    rows[i].remove();

  let row = document.createElement("div");
  row.classList.add("row");

  let image = document.createElement("img");
  image.src = people[personIdx].image;
  image.alt = "failed!";

  let text = document.createElement("p");
  text.textContent = people[personIdx].about;

  row.appendChild(image);
  row.appendChild(text);

  let name = document.createElement("span");
  name.textContent = people[personIdx].name;
  name.textContent += ` - ${people[personIdx].age}`;

  row.appendChild(name);
  container.appendChild(row);

  personIdx++;
  setTimeout(show, 4000);
}