/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CaveSerene.Default {
    @Serenity.Decorators.registerEditor()
    export class RendicontoDestinazioneTerritorialeEditor
        extends Common.GridEditorBase<RendicontoDestinazioneTerritorialeRow> {
        protected getColumnsKey() { return "Default.RendicontoDestinazioneTerritoriale"; }
        protected getDialogType() { return RendicontoDestinazioneTerritorialeEditDialog; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneTerritorialeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Aggiungi";
        }
        protected validateEntity(row: RendicontoDestinazioneTerritorialeRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoDestinazioneTerritoriale = Q.toId(row.TipoDestinazioneTerritoriale);

            return true;
        }    
    }
}