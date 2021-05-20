
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ProdottoGrid extends Serenity.EntityGrid<ProdottoRow, any> {
        protected getColumnsKey() { return 'Default.Prodotto'; }
        protected getDialogType() { return ProdottoDialog; }
        protected getIdProperty() { return ProdottoRow.idProperty; }
        protected getLocalTextPrefix() { return ProdottoRow.localTextPrefix; }
        protected getService() { return ProdottoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}