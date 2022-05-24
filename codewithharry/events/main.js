console.log("js is working properly");

document.getElementById("button").addEventListener
("click",function (e) {
    let variable;
    window.alert('button clicked sucessfully');
    variable=e;
    console.log(variable.target);
    console.log(variable.target.id);
})