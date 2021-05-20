
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDestinazioneTerritorialeGrid extends Serenity.EntityGrid<RendicontoDestinazioneTerritorialeRow, any> {
        protected getColumnsKey() { return 'Default.RendicontoDestinazioneTerritoriale'; }
        protected getDialogType() { return RendicontoDestinazioneTerritorialeDialog; }
        protected getIdProperty() { return RendicontoDestinazioneTerritorialeRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneTerritorialeRow.localTextPrefix; }
        protected getService() { return RendicontoDestinazioneTerritorialeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}