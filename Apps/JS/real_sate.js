var viewer = new Cesium.Viewer('cesiumContainer',{
    animation: true,  //是否显示动画控件
    baseLayerPicker: false, //是否显示图层选择控件
    timeline: false, //是否显示时间线控件
    sceneModePicker: true, //是否显示投影方式控件
    navigationHelpButton: false, //是否显示帮助信息控件
    infoBox: true,
    imageryProvider : Cesium.createTileMapServiceImageryProvider({
        url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
    }),
    geocoder : false
});
//去除logo
viewer._cesiumWidget._creditContainer.style.display = "none";
var czml = [

  {
    "id":"document",
    "name":"simple",
    "version":"1.0",
    "clock":{
      "interval":"2020-01-01T00:00:00Z/2020-01-02T00:00:00Z",
      "currentTime":"2020-01-01T00:00:00Z",
      "multiplier":1,
      "range":"LOOP_STOP",
      "step":"SYSTEM_CLOCK_MULTIPLIER"
    }
  },
 {
    "id":"Facility/AGI1",
    "name":"AGI1",
    "availability":"",
    "model": {
      "gltf" : "../../../../model/jizhan.gltf",
      "scale" : 1.0,
      "minimumPixelSize": 64
    },
    "label":{
      "fillColor":{
        "rgba":[
          255,255,255,255
        ]
      },
      "font":"11pt Lucida Console",
      "horizontalOrigin":"LEFT",
      "outlineColor":{
        "rgba":[
          0,0,255,127
        ]
      },
      "outlineWidth":2,
      "pixelOffset":{
        "cartesian2":[
          12,0
        ]
      },
      "show":true,
      "style":"FILL_AND_OUTLINE",
      "text":"喀什",
      "verticalOrigin":"CENTER"
    },
    "position" : {
        "cartographicDegrees" : []
    }
  },{
    "id" : "shape1",
    "name" : "AGI range",
    "position" : {
        "reference" : "Facility/AGI1#position"
    },
    "ellipse" : {
        "semiMinorAxis" : 50000.0,
        "semiMajorAxis" : 50000.0,
        "height" : 0,
        "material" : {
            "solidColor" : {
                "color" : {
                    "rgba" : [255, 255, 255, 127]
                }
            }
        }
    }
},{
    "id":"Facility/AGI2",
    "name":"AGI2",
    "availability":"",
    "model": {
      "gltf" : "../../../../model/jizhan.gltf",
      "scale" : 1.0,
      "minimumPixelSize": 64
    },
    "label":{
      "fillColor":{
        "rgba":[
          255,255,255,255
        ]
      },
      "font":"11pt Lucida Console",
      "horizontalOrigin":"LEFT",
      "outlineColor":{
        "rgba":[
          0,0,255,127
        ]
      },
      "outlineWidth":2,
      "pixelOffset":{
        "cartesian2":[
          12,0
        ]
      },
      "show":true,
      "style":"FILL_AND_OUTLINE",
      "text":"佳木斯",
      "verticalOrigin":"CENTER"
    },
    "position" : {
        "cartographicDegrees" : []
    }
  },{
    "id" : "shape2",
    "name" : "AGI range",
    "position" : {
        "reference" : "Facility/AGI2#position"
    },
    "ellipse" : {
        "semiMinorAxis" : 50000.0,
        "semiMajorAxis" : 50000.0,
        "height" : 0,
        "material" : {
            "solidColor" : {
                "color" : {
                    "rgba" : [255, 255, 255, 127]
                }
            }
        }
    }
},{
    "id":"Facility/AGI3",
    "name":"AGI3",
    "availability":"",
    "model": {
      "gltf" : "../../../../model/jizhan.gltf",
      "scale" : 1.0,
      "minimumPixelSize": 64
    },
    "label":{
      "fillColor":{
        "rgba":[
          255,255,255,255
        ]
      },
      "font":"11pt Lucida Console",
      "horizontalOrigin":"LEFT",
      "outlineColor":{
        "rgba":[
          0,0,255,127
        ]
      },
      "outlineWidth":2,
      "pixelOffset":{
        "cartesian2":[
          12,0
        ]
      },
      "show":true,
      "style":"FILL_AND_OUTLINE",
      "text":"三亚",
      "verticalOrigin":"CENTER"
    },
    "position" : {
        "cartographicDegrees" : []
    }
  },{
    "id" : "shape3",
    "name" : "AGI range",
    "position" : {
        "reference" : "Facility/AGI3#position"
    },
    "ellipse" : {
        "semiMinorAxis" : 50000.0,
        "semiMajorAxis" : 50000.0,
        "height" : 0,
        "material" : {
            "solidColor" : {
                "color" : {
                    "rgba" : [255, 255, 255, 127]
                }
            }
        }
    }
	}];
