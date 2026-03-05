// lines.js
// Cada linea lista TODAS sus estaciones (pueden repetirse entre lineas).
// Al final del fichero se auto-calcula el campo "lines" de cada estacion.
// Para añadir una linea nueva: solo editar este fichero.

var LINES = {

  "yamanote": {
    id: "yamanote",
    name: "Yamanote Line",
    nameJa: "山手線",
    operator: "JR East",
    color: "#9ACD32",
    type: "Loop / Commuter",
    length: 34.5,
    opened: 1885,
    frequency: "Cada 2-4 min (hora punta)",
    firstTrain: "04:26",
    lastTrain: "00:52",
    fare: "Desde 140 yenes",
    description: "La linea circular mas famosa de Japon. Forma un ovalo de 34,5 km alrededor del centro de Tokio con 30 estaciones y mas de 4 millones de pasajeros al dia.",
    curiosities: [
      "Completa una vuelta completa en aproximadamente 65 minutos",
      "Es la unica linea JR en Tokio con tarifa fija independiente de la distancia",
      "Durante hora punta pasan hasta 28 trenes por hora en cada direccion",
      "Las dos direcciones tienen nombre: uchimawari (interior) y sotomawari (exterior)",
      "Fue construida para conectar las terminales de las lineas radiales externas"
    ],
    stations: [
      "tokyo", "kanda", "akihabara", "okachimachi", "ueno", "uguisudani",
      "nippori", "nishi_nippori", "tabata", "komagome", "sugamo", "otsuka",
      "ikebukuro", "mejiro", "takadanobaba", "shin_okubo", "shinjuku", "yoyogi",
      "harajuku", "shibuya", "ebisu", "meguro", "gotanda", "osaki",
      "shinagawa", "tamachi", "hamamatsucho", "shimbashi", "yurakucho", "tokyo"
    ]
  },

  "keihin_tohoku": {
    id: "keihin_tohoku",
    name: "Keihin-Tohoku Line",
    nameJa: "京浜東北線",
    operator: "JR East",
    color: "#00AAFF",
    type: "Commuter / Rapid",
    length: 81.9,
    opened: 1914,
    frequency: "Cada 2-4 min (hora punta)",
    firstTrain: "04:28",
    lastTrain: "01:02",
    fare: "Desde 150 yenes",
    description: "Una de las arterias ferroviarias mas importantes del Gran Tokio, recorre 81,9 km de norte a sur conectando Omiya (Saitama) con Yokohama pasando por el corazon de Tokio. Su librea azul cielo la hace inconfundible.",
    curiosities: [
      "Es una de las lineas mas largas y concurridas de todo Japon con casi 1,5 millones de pasajeros diarios",
      "Opera en modo Rapid (Kaisoku) en hora punta, saltandose estaciones y reduciendo el tiempo de viaje",
      "Comparte vias con la Yamanote Line entre Tabata y Shinagawa, uno de los tramos mas concurridos del mundo",
      "Su color azul cielo (sora-iro) fue elegido para distinguirla facilmente de la Yamanote Line verde",
      "El tramo Omiya-Yokohama tarda unos 100 minutos en completarse de extremo a extremo"
    ],
    stations: [
      "omiya", "saitama_shintoshin", "yono", "urawa", "minami_urawa", "warabi",
      "nishi_kawaguchi", "kawaguchi", "akabane", "higashi_jujo", "jujo", "oji",
      "kami_nakazato", "tabata", "nishi_nippori", "nippori", "uguisudani", "ueno",
      "okachimachi", "akihabara", "kanda", "tokyo", "yurakucho", "shimbashi",
      "hamamatsucho", "tamachi", "shinagawa", "oimachi", "omori", "kamata",
      "kawasaki", "tsurumi", "shin_koyasu", "higashi_kanagawa", "yokohama"
    ]
  },

  "negishi": {
    id: "negishi",
    name: "Negishi Line",
    nameJa: "根岸線",
    operator: "JR East",
    color: "#0088CC",
    type: "Commuter",
    length: 22.1,
    opened: 1964,
    frequency: "Cada 5-10 min (hora punta)",
    firstTrain: "04:35",
    lastTrain: "00:30",
    fare: "Desde 200 yenes",
    description: "Linea que parte desde Yokohama hacia el suroeste hasta Ofuna, atravesando el area costera industrial y ascendiendo hacia las colinas residenciales del sur. Aunque opera en servicio directo con la Keihin-Tohoku, es administrativamente una linea distinta.",
    curiosities: [
      "Aunque comparte trenes y servicio con la Keihin-Tohoku, es una linea JR independiente",
      "Su tramo costero pasa junto a los grandes complejos industriales y petroliferos de Yokohama",
      "Sakuragicho, su primera estacion, es la heredera de la primera estacion de Japon (1872)",
      "Ofuna, su terminal, es tambien la puerta a Kamakura y al monocarril de Shonan"
    ],
    stations: [
      "yokohama", "sakuragicho", "kannai", "isogo", "minami_isogo", "shin_sugita",
      "yokodai", "konan_dai", "hongodai", "ofuna"
    ]
  },

  "chuo": {
    id: "chuo",
    name: "Chuo Rapid Line",
    nameJa: "中央線快速",
    operator: "JR East",
    color: "#F15A22",
    type: "Commuter / Rapid",
    length: 67.9,
    opened: 1889,
    frequency: "Cada 3-5 min (hora punta)",
    firstTrain: "04:42",
    lastTrain: "00:45",
    fare: "Desde 150 yenes",
    description: "La gran arteria naranja que cruza Tokio de este a oeste, desde el corazon de la ciudad hasta las montanas de Takao. Una de las lineas mas concurridas de Japon, conecta el centro con la region del Tama.",
    curiosities: [
      "Su color naranja (taisha-iro) ha identificado la linea desde 1957",
      "Es estadisticamente una de las lineas con mas incidentes por pasajero de Japon",
      "El servicio Chuo Liner nocturno cobra suplemento y garantiza asiento",
      "El tramo Tokyo-Shinjuku es uno de los mas densos del mundo con hasta 26 trenes por hora",
      "Conecta el Tokio urbano mas denso con los valles y montanas del oeste de la prefectura"
    ],
    stations: [
      "tokyo", "kanda", "ochanomizu", "yotsuya", "shinjuku",
      "nakano", "asagaya", "ogikubo", "nishi_ogikubo",
      "kichijoji", "mitaka", "musashi_sakai", "higashi_koganei",
      "musashi_koganei", "kokubunji", "nishi_kokubunji", "kunitachi",
      "tachikawa", "hino", "toyoda", "hachioji", "nishi_hachioji", "takao"
    ]
  },

  "soya": {
    id: "soya",
    name: "Soya Main Line",
    nameJa: "宗谷本線",
    operator: "JR Hokkaido",
    color: "#9B59B6",
    type: "Rural / Limited Express",
    length: 259.4,
    opened: 1898,
    frequency: "3-4 trenes al dia (tramo norte)",
    firstTrain: "06:00",
    lastTrain: "20:30",
    fare: "Desde 1.290 yenes (Asahikawa-Wakkanai)",
    description: "La linea mas septentrional de Japon, cruzando Hokkaido de sur a norte durante 259 km hasta Wakkanai, el punto mas al norte del pais. Un viaje a traves de llanuras heladas, bosques de abedules y paisajes de una soledad absoluta.",
    curiosities: [
      "Es la linea ferroviaria mas larga de una sola via de Japon con 259,4 km",
      "El expreso Soya cubre los 259 km en unas 4 horas por paisajes practicamente deshabitados",
      "Al norte de Nayoro hay tramos donde el siguiente tren tarda 4 horas",
      "JR Hokkaido ha propuesto cerrar el tramo norte por falta de viajeros, generando debate nacional",
      "En invierno los quitanieves deben abrir paso antes de cada tren en el tramo norte"
    ],
    stations: [
      "asahikawa", "nagayama", "pippu", "wassamu", "kenbuchi",
      "shibetsu", "nayoro", "bifuka", "otoineppu",
      "teshio_nakagawa", "horonobe", "toyotomi",
      "minami_wakkanai", "wakkanai"
    ]
  },

  "shonan_monorail": {
    id: "shonan_monorail",
    name: "Shonan Monorail Enoshima Line",
    nameJa: "湘南モノレール江の島線",
    operator: "Shonan Monorail Co.",
    color: "#E74C3C",
    type: "Suspended Monorail",
    length: 6.6,
    opened: 1970,
    frequency: "Cada 7-8 min",
    firstTrain: "06:00",
    lastTrain: "23:00",
    fare: "Desde 310 yenes (Ofuna-Shonan-Enoshima)",
    description: "El monocarril suspendido que conecta Ofuna con la isla de Enoshima colgando literalmente del raíl, volando a baja altura sobre tejados, colinas y calles de Kamakura. Su perfil ondulante con pendientes de hasta 7,4% es comparado habitualmente con una montaña rusa.",
    curiosities: [
      "Fue el primer monocarril suspendido (tipo SAFEGE) inaugurado en Japon, el 7 de marzo de 1970",
      "El vehiculo cuelga por debajo del raíl en lugar de apoyarse sobre el, creando una sensacion de vuelo",
      "Esta hermanado con el Wuppertal Schwebebahn de Alemania, el monocarril suspendido mas famoso del mundo",
      "El perfil sube y baja colinas hasta un 7,4% de pendiente, comparado con una montana rusa por los pasajeros",
      "El tunel de Kamakurayama (451 m) es el tramo recto donde el tren alcanza su velocidad maxima de 75 km/h"
    ],
    stations: [
      "ofuna", "shonan_fukasawa", "nishi_kamakura", "kataseyama",
      "mejiroyamashita", "shonan_enoshima"
    ]
  }

};

