let x,y,out;
let text = document.getElementById("textDisplay");
let input = document.getElementById("numbinput");
function GetValue()
{
    x = document.getElementById("from").value;
    y = document.getElementById("to").value;
    out = Number.parseFloat(input.value);
    if(isNaN(out))
    {
        alert("Re-enter the value");
    }
    else{
       
           if(x == "Celsius" && y == "Fahrenhiet") celToFah();
            else if(x == "Celsius" && y == "Kelvin") celToKel();
            else if(x == "Fahrenhiet" && y == "Celsius") fahToCel();
            else if(x == "Fahrenhiet" && y == "Kelvin") fahToKel();
            else if(x == "Kelvin" && y == "Celsius") kelToCel();
            else if(x == "Kelvin" && y == "Fahrenhiet") kelToFah();
        else if(
            (a == "Celsius" && b == "Celsius") ||
            (a == "Fahrenheit" && b == "Fahrenheit") ||
            (a == "Kelvin" && b == "Kelvin")
        )Equal();
    }
}
function Equal()
{
    text.innerHTML = "It is in the same type";
}
function celToFah()
{
    let res = (out * (9 / 5) + 32);
    text.innerHTML = "Temperature converted is : "+res+"°F";
}
function celToKel()
{
    let res = (out + 273.15);
    text.innerHTML = "Temperature converted is : "+res+"°K";
}
function fahToCel()
{
    let res = ((out - 32) * (5 / 9));
    text.innerHTML = "Temperature converted is : "+res+"°C";
}
function fahToKel()
{
    let res = ((out - 32) * (5 / 9) + 273.15)
    text.innerHTML = "Temperature converted is : "+res+"°K";
}
function kelToCel()
{
    let res = (out - 273.15);
    text.innerHTML = "Temperature converted is : "+res+"°C";
}
function kelToFah()
{
    let res = ((out - 273.15) * (9 / 5) + 32)
    text.innerHTML = "Temperature converted is : "+res+"°F";
} 