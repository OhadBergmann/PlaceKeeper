'use strict'

var gMap;

function onInitMap(){
    gMap = generateNewMap();
}

function initMap() {
    return map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
}

window.initMap = initMap;