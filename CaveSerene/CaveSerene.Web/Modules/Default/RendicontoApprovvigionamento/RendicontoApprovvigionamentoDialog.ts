
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoApprovvigionamentoDialog extends Serenity.EntityDialog<RendicontoApprovvigionamentoRow, any> {
        protected getFormKey() { return RendicontoApprovvigionamentoForm.formKey; }
        protected getIdProperty() { return RendicontoApprovvigionamentoRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoApprovvigionamentoRow.localTextPrefix; }
        protected getNameProperty() { return RendicontoApprovvigionamentoRow.nameProperty; }
        protected getService() { return RendicontoApprovvigionamentoService.baseUrl; }

        protected form = new RendicontoApprovvigionamentoForm(this.idPrefix);

    }
}