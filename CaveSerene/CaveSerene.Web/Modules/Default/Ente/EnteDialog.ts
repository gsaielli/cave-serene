
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class EnteDialog extends Serenity.EntityDialog<EnteRow, any> {
        protected getFormKey() { return EnteForm.formKey; }
        protected getIdProperty() { return EnteRow.idProperty; }
        protected getLocalTextPrefix() { return EnteRow.localTextPrefix; }
        protected getNameProperty() { return EnteRow.nameProperty; }
        protected getService() { return EnteService.baseUrl; }

        protected form = new EnteForm(this.idPrefix);

    }
}