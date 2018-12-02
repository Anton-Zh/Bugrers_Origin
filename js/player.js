let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      controls: 0,
      disablekb: 0,
      modestbranding: 0,
      rel: 0,
      autoplay: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange (event) {
  
  switch(event.data) {
    case 1: 
      $('.player__start').addClass('paused');
      $('.player__wrapper').addClass('active');
      break;
    case 2:
    $('.player__start').removeClass('paused');
  }
}

function onPlayerReady () {
  const duration = player.getDuration();
  let = interval;
  $('.player').removeClass('hidden');
  updateTimer();
  clearInterval(interval);
  intarval = setInterval(() => {
    const complited = player.getCurrentTime();
    const percent = (complited / duration) * 100;
    updateTimer();
    changeButtonPosition(percent);

  }, 1000);

}

function updateTimer() {
  $('player__duration-complited').text(formatTime(player.getCurrentTime() ));
  $('player__duration-estimate').text(formatTime(player.getDuration() ));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formattedSeconds;
}


$('player__start').on('click', e => {

  // -1 - воспроизведение видео не началось
  // 0 - воспроизведение видео завершено
  // 1 - воспроизведение
  // 2 - пауза
  // 3 - буферизация
  // 5 - видео находится в очереди

  const playerStatus = player.getPlayerState();

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});

$('.player__playback').on('click', e => {

  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercent = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

  changeButtonPosition(percent);
  player.seekTo(newPlayerTime);

});

$('.player__splash').on('click', e => {
  player.playVideo
});
function changeButtonPosition(percent) {
  $('player__playback-button').css({
    left: `${persent}%`
  });
}