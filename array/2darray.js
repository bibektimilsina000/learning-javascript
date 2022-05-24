let fruits=['apple','orange','banana'];
let veg =[ 'carrot','onions','potatotes'];
let meats = ['eggs','chicken','fish'];

let groceryList=[fruits,veg,meats];


for(let list of groceryList){
    for (let food of list )
    {
        console.log(food);
    }
}