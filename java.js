
let Name =[];
let myEmail =[];
let Password =[];
let Number =[];

function Submit() {
     let FullName =document.getElementById('name').value;
     let ForEmail =document.getElementById('email').value;
     let ForPassword =document.getElementById('password').value;
     let ForNumber =document.getElementById('number').value;

     Name.push(FullName);
     myEmail.push(ForEmail);
     Password.push(ForPassword);
     Number.push(ForNumber);
     
   var showText =  document.getElementById('output')
   showText.innerHTML =`
   <h2 class='show'>OutPut details</h2>
     <p class='para1'> <b>Full Name:</b> ${Name}</p>
     <p class='para1'> <b>Email:</b> ${myEmail}</p>
     <p class='para1'> <b>PassWord:</b> ${Password}</p>
     <p class='para1'> <b>Number:</b> ${Number}</p>
      <h2 class='show1'>Design By Ali Hassan ||Roll No :254037 </h2>
     `
}
function shift(){
    Name.shift()
    myEmail.shift()
    Password.shift()
    Number.shift()

    var showText =  document.getElementById('output')
   showText.innerHTML =`
   <h2 class='show'>OutPut details</h2>
     <p class='para1'> <b>Full Name:</b> ${Name}</p>
     <p class='para1'> <b>Email:</b> ${myEmail}</p>
     <p class='para1'> <b>PassWord:</b> ${Password}</p>
     <p class='para1'> <b>Number:</b> ${Number}</p>
      <h2 class='show1'>Design By Ali Hassan ||Roll No :254037 </h2>
     <p></p>
     `
}
function pop(){
    Name.pop()
    myEmail.pop()
    Password.pop()
    Number.pop()

    var showText =  document.getElementById('output')
   showText.innerHTML =`
   <h2 class='show'>OutPut details</h2>
     <p class='para1'> <b>Full Name:</b> ${Name}</p>
     <p class='para1'> <b>Email:</b> ${myEmail}</p>
     <p class='para1'> <b>PassWord:</b> ${Password}</p>
     <p class='para1'> <b>Number:</b> ${Number}</p>
     <h2 class='show1'>Design By Ali Hassan ||Roll No :254037 </h2>
     `
}

