
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoApprovvigionamentoGrid extends Serenity.EntityGrid<RendicontoApprovvigionamentoRow, any> {
        protected getColumnsKey() { return 'Default.RendicontoApprovvigionamento'; }
        protected getDialogType() { return RendicontoApprovvigionamentoDialog; }
        protected getIdProperty() { return RendicontoApprovvigionamentoRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoApprovvigionamentoRow.localTextPrefix; }
        protected getService() { return RendicontoApprovvigionamentoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}