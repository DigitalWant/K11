$(document).ready(function () {
    $("#dataSubmit").on('click', function (e) {
        var tel = $("#txtTel").val();
        var age = $("#txtAge").val();
        var gender = $("#selGender").val();


        function checkMobile() {
            if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(tel))) {
                alert("不是完整的11位手机号或者正确的手机号前七位");
                return false;
            } else {
                return true;
            }
        }

        e.preventDefault();

        if (tel == "" || age == "" || gender == null) {

            alert("请输入相关信息");

        } else {

            if (checkMobile() == true) {
                var tel = $("#txtTel").val();
                var age = $("#txtAge").val();
                var gender = $("#selGender").val();
                var score = $("#hdnScore").val();
                var gold = $("#hdnKey").val();
                var week = $("#hdnWeek").val();
                var req = new Object();
                req.tel = tel;
                req.age = age;
                req.gender = gender;
                req.score = score;
                req.gold = gold;
                req.week = week;
                var param = JSON.stringify(req);
                $.ajax({
                    type: "POST",
                    datatype: "JSON",
                    url: "/umbraco/Api/Member/Add",
                    data: param,
                    success: function (data) {
                        if (data.success) {
                            console.log('form submit success.');
                            $.removeCookie('formData');
                            $.cookie('formData', formData, { expires: 7, path: '/' });
                            //console.log('form submit success.');
                            $.mobile.changePage("#intro");
                        }
                        else {
                            console.log(data.message);
                            $.mobile.changePage("#intro");

                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            }



        }



    });
});