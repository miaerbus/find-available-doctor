# O projektu: Iskalnik po osebnih zdravnikih

Dostop do zdravstva se začne [z izbiro osebnega zdravnika](https://e-uprava.gov.si/podrocja/sociala-zdravje-smrt/zdravje/sociala-osebni-zdravnik.html), pa naj gre za splošnega zdravnika, ginekologa in zobozdravnika. 
Predvsem pri splošnih zdravnikih je v določenih predelih države veliko pomanjkanje, zato marsikdo ne pride do osebnega zdravnika in ima tako otežen pristop do zdravstvenih storitev.
Zavod za zdravstveno zavarovanje Slovenije (ZZZS) redno objavlja [seznam zdravnikov, ki so lahko osebni zdravniki](https://zavarovanec.zzzs.si/wps/portal/portali/azos/ioz/ioz_izvajalci). Pred leti je [Sebastian Pleško](https://plesko.si/) te podatke že objavil v bolj uporabni obliki in dobil pozitiven odziv, žal pa se stran potem ni več redno vzdrževala zaradi pogostih sprememb na podatkih ZZZS.
Pri Znanstvenem društvu Sledilnik smo se odločili, da te podatke predstavimo v uporabniku prijaznejši obliki: preko imenika in iskalnika, kjer lahko uporabniki hitro vidijo dostopnost zdravnikov v njihovi bližini.

## Ekipa

Sodelavci projekta:

-   [Branko Jevtić]() — grafično oblikovanje
-   [Jaka Daneu](https://github.com/jalezi) — spletna stran
-   [Joh Dokler](https://github.com/joahim) — spletna stran
-   [Luka Petravić]() — FAQ
-   [Luka Renko](https://twitter.com/lukarenko) — podatki
-   [Mojca Miklavec]() — podatki
-   [Sebastian Pleško](https://plesko.si/) — pobuda za storitev
-   [Štefan Baebler](https://www.linkedin.com/in/stefanbaebler/) — podatki

## Pogoji uporabe

Uporaba podatkov, grafov in sodelovanje so zaželjeni: [podatki](https://github.com/sledilnik/zdravniki-data) so zbrani iz virov v javni domeni in jih lahko prosto uporabljate, urejate, predelujete ali vključujete v vse netržne vsebine ob navedbi vira – zdravniki.sledilnik.org. Če ni določeno drugače, velja za vso vsebino na tej strani licenca Creative Commons: [Priznanje avtorstva-Deljenje pod enakimi pogoji 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.sl).

Za druge oblike sodelovanja nas kontaktirajte na podpora-zdravniki@sledilnik.org.

## Varstvo osebnih podatkov in piškotki

Podajamo informacije o obdelavah osebnih podatkov po 13. in 14. členu oz. 30. členu Splošne uredbe o varstvu podatkov ter prostemu pretoku podatkov (GDPR) ter o rabi spletnih piškotkov po 157. členu Zakona o elektronskih komunikacijah (ZEKom-1).

Projekt “Zdravniki” obdeluje osebne podatke o osebnih zdravnikih ter podatke o uporabnikih spletne strani. 

Podlaga za obdelavo je zasledovanje legitimnih interesov upravljavca (točka (f) člena 6(1) GDPR), in sicer pomoči javnosti pri izbiri osebnega zdravnika.

Upravljavec je /Znanstveno društvo Sledilnik, naslov, e-pošta/.

## Obdelava podatkov o osebnih zdravnikih

Namen obdelave podatkov o zdravnikih je olajšati postopek izbire osebnega zdravnika /link na ustrezno vprašanje zgoraj/. 

Upravljavec v ta namen zbira in obdeluje sledeče javno dostopne podatke o zdravnikih, dobljene iz spletne strani ZZZS:
ime in priimek zdravnika;
zdravstveni zavod, v okviru katerega delajo, skupaj s kontaktnimi podatki od zavoda;
podatek o tem, koliko dni na teden delajo v okviru zavoda (“obseg zaposlitve”);
število opredeljenih oseb (pacientov) v posameznih starostnih razredih;
iz teh številk izračunan glavarinski količnik zdravnika oziroma njegove tima;
podatek o tem, ali sprejema nove paciente ali ne.

/če boste to delali, sicer izbrišite/ Navedene sezname dopolnjujemo s kontaktnimi podatki posameznih zdravnikov, pridobljenimi iz javno dostopnih spletnih strani zdravstvenih zavodov oziroma drugih javno dostopnih virov:
e-poštni naslov;
telefonska številka;
specializacija.

Obdelave, ki jih upravljavec izvaja na teh podatkih:
zajem podatkov iz vira;
pretvorba v strojno berljivo;
dodatne predelave zaradi lažje uporabe na spletni strani (priprava šifrantov idr.);
odlaganje strojno berljive oblike podatkov na odložišču github /link/.
vizualizacija v obliki imenika osebnih zdravnikov
vizualizacija v obliki zemljevida osebnih zdravnikov 
možnost iskanja po osebnih zdravnikih;

Osebni podatki se hranijo, dokler so veljavni, potem pa zamenjajo z veljavnimi podatki. Izbris neveljavnih podatkov bo izveden v roku /1 leta - izberite/ po zaključku koledarskega leta, v katerem bodo podatki postali neveljavni.

Za varnost podatkov (32. člen GDPR) je poskrbljeno z dvofaktorsko avtentikacijo, ki je potrebna za shranjevanje, spreminjanje in brisanje podatkov na github odložišču. Spletna stran potem zgolj vizualizira te podatke oziroma omogoča iskanje po njih.

Osebni podatki se posebej ne prenašajo uporabnikom v tretji državi, so pa preko spleta dosegljivi tudi uporabnikom iz tujine, tako kot to velja že za vir podatkov.

## Obdelava osebnih podatkov o obiskovalcih spletne strani

Namen zbiranja in obdelave podatkov o obiskovalcih je zagotavljanje nemotenega delovanja spletne strani ter vodenje statističnih podatkov o obisku spletne strani.

Upravljavec obdeluje sledeče podatke o obiskovalcih strani:
IP naslov
čas obiska
podatki o strani, ki jo želi obiskati;
ostali podatki, ki jih v zaglavju vsakega zahtevka pošlje spletni brskalnik od uporabnika.

Obdelave, ki jih upravljavec izvaja, ob pomoči svojih pogodbenih obdelovalcev:
ponujanje spletne strani;
preverjanje pristnosti uporabnika oziroma preprečevanje dostopa avtomatiziranim orodjem;
preverjanje in odvračanje poskusov vdora v spletno stran (IDS/IPS) oziroma onemogočanja delovanja spletne strani (DOS).
preverjanje in odvračanje drugih kršitev informacijske varnosti.

Obdelave se izvajajo na strežnikih ponudnika gostovanja, dodatno pa zavarovane s pomočjo omrežja za dostavo vsebin (CND) ponudnika Cloudflare. Upravljavec ima z omrežjem Cloudflare in ponudniki strežniškega prostora sklenjene ustrezne sporazume, ki vključujejo tudi podrobnejše informacije o obdelavah osebnih podatkov (28. člen GDPR). /LINK do splošnih pogojev, če je možno./

## Piškotki

Piškotkov in drugih tehnologij za shranjevanje in pridobivanje podatkov iz uporabnikove terminalske opreme (brskalnika) ne uporabljamo.