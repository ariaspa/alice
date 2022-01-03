---
layout: default
title: Rilevazione dei componenti 
---

La compilazione del prodotto genera uno o più file xml e li inoltra ad Alice che, per ogni file ricevuto crea un [Rilevamento]({{site.baseurl}}/rilevamento) e lo associa alla [Versione](versione) del prodotto che è stata appena creata.  

Per ogni tag *artifactId* contenuto nel file xml, crea un [componente rilevato]({{site.baseurl}}/componente), e lo associa al rilevamento.  

Alice quindi **cerca di identificare automaticamente la licenza** giusta per ogni componente rilevato.

**Se riesce**, passa direttamente alla fase successiva di [Acquisizione]({{site.baseurl}}/acquisizione).  
**Altrimenti** arresta il processo e segnala: "*errori sui componenti del rilevamento*".

Quando questo succede è necessario **assegnare manualmente** la licenza per i componenti che sono in errore.


**Per comprendere** la casistica degli **errori**, illustrata alla voce [Assegnazione]({{site.baseurl}}/assegnazione), e **sapere quale licenza** assegnare manualmente ai componenti, è indispensabile **capire** in che modo Alice cerca di identificare automaticamente la licenza del componente. 

## Identificazione automatica della licenza
Per identificare automaticamente la licenza da assegnare Alice si basa su:
- il **file xml** generato dalla compilazione
- un proprio **archivio componenti** software dei quali è nota la licenza da assegnare
- un rudimentale **algoritmo** di *stemming* sul nome della licenza contenuto nel file xml
- un archivio di **licenze conosciute**

### Il file xml
Un esempio rappresentativo della struttura dei file xml inviati dalla compilazione ad Alice, è il seguente:
<pre>
&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;licenseSummary&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;axis&lt;/groupId&gt;
      &lt;artifactId&gt;axis&lt;/artifactId&gt;
      &lt;version&gt;1.4&lt;/version&gt;
      &lt;licenses&gt;
        &lt;license&gt;
          &lt;name&gt;The Apache Software License, Version 2.0&lt;/name&gt;
          &lt;url&gt;http://www.apache.org/licenses/LICENSE-2.0.txt&lt;/url&gt;
          &lt;distribution&gt;repo&lt;/distribution&gt;
        &lt;/license&gt;
      &lt;/licenses&gt;
    &lt;/dependency&gt;
    . . . 
    . . .
  &lt;/dependencies&gt;
&lt;/licenseSummary&gt;
</pre>

Nell'esempio riportato è dichiarato il componente **axis** versione **1.4** con licenza **The Apache Software License, Version 2.0**.

### L'algoritmo
Per **prima** cosa Alice **cerca nel suo archivio** il componente *axis* con versione *1.4*.  

**Se lo trova** assegna la licenza memorizzata in archivio e **ignora la licenza dichiarata nel file xml**.  
Il componente rilevato è considerato **OK**.

**Se** invece il componente **non è in archivio** (o è presente ma con una versione diversa, ad es. *1.3*), Alice **analizza** il contenuto del **nodo &lt;licenses&gt;**.

Nel caso in esempio analizza la stringa "*The Apache Software License, Version 2.0*" e, attraverso lo **stemming**, ottiene il **nome della licenza**: "*Apache Software*" e il numero della **versione**: "*2.0*".

**Cerca** quindi nell' **archivio licenze** la licenza con quel nome e quella versione.

**Se la trova** il componente è considerato **OK**.

**Altrimenti** il componente è marcato con **KO** e Alice emetterà l'errore "**Licenza non trovata per uno o piu' componenti**".  
In tal caso sarà necessario [assegnare manualmente la licenza]({{site.baseurl}}/assegnazione) ai componenti in errore.
