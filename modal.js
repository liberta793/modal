$(function(){

// モーダルウィンドウが開くときの処理	
$(".modalopen").click(function(){
        $(".modal").fadeIn();
	$(this).addClass("open");
	return false;
});

// モーダルウィンドウが閉じるときの処理	
$(".modalclose").click(function(){
	$(this).parents(".modal").fadeOut();
	$(".modalopen").removeClass("open");
	return false;
});  
    
});