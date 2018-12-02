ymaps.ready(init);

var placemarks = [
  {
      latitude: 59.97,
      longitude: 30.31,
      hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
      balloonContent: [
        '<div class=".map__balloon">',
        'Самые лучшие бургеры у нас!',
        '<br>',
        'Заходите по адресу: ул. Литераторов, д. 19',
        '</div>'
      ]
  },
  {
      latitude: 59.94,
      longitude: 30.25,
      hintContent: '<div class="map__hint">Малый проспект В О д.64</div>',
      balloonContent: [
        '<div class=".map__balloon">',
        'Самые лучшие бургеры у нас!',
        '<br>',
        'Заходите по адресу: Малый проспект В Об д.64',
        '<br>',
        'Насладитетесь настоящим вкусом!',
        '</div>'
      ]
  },
  {
      latitude: 59.93,
      longitude: 30.34,
      hintContent: '<div class="map__hint">наб. реки Фонтанки, д.56</div>',
      balloonContent: [
        '<div class=".map__balloon">',
        '<i>','<b>','Самое лучшее место для встречи с друзьями!','</b>','</i>',
        '<br>',
        'Заходите по адресу: наб. реки Фонтанки, д.56',     
        '</div>'
      ]
  }
],

geoObjects=[];

function init() {
  var map = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  for (var i = 0; i < placemarks.length; i++) {
      geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
      hintContent: placemarks[i].hintContent,
      balloonContent: placemarks[i].balloonContent.join('')
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'image/png/map-marker.png',/*'image/svg/sprite.svg', как указать координаты из спрайта?*/
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57]
      // iconImageClipRect: []
    });
  }

  var clusterer = new ymaps.Clusterer ({
    clusterIcons: [
      {
        href: 'image/steam.png',
        size: [100, 100],
        offset: [-50, -50] 
      }
    ],
    clusterIconsContentLayout: null
  });
  
  map.geoObjects.add(clusterer);
  // map.geoObjects.add(placemark);
  clusterer.add(geoObjects);

}