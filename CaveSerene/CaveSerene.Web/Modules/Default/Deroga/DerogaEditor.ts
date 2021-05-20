/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class DerogaEditor
        extends Common.GridEditorBase<DerogaRow> {
        protected getColumnsKey() { return "Default.Deroga"; }
        protected getDialogType() { return DerogaEditDialog; }
        protected getLocalTextPrefix() { return DerogaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: DerogaRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            //row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;

            return true;
        }    
    }
}