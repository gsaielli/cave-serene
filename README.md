# Cave-Serene
Cave-Serene è un **Catasto SPERIMENTALE di Attività Minerarie** multipiattaforma e multidatabase, adatto per Enti Pubblici e non. 
E' un software **Open Source** (cioè l'uso è gratuito ed i sorgenti sono a Vs. disposizione). 

![Schermata 1](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s1.png)

La parola **sperimentale** si riferisce al fatto che il database potrebbe essere considerato semplificato rispetto alle aspettative 
di un dato Ente e alcune funzionalità (ad es. il GIS) sono sviluppate solo a livello embrionale. Tuttavia il sistema è facile da 
modificare e quindi adatto per costituire la **base per un serio utilizzo professionale**. Inoltre il codice è generato automaticamente 
(v. oltre) e ciò rende l'applicazione molto uniforme, gradevole, veloce, compatibile e facile da usare. 

Fatevi un'idea da soli, provate il demo [qui](http://caveserene.aielli.net).

NOTA: Inizialmente Cave-Serene è stata realizzata per valutare le potenzialità del tool Serenity, esclusivamente **all'interno della 
mia attività di Ingegnere ICT Libero Professionista**. Ho potuto utilizzare nozioni catastali e minerarie non banali apprese in anni 
di consulenza, tuttavia **non mi considero un esperto del settore** e non mi assumo responsabilità per l'uso del programma, come dice 
anche la licenza d'uso che accettate implicitamente usando questo software.

## Funzionalità
La versione attuale di Cave-Serene include le seguenti macroaree: **Pianificazione** (gestione di PIAE e Aree Estrattive), 
**Autorizzazione** (Soggetti Esercenti, Cave, Miniere, Impianti, Autorizzazioni e Concessioni) e **Rendicontazione**. 
La macroarea **Controlli** (Stampe, ISTAT e Polizia Mineraria) NON è stata ancora sviluppata.

### Pianificazione
Questa area contiene gli **Enti** (in genere Provincie e/o raggruppamenti di Comuni), le **Aree Estrattive**, i **Materiali** e 
la gestione dei **PIAE**. Questi ultimi sono caratterizzati, tra le altre cose, dai **Fabbisogni** relativi ai Materiali e i 
**Potenziali associati alle Aree Estrattive** presenti nel PIAE, sempre relativamente a quei Materiali.

![Schermata 2](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s2.png)

### Autorizzazione
Il processo autorizzativo si svolge col rilascio di una **Autorizzazione** che viene data ad un certo **Esercente** per estrarre 
da una certa **Cava**. L'autorizzazione è relativa a determinati Materiali ed include anche le sezioni Iter, Sospensioni, VIA, 
Deroghe/Proroghe e Sistemazione. Vengono gestite anche le **Concessioni** relative al caso analogo delle **Miniere**.

![Schermata 3](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s3.png)

### Rendicontazione
Il processo di rendicontazione è relativo alle Cave, Miniere e, per quanto riguarda i dati statistici, agli Impianti. Sono 
inclusi dati dei **Materiali Estratti, Inutilizzati, Mezzi Produttivi ed Energia**.

![Schermata 4](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s4.png)

### GIS
E' integrato anche un semplice **sistema cartografico**.

![Schermata 5](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s5.png)

### ISTAT e altro
I dati di Autorizzazione e Rendicontazione sono **pienamente sufficienti per la creazione del report ISTAT**. Tuttavia questa 
sezione NON è stata ancora implementata.

## Multipiattaforma

### Serenity
Cave-Serene è stato realizzato con **Visual Studio 2019** (anche Community Edition) e [**Serenity**](https://github.com/volkanceylan/Serenity). 
L'ultima versione è stata modificata con **Visual Studio 2022 CE**

### Piattaforme supportate
Cave-Serene è multipiattaforma e gira sotto Windows, Linux e macOS. L'applicazione web è responsive e lato client supporta molto 
bene la maggior parte dei dispositivi mobile. 

### Database supportati
Al momento i database supportati sono **Microsoft SQL Server, MySQL, SQLLite e Oracle**.

### Compatibilità
Cave-Serene è una applicazione web **HTML5 responsive**. Come tale essa è compatibile con una gamma molto estesa di dispositivi: 
computer, tablet e smartphone. Segnalateci eventuali (ed improbabili) incompatibilità [qui](https://github.com/gsaielli/cave-serene/issues).

Esempi di visualizzazione dell'**Anagrafica Cave in iPhone 5**  (320x658 pixels):

![Schermata 6](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s6.png)
![Schermata 7](https://github.com/gsaielli/cave-serene/blob/master/Screenshots/s7.png)

## Stato attuale di Cave-Serene
Le funzionalità implementate **sono funzionanti al 100%** anche se test molto estesi non sono stati effettuati. Segnalateci 
eventuali errori [qui](https://github.com/gsaielli/cave-serene/issues).

## Demo online
Il demo online si trova [qui](https://caveserene.azurewebsites.net/). L'installazione attuale è su database SQLITE su Azure.

## Come installare o modificare Cave-Serene 

### Database supportati: SQL Server, Oracle, MySQl e SQLITE
Potete creare il database utilizzando gli script acclusi [qui](https://github.com/gsaielli/cave-serene/blob/master/).
In alternativa usate caveserene.sqlite che si trova tra i sorgenti.

### Usare i sorgenti con VS
Per modificare Cave-Serene è necessario **Microsoft Visual Studio** (2019 oppure 2022, anche in versione Community). 

Successivamente scaricate i file dei sorgenti usando il pulsante verde **Clone or Download** che si trova in alto a destra. 

Una volta che i file sono nel vostro computer eseguite in sequenza questi comandi:
1. Aprite la Soluzione in **Visual Studio**
1. Eseguite il **rebuild**
1. Al termine potete lanciare il programma con **F5** (oppure **CTRL+F5**) 

## Licenza d'uso di Cave-Serene
Cave-Serene è un software Open Source rilasciato in licenza 
[GNU General Public License 3](https://github.com/gsaielli/cave-serene/blob/master/LICENSE)

## Consulting
Se desiderate collaborare allo sviluppo di Cave-Serene, potete contribuire ad esempio segnalando bug e migliorie del software 
oppure della documentazione. 

:+1: Ultimo aggiornamento: 5 gennaio 2022
