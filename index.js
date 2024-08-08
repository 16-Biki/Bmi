function CalculateBMI(){
    var weight=parseFloat(document.getElementById('weight').value);
    var hieght=parseFloat(document.getElementById('hieght').value);
    var bmi=weight/(hieght*hieght);
    document.getElementById('result').innerText='BMI: '+bmi.toFixed(2);
    var catagory;
    if(bmi<18.5){
        catagory="under weight";
    }else if(bmi>=18.5 && bmi<=24.9){
        catagory="normal";
    }else if (bmi>=25 && bmi<=29.9){
        catagory="over weight";
    }else{
        catagory="obesity";
    }
    document.getElementById('result').innerText+='('+catagory+')';
}