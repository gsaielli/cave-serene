/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoApprovvigionamentoEditDialog extends
        Common.GridEditorDialog<RendicontoApprovvigionamentoRow> {
        protected getFormKey() { return RendicontoApprovvigionamentoForm.formKey; }
        protected getNameProperty() { return RendicontoApprovvigionamentoRow.nameProperty; }
        protected getLocalTextPrefix() { return RendicontoApprovvigionamentoRow.localTextPrefix; }

        protected form: RendicontoApprovvigionamentoForm;

        constructor() {
            super();
            this.form = new RendicontoApprovvigionamentoForm(this.idPrefix);
        }
    }
}