/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class ScartoEditor
        extends Common.GridEditorBase<ScartoRow> {
        protected getColumnsKey() { return "Default.Scarto"; }
        protected getDialogType() { return ScartoEditDialog; }
        protected getLocalTextPrefix() { return ScartoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: ScartoRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoScarto = Q.toId(row.TipoScarto);

            return true;
        }    
    }
}