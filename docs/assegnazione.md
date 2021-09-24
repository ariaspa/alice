---
layout: default
title: Assegnazione manuale delle licenze 
---

Questa funzionalità è **necessaria solo se Alice ha emesso l'errore:** "*Licenza non trovata per uno o piu' componenti*".  
In tal bisogna intervenire manualmente per associare la licenza giusta ai componenti che risultano in errore.

## Avviso Importante

Tutte **le operazioni di modifica** sui componenti rilevati:
- Assegnazione della licenza ad un componente
- Modifica della licenza assegnata
- Cancellazione di un componente rilevato
- Impostazione dei flag di componente "Acquistato" o "Proprio"

illustrate nel seguito, **sono determinanti per l'esito finale del controllo**.

Pertanto:

<span class="danger">Tutte queste operazioni e la user-id di chi le esegue, sono registrate in appositi log.</span>

<span class="danger">In caso di contestazioni per violazione di licenza o dichiarazioni false, potreste essere ritenuti responsabili, anche con conseguenze legali.</span>
 
Quindi, se non siete certi di **assegnare la licenza corretta**, o non siete sicuri che i **dati** che state impostando siano **corretti e veritieri**: chiedete assistenza.

## Identificare i componenti in errore

Solitamente nel messaggio di errore è compreso un link al rilevamento che contiene i componenti in errore.  
Questi sono identificabili dal **KO** nella colonna *Licenza assegnata*.

![elenco componenti rilevati](/assets/detected_components.png){:.small}{:onclick="zoomImage(this)"}



## Errori	nell'assegnazione automatica della licenze
Dato il suo funzionamento, quando la ricerca automatica fallisce significa innanzitutto che:
1. il binomio *componente + versione* non è presente nell'archivio componenti di Alice  
2. nella lettura del nodo *&lt;licenses&gt;* si è **probabilmente** verificato uno dei casi seguenti.


### Caso 1: Licenza senza versione
![licenza_senza_versione](/assets/axis-ant.png){:.small}{:onclick="zoomImage(this)"}
La licenza è stata specificata senza il numero di versione.  
Per molte licenze, nel caso in esempio l'Apache, esistono più versioni, che introducono ulteriori clausole più restrittive o più liberali.  
Ciò rende necessario specificare la versione.

La soluzione consiste nell'entrare in modifica del componente rilevato e **selezionare la licenza di una data versione**.

A volte il numero di versione in realtà è contenuto nella descrizione della licenza rilevata ma non è stato identificato dallo *stemming*.  
In caso non si riesca a determinare il numero di versione della licenza, si sceglie quella più recente. 


### Caso 2: Licenza scritta in modo poco standard
	![licenza_scritta_in_modo_non_standard](/assets/c3p0.png){:.small}{:onclick="zoomImage(this)"}

Non esiste una codifica standard delle licenze, l'autore del componente scrive il nome della licenza liberamente; lo *stemming* spesso non riesce a riconoscere dal testo una licenza che per un essere umano risulta intuibile.

Nell'esempio per il componente "c3p0" la licenza è stata specificata solo in sigla (LGPL) e quindi non è stata riconosciuta.  
Per il successivo componente "javassist" la descrizione completa (GNU Lesser General Public License) è stata invece riconosciuta.

La soluzione è semplice:  
Si entra in modifica del componente rilevato e si seleziona la licenza corrispondente.


### Caso 3: Licenza open source non presente nel database
![licenza_open_source_non_presente_nel_database](/assets/re2j.png){:.small}{:onclick="zoomImage(this)"}
La licenza è specificata correttamente ma non è presente nell'archivio licenze di Alice.

Accade ormai di rado. In Alice sono memorizzate oltre 100 licenze open source.  
Nel caso succeda la licenza deve essere aggiunta all'archivio.  
Tale operazione però può essere fatta solo da un utente di tipo amministratore.  
E' necessario chiedere assistenza.

### Caso 4: Più licenze
![piu_licenze](/assets/javassist.png){:.small}{:onclick="zoomImage(this)"}
Per certi componenti sono dichiarate più licenze.  
L'autore lascia cioè liberi di scegliere quale licenza utilizzare.

