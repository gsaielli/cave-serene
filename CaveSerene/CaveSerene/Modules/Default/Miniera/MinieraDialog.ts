
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class MinieraDialog extends Serenity.EntityDialog<MinieraRow, any> {
        protected getFormKey() { return MinieraForm.formKey; }
        protected getIdProperty() { return MinieraRow.idProperty; }
        protected getLocalTextPrefix() { return MinieraRow.localTextPrefix; }
        protected getNameProperty() { return MinieraRow.nameProperty; }
        protected getService() { return MinieraService.baseUrl; }

        protected form = new MinieraForm(this.idPrefix);

    }
}