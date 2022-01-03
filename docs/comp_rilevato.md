---
layout: default
title: Componente Rilevato
--- 

Rappresenta una *dependency* contenuta nel file *licenses.xml* che ha dato origine al [Rilevamento](rilevamento).  

Quando viene acquisito, dà origine ad un [Componente](componente).


## Modificabilità

![componente rilevato modificabile]({{site.baseurl}}/assets/comp_rilevato_modif.png){:.small}{:onclick="zoomImage(this)"}

Un componente rilevato è modicabile solo se non è presente nell'archivio componenti.

Il fatto che sia modificabile consente di specificare qual è la sua **licenza** ed, eventualmente, se è un componente [**proprio** o **acquistato**](componente/#flag).

Le caratteristiche specificate in questa videata saranno memorizzate in archivio quando il rilevamento sarà [acquisito](acquisizione). 


## Gìà acquisito

![componente rilevato acquisito]({{site.baseurl}}/assets/comp_rilevato_no_mod.png){:.small}{:onclick="zoomImage(this)"}

Anche se il [Rilevamento](rilevamento) di cui fa parte, non è ancora stato acquisito, un componente rilevato può essere **non modificabile** se esiste già nell'archivio componenti, un [Componente](componente) con lo stesso nome e numero di versione.

In tal caso la **licenza** assegnata è quella che risulta **già memorizzata** in archivio, **anche se diversa** da quella letta in fase di [Rilevazione](rilevazione).  
**Ciò evita**:
- **incongruenze** tra le licenze assegnate
- di **dover specificare nuovamente la licenza** nel caso in cui, nel rilevamento, Alice non sia riuscta a riconoscere le licenza da assegnare, o tale informazione manchi del tutto.

