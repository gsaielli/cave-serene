
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

            var x: any;
            var y: any;
            var nome: any;

            x = this.form.CoordinataX.value;
            y = this.form.CoordinataY.value;
            nome = this.form.Nome.value;

            if (nome === "" || x == null || y == null) return;

            this.map.setView([x, y], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '<a href="https://www.openstreetmap.org/copyright">OSM</a>',
            }).addTo(this.map);
            var m = L.marker([x, y]).addTo(this.map)
                .bindPopup("Centro Area (il poligono arriverà) " + nome)
                .openPopup();

            function onMapClick(e) {
                $("input[name='CoordinataX']")[0].value = e.latlng.lat;
                $("input[name='CoordinataY']")[0].value = e.latlng.lng;
            }

            this.map.on('click', onMapClick);

            setTimeout(() => {
                var a = m.getPopup();
                a.update();
                this.map.invalidateSize();
            }, 1000);
        }
    }
}