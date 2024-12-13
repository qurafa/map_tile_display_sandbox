//set base map
const map = new maplibregl.Map({
    container: 'map', // container id
    style: {
        'version': 8,
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': [
                    'http://localhost:3000/Ottawa_Gatineau_PlanetMosaic/{z}/{x}/{y}'
                ],
                'tileSize': 256,
                'attribution':
                    '\u003Ca href=\"https://www.maptiler.com/engine/\"\u003ERendered with MapTiler Engine\u003C/a\u003E, non-commercial use only'
            }
        },
        'layers': [
            {
                'id': 'Ottawa_Gatineau_PlanetMosaic',
                'type': 'raster',
                'source': 'raster-tiles',
                'minzoom': 8,
                'maxzoom': 13
            }
        ]
    },
    center: [-75.673828, 45.2117905], // starting position
    zoom: 9 // starting zoom
});

function addBuildingLayer(){
    map.addLayer({

    });
}