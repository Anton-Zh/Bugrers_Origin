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
  $('wrapper').on('click', '.fixed-menu__item', function () {
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

    moveSection(container, nextItem.index());
  });

  // mousewheel action
  $('.maincontent').on('mousewheel DOMMouseScroll', function (e) {
    let deltaY = e.originalEvent.wheelDelta,
      mozDeltaY = e.originalEvent.detail,
      $this = $(this),
      container = $this.closest('.maincontent'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, reqItem;

    if (deltaY < 0 || mozDeltaY > 0) { // scroll down
      existedItem = nextItem;
    };

    if (deltaY > 0 || mozDeltaY < 0) { //scroll up
      existedItem = prevItem;
    };

    reqItem = existedItem.length ? existedItem.index() : items.first();
    moveSection(reqItem);
  });


  //swipe action
  $(function () {
    // Enable swiping...
    $(".section").swipe({
      swipeStatus: function (event, phase, direction, distance) {
        if (phase == "end") {
          var items = $('.section'),
            activeItem = items.filter('.active'),
            nextItem = activeItem.next(),
            prevItem = activeItem.prev(),
            existedItem, reqItem;

          if (direction == 'up') { // swipe up
            existedItem = nextItem;
          }

          if (direction == 'down') { // swipe down
            existedItem = prevItem;
          }

          reqItem = existedItem.length ? existedItem.index() : items.first();
          moveSection(reqItem);
        };
      },
      triggerOnTouchEnd: false,
      threshold: 100
    });
  });

  // key action

  $(document).on('keydown', e => {
    let items = $('.section'),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, reqItem;

    switch (e.keyCode) {
      case 40:
        // function action
        existedItem = nextItem;
        break;

      case 38:
        // function action
        existedItem = prevItem;
        break;
    };

    reqItem = existedItem.length ? existedItem.index() : items.first();
    moveSection(reqItem);
  })

  // quick clicks protection
  var flag = true;

  var changeFlag = function () {
    const mouseInertionIsFinished = 400,
      animationDuration = 700;

    setTimeout(function () {
      flag = true;
    }, animationDuration + mouseInertionIsFinished);
  }


  var moveSection = function (sectionNum) {
    const items = list.find('.section'),
      activeSection = items.filter('.active'),
      reqItem = items.eq(sectionNum),
      reqIndex = reqItem.index(),
      duration = 700;

    if (flag) {

      flag = false;

      if (reqItem.length) {
        list.animate({
          'top': -reqIndex * 100 + '%'
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