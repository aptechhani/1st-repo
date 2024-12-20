
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

   //  function k nadra object kese pass kry 

   const user = {
    username : "hani",
    age : 122,
   }

   function cart(anyobject) {
    console.log( `my name is ${anyobject.username} and i am ${anyobject.age} years old`
        
     );
    
   }
    
   cart(user);

   cart({
    username:"haniee",
    age :19,
   })


   // function ka nadr arrya put 
   const mynewarray = [100,200,300,400]

   function array2(getarray) {
    return getarray[3]
   }
   console.log(array2(mynewarray));



   // practicew


//    const yourarray = ["hani", "haya"]
    function myarray (getarray)
    {
        return getarray[0];
    }
//    console.log(myarray(yourarray));
   console.log(myarray(["hani", "haya"]));
   