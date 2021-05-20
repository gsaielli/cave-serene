
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RegioneGrid extends Serenity.EntityGrid<RegioneRow, any> {
        protected getColumnsKey() { return 'Default.Regione'; }
        protected getDialogType() { return RegioneDialog; }
        protected getIdProperty() { return RegioneRow.idProperty; }
        protected getLocalTextPrefix() { return RegioneRow.localTextPrefix; }
        protected getService() { return RegioneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}