$(function(){

// モーダルウィンドウが開くときの処理	
$(".modal_1").click(function(){
	$(".overlay").velocity("fadeIn",{
		duration:350,
		complete:function(){
			$("#modal01").velocity("fadeIn",{
				duration:350});
		}
	});
	return false;
});

// モーダルウィンドウが閉じるときの処理	
$(".modalclose").click(function(){
	$("#modal01").velocity("fadeOut",{
		duration:350,
		complete:function(){
			$(".overlay").velocity("fadeOut",{
				duration:350});
		}
	});
	return false;
});


});