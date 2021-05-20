
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDestinazioneUsoGrid extends Serenity.EntityGrid<RendicontoDestinazioneUsoRow, any> {
        protected getColumnsKey() { return 'Default.RendicontoDestinazioneUso'; }
        protected getDialogType() { return RendicontoDestinazioneUsoDialog; }
        protected getIdProperty() { return RendicontoDestinazioneUsoRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneUsoRow.localTextPrefix; }
        protected getService() { return RendicontoDestinazioneUsoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}