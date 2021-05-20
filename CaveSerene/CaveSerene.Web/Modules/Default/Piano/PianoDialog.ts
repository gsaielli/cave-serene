
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PianoDialog extends Serenity.EntityDialog<PianoRow, any> {
        protected getFormKey() { return PianoForm.formKey; }
        protected getIdProperty() { return PianoRow.idProperty; }
        protected getLocalTextPrefix() { return PianoRow.localTextPrefix; }
        protected getNameProperty() { return PianoRow.nameProperty; }
        protected getService() { return PianoService.baseUrl; }

        protected form = new PianoForm(this.idPrefix);

    }
}