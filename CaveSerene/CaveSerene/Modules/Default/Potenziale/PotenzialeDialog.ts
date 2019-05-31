
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PotenzialeDialog extends Serenity.EntityDialog<PotenzialeRow, any> {
        protected getFormKey() { return PotenzialeForm.formKey; }
        protected getIdProperty() { return PotenzialeRow.idProperty; }
        protected getLocalTextPrefix() { return PotenzialeRow.localTextPrefix; }
        protected getService() { return PotenzialeService.baseUrl; }

        protected form = new PotenzialeForm(this.idPrefix);

    }
}