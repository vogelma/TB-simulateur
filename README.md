# TB-simulateur

## JSON

Un JSON statique sert de base de données. Il contient le nom de l'image, son emplacement et si le signal est actif ou pas.

# API

## inventaire

GET: Connaître tous les signaux disponible. => fichier JSON

Requête:

```sh
curl --location 'http://localhost:5173/inventaire'
```

Réponse:

```json
[
    {
        "alt": "cross",
        "file": "01.png",
        "show": true,
        "index": 0
    },
    {
        "alt": "arrow_white",
        "file": "02.png",
        "show": false,
        "index": 1
    },
    {
        "alt": "arrow_orange",
        "file": "03.png",
        "show": false,
        "index": 2
    },
    {
        "alt": "arrow_green",
        "file": "04.png",
        "show": false,
        "index": 3
    }
]

```



POST: ajout d'un signal. => nouvelle ligne au fichier JSON

Requête:

```sh
curl --location 'http://localhost:5173/inventaire' \
--header 'Content-Type: application/json' \
--data '{"alt": "testing",
"file": "02.png",
"show": false,
    "index": 4}'
```


Réponse:

```json
{
    "status": 201
}
```


### signal

GET: Connaître l'affichage actuel => signal affiché

Requête:

```sh
curl --location 'http://localhost:5173/signal'
```

Réponse:

```json
{
"alt": "cross",
"file": "01.png",
"show": true,
"index": 0
}
```

    
POST: change l'affichage actuel => changement signal affiché

Requête:
    
```sh
curl --location 'http://localhost:5173/signal' \
--header 'Content-Type: application/json' \
--data '{"index": 0}'
```

Réponse:

```json
{
    "status": 201
}
```

## SNMP

    extend nomfichier /etc/snmp/scripts/nomfichier.sh
    snmpget -v2c -c public localhost 'NET-SNMP-EXTEND-MIB::nsExtendOutLine."nomfichier".1'
    snmptranslate -On 'NET-SNMP-EXTEND-MIB::nsExtendOutLine."nomfichier".1'
    snmpwalk -v2c localhost -c public .x.x.x...
