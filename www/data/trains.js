var TRAINS = {

  "E235": {
    id: "E235", name: "Series E235", operator: "JR East", type: "Commuter EMU",
    introduced: 2015, retired: null, maxSpeed: 120, cars: 11, capacity: 1634,
    manufacturer: "J-TREC (総合車両製作所)", status: "active",
    lines: ["yamanote", "chuo_sobu"],
    description: "Tren de ultima generacion y flota principal de la Yamanote Line. Disenado integramente por JR East con tecnologia IGBT y sistema de informacion al pasajero completamente renovado.",
    curiosities: [
      "Pantallas LCD sobre cada puerta muestran informacion de la proxima estacion en tiempo real",
      "Ahorra un 30% mas de energia que su predecesor, el Series E231",
      "Asientos con calefaccion individual y barras de sujecion con LED integrado",
      "Fue el primer tren japones en incorporar pantallas de informacion en las puertas de acceso"
    ]
  },

  "E231-500": {
    id: "E231-500", name: "Series E231-500", operator: "JR East", type: "Commuter EMU",
    introduced: 2002, retired: null, maxSpeed: 120, cars: 11, capacity: 1634,
    manufacturer: "Kawasaki Heavy Industries / Tokyu Car Corporation", status: "active",
    lines: ["yamanote"],
    description: "La generacion anterior a la E235, aun en servicio complementario en la Yamanote Line. Fue el tren que modernizo completamente la linea a principios de los 2000.",
    curiosities: [
      "Sustituyo a los legendarios Series 205 que operaron en la Yamanote desde 1985",
      "Fue el primer tren de la Yamanote en incorporar pantallas LCD en el interior",
      "Se fabricaron 52 formaciones de 11 coches para la linea, un record en Japon",
      "Algunos trenes fueron transferidos a otras lineas JR East al ir llegando el E235"
    ]
  },

  "205": {
    id: "205", name: "Series 205", operator: "JR East", type: "Commuter EMU",
    introduced: 1985, retired: 2005, maxSpeed: 100, cars: 11, capacity: 1584,
    manufacturer: "Kawasaki / Hitachi / Kinki Sharyo", status: "retired",
    lines: ["yamanote"],
    description: "El tren verde mas iconico de la Yamanote Line. Opero durante 20 anos y es el simbolo visual mas reconocible de la linea para generaciones de tokiotas.",
    curiosities: [
      "Su franja verde sobre fondo blanco sigue siendo el color identificativo de la Yamanote Line",
      "Fue uno de los primeros trenes japoneses en usar motores VVVF de forma generalizada",
      "Muchas unidades fueron exportadas a Indonesia tras su retirada, donde siguen operando hoy",
      "Los fans organizaron eventos de despedida masivos cuando fue retirado en 2005"
    ]
  },

  "E233-1000": {
    id: "E233-1000", name: "Series E233-1000", operator: "JR East", type: "Commuter EMU",
    introduced: 2007, retired: null, maxSpeed: 120, cars: 10, capacity: 1600,
    manufacturer: "J-TREC / Kawasaki Heavy Industries", status: "active",
    lines: ["keihin_tohoku", "negishi"],
    description: "Flota actual de la Keihin-Tohoku y Negishi Line. Disenado para el servicio de alta frecuencia del corredor Omiya-Yokohama-Ofuna, con su caracteristica librea azul cielo.",
    curiosities: [
      "Su librea azul cielo (sora-iro) es uno de los colores mas reconocibles del sistema JR de Tokio",
      "Incorpora sistema de frenado regenerativo que devuelve energia a la red electrica",
      "Tiene puertas mas anchas para facilitar el flujo de pasajeros en hora punta",
      "Opera en modo Rapid (Kaisoku) saltandose estaciones intermedias durante las horas punta",
      "Fue el primer tren JR East en incorporar pantallas de doble proposito informacion/publicidad"
    ]
  },

  "209-0": {
    id: "209-0", name: "Series 209-0", operator: "JR East", type: "Commuter EMU",
    introduced: 1993, retired: 2010, maxSpeed: 110, cars: 10, capacity: 1560,
    manufacturer: "Kawasaki / Tokyu Car Corporation / Niigata Transys", status: "retired",
    lines: ["keihin_tohoku", "negishi"],
    description: "Predecesor del E233 en la Keihin-Tohoku y Negishi Line. Fue revolucionario por su diseno ultraligero y bajo coste, convirtiendose en referencia para toda una generacion de trenes JR.",
    curiosities: [
      "Apodado tren desechable por su diseno concebido para ser reemplazado en 13 anos",
      "Su peso era un 20% menor que los trenes anteriores gracias al aluminio y acero inoxidable",
      "Introdujo el concepto de mantenimiento reducido que influencio todos los disenos de JR East",
      "Algunos ejemplares fueron transferidos a lineas rurales donde siguen operando hoy"
    ]
  },

  "E233-0": {
    id: "E233-0", name: "Series E233-0", operator: "JR East", type: "Commuter / Rapid EMU",
    introduced: 2006, retired: null, maxSpeed: 120, cars: 10, capacity: 1560,
    manufacturer: "J-TREC / Kawasaki Heavy Industries", status: "active",
    lines: ["chuo"],
    description: "Flota principal de la Chuo Rapid Line. Su librea naranja brillante es uno de los colores mas iconicos del sistema JR de Tokio. Sustituyo al legendario Series 201.",
    curiosities: [
      "Su naranja brillante (taisha-iro) es el color historico de la Chuo Line desde 1957",
      "Opera el servicio especial nocturno Home Liner con plazas reservadas de pago",
      "Tiene configuracion flexible: algunos coches se pueden separar para rutas secundarias",
      "Fue el primer tren JR East en superar el millon de km sin revision mayor"
    ]
  },

  "201": {
    id: "201", name: "Series 201", operator: "JR East", type: "Commuter EMU",
    introduced: 1979, retired: 2010, maxSpeed: 100, cars: 10, capacity: 1480,
    manufacturer: "Hitachi / Kawasaki / Kinki Sharyo / Nippon Sharyo", status: "retired",
    lines: ["chuo"],
    description: "El tren naranja mas querido de la Chuo Line. Opero durante mas de 30 anos y su sonido se convirtio en parte del paisaje sonoro de Tokio.",
    curiosities: [
      "Su color naranja lleva siendo el identificativo de la Chuo Line desde su introduccion",
      "Fue el primer tren JR en incorporar traccion por tiristores de forma masiva",
      "Los aficionados organizaron viajes especiales de despedida en su ultimo dia en 2010",
      "Algunos ejemplares fueron transferidos a lineas rurales de JR West"
    ]
  },

  "H100": {
    id: "H100", name: "H100 Series (DECMO)", operator: "JR Hokkaido", type: "DMU (Diesel)",
    introduced: 2019, retired: null, maxSpeed: 100, cars: 1, capacity: 158,
    manufacturer: "Nippon Sharyo", status: "active",
    lines: ["soya"],
    description: "Tren diesel de ultima generacion de JR Hokkaido, apodado DECMO. Disenado para las duras condiciones invernales de Hokkaido con traccion hibrida y alta resistencia a la nieve.",
    curiosities: [
      "DECMO significa DEsel Car with MOtor, sistema hibrido que recupera energia en frenada",
      "Disenado para operar con -30 grados y nevadas de mas de 1 metro",
      "Cada unidad puede operar sola o acoplada, adaptandose a la demanda real",
      "Sustituye a trenes de los anos 80 que habian cumplido ya 40 anos de servicio"
    ]
  },

  "KiHa261": {
    id: "KiHa261", name: "KiHa 261 Series", operator: "JR Hokkaido", type: "Limited Express DMU",
    introduced: 2000, retired: null, maxSpeed: 130, cars: 4, capacity: 292,
    manufacturer: "Nippon Sharyo / Hokkaido Railway", status: "active",
    lines: ["soya"],
    description: "Tren expreso diesel de alta velocidad que opera los servicios Soya y Sarobetsu entre Sapporo/Asahikawa y Wakkanai. Mantiene 130 km/h en las llanuras heladas del norte de Hokkaido.",
    curiosities: [
      "Opera el expreso Soya que cubre los 396 km Sapporo-Wakkanai en unas 5 horas",
      "Tiene calefaccion bajo el suelo de los andenes para evitar el hielo",
      "Es uno de los pocos expresos diesel del mundo capaces de mantener 130 km/h",
      "El nombre Sarobetsu viene del rio Sarobetsu que la linea cruza en el tramo norte"
    ]
  },

  "KiHa54": {
    id: "KiHa54", name: "KiHa 54 Series", operator: "JR Hokkaido", type: "DMU (Diesel)",
    introduced: 1986, retired: 2023, maxSpeed: 95, cars: 1, capacity: 135,
    manufacturer: "Fuji Heavy Industries", status: "retired",
    lines: ["soya"],
    description: "Veterano tren diesel que durante decadas fue el simbolo de las lineas rurales de Hokkaido. Opero en la Soya Line por mas de 35 anos antes de ser relevado por el H100 DECMO.",
    curiosities: [
      "Fue disenado con doble ventana y sellado especial para soportar los inviernos de Hokkaido",
      "Los ultimos ejemplares en la Soya Line fueron retirados en 2023",
      "Su caracteristica librea roja y gris fue simbolo del ferrocarril rural de Hokkaido",
      "Algunos viajaron especialmente desde Tokio para despedirse en su ultimo servicio"
    ]
  },

  "SM5000": {
    id: "SM5000", name: "Shonan Monorail 5000 Series", operator: "Shonan Monorail Co.", type: "Suspended Monorail",
    introduced: 2002, retired: null, maxSpeed: 75, cars: 3, capacity: 306,
    manufacturer: "Mitsubishi Heavy Industries", status: "active",
    lines: ["shonan_monorail"],
    description: "El monocarril suspendido que conecta Ofuna con la isla de Enoshima colgando literalmente del raíl por encima de las calles. Fabricado por Mitsubishi, su sensacion de vuelo a baja altura sobre tejados y colinas es unica en Japon.",
    curiosities: [
      "Es un monocarril tipo SAFEGE: el vehiculo cuelga por debajo del raíl en lugar de apoyarse sobre el",
      "Esta hermanado con el Schwebebahn de Wuppertal (Alemania), el monocarril suspendido mas famoso del mundo",
      "Su perfil ondulante sube y baja colinas hasta un 7,4% de pendiente, comparado frecuentemente con una montana rusa",
      "Fue el primer monocarril suspendido inaugurado en Japon, en 1970",
      "El tunel de Kamakurayama (451 m) es el tramo recto donde el tren alcanza su velocidad maxima de 75 km/h"
    ]
  },

  "SM300": {
    id: "SM300", name: "Shonan Monorail 300/500 Series", operator: "Shonan Monorail Co.", type: "Suspended Monorail",
    introduced: 1970, retired: 2004, maxSpeed: 65, cars: 3, capacity: 240,
    manufacturer: "Mitsubishi Heavy Industries", status: "retired",
    lines: ["shonan_monorail"],
    description: "El monocarril original con el que se inauguro la linea en 1970. Opero durante 34 anos y fue el vehiculo que demostro la viabilidad del sistema suspendido SAFEGE en Japon.",
    curiosities: [
      "Inauguro el primer monocarril suspendido de Japon el 7 de marzo de 1970",
      "El diseno fue desarrollado por Mitsubishi como demostracion tecnologica frente al sistema de Hitachi",
      "Opero inicialmente con formaciones de 2 coches, ampliadas a 3 en 1975 por el crecimiento de viajeros",
      "Fue retirado en 2004 al introducirse el 5000 Series, tras 34 anos de servicio sin accidentes graves"
    ]
  }

};

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
      { trainId: "SM5000", label: "5000 Series — Flota actual", pct: 100 },
      { trainId: "SM300",  label: "300/500 Series — Retirado en 2004", pct: 0 }
    ]
  }

};
