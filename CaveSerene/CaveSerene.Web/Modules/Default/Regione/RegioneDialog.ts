
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RegioneDialog extends Serenity.EntityDialog<RegioneRow, any> {
        protected getFormKey() { return RegioneForm.formKey; }
        protected getIdProperty() { return RegioneRow.idProperty; }
        protected getLocalTextPrefix() { return RegioneRow.localTextPrefix; }
        protected getNameProperty() { return RegioneRow.nameProperty; }
        protected getService() { return RegioneService.baseUrl; }

        protected form = new RegioneForm(this.idPrefix);

    }
}