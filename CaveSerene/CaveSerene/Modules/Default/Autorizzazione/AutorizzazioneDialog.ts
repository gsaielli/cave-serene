
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AutorizzazioneDialog extends Serenity.EntityDialog<AutorizzazioneRow, any> {
        protected getFormKey() { return AutorizzazioneForm.formKey; }
        protected getIdProperty() { return AutorizzazioneRow.idProperty; }
        protected getLocalTextPrefix() { return AutorizzazioneRow.localTextPrefix; }
        protected getNameProperty() { return AutorizzazioneRow.nameProperty; }
        protected getService() { return AutorizzazioneService.baseUrl; }

        protected form = new AutorizzazioneForm(this.idPrefix);

    }
}