let userData=[];
function showPart2() {
    var x = document.getElementById("part2");
    x.style.display = "block";
    x.scrollIntoView({ behavior: 'smooth' });
  }
  function showPart3() {
    var x = document.getElementById("part3");
    x.style.display = "block";
    x.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollWin() {
    window.scrollTo(0,0);
  }
  function userInput(first_Name,last_Name,email_Address,confirm_Email_Address,password,confirm_password,nearOff,Address,Address_2,City,rel,count,Post_code,Phone,Mobile_Phone,categories,Job_Title,rel2,experience,example_First_Name,com,Website,age,upload_File){
    this.first_Name=first_Name;
    this.last_Name=last_Name;
    this.email_Address=email_Address;
    this.confirm_Email_Address=confirm_Email_Address;
    this.password=password;
    this.confirm_password=confirm_password;
    this.nearOff=nearOff;
    this.Address=Address;
    this.Address_2=Address_2;
    this.City=City;
    this.rel=rel;
    this.count=count;
    this.Post_code=Post_code;
    this.Phone=Phone;
    this.Mobile_Phone=Mobile_Phone;
    this.categories=categories;
    this.Job_Title=Job_Title;
    this.rel2=rel2;
    this.experience=experience;
    this.example_First_Name=example_First_Name;
    this.com=com;
    this.Website=Website;
    this.age=age;
    this.upload_File=upload_File;
    }
  
  var nearOff= document.getElementById("nearestOffice");
  var rel= document.getElementById("relocate");
  var count= document.getElementById("countries");
  var rel2= document.getElementById("relocate2");
  var com= document.getElementById("companies");
  var first_Name= document.getElementById("first_Name");
  var last_Name= document.getElementById("last_Name");
  var email_Address= document.getElementById("email_Address");
  var confirm_Email_Address= document.getElementById("confirm_Email_Address");
  var password= document.getElementById("password");
  var confirm_password= document.getElementById("confirm_password");
  var Address= document.getElementById("Address");
  var Address_2= document.getElementById("Address_2");
  var City= document.getElementById("City");
  var Post_code= document.getElementById("Post_code");
  var Phone= document.getElementById("Phone");
  var Mobile_Phone= document.getElementById("Mobile_Phone");
  var Job_Title= document.getElementById("Job_Title");
  var example_First= document.getElementById("example_First Name");
  var Website= document.getElementById("Website");
  var age= document.getElementById("age");
  var example_First_Name= document.getElementById("example_First_Name");
  var upload_File= document.getElementById("upload_File");
 var categories=document.getElementById("categories");
 var experience=document.getElementById("experience");


 function signUp(){
  userData.push(new userInput(first_Name.value,last_Name.value,email_Address.value,confirm_Email_Address.value,password.value,confirm_password.value,nearOff.value,Address.value,Address_2.value,City.value,rel.value,count.value,Post_code.value,Phone.value,Mobile_Phone.value,categories.value,Job_Title.value,rel2.value,experience.value,example_First_Name.value,com.value,Website.value,age.value,upload_File));
  console.log(Object.keys(userData[0])+":"+Object.values(userData[0]));
 var tempData= userData[0]
 for (let key in tempData ) {
  console.log(key +' : '+tempData[key] );
  
}
scrollWin();
var output=document.getElementById('afterInput');
output.innerHTML=`
<div class="alert alert-success" id="afterInput" role="alert">
    
Hi ${tempData.first_Name} ${tempData.last_Name} , <br>
your form submitmitted <br>
kindly check Details of you want in Console. <br>                
</div>`
document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
document.getElementById("myForm").reset();
}
