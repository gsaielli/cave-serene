
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AttoGrid extends Serenity.EntityGrid<AttoRow, any> {
        protected getColumnsKey() { return 'Default.Atto'; }
        protected getDialogType() { return AttoDialog; }
        protected getIdProperty() { return AttoRow.idProperty; }
        protected getLocalTextPrefix() { return AttoRow.localTextPrefix; }
        protected getService() { return AttoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}