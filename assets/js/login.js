$(function () {
    // 登录注册页面
    $('#link_login').on('click', function () {
        $('.reg_box').hide();
        $('.login_box').show();
    });
    $('#link_reg').on('click', function () {
        $('.login_box').hide();
        $('.reg_box').show();
    });
    var form = layui.form
    form.verify({
        pwd:[ /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格']
    })
})