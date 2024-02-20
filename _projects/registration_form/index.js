const userDetails = {
    fullName: "",
    dob: "",
    email: "",
    mobileNumber: "",
    gender: "",
    occupation: "",
    idType: "",
    idNumber: null,
    issueAthority: "",
    issueDate: "",
    issueState: "",
    expiryDate: ""


}


const fullNameEle = document.getElementById("full-name");
fullNameEle.addEventListener("keyup", (event) => {
    userDetails.fullName = event.target.value;
})

const birthDateEle = document.getElementById("birth-date")
birthDateEle.addEventListener("change",(event)=>{
   userDetails.dob = event.target.value;
   
})

const emailEle = document.getElementById("email")
emailEle.addEventListener("keyup",(event)=>{
 userDetails.email = event.target.value;
})

const mobileNumberEle = document.getElementById("mobile-number")
mobileNumberEle.addEventListener("keyup",(event)=>{
 userDetails.mobileNumber = event.target.value;
})

const genderEle = document.getElementById("gender")
genderEle.addEventListener("change",(event)=>{
 userDetails.gender = event.target.value;
})

const occupationEle = document.getElementById("occupation")
occupationEle.addEventListener("keyup",(event)=>{
 userDetails.occupation = event.target.value;
})



const idtypeEle = document.getElementById("id-type");
idtypeEle.addEventListener("keyup", (event) => {
    userDetails.idType = event.target.value;
})

const idNumberEle = document.getElementById("id-number")
idNumberEle.addEventListener("keyup",(event)=>{
   userDetails.idNumber = event.target.value;
   
})

const authorityEle = document.getElementById("issue-authority")
authorityEle.addEventListener("keyup",(event)=>{
 userDetails.issueAthority = event.target.value;
})

const issueDateEle = document.getElementById("issue-date")
issueDateEle.addEventListener("change",(event)=>{
  
 userDetails.issueDate = event.target.value;
})

const stateEle = document.getElementById("issue-state")
stateEle.addEventListener("keyup",(event)=>{
 userDetails.issueState = event.target.value;
})
const expiryDateEle = document.getElementById("expiry-date")
expiryDateEle.addEventListener("change",(event)=>{
 userDetails.expiryDate = event.target.value;
})



function handleclick () {
    console.log("userdatail =",userDetails)
}
