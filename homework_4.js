
function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 101)) + 100;
      
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    const percentEvenToOdd = (evenCount / oddCount) * 100;
    const percentEvenToTotal = (evenCount / count) * 100;
    const percentOddToTotal = (oddCount / count) * 100;
  
    return {
        'countOfGeneratedNumbers': count, // or evenCount + oddCount
        'countEvenNumbers': evenCount,
        'countOddNumbers': oddCount,
        'percentEvenToOdd': `${percentEvenToOdd.toFixed(2)}%`,
        'percentEvenToTotal': `${percentEvenToTotal.toFixed(2)}%`,
        'percentOddToTotal': `${percentOddToTotal.toFixed(2)}%`
    }
}


console.log(checkProbabilityTheory(13))