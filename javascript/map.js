var map;

function initMap() {
    map = L.map('map').setView([34.64207288790108, -79.86035685203338], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {grayscale: true}).addTo(map);

    var markers = [
        { lat: 38.883095109057734, lng: -77.01630094120503, title: "NASA", description: "NASA headquarters" },
        { lat: 28.458996145377135, lng: -80.5544530867471, title: "Cape Canaveral", description: "Cape Canaveral launch pad" },
    ];

    markers.forEach(function(markerData) {
        var marker = L.marker([markerData.lat, markerData.lng])
            .addTo(map)
            .bindPopup("<b>" + markerData.title + "</b><br>" + markerData.description);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initMap();
});