Si veda questo esempio:
<pre>
    &lt;dependency&gt;
      &lt;groupId&gt;org.javassist&lt;/groupId&gt;
      &lt;artifactId&gt;javassist&lt;/artifactId&gt;
      &lt;version&gt;3.18.1-GA&lt;/version&gt;
      &lt;licenses&gt;
        &lt;license&gt;
          &lt;name&gt;MPL 1.1&lt;/name&gt;
          &lt;url&gt;http://www.mozilla.org/MPL/MPL-1.1.html&lt;/url&gt;
        &lt;/license&gt;
        &lt;license&gt;
          &lt;name&gt;LGPL 2.1&lt;/name&gt;
          &lt;url&gt;http://www.gnu.org/licenses/lgpl-2.1.html&lt;/url&gt;
        &lt;/license&gt;
        &lt;license&gt;
          &lt;name&gt;Apache License 2.0&lt;/name&gt;
          &lt;url&gt;http://www.apache.org/licenses/&lt;/url&gt;
        &lt;/license&gt;
      &lt;/licenses&gt;
    &lt;/dependency&gt; 
</pre>

In questo caso il componente: "*javassist*" risulta rilevato 3 volte: una per ogni licenza.

La cosa migliore da fare è **cancellare** le righe relative alle licenze che non interessano, oppure modificare le righe in modo da **assegnare sempre la stessa licenza**.

Conviene tenere la licenza meno "protettiva". (Per il concetto di protettività delle licenza si veda la pagina relativa alle [Licenze](licenze)).


### Caso 5: Licenza doppia  
![licenza_doppia](/assets/javax_mail.png){:.small}{:onclick="zoomImage(this)"}
Simile al precedente, ma in questo caso la dichiarazione nel file xml è simile a questo esempio:
<pre>
    &lt;dependency&gt;
      &lt;groupId&gt;com.sun.mail&lt;/groupId&gt;
      &lt;artifactId&gt;javax.mail&lt;/artifactId&gt;
      &lt;version&gt;1.5.2&lt;/version&gt;
      &lt;licenses&gt;
        &lt;license&gt;
          &lt;name&gt;CDDL/GPLv2+CE&lt;/name&gt;
          &lt;url&gt;https://glassfish.java.net/public/CDDL+GPL_1_1.html&lt;/url&gt;
          &lt;distribution&gt;repo&lt;/distribution&gt;
          &lt;comments&gt;CDDL or GPL version 2 plus the Classpath Exception&lt;/comments&gt;
        &lt;/license&gt;
      &lt;/licenses&gt;
    &lt;/dependency&gt;
</pre>

Nel tag del nome della licenza ne sono citate 2: CDDL e GPL 2+CE.  
In questo caso conviene semplicemente selezionare la meno protettiva.


### Caso 6: Nessuna licenza
![nessuna_licenza](/assets/jstl.png){:.small}{:onclick="zoomImage(this)"}
Nel file xml, al posto della licenza del componente è presente il commento:  
`<!--No license information available. -->`  
che viene riportato nella colonna *Licenza rilevata*

E' il caso peggiore: durante la compilazione non è stato trovato alcun dato riguardante la licenza del componente.  
L'unica soluzione è ricercare su Internet il prodotto per capire con quale licenza viene rilasciato.  

Se il prodotto ha una licenza open source, il caso diventa riconducibile ai casi precedenti, altrimenti possono presentarsi due sottocasi:


#### Caso 6.1: Licenza proprietaria specifica
I prodotti proprietari hanno spesso una propria licenza.  
Questa normalmente non è presente nell'archivio licenze ma, a differenza del caso 3 (licenza open source non trovata), **non va aggiunta**.  
Le licenze proprietarie sono troppe da gestire.

Se si capisce che il componente è di tipo proprietario, conviene selezionare la **Generica licenza proprietaria (copyright)**.

Se si è **sicuri** che il prodotto è stato **regolarmente acquistato da ARIA**, occorre **spuntare** la casella **Acquistato**.


#### Caso 6.2: Componente scritto da o per conto di ARIA
Quando **si sa** che il componente è stato scritto all'interno di ARIA o da un fornitore espressamente per ARIA, si assegna la licenza *Ariaspa*.  
Inoltre occorre **spuntare** la casella **Proprio**, per segnalare che il componente è di proprietà di ARIA.


### Passo successivo
Una volta assegnata la licenza corretta a tutti i componenti in errore, è necessario procedere all'[Acquisizione](acquisizione) dei componenti rilevati.
