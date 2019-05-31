/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class RendicontoApprovvigionamentoEditor
        extends Common.GridEditorBase<RendicontoApprovvigionamentoRow> {
        protected getColumnsKey() { return "Default.RendicontoApprovvigionamento"; }
        protected getDialogType() { return RendicontoApprovvigionamentoEditDialog; }
        protected getLocalTextPrefix() { return RendicontoApprovvigionamentoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: RendicontoApprovvigionamentoRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoApprovvigionamento = Q.toId(row.TipoApprovvigionamento);

            return true;
        }    
    }
}