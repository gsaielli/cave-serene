
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class DerogaDialog extends Serenity.EntityDialog<DerogaRow, any> {
        protected getFormKey() { return DerogaForm.formKey; }
        protected getIdProperty() { return DerogaRow.idProperty; }
        protected getLocalTextPrefix() { return DerogaRow.localTextPrefix; }
        protected getNameProperty() { return DerogaRow.nameProperty; }
        protected getService() { return DerogaService.baseUrl; }

        protected form = new DerogaForm(this.idPrefix);

    }
}