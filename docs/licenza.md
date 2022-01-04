---
layout: default
title: Licenza
---

In Alice sono censite **oltre 140 licenze**, la gran parte **open source**.  

Quando Alice **non "trova" una licenza** open source, il più delle volte è perchè **non riesce a riconoscerla**, in quanto nominata dalla dependency in modo poco standard, o perchè non riesce ad identificarne la versione.  
Le licenze open source più utilizzate hanno spesso più versioni, che comportano regole diverse di compatibilità con le altre e con l'uso del prodotto che deve essere rilasciato.

E' quindi **poco frequente** imbattersi in licenze open source non comprese nel suo database, ma può succedere.  
In tal caso chiedete assistenza per l'inserimento della licenza in questione, in modo da poter impostare i giusti parametri per una corretta elaborazione nel controllo di compatibilità.

**Più facilmente** ci si può imbattere in una licenza **proprietaria** specifica di qualche produttore.  
In Alice ne sono **censite poche**, in quanto sono sostanzialente riconducibili ad una sola condizione: la licenza deve essere acquistata.

Quando ci si imbatte in una licenza di questo tipo, non la si inserisce nel database di Alice, ma si assegna al componente la licenza:

copyright		| Generica licenza proprietaria

Attenzione però a non confondersi con licenze di noti produttori di software che in realtà sono open source o comunque permissive, come ad esempio:

Oracle BCL	| Oracle Binary Code License Agreement for the Java SE Platform Products and JavaFX
Oracle FUTC	| Oracle Free Use Terms and Conditions
SCSL				|	Oracle / Sun Community Source License (SCSL)
mspl				|	Microsoft Public License

<span class="danger">Se avete dubbi chiedete assistenza!</span>  
<span class="danger">Non assegnate licenze a caso!</span>  
<span class="danger">Sarete ritenuti responsabili per assegnazioni sbagliate!</span>

## Pagina di inserimento/modifica

![modifica licenza]({{site.baseurl}}/assets/licenza.png){:.small}{:onclick="zoomImage(this)"}


## Dati obbligatori
- Nome
- Versione
- Descrizione
- Tipo Licenza  
	Grado di [permissività](https://en.wikipedia.org/wiki/Permissive_software_license){:target="_blank"} della licenza riguardo alla [compatibilità](https://en.wikipedia.org/wiki/Permissive_software_license#License_compatibility){:target="_blank"}.
- Categoria

## Dati facoltativi
- OSI  
	Licenza [approvata ufficialmente](https://tldrlegal.com/licenses/tags/OSI-Approved){:target="_blank"} dalla [Open Source Initiative](https://opensource.org/){:target="_blank"}
- Licenza equivalente  
	Licenza cui la presente è assimilata nell'[analisi di compatibilità](analisi_compatibilita).
- Testo  
	Testo ufficiale completo della licenza.
- Note
