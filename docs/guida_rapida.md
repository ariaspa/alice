---
layout: default
title: Guida Rapida
---

## Cosa fa Alice
**Controlla le licenze** delle dependency del software che state compilando.  
(eventuali segnalazioni di errore riguardanti sicurezza, qualità del software o altro, non provengono da Alice)

## Censire il prodotto
Per poter controllare le licenze, **il vostro software deve essere censito** come [Prodotto](prodotto) in Alice.

Nel caso non lo sia:
1. cliccate sul link [alice.lispadev.local/alice/](http://alice.lispadev.local/alice/)  
(se state lavorando da remoto dovete collegarvi in VPN)
2. nella barra di navigazione in alto, cliccate su *Verifica => Prodotti*
3. in basso all'*Elenco Prodotti*, cliccate sul pulsante *Inserisci*.  

I dati obbligatori da fornire sono:
* il **Nome**, che deve essere identico (corrispondenza case-sensitive) a quello registrato in Elettra  
* il **Titolo**, serve a identificare meglio il prodotto dato che il nome è spesso un acronimo  
* il **Tipo d'Uso**, che può essere uno tra:
	- *Servizio Utenti Esterni* = la classica applicazione Web accessibile su Internet
	- *Servizio Utenti Interni* = applicazione Web accessibile però **solo** su **intranet**
	- *Distribuito* (all'esterno) = software che deve essere **installato** su client o su server non di ARIA.

## Compilazione
Nel *pom* di compilazione devono essere **inserite le opportune istruzioni** per la generazione dei file *licenses.xml*  
Ogni compilazione ne genera almeno uno (ma possono essere molti a seconda dell'alberatura delle dependency).  
Un file licenses.xml contiene un elenco di dependency con le relative licenze.

**La compilazione invia i file *licenses.xml* ad Alice**, che memorizza ognuno di essi in una entità chiamata [Rilevamento](rilevamento).  
Ogni *Rilevamento* è legato al numero di [Versione](versione) (che va specificato nel *pom*), relativo al *Prodotto* che avete censito.

Ricevuti ed elaborati tutti i file *licenses*, **Alice esegue il controllo di compatibilità delle licenze** delle dependency del prodotto e restituisce l'esito del controllo.

## Esito del controllo licenze
Se non ricevete segnalazioni di errori sulle licenze, significa che l'esito del controllo "**OK**", quindi **non occorre fare altro.**

Altrimenti cercate il vostro software tra i prodotti.  
L'esito potrà essere: 
1. "**NC**" = Non completato  
Alice non può completare il controllo a causa di **dati incompleti sulle dependency**.  
Significa che ci sono problemi su almeno uno dei *rilevamenti* per la *versione* del *prodotto*.
2. "**KO**"  
Tutti i dati dei *rilevamenti* sono stati acquisiti correttamente ma il **controllo** ha riscontrato una **incompatibilità tra le licenze** delle dependency e la licenza di rilascio del vostro prodotto (che per default è la licenza "*ARIASPA*").  

## Errori nei rilevamenti
1. Ricercate i componenti per cui mancano dati:
* Se nella segnalazione di errore che avete ricevuto è presente un link, cliccateci sopra
* altrimenti cercate il vostro *Prodotto* su Alice e nelle *azioni* cliccate sul pulsante ![Versioni]({{site.baseurl}}/assets/pulsante_versioni.png){:class="icon-doc"} (tooltip "Versioni")

2. Nell'*Elenco Versioni*, nella riga con *Esito* ![NC]({{site.baseurl}}/assets/nc_giallo.png){:class="icon-doc"} ("Non Completo"), cliccate sull'azione ![Versioni]({{site.baseurl}}/assets/pulsante_lente.png){:class="icon-doc"} ("Rilevamenti").  
3. Nell'*Elenco Rilevamenti* cercate quelli con il simbolo ![Chiave inglese]({{site.baseurl}}/assets/chiave_gialla.png){:class="icon-doc"} ("richiesto intervento") e cliccate sull'azione ![Elenco componenti]({{site.baseurl}}/assets/pulsante_comp_rilevati.png){:class="icon-doc"} ("Componenti rilevati").  
4. Nell'*Elenco Componenti rilevati* cercate quelli contrassegnati con ![KO]({{site.baseurl}}/assets/ko_rosso.png){:class="icon-doc"}.  
Spesso Alice non riesce ad **identificare la licenza** (che vedete nella colonna "Licenza Rilevata") perchè scritta in modo non standard, oppure **la versione** della licenza.  
5. Cliccate su ![modifica]({{site.baseurl}}/assets/pulsante_modifica.png){:class="icon-doc"} ("modifica") (dovrete essere registrati) e cercate nella lista drop-down la *Licenza rilevata* della giusta *Versione* (se non è specificata, scegliete la  più recente), salvando la modifica.

<span class="danger">Se avete dubbi chiedete assistenza!</span>  
<span class="danger">Non assegnate licenze a caso!</span>  
<span class="danger">Sarete ritenuti responsabili per assegnazioni sbagliate!</span>

Una volta **eliminati tutti** i ![KO]({{site.baseurl}}/assets/ko_rosso.png){:class="icon-doc"} dall'*Elenco Componenti rilevati*...
1. Tornate nell'*Elenco Rilevamenti* e cliccate su ![Acquisisci]({{site.baseurl}}/assets/pulsante_acquisisci.png){:class="icon-doc"} ("Acquisisci")
2. Quando tutti i rilevamenti hanno il contrassegno ![Acquisito]({{site.baseurl}}/assets/rilevamento_verde.png){:class="icon-doc"}, tornate all'*Elenco Versioni*
3. Per la versione su cui avete lavorato, cliccate su ![Controllo]({{site.baseurl}}/assets/pulsante_controlla.png){:class="icon-doc"} ("Controllo")
4. Se l'esito del controllo è ![OK]({{site.baseurl}}/assets/ok_verde.png){:class="icon-doc"}, non occorre fare altro.

Potete **rilanciare** la procedura di **compilazione** del vostro software, per completare anche i passi successivi.

### No license information available
Se sulla riga di una dependency nell'*Elenco Componenti rilevati* compare questo messaggio, è necessario cercare sul repository di Maven o sul sito Internet di quel software, la licenza con cui è rilasciato.

### Nessun componente rilevato  
Se avete ricevuto questa segnalazione di errore o, nella videata dell'*Elenco rilevamenti* o in quella di *Elenco Componenti rilevati*, non sono presenti dati, significa che la compilazione non ha generato alcun file *licenses.xml*, o lo ha generato vuoto.

**Verificate** nel **pom** di compilazione le istruzioni per la generazione del file *licenses.xml*.  
Se però il vostro software non ha effettivamente alcuna dependency, Alice non può eseguire il controllo.


## Errori nel controllo
Se si riceve un **KO** dal controllo licenze, è necessario individuare quale componente genera l'incompatibilità.  
Non sempre è facile individuarlo. Un esempio di come procedere è contenuto nel paragrafo: [come leggere il risultato del controllo](controllo/#come-leggere-il-risultato-del-controllo), nel manuale utente.  


### Impossibile verificare compatibilità: mancanza regole
Chiedere assistenza all'amministratore per l'inserimento delle regole per la licenza


## Eliminare l'incompatibilità 
Una volta individuato il componente che genera il problema, ci sono sostanzialmente tre metodi per risolvere l'incompatibilità:
1. **Sostituire il componente** con uno equivalente la cui licenza sia meno restrittiva.  
2. **Se esiste una versione a pagamento, acquistare il componente**, evitando così una sostituzione troppo onerosa.  
3. **Rilasciare** il prodotto che si sta compilando **con una licenza opensource**, rilasciandone **anche i sorgenti**.  
Questo normalmente fa cadere le restrizioni che generano l'incompatibilità.  
Tale opzione può essere scelta <span class="danger">solo in accordo con ARIA</span>.



