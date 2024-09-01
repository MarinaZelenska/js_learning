function pow(numberForDegree, degree) {
    let result = 1;
    const degreeAbsolute = Math.abs(degree)
    for (let i = 0; i < degreeAbsolute; i++) {
        result *= numberForDegree;
    }

    return degree < 0 ? 1 / result : result;
}


const zero = pow(2, 0) // test for degree 0 -> return 1
const one = pow(2, 1) // test for degree 1 -> return input number
const cube = pow(3, 3) 
const negative = pow(-2, 3) // test for negative number -> return -8
const negativeDegree = pow(2, -3) // test for negative degree -> return 0.125
