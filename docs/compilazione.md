---
layout: default
title: Compilazione
---

La compilazione del prodotto fa partire il processo di controllo delle licenze su Alice.

Tale processo, come prima cosa, interroga Alice per sapere se esistono prodotto e versione specificati nel pom.
- Se il **prodotto non esiste**  
Alice segnala **errore** e il processo si interrompe.

- Se il **prodotto esiste**, ma **non esiste la release**

	1. La **release viene creata** e le viene **assegnata la licenza** specificata nel pom.
	2. La compilazione **genera** uno o più **file xml**, ognuno dei quali contiene un **elenco di componenti** necessari al funzionamento del prodotto (le *dependencies*) con le loro **relative licenze**.
	3. I **file xml** generati sono **inviati ad Alice**
	4. Alice, per **ognuno** di essi, **crea un rilevamento** che viene **collegato alla release creata**.  
	   Ogni rilevamento contiene un **elenco di componenti rilevati** e delle loro licenze.
	5. Il processo continua con la [Rilevazione](rilevazione) dei componenti.

- Se il **prodotto esiste**, ed **esiste la release**  
Per questioni di efficienza, la compilazione **non genera i file xml**, e **non crea alcun rilevamento**.  
Alice **non esegue alcuna analisi** dei componenti ma, semplicemente, **restituisce l'esito del controllo precedente** eseguito sul prodotto.

