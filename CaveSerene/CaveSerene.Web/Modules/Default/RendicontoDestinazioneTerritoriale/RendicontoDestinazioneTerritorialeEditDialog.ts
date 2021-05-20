/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDestinazioneTerritorialeEditDialog extends
        Common.GridEditorDialog<RendicontoDestinazioneTerritorialeRow> {
        protected getFormKey() { return RendicontoDestinazioneTerritorialeForm.formKey; }
        protected getNameProperty() { return RendicontoDestinazioneTerritorialeRow.nameProperty; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneTerritorialeRow.localTextPrefix; }

        protected form: RendicontoDestinazioneTerritorialeForm;

        constructor() {
            super();
            this.form = new RendicontoDestinazioneTerritorialeForm(this.idPrefix);
        }
    }
}