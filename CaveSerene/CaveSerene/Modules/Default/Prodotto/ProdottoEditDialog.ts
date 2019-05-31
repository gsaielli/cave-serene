/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ProdottoEditDialog extends
        Common.GridEditorDialog<ProdottoRow> {
        protected getFormKey() { return ProdottoForm.formKey; }
        protected getNameProperty() { return ProdottoRow.nameProperty; }
        protected getLocalTextPrefix() { return ProdottoRow.localTextPrefix; }

        protected form: ProdottoForm;

        constructor() {
            super();
            this.form = new ProdottoForm(this.idPrefix);
        }
    }
}