/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class RendicontoDestinazioneUsoEditor
        extends Common.GridEditorBase<RendicontoDestinazioneUsoRow> {
        protected getColumnsKey() { return "Default.RendicontoDestinazioneUso"; }
        protected getDialogType() { return RendicontoDestinazioneUsoEditDialog; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneUsoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: RendicontoDestinazioneUsoRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoDestinazioneUso = Q.toId(row.TipoDestinazioneUso);

            return true;
        }    
    }
}