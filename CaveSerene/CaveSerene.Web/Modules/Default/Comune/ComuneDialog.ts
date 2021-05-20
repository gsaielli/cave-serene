
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ComuneDialog extends Serenity.EntityDialog<ComuneRow, any> {
        protected getFormKey() { return ComuneForm.formKey; }
        protected getIdProperty() { return ComuneRow.idProperty; }
        protected getLocalTextPrefix() { return ComuneRow.localTextPrefix; }
        protected getNameProperty() { return ComuneRow.nameProperty; }
        protected getService() { return ComuneService.baseUrl; }

        protected form = new ComuneForm(this.idPrefix);

    }
}