// ── FLOTA POR LINEA ───────────────────────────────────────────
var LINE_FLEET = {

  "yamanote": {
    primary: "E235",
    trains: [
      { trainId: "E235",     label: "E235 — Flota principal",             pct: 70 },
      { trainId: "E231-500", label: "E231-500 — Servicio complementario", pct: 30 },
      { trainId: "205",      label: "Series 205 — Retirado en 2005",       pct: 0  }
    ]
  },

  "keihin_tohoku": {
    primary: "E233-1000",
    trains: [
      { trainId: "E233-1000", label: "E233-1000 — Flota actual",        pct: 100 },
      { trainId: "209-0",     label: "Series 209-0 — Retirado en 2010", pct: 0   }
    ]
  },

  "negishi": {
    primary: "E233-1000",
    trains: [
      { trainId: "E233-1000", label: "E233-1000 — Servicio directo Keihin-Tohoku", pct: 100 },
      { trainId: "209-0",     label: "Series 209-0 — Retirado en 2010",            pct: 0   }
    ]
  },

  "chuo": {
    primary: "E233-0",
    trains: [
      { trainId: "E233-0", label: "E233-0 — Flota principal",      pct: 100 },
      { trainId: "201",    label: "Series 201 — Retirado en 2010", pct: 0   }
    ]
  },

  "soya": {
    primary: "H100",
    trains: [
      { trainId: "H100",    label: "H100 DECMO — Servicios locales",      pct: 70 },
      { trainId: "KiHa261", label: "KiHa 261 — Expreso Soya / Sarobetsu", pct: 30 },
      { trainId: "KiHa54",  label: "KiHa 54 — Retirado en 2023",          pct: 0  }
    ]
  },

  "shonan_monorail": {
    primary: "SM5000",
    trains: [
      { trainId: "SM5000", label: "5000 Series — Flota actual",          pct: 100 },
      { trainId: "SM300",  label: "300/500 Series — Retirado en 2004",   pct: 0   }
    ]
  }

};

// ── AUTO-CALCULO DE station.lines ─────────────────────────────
// Itera todas las lineas y añade el id al array station.lines
// de cada estacion que aparezca en su lista de stations.
// Para añadir una linea nueva solo hay que editar este fichero.
(function() {
  var lineIds = Object.keys(LINES);
  for (var li = 0; li < lineIds.length; li++) {
    var lid = lineIds[li];
    var stationIds = LINES[lid].stations;
    for (var si = 0; si < stationIds.length; si++) {
      var sid = stationIds[si];
      var station = STATIONS[sid];
      if (!station) continue;
      if (!station.lines) station.lines = [];
      if (station.lines.indexOf(lid) === -1) {
        station.lines.push(lid);
      }
    }
  }
  var allStationIds = Object.keys(STATIONS);
  for (var si = 0; si < allStationIds.length; si++) {
    var station = STATIONS[allStationIds[si]];
    if (!station.lines) station.lines = [];
  }
})();
