
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ProdottoDialog extends Serenity.EntityDialog<ProdottoRow, any> {
        protected getFormKey() { return ProdottoForm.formKey; }
        protected getIdProperty() { return ProdottoRow.idProperty; }
        protected getLocalTextPrefix() { return ProdottoRow.localTextPrefix; }
        protected getNameProperty() { return ProdottoRow.nameProperty; }
        protected getService() { return ProdottoService.baseUrl; }

        protected form = new ProdottoForm(this.idPrefix);

    }
}