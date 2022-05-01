

document.getElementById("submmit").onclick = function () {

    let input = document.getElementById("input").value;
    let intinput = parseInt(input, 10);

    if (document.getElementById("rad1").checked) {

        let faregnite = (intinput - 32) * 5 / 9;
        faregnite = Math.round(faregnite)

        document.getElementById("result").innerText = `the value of ${intinput} degree fahreneit is ${faregnite} degree celsius`;


    } else if (document.getElementById("rad2").checked) {

        let celsius = (((9 / 5) * intinput) + 32);
        celsius = Math.round(celsius)

        document.getElementById("result").innerText = `the value of ${intinput} degree celsius ${celsius} degree faherentite `;

    } else{
        document.getElementById("result").innerText = "Please enter the correct value";
    }

}