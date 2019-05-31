
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AutorizzazioneMaterialeGrid extends Serenity.EntityGrid<AutorizzazioneMaterialeRow, any> {
        protected getColumnsKey() { return 'Default.AutorizzazioneMateriale'; }
        protected getDialogType() { return AutorizzazioneMaterialeDialog; }
        protected getIdProperty() { return AutorizzazioneMaterialeRow.idProperty; }
        protected getLocalTextPrefix() { return AutorizzazioneMaterialeRow.localTextPrefix; }
        protected getService() { return AutorizzazioneMaterialeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}