function validate(){
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;

  if(username=='reddynodankumar@gmail.com' && password=='nodankumar@'){
    location.href='../HomePage.html';
  }
  else{
    location.href='loginPage.html';
    alert('Enter wrong credentials..')
  }

}
