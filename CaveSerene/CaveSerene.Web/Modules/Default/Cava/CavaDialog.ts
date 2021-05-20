﻿
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class CavaDialog extends Serenity.EntityDialog<CavaRow, any> {
        protected getFormKey() { return CavaForm.formKey; }
        protected getIdProperty() { return CavaRow.idProperty; }
        protected getLocalTextPrefix() { return CavaRow.localTextPrefix; }
        protected getNameProperty() { return CavaRow.nameProperty; }
        protected getService() { return CavaService.baseUrl; }

        protected form = new CavaForm(this.idPrefix);
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
                .bindPopup("Cava " + nome)
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