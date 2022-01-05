namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class TipoMaterialeGrid extends Serenity.EntityGrid<TipoMaterialeRow, any> {
        protected getColumnsKey() { return 'Default.TipoMateriale'; }
        protected getDialogType() { return TipoMaterialeDialog; }
        protected getIdProperty() { return TipoMaterialeRow.idProperty; }
        protected getLocalTextPrefix() { return TipoMaterialeRow.localTextPrefix; }
        protected getService() { return TipoMaterialeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();
            buttons[0].title = "Aggiungi Tipo Materiale";
            return buttons;
        }
    }
}