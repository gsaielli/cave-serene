
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDestinazioneUsoDialog extends Serenity.EntityDialog<RendicontoDestinazioneUsoRow, any> {
        protected getFormKey() { return RendicontoDestinazioneUsoForm.formKey; }
        protected getIdProperty() { return RendicontoDestinazioneUsoRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneUsoRow.localTextPrefix; }
        protected getService() { return RendicontoDestinazioneUsoService.baseUrl; }

        protected form = new RendicontoDestinazioneUsoForm(this.idPrefix);

    }
}