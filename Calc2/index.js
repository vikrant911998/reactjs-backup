window.addEventListener('load',init);

function init(){
    var input = document.querySelector('#in');
    input.addEventListener('input',()=>{
        console.log('inside the input event');
        checkOperator(input);
    });
    var div = document.querySelector('#btns');
    createButtons(div,input);
}

function createButtons(div,input){
    oprs = ['+','-','*','C','=','/'];
    let k =0;
    for(let i=9;i>=0;i--){
        
        if(i == 6 || i == 3 || i == 0){
            var opr = createOperator(oprs[k],input);
            k++;
            div.appendChild(opr);
            div.appendChild(document.createElement('br'));
        }
        if(i==0){
            var clear = createOperator(oprs[k],input);
            div.appendChild(clear);
            k++;
        }
        let btn = document.createElement('button');
        btn.className = "btn btn-primary";
        btn.classList.add("mr-2");
        btn.classList.add("mb-2");
        btn.classList.add("p-4");
        btn.innerText = i;
        btn.value = i;
        btn.addEventListener('click',()=>{
            input.value  += btn.value;
        });
        
        div.appendChild(btn);
    }
    var opr = createOperator(oprs[k],input);
    div.appendChild(opr);
    k++;
    opr = createOperator(oprs[k],input);
    div.appendChild(opr);
}

function createOperator(sign,input){
    let btn = document.createElement('button');
    btn.className = "btn btn-success";
    btn.classList.add("mr-2");
    btn.classList.add("mb-2");
    btn.classList.add("p-4");
    btn.innerText = sign;
    btn.addEventListener('click',()=>{
        if(sign == 'C'){
            input.value = "";
        }
        else if(sign == '='){
            input.value = eval(input.value);
        }
        else{
            input.value  += btn.innerText;
        }
    });
    return btn;
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