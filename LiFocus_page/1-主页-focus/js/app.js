new Vue({
    el:"#users",
    data:{
        successMsg:"登陆成功，正在跳转...",
        failMsg:"账号或密码有误",
        username:"",
    },
    methods:{
        GetQueryString:function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
	    },
	    login:function (){	
		//元素中获取账户名与密码
		var user_name=document.getElementById("user");
		var user_password=document.getElementById("pass");
        $.ajax({
			url:"http://localhost:8080/"+user_name.value+"/"+user_password.value,
			typy:"get",
			success:function(date){
				alert(date.user_name);
				window.location.href="main_focus.html?user_name="+user_name.value;
				console.log(date);
			},
			error:function() {
				alert("no");
			}
		})
		}
	},

})