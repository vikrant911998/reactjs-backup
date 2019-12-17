window.addEventListener('load',init);

function init(){
    var input = document.querySelector('#in');
    input.addEventListener('input',()=>{
        checkOperator(input);
        console.log('inside function');
    });

    

    var btn = document.querySelector('#calc');

    btn.addEventListener('click',()=>print(input));
}

function checkOperator(input){
    var arr = [];
    var operators = ['+','-','*','/','%'];
    for(var item of input.value){
        arr.push(item);
    }
    input.value = "";

    console.log('Array before ',arr);
    isTemp1 = false;
    isTemp2 = false;
    isTemp3 = false;
    
    var temp1,temp3;

    for(var item of operators){
    
        if(item  == arr[arr.length -1]  ){
           
            isTemp1 = true;
        }

        if(item  == arr[arr.length -2]){

            if(arr[arr.length-2] == "*" && arr[arr.length -1] == "-"){
                
            }
            else{
                isTemp2 = true;
            }
        }
            
        
        

        if(arr[arr.length-3] == "*" && arr[arr.length-2] == "-" && arr[arr.length - 1] == item){
            isTemp3 = true;
        }
    }

    if(isTemp3){
        temp3 = arr.pop();
        arr.pop();
        arr.pop();
        arr.push(temp3);
    }
    else if(isTemp1 && isTemp2){
        temp1 = arr.pop();
        arr.pop();
        arr.push(temp1);
    }

    console.log('Array after ',arr);
    for(var item of arr){
        input.value += item;
    }
    
}


function print(input){
  
        input.value = eval(input.value);
    
}

