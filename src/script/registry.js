import './jQuery.js';
import './jquery.md5.js';
//注册js
let reg1 = /(^1[3-9]\d{9}$)/;
//手机号验证
let reg2 = /^.{6,16}$/;
//密码验证
let reg3 = /^.{4,8}$/;
//用户名注册
function check() {
        var allPass = document.querySelectorAll('.yz[dateset-pass="ture"]');
        // console.log(allPass.length);
        // console.log(submit);
        if (allPass.length === 3) {
            $('.primarybtn').removeAttr('disabled');
            $('.primarybtn').css({"background":"green"});
            $('.primarybtn').css({"cursor":"pointer"});
            $('.primarybtn').css({"color":"#fff"})
        }else{
            $('.primarybtn').css({"background":"#e9e9e9"});
            $('.primarybtn').css({"cursor":"default"});
            $('.primarybtn').css({"color":"#9b9b9b"})
        }
    };
$(
    //console.log(1)
    $('.foname').on('input', () => {
        $('.yh').hide();
        if (reg3.test($('.foname').val())) {
            $('.yz1').text('通过验证');
            $('.yz1').attr({ 'dateset-pass': 'ture' });
        } else {
            $('.yz1').text('无效昵称');
            $('.yz1').attr({ 'dateset-pass': 'false' });
        }
        check()

    }),
    $('.fotel').on('input', () => {
        $('.dh').hide();
        if (reg1.test($('.fotel').val())) {
            $('.yz2').text('通过验证');
            $('.yz2').attr({ 'dateset-pass': 'ture' });
        } else {
            $('.yz2').text('无效号码');
            $('.yz2').attr({ 'dateset-pass': 'false' });
        }
        check()

    }),
    $('.fopassword').on('input', () => {
        $('.mima').hide();
        if (reg2.test($('.fopassword').val())) {
            $('.yz3').text('通过验证');
            $('.yz3').attr({ 'dateset-pass': 'ture' });
        } else {
            $('.yz3').text('无效密码');
            $('.yz3').attr({ 'dateset-pass': 'false' });
        }
        check()
    }),
    $('.primarybtn').on('click',function(){
        let password = $.md5($('[name=password]').val());
        $.ajax({
            type:"post",
            url:"http://10.31.161.124/dashboard/smartisan.com/php/registry.php",
            data:{
                name:$('[name=name]').val(),
                tel:$('[name=tel]').val(),
                password:password,
            },
            dataType:"json",
            success:function(res){
                if(res == '用户已存在'){
                    alert(res);
                }else{
                    window.location.href = '../html/log.html';
                }
            }
        });

    })

)