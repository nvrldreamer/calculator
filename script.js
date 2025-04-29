var wynik = document.getElementById("wynik");
var button = document.getElementById("btnEquals").addEventListener("click", calculate);

var liczba_a, liczba_b = 0;
var operacja = "";

var btnPlus = document.getElementById("btnPlus").addEventListener("click", () => {
    operacja = "+"
    getValue()
});

var btnMinus = document.getElementById("btnMinus").addEventListener("click", () => {
    operacja = "-"
    getValue()
});

var btnMultiply = document.getElementById("btnMultiply").addEventListener("click", () => {
    operacja = "*"
    getValue()
});
var btnDivide = document.getElementById("btnDivide").addEventListener("click", () => {
    operacja = "/"
    getValue()
});

function getValue(){
    liczba_a = wynik.value
    if (liczba_a == "" || isNaN(liczba_a)) {
        alert("Liczba jest niepoprawna")
        wynik.value = ""
    }
    else{
        wynik.place
        liczba_a = parseInt(liczba_a)
        wynik.value = ""
    }
    
}

function calculate() { 
    liczba_b = wynik.value;
    if (liczba_b === "" || isNaN(liczba_b)) {
        alert("Liczba jest niepoprawna");
    } else {
        liczba_b = parseFloat(liczba_b);
        switch (operacja) {
            case "+":
                wynik.value = (liczba_a + liczba_b).toString();
                break;
            case "-":
                wynik.value = (liczba_a - liczba_b).toString();
                break;
            case "*":
                wynik.value = (liczba_a * liczba_b).toString();
                break;
            case "/":
                wynik.value = (liczba_a / liczba_b).toString();
                break;
            default:
                alert("Nie wybrano operacji");
        }
    }
}