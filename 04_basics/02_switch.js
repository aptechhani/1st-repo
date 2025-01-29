// Given the name of a month, output the number of days in that month.

// January, March, May, July, August, October, December = 31 days
// April, June, September, November = 30 days
// February = 28 or 29 days (considering a non-leap year
const days = 28;  // You can change this to test with different values

switch (days) {
    case 31:
        console.log("January, March, May, July, August, October, December have 31 days.");
        break;
    case 30:
        console.log("April, June, September, November have 30 days.");
        break;
    case 28:
        console.log("February has 28 days in a non-leap year.");
        break;
    case 29:
        console.log("February has 29 days in a leap year.");
        break;
    default:
        console.log("Invalid number of days.");
        break;
}
