
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class FabbisognoGrid extends Serenity.EntityGrid<FabbisognoRow, any> {
        protected getColumnsKey() { return 'Default.Fabbisogno'; }
        protected getDialogType() { return FabbisognoDialog; }
        protected getIdProperty() { return FabbisognoRow.idProperty; }
        protected getLocalTextPrefix() { return FabbisognoRow.localTextPrefix; }
        protected getService() { return FabbisognoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}