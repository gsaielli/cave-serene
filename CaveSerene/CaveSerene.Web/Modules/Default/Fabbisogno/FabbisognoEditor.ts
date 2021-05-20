/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class FabbisognoEditor
        extends Common.GridEditorBase<FabbisognoRow> {
        protected getColumnsKey() { return "Default.Fabbisogno"; }
        protected getDialogType() { return FabbisognoEditDialog; }
        protected getLocalTextPrefix() { return FabbisognoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: FabbisognoRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;

            return true;
        }    
    }
}