var satelliteTemplate = [{
    "id":"",
    "name":"",
    "availability":"",
    "description":"",
    "model": {
      "gltf" : "../../../../model/Satellite.gltf",
      "scale" : 1,
      "minimumPixelSize": 128
    },
	"orientation" : {
	  "velocityReference" : ""
	  },
    "label":{
      "fillColor":{
        "rgba":[
          255,255,255,255
        ]
      },
      "font":"11pt Lucida Console",
      "horizontalOrigin":"LEFT",
      "outlineColor":{
        "rgba":[
          0,0,255,127
        ]
      },
      "outlineWidth":2,
      "pixelOffset":{
        "cartesian2":[
          12,0
        ]
      },
      "show":true,
      "style":"FILL_AND_OUTLINE",
      "text":"",
      "verticalOrigin":"CENTER"
    },
    "path":{
      "show":true,
      "width":5,
      "material" : {
        "polylineGlow" : {
          "color" : {
            "rgba" : [0, 0, 255, 255],
            "glowPower" : 0.1
                }
            }
       },
      "resolution":120,
      "leadTime":6000,
      "trailTime":0
    },
    "position":{
      "interpolationAlgorithm":"LAGRANGE",
      "interpolationDegree":5,
      "epoch":"2020-01-01T00:00:00Z",
      "cartesian":[]
    }
}];

var czmlplus = [
  {
    "id" : "communication1",
    "name" : "line1",
    "availability":"",
    "orientation" : {
        "velocityReference" : "communication1#position"
    },
    "path":{
      "show":[
        {
          "interval":"",
          "boolean":true
        }
      ],
      "width":5,
        "material" : {
            "polylineArrow" : {
                "color" : {
                    "rgba" : [148, 0, 211, 255]
                }
            }
        },
       "resolution":1
    },
    "position" : {
        "interpolationAlgorithm":"LAGRANGE",
        "interpolationDegree":5,
        "epoch":"",
        "cartesian" : []
    },
    "billboard" : {
        "image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAqCAYAAAD4Uag9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATGSURBVGhD7VpbKGVfGD+M6yD3GJRI7kruRXIpI3lRvKA8KBF5mSHmRQiTFEXz4EkRGUQpTDGjJArlkklyv00YJJdB+Kbfmr23s51z/nPkYJ9/86tfHWt9a+3vd/Za31rfd8jofwqRsIWFBfrw4QNFR0dTaGgohYWFSZrwMTIyknJzc2liYoJub285JXLCvn37Rm5ubiSTybSSVlZW1NLSwqnhhG1ublJgYKDSAdpEOzs7mpqauhPW3NwsMnBwcKCQkBAKDg6WNOGji4sL6erqCr4XFBTcCSsuLhY6zMzMqLW1la6uruj09FTS/PXrF42OjpKTk5Pgf3x8/J2wd+/eCR14nTDWFhweHpKPj4/gf0xMDGtnwt6/fy90vH79mj5//sw6tQGrq6uioBcbG8vaFYSBZWVlrFMb0N3dTaampuoJwzm2t7fHDKSM6+tryszMFPn+n8JA+TNBqhgYGGDBTt7vvwrz9PSklZUVZiRFYEUh3N/3+6/CwISEBNrf32eGUgJCfXp6ulKf1RIGQtzS0hIzlgIODg4oIyNDqa+gSmE6OjqikxwMCAhgd8mXxvfv3ykuLk7kG/wF+b9VCnN0dGSRxsLCQmgDbW1tqbGxkUWil0Bvby+5u7uLfNLX16fs7GxRu0phb968ocnJSXZIQyTfDurp6VF+fj5bDs+Fy8tLqqqqInNzc5EvOLuqq6tpd3eXfH19hXaVwuzt7WlsbIx1YvkFBQUJfTwTExPZsnhq7OzssNUjv9RAV1dXam9vZzYIbl5eXkKfWsKAra0tSk1NFfp5enh4UF9fH2eleSBxjIiIUHgu7oIzMzOc1SOEAdhXFRUVZG1tLdiBWA51dXV0fn7OWT4eyILb2tpY6iT/LGNjY8rLy6Pj42PO8g8eJQy4ubmhnp4ehSwb+w4bWBNXMJxPuKdChPwzbGxs6NOnTyyVuo9HC+OxuLhIUVFRgj3P8PBwmpub46wejo2NDUpOTqZXr16J5kVgGBkZ4awUoTFhwNHREeXk5JCRkZEwDkTC19XV9eAjAY77+/uL5oLApKQkWl9f56yUQ6PCgLOzM6qvrxelDKClpSXV1NSoLQ77CUeM/BwQVVRUpNaxonFhPL58+cLCLz8e5PcdsltVwBdTWVlJJiYmorG4CDQ1NbE9rQ6eTBgwOzvLwjA/B0/sxeHhYVG9D0C4TklJUbi6YT99/fqVs1IPTyoMQAlP2Y0bywwFTZx5g4ODrCB7/w2D+GLm5+e52dTHkwsDUDUqLS1VCNcg2lBPuX+LwH0vKyuLfv78yc3yMDyLMB4dHR3k5+cnzKmKzs7O1NDQQBcXF9zIh0OZMPYZnZoWBiwvL7PbCgqa/Nw8UeJDyQ9787F4dmEAIhtCNvYXImB5eTl1dnbSjx8/NJb+vIiw58A/Yf+ESQQPEjY+Ps4GaQMgzNvbW7kw+V9btE0Yoq68MOFqh04kd3yHoaEhFRYW0tDQELvgSpnwERk8fqbl/UeqIwhDDZzvAA0MDFj5DSmI1IkXIe87hLLPEHZyckJpaWkiA20k/pNge3ubSkpK/ggD1tbWWOkYuZSyQVLn27dvaXp6mmlhbewTB7w55E/IjFGk/Pjxo6QJH2tra6m/v59FRx4ymYx+A+sNxBpg10oqAAAAAElFTkSuQmCC",
        "scale" : 0.5
    },
}];
var dataSourcePromise;
//读取数据模块
var url, htmlobj, dataString;
var ip = "http://10.112.31.161:8080"; //服务器所在的IP
//读取日期和卫星数量数据
url = ip + "/data/daterange.txt"; //请求文本文件所在的路径
htmlobj= $.ajax({url:url,async:false}); //Ajax请求
dataString = htmlobj.responseText; //获取响应中的文件数据
var dateRead = dataString.split(",");
var startToend = dateRead[0] + "/" + dateRead[1];
var sateNum = parseInt(dateRead[2]);
//读取通信数据
url = ip + "/data/output.txt";
htmlobj= $.ajax({url:url,async:false});
dataString = htmlobj.responseText;
var f = dataString.split("\r\n");
//读取卫星位置数据并添加对象
for(var g=1; g<1+sateNum; g++){
	var sate = JSON.parse(JSON.stringify(satelliteTemplate[0]));
	sate.id = "sate"+g;
	sate.name = "sate"+g;
	sate.orientation.velocityReference = "sate"+g+"#position";
	url = ip + "/data/circular"+g+".txt";
	htmlobj= $.ajax({url:url,async:false});
	dataString = htmlobj.responseText;
	var position = dataString.split(",");
	for(var i=0; i<position.length; i++){
		position[i] = parseFloat(position[i]);
	}
	sate.position.cartesian = position;
	czml.push(sate);
}

