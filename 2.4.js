let numerot = [];
let ValmisNumero = 1;

while (ValmisNumero !== 0) {
    ValmisNumero = Number(prompt('Enter a number:'));
    numerot.push(ValmisNumero);
}

numerot.sort((a, b) => b - a);

for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
}