$().ready(function(){

  let activeClass = "burger__composition--active";

  let btn = $('.composition__list');

  btn.click(function(event){
    event.preventDefault();

    var parent = $(this).parent();

    if (parent.hasClass(activeClass)){
      btn.parent().removeClass(activeClass);
    }else{
      btn.parent().removeClass(activeClass);
      parent.addClass(activeClass);
    }
  });
});