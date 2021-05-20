
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ConcessioneDialog extends Serenity.EntityDialog<ConcessioneRow, any> {
        protected getFormKey() { return ConcessioneForm.formKey; }
        protected getIdProperty() { return ConcessioneRow.idProperty; }
        protected getLocalTextPrefix() { return ConcessioneRow.localTextPrefix; }
        protected getNameProperty() { return ConcessioneRow.nameProperty; }
        protected getService() { return ConcessioneService.baseUrl; }

        protected form = new ConcessioneForm(this.idPrefix);

    }
}