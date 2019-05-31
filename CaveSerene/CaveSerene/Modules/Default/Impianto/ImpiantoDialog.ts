
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ImpiantoDialog extends Serenity.EntityDialog<ImpiantoRow, any> {
        protected getFormKey() { return ImpiantoForm.formKey; }
        protected getIdProperty() { return ImpiantoRow.idProperty; }
        protected getLocalTextPrefix() { return ImpiantoRow.localTextPrefix; }
        protected getNameProperty() { return ImpiantoRow.nameProperty; }
        protected getService() { return ImpiantoService.baseUrl; }

        protected form = new ImpiantoForm(this.idPrefix);

    }
}