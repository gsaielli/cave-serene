
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PotenzialeGrid extends Serenity.EntityGrid<PotenzialeRow, any> {
        protected getColumnsKey() { return 'Default.Potenziale'; }
        protected getDialogType() { return PotenzialeDialog; }
        protected getIdProperty() { return PotenzialeRow.idProperty; }
        protected getLocalTextPrefix() { return PotenzialeRow.localTextPrefix; }
        protected getService() { return PotenzialeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}