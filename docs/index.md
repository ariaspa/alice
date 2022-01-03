---
layout: default
title: Alice
---

Alice è un'applicazione che **esamina le licenze** delle **dependencies** (che Alice chiama [Componenti]({{site.baseurl}}/componente)) del vostro **progetto** software (che Alice chiama [Prodotto]({{site.baseurl}}/prodotto)), per **controllare la compatibilità** tra loro e con la licenza con cui rilasciate il vostro progetto.

Ogni componente software infatti, open source o meno, gratuito o meno, è rilasciato con una licenza che ne **prevede l'utilizzo solo a certe condizioni**.  
Le clausole di una licenza possono essere incompatibili con quelle di un'altra, impedendo l'uso contemporaneo di certi componenti oppure di un componente all'interno del prodotto finale.

Per ognuna delle licenze, quindi, viene controllata la compatibilità con:
- le **licenze** di tutti gli **altri componenti**
- la **licenza** con cui si rilascia **prodotto**
- il **tipo di uso** cui è destinato il **prodotto**.

Alice, per porter eseguire il controllo di compatibilità, deve innanzitutto conoscere il **nome del prodotto** che si sta rilasciando, il **tipo d'uso** cui è destinato, e **la licenza** con cui si intende rilasciarlo.

Deve poi ricevere in input un **file xml** contenente **l'elenco dei componenti** utilizzati dal prodotto **con le loro relative licenze**.

Il file **xml** è **generato dalla procedura di compilazione**, tramite specifiche istruzioni da inserire nel *"pom"*.  
La procedura di compilazione lo invia poi automaticamente ad Alice.  

Alice restituisce **l'esito del controllo** indicando le eventuali incompatibilità dei componenti, **oppure segnala errore** quando non riesce ad eseguire il controllo **per mancanza di dati**.

Perchè Alice possa esaminare i componenti di un prodotto è quindi **necessaria** una minima [Preparazione]({{site.baseurl}}/preparazione).
