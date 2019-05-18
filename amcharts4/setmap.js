// Themes begin
am4core.unuseAllThemes();
// Themes end

// Create map instance
var chart = am4core.create("map", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.NaturalEarth1();
chart.chartContainer.wheelable = false;
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.mapPolygons.template.strokeWidth = 0.5;
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#0000");


// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

var colordata = am4core.color("#CC0000")

polygonSeries.data = [{
  "name": "Spain",
  "id": "ES",
  "fill": colordata
}, {
  "name": "Portugal",
  "id": "PT",
  "fill": colordata
}, {
  "name": "Colombia",
  "id": "CO",
  "fill": colordata
}, {
  "name": "Chile",
  "id": "CL",
  "fill": colordata
}, {
  "name": "Dominican Republic",
  "id": "DO",
  "fill": colordata
}, {
  "name": "Algeria",
  "id": "DZ",
  "fill": colordata
}, {
  "name": "India",
  "id": "IN",
  "fill": colordata
}, {
  "name": "Kenya",
  "id": "KE",
  "fill": colordata
}, {
  "name": "Morocco",
  "id": "MA",
  "fill": colordata
}, {
  "name": "Mexico",
  "id": "MX",
  "fill": colordata
}, {
  "name": "Mozambique",
  "id": "MZ",
  "fill": colordata
}, {
  "name": "Turkey",
  "id": "TR",
  "fill": colordata
}, {
  "name": "Great Britain",
  "id": "GB",
  "fill": colordata
}, {
  "name": "Bolivia",
  "id": "BO",
  "fill": colordata
}, {
  "name": "Kuwait",
  "id": "KW",
  "fill": colordata
}, {
  "name": "Uruguay",
  "id": "UY",
  "fill": colordata
}, {
  "name": "Italy",
  "id": "IT",
  "fill": colordata
}, {
  "name": "Saudi Arabia",
  "id": "SA",
  "fill": colordata
}, {
  "name": "Senegal",
  "id": "SN",
  "fill": colordata
}];

polygonTemplate.propertyFields.fill = "fill";
