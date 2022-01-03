---
layout: default
title: Versione 
--- 

Ogni [Prodotto](prodotto) può avere più release.  
Alice memorizza la composizione del prodotto nei diversi rilasci che si succedono nel tempo.

## Release e Compilazione
Ha senso ripetere il controllo compatibilità licenze su un prodotto, se l'insieme delle sue dependency è cambiato.  
Normalmente questo non accade **per delle semplici patch**.

Per questo la compilazione invia i file licenses ad Alice solo se è cambiato almeno il numero di *minor release*, altrimenti si limita a tener validi i rilevamenti precedenti e **NON AGGIORNA l'elenco delle depedency** sui cui esegue il controllo.

**Per forzare l'aggiornamento dei componenti rilevati** su di una versione già esistente, è necessario **cancellare la versione**.  
In tal modo la compilazione, non trovando la versione, la ricreerà da zero, passando i relativi nuovi file *licenses*.


## Pagina di inserimento/modifica

![modifica versione]({{site.baseurl}}/assets/versione.png){:.small}{:onclick="zoomImage(this)"}

## Dati obbligatori
**Versione**  
Numero della versione.  
Preferibilmente nella forma standard xx.yy.zz  
xx = major release  
yy = minor release  
zz = patch

**Licenza**
Licenza con cui si rilascia il Prodotto.  
E' memorizzata a livello di release in quanto può capitare di cambiare licenza nel corso del tempo.

Di default la licenza per i prodotti di ARIA è la licenza *Ariaspa*.  
Si tratta di una licenza fittizia trattata come una generica licenza proprietaria, non opensource.  
Le vecchie versioni dei prodotti, rilasciate precedentemente al cambio di ragione sociale aziendale, sono stati rilasciati con una analoga licenza *Lispa*.

**Ordinamento**  
E' comodo ordinare le versioni, nell'*Elenco Versioni*, dalla più recente alla più vecchia.  
Poichè non sempre il numero di versione è espresso in forma standard, non è utilizzabile per l'ordinamento.  
Questo campo, calcolato automaticamente in creazione, ma modificabile manualmente, permette di determinare l'ordinamento desiderato. 


## Dati informativi
Dati relativi al [Prodotto](prodotto) cui la versione si riferisce:
- Nome 
- Titolo
- Uso

Dati calcolati dall'ultimo [Controllo compatibilità licenze](controllo) eseguito per la versione:
- Data controllo
- Esito
- Licenza compatibilità componenti


## Dati facoltativi
**Note**  
Specifiche per la versione, e non valide in generale per il prodotto.
