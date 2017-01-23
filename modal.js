$(function(){

  var $modal = $(".modal");
  var $modalOpen = $(".modalopen");
  var $modalClose = $(".modalclose");

  // モーダルウィンドウが開くときの処理
  $modalOpen.click(function(){
    $modal.fadeIn();
    return false;
  });

  // モーダルウィンドウが閉じるときの処理
  $modalClose.click(function(){
    $modal.fadeOut();
    return false;
  });

});