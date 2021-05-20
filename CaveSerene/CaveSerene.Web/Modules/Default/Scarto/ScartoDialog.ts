
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ScartoDialog extends Serenity.EntityDialog<ScartoRow, any> {
        protected getFormKey() { return ScartoForm.formKey; }
        protected getIdProperty() { return ScartoRow.idProperty; }
        protected getLocalTextPrefix() { return ScartoRow.localTextPrefix; }
        protected getNameProperty() { return ScartoRow.nameProperty; }
        protected getService() { return ScartoService.baseUrl; }

        protected form = new ScartoForm(this.idPrefix);

    }
}