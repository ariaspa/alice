---
layout: default
title: Componente 
---

I componenti sono entità a sè stanti, con un nome, una versione e una licenza.  
Sono memorizzati partendo dai [Componenti Rilevati](rilevamento) nel momento della [Acquisizione](acquisizione).

Un *Componente* è memorizzato una volta sola, a parità di *nome + versione*, per evitare duplicazioni.  
Può essere collegato a più di un [Prodotto](prodotto) e relativa [Versione](versione) tramite associazioni dette [Legami](legami).

Quindi, al momento della *Acquisizione* di un *Rilevamento*, un *Componente Rilevato* è inserito nella tabella *componenti* solo se non già presente, mentre viene sempre creato un *Legame* tra il *Componente* in archivio, e la *Versione* del *Prodotto* che verrà sottoposto al [Controllo compatibilità licenze](controllo).

Inoltre in fase di [Rilevazione](rilevazione) se il *Componente Rilevato* è già presente nell'archivio *componenti*, **la licenza del Componente in archivio prevale sempre su quella del Componente Rilevato**.

Ciò fa sì che, per ogni componente, una licenza debba essere [assegnata manualmente](assegnazione), **una volta sola**.  
Tutte **le volte successive** che quel componente verrà rilevato, la licenza verrà **assegnata automaticamente** in base a quanto risulta sull'archivio componenti.


## Pagina di inserimento/modifica

![modifica componente]({{site.baseurl}}/assets/componente.png){:.small}{:onclick="zoomImage(this)"}


## Dati obbligatori
 - Nome
 - Titolo
 - Licenza

## Dati Facoltativi
 - Versione
 - Descrizione
 - Note
 
### Flag
 - Acquistato  
   Il componente è a pagamento ma la licenza è stata regolarmente acquistata.  
 - Proprio  
   Il componente è stato sviluppato da, o per conto di, ARIA.  
 - Escluso  
   Il componente, per motivi specifici che **devono essere specificati nelle Note**) deve essere escluso dal contollo licenze.  
   
<span class="danger">Nota: mettete il segno di spunta in una di queste caselle solo se siete sicuri di ciò che implicitamente dichiarate.</span>  
<span class="danger">Sarete ritenuti responsabili in caso di dichiarazione falsa!</span>
