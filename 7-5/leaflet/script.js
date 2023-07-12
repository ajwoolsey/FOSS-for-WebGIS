
//Making map variable, set view sets latitude, longitude and zoom level//
var map = L.map('map').setView([62.15, -95.93], 2.56);

//Layer Controls

const baseLayers = {
    watercolor: L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}),
    tonor: L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
}

baseLayers['watercolor'].addTo(map);
baseLayers['tonor'].addTo(map);

const layerControl = L.control.layers(baseLayers).addTo(map);

// L.tileLayer(basemap_urls.watercolor, {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

//Making a marker//
var marker = L.marker([40.787280, -73.971380]).addTo(map);

//Marker Label//
marker.bindPopup("<b>Wild Bird Fund</b>");

//Different color for each owl name
const owllines = axios('../data/owllines.geojson').then(resp => {
 console.log(resp)
//     L.geoJSON(resp.data, {
//         style: { color: "#ff0000" }
//     }).addTo(map)
// })
//Colors for names up to 
L.geoJSON(resp.data, {
    style: function (feature) {
        switch (feature.properties.name) {
            case 'PaulAlbert-106206': return { color: "blue" };
            case 'Heidi SNOW_13_03-106394': return { color: "orange" };
            case 'Drew SNOW_13_08-106391': return { color: "yellow" };
            case 'Fiona SNOW_13_07-106395': return { color: "red" };
            case 'Gigi SNOW_13_06-106393': return { color: "brown" };
            case 'Elise SNOW_13-10-106392': return { color: "green" };
            case 'Christie SNOW_13_04-106390': return { color: "purple" };
            case 'Jasmine SNOW_13_11-106397': return { color: "lightgreen" };
            case 'Beatrix SNOW_13_05-106208': return { color: "gray" };
            default: return { color: "black" };


        }
    },
    //Layer bind pop up for owl name
    onEachFeature: function (feature, layer) {
        console.log(layer)
        layer.bindPopup("Name= "+ feature.properties.name)
    }
}).addTo(map);
})




//adding random polygon
const polygon = axios('../data/randompolygon.geojson').then(resp => {
    L.geoJson(resp.data, {
        style: { opacity: 0.95, color: "#000", weight: 2 }
    }).addTo(map).bringToBack();

});

// const owlpoints = axios('../data/owlpoints.geojson').then(resp => {
//     L.geoJSON(resp.data, {
//         style: { color: "blue" }
//     }).addTo(map);
// })