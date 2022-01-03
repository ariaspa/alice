---
layout: default
title: Preparazione
---

Per fare in modo che Alice possa controllare un prodotto è necessario:	

## Censire il prodotto
Per *censire* il prodotto è sufficiente entrare in Alice in *Verifica => Prodotti* e dalla videata di elenco premere il tasto *Inserisci*.  

I dati fondamentali per l'esecuzione del controllo sono:
* il **Nome**, che deve essere identico (corrispondenza case-sensitive) a quello registrato in Elettra.  
	Il *titolo* è obbligatorio, ma non ha effetti sull'esecuzione del controllo.  
	Serve solo a identificare meglio il prodotto dato che il nome è spesso un acronimo. 

* la **Licenza** con cui lo si rilascia.  
	Non va inserita a livello di prodotto. Può infatti capitare che, dopo il rilascio di alcune versioni, si decida di cambiare licenza.  
	E' quindi **legata alla release** del prodotto ed è passata ad Alice tramite le **istruzioni nel file pom** della compilazione.  
	Per convenzione si imposta la licenza *ARIASPA*, che viene considerata come una generica licenza proprietaria.

* il tipo di **Uso** cui è destinato il prodotto.

### Tipi d'uso
* Servizio Utenti Esterni  
	Tipicamente un'applicazione Web accessibile su Internet (sia liberamente che con autenticazione)
* Servizio Utenti Interni  
	Un'applicazione Web accessibile però solo su **intranet**
* Distribuito (all'esterno)  
	Un sofware che deve essere **installato** su client oppure su server non direttamente appartenenti ad ARIA.


## Modificare il Pom
Nel *pom* di compilazione devono essere inserite le istruzioni per la generazione del file xml.  
#### <span class="badge to_do">To do</span> Istruzioni da inserire nel pom

Una volta completata la preparazione è possibile passare alla [Compilazione]({{site.baseurl}}/compilazione). 
