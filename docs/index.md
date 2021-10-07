---
layout: default
title: Alice
---

Alice è un'applicazione che **esamina le licenze** dei componenti software utilizzati all'interno di un prodotto.

Per ognuna delle licenze viene controllata la compatibilità con:
- le **licenze** di tutti gli **altri componenti**
- la **licenza** con cui si rilascia **prodotto**
- il **tipo di uso** cui è destinato il **prodotto**.

Ogni componente software infatti, open source o meno, gratuito o meno, è rilasciato con una licenza che ne **prevede l'utilizzo solo a certe condizioni**.  
Le clausole di una licenza possono essere incompatibili con quelle di un'altra, impedendo l'uso contemporaneo di certi componenti oppure di un componente all'interno del prodotto finale.

Alice, per porter eseguire il controllo di compatibilità, deve innanzitutto conoscere il **nome del prodotto** che si sta rilasciando, il **tipo d'uso** cui è destinato, e **la licenza** con cui si intende rilasciarlo.

Deve poi ricevere in input un **file xml** contenente **l'elenco dei componenti** utilizzati dal prodotto **con le loro relative licenze**.

Il file **xml** deve essere **generato dalla procedura di compilazione**, tramite specifiche istruzioni da inserire nel *"pom"*.  
La procedura di compilazione lo invia poi automaticamente ad Alice.  

Alice restituisce **l'esito del controllo** indicando le eventuali incompatibilità dei componenti, **oppure segnala errore** quando non riesce ad eseguire il controllo **per mancanza di dati**.

Perchè Alice possa esaminare i componenti di un prodotto è quindi **necessaria** una minima [Preparazione]({{site.baseurl}}/preparazione).
