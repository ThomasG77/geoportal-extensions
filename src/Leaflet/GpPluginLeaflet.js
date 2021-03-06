define([
    "leaflet",
    "leaflet-draw",
    "gp",
    "Leaflet/Controls/Controls",
    "Leaflet/Layers/Layers",
    "Leaflet/CRS/CRS"
], function (
    L,
    P,
    Gp,
    Controls,
    Layers,
    CRS
) {

    "use strict";

    // on determine l'environnement d'execution : browser ou non ?
    // var scope = typeof window !== "undefined" ? window : {};

    // on voit s'il existe déjà cette variable, sinon on la met en place
    // var L = scope.L || {};

    // Rajout des propriétés de l'extension dans le namespace Gp
    Gp.leafletExtVersion = "__GPLEAFLETEXTVERSION__" ;
    Gp.leafletExtDate = "__GPDATE__";

    // creation du namespace pour les extensions leaflet
    L.geoportalLayer   = Layers;   // WMS et WMTS
    L.geoportalControl = Controls; // IsoChrone, SearchEngine, ...
    L.geoportalCRS     = CRS;      // lambert 93 et lambert 2 étendu
    L.geoportalCRS.EPSG2154  = CRS.EPSG2154(); // lambert 93
    L.geoportalCRS.EPSG27572 = CRS.EPSG27572();// lambert 2 étendu
    L.geoportalCRS.EPSG4326  = CRS.EPSG4326();
    // on sauvegarde la variable dans l'env.
    // scope.L = L;

    // FIXME : parce qu'il faut bien retourner quelque chose
    return Gp ;
});
