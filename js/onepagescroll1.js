// one page scroll
$(function () {

  const list = $('.maincontent');

  // dots generation
  var generateDots = function () {
    $('.section').each(function () {
      var dot = $('<li>', {
        attr: {
          class: 'fixed-menu__item'
        },
        html: '<a href="#" class="fixed-menu__link"></a>'
      });

      $('.fixed-menu').append(dot);
    });
  };

  generateDots();

  // dots click
  $('body').on('click', '.fixed-menu__item', function () {
    var $this = $(this),
      container = $this.closest('.maincontent'),
      index = $this.index();

    moveSection(container, index);
    activateDot(index);
  })



  // activate dot 
  var activateDot = function (index) {
    $('body')
      .find('.fixed-menu__item')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }


  // click on arrow in hero section
  $('.scroll__to-next--hero').on('click touch', function () {
    var $this = $(this),
      container = $this.closest('.maincontent'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next();
    console.log('tap')
    moveSection(container, nextItem.index());
  });

  // mousewheel action
  $('.maincontent').on('mousewheel DOMMouseScroll', function (e) {
    var deltaY = e.originalEvent.wheelDelta,
      mozDeltaY = e.originalEvent.detail,
      $this = $(this),
      container = $this.closest('.maincontent'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, edgeItem, reqItem;

    if (deltaY < 0 || mozDeltaY > 0) { // scroll down
      existedItem = activeItem.next(),
        edgeItem = items.first();
    };

    if (deltaY > 0 || mozDeltaY < 0) { //scroll up
      existedItem = activeItem.prev(),
        edgeItem = items.last();
    };

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

    moveSection(container, reqItem);
  });

  //touch slide
  $(".maincontent").swipe({
    //Single swipe handler for left swipes
    swipeUp: function (event, direction, distance, duration, fingerCount) {
      var $this = $(this),
      container = $this.closest('.maincontent'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      existedItem, edgeItem, reqItem;
      existedItem = activeItem.next(),
        edgeItem = items.first(),
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSection(container, reqItem);
    },
    swipeDown: function (event, direction, distance, duration, fingerCount) {
      var $this = $(this),
      container = $this.closest('.maincontent'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      existedItem, edgeItem, reqItem;
      existedItem = activeItem.prev(),
        edgeItem = items.last();
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSection(container, reqItem);
    },
    threshold: 75
  });

  // quick clicks protection

  var flag = true;

  var changeFlag = function () {
    setTimeout(function () {
      flag = true;
    }, 500);
  }


  var moveSection = function (container, sectionNum) {
    const items = list.find('.section'),
      activeSection = items.filter('.active'),
      reqItem = items.eq(sectionNum),
      reqIndex = reqItem.index(),
      duration = 500;

    if (flag) {

      flag = false;

      if (reqItem.length) {
        list.animate({
          'top': -reqIndex * 100 + 'vh'
        }, duration, function () {
          activeSection.removeClass('active');
          reqItem.addClass('active');
          activateDot(sectionNum);
        });
      };

      changeFlag();
    }
  }
});