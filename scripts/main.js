//图片的更换
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/touxiang.jpg") {
    myImage.setAttribute("src", "images/hhb.jpg");
  } else {
    myImage.setAttribute("src", "images/touxiang.jpg");
  }
};

let myButton = document.querySelector("button"); //选择button并将其赋值给myButton
let myHeading = document.querySelector("h2");

//设置按钮点击后的事件
myButton.onclick = function () {
  setUserName();
};

//设置用户姓名
function setUserName() {
  const myName = prompt("Please enter your name."); //从promt中读取值并赋给myName，类似于python中的input("请输入你的名字")
  if (!myName) {
    setUserName(); //如果没有值，则重新调用本函数，进行姓名设置
  } else {
    localStorage.setItem("name", myName); //如果有值的话，先将名字存储到本地，并设置为name，localstorage在获取的时候获取的也是name
    myHeading.textContent = `欢迎, ${myName}`; //然后将myheading的文本内容设置为``里的内容，myheading选择的是h2，因此h2会显示这个
  }
}
//localstorage获取name的内容，每次打开时先读取记录，然后再修改用户姓名，删除该模块后，重载页面显示的是index.html里h2原本的内容
if (!localStorage.getItem("name")) {
  setUserName(); //没获取到，重新获取
} else {
  const storedName = localStorage.getItem("name"); //获取到了，在localstorage内再存成另外一个变量名
  myHeading.textContent = `欢迎, ${storedName}`; //默认展示最后一次存储的名字
}
