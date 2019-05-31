/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class AutorizzazioneMaterialeEditor
        extends Common.GridEditorBase<AutorizzazioneMaterialeRow> {
        protected getColumnsKey() { return "Default.AutorizzazioneMateriale"; }
        protected getDialogType() { return AutorizzazioneMaterialeEditDialog; }
        protected getLocalTextPrefix() { return AutorizzazioneMaterialeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: AutorizzazioneMaterialeRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;

            return true;
        }    
    }
}