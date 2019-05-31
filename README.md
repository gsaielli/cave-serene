# Cave-Serene
Cave-Serene è un **Catasto SPERIMENTALE di Attività Minerarie** multipiattaforma e multidatabase, adatto per Enti Pubblici e non. E' un software **Open Source** (cioè l'uso è gratuito e i sorgenti sono a Vs. disposizione) sperimentale perchè basato su un generatore di codice (Serenity) che a partire da un database relazionale e da un sistema di annotazioni vi permette di creare automaticamente l'intera applicazione web. 

Il database è semplificato rispetto alle aspettative di un professionista e le funzionalità sono sviluppate a livello embrionale. Tuttavia il sistema è facile da modificare e quindi adatto per costituire la base per un serio utilizzo di tipo professionale. Inoltre il codice generato automaticamente rende l'applicazione molto uniforme, gradevole, veloce, compatibile e facile da usare. Fatevi un'idea da soli, provate il demo (v. oltre).

![Schermata 1](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s1.png)

Inizialmente l'applicazione è stata realizzata per valutare le potenzialità di Serenity, all'interno della mia attività di Ingegnere Libero Professionista. Ho utilizzato nozioni catastali e minerarie non banali perchè apprese in anni di consulenza prestata per un importante Ente Pubblico. Tuttavia non mi considero un esperto del settore e non mi assumo la minima responsabilità per l'uso del programma. Come dice anche la licenza d'uso che accettate implicitamente usando questo software.

## Funzionalità
La versione attuale di Cave-Serene include le seguenti macroaree: **Pianificazione** (gestione di PIAE e Aree Estrattive), **Autorizzazione** (Soggetti Esercenti, Cave, Miniere, Impianti, Autorizzazioni e Concessioni) e **Rendicontazione**. La macroarea **Controlli** (Stampe, ISTAT e Polizia Mineraria) NON è stata ancora sviluppata.

### Pianificazione
![Schermata 2](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s2.png)
### Autorizzazione
![Schermata 3](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s3.png)
### Rendicontazione
![Schermata 4](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s4.png)
### GIS
![Schermata 5](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s5.png)
### ISTAT e altro
Questa sezione NON è stata ancora implementata.

## Multipiattaforma
Cave-Serene è una applicazione .Net Framework 4.5 e gira sotto Windows con IIS ma anche con gli altri server compatibili.  

### Serenity
Cave-Serene è stato realizzato con Visual Studio 2015 (anche Community Edition) e [Serenity](https://github.com/volkanceylan/Serenity).

### Piattaforme supportate
E' in fase di sviluppo la versione .Net Core che è multipiattaforma e gira sotto Windows, Linux e macOS.

### Database supportati
I database supportati sono SQL Server, Postgres SQL, MySQL, SQLLite e Oracle.

### Compatibilità
Cave-Serene è una applicazione web HTML5 responsive. Come tale essa è compatibile con una gamma molto estesa di dispositivi: computer, tablet e smartphone. Segnalateci eventuali (ed improbabili) incompatibilità.

Esempi di visualizzazione dell'anagrafica Cave in iPhone 5  (320x658 pixels):
![Schermata 6](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s6.png)
![Schermata 7](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s7.png)

## Stato attuale di Cave-Serene
Le funzionalità implementate sono funzionanti al 100% anche se test molto estesi non sono stati effettuati. Segnalateci eventuali errori.

## Demo online
Il demo online si trova [qui](http://caveserene.aielli.net). Potete modificare i dati a piacimento ma il database viene rigenerato periodicamente.

## Come installare o modificare Cave-Serene 
ATTENZIONE: **le istruzioni che seguono si riferiscono esclusivamente all'installazione sotto Windows con database SQL Server**. E' necessario avere una certa pratica da sistemita o programmatore (essere capaci di creare database SQL e applicazioni IIS e di modificare il web.config per quanto riguarda la stringa di connessione del db).

### Creare il database
Potete creare il database in due modi differenti. E' necessario l'accesso con **privilegi dba** ad un server Microsoft SQL Server (qualunque versione va bene, anche non molto recente).

**Modo 1**: usare uno script di creazione
1. Scaricare lo script di creazione del database da qui
1. Aprire una finestra di query in SQL Management Studio
1. Eseguire lo script

**Modo 2**: restore di un db già pronto
1. Scaricare il database da qui
1. Eseguite il restore da SQL Management Studio

### Installare in IIS
E' necessario scaricare il package dell'applicazione da qui. Successivamente create una cartella per l'app e decompattate il contenuto del package che avete appena scaricato. Create l'applicazione nella console di IIS e fatela puntare alla cartella creata nel passo precedente. Infine modificate il file Web.Config presente nella root dell'applicazione usando i dati di connessione al db creato al punto **Creare il database**.

### Usare i sorgenti con VS
Per modificare Cave-Serene è necessario Microsoft Visual Studio (dal 2015, 2017 oppure 2019), anche in versione Community. E' necesario installare [Serenity da qui](https://marketplace.visualstudio.com/items?itemName=VolkanCeylan.SereneSerenityApplicationTemplate). Scaricate i file dei sorgenti usando il pulsante verde **Clone or Download** che si trova in alto a destra. Una volta che i file sono nel vostro computer eseguite in sequenza questi comandi:
1. Fate click destro sulla Soluzione e poi dat il comando 

## Licenza d'uso di Cave-Serene

## Consulting


:+1: Ultimo aggiornamento: 31 maggio 2019
