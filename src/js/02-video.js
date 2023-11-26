import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

player.on('loaded', function () {
  const checkTimeCode =
    JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? {"seconds":0};
  player.setCurrentTime(checkTimeCode.seconds);
});
