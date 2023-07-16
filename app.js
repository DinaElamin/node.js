// 1-create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex ):
const person = {
    fname: "ahmed",
    lname: "hossam",
    age: 20,
    city: "alex"
  }
  ////////////////////////////////////////////////////////////////////////////////////////

// 2-change obj to Json  
const personJSON = JSON.stringify(person)
/////////////////////////////////////////////////////////////////////////////////////////////

// 3-store in file
const fs = require("fs");
fs.writeFileSync("person.json", personJSON)
/////////////////////////////////////////////////////////////////////////////////////////////////

// 4-read file (json)
const fileData = fs.readFileSync("person.json").toString()
console.log(fileData)
///////////////////////////////////////////////////////////////////////////////////////////////

// 5-Convert to obj 
const personObj = JSON.parse(fileData)
console.log(personObj)
//////////////////////////////////////////////////////////////////////////////////////////////

// 6- Update data to ( adel , ahmed , 40 , cairo)
personObj.fname = "adel"
personObj.lname = "ahmed"
personObj.age = 40
personObj.city = "cairo"
console.log(personObj)
//////////////////////////////////////////////////////////////////////////////////////////////////
// 7-convert obj to Json
 const updatedPersonJSON = JSON.stringify(personObj)
 console.log(updatedPersonJSON)
 /////////////////////////////////////////////////////////////////////////////////////////////////
 // 8-store in file (writeFileSync)
 fs.writeFileSync("updatedPerson.json", updatedPersonJSON)
 /////////////////////////////////////////////////////////////////////////////////////////////

 





