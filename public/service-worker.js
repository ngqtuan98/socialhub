self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mycache').then(function(cache) {
      return cache.addAll([
      'https://huflit.herokuapp.com/',
      'contentlogin/css/style.css',
      'contentlogin/fonts/material-icon/css/material-design-iconic-font.min.css',
      'images/icons/icon-72x72.png',
      'contentlogin/vendor/jquery/jquery.min.js',
      'contentlogin/images/signin-image.jpg',

      'https://huflit.herokuapp.com/profile',
      'contentsinhvien/css/plugin.css',
      'contentsinhvien/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700',
      'images/icons/icon-512x512.png',
      'contentsinhvien/js/jquery.min.js',
      'contentsinhvien/js/plugin.js',
      'contentsinhvien/js/scripts.js',
      ]);
    })
  );
});

self.addEventListener('install', function(event) {
  console.log('Installed sw.js', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated sw.js', event);
});

self.addEventListener('fetch', function(event) {
  console.log('fetch', event);
  return event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request.url))
  );
});


self.addEventListener('notificationclick',function(event){
  var notification = event.notification;
  var action=event.action;
  console.log(notification);
  if(action==='confirm'){
    console.log('Đã chọn');
    notification.close();
  }
  else {
    console.log(action);
    notification.close();
  }
});
self.addEventListener('notificationclose',function(event){
  console.log('Notification was closed',event);
});




