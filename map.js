//set base map
// TESTING MAPTILER TILED DATA
//  const map = new maplibregl.Map({
//     container: 'map', // container id
//     style: {
//         'version': 8,
//         'sources': {
//             'raster-tiles': {
//                 'type': 'raster',
//                 'tiles': [
//                     'http://localhost:3000/Ottawa_Gatineau_PlanetMosaic/{z}/{x}/{y}'
//                 ],
//                 'tileSize': 256,
//                 'attribution':
//                     '\u003Ca href=\"https://www.maptiler.com/engine/\"\u003ERendered with MapTiler Engine\u003C/a\u003E, non-commercial use only'
//             }
//         },
//         'layers': [
//             {
//                 'id': 'Ottawa_Gatineau_PlanetMosaic',
//                 'type': 'raster',
//                 'source': 'raster-tiles',
//                 'minzoom': 8,
//                 'maxzoom': 13
//             }
//         ]
//     },
//     center: [-75.673828, 45.2117905], // starting position
//     zoom: 9 // starting zoom
// });

// TESTING USING POSTGIS TILE INPUT
const map = new maplibregl.Map({
    container: 'map', // container id
    style: {
        'version': 8,
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': [
                    'http://localhost:3000/tiff_ottawa_gatineau_zxy_query/{z}/{x}/{y}'
                ],
                'tileSize': 256
            }
        },
        'layers': [
            {
                'id': 'Ottawa_Gatineau_PlanetMosaic',
                'type': 'raster',
                'source': 'raster-tiles'
            }
        ]
    },
    center: [-75.673828, 45.2117905], // starting position
    zoom: 9 // starting zoom
});

// TESTING QGIS MBTILES TILED DATA
//  const map = new maplibregl.Map({
//     container: 'map', // container id
//     style: {
//         'version': 8,
//         'sources': {
//             'raster-tiles': {
//                 'type': 'raster',
//                 'tiles': [
//                     'http://localhost:3000/ottawa_gatineau_planetmosaic_rast/{z}/{x}/{y}'
//                 ],
//                 'tileSize': 256
//             }
//         },
//         'layers': [
//             {
//                 'id': 'ottawa_gatineau_planetmosaic_rast',
//                 'type': 'raster',
//                 'source': 'raster-tiles',
//                 'minzoom': 0,
//                 'maxzoom': 17
//             }
//         ]
//     },
//     center: [-75.673828, 45.2117905], // starting position
//     zoom: 9 // starting zoom
// });

function addBuildingLayer(){
    map.addLayer({
        id: 'buildings_v',
        type: 'fill',
        source: {
            type: 'vector',
            tiles: [
                'http://localhost:3000/autobuilding_ottawa_gatineau/{z}/{x}/{y}'
            ]
        },
        'source-layer': 'autobuilding_ottawa_gatineau',
        paint: {
            'fill-color': 'red',
            'fill-opacity': 0.75
        }
    });
}

function addElevationLayer(){
    map.addLayer({
        id: 'elevation_v',
        type: 'line',
        source: {
            type: 'vector',
            tiles: [
                'http://localhost:3000/elevation_250k/{z}/{x}/{y}'
            ]
        },
        'source-layer': 'elevation_250k',
        paint: {
            'line-color': 'blue'
        }
    });
}