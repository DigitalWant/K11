$(document).ready(function () {
	$("#btnAward").on('click', function () {
		var name = $("#frmname").val();
		var tel = $("#frmphoneNumber").val();
		var email = $("#frmemail").val();
		var score = $("#hdnScore").val();
		var awardId = $("#hdnAwardId").val();
		var awardCount = $("#hdnAwardCount").val();
		var awardDesc = $("#hdnAwardDesc").val();

		var req = new Object();
		req.name = name;
		req.tel = tel;
		req.email = email;
		req.score = score;
		req.awardId = awardId;
		req.awardCount = awardCount;
		req.awardDesc = awardDesc;
		$.ajax({
			type: "POST",
			datatype: "json",
			data: JSON.stringify(req),
			url: "/umbraco/Api/Member/Add",
			success: function (data) {
				if (data.success) {
					console.log(data.message);
					$("#popupReward").hide();
				}
				else
				{
					console.log(data.message);
					alert(data.message);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {

			}
		});
	});
});