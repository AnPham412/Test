/*

JavaScript exercises. Please fill in solutions as below.

NOTE: do *not* rename the functions provided, as the auto-grader expects them to be named as defined.

*/


/* 

Problem 1 - BMI

concept: if statements

Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. It's a simple calculation: 

<img src="https://www.gstatic.com/education/formulas/images_long_sheet/en/body_mass_index.svg" alt="\text{BMI}=\frac{m} {{h}^2}"/>

In plain text, BMI = ( m / h^2 ). BMI is a simple number, for example, Charles has 187cm tall, and weighs 85 kg, which equals BMI of 24.3. 

From Wikipedia, the commonly accepted BMI ranges are underweight (< 18.5), normal weight ( >= 18.5 and < 25), overweight (>=25 and < 30), and obese (>=30). 

Write a simple function that takes in two arguments - height (in cm), weight (in kg), and returns either "underweight", "normal", or "overweight", or "obese" as a plain string.


Examples:

   bmi(188, 85) --> normal
   bmi(150, 35) --> underweight

*/

function bmi(height, weight) {
    // Your code here
    const heightInM = height / 100;
    return weight / (heightInM * heightInM);
}

function Types(e){
    const data = bmi();
    if (e.data<18.5){
        return "underweight";
    }else if (e.data<25){
        return "normal";
    }else if (e.data<30){
        return "overweight";
    }else {
        return "obese";
    }

}
/* Problem 2 - How many normal people?

From the previous question, we know 25-30 is a "normal" BMI. Write a function that returns how many "normal" people are in a provided array of numbers.

Examples:

    countNormal([24,25,22,30.1,18]) --> 2
    countNormal([18.5, 31]) --> 1
    countNormal([]) --> 0

*/

function countNormal(arr) {
    // Your code here
    let count = 0;
    const data = Types();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        if (data[sum]===data[1]) {
            count++;
        }
    }
    return count;
}

/*
  Problem 3 - How many of each type?

This builds upon the previous question. Instead of only returning the number of normal people, return an object returning the count for each body type. The keys should be "underweight, normal, overweight, obese".

If there are no people of a category, set the value to 0.

Examples:

    countTypes([20,24,30,31.1,18]) --> { underweight: 1, normal: 2, overweight: 0, obese: 2 }
    countTypes([20,24]) --> { underweight: 0, normal: 2, overweight: 0, obese: 0 }

*/

function countTypes(obj) {
    const data = Types();
    let sum = 0;
    let a,b,c,d = 0;
    for (let i = 0; i < obj.length; i++) {
        sum = obj[i];
      if (data[sum] === data[0]){
          a++;
          return data[0] + ":" + a;
      }
      if (data[sum]===data[1]){
          b++;
          return data[1] + ":" + b;
      }
      if (data[sum]===data[2]){
          c++;
          return data[2] + ":" + c;
      }
      if (data[sum]===data[3]){
          d++;
          return data[3] + ":" + d;
      }
    }
    return {a,b,c,d};
}



// DO NOT TOUCH CODE BELOW OR YOU WILL FAIL (i think)

module.exports = {
    bmi,
    countNormal,
    countTypes
}