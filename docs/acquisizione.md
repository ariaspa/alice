---
layout: default
title: Acquisizione componenti rilevati 
---

Se non ci sono problemi, Alice acquisisce automaticamente i componenti rilevati.  
Diventa **necessario** svolgere esplicitamente questo passo **solo se si sono dovute assegnare licenze manualmente**.  

Una volta che tutti i componenti rilevati hanno una licenza assegnata, **Alice deve acquisire il rilevamento**, per memorizzare nel suo database, per ognuno di essi:
* nome del componente
* relase del componente
*	licenza associata.

Da quel momento, ogni volta che lo stesso "*componente + release*" verrà rilevato successivamente, Alice non cercherà più di associargli una licenza, ma **utilizzerà l'associazione memorizzata** nel database.  
Questo evita di dover di nuovo associare manualmente la licenza a quel componente nel caso in cui venga incontrato in rilevamenti successivi.

Se però è stato **emesso un errore** di "*Licenza non trovata per uno o piu' componenti*", cosa che ha reso necessaria l'[Assegnazione]({{site.baseurl}}/assegnazione) manuale delle licenze, Alice ha **interrotto il processo** di acquisizione automatica del rilevamento.  
Per questo motivo, una volta risolti tutti i *KO* segnalati sui componenti, **è necessario compiere questo passo manualmente**.

La funzione di acquisizione si richiama dalla videata di *Elenco rilevamenti*

![elenco rilevamenti]({{site.baseurl}}/assets/rilevamenti.png){:.small}{:onclick="zoomImage(this)"}

premendo il tasto acquisisci: ![acquisisci]({{site.baseurl}}/assets/pulsante_acquisisci.png) e poi confermando con "*Salva*".

Il segnalino in giallo sulla rilga segnala lo stato di incompletezza del rilevamento.


Una volta **acquisiti tutti i rilevamenti**, è possibile passare al [Controllo]({{site.baseurl}}/controllo) di compatibilità delle licenze.
