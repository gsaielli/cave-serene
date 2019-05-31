﻿
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.Autorizzazione")]
    [BasedOnRow(typeof(Entities.AutorizzazioneRow), CheckNames = true)]
    public class AutorizzazioneColumns
    {
        [EditLink]
        public String Descrizione { get; set; }
        public String IdEsercenteRagSoc { get; set; }
        public String NumeroAtto { get; set; }
        public DateTime DataAutorizzazione { get; set; }
        public DateTime DataSistemazione { get; set; }
    }
}