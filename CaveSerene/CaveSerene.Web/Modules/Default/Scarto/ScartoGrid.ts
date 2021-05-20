
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ScartoGrid extends Serenity.EntityGrid<ScartoRow, any> {
        protected getColumnsKey() { return 'Default.Scarto'; }
        protected getDialogType() { return ScartoDialog; }
        protected getIdProperty() { return ScartoRow.idProperty; }
        protected getLocalTextPrefix() { return ScartoRow.localTextPrefix; }
        protected getService() { return ScartoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}