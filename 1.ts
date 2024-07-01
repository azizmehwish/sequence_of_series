#! /usr/bin/env node

import inquirer from "inquirer"

let ans =await inquirer.prompt([{
    name:"a1",
    type:"number",
    message:"put first number of sequence"
}])
let answ=await inquirer.prompt([{
    name:"a2",
    type:"number",
    message:"put second number of sequence"

}])
let find= await inquirer.prompt([{
    name:"n",
    type:"number",
    message:"put the no of nth term "
}])
let c=(find.n-1)

let d=answ.a2-ans.a1

console.log(ans.a1+c*d);
