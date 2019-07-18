var deferredPrompt;
var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
      navigator.serviceWorker.register('../service-worker.js');
      
      //navigator.serviceWorker.ready always resolve
      navigator.serviceWorker.ready.then(function (registration) {
          console.log('Service worker successfully registered on scope', registration.scope);
      });
  });
}
/* In main.js */
navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
  if (registration.installing) {
    console.log("Service Worker is installing");
  }
})

/* In main.js */
navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
  if (registration.waiting) {
    console.log("Service Worker is Waiting");
      // Service Worker is Waiting
  }
})

/* In main.js */
navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
  if (registration.active) {
    console.log("Service Worker is Active")
      // Service Worker is Active
  }
})

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired ');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

function displayConfirmNotification() {
  if ('serviceWorker' in navigator) {
    var options = {
      body: 'Bạn đã đăng ký thành công!',
      icon: 'images/icons/icon-72x72.png',
      image: 'images/success.jpg',
      dir: 'ltr',
      lang: 'en-US',
      vibrate: [100, 50, 200],
      tag: 'confirm-notification',
      renotify: true,
      badge: 'images/icons/icon-72x72.png',
      actions: [
        { action: 'confirm', title: 'Okay', icon: 'images/icons/icon-72x72.png' },
        { action: 'cancel', title: 'Cancel', icon: 'images/icons/icon-72x72.png' }
      ]
    };
    navigator.serviceWorker.ready
      .then(function (swreg) {
        swreg.showNotification('Đăng ký thành công từ SW', options);
      });
  }

}

function configurePushSub() {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  var reg;
  navigator.serviceWorker.ready
    .then(function (swreg) {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then(function (sub) {
      if (sub === null) {
        //create a new sub
        var vapidPublickey = 'BLt7wh8Q_qBeT_75uf8KwZahW11ixQrcbnd55A2oAsvk5COXwQgtEnm21aRHGwtljH7Sl7mvKmT1hzuFlhl6h8w';
        var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublickey);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidPublicKey
        });
      }
      else {
        // we have a new sub
      }
    })
    .then(function (newSub) {
      fetch('https://socialhub-c9abb.firebaseio.com/subscriptions.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newSub)
        })
    })
    .then(function (res) {
        displayConfirmNotification();
    })
    .catch(function(err){
      console.log(err);
    });
}

function askForNotificationPermission() {
  Notification.requestPermission(function (result) {
    console.log('User choice', result);
    if (result !== 'granted') {
      console.log('No notification permission granted');
    } else {
      configurePushSub();
      //displayConfirmNotification();
    }
  });
}

if ('Notification' in window && 'serviceWorker' in navigator) {
  for (var i = 0; i < enableNotificationsButtons.length; i++) {
    enableNotificationsButtons[i].style.display = 'inline-block';
    enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission)
  }
}

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
