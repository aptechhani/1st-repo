// {} scope 

let b= 50;
if (true) {
    let a = 10;
    const b = 20 ;
    var c = 30;
    console.log(b);
}
// console.log(a);
console.log(b);
// console.log(c);




// nested scope


function one() {
    const name = "hani";

    function two() {
        const age =19;
      console.log(name);
      console.log(age);
    }
    // console.log(age);
     two()
    
}
one();



 // anither example \
 


 if (true) {
    const nam = "haya";
    
    if (nam === "haya") {
      const fullname = " sulaiman";
      console.log(nam + fullname );
    }
    // console.log(fullname);
    
  }
//  console.log(nam);




function add(num)  {
  return num +1
}
console.log(add(5));


 const  add = function(num)  {

 
  return num +2
  
}

console.log(6);