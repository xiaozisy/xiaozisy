let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.jpg');
    }else {
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName||myName === null)
    setUserName();
    else{
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;  //为了显示用
    }
    
  }

  if(!localStorage.getItem('name')) {
    setUserName();
    //myHeading.textContent = 'Mozilla 酷毙，' + myName;
  }
    else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }