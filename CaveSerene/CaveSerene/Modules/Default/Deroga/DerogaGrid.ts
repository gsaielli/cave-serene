
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class DerogaGrid extends Serenity.EntityGrid<DerogaRow, any> {
        protected getColumnsKey() { return 'Default.Deroga'; }
        protected getDialogType() { return DerogaDialog; }
        protected getIdProperty() { return DerogaRow.idProperty; }
        protected getLocalTextPrefix() { return DerogaRow.localTextPrefix; }
        protected getService() { return DerogaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}