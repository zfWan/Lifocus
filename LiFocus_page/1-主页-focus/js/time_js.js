
i = 0;
j = 0;
count = 0;
MM = 59;
SS = 0;  // 秒 90s
MS = 0;
totle = (MM+1)*600;
d = 180*(MM+1);
MM = "0" + MM;
var gameTime = 61;//显示时间-1

//count down
var playtn = 1;

var showTime = function(){
	if(playtn!=1){
    totle = totle - 1;
    if (totle == 0) {
        clearInterval(s);
        clearInterval(t1);
        clearInterval(t2);
        $(".pie2").css("-o-transform", "rotate(" + d + "deg)");
        $(".pie2").css("-moz-transform", "rotate(" + d + "deg)");
        $(".pie2").css("-webkit-transform", "rotate(" + d + "deg)");
    } else {
        if (totle > 0 && MS > 0) {
            MS = MS - 1;
            if (MS < 10) {
                MS = "0" + MS
            }
            ;
        }
        ;
        if (MS == 0 && SS > 0) {
            MS = 10;
            SS = SS - 1;
            if (SS < 10) {
                SS = "0" + SS
            }
            ;
        }
        ;
        if (SS == 0 && MM > 0) {
            SS = 60;
            MM = MM - 1;
            if (MM < 10) {
                MM = "0" + MM
            }
            ;
        }
        ;
    }
    ;
	    if(SS == 1 && MM == 0) {
			//playtn = 1;
			//snd.play();
			//audio.pause();
			//clearInterval("showTime()");
			//clearInterval("start1()");
			//setTimeout('$(".playt").click()', 10);//一分钟的时候停下	
			$(".playt").click();
	};
	alert(MM);
    $(".time").html( MM + "min");}else{}
	
};

//start
var start1 = function(){
	if(playtn!=1){
	//i = i + 0.6;
	i = i + 360/((gameTime)*10*60);  //旋转的角度  90s 为 0.4  60s为0.6，,*60是分钟
	count = count + 1;
	if(count <= (gameTime/2*10*60)){  // 一半的角度  90s 为 450，*60是分钟
		$(".pie1").css("-o-transform","rotate(" + i + "deg)");
		$(".pie1").css("-moz-transform","rotate(" + i + "deg)");
		$(".pie1").css("-webkit-transform","rotate(" + i + "deg)");
	}else{
		$(".pie2").css("backgroundColor", "#d13c36");
		$(".pie2").css("-o-transform","rotate(" + i + "deg)");
		$(".pie2").css("-moz-transform","rotate(" + i + "deg)");
		$(".pie2").css("-webkit-transform","rotate(" + i + "deg)");
	}}else{}
};


var countDown = function() {	
    var delay = 1000;
    var now, before = new Date();
	//80*80px 时间进度条
	i=0;
	j=0;
	count=0;
    MM = 59;
    SS = gameTime;
    MS = 0;
	totle = (MM + 1) * gameTime * 10;
    d = 180 * (MM + 1);
	if(playtn!=0){

    //showTime();
    setInterval(function() {
    now = new Date();
    var elapsedTime = (now.getTime() - before.getTime());
    if(elapsedTime > delay)
	{   //alert(elapsedTime);
		showTime();
	    start1();
	}else {
		//alert(elapsedTime);
	    showTime();
	    start1();
		before = new Date();}
		;},delay/10);
	//s = setInterval("showTime()", 100);//60秒count 1分钟6000,1秒钟100
    //start1();
    //t1 = setInterval("start1()", 100); 
	}
	else{}        
}

//play/pasuse
var playandpause= function(){	
            $(".playt").click(function () {
                if(audio.paused){ 				      
			         playtn = 0;
					 play.className="pause";
					 //alert(playtn);
					 snd.play();
					 countDown();	//重新计时			 					 
					 audio.play();			 
			    }else{			         
			         playtn = 1;
					 play.className="play";
					 //alert(playtn);
					 snd.play();
					 audio.pause();					 
		             }
                });
}

//按钮音效叮叮
var snd = new Audio("http://www.ikoumi.com/yunpan/cRBR3VzWsJzAI/3fd0.wav");

