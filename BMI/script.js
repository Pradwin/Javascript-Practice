function fun(){
    var cm=document.getElementById("cm").value;
    cm=cm/100;
    var w=document.getElementById("kg").value;
    var bmi=w/(cm*cm);
    document.getElementById("BMI").value=bmi;
    if(bmi<18.5)
    {
        document.querySelector("h4").innerHTML="Under Weight";
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
        document.querySelector("h4").innerHTML="Normal Weight";
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        document.querySelector("h4").innerHTML="OverWeight";
    }
    else if(bmi>=30)
    {
        document.querySelector("h4").innerHTML="Obesity";
    }
}