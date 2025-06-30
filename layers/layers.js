var wms_layers = [];


        var lyr_HybridGoogle_0 = new ol.layer.Tile({
            'title': 'Hybrid Google',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Kommunegrnse_slagelse_1 = new ol.format.GeoJSON();
var features_Kommunegrnse_slagelse_1 = format_Kommunegrnse_slagelse_1.readFeatures(json_Kommunegrnse_slagelse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommunegrnse_slagelse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommunegrnse_slagelse_1.addFeatures(features_Kommunegrnse_slagelse_1);
var lyr_Kommunegrnse_slagelse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommunegrnse_slagelse_1, 
                style: style_Kommunegrnse_slagelse_1,
                popuplayertitle: 'Kommunegrænse_slagelse',
                interactive: false,
                title: '<img src="styles/legend/Kommunegrnse_slagelse_1.png" /> Kommunegrænse_slagelse'
            });
var format_Vandlbsmidte_slagelse_sydvandlbsmidte_2 = new ol.format.GeoJSON();
var features_Vandlbsmidte_slagelse_sydvandlbsmidte_2 = format_Vandlbsmidte_slagelse_sydvandlbsmidte_2.readFeatures(json_Vandlbsmidte_slagelse_sydvandlbsmidte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlbsmidte_slagelse_sydvandlbsmidte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlbsmidte_slagelse_sydvandlbsmidte_2.addFeatures(features_Vandlbsmidte_slagelse_sydvandlbsmidte_2);
var lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlbsmidte_slagelse_sydvandlbsmidte_2, 
                style: style_Vandlbsmidte_slagelse_sydvandlbsmidte_2,
                popuplayertitle: 'Vandløbsmidte_slagelse_syd — vandlbsmidte',
                interactive: true,
                title: '<img src="styles/legend/Vandlbsmidte_slagelse_sydvandlbsmidte_2.png" /> Vandløbsmidte_slagelse_syd — vandlbsmidte'
            });
var format_Kortlggesnavngivettilpassetiftfelt_3 = new ol.format.GeoJSON();
var features_Kortlggesnavngivettilpassetiftfelt_3 = format_Kortlggesnavngivettilpassetiftfelt_3.readFeatures(json_Kortlggesnavngivettilpassetiftfelt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kortlggesnavngivettilpassetiftfelt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kortlggesnavngivettilpassetiftfelt_3.addFeatures(features_Kortlggesnavngivettilpassetiftfelt_3);
var lyr_Kortlggesnavngivettilpassetiftfelt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kortlggesnavngivettilpassetiftfelt_3, 
                style: style_Kortlggesnavngivettilpassetiftfelt_3,
                popuplayertitle: 'Kortlægges - navngivet - tilpasset ift. felt',
                interactive: true,
    title: 'Kortlægges - navngivet - tilpasset ift. felt<br />\
    <img src="styles/legend/Kortlggesnavngivettilpassetiftfelt_3_0.png" /> Hede<br />\
    <img src="styles/legend/Kortlggesnavngivettilpassetiftfelt_3_1.png" /> Eng<br />\
    <img src="styles/legend/Kortlggesnavngivettilpassetiftfelt_3_2.png" /> Sø<br />\
    <img src="styles/legend/Kortlggesnavngivettilpassetiftfelt_3_3.png" /> Strandeng<br />\
    <img src="styles/legend/Kortlggesnavngivettilpassetiftfelt_3_4.png" /> Overdrev<br />\
    <img src="styles/legend/Kortlggesnavngivettilpassetiftfelt_3_5.png" /> Mose<br />' });

lyr_HybridGoogle_0.setVisible(true);lyr_Kommunegrnse_slagelse_1.setVisible(true);lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_2.setVisible(true);lyr_Kortlggesnavngivettilpassetiftfelt_3.setVisible(true);
var layersList = [lyr_HybridGoogle_0,lyr_Kommunegrnse_slagelse_1,lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_2,lyr_Kortlggesnavngivettilpassetiftfelt_3];
lyr_Kommunegrnse_slagelse_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'status': 'status', 'geometristatus': 'geometristatus', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'virkningsaktoer': 'virkningsaktoer', 'forretningshaendelse': 'forretningshaendelse', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'registreringsaktoer': 'registreringsaktoer', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'dagiid': 'dagiid', 'navn': 'navn', 'redigeringsret': 'redigeringsret', 'dataspecifikation': 'dataspecifikation', 'landekode': 'landekode', 'skala': 'skala', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'lau1vaerdi': 'lau1vaerdi', 'udenforkommuneinddeling': 'udenforkommuneinddeling', 'regionskode': 'regionskode', 'regionslokalid': 'regionslokalid', 'region_owns': 'region_owns', 'region_href': 'region_href', 'region_title': 'region_title', 'region_nilreason': 'region_nilreason', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'tempid': 'tempid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', });
lyr_Kortlggesnavngivettilpassetiftfelt_3.set('fieldAliases', {'Objekt_id': 'Objekt_id', 'Natyp_navn': 'Natyp_navn', 'StedNavn': 'StedNavn', 'Orden': 'Orden', 'Feltnavn': 'Feltnavn', 'Polygon_Na': 'Polygon_Na', });
lyr_Kommunegrnse_slagelse_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'virkningfra': 'DateTime', 'virkningtil': 'DateTime', 'virkningsaktoer': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'registreringfra': 'DateTime', 'registreringtil': 'DateTime', 'registreringsaktoer': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'dagiid': 'TextEdit', 'navn': 'TextEdit', 'redigeringsret': 'TextEdit', 'dataspecifikation': 'TextEdit', 'landekode': 'TextEdit', 'skala': 'TextEdit', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'lau1vaerdi': 'TextEdit', 'udenforkommuneinddeling': 'CheckBox', 'regionskode': 'TextEdit', 'regionslokalid': 'TextEdit', 'region_owns': 'CheckBox', 'region_href': 'TextEdit', 'region_title': 'TextEdit', 'region_nilreason': 'TextEdit', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'tempid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'DateTime', 'registreringtil': 'DateTime', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'DateTime', 'virkningtil': 'DateTime', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'CheckBox', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'CheckBox', 'link': 'TextEdit', });
lyr_Kortlggesnavngivettilpassetiftfelt_3.set('fieldImages', {'Objekt_id': 'TextEdit', 'Natyp_navn': 'TextEdit', 'StedNavn': 'TextEdit', 'Orden': 'TextEdit', 'Feltnavn': 'TextEdit', 'Polygon_Na': 'TextEdit', });
lyr_Kommunegrnse_slagelse_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'virkningsaktoer': 'no label', 'forretningshaendelse': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'registreringsaktoer': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'dagiid': 'no label', 'navn': 'no label', 'redigeringsret': 'no label', 'dataspecifikation': 'no label', 'landekode': 'no label', 'skala': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'lau1vaerdi': 'no label', 'udenforkommuneinddeling': 'no label', 'regionskode': 'no label', 'regionslokalid': 'no label', 'region_owns': 'no label', 'region_href': 'no label', 'region_title': 'no label', 'region_nilreason': 'no label', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'inline label - always visible', 'location_location': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'tempid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'inline label - always visible', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', });
lyr_Kortlggesnavngivettilpassetiftfelt_3.set('fieldLabels', {'Objekt_id': 'inline label - always visible', 'Natyp_navn': 'inline label - always visible', 'StedNavn': 'inline label - always visible', 'Orden': 'no label', 'Feltnavn': 'no label', 'Polygon_Na': 'inline label - always visible', });
lyr_Kortlggesnavngivettilpassetiftfelt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});