
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ProrogaGrid extends Serenity.EntityGrid<ProrogaRow, any> {
        protected getColumnsKey() { return 'Default.Proroga'; }
        protected getDialogType() { return ProrogaDialog; }
        protected getIdProperty() { return ProrogaRow.idProperty; }
        protected getLocalTextPrefix() { return ProrogaRow.localTextPrefix; }
        protected getService() { return ProrogaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}