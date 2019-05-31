
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AreaDialog extends Serenity.EntityDialog<AreaRow, any> {
        protected getFormKey() { return AreaForm.formKey; }
        protected getIdProperty() { return AreaRow.idProperty; }
        protected getLocalTextPrefix() { return AreaRow.localTextPrefix; }
        protected getNameProperty() { return AreaRow.nameProperty; }
        protected getService() { return AreaService.baseUrl; }

        protected form = new AreaForm(this.idPrefix);

    }
}