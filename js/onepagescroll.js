const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();


const setActiveMenuItem = itemEq => {
  $('fixed-menu__item')
  .eq(itemEq)
  .addClass("active")
  .siblings()
  .removeClass("active");
};

const perfomTransition = sectionEq => {
  const position = `${sectionEq * -100}`%;
  const mouseInertionIsFinished = 300;
  const transitionIsFinished = 1000;

  if (inScroll = false) {
  inScroll = true;
  display.css({
    transform: `translateY(${position})`
  });

  sections
  .eq(sectionEq)
  .addClass("active")
  .siblings()
  .removeClass("active");

  setTimeout(() => {
    inScroll = false
    setActiveMenuItem(sectionEq);
  }, transitionIsFinished + mouseInertionIsFinished);
} 
};


const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const prevSection = activeSection.prev();
  const nextSection = activeSection.next();

  if (direction == "up" && prevSection.length) {
    perfomTransition(prevSection.index());
  }
  if (direction == "down" && nextSection.length) {
    perfomTransition(nextSection.index());
  }
};


$(document).on({
  wheel: e => {
  const direction = e.originalEvent.deltaY > 0 ? "down" : "up";
    scrollToSection(direction);   
  },
 
  keydown: e => {
    switch(e.keyCode) {
      case 40:
        scrollToSection("down");
        break;
      case 38:
        scrollToSection("up");
        break;
    }
  }
});

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');
  performTransition(target);
});


if (isMobile) {
  $(document).swipe({
    swipe: function(
      event, 
      direction, 
      distance, 
      duration, 
      fingerCount, 
      fingerData
      ) {
        /*
        * потому что библиотека возвращает
        */
      const scrollDirection = direction == 'down' ? 'up' : 'down';
      scrollToSection(scrollDirection);
    }
  });
}

