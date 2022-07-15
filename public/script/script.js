var hambiMenu = false;
$(document).ready(function(){

    $(window).scroll(function(e){
      parallax();
    });
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.header').css('background-position','50% '+(scrolled*0.035)+'em');
      $('.header_logo').css('padding-top',(scrolled*0.035)+'em');
    };
  });
  function modalView(element){
    $('.modal_overlay').addClass('active');
    $('.modal_content_wrap').addClass('active');
    $('#modal_content').html(element);
  }
function modalClose(){
 // $('#modal_content').html("");
  $('.modal_content_wrap').removeClass('active');
  $('.modal_overlay').removeClass('active');
  $('.modal_Q_content_wrap').removeClass('active');
}
function scroller(section) {
  $('html, body').animate({
      scrollTop: $(section).offset().top-100
  }, 1000);
}
function hambiClick(){
  if(!hambiMenu){
    $('.navbar_links ul').css('display','flex');
    $('.close').css('display','block');
    $('.open').css('display','none');
    hambiMenu = true;
  }else{
    $('.navbar_links ul').css('display','none');
    $('.close').css('display','none');
    $('.open').css('display','block');
    hambiMenu = false;
  }
}

function modalQView(id){
  $('.modal_Q_content_wrap').scrollTop=0;
  $('#modal_Q_content').html("");
  $('.modal_overlay').addClass('active');
  $('.modal_Q_content_wrap').addClass('active');
  modalContent= "";
  "<section id='modal_top'></section><div class='kerdes'><h2>"+questions[id].kerdes+"</h2></div>";
  if(questions[id].tartalom != null){
    modalContent+="<div class='modal_content'>"+questions[id].tartalom+"</div>";
}else{
  modalContent+="<div class='kerdes'><h2>"+questions[id].kerdes+"</h2></div>";
}
modalContent+="<div class='valaszok'>"+
  "<div class='valasz card_btn' onclick='modalQView("+questions[id].next1+")'>"+questions[id].valasz1+"</div>";
  if(questions[id].next2 != null){
    modalContent+="<div class='valasz card_btn' onclick='modalQView("+questions[id].next2+")'>"+questions[id].valasz2+"</div>"
  }
  if(questions[id].next3 != null){
    modalContent+= "<div class='valasz card_btn' onclick='modalQView("+questions[id].next3+")'>"+questions[id].valasz3+"</div>";
  }
  modalContent+="</div>";
  $('#modal_Q_content').html(modalContent);
  $('#modal_Q_content, .modal_Q_content_wrap').animate({
    scrollTop: 0
}, 0);
}