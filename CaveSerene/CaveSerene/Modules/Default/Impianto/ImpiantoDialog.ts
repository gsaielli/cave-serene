
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ImpiantoDialog extends Serenity.EntityDialog<ImpiantoRow, any> {
        protected getFormKey() { return ImpiantoForm.formKey; }
        protected getIdProperty() { return ImpiantoRow.idProperty; }
        protected getLocalTextPrefix() { return ImpiantoRow.localTextPrefix; }
        protected getNameProperty() { return ImpiantoRow.nameProperty; }
        protected getService() { return ImpiantoService.baseUrl; }

        protected form = new ImpiantoForm(this.idPrefix);
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
                .bindPopup("Impianto " + nome)
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