---
layout: default
title: Prodotto 
---

Corrisponde ad un applicativo software, o ad una parte di esso, per cui esiste uno specifico *pom* di compilazione.

Ad esempio:

| Nome          | Titolo                                                            |
|---------------|-------------------------------------------------------------------|
| AFE.AFE1      | AFE.AFE1_Modulo EDMA Contabile                                    |
| AFE.BENE      | AFE.BENE_gestione passaggio SAP - parte Beneficiari               |
| AFE.BENELIB   | AFE.BENELIB                                                       |
| AFE.CONT      | AFE.CONT_gestione passaggio SAP - Documenti Contabili             |
| AFE.CONTLIB   | AFE.CONTLIB                                                       |
| AFE.INTSAP    | AFE.INTSAP_gestione passaggio SAP - librerie integrazione con SAP |
| AFE.INTSAPLIB | Libreria di interscambio dati tra SAP e Sistemi Terzi             |
| AFE.RESTFUL   | AFE.RESTFUL_Gestione chiamate Restful da/verso AFE                |


## Pagina di inserimento/modifica

![modifica prodotto]({{site.baseurl}}/assets/prodotto.png){:.small}{:onclick="zoomImage(this)"}

## Dati obbligatori
**Nome**  
Deve corrispondere al codice di Elettra (maiuscole e minuscole comprese).  
Lunghezza massima 32 caratteri.

**Titolo**  
Descrizione breve (spesso la decodifica dell'acronimo del nome).  
Lunghezza massima 100 caratteri.

**Uso**
Tipo d'uso del prodotto.  
Possibili valori:
* Servizio Utenti Esterni  
L'applicazione è esposta pubblicamente su Internet, con o senza richiesta di credenziali. 

* Servizio Utenti Interni  
All'applicazione si può accedere solo dalla intranet di ARIA.

* Distribuito (all'esterno)  
L'applicazione viene installata sul pc client dell'utente.

* Servizio Utenti Esterni con distribuzione Output
* Link Statico
* Link Dinamico
* Incorporato


## Dati informativi
Dati relativi all'ultima [Versione](versione) del prodotto:
- Numero di versione
- Licenza di rilascio
- Data dell'ultimo controllo eseguito
- Esito dell'ultimo controllo


## Dati facoltativi
**Gruppo**  
E' uno dei parametri di selezone nell'*Elenco Prodotti*.  
Utilizzandolo risulta poi facile visualizzare la lista di tutti e solo i prodotti della propria area.

**Descrizione**  
Descrizione estesa del Prodotto, qualora il Titolo non sia sufficiente.

**Note**  
Avvisi e annotazioni di qualunque tipo.
