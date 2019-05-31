
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDestinazioneTerritorialeDialog extends Serenity.EntityDialog<RendicontoDestinazioneTerritorialeRow, any> {
        protected getFormKey() { return RendicontoDestinazioneTerritorialeForm.formKey; }
        protected getIdProperty() { return RendicontoDestinazioneTerritorialeRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneTerritorialeRow.localTextPrefix; }
        protected getService() { return RendicontoDestinazioneTerritorialeService.baseUrl; }

        protected form = new RendicontoDestinazioneTerritorialeForm(this.idPrefix);

    }
}