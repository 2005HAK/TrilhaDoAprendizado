function somar() {
    var num1, num2, result;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    result = num1 + num2;

    document.getElementById("resultado").innerHTML = result
}