import { expect } from 'chai';
import { MapService } from './map.service';
describe('MapService', () => {
    it('should calculate the shortest route', () => {
        const input = {
            "rows":[
               {
                  "elements":[
                     {
                        "distance":{
                           "text":"1 m",
                           "value":0
                        },
                        "duration":{
                           "text":"1 min",
                           "value":0
                        },
                        "duration_in_traffic":{
                           "text":"1 min",
                           "value":8
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"39.4 km",
                           "value":39389
                        },
                        "duration":{
                           "text":"32 mins",
                           "value":1947
                        },
                        "duration_in_traffic":{
                           "text":"30 mins",
                           "value":1776
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"17.3 km",
                           "value":17283
                        },
                        "duration":{
                           "text":"25 mins",
                           "value":1501
                        },
                        "duration_in_traffic":{
                           "text":"23 mins",
                           "value":1362
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"14.7 km",
                           "value":14715
                        },
                        "duration":{
                           "text":"15 mins",
                           "value":929
                        },
                        "duration_in_traffic":{
                           "text":"14 mins",
                           "value":835
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"27.4 km",
                           "value":27424
                        },
                        "duration":{
                           "text":"28 mins",
                           "value":1706
                        },
                        "duration_in_traffic":{
                           "text":"25 mins",
                           "value":1526
                        },
                        "status":"OK"
                     }
                  ]
               },
               {
                  "elements":[
                     {
                        "distance":{
                           "text":"36.7 km",
                           "value":36743
                        },
                        "duration":{
                           "text":"34 mins",
                           "value":2045
                        },
                        "duration_in_traffic":{
                           "text":"32 mins",
                           "value":1920
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"1 m",
                           "value":0
                        },
                        "duration":{
                           "text":"1 min",
                           "value":0
                        },
                        "duration_in_traffic":{
                           "text":"1 min",
                           "value":0
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"15.6 km",
                           "value":15610
                        },
                        "duration":{
                           "text":"26 mins",
                           "value":1562
                        },
                        "duration_in_traffic":{
                           "text":"24 mins",
                           "value":1441
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"44.7 km",
                           "value":44669
                        },
                        "duration":{
                           "text":"38 mins",
                           "value":2290
                        },
                        "duration_in_traffic":{
                           "text":"36 mins",
                           "value":2140
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"30.0 km",
                           "value":29969
                        },
                        "duration":{
                           "text":"36 mins",
                           "value":2152
                        },
                        "duration_in_traffic":{
                           "text":"31 mins",
                           "value":1869
                        },
                        "status":"OK"
                     }
                  ]
               },
               {
                  "elements":[
                     {
                        "distance":{
                           "text":"17.2 km",
                           "value":17240
                        },
                        "duration":{
                           "text":"25 mins",
                           "value":1520
                        },
                        "duration_in_traffic":{
                           "text":"23 mins",
                           "value":1405
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"15.5 km",
                           "value":15466
                        },
                        "duration":{
                           "text":"25 mins",
                           "value":1515
                        },
                        "duration_in_traffic":{
                           "text":"23 mins",
                           "value":1389
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"1 m",
                           "value":0
                        },
                        "duration":{
                           "text":"1 min",
                           "value":0
                        },
                        "duration_in_traffic":{
                           "text":"1 min",
                           "value":0
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"21.3 km",
                           "value":21260
                        },
                        "duration":{
                           "text":"29 mins",
                           "value":1760
                        },
                        "duration_in_traffic":{
                           "text":"27 mins",
                           "value":1641
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"30.8 km",
                           "value":30817
                        },
                        "duration":{
                           "text":"42 mins",
                           "value":2532
                        },
                        "duration_in_traffic":{
                           "text":"37 mins",
                           "value":2247
                        },
                        "status":"OK"
                     }
                  ]
               },
               {
                  "elements":[
                     {
                        "distance":{
                           "text":"14.8 km",
                           "value":14822
                        },
                        "duration":{
                           "text":"15 mins",
                           "value":915
                        },
                        "duration_in_traffic":{
                           "text":"14 mins",
                           "value":822
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"47.8 km",
                           "value":47769
                        },
                        "duration":{
                           "text":"38 mins",
                           "value":2275
                        },
                        "duration_in_traffic":{
                           "text":"35 mins",
                           "value":2081
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"21.2 km",
                           "value":21187
                        },
                        "duration":{
                           "text":"29 mins",
                           "value":1729
                        },
                        "duration_in_traffic":{
                           "text":"27 mins",
                           "value":1610
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"1 m",
                           "value":0
                        },
                        "duration":{
                           "text":"1 min",
                           "value":0
                        },
                        "duration_in_traffic":{
                           "text":"1 min",
                           "value":0
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"35.8 km",
                           "value":35804
                        },
                        "duration":{
                           "text":"34 mins",
                           "value":2034
                        },
                        "duration_in_traffic":{
                           "text":"30 mins",
                           "value":1801
                        },
                        "status":"OK"
                     }
                  ]
               },
               {
                  "elements":[
                     {
                        "distance":{
                           "text":"29.2 km",
                           "value":29245
                        },
                        "duration":{
                           "text":"29 mins",
                           "value":1721
                        },
                        "duration_in_traffic":{
                           "text":"27 mins",
                           "value":1604
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"33.2 km",
                           "value":33215
                        },
                        "duration":{
                           "text":"33 mins",
                           "value":2005
                        },
                        "duration_in_traffic":{
                           "text":"30 mins",
                           "value":1773
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"33.6 km",
                           "value":33628
                        },
                        "duration":{
                           "text":"40 mins",
                           "value":2404
                        },
                        "duration_in_traffic":{
                           "text":"37 mins",
                           "value":2223
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"37.2 km",
                           "value":37170
                        },
                        "duration":{
                           "text":"33 mins",
                           "value":1967
                        },
                        "duration_in_traffic":{
                           "text":"30 mins",
                           "value":1824
                        },
                        "status":"OK"
                     },
                     {
                        "distance":{
                           "text":"1 m",
                           "value":0
                        },
                        "duration":{
                           "text":"1 min",
                           "value":0
                        },
                        "duration_in_traffic":{
                           "text":"1 min",
                           "value":60
                        },
                        "status":"OK"
                     }
                  ]
               }
            ],
            "originAddresses":[
               "Brusselsesteenweg 254, 1980 Zemst, Belgium",
               "Monseigneur Ladeuzeplein, 3000 Leuven, Belgium",
               "Markt 25, 3150 Haacht, Belgium",
               "Blarenberglaan 3, 2800 Mechelen, Belgium",
               "Rue de l'Aurore 47, 1000 Bruxelles, Belgium"
            ],
            "destinationAddresses":[
               "Brusselsesteenweg 254, 1980 Zemst, Belgium",
               "Monseigneur Ladeuzeplein, 3000 Leuven, Belgium",
               "Markt 25, 3150 Haacht, Belgium",
               "Blarenberglaan 3, 2800 Mechelen, Belgium",
               "Rue de l'Aurore 47, 1000 Bruxelles, Belgium"
            ]
         };
        const result = new MapService().calculateRoute(input);
        const expected = [
            "Rue de l'Aurore 47, 1000 Bruxelles, Belgium",
            "Monseigneur Ladeuzeplein, 3000 Leuven, Belgium",
            "Markt 25, 3150 Haacht, Belgium",
            "Brusselsesteenweg 254, 1980 Zemst, Belgium",
            "Blarenberglaan 3, 2800 Mechelen, Belgium",
        ];
        expect(result.length).to.equal(expected.length);
        expect(result[0]).to.equal(expected[0]);
        expect(result[1]).to.equal(expected[1]);
        expect(result[2]).to.equal(expected[2]);
        expect(result[3]).to.equal(expected[3]);
        expect(result[4]).to.equal(expected[4]);
    });
});