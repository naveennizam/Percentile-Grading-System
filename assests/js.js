function clickit(){
    var input = document.getElementById('num').value;
    
    switch(true){
        case (input <=99 && input >=80):
            document.getElementById('ok').innerHTML = 'A-one Grade';
            break;
        case (input <=79 && input >=70):
            
            document.getElementById('ok').innerHTML = 'A Grade'

            break;    
        case (input <=69 && input >=60):
           
            document.getElementById('ok').innerHTML = 'B Grade'

            break;
        case (input <=59 && input >=40):
            document.getElementById('ok').innerHTML = 'C Grade'
            break;
        case (input <=49 && input >=40):
            document.getElementById('ok').innerHTML = 'D Grade'
            break; 
        case (input <=39 && input >=1):
            document.getElementById('ok').innerHTML = 'Fail'
            break;  
        default:  
       
        document.getElementById('ok').innerHTML = 'INVALID SCORE'
  
    }
}