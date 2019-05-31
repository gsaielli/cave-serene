
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class FabbisognoDialog extends Serenity.EntityDialog<FabbisognoRow, any> {
        protected getFormKey() { return FabbisognoForm.formKey; }
        protected getIdProperty() { return FabbisognoRow.idProperty; }
        protected getLocalTextPrefix() { return FabbisognoRow.localTextPrefix; }
        protected getService() { return FabbisognoService.baseUrl; }

        protected form = new FabbisognoForm(this.idPrefix);

    }
}