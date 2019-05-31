
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AutorizzazioneGrid extends Serenity.EntityGrid<AutorizzazioneRow, any> {
        protected getColumnsKey() { return 'Default.Autorizzazione'; }
        protected getDialogType() { return AutorizzazioneDialog; }
        protected getIdProperty() { return AutorizzazioneRow.idProperty; }
        protected getLocalTextPrefix() { return AutorizzazioneRow.localTextPrefix; }
        protected getService() { return AutorizzazioneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Autorizzazione/ListExcel',
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