let input =10;
function square_1(input) {    
    console.log('*'.repeat(input))    
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
        console.log('*'+' ' +" ".repeat(2) + '1'.repeat(3) +" ".repeat(2)+ '*');
        console.log('*'+' ' + " ".repeat(1) +'1'.repeat(4) +" ".repeat(2) + '*');
        console.log('*'+' ' + '1'.repeat(2)+' '+'1'.repeat(2) +" ".repeat(2) + '*');
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
        console.log('*'+' '+" ".repeat(3) + '1'.repeat(2) +" ".repeat(2)+ '*');
    console.log('*'.repeat(input));   
};
// square_1(10);

function square_2(input) {
    console.log('*'.repeat(input));
    console.log('*'+' ' + " ".repeat(1) +'2'.repeat(4) +" ".repeat(2) + '*');
    console.log('*'+'2'.repeat(2)+' '.repeat(4)+'2'.repeat(2)+'*');
    console.log('*'+'2'.repeat(2)+' '.repeat(4)+'2'.repeat(2)+'*');
    console.log('*'+' '+' '.repeat(4)+'2'.repeat(2)+' '+'*');
    console.log('*'+' '.repeat(3)+'2'.repeat(2)+' '.repeat(3)+'*');
    console.log('*'+' '.repeat(2)+'2'.repeat(2)+' '.repeat(4)+'*');
    console.log('*'+' '+'2'.repeat(2)+' '.repeat(5)+'*');
    console.log('*'+' '+'2'.repeat(2)+' '.repeat(5)+'*');
    console.log('*'+' '+'2'.repeat(2)+' '.repeat(5)+'*');
    console.log('*'+' '+'2'.repeat(7)+'*');
    console.log('*'.repeat(input)) ; 
};


// square_2(10);
function square_3(input) {
    console.log('*'.repeat(input));
    console.log('*'+' ' + " ".repeat(1) +'3'.repeat(4) +" ".repeat(2) + '*');
    console.log('*'+'3'.repeat(2)+' '.repeat(4)+'3'.repeat(2)+'*');
    console.log('*'+'3'.repeat(3)+' '.repeat(3)+'3'.repeat(2)+'*');
    console.log('*'+' '+' '.repeat(4)+'3'.repeat(2)+' '+'*');
    console.log('*'+' '.repeat(3)+'3'.repeat(2)+' '.repeat(3)+'*')
    console.log('*'+' '+'3'.repeat(2)+' '.repeat(5)+'*');
    console.log('*'+' '.repeat(3)+'3'.repeat(2)+' '.repeat(3)+'*')
    console.log('*'+' '+' '.repeat(4)+'3'.repeat(2)+' '+'*');
    console.log('*'+'3'.repeat(3)+' '.repeat(3)+'3'.repeat(2)+'*');
    console.log('*'+'3'.repeat(2)+' '.repeat(4)+'3'.repeat(2)+'*');
    console.log('*'+' ' + " ".repeat(1) +'3'.repeat(4) +" ".repeat(2) + '*');
    console.log('*'.repeat(input));   
}
// square_3(10);


function square_4(input) {
    console.log('*'.repeat(input)); 
    // console.log('*'+' '+" ".repeat(3) + '4'.repeat(2) +" ".repeat(2)+ '*');
    console.log('*'+' '.repeat(2) +" ".repeat(2) + '4'.repeat(3) +" "+ '*');
    console.log('*'+' '.repeat(2) + " ".repeat(1) +'4'.repeat(4) +" "+ '*');
    console.log('*'+' '.repeat(2) + '4'.repeat(2)+' '+'4'.repeat(2) +" " + '*');
    console.log('*'+' ' + '4'.repeat(2)+' '.repeat(2)+'4'.repeat(2) +" "+ '*');
    console.log('*'+'4'.repeat(2)+' '.repeat(3)+'4'.repeat(2)+' '+'*');
    console.log('*'+'4'.repeat(2)+' '.repeat(3)+'4'.repeat(2)+' '+'*');
    console.log('*'+'4'.repeat(8)+'*');
    console.log('*'+'4'.repeat(8)+'*');
    console.log('*'+' '.repeat(5)+'4'.repeat(2)+' '+'*');
    console.log('*'+' '.repeat(5)+'4'.repeat(2)+' '+'*');
    console.log('*'+' '.repeat(5)+'4'.repeat(2)+' '+'*');
    console.log('*'+' '.repeat(5)+'4'.repeat(2)+' '+'*');
    console.log('*'+' '.repeat(5)+'4'.repeat(2)+' '+'*');
    console.log('*'.repeat(input)); 
    
}
// square_4(10)

const squar =[
    square_1,
    square_2,
    square_3,
    square_4
]

 
 document.forms.publish.onsubmit = function() {
    let message = this.message.value;
    console.log(message)
      for(let j=1;j<=squar.length;j++){
          if(message==j&& j!==0){
              squar[j-1](input)
          }

      }
    
  
    
    return false;
    
  };
  
  
  
 

    
    