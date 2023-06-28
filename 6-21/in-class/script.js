console.log("test");

//Making map variable, set view sets latitude, longitude and zoom level//
var map = L.map('map').setView([62.15, -95.93], 2.56);

var basemap_urls = {
    watercolor:"https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
    tonor: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
}

L.tileLayer(basemap_urls.watercolor, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Making a marker//
var marker = L.marker([40.787280, -73.971380]).addTo(map);

//Marker Label//
marker.bindPopup("<b>Wild Bird Fund</b>");

const owllines = axios('../data/owllines.geojson').then(resp => {
    L.geoJSON(resp.data, {
        style: { color: "#ff0000" }
    }).addTo(map);
})

// const owlpoints = axios('../data/owlpoints.geojson').then(resp => {
//     L.geoJSON(resp.data, {
//         style: { color: "blue" }
//     }).addTo(map);
// })