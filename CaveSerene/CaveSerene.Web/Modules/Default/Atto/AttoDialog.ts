
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AttoDialog extends Serenity.EntityDialog<AttoRow, any> {
        protected getFormKey() { return AttoForm.formKey; }
        protected getIdProperty() { return AttoRow.idProperty; }
        protected getLocalTextPrefix() { return AttoRow.localTextPrefix; }
        protected getService() { return AttoService.baseUrl; }

        protected form = new AttoForm(this.idPrefix);

    }
}