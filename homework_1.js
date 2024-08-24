

// Task 1: 'number' + 3 + 3 -> result 'number33' -> datatype string
     // This is string concatenation. 
    //  First  step: add to 'number' value 3. Value 3 converted from number to string datatype -> result 'number3'.
   //  Second step: second 3 also converted to string and concatenate 'number3' and '3' -> result 'number33'


// Task 2: null + 3 -> result 3 -> datatype number
    // Convert null to number -> result 0
   // Addition 0 + 3 -> result 3 -> datatype number


// Task 3: 5 && "qwerty" -> result "qwerty"
   // First step: with number datatype all that not 0 -> true. 5 is not 0, so 5 is true
  // Second step: with string datatype if string is not empty -> true. So 'querty' -> true
 // Third step: if all operands is true operator && return last value true. So returns "qwerty"

  
// Task 4: +'40' + +'2' + "hillel" -> result '42hillel' -> datatype string 
  // First: operator + before string convertes string to number. So converted 40 to number and 2 to number -> 
                                                                                    //result 42 datatype number
 // Second: number 42 + string 'hillel'. This is concatenation. Conver 42 to string and add 'hillel' -> datatype string 


//  Task 5: '10' - 5 === 6 -> result false datatype boolean
//  operator === checks whether values and data types are equal
    //  Firts: conver string '10' to number 10
   //  Second: number 10 - number 5 -> result 5
  //  Third: number 5 is not equal number 6 -> result false(boolean)


// Task 6: true + false -> result 1 datatype number
   // First: Convert true to number 1
  // Second: convert false to number 0
 // Third: number 1 + number 0 -> result 1   


// Task 7: '4px' - 3 -> result NaN
   // First: can't convert '4px' to number -> result NaN
  // Second: Try to do (NaN - 3)
 // Third: Any arithmetic operation on NaN also returns NaN


//  Task 8: '4' - 3 -> result 1 datatype number
   //  First: conver string '4' to Number
  //  Second: arifmetic operation 4 - 3 -> result 1


//  Task 9: '6' + 3 ** 0 -> result '61' datatype string
   //  First: 3 ** 0 more priority than + so work first. Any number in 0 degree -> 1
  //  Second: convert number 1 to string and concatenate '6' -> result '61'


// Task 10: 12 / '6' -> result 2 datatype number  
   // First: convert '6' to number
  // Second: divide number 12 on number 6 -> result number 2


// Task 11: '10' + (5 === 6) -> result '10false' datatype string
   // First: opeartion in () have higher priority. (5 === 6) return false because 5 is not equal 6
  // Second: convert boolean false to string 'false'
 // Third: concatenate string '10' and string 'false' -> result '10false'


//  Task 12: null == '' -> result false datatype boolean
  //  First: null and string datatype can't be converted to one datatype
 //  Second: string is not object -> result false


//  Task 13: 3 ** (9 / 3) -> result 27 datatype number
  //  First: operation in () have higher priority -> 9/3 = 3
 //  Second: 3 in degree 3 = 27


//  Task 14: !!'false' == !!'true'  -> result true datatype boolean
//  !! convert to boolean
    //  First: !!'false' -> to boolean true(because 'false' is not empty string)
   //  Second: !!'true' -> to boolean true(because 'true' is not empty string)
  //  Third: boolean true is equal with boolean true -> result true datatype boolean


// Task 15: 0 || '0' && 1 -> result 1 datatype number  
  // First: '0' && 1, '0' is not empty string -> true, number 1 is true. So returns last true(number 1)
 // Second: 0 || 1 returns first true. 0 is false, 1 is true. So returns 1


//  Task 16: (+null == false) < 1 -> result false datatype boolean
   //  First:+ operator converts null to a number -> 0
  //  Second: false is 0, so 0 == false returns true
 //  Third: true is 1, so 1 < 1 return false 


// Task 17: false && true || true -> result true datatype boolean
  // First: false && true -> returns first false value. So return false
 // Second: false || true -> return first true. So return true 


//  Task 18: false && (false || true) -> result false boolean datatype
  //  First: (false || true) return first true -> so return true
 //  Second: false && true return first false -> so return false


//  Task 19: (+null == false) < 1 ** 5 -> result false datatype boolean
    //  First: +null -> + convert null to number 0
   //  Second: false is 0, so 0 == false return true (0 is equal 0)
  //  Third: 1 ** 5 -> return 1 (1 in any degree = 1)
 //  Fourth: true is 1. So 1 < 1 return false (1 is not less that 1)


 console.log("This nessesary for appears data in Github. If file has not active code -> Github show it how empty")