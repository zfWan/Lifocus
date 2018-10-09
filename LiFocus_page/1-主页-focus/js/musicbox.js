function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

$(function() {
// $('#slider').cycle({speed:5000, timeout: 60000,random:  1});

//是否时间足迹

    $(document).ready(function(){
        var owl = $(".owl-carousel").data('owlCarousel');
        var check = 0;
        setTimeout(function () {$("#opentxt").animate({marginTop:"100px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},2500);
        setTimeout(function () {$("#showin1").animate({marginTop:"50px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},500);
        setTimeout(function () {$("#player").animate({marginLeft:"50px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},500);
        setTimeout(function () {$("#showin3").animate({marginBottom:"50px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},500);
        setTimeout(function () {$("#showin4").animate({marginBottom:"50px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},500);
        setTimeout(function () {$("#showin5").animate({marginBottom:"50px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},500);
        setTimeout(function () {$("#showin6").animate({marginBottom:"50px", opacity:"show"},{ duration: 1000 }).fadeIn(2000);},500);
        $('#y').click(function () {
            if(GetQueryString("user_name")==null||GetQueryString("user_name")=="null") 
                window.location.href = "login.html";
            else
               window.location.href="task.html?user_name="+GetQueryString("user_name");
            // $("#slider2").fadeIn(1000);
            // $("#opentxt").animate({marginTop:"100px", opacity:"0"},{ duration: 1000 }).fadeOut(1500);
            //$(".owl-controls").show();
        });
        $('#nn').click(function () {
            $("#opentxt").animate({marginTop:"100px", opacity:"0"},{ duration: 1000 }).fadeOut(1500);
            //$(".owl-controls").show();
        });

        $('#subject').on("click", function(){
            if($("#slidetheme").hasClass("closed"))
                $("#slidetheme").removeClass("closed");
            else
                $("#slidetheme").addClass("closed");
            //if($('#slidetheme').css('display') == "none")
            //    //$('#slidetheme').fadeIn();
            //    $('#slidetheme').css('display', "table");
            //
            //else
            //    $('#slidetheme').fadeOut();
        });


        //slidestheme
        $('.slidetheme-cell').click(function () {
            window.location.href = this.id;
        });

//时间足迹按钮.
        $('#timetrack').click(function () {
            // if(!$('#logout').length) window.location.href = "/loginpage";
            // if(!$('#track').length){
            //     var content = "<iframe id=\"track\" src='../html/track.html' frameborder=\"0\" ></iframe>";
            //     $('#slider2').append(content);
            // }
            // var o =document.getElementById("slider2").style.display;
            // if(o == "none")
            //     $("#slider2").fadeIn(1000);
            // else
            //     $("#slider2").fadeOut(1000);
            if(GetQueryString("user_name")==null||GetQueryString("user_name")=="null") 
                window.location.href = "login.html";
            else
               window.location.href="task.html?user_name="+GetQueryString("user_name");
        });
//时间足迹按钮.


//白噪音幻灯片
        $('#a1').on("click", function(e){
            if(check == 0)
            {}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            owl.goTo(0)
            check = 0;
            $(".owl-controls").hide();
        });

        $('#a2').on("click", function(e){
            if(check == 0)
            {}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            owl.goTo(0)
            check = 0;
            $(".owl-controls").hide();
        });

        $('#a3').on("click", function(e){
            if(check == 0)
            {}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            owl.goTo(0)
            check = 0;
            $(".owl-controls").hide();
        });

        $('#n').on("click", function(e){
            if(check == 0)
            {}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            owl.goTo(0)
            check = 0;
            $(".owl-controls").hide();
        });

        $('#ca').on("click", function(e){
            if(check == 0)
            {
                check = 1;}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            var owl = $("#owl-demo-global"),
                i = 0,
                textholder,
                booleanValue = false;

            //init carousel
            owl.owlCarousel();

            e.preventDefault();
            var content = "<div class=\"item\"><div id=\"slider3\"><iframe id=\"track\" src='http://chanfocus.com/ca' frameborder=\"0\" ></iframe></div></div>";
            owl.data('owlCarousel').addItem(content);
            owl = $(".owl-carousel").data('owlCarousel');
            owl.goTo(3)
            check = 1;
            $(".owl-controls").show();

        });

        $('#un').on("click", function(e){
            if(check == 0)
            {
                check = 1;}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            var owl = $("#owl-demo-global"),
                i = 0,
                textholder,
                booleanValue = false;

            //init carousel
            owl.owlCarousel();

            e.preventDefault();
            var content = "<div class=\"item\"><div id=\"slider3\"><iframe id=\"track\" src='http://chanfocus.com/un' frameborder=\"0\" ></iframe></div></div>";
            owl.data('owlCarousel').addItem(content);
            owl = $(".owl-carousel").data('owlCarousel');
            owl.goTo(3)
            check = 1;
            $(".owl-controls").show();

        });

        $('#ac').on("click", function(e){
            if(check == 0)
            {
                check = 1;}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            var owl = $("#owl-demo-global"),
                i = 0,
                textholder,
                booleanValue = false;

            //init carousel
            owl.owlCarousel();

            e.preventDefault();
            var content = "<div class=\"item\"><div id=\"slider3\"><iframe id=\"track\" src='http://chanfocus.com/ac' frameborder=\"0\" ></iframe></div></div>";
            owl.data('owlCarousel').addItem(content);
            owl = $(".owl-carousel").data('owlCarousel');
            owl.goTo(3)
            check = 1;
            $(".owl-controls").show();

        });

        $('#fa').on("click", function(e){
            if(check == 0)
            {
                check = 1;}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            var owl = $("#owl-demo-global"),
                i = 0,
                textholder,
                booleanValue = false;

            //init carousels
            owl.owlCarousel();

            e.preventDefault();
            var content = "<div class=\"item\"><div id=\"slider3\"><iframe id=\"track\" src='http://chanfocus.com/fa' frameborder=\"0\" ></iframe></div></div>";
            console.log(content);
            owl.data('owlCarousel').addItem(content);
            owl = $(".owl-carousel").data('owlCarousel');
            owl.goTo(3)
            check = 1;
            $(".owl-controls").show();

        });

        $('#ra').on("click", function(e){
            if(check == 0)
            {
                check = 1;}else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            var owl = $("#owl-demo-global"),
                i = 0,
                textholder,
                booleanValue = false;

            //init carousel
            owl.owlCarousel();

            e.preventDefault();
            var content = "<div class=\"item\"><div id=\"slider3\"><iframe id=\"track\" src='http://chanfocus.com/ra' frameborder=\"0\" ></iframe></div></div>";
            owl.data('owlCarousel').addItem(content);
            owl = $(".owl-carousel").data('owlCarousel');
            owl.goTo(3)
            check = 1;
            $(".owl-controls").show();

        });

        $('#wi').on("click", function(e){
            if(check == 0)
            {
                check = 1;
            }else{
                e.preventDefault();
                $("#owl-demo-global").data('owlCarousel').removeItem();
                check = 0;
            }
            var owl = $("#owl-demo-global"),
                i = 0,
                textholder,
                booleanValue = false;

            //init carousel
            owl.owlCarousel();

            e.preventDefault();
            var content = "<div class=\"item\"><div id=\"slider3\"><iframe id=\"track\" src='http://chanfocus.com/wi' frameborder=\"0\" ></iframe></div></div>";
            owl.data('owlCarousel').addItem(content);
            owl = $(".owl-carousel").data('owlCarousel');
            owl.goTo(3)
            check = 1;
            $(".owl-controls").show();

        });
//白噪音幻灯片
    });
// ²¥·ÅÆ÷
    var Player;
    Player = {
        // ¸èÇúÂ·¾¶
        path: 'sound/',

        // ¸èÇúÊý¾Ý
        data: null,


        // µ±Ç°²¥·Å¸èÇúµÄ Ë÷Òý
        currentIndex: 0,//10ÊÇ¸èÇúÊýÁ¿£¬¸Ä±ä

        //  ²¥·ÅÆ÷ÔªËØjquery¶ÔÏó
        $audio: $('#audio'),

        // ¸èÇúÁÐ±í
        $mList: $('#playlist'),

        //ÕýÔÚ²¥·ÅµÄ¸èÇú
        $rmusic: $('#rmusic'),


        // ³õÊ¼»¯ Êý¾Ý
        init: function () {

            // Êý¾ÝÒ»°ãÀ´×Ô·þÎñÆ÷¶Ë,Í¨¹ýajax ¼ÓÔØÊý¾Ý,ÕâÀïÊÇÄ£Äâ
            //¸èÇúµÄÊý¾Ý
            Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g15.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g16.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g17.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g18.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g19.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g20.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g21.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g22.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g23.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g24.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g25.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g26.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p15.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p16.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p17.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p18.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p19.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p20.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p21.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z15.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z16.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z17.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z18.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z19.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z20.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z21.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z22.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z23.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n15.mp3'];
            //if (class="a") { Player.data = ['a.mp3'];}
        },


        // ¾ÍÐ÷
        ready: function () {
            var playnumber = 0;//²¥µ½µÚ¼¸Ê×¸è

            function randomsort(a, b) {return Math.random()>.5 ? -1 : 1; }//Ëæ»úÅÅÁÐ
            // ¿ØÖÆ
            Player.data = Player.data.sort(randomsort);

            Player.currentIndex = playnumber;
            Player.audio = Player.$audio.get(0);

            Player.$rmusic.html(Player.data[Player.currentIndex]);
            var currentMusic=Player.data[Player.currentIndex];
            //²¥·ÅÒôÀÖ
            currentMusic = currentMusic.substring(0,currentMusic.indexOf('.'));
            console.log("Player.currentIndex : " + Player.currentIndex);
            Player.audio.src =Player.data[Player.currentIndex];
            play.className="pause";

            //×Ô¶¯ÏÂÒ»Ê×
            audio.onended=function(){$('#next').click();};

            $('#a1').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g15.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g16.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g17.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g18.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g19.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g20.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g21.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g22.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g23.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g24.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g25.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/g26.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#a2').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z15.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z16.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z17.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z18.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z19.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z20.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z21.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z22.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/z23.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#a3').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p15.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p16.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p17.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p18.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p19.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p20.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/p21.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#n').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n2.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n3.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n4.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n5.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n6.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n7.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n8.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n9.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n10.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n11.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n12.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n13.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n14.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/n15.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#ca').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/ca1.mp3',
                'http://chansound.oss-cn-shanghai.aliyuncs.com/ca2.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#un').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/un.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#ac').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/ac.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#fa').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/fa.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#ra').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/ra.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌
            $('#wi').click(function () {Player.data = [
                'http://chansound.oss-cn-shanghai.aliyuncs.com/wi.mp3'];
                $('#next').click();
                $('.button-collapse').sideNav('hide');});//换歌


//$('#myselect').on('click', function(){
//                        inputValuePreset(document.getElementById("myselect").value);
            //               });

            //   function inputValuePreset(PriceName){//这个是输入数据预处理函数

            //       switch(PriceName){
            //           case 'wi':
            //           Player.data = [
            //           'http://chansound.oss-cn-shanghai.aliyuncs.com/wi.mp3'];$('#next').click();
            //           break;
            //       }
//    }



            // ²¥·ÅÔÝÍ£ºÍ¼ÌÐø
            $('#play').click(function () {

                if(audio.paused){
                    play.className="pause";
                    audio.play();
                    //playtn = 0;
                }else{
                    play.className="play";
                    audio.pause();
                    playtn = 1;
                }
                if (Player.currentIndex == -1) {
                    $('#btn-next').click();
                }
            });

            //ÒôÁ¿

            var volumec=1;

            $('#volume').click(function () {

                if(volumec==1){
                    audio.volume=audio.volume-0.33;
                    if(audio.volume<=0.7){
                        volume.className="volume3";}
                    if(audio.volume<=0.4){
                        volume.className="volume2";}
                    if(audio.volume<=0.1){
                        volume.className="volume1";
                        audio.volume=0;volumec=0;return;}
                }
                if(volumec==0){

                    audio.volume=audio.volume+0.33;
                    if(audio.volume>=0.3){
                        volume.className="volume2";}
                    if(audio.volume>=0.6){
                        volume.className="volume3";}
                    if(audio.volume>=0.9){
                        volume.className="volume4";
                        audio.volume=1;volumec=1;}
                }
            })

            // ²¥·ÅÖ¸¶¨¸èÇú

            // ÏÂÒ»Çú
            $("#next").click(function () {
                playnumber++;
                //ÏÂÒ»Çú
                if (Player.currentIndex == -1) {
                    Player.currentIndex = 0;
                } else {
                    Player.currentIndex= playnumber;//²»ÖØ¸´²¥·Å

                    if ( playnumber >= Player.data.length ) {
                        Player.data = Player.data.sort(randomsort);
                        playnumber=0;
                        Player.currentIndex = playnumber; }//²¥ÍêÁÐ±íÖØÐÂËæ»ú

                }

                currentMusic = currentMusic.substring(0,currentMusic.indexOf('.'));
                console.log("Player.currentIndex : " + Player.currentIndex);
                Player.audio.src =Player.data[Player.currentIndex];
                play.className="pause";


            });

        },

    };

    Player.init();
    Player.ready();


});

function resetPlayer() {
    audio.currentTime = 0; context.clearRect(0,0,canvas.width,canvas.height);
    playpause.title = "Play";
    playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
}

