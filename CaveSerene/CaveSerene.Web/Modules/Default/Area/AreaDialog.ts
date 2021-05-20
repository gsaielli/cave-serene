
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AreaDialog extends Serenity.EntityDialog<AreaRow, any> {
        protected getFormKey() { return AreaForm.formKey; }
        protected getIdProperty() { return AreaRow.idProperty; }
        protected getLocalTextPrefix() { return AreaRow.localTextPrefix; }
        protected getNameProperty() { return AreaRow.nameProperty; }
        protected getService() { return AreaService.baseUrl; }

        protected form = new AreaForm(this.idPrefix);
        protected map: any;

        constructor(container: JQuery) {
            super(container);
            this.map = L.map('mapid');

            //$('<a class="inplace-button inplace-create"><b><\/b><\/a>')
            //    .insertAfter(this.form.CoordinataY.element)
            //    .click(() => this.map.invalidateSize());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            var nome: any;

            nome = this.form.Nome.value;

            this.map.setView([44.469806, 11.291885], 15);
            var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '<a href="https://www.openstreetmap.org/copyright">OSM</a>',
            }).addTo(this.map);

            var drawnItems = L.featureGroup().addTo(this.map);
            L.control.layers({
                'Mappa': osm.addTo(this.map),
                'Foto': L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
                    attribution: 'google'
                })
            }, { 'Layer': drawnItems }, { position: 'topright', collapsed: false }).addTo(this.map);
            this.map.addControl(new L.Control.Draw({
                edit: {
                    featureGroup: drawnItems,
                    poly: {
                        allowIntersection: true
                    }
                },
                draw: {
                    rectangle: false,
                    polyline: false,
                    circle: false,
                    marker: false,
                    polygon: {
                        allowIntersection: true,
                        showArea: true
                    }
                }
            }));

            var shape_for_db = $("textarea[name='Polygon']")[0].value;
            if (shape_for_db) L.geoJSON(JSON.parse(shape_for_db)).addTo(drawnItems);

            //var m = L.marker([x, y]).addTo(this.map)
            //    .bindPopup("Centro Area (il poligono arriverà) " + nome)
            //    .openPopup();

            //function onMapClick(e) {
            //    $("input[name='CoordinataX']")[0].value = e.latlng.lat.toFixed(6).replace(".", ",");
            //    $("input[name='CoordinataY']")[0].value = e.latlng.lng.toFixed(6).replace(".", ",");
            //}

            //this.map.on('click', onMapClick);

            this.map.on(L.Draw.Event.CREATED, function (event) {
                var layer = event.layer;
                drawnItems.addLayer(layer);

                var shape = layer.toGeoJSON()
                var shape_for_db = JSON.stringify(shape);

                $("textarea[name='Polygon']")[0].value = shape_for_db;
            });

            setTimeout(() => {
                this.map.invalidateSize();
            }, 1000);

        }
    }
}