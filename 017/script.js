function calcBMI() {
    const vaha = parseInt(document.getElementById("weight").value)
    const vyska = parseInt(document.getElementById("height").value)
 
    if (vaha <= 0 || vyska <= 0 ) {
        document.getElementById("result").innerHTML = "Nesprávný input";
        return;
    }
 
 
    const result = (vaha / vyska**2) * 10000
 
    if (result < 18.5) {
        document.getElementById("result").innerHTML = "Podváha";
    }   else if (result >= 18.5 && result < 25) {
        document.getElementById("result").innerHTML = "Normální váha";
    } else if (result >= 25 && result < 30) {
        document.getElementById("result").innerHTML = "Nadváha";
    } else if (result > 30) {
        document.getElementById("result").innerHTML = "Obezita";
    }
 
    console.log(result)
}