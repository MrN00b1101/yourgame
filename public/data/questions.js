let questions = 
    [
        {
            "id": 0,
            "kerdes": "A végére értél, gratulálok",
            "tartalom":null,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": null,
            "next2": null,
            "next3": null
        },
        {
            "id": 1,
            "kerdes": "Hol tart a játék?",
            "tartalom":null,
            "valasz1": "Van egy alap gondolat",
            "valasz2": "Sehol",
            "valasz3": null,
            "next1": 3,
            "next2": 2,
            "next3": null
        },
        {
            "id": 2,
            "kerdes": "Ötletelés",
            "tartalom":otleteles,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 3,
            "next2": null,
            "next3": null
        },
        {
            "id": 3,
            "kerdes": "Kinek szól?",
            "tartalom":null,
            "valasz1": "Gyerek",
            "valasz2": "Felnőtt",
            "valasz3": null,
            "next1": 33,
            "next2": 5,
            "next3": null
        },
        {
            "id": 4,
            "kerdes": "Mi a játék célja?",
            "tartalom":null,
            "valasz1": "Kompetitív",
            "valasz2": "Semi kooperatív",
            "valasz3": "Kooperatív",
            "next1": 34,
            "next2": 35,
            "next3": 36
        },
        {
            "id": 5,
            "kerdes": "Milyen típusú játékot szeretnél?",
            "tartalom":null,
            "valasz1": "Családi",
            "valasz2": "Parti",
            "valasz3": "Gamer",
            "next1": 37,
            "next2": 38,
            "next3": 6
        },
        {
            "id": 6,
            "kerdes": "Mi álljon a játék középpontjában?",
            "tartalom":null,
            "valasz1": "Történet",
            "valasz2": "Mechanika",
            "valasz3": "Történet és mechanika",
            "next1": 7,
            "next2": 8,
            "next3": 9
        },
        {
            "id": 7,
            "kerdes": "Ameri",
            "tartalom":ameri,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 10,
            "next2": null,
            "next3": null
        },
        {
            "id": 8,
            "kerdes": "Euro",
            "tartalom":euro,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 10,
            "next2": null,
            "next3": null
        },
        {
            "id": 9,
            "kerdes": "Hibrid",
            "tartalom":hibrid,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 10,
            "next2": null,
            "next3": null
        },
        {
            "id": 10,
            "kerdes": "Hozzá akarod társítani a játékot valamilyen témához, vagy világhoz?",
            "tartalom":null,
            "valasz1": "Igen",
            "valasz2": "Nem",
            "valasz3": null,
            "next1": 11,
            "next2": 12,
            "next3": null
        },
        {
            "id": 11,
            "kerdes": "Egy világ átadása",
            "tartalom":vilagAtadasa,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 4,
            "next2": null,
            "next3": null
        },
        {
            "id": 12,
            "kerdes": "Milyen a játék hangulata?",
            "tartalom":null,
            "valasz1": "Vidám",
            "valasz2": "Komor",
            "valasz3": "Nem fontos a játék szempontjából",
            "next1": 24,
            "next2": 24,
            "next3": 24
        },
        {
            "id": 13,
            "kerdes": "Van a játékban térkép?",
            "tartalom":null,
            "valasz1": "Igen",
            "valasz2": "Nem",
            "valasz3": null,
            "next1": 39,
            "next2": 15,
            "next3": null
        },
        {
            "id": 14,
            "kerdes": "Hiba a mátrixban",
            "tartalom":null,
            "valasz1": "Van",
            "valasz2": "Nincs",
            "valasz3": null,
            "next1": 39,
            "next2": 15,
            "next3": null
        },
        {
            "id": 15,
            "kerdes": "Van a játékban bábumozgatás?",
            "tartalom":null,
            "valasz1": "Igen",
            "valasz2": "Nem",
            "valasz3": null,
            "next1": 16,
            "next2": 17,
            "next3": null
        },
        {
            "id": 16,
            "kerdes": "Mozgás",
            "tartalom":mozgas,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 17,
            "next2": null,
            "next3": null
        },
        {
            "id": 17,
            "kerdes": "Kialakulhatnak csaták a játékodban?",
            "tartalom":null,
            "valasz1": "Igen",
            "valasz2": "Nem",
            "valasz3": null,
            "next1": 18,
            "next2": 19,
            "next3": null
        },
        {
            "id": 18,
            "kerdes": "Csata",
            "tartalom":csata,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 19,
            "next2": null,
            "next3": null
        },
        {
            "id": 19,
            "kerdes": "Van benne licitálás?",
            "tartalom":null,
            "valasz1": "Igen",
            "valasz2": "Nem",
            "valasz3": null,
            "next1": 20,
            "next2": 21,
            "next3": null
        },
        {
            "id": 20,
            "kerdes": "Licitálás",
            "tartalom":licit,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 21,
            "next2": null,
            "next3": null
        },
        {
            "id": 21,
            "kerdes": "Javasolt mechanizmusok gyerekjátékokhoz",
            "tartalom":gyerekMechanizmus,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 22,
            "next2": null,
            "next3": null
        },
        {
            "id": 22,
            "kerdes": "Kíváncsi vagy más játékmechanizmosokra is?",
            "tartalom":null,
            "valasz1": "Igen",
            "valasz2": "Nem",
            "valasz3": null,
            "next1": 23,
            "next2": 27,
            "next3": null
        },
        {
            "id": 23,
            "kerdes": "Összes mechanizmus",
            "tartalom":osszesMechanizmus,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 27,
            "next2": null,
            "next3": null
        },
        {
            "id": 24,
            "kerdes": "Fejlesztés menete",
            "tartalom":fejlesztesMenete,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 25,
            "next2": null,
            "next3": null
        },
        {
            "id": 25,
            "kerdes": "Forduló felépítése",
            "tartalom":forduloFelepites,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 26,
            "next2": null,
            "next3": null
        },
        {
            "id": 26,
            "kerdes": "A játék vége",
            "tartalom":jatekVege,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 13,
            "next2": null,
            "next3": null
        },
        {
            "id": 27,
            "kerdes": "Játékelemek",
            "tartalom":jatekElemek,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 28,
            "next2": null,
            "next3": null
        },
        {
            "id": 28,
            "kerdes": "A játékos előrehaladását segítő tényezők",
            "tartalom":eloreHalad,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 29,
            "next2": null,
            "next3": null
        },
        {
            "id": 29,
            "kerdes": "Színek használata",
            "tartalom":szinek,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 30,
            "next2": null,
            "next3": null
        },
        {
            "id": 30,
            "kerdes": "Játékos típusok",
            "tartalom":gamerek,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 31,
            "next2": null,
            "next3": null
        },
        {
            "id": 31,
            "kerdes": "Gyakori hibák",
            "tartalom":hibak,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 32,
            "next2": null,
            "next3": null
        },
        {
            "id": 32,
            "kerdes": "Játékszabály",
            "tartalom":rules,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 0,
            "next2": null,
            "next3": null
        },
        {
            "id": 33,
            "kerdes": "Gyerekeknek szóló játékok",
            "tartalom":gyerekeknekSzoloJatekok,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 4,
            "next2": null,
            "next3": null
        },
        {
            "id": 34,
            "kerdes": "Kompetitiv játékok",
            "tartalom":kompetitivJatekok,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 24,
            "next2": null,
            "next3": null
        },
        {
            "id": 35,
            "kerdes": "Semi kooperatív",
            "tartalom":semiKooperativJatekok,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 24,
            "next2": null,
            "next3": null
        },
        {
            "id": 36,
            "kerdes": "Kooperatív",
            "tartalom":kooperativJatekok,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 24,
            "next2": null,
            "next3": null
        },
        {
            "id": 37,
            "kerdes": "Családi játékok",
            "tartalom":csaladiJatekok,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 24,
            "next2": null,
            "next3": null
        },
        {
            "id": 38,
            "kerdes": "Parti játékok",
            "tartalom":partiJatekok,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 24,
            "next2": null,
            "next3": null
        },{
            "id": 39,
            "kerdes": "Térkép",
            "tartalom":terkep,
            "valasz1": "Tovább",
            "valasz2": null,
            "valasz3": null,
            "next1": 15,
            "next2": null,
            "next3": null
        }
    ]
