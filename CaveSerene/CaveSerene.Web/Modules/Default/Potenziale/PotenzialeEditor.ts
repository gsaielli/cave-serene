/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class PotenzialeEditor
        extends Common.GridEditorBase<PotenzialeRow> {
        protected getColumnsKey() { return "Default.Potenziale"; }
        protected getDialogType() { return PotenzialeEditDialog; }
        protected getLocalTextPrefix() { return PotenzialeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: PotenzialeRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;

            return true;
        }
    }
}