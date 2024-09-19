var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"<test.test@gmail.com>"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"<dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"<andrii@mail.ru>" // Нам такі не підходять
    },
];



function getValuesFromArrayByRegex(currentArray, paramName, regex=/<(.+)>/){
    let values = [];

    for (let i = 0; i < currentArray.length; i++) {
        let paramValue = currentArray[i][paramName];
        let match = paramValue.match(regex);
        
        if (match) {
            values.push(match[1]);
        }
    }

   return values;
}


function getTrustedValuesByRegex(currentArray, regex = /^[\w.]+@(gmail|yahoo)\.com$/) {
    let trustedValues = [];

    currentArray.forEach(element => {
        if (regex.test(element)){
            trustedValues.push(element)
        }   
    });
    return trustedValues
}


let allValues = getValuesFromArrayByRegex(currentArray=arr, paramName='email')
let trusted = getTrustedValuesByRegex(allValues)
console.log(trusted)