
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class MaterialeDialog extends Serenity.EntityDialog<MaterialeRow, any> {
        protected getFormKey() { return MaterialeForm.formKey; }
        protected getIdProperty() { return MaterialeRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialeRow.localTextPrefix; }
        protected getNameProperty() { return MaterialeRow.nameProperty; }
        protected getService() { return MaterialeService.baseUrl; }

        protected form = new MaterialeForm(this.idPrefix);

    }
}