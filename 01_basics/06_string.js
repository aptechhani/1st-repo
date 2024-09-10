 const name = "hani"
 const subject = "math"
 const age = "   nineteen "
 const link = "http://hanisarfraz126.com/sarfraz"

//this syntax is better to concatinate

 console.log(`My Name is ${name} and My Subject is ${subject}`);

// to find whst is in index number 0 etc 

 console.log(name[0]);

// proto {}

 console.log (name.__proto__)

// To Find Length 

 console.log (subject.length)

// to take every alphabet in capital 

 console.log(subject.toUpperCase())

// to take every alaphabet in small letters

 console.log(subject.toLowerCase())

// to take find character using index number

 console.log (subject.charAt(2))

// to find indexnumber using character


// to slices and negative value doesnot exist 

 console.log (name.substring(0,4))

 // to slice nagative value does exist 

 console.log(subject.slice(1,2))


 console.log(age)

// t reduce to starting and ending space

 console.log(age.trim())


 console.log(link)

// bydefault ajae if any thing  missing 

 console.log(link.replace('126','127'))

// used as a question true or false 

 console.log(link.includes('hanisarfraz1'))


 console.log (name.includes('wow'))

// used for split or mainly is convert into array

 console.log(subject.split('-'))

 
 