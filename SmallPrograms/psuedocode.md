
//a function that returns the sum of two numbers

START 
READ first number as Number1 (first argument)
READ second number as Number2 (second argument)
IF Number1 and Number2 are valid numbers, add them together and return summation
END

//a function that takes an array of strings, and returns a string that is all those strings concatenated together

START
READ array of strings as arr (first argument)
SET iterator = 1
SET concatenatedString = ""
WHILE iterator < arr.length
  concatenatedString = concatenatedString + value within arr at space 'iterator'
*Return the value of concatenatedString
END

//a function that takes an array of integers, and returns a new array with every other element

START
READ array of integers as arr (first argument)
SET iterator = 1
SET newArr = []
WHILE iterator < arr.length
  IF iterator == 1 OR iterator IS NOT divisible by 2 with a remainder of 0
    Put the value within arr at the space 'iterator' in the newArr
*Return newArr
END