let price = [3,4,8,7,9,32,32];

for (let i=price.length-1; i>=0;i--){
    console.log(price[i]);
}


console.log("this is another way to ittrate over array ");

for (var data of price) {
    console.log(data);
}

