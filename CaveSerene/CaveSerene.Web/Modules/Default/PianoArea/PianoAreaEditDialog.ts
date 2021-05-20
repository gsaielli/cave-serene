/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PianoAreaEditDialog extends
        Common.GridEditorDialog<PianoAreaRow> {
        protected getFormKey() { return PianoAreaForm.formKey; }
        protected getNameProperty() { return PianoAreaRow.nameProperty; }
        protected getLocalTextPrefix() { return PianoAreaRow.localTextPrefix; }

        protected form: PianoAreaForm;

        constructor() {
            super();
            this.form = new PianoAreaForm(this.idPrefix);
        }
    }
}