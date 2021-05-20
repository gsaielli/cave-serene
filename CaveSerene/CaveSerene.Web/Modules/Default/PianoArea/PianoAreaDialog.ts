
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PianoAreaDialog extends Serenity.EntityDialog<PianoAreaRow, any> {
        protected getFormKey() { return PianoAreaForm.formKey; }
        protected getIdProperty() { return PianoAreaRow.idProperty; }
        protected getLocalTextPrefix() { return PianoAreaRow.localTextPrefix; }
        protected getNameProperty() { return PianoAreaRow.nameProperty; }
        protected getService() { return PianoAreaService.baseUrl; }

        protected form = new PianoAreaForm(this.idPrefix);

    }
}