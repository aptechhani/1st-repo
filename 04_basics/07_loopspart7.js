//filter 

// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter( (num) => (num >5))
// console.log(newnums)


// by for each loops


const newnum = [2, 5, 7, 9, 3];  // Define the array
const mynum = [];

newnum.forEach((nums) => {
  if (nums > 6) {
    mynum.push(nums);
  }
});
console.log(mynum);

