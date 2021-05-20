/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class ProdottoEditor
        extends Common.GridEditorBase<ProdottoRow> {
        protected getColumnsKey() { return "Default.Prodotto"; }
        protected getDialogType() { return ProdottoEditDialog; }
        protected getLocalTextPrefix() { return ProdottoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: ProdottoRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;

            return true;
        }    
    }
}