---
layout: default
title: Rilevamento
---

E una "testata" che **rappresenta un file licenses.xml caricato**.  
Ad esso sono legati una serie di [Componenti Rilevati](comp_rilevato) che sono le dependecies contenute nel file xml.

Viene **creato automaticamente** dalla compilazione quando questa invia i file *licenses.xml* ad Alice.

Una volta generato, può essere modificato il *nome* per poterlo identificare meglio nel caso di più rilevamenti legati alla stessa [Versione](versione) di un [Prodotto](prodotto).

![rilevamento]({{site.baseurl}}/assets/rilevamento.png){:.small}{:onclick="zoomImage(this)"}


## Caricamento manuale
E' però possibile anche **creare un rilevamento** caricando manualmente un **file xml**, per effettuare un test o controllare che un certo file *licenses.xml* sia correttamente formattato per Alice.  

![caricamento]({{site.baseurl}}/assets/carica_xml.png){:.small}{:onclick="zoomImage(this)"}

In tal caso è **obbligatorio** specificare un **nome**.
