var size = 0;
var placement = 'point';
function categories_Kortlggesnavngivettilpassetiftfelt_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Hede':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,1,255,0.5686274509803921)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Eng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,254,0,0.6039215686274509)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sø':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,121,177,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Strandeng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,247,255,0.6784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Overdrev':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,204,1,0.7725490196078432)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mose':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,4,0,0.7686274509803922)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Kortlggesnavngivettilpassetiftfelt_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Natyp_navn");
    var labelFont = "18.2px \'DejaVu Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Polygon_Na") !== null) {
        labelText = String(feature.get("Polygon_Na"));
    }
    
    var style = categories_Kortlggesnavngivettilpassetiftfelt_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
