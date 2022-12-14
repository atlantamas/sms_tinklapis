/*
for(;;)
{
    console.log("literacijos pradzia:")
    console.log("labas")
    console.log("literacijos pabaiga:")
  break
}

//

for(;;)
{
    if(true)
    {
        console.log("literacijos pradzia:")
        console.log("labas")
        console.log("literacijos pabaiga:")
    }
    else
    {
        break
    }
    
}

*/
/*
for(var i =0;;)
{
    if(true)
    {
        console.log("literacijos pradzia:")
        console.log(i,"labas")
        console.log("literacijos pabaiga:")
    }
    else
    {
        break
    }
    
}
*/

import generate_random_string from "./utilities/generate-random_string.mjs"

//
/*
for(var i =0;;)
{
    if(true)
    {
        console.log("literacijos pradzia:")
        console.log(i,"labas")
        console.log("literacijos pabaiga:")
    }
    else
    {
        break
    }
    i += 1
}
*/

//
/*
for(var i =0;;)
{
    if(i<10)
    {
        console.log("literacijos pradzia:")
        console.log(i,"labas")
        console.log("literacijos pabaiga:")
    }
    else
    {
        break
    }
    i += 1
}
*/

//
/*
for(var i =0;i<10;i += 1)
{
        console.log("literacijos pradzia:")
        console.log(i,"labas")
        console.log("literacijos pabaiga:")
}
*/

const arr_vardai =  ["jurgis", "antanass", "aluyzas","martynas"]

for(var i= 0; i<100; i +=1)
{
    arr_vardai.push(generate_random_string(10))
}

console.log ("vardai:")

for(var i =0;i<arr_vardai.length;i += 1)
{
    if(arr_vardai[i]==="antanas")
    {
        console.log("radau antana jo indexas", i)
    }
    else 
    {

    }
}


