/* var tab=[-2,1,4];
function addition(x){
    return x + 2;
   
}
function affiche(){
    return alert(addition());
   
}
addition(tab[0]);
addition(tab.length)

affiche(addition(tab[0]));
affiche(addition(tab.length));
 */




/* function digitNum(n) {
    var Tab = (""+n).split(' ');
for(var i=0;i<tab.length;i++){
    n.charAt
}
    console.log(Tab);
    var reversedArray = [];
    for (var i = Tab.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(Tab.shift(),10);
    }
    return reversedArray;
  }
  
  console.log(digitNum("hello world"));
  console.log(digitNum(4)); */


function jourDela(m){
    switch(m){
        case(1):
            return 'dimanche';
            case(1):
            return 'lundi';
            break;
            case(2):
            return 'mardi';
            break;
            case(3):
            return 'mercredi';
            break;
            case(4):
            return 'jeudi';
            break;
            case(5):
            return 'vendredi';
            
            default:
                return "No value found";
        
    }
}




var ch = (s) => {
   
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
 console.log(ch("hamza"))



function getBudgets( arr){
    return arr.reduce((a,b)=>a+b.budget,0)
}
console.log(getBudgets([{name: "John",  age: 21, budget: 23000}, 
{name: "Steve",  age: 32, budget: 40000}, 
{name: "Martin",  age: 16, budget: 2700}]), 65700);
