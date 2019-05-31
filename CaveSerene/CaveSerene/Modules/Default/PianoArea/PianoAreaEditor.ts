/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class PianoAreaEditor
        extends Common.GridEditorBase<PianoAreaRow> {
        protected getColumnsKey() { return "Default.PianoArea"; }
        protected getDialogType() { return PianoAreaEditDialog; }
        protected getLocalTextPrefix() { return PianoAreaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: PianoAreaRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IdAreaNome = AreaRow.getLookup().itemById[row.IdArea].Nome;

            return true;
        }    
    }
}