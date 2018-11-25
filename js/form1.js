$().ready(function(){

  $('#myForm').on('submit', function(e){
    e.preventDefault();
    if($("#phone").text() !== ''){
      $.ajax('https://webdev-api.loftschool.com/sendmail', {
        type: "POST",
        data: $(this).serializ(),
        success: function(data){
          console.log('done');
          $(".modalOrder").css('display', 'block');
          $(".modal__text").text('Произошла ошибка');
          console.log(data);          
        }
      })

    }else {
      $(".modalOrder").css('display', 'block');
      $(".modal__text").text('Укажите свои данные');
    }
  })

});