//填入通信时间和连线
var data,comEnd,comStart,communicationTime,tem;
for(var h=0; h<f.length; h++){
	data = f[h].split(",");
	comStart = data[0];
	comEnd = data[1];
	communicationTime = comStart+"/"+comEnd;
	tem = JSON.parse(JSON.stringify(czmlplus[0]))
	tem.id = "line"+h
	tem.name = "line"+h
	tem.availability = communicationTime;
	tem.path.show[0].interval = communicationTime;
	tem.position.epoch = comStart;
	for(var k=0; k<7; k++){
		data[k+2] = parseFloat(data[k+2]);
	}
	tem.position.cartesian = [0, data[3], data[4], data[5], data[2], data[6], data[7], data[8]];
	czml.push(tem);
}

//修改时间
czml[0].clock.interval = startToend;
czml[0].clock.currentTime = dateRead[0];
for(var i=1; i<czml.length; i++){
    czml[i].availability = [startToend];
}
//设置卫星动画起始时间
for(var i=0; i<sateNum; i++){
	czml[7+i].position.epoch = dateRead[0];
}
//设置卫星路径预画时间
czml[7].path.leadTime = 5200;
czml[8].path.leadTime = 6300;
czml[9].path.leadTime = 87000;
//设置基站位置
czml[1].position.cartographicDegrees = [75,39,0];
czml[3].position.cartographicDegrees = [130,46,0];
czml[5].position.cartographicDegrees = [108,18,0];


//console.log(czml)
dataSourcePromise = Cesium.CzmlDataSource.load(czml);
viewer.dataSources.add(dataSourcePromise);