/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    import TipoAtto = CaveSerene.Modules.Default.Atto.TipoAtto;

    @Serenity.Decorators.registerEditor()
    export class AttoEditor
        extends Common.GridEditorBase<AttoRow> {
        protected getColumnsKey() { return "Default.Atto"; }
        protected getDialogType() { return AttoEditDialog; }
        protected getLocalTextPrefix() { return AttoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: AttoRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoAtto = Q.toId(row.TipoAtto);

            return true;
        } 
    }
}