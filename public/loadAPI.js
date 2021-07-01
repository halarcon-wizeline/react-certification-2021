/* global gapi */

function start() {
  // Initializes the client with the API key and the Translate API.
  gapi.client
    .init({
      apiKey: 'AIzaSyABybSP1hG2axuYiV-toNchw2mHd3y-n3w',
    })
    .then(function () {
      // console.log(gapi.client);
      gapi.client.load('youtube', 'v3', function () {
        console.log('[Youtube api loaded]');
      });
    })
    .catch(function (reason) {
      console.log(`Error: ${reason}`);
    });
}

// Loads the JavaScript client library and invokes `start` afterwards.
gapi.load('client', start);
