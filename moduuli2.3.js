'use strict'
document.querySelector('#kohde')
let kuuskoiraa = 6


let KoirList = [];
for (let i = 0; i < kuuskoiraa; i++)
{
    KoirList[i] = prompt("Anna kuuden koiran nimet");
}
console.log(KoirList)
KoirList.sort().reverse()

document.querySelector('#kohde').innerHTML = KoirList

let html = '<ul>';
for (let i = 0; i < kuuskoiraa; i++)
{
    html += '<li>';
    html += KoirList[i];
    html += '</li>'

}


html += '</ul>'

let kohde = document.querySelector('#kohde')
kohde.innerHTML = html