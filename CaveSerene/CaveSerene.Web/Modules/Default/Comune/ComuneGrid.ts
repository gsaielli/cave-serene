
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ComuneGrid extends Serenity.EntityGrid<ComuneRow, any> {
        protected getColumnsKey() { return 'Default.Comune'; }
        protected getDialogType() { return ComuneDialog; }
        protected getIdProperty() { return ComuneRow.idProperty; }
        protected getLocalTextPrefix() { return ComuneRow.localTextPrefix; }
        protected getService() { return ComuneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}