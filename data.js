var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.01587156174147708,
        "pitch": -0.03360515427116262,
        "fov": 0.8813944138845351
      },
      "linkHotspots": [
        {
          "yaw": -3.10068273279645,
          "pitch": 0.028876778227729716,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7384772800969834,
          "pitch": 0.051319050371326114,
          "title": "ENTRY",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-view-2",
      "name": "VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.016995257289199373,
        "pitch": -0.009870197620173826,
        "fov": 0.9247285314922367
      },
      "linkHotspots": [
        {
          "yaw": -3.0975070500229833,
          "pitch": 0.024768385770794765,
          "rotation": 0,
          "target": "0-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.26147689399088847,
          "pitch": 0.005102508532715433,
          "title": "FIRE EXTINGUISHER",
          "text": "<br>"
        },
        {
          "yaw": -0.24929533860555075,
          "pitch": 0.31764773300403526,
          "title": "MEDKIT",
          "text": "<br>"
        },
        {
          "yaw": 1.6309366437580222,
          "pitch": -0.32133454292231534,
          "title": "IOT SENSOR TECHNICAL DATA",
          "text": "<br>"
        },
        {
          "yaw": 0.005747851917421443,
          "pitch": -0.37062325824863507,
          "title": "1 TON AC",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "40FT CONTAINER",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
