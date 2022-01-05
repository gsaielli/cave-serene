
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class EsercenteGrid extends Serenity.EntityGrid<EsercenteRow, any> {
        protected getColumnsKey() { return 'Default.Esercente'; }
        protected getDialogType() { return EsercenteDialog; }
        protected getIdProperty() { return EsercenteRow.idProperty; }
        protected getLocalTextPrefix() { return EsercenteRow.localTextPrefix; }
        protected getService() { return EsercenteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Esercente";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Esercente/ListExcel',
                separator: true
            }));

            buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}