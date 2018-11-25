$().ready(function(){ 

  let currentSlide = 0;

  let arrayImgList = ['../image/burgers-slider/black_br.png', 
  '../image/burgers-slider/chiken_br.png', 
  '../image/burgers-slider/nyc_diner-baco_cheeseburger.png', 
  '../image/burgers-slider/sandwich_br.png', 
  '../image/burgers-slider/spicy_shrimp_br.png']

  let odjectlist = [
    {
      src: '../image/burgers-slider/black_br.png',
      burgerName: 'Dark Beef Burger',
      title: 'Ваш старый добрый знакомый, с рубленным бифштексом с 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../image/burgers-slider/chiken_br.png',
      burgerName: 'Chiken Burger',
      title: 'Ваш старый куриный бургер, с рубленным бифштексом с 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../image/burgers-slider/nyc_diner-baco_cheeseburger.png',
      burgerName: 'NYC Diner-baco Cheeseburger',
      title: 'Ваш старый знакомый бургер "Нью-Йорк", с рубленным бифштексом с 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../image/burgers-slider/sandwich_br.png',
      burgerName: 'Sandwich',
      title: 'Любимый сэндвич, с рубленным бифштексом с 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../image/burgers-slider/spicy_shrimp_br.png',
      burgerName: 'Spicy Shripm Burger',
      title: 'Самый пикантный бургер, с рубленным бифштексом с 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
  ]


  $('#moveback').on('click', function(){
    console.log('backward');
    if (currentSlide >0){
      currentSlide--;
      let current = odjectlist[currentSlide];
      $('.burger__pic').attr("src",current.src);
      $('.section-title--burger').text(current.burgerName);
      $('.burger__text').text(current.title);


    }
  });

  $('#moveforward').on('click', function(){
    console.log('forward');
    if (currentSlide < odjectlist.length-1){
      currentSlide++;
      let current = odjectlist[currentSlide];
      $('.burger__pic').attr("src",current.src);
      $('.section-title--burger').text(current.burgerName);
      $('.burger__text').text(current.title);
    }
  });


});