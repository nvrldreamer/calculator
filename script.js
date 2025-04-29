var wynik = document.getElementById("wynik");
var button = document.getElementById("btnEqual");
var liczba_a, lcizba_b = 0;
var operacja = "";

var btnPlus = document.getElementById("btnPlus").addEventListener("click", () => {
    operacja = "+"
    getValue()
    console.log(liczba_a)
});

var btnMinus = document.getElementById("btnMinus").addEventListener("click", () => {
    operacja = "-"
    liczba_a = wynik.value
});

var btnMultiply = document.getElementById("btnMultiply").addEventListener("click", () => {
    operacja = "*"
    liczba_a = wynik.value
});
var btnDivide = document.getElementById("btnDivide")/addEventListener("click", () => {
    operacja = "/"
    liczba_a = wynik.value
});

function getValue(){
    liczba_a = wynik.value
    if (liczba_a == "" || isNaN(liczba_a)) {
        alert("Liczba jest niepoprawna")
    }
}
