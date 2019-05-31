
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PianoGrid extends Serenity.EntityGrid<PianoRow, any> {
        protected getColumnsKey() { return 'Default.Piano'; }
        protected getDialogType() { return PianoDialog; }
        protected getIdProperty() { return PianoRow.idProperty; }
        protected getLocalTextPrefix() { return PianoRow.localTextPrefix; }
        protected getService() { return PianoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Piano/ListExcel',
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