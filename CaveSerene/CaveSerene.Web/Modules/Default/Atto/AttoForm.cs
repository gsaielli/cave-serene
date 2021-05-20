namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Atto")]
    [BasedOnRow(typeof(Entities.AttoRow), CheckNames = true)]
    public class AttoForm
    {
        public Int32 NumAtto { get; set; }
        public DateTime DataAtto { get; set; }
        public Int32 TipoAtto { get; set; }
    }
}