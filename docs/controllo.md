---
layout: default
title: Controllo compatibilità licenze 
---

Anche questa funzionalità è **necessaria solo se si sono dovute assegnare licenze manualmente**.  
Altrimenti avviene automaticamente.

E' la fase in cui Alice, acquisiti tutti i rilevamenti per la release del prodotto, esamina l'intero insieme dei componenti che la compongono per determinare **se le licenze dei componenti sono compatibili**:
1. tra loro
2. con la licenza con cui si rilascia il prodotto
3. con il tipo d'uso dello prodotto. 

**Se** si è dovuti ricorrere alla [Acquisizione](acquisizione) manuale dei componenti, allora **Alice non ha potuto eseguire automaticamente il controllo**.  
Lo stato della release, e in generale lo stato del prodotto, sarà **NC**, cioè: "*Non Controllato*".  
Di conseguenza il controllo **va eseguito manualmente**.

L'esecuzione del controllo aggiorna il **flag di stato** del prodotto.  
* Se il risultato è **OK**, per quanto riguarda le licenze **il prodotto può essere rilasciato** (salvo errori successivi nella procedura di compilazione inerenti a sicurezza, qualità del codice o altro).
* Se invece è **KO**, bisogna entrare nel merito delle segnalazioni di errore sulla compatibilità licenze.
* Se Alice per qualche motivo non riesce ancora ad eseguire il controllo, lo stato rimane impostato a **NC**.  
Anche in questo caso occorre analizzare la segnalazione che Alice emette.

## Esecuzione manuale

La funzione di controllo licenze si richiama dalla videata di *Elenco prodotti* o da quella di *Elenco versioni*.  
Nel primo caso il controllo viene eseguito sull'ultima release, nel secondo caso è possibile scegliere su quale release eseguire il controllo.

![elenco prodotti](/assets/elenco_prodotti.png){:.small}{:onclick="zoomImage(this)"}

Dopo aver premuto il tasto ![controllo](/assets/pulsante_controlla.png), compare la videata con l'esito del controllo.


## Come leggere il risultato del controllo

![affero](/assets/compatib_affero.png){:.small}{:onclick="zoomImage(this)"}

La videata può avere fino a quattro sezioni:

La sezione **bianca**, dell'**Esito** del controllo, dà la sintesi della situazione del prodotto:  
* *Esito*  
Risultato del controllo; in questo caso negativo.
* *License*  
La licenza con cui viene rilasciato il prodotto.  
La licenza *ariaspa 1.0* è quella con cui per default sono rilasciati quasi tutti i prodotti di ARIA.  
E' una licenza di tipo proprietario.
* *Use*  
Tipo d'uso del prodotto.
* *Licenza compatibilità componenti*
La licenza risultante dall'[analisi di compatibilità](analisi_compatibilita) dell'insieme delle licenze di tutti i componenti del prodotto.


La sezione **rossa**, degli **Errori**, compare solo se ci sono errori bloccanti.  
Nell'esempio dice:  
"Licenza e uso del prodotto contrastano con la licenza compatibilità componenti."  
Significa che la licenza "*ariaspa*" (che è una licenza di tipo proprietario) con cui si vuole rilasciare il prodotto "SIULCOB.BACKEND" non è compatibile  con la licenza di compatibilità componenti: "afferogplv3".

La sezione **azzurra**, delle **Informazioni**, compare sempre.  
Il suo scopo è di mostrare i passi del calcolo della licenza di compatibilità componenti.  
Elencati i componenti per i quali, a partire dalla iniziale "*Public*" (cioè "*pubblico dominio*") la licenza cambia per poter essere compatibile con quelle di tutti i componenti precedentemente analizzati.  
la "licenza di compatibilità componenti" è sostanzialmente un "minimo comune multiplo" tra tutte le licenze dei componenti.

Il punto 5 nellla sezione riportata come esempio dice:  
"*Componente itextpdf con licenza afferogplv3 cambia licenza compatibilità componenti in afferogplv3.*"  
Quindi il componente "itextpdf", che ha licenza "afferogplv3", fa sì che la licenza di compatibilità dei componenti diventi la "afferogplv3", proprio quella che non è compatibile con la licenza del prodotto.  

La sezione **gialla**, è di **warning**  
In questo caso avvisa anche che, anche qualora noi decidessimo di rilasciare il prodotto con licenza "afferogplv3" (anzichè "*ariaspa*"), non basterebbe, perché altri due componenti: "ojdbc8" e "jaws-api", hanno una licenza con cui la "afferogplv3" è incompatibile.

L'unica soluzione, in questo caso di esempio, è sostituire il componente itext con uno con una licenza compatibile con quelle degli altri componenti.

<!--Altri esempi sono riportati alla voce [Casistica errori](casistica_errori.md) di questa documentazione.-->
