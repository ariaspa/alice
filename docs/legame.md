---
layout: default
title: Legame
--- 

Cliccando su *Verifica* => *Legami* è possibile:
- vedere **quali prodotti contengono** un dato [Componente](componente)
- visualizzare l'**elenco "completo" dei componenti** di un [Prodotto](prodotto) ad una certa [Versione](versione). 

## Ricerca Prodotti/Componenti
![elenco]({{site.baseurl}}/assets/legame_elenco.png){:.small}{:onclick="zoomImage(this)"}

Nella pagina iniziale, a seconda di cosa si voglia ottenere, si sceglie la ricerca di un Prodotto o di un Componente.

Una volta trovato si clicca sul pulsante di selezione nella riga corrispondente e si entra nella pagina di dettaglio relativa. 

## Componente
![dettaglio componente]({{site.baseurl}}/assets/legame_componente.png){:.small}{:onclick="zoomImage(this)"}
Nella pagina di *dettaglio componente* sono elencati tutti i prodotti in cui il componente scelto è presente.

La visualizzazione è ad **un solo livello**, non sono cioè elencati i prodotti contenitori di livello superiore.  
*Non* si tratta di una **implosione** nè *scalare*, nè *riepilogata*, nè *ai prodotti finiti*.  
(per dubbi sul concetto si consulti [questa pagina](https://tecnicodiproduzione.wordpress.com/2016/07/26/interrogazione-delle-distinte-base/){:target="_blank"})

## Prodotto
![dettaglio prodotto]({{site.baseurl}}/assets/legame_prodotto.png){:.small}{:onclick="zoomImage(this)"}

La pagina di *dettaglio prodotto* mostra l'elenco **completo** dei componenti di quel *Prodotto* a quella *Versione*.  
E' cioè la **somma** dei componenti inclusi in **tutti i rilevamenti** di quella versione del prodotto.

Anche i questo caso **non** si tratta di una **esplosione**, scalare o di altro tipo.  
(si veda il [riferimento precedente](https://tecnicodiproduzione.wordpress.com/2016/07/26/interrogazione-delle-distinte-base/){:target="_blank"})

## Modifica legami di un Prodotto
![mofifica]({{site.baseurl}}/assets/legame_modifica.png){:.small}{:onclick="zoomImage(this)"}

E' anche possibile, cliccando sul pulsante *Modifica* passare ad una pagina che consente di:
- eliminare componenti da un prodotto (cliccando sil pulsante con il "**-**")
- aggiungere un componente (cliccando sul "**+**") dopo averlo ricercato nell'elenco nella parte inferiore.

La *cancellazione* o l'*aggiunta* modifica solo i *legami* tra versione del prodotto e componente.  
Non cancella o toglie alcun componente dall'archivio componenti.
