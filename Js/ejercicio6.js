let edades = [21 , 22 , 23 , 20 , 24, 26 , 27 , 30];
for(let i =0 ; i < edades.length ; i++)
    {
    console.log(edades[i]);
}
let promedio = 0;
for(let i =0 ; i < edades.length ; i++)
    {
        promedio=promedio + edades[i];
}
console.log("Este es el promedio de edades= " + promedio/8);