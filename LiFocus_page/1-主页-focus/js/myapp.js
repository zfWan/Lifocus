function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}

function login() {
  //元素中获取账户名与密码
  var user_name = document.getElementById("user");
  var user_password = document.getElementById("pass");
  if (user_name.value == "") {
    document.getElementById("emptyMsg_username").style.display = "inline";
    document.getElementById("failmsg").style.display = "none";
  } else if (user_password.value == "") {
    document.getElementById("emptyMsg_userpass").style.display = "inline";
    document.getElementById("failmsg").style.display = "none";
  } else {
    $.ajax({
      url:
        "http://localhost:8080/" + user_name.value + "/" + user_password.value,
      type: "get",
      success: function(date) {
        // alert(date.user_name);
        console.log(date);
        // debugger
        if (date != "")
          window.location.href = "main_focus.html?user_name=" + user_name.value;
        else window.location.href = "login.html?msg=1";
      },
      error: function() {}
    });
  }
}

function ifSame() {
  var user_password1 = document.getElementById("pass1");
  var user_password2 = document.getElementById("pass2");
  if (user_password1.value != user_password2.value) {
    document.getElementById("emptyMsg_userpass2").style.display = "inline";
    document.getElementById("emptyMsg_username1").style.display = "none";
    document.getElementById("emptyMsg_userpass1").style.display = "none";
    document.getElementById("emptyMsg_userpass1_1").style.display = "none";
  }
}

function register() {
  var user_name1 = document.getElementById("user1");
  var user_password1 = document.getElementById("pass1");
  var user_password2 = document.getElementById("pass2");
  if (user_name1.value == "") {
    document.getElementById("emptyMsg_username1").style.display = "inline";
    document.getElementById("emptyMsg_userpass2").style.display = "none";
  } 
  else if ((user_password1.value == "")) {
    document.getElementById("emptyMsg_userpass1").style.display = "inline";
    document.getElementById("emptyMsg_userpass2").style.display = "none";
  } 
  else if (user_password2.value == "") {
    document.getElementById("emptyMsg_userpass1_1").style.display = "inline";
    document.getElementById("emptyMsg_userpass2").style.display = "none";
  }
  else if(user_password1.value!=user_password2.value){
    document.getElementById("emptyMsg_userpass2").style.display = "inline";
  }
   else {
    $.ajax({
      url:
        "http://localhost:8080/register/" + user_name1.value + "/" + user_password1.value,
      type: "get",
      success: function(data) {
          if(data=="success"){
            alert("注册成功，请登陆")
            window.location.href = "login.html?username=" + user_name1.value;
          }
          else{
            alert("账号已存在，请重新输入");
            window.location.href = "login.html";
          }
      },
      error: function() {
          alert("注册失败，请重新注册！");
          window.location.href="login.html";
      }
    });
  }
}

function taskname_empty() {
  var x = document.getElementById("task_name").value;
  if (x == "")
      alert("请输入任务名")
}

function submitTask(){
    var task_name=document.getElementById("task_name");
    var user_name=GetQueryString("user_name");
    // var now=new Date();
    // alert(now.getDate());
    var oTxt=document.getElementsByTagName("input")[0];
    var costTime=oTxt.value;   //这里是1：20格式，以字符串形式传入服务器
    taskname_empty();
    $.ajax({
      url:
      // addTask/{user_name}/{task_name}/{task_costtime}
        "http://localhost:8080/addTask/" + user_name + "/" +task_name.value+"/"+costTime,
      type: "get",
      success: function() {
          
          window.location.href="task.html?user_name="+user_name;
      },
      error: function() {
          
      }
    });
  }