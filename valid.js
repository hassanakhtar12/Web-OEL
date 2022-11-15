 const email= document.getElementById('email')
const password=document.getElementById('password')
// const form=document.getElementById('form')
// const errorElement = document.getElementById('error')
// const em = document.getElementById('em')


document.getElementById("myBtn").addEventListener("click", validate);
    function validate(){
        if(email.value==""||password.value==""){
            
            alert("Enter Email and Passoword in Correct Manner")

        }
        if(email.value<9||password.value<5){
            
            alert("Email should be aleat 9 character and password should be atleast 5 character")

        }
    }

// document.getElementById("myBtn").addEventListener("click", newpage);
// function newpage(){
//     window.location.href="dashboard.html"
// }


