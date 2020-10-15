
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class MinieraDialog extends Serenity.EntityDialog<MinieraRow, any> {
        protected getFormKey() { return MinieraForm.formKey; }
        protected getIdProperty() { return MinieraRow.idProperty; }
        protected getLocalTextPrefix() { return MinieraRow.localTextPrefix; }
        protected getNameProperty() { return MinieraRow.nameProperty; }
        protected getService() { return MinieraService.baseUrl; }

        protected form = new MinieraForm(this.idPrefix);
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

            if (x == null) x = 44.469806;
            if (y == null) y = 11.291885; //Bologna

            this.map.setView([x, y], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '<a href="https://www.openstreetmap.org/copyright">OSM</a>',
            }).addTo(this.map);
            var m = L.marker([x, y]).addTo(this.map)
                .bindPopup("Miniera " + nome)
                .openPopup();

            function onMapClick(e) {
                $("input[name='CoordinataX']")[0].value = e.latlng.lat.toFixed(6).replace(".", ",");
                $("input[name='CoordinataY']")[0].value = e.latlng.lng.toFixed(6).replace(".", ",");
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