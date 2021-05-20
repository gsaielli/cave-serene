
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ProrogaDialog extends Serenity.EntityDialog<ProrogaRow, any> {
        protected getFormKey() { return ProrogaForm.formKey; }
        protected getIdProperty() { return ProrogaRow.idProperty; }
        protected getLocalTextPrefix() { return ProrogaRow.localTextPrefix; }
        protected getNameProperty() { return ProrogaRow.nameProperty; }
        protected getService() { return ProrogaService.baseUrl; }

        protected form = new ProrogaForm(this.idPrefix);

    }
}