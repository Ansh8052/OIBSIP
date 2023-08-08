 function calculateTemp (){

    let input = document.getElementById('input_container').value;
    // console.log(input);
    let seclectOption = selectBox.options[selectBox.selectedIndex];
    // console.log(seclectOption);

    function celToFah (){
        let fah = (input*9/5) +32;
        let fah2 = fah.toFixed(2);
        return fah2;
    }
    function fahToCel (){
        let cel = (input-32)*5/9;
        let cel2 = cel.toFixed(2);
        return cel2;
    }

    let result;
    if(seclectOption.value == "celc"){
         result = celToFah(input);
        
        document.getElementById('output').innerHTML= `= ${result} degree Fahrenheit`;
        
    }
    else{
            result = fahToCel(input);
            document.getElementById('output').innerHTML = `= ${result} degree Celcius`;

        }
}
