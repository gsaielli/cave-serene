using System.ComponentModel;
using Serenity.ComponentModel;

namespace CaveSerene.Modules.Default.Enums
{
    [EnumKey("Default.TipoScarto")]
    public enum TipoScarto
    {
        [Description("Limi e polveri")]
        LimiPolveri = 1,
        [Description("Scotico")]
        Scotico = 2,
        [Description("Pietrame")]
        Pietrame = 3,
    }

    [EnumKey("Default.TipoDestinazioneUso")]
    public enum TipoDestinazioneUso
    {
        [Description("Riempimenti")]
        Riempimenti = 1,
        [Description("Rilevati stradali")]
        RilevatiStradali,
        [Description("Opere idrauliche")]
        OpereIdrauliche,
        [Description("Conglomerati cementizi bituminosi")]
        ConglomeratiCementiziBituminosi,
        [Description("Pietra da taglio")]
        PietraTaglio,
        [Description("Leganti")]
        Leganti,
        [Description("Industria laterizi")]
        IndustriaLaterizi,
        [Description("Industria ceramica")]
        IndustriaCeramica,
        [Description("Impermeabilizzazioni")]
        Impermeabilizzazioni,
        [Description("Altro tipo di industria")]
        AltroIndustria,
        [Description("Litoidi")]
        Litoidi,
        [Description("Inerti stabilizzanti")]
        InertiStabilizzanti,
        [Description("Calcestruzzi")]
        Calcestruzzi,
        [Description("Bitumi")]
        Bitumi,
        [Description("Produzione laterizi")]
        ProduzioneLaterizi,
        [Description("Cementificio")]
        Cementificio,
    }

    [EnumKey("Default.TipoDestinazioneTerritoriale")]
    public enum TipoDestinazioneTerritoriale
    {
        [Description("Nel Comune")]
        NelComune = 1,
        [Description("Nella Provincia")]
        NellaProvincia = 2,
        [Description("Nella Regione")]
        NellaRegione = 3,
        [Description("Fuori Regione")]
        FuoriRegione = 4,
    }

    [EnumKey("Default.TipoApprovvigionamento")]
    public enum TipoApprovvigionamento
    {
        [Description("Da cava regionale")]
        DaCavaRegionale = 1,
        [Description("Da cava extra-regionale")]
        DaCavaExtraRegionale = 2,
        [Description("Da sistemazione idraulica")]
        DaSistemazioneIdraulica = 3,
        [Description("Costruzione e demolizione")]
        CostruzioneDemolizione = 4,
        [Description("Altro")]
        Altro = 5,
    }

    [EnumKey("Default.TipoLavorazione")]
    public enum TipoLavorazione
    {
        LAVAGGIO = 1,
        VAGLIATURA,
        FRANTUMAZIONE,
        MACINAZIONE,
        SEGAGIONE,
        ESSICCAZIONI,
        ARATURA,
        RIPPATURA,
        ALTRO,
    }

    [EnumKey("Default.TipoCommercializzazione")]
    public enum TipoCommercializzazione
    {
        TAL_QUALE = 1,
        STABILIZZATI,
        GHIAIA,
        SABBIA,
        BLOCCHI,
        PEZZAME,
        LASTRE,
        LAVORATI,
    }

    [EnumKey("Default.TipoStato")]
    public enum TipoStato
    {
        [Description("Attivo")]
        Attivo = 1,
        [Description("Non Utilizzato")]
        NonUtilizzato = 2,
        [Description("Esaurito")]
        Esaurito = 3,
    }

    [EnumKey("Default.TipoISTAT"), ScriptInclude]
    public enum TipoISTAT
    {
        [Description("Inerte")]
        Inerte = 1,
        [Description("Argilla")]
        Argilla = 2,
        [Description("Sabbie silicee")]
        SabbieSilicee = 3,
        [Description("Torba")]
        Torba = 4,
        [Description("Arenaria")]
        Arenaria = 5,
    }

    [EnumKey("Default.TipoImpianto")]
    public enum TipoImpianto
    {
        [Description("Fisso")]
        Fisso = 1,
        [Description("Mobile")]
        Mobile,
    }

    [EnumKey("Default.TipoDissesto")]
    public enum TipoDissesto
    {
        [Description("Assente")]
        Assente = 1,
        [Description("Non rilevabile")]
        NonRilevabile,
        [Description("Frana")]
        Frana,
        [Description("Calanco")]
        Calanco,
        [Description("Erosione fluviale")]
        ErosioneFluviale,
    }

    [EnumKey("Default.TipoColtivazione")]
    public enum TipoColtivazione
    {
        [Description("A fossa")]
        AFossa = 1,
        [Description("A parete con gradoni")]
        PareteGradoni,
        [Description("A parete con scarpata unica")]
        PareteScarpataUnica,
        [Description("In sotterraneo")]
        InSotterraneo,
        [Description("Misto (galleria e cielo aperto)")]
        Misto,
        [Description("Miniera a cielo aperto")]
        MinieraCieloAperto,
    }

    [EnumKey("Default.TipoStruttura")]
    public enum TipoStruttura
    {
        [Description("Cava")]
        Cava = 1,
        [Description("Impianto")]
        Impianto = 2,
        [Description("Miniera")]
        Miniera = 3,
    }

    [EnumKey("Default.TipoRecuperoMorfologico")]
    public enum TipoRecuperoMorfologico
    {
        [Description("Zona umida")]
        ZonaUmida = 1,
        [Description("Cassa espansione")]
        CAssaEspansione,
    }

    [EnumKey("Default.TipoRecuperoFinale")]
    public enum TipoRecuperoFinale
    {
        [Description("Uso agricolo")]
        UsoAgricolo = 1,
        [Description("Uso produttivo")]
        UsoProduttivo,
    }

    [EnumKey("Default.TipoDisponibilita")]
    public enum TipoDisponibilita
    {
        Proprieta = 1,
        Affitto,
        Altro,
    }

    [EnumKey("Default.TipoAtto")]
    public enum TipoAtto
    {
        [Description("Adozione Provinciale")]
        AdozioneProvinciale = 1,
        [Description("Adozione Assemblea di Comuni")]
        AdozioneAssembleaComuni = 2,
        [Description("Approvazione Regionale Parziale")]
        ApprovazioneRegionaleParziale = 3,
    }

    [EnumKey("Default.TipoArea")]
    public enum TipoArea
    {
        [Description("Ambito vincolato")]
        Ambito = 1,
        [Description("Polo")]
        Polo = 2,
        [Description("Obiettivo di quantità")]
        Obiettivo = 3,
        [Description("Pregresso")]
        Pregresso = 98,
        [Description("Da rivedere")]
        Rivedere = 99,
    }

    [EnumKey("Default.TipoStoria")]
    public enum TipoStoria
    {
        [Description("Ampliamento")]
        Ampliamento = 1,
        [Description("Nuovo")]
        Nuovo = 2,
        [Description("Completamento")]
        Completamento = 3,
        [Description("Pregresso")]
        Pregresso = 98,
    }

    [EnumKey("Default.TipoPosizione")]
    public enum TipoPosizione
    {
        [Description("Cresta")]
        Cresta = 1,
        [Description("Fondovalle")]
        Fondovalle = 2,
        [Description("Pianura")]
        Pianura = 3,
        [Description("Pianura in golena")]
        PianuraGolena = 4,
        [Description("Pianura sotto falda")]
        PianuraSottoFalda = 5,
        [Description("Pianura sopra falda")]
        PianuraSopraFalda = 6,
        [Description("Di versante")]
        Versante = 7,
    }


}