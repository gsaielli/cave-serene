/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AutorizzazioneMaterialeEditDialog extends
        Common.GridEditorDialog<AutorizzazioneMaterialeRow> {
        protected getFormKey() { return AutorizzazioneMaterialeForm.formKey; }
        protected getNameProperty() { return AutorizzazioneMaterialeRow.nameProperty; }
        protected getLocalTextPrefix() { return AutorizzazioneMaterialeRow.localTextPrefix; }

        protected form: AutorizzazioneMaterialeForm;

        constructor() {
            super();
            this.form = new AutorizzazioneMaterialeForm(this.idPrefix);
        }
    }
}