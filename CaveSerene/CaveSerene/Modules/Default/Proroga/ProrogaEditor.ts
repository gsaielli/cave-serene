/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class ProrogaEditor
        extends Common.GridEditorBase<ProrogaRow> {
        protected getColumnsKey() { return "Default.Proroga"; }
        protected getDialogType() { return ProrogaEditDialog; }
        protected getLocalTextPrefix() { return ProrogaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: ProrogaRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            //row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;

            return true;
        }    
    }
}