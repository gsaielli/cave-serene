
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDialog extends Serenity.EntityDialog<RendicontoRow, any> {
        protected getFormKey() { return RendicontoForm.formKey; }
        protected getIdProperty() { return RendicontoRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoRow.localTextPrefix; }
        protected getNameProperty() { return RendicontoRow.nameProperty; }
        protected getService() { return RendicontoService.baseUrl; }

        protected form = new RendicontoForm(this.idPrefix);

    }
}