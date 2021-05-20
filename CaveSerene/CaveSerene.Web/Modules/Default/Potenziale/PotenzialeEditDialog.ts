/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PotenzialeEditDialog extends
        Common.GridEditorDialog<PotenzialeRow> {
        protected getFormKey() { return PotenzialeForm.formKey; }
        protected getNameProperty() { return PotenzialeRow.nameProperty; }
        protected getLocalTextPrefix() { return PotenzialeRow.localTextPrefix; }

        protected form: PotenzialeForm;

        constructor() {
            super();
            this.form = new PotenzialeForm(this.idPrefix);
        }
    }
}