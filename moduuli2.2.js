document.querySelector('#kohde')
let participants = parseInt(prompt("Anna osallistujamaara"))

let names = [];

for (let i = 0; i < participants; i++)
{
    names[i] = prompt("Name");
}

console.log(names)
document.querySelector('#kohde').innerHTML = names

let html = '<ol>';
for (let i = 0; i < participants; i++)
{
    html += '<li>';
    html += names[i];
    html += '</li>'

}


html += '</ol>'

let kohde = document.querySelector('#kohde')
kohde.innerHTML = html