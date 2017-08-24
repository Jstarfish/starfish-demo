<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ include file="/views/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0064)http://www.17sucai.com/preview/137615/2015-01-15/demo/index.html -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD><META content="IE=11.0000" http-equiv="X-UA-Compatible">

<META http-equiv="Content-Type" content="text/html; charset=utf-8">
<TITLE>登录页面</TITLE>
<link href="${basePath}/css/login.css" rel="stylesheet">
<SCRIPT src="${basePath}/js/jquery-1.9.1.min.js" type="text/javascript"></SCRIPT>

<SCRIPT type="text/javascript">
    $(function(){
        //得到焦点
        $("#password").focus(function(){
            $("#left_hand").animate({
                left: "150",
                top: " -38"
            },{step: function(){
                if(parseInt($("#left_hand").css("left"))>140){
                    $("#left_hand").attr("class","left_hand");
                }
            }}, 2000);
            $("#right_hand").animate({
                right: "-64",
                top: "-38px"
            },{step: function(){
                if(parseInt($("#right_hand").css("right"))> -70){
                    $("#right_hand").attr("class","right_hand");
                }
            }}, 2000);
        });
        //失去焦点
        $("#password").blur(function(){
            $("#left_hand").attr("class","initial_left_hand");
            $("#left_hand").attr("style","left:100px;top:-12px;");
            $("#right_hand").attr("class","initial_right_hand");
            $("#right_hand").attr("style","right:-112px;top:-12px");
        });

        $("#loginBtn").click(function(){
            var regAcct=$('#userName').val();
            var regPwd=$('#password').val();
            $("#error").empty();
            if($.trim(regAcct) == ''){
                $("#error").append("请输入用户名");
                return false;
            }
            if($.trim(regPwd) == ''){
                $("#error").append("请输入密码");
                return false;
            }
            $("#loginForm").submit();
        })
    });


</SCRIPT>

<META name="GENERATOR" content="MSHTML 11.00.9600.17496"></HEAD>
<BODY>
<form action="login.do" method="post" id="loginForm">
<DIV class="top_div"></DIV>
<DIV style="background: rgb(255, 255, 255); margin: -100px auto auto; border: 1px solid rgb(231, 231, 231); border-image: none; width: 400px; height: 200px; text-align: center;">
    <DIV style="width: 165px; height: 96px; position: absolute;">
        <DIV class="tou"></DIV>
        <DIV class="initial_left_hand" id="left_hand"></DIV>
        <DIV class="initial_right_hand" id="right_hand"></DIV></DIV>
    <P style="padding: 30px 0px 10px; position: relative;">
        <SPAN  class="u_logo"></SPAN>
        <INPUT class="ipt" id="userName" name="userName" type="text" placeholder="请输入用户名或邮箱">
    </P>
    <P style="position: relative;">
        <SPAN class="p_logo"></SPAN>
        <INPUT class="ipt" id="password" name="password" type="password" placeholder="请输入密码">
    </P>
    <label id="error" class="error"></label>
    <DIV style="height: 50px; line-height: 50px; margin-top: 30px; border-top-color: rgb(231, 231, 231); border-top-width: 1px; border-top-style: solid;">
        <P style="margin: 0px 35px 20px 45px;">
            <SPAN style="float: left;">
                <A style="color: rgb(204, 204, 204);"  href="#">忘记密码?</A></SPAN>
            <SPAN style="float: right;">
                <A style="color: rgb(204, 204, 204); margin-right: 10px;"href="#">注册</A>
            <button style="background: rgb(0, 142, 173); padding: 7px 10px; border-radius: 4px; border: 1px solid rgb(26, 117, 152); border-image: none; color: rgb(255, 255, 255); font-weight: bold;"  id="loginBtn">登录</button>
           </SPAN>
        </P>
    </DIV>
</DIV>
<div style="text-align:center;">
</div>
</form>
</BODY></HTML>
