// stations.js — datos de estaciones
// El campo "lines" NO se define aquí. Se calcula automáticamente
// al final de lines.js en función de qué líneas incluyen cada estación.

var STATIONS = {

  // ── TOKIO CENTRO ──────────────────────────────────────────────
  "tokyo": {
    id:"tokyo", name:"Tokyo", nameJa:"東京",
    lat:35.6812, lng:139.7671,
    operator:"JR East / JR Central",
    dailyPassengers:3200000, opened:1914,
    description:"La estación central de Japón. El edificio de ladrillo rojo de 1914 fue restaurado en 2012. Punto de partida de todos los Shinkansen principales.",
    curiosities:[
      "Diseñado por Kingo Tatsuno e inaugurado en 1914",
      "Perdió sus cúpulas en la WWII, restauradas en 2012",
      "Las cúpulas norte y sur tienen relieves con los 12 signos del zodiaco",
      "Tiene más de 200 salidas y 3 km de galerías subterráneas comerciales"
    ],
    facilities:["Conbini","Hub Shinkansen","Info turística","Shopping"]
  },
  "ueno": {
    id:"ueno", name:"Ueno", nameJa:"上野",
    lat:35.7141, lng:139.7774,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:780000, opened:1883,
    description:"Puerta histórica a Tokio desde el norte. Junto al Parque de Ueno, alberga museos nacionales y el icónico mercado Ameyoko.",
    curiosities:[
      "Primera terminal del Japón moderno para trenes del norte",
      "El Parque de Ueno tiene más de 1.000 árboles sakura",
      "Ameyoko nació en el mercado negro de posguerra de los años 40",
      "El Zoo de Ueno (1882) fue el primer zoológico de Japón"
    ],
    facilities:["Conbini","Museos","Acceso al parque","Consigna"]
  },
  "akihabara": {
    id:"akihabara", name:"Akihabara", nameJa:"秋葉原",
    lat:35.6984, lng:139.7731,
    operator:"JR East / TX",
    dailyPassengers:440000, opened:1925,
    description:"El paraíso de la electrónica, anime y cultura otaku. Electric Town evolucionó de mercado de componentes a meca del entretenimiento digital.",
    curiosities:[
      "Tras la WWII vendía componentes electrónicos de segunda mano",
      "Más de 300 tiendas de anime y manga en apenas 500 metros",
      "Los maid cafés nacieron aquí en los años 2000"
    ],
    facilities:["Conbini","Electrónica","Tiendas anime","Maid cafés"]
  },
  "kanda": {
    id:"kanda", name:"Kanda", nameJa:"神田",
    lat:35.6919, lng:139.7714,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:320000, opened:1919,
    description:"El barrio de los libros de segunda mano. Jimbocho concentra la mayor densidad de librerías del mundo.",
    curiosities:[
      "Jimbocho tiene más de 170 librerías de segunda mano en 4 manzanas",
      "El festival Kanda Matsuri es uno de los tres grandes de Tokio"
    ],
    facilities:["Conbini","Librerías","Zona histórica"]
  },
  "yurakucho": {
    id:"yurakucho", name:"Yurakucho", nameJa:"有楽町",
    lat:35.6751, lng:139.7630,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:380000, opened:1910,
    description:"Entre Tokio y Ginza. Bajo los arcos de las vías viven los izakaya más famosos, contraste brutal con el lujo de Ginza.",
    curiosities:[
      "Los restaurantes bajo los arcos son legendarios en Tokio",
      "Ginza, el barrio más caro de Japón, comienza al cruzar la calle"
    ],
    facilities:["Conbini","Shopping","Izakaya bajo las vías"]
  },
  "shimbashi": {
    id:"shimbashi", name:"Shimbashi", nameJa:"新橋",
    lat:35.6663, lng:139.7581,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:700000, opened:1872,
    description:"La primera estación de Japón (1872) y símbolo del salaryman. La plaza SL con la locomotora de vapor es un icono.",
    curiosities:[
      "Primera estación de Japón, inaugurada el 14 de octubre de 1872",
      "La locomotora en la plaza SL conmemora esa historia",
      "La Yurikamome parte hacia Odaiba con el puente arco iris de fondo"
    ],
    facilities:["Conbini","Plaza SL histórica","Acceso Yurikamome"]
  },
  "hamamatsucho": {
    id:"hamamatsucho", name:"Hamamatsucho", nameJa:"浜松町",
    lat:35.6551, lng:139.7567,
    operator:"JR East / Tokyo Monorail",
    dailyPassengers:450000, opened:1909,
    description:"Acceso al Aeropuerto de Haneda mediante el Tokyo Monorail. Desde los andenes se ve la Tokyo Tower.",
    curiosities:[
      "El Tokyo Monorail conecta con Haneda en 18 minutos",
      "La Tokyo Tower (333m) es visible desde los andenes",
      "Zojoji Temple con la Tokyo Tower de fondo está a 5 minutos"
    ],
    facilities:["Conbini","Acceso a Haneda","Monorail"]
  },
  "tamachi": {
    id:"tamachi", name:"Tamachi", nameJa:"田町",
    lat:35.6455, lng:139.7476,
    operator:"JR East",
    dailyPassengers:360000, opened:1909,
    description:"Barrio corporativo con campus universitarios. La Universidad Keio, fundada en 1858, está aquí.",
    curiosities:[
      "La Universidad Keio es una de las más prestigiosas de Japón",
      "Gran proceso de renovación urbana desde los 2010s"
    ],
    facilities:["Conbini","Universidades"]
  },
  "shinagawa": {
    id:"shinagawa", name:"Shinagawa", nameJa:"品川",
    lat:35.6284, lng:139.7387,
    operator:"JR East / JR Central / Keikyu",
    dailyPassengers:1380000, opened:1872,
    description:"Una de las estaciones más antiguas de Japón (1872). Hub empresarial y punto de partida del Shinkansen hacia Osaka.",
    curiosities:[
      "Fue la estación del primer ferrocarril japonés en 1872",
      "Shinkansen Nozomi a Osaka en solo 2h15min",
      "Se construye una estación del Maglev Chuo bajo tierra para 2027"
    ],
    facilities:["Conbini","Shinkansen","Hoteles","Narita Express"]
  },
  "okachimachi": {
    id:"okachimachi", name:"Okachimachi", nameJa:"御徒町",
    lat:35.7077, lng:139.7745,
    operator:"JR East",
    dailyPassengers:270000, opened:1925,
    description:"Mercado de joyería, electrónica de segunda mano y ropa al por mayor. El Ameyoko Market arranca aquí.",
    curiosities:[
      "Ameyoko se extiende 400 metros bajo las vías hasta Ueno",
      "En Nochevieja miles de personas compran comida fresca a precio de saldo"
    ],
    facilities:["Conbini","Mercados","Joyería"]
  },
  "nippori": {
    id:"nippori", name:"Nippori", nameJa:"日暮里",
    lat:35.7278, lng:139.7710,
    operator:"JR East / Keisei",
    dailyPassengers:650000, opened:1905,
    description:"Gateway al aeropuerto de Narita vía el Keisei Skyliner. Famosa también por el mercado de telas Fabric Town.",
    curiosities:[
      "El Keisei Skyliner llega a Narita en solo 36 minutos",
      "Fabric Town tiene más de 100 tiendas de telas, meca del cosplay",
      "Yanaka Ginza a 5 min es una calle retro de los años 50 perfectamente conservada"
    ],
    facilities:["Conbini","Acceso a Narita","Tiendas de telas"]
  },
  "nishi_nippori": {
    id:"nishi_nippori", name:"Nishi-Nippori", nameJa:"西日暮里",
    lat:35.7328, lng:139.7668,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:190000, opened:1971,
    description:"Acceso al barrio histórico de Yanaka, el mejor preservado de Tokio.",
    curiosities:[
      "Yanaka sobrevivió los bombardeos de la WWII prácticamente intacto",
      "El cementerio de Yanaka es uno de los espacios verdes más tranquilos de Tokio"
    ],
    facilities:["Conbini","Acceso histórico"]
  },
  "tabata": {
    id:"tabata", name:"Tabata", nameJa:"田端",
    lat:35.7381, lng:139.7612,
    operator:"JR East",
    dailyPassengers:150000, opened:1896,
    description:"Extremo noreste del bucle Yamanote. Barrio con reminiscencias literarias del Japón Meiji-Taisho.",
    curiosities:[
      "Varios escritores Meiji vivieron en la colonia de artistas de Tabata",
      "El Museo de los Artistas documenta la historia literaria del barrio"
    ],
    facilities:["Conbini"]
  },
  "uguisudani": {
    id:"uguisudani", name:"Uguisudani", nameJa:"鶯谷",
    lat:35.7217, lng:139.7787,
    operator:"JR East",
    dailyPassengers:90000, opened:1912,
    description:"La estación con menos pasajeros de la Yamanote Line. Punto de acceso al Mausoleo de Tokugawa.",
    curiosities:[
      "Es la estación menos transitada de toda la Yamanote Line",
      "Uguisu significa ruiseñor, el pájaro de la buena suerte en Japón"
    ],
    facilities:["Conbini"]
  },

  // ── SOLO YAMANOTE ─────────────────────────────────────────────
  "shibuya": {
    id:"shibuya", name:"Shibuya", nameJa:"渋谷",
    lat:35.6581, lng:139.7017,
    operator:"JR East / Tokyo Metro / Tokyu",
    dailyPassengers:860000, opened:1885,
    description:"Una de las estaciones más concurridas del mundo. Famosa por su cruce peatonal scramble, considerado el más transitado del planeta con hasta 3.000 personas cruzando simultáneamente.",
    curiosities:[
      "El cruce scramble recibe más de 2,4 millones de personas al día",
      "La estatua del perro Hachiko es el punto de encuentro más icónico de Tokio",
      "9 líneas de metro y tren convergen en esta estación",
      "Scramble Square (2019) añadió 47 pisos de oficinas y comercio"
    ],
    facilities:["Conbini","Consigna","Info turística","Centro comercial"]
  },
  "shinjuku": {
    id:"shinjuku", name:"Shinjuku", nameJa:"新宿",
    lat:35.6896, lng:139.7006,
    operator:"JR East / Tokyo Metro / Keio",
    dailyPassengers:3580000, opened:1885,
    description:"La estación más transitada del mundo según el Libro Guinness. Con 200 salidas y 50 andenes, es prácticamente una ciudad subterránea.",
    curiosities:[
      "Más de 200 salidas la convierten en laberinto para los no iniciados",
      "Procesa más de 3,5 millones de pasajeros al día",
      "Centro comercial subterráneo con más de 200 tiendas"
    ],
    facilities:["Conbini","Info turística","Consigna","Shopping"]
  },
  "ikebukuro": {
    id:"ikebukuro", name:"Ikebukuro", nameJa:"池袋",
    lat:35.7295, lng:139.7109,
    operator:"JR East / Tokyo Metro / Tobu / Seibu",
    dailyPassengers:2720000, opened:1903,
    description:"Segunda estación más concurrida del mundo. Centro neurálgico del anime, manga y cultura otaku con la famosa zona Sunshine City.",
    curiosities:[
      "Sunshine City incluye acuario, planetario y torre de 60 pisos",
      "Capital del BL manga en Japón",
      "El Animate flagship tiene 7 pisos dedicados al anime"
    ],
    facilities:["Conbini","Tiendas de anime","Shopping","Consigna"]
  },
  "osaki": {
    id:"osaki", name:"Osaki", nameJa:"大崎",
    lat:35.6197, lng:139.7283,
    operator:"JR East",
    dailyPassengers:320000, opened:1901,
    description:"Nodo en el sur de la Yamanote Loop con acceso a Odaiba y al área empresarial de Osaki.",
    curiosities:[
      "La Rinkai Line conecta con Odaiba y Tokyo Teleport",
      "Revitalizada en los 2000s con torres corporativas Sony y NTT"
    ],
    facilities:["Conbini","Consigna","Shopping"]
  },
  "gotanda": {
    id:"gotanda", name:"Gotanda", nameJa:"五反田",
    lat:35.6263, lng:139.7233,
    operator:"JR East / Tokyu / Toei",
    dailyPassengers:290000, opened:1928,
    description:"Tranquilo nodo en el sur con conexión a Tokyu Ikegami y metro Asakusa. Conocido por sus restaurantes de ramen.",
    curiosities:[
      "La Tokyu Ikegami Line es una de las más tranquilas de Tokio",
      "Zona residencial con sabor local auténtico"
    ],
    facilities:["Conbini","Consigna"]
  },
  "meguro": {
    id:"meguro", name:"Meguro", nameJa:"目黒",
    lat:35.6335, lng:139.7156,
    operator:"JR East / Tokyu / Tokyo Metro",
    dailyPassengers:500000, opened:1885,
    description:"Hub de intercambio hacia el suroeste con la Tokyu Meguro Line hacia Yokohama.",
    curiosities:[
      "El Meguro River es famoso por los cerezos en flor",
      "El Parasitological Museum es uno de los más inusuales de Tokio"
    ],
    facilities:["Conbini","Consigna","Shopping"]
  },
  "ebisu": {
    id:"ebisu", name:"Ebisu", nameJa:"恵比寿",
    lat:35.6467, lng:139.7101,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:380000, opened:1901,
    description:"Barrio elegante y cosmopolita. El nombre viene de la histórica cervecería Yebisu, hoy un museo.",
    curiosities:[
      "Garden Place alberga el Museo de la Cerveza Yebisu",
      "Uno de los barrios con mayor renta per cápita de Tokio",
      "La cinta transportadora al Garden Place es única en Japón"
    ],
    facilities:["Conbini","Shopping","Museos"]
  },
  "harajuku": {
    id:"harajuku", name:"Harajuku", nameJa:"原宿",
    lat:35.6702, lng:139.7027,
    operator:"JR East",
    dailyPassengers:280000, opened:1906,
    description:"Meca de la moda juvenil japonesa y la cultura kawaii. Takeshita Street y Omotesando son mundos opuestos a metros de distancia.",
    curiosities:[
      "La estación de madera original (1924) fue reemplazada en 2020",
      "Takeshita Street tiene la moda más excéntrica e independiente",
      "El Santuario Meiji está a 5 minutos caminando"
    ],
    facilities:["Conbini","Tiendas de moda","Parques"]
  },
  "yoyogi": {
    id:"yoyogi", name:"Yoyogi", nameJa:"代々木",
    lat:35.6830, lng:139.7020,
    operator:"JR East / Toei",
    dailyPassengers:210000, opened:1906,
    description:"Pequeña estación entre Harajuku y Shinjuku con acceso al Parque Yoyogi y el Estadio Nacional.",
    curiosities:[
      "El Parque Yoyogi fue sede olímpica en Tokio 1964",
      "Los domingos eran famosos por grupos de rockabilly (años 80-90)"
    ],
    facilities:["Conbini","Acceso al parque"]
  },
  "shin_okubo": {
    id:"shin_okubo", name:"Shin-Okubo", nameJa:"新大久保",
    lat:35.7010, lng:139.6998,
    operator:"JR East",
    dailyPassengers:180000, opened:1914,
    description:"El Koreatown de Tokio. Explosión de comida coreana, K-pop y cultura hallyu en el corazón de la capital.",
    curiosities:[
      "Más de 100 restaurantes coreanos en la calle principal",
      "El boom del K-pop convirtió la zona en destino de peregrinación",
      "También tiene comunidades latina y árabe"
    ],
    facilities:["Conbini","Comida coreana","Tiendas K-pop"]
  },
  "takadanobaba": {
    id:"takadanobaba", name:"Takadanobaba", nameJa:"高田馬場",
    lat:35.7126, lng:139.7038,
    operator:"JR East / Tokyo Metro / Seibu",
    dailyPassengers:460000, opened:1910,
    description:"Ciudad universitaria bulliciosa. Sede de la Universidad Waseda y famosa por sonar la melodía de Astro Boy al llegar los trenes.",
    curiosities:[
      "Suena la melodía de Astro Boy porque Osamu Tezuka era del barrio",
      "La Universidad Waseda está a 10 minutos",
      "Zona famosa por escuelas de idiomas para extranjeros"
    ],
    facilities:["Conbini","Zona universitaria","Consigna"]
  },
  "mejiro": {
    id:"mejiro", name:"Mejiro", nameJa:"目白",
    lat:35.7214, lng:139.7059,
    operator:"JR East",
    dailyPassengers:130000, opened:1885,
    description:"Barrio residencial elegante con el campus de Gakushuin University, la universidad histórica de la familia imperial.",
    curiosities:[
      "Gakushuin fue fundada para la educación de la nobleza y familia imperial",
      "El jardín Chinzan-so está a 15 minutos caminando"
    ],
    facilities:["Conbini","Parques"]
  },
  "otsuka": {
    id:"otsuka", name:"Otsuka", nameJa:"大塚",
    lat:35.7294, lng:139.7284,
    operator:"JR East / Toei Toden",
    dailyPassengers:190000, opened:1903,
    description:"Pequeña estación con el encanto del tranvía Toden Arakawa, el único tranvía operativo en Tokio.",
    curiosities:[
      "El Toden Arakawa es el último tranvía operativo de Tokio",
      "Funciona desde 1913 recorriendo 12km por el norte",
      "La zona conserva el sabor del shitamachi antiguo"
    ],
    facilities:["Conbini","Acceso al tranvía"]
  },
  "sugamo": {
    id:"sugamo", name:"Sugamo", nameJa:"巣鴨",
    lat:35.7333, lng:139.7393,
    operator:"JR East / Toei",
    dailyPassengers:210000, opened:1903,
    description:"El Harajuku de las abuelas. La calle Jizo-dori es un destino auténtico del Tokio tradicional.",
    curiosities:[
      "Jizo-dori vende ropa interior roja, de buena suerte para los mayores",
      "El templo Togenuki Jizo-son es famoso por sus poderes curativos",
      "Ejemplo perfecto del shitamachi que sobrevive en Tokio moderno"
    ],
    facilities:["Conbini","Tiendas tradicionales","Templos"]
  },
  "komagome": {
    id:"komagome", name:"Komagome", nameJa:"駒込",
    lat:35.7367, lng:139.7488,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:170000, opened:1910,
    description:"Barrio tranquilo con acceso al Jardín Rikugien, uno de los jardines japoneses más bellos de Tokio.",
    curiosities:[
      "El jardín Rikugien (1702) es un ejemplo perfecto del jardín japonés kaiyushiki",
      "En primavera iluminan los cerezos por las noches (yozakura)"
    ],
    facilities:["Conbini","Jardines"]
  },

  // ── SOLO KEIHIN-TOHOKU ────────────────────────────────────────
  "omiya": {
    id:"omiya", name:"Omiya", nameJa:"大宮",
    lat:35.9066, lng:139.6237,
    operator:"JR East",
    dailyPassengers:860000, opened:1885,
    description:"Principal nodo ferroviario del norte del Gran Tokio y capital de la prefectura de Saitama. Hub de Shinkansen hacia el norte de Japón.",
    curiosities:[
      "Es la puerta de entrada al Tohoku y Hokkaido via Shinkansen",
      "El Museo del Ferrocarril de Omiya es el más grande y completo de Japón",
      "Tiene más de 200 restaurantes en el complejo comercial de la estación"
    ],
    facilities:["Conbini","Shinkansen","Museo del Ferrocarril","Shopping"]
  },
  "saitama_shintoshin": {
    id:"saitama_shintoshin", name:"Saitama-Shintoshin", nameJa:"さいたま新都心",
    lat:35.8954, lng:139.6318,
    operator:"JR East",
    dailyPassengers:200000, opened:2000,
    description:"Estación construida en el año 2000 para el nuevo centro administrativo de Saitama. Sede del Saitama Super Arena.",
    curiosities:[
      "El Saitama Super Arena tiene capacidad para 37.000 personas",
      "Fue construida para la fusión municipal de Saitama en 2001",
      "Es una de las estaciones más recientes de toda la línea"
    ],
    facilities:["Conbini","Arena","Oficinas gubernamentales"]
  },
  "yono": {
    id:"yono", name:"Yono", nameJa:"与野",
    lat:35.8805, lng:139.6290,
    operator:"JR East",
    dailyPassengers:50000, opened:1883,
    description:"Estación tranquila en la ciudad de Saitama. Barrio residencial con buenas conexiones al centro.",
    curiosities:[
      "Una de las estaciones más antiguas de la línea, abierta en 1883",
      "La zona es conocida por sus cerezos en primavera"
    ],
    facilities:["Conbini"]
  },
  "urawa": {
    id:"urawa", name:"Urawa", nameJa:"浦和",
    lat:35.8586, lng:139.6455,
    operator:"JR East",
    dailyPassengers:420000, opened:1883,
    description:"Capital histórica de la prefectura de Saitama y sede del famoso club de fútbol Urawa Red Diamonds.",
    curiosities:[
      "El Urawa Red Diamonds es uno de los clubs de fútbol más laureados de Japón",
      "La prefectura de Saitama tiene su sede gubernamental cerca de aquí",
      "Es conocida como ciudad universitaria con campus de varias instituciones"
    ],
    facilities:["Conbini","Estadio cercano","Zona universitaria"]
  },
  "minami_urawa": {
    id:"minami_urawa", name:"Minami-Urawa", nameJa:"南浦和",
    lat:35.8381, lng:139.6518,
    operator:"JR East",
    dailyPassengers:310000, opened:1961,
    description:"Importante nodo de intercambio entre la Keihin-Tohoku y la Musashino Line, que conecta con el área oeste del Gran Tokio.",
    curiosities:[
      "La Musashino Line permite acceder al aeropuerto de Narita sin pasar por Tokio",
      "Es un nodo clave para los viajes transversales por la región metropolitana"
    ],
    facilities:["Conbini","Intercambio Musashino Line"]
  },
  "warabi": {
    id:"warabi", name:"Warabi", nameJa:"蕨",
    lat:35.8240, lng:139.6763,
    operator:"JR East",
    dailyPassengers:90000, opened:1895,
    description:"Estación en Warabi, la ciudad más pequeña por superficie de la prefectura de Saitama.",
    curiosities:[
      "Warabi es la ciudad más densa y pequeña de Saitama",
      "Tiene una gran comunidad de inmigrantes, especialmente latinoamericanos",
      "El mercado local conserva un sabor de shitamachi auténtico"
    ],
    facilities:["Conbini","Mercado local"]
  },
  "nishi_kawaguchi": {
    id:"nishi_kawaguchi", name:"Nishi-Kawaguchi", nameJa:"西川口",
    lat:35.8071, lng:139.7064,
    operator:"JR East",
    dailyPassengers:110000, opened:1958,
    description:"Estación en Kawaguchi conocida por su activa zona de ocio nocturno y su gran comunidad china.",
    curiosities:[
      "Tiene una de las comunidades chinas más grandes del área de Tokio",
      "La zona de entretenimiento frente a la estación es muy activa por las noches"
    ],
    facilities:["Conbini","Restaurantes chinos"]
  },
  "kawaguchi": {
    id:"kawaguchi", name:"Kawaguchi", nameJa:"川口",
    lat:35.7994, lng:139.7200,
    operator:"JR East",
    dailyPassengers:200000, opened:1914,
    description:"Principal estación de Kawaguchi, históricamente famosa por su industria de fundición y moldes de hierro.",
    curiosities:[
      "Kawaguchi fue el principal productor de hierro fundido artístico del Japón Meiji",
      "El museo de Fundición Kawaguchi documenta esta historia industrial",
      "La ciudad tiene una de las tasas de crecimiento más altas de la región"
    ],
    facilities:["Conbini","Museo industrial"]
  },
  "akabane": {
    id:"akabane", name:"Akabane", nameJa:"赤羽",
    lat:35.7784, lng:139.7213,
    operator:"JR East",
    dailyPassengers:590000, opened:1885,
    description:"Gran nodo ferroviario en el norte de Tokio con cuatro líneas JR. Zona conocida por su ambiente de izakaya y carácter obrero.",
    curiosities:[
      "Tiene fama de ser uno de los barrios con más izakaya por metro cuadrado de Tokio",
      "El festival de otoño de Akabane es de los más tradicionales del norte de Tokio",
      "Las cuatro líneas que convergen aquí la hacen un hub sorprendentemente importante"
    ],
    facilities:["Conbini","Zona de izakaya","Mercado"]
  },
  "higashi_jujo": {
    id:"higashi_jujo", name:"Higashi-Jujo", nameJa:"東十条",
    lat:35.7673, lng:139.7246,
    operator:"JR East",
    dailyPassengers:60000, opened:1931,
    description:"Pequeña estación residencial en el norte de Tokio con ambiente local auténtico.",
    curiosities:[
      "Una de las estaciones menos conocidas de la línea pero con mucho carácter",
      "El barrio conserva callejuelas y tiendas de la era Showa"
    ],
    facilities:["Conbini"]
  },
  "jujo": {
    id:"jujo", name:"Jujo", nameJa:"十条",
    lat:35.7599, lng:139.7202,
    operator:"JR East",
    dailyPassengers:75000, opened:1931,
    description:"Estación en el barrio de Jujo, conocido por su mercado cubierto retro y su ambiente de shitamachi auténtico.",
    curiosities:[
      "El mercado cubierto Jujo Ginza es uno de los más auténticos que sobreviven en Tokio",
      "La zona fue popular en la era Showa y mantiene ese carácter nostálgico"
    ],
    facilities:["Conbini","Mercado cubierto"]
  },
  "oji": {
    id:"oji", name:"Oji", nameJa:"王子",
    lat:35.7518, lng:139.7207,
    operator:"JR East / Toei Toden",
    dailyPassengers:140000, opened:1883,
    description:"Estación histórica en el norte de Tokio, conocida por el Parque Asukayama y la conexión con el tranvía Arakawa.",
    curiosities:[
      "El Parque Asukayama fue uno de los primeros parques públicos de Japón (1873)",
      "La conexión con el tranvía Arakawa es la única en esta parte de Tokio",
      "Históricamente era zona de fabricación de papel que se exportaba a todo el país"
    ],
    facilities:["Conbini","Parque histórico","Tranvía"]
  },
  "kami_nakazato": {
    id:"kami_nakazato", name:"Kami-Nakazato", nameJa:"上中里",
    lat:35.7451, lng:139.7416,
    operator:"JR East",
    dailyPassengers:20000, opened:1931,
    description:"Una de las estaciones más pequeñas y tranquilas de la línea, en el límite entre los distritos de Kita y Arakawa.",
    curiosities:[
      "Una de las estaciones con menos pasajeros de toda la Keihin-Tohoku",
      "El barrio conserva casas y comercios de estilo Showa"
    ],
    facilities:["Conbini"]
  },
  "kawasaki": {
    id:"kawasaki", name:"Kawasaki", nameJa:"川崎",
    lat:35.5310, lng:139.7027,
    operator:"JR East / Keikyu",
    dailyPassengers:870000, opened:1872,
    description:"Principal estación de la ciudad industrial de Kawasaki, entre Tokio y Yokohama. Hub del corredor Tokio-Yokohama.",
    curiosities:[
      "Kawasaki es la tercera ciudad más poblada de la prefectura de Kanagawa",
      "El área industrial es famosa por sus paisajes de fábricas iluminadas por la noche",
      "El festival de Kawasaki es conocido por ser uno de los más excéntricos del Japón"
    ],
    facilities:["Conbini","Shopping","Conexión Keikyu a Haneda"]
  },
  "tsurumi": {
    id:"tsurumi", name:"Tsurumi", nameJa:"鶴見",
    lat:35.5080, lng:139.6796,
    operator:"JR East",
    dailyPassengers:280000, opened:1872,
    description:"Estación histórica en Yokohama que formó parte del primer ferrocarril japonés.",
    curiosities:[
      "Formó parte del tramo inaugural del primer ferrocarril de Japón en 1872",
      "El Gran Templo Soto Zen de Sojiji está a 10 minutos caminando",
      "La zona fue históricamente centro de industria química y petrolera"
    ],
    facilities:["Conbini","Templo Sojiji"]
  },
  "shin_koyasu": {
    id:"shin_koyasu", name:"Shin-Koyasu", nameJa:"新子安",
    lat:35.4940, lng:139.6411,
    operator:"JR East",
    dailyPassengers:55000, opened:1944,
    description:"Pequeña estación industrial al norte de Yokohama.",
    curiosities:[
      "La zona fue históricamente centro de industria naval",
      "Es una de las estaciones menos concurridas al sur de la línea"
    ],
    facilities:["Conbini"]
  },
  "higashi_kanagawa": {
    id:"higashi_kanagawa", name:"Higashi-Kanagawa", nameJa:"東神奈川",
    lat:35.4833, lng:139.6325,
    operator:"JR East",
    dailyPassengers:200000, opened:1908,
    description:"Nodo de intercambio entre la Keihin-Tohoku y la Yokohama Line al norte de Yokohama.",
    curiosities:[
      "Es la puerta norte de Yokohama para las líneas locales hacia el interior de Kanagawa",
      "La zona industrial ha dado paso a nuevos desarrollos residenciales"
    ],
    facilities:["Conbini","Intercambio Yokohama Line"]
  },
  "yokohama": {
    id:"yokohama", name:"Yokohama", nameJa:"横浜",
    lat:35.4657, lng:139.6222,
    operator:"JR East / Keikyu / Minatomirai",
    dailyPassengers:2100000, opened:1872,
    description:"Terminal sur de la Keihin-Tohoku y segunda ciudad más grande de Japón. Puerto histórico que fue el primer punto de contacto de Japón con Occidente.",
    curiosities:[
      "Fue uno de los primeros puertos abiertos al comercio extranjero en 1859",
      "Chinatown de Yokohama es la más grande de Japón con más de 600 restaurantes",
      "El barrio de Yamashita conserva el ambiente portuario del Japón Meiji"
    ],
    facilities:["Conbini","Puerto","Chinatown","Minatomirai"]
  },


  // ── KEIHIN-TOHOKU — estaciones faltantes ─────────────────────

  // Entre Shinagawa y Kawasaki
  "oimachi": {
    id:"oimachi", name:"Oimachi", nameJa:"大井町",
    lat:35.6055, lng:139.7308,
    operator:"JR East / Tokyu / Rinkai",
    dailyPassengers:490000, opened:1901,
    description:"Gran nodo de intercambio en el sur de Tokio con la Tokyu Oimachi Line y la Rinkai Line. Zona comercial dinámica con una de las calles de izakaya más concurridas de Tokio.",
    curiosities:[
      "La calle de izakaya frente a la estación es una de las más animadas del sur de Tokio",
      "La Rinkai Line conecta con Odaiba y el Aeropuerto de Haneda",
      "El área fue revitalizada con el complejo commercial Atre en los años 2000"
    ],
    facilities:["Conbini","Izakaya","Shopping","Intercambio Tokyu"]
  },
  "omori": {
    id:"omori", name:"Omori", nameJa:"大森",
    lat:35.5826, lng:139.7370,
    operator:"JR East",
    dailyPassengers:240000, opened:1872,
    description:"Una de las estaciones más antiguas del primer ferrocarril japonés. Famosa por el descubrimiento del yacimiento de conchas Omori Shell Mound, primer registro arqueológico científico de Japón.",
    curiosities:[
      "El yacimiento Shell Mound (1877) fue el primer sitio arqueológico excavado científicamente en Japón",
      "Fue estación del primer ferrocarril japonés inaugurado en 1872",
      "El barrio tiene ambiente local auténtico con mercados y comercios tradicionales"
    ],
    facilities:["Conbini","Zona histórica"]
  },
  "kamata": {
    id:"kamata", name:"Kamata", nameJa:"蒲田",
    lat:35.5618, lng:139.7148,
    operator:"JR East / Tokyu / Keikyu",
    dailyPassengers:520000, opened:1904,
    description:"Bullicioso hub comercial en el sur de Tokio. Famosa por su ambiente popular, sus yakitori y como escenario de la icónica película de Juzo Itami 'El funeral'.",
    curiosities:[
      "Escenario de la película 'La mujer del taxista' de Juzo Itami (1987)",
      "Famosa por su ambiente de shitamachi con mercados cubiertos y yakitori",
      "La Tokyu Ikegami Line y la Tokyu Tama Line tienen su terminal aquí",
      "Zona conocida por su vibrante vida nocturna y sus restaurantes económicos"
    ],
    facilities:["Conbini","Yakitori","Shopping","Intercambio Tokyu"]
  },

  // Línea Negishi — extensión sur de Yokohama hasta Ofuna
  "sakuragicho": {
    id:"sakuragicho", name:"Sakuragicho", nameJa:"桜木町",
    lat:35.4506, lng:139.6313,
    operator:"JR East / Minatomirai",
    dailyPassengers:330000, opened:1872,
    description:"La estación más antigua de Japón, siendo la terminal original del primer ferrocarril (1872). Hoy puerta al moderno distrito de Minato Mirai y al famoso Cosmo World.",
    curiosities:[
      "Es la heredera de la primera estación de Japón, inaugurada en 1872 (llamada entonces Yokohama)",
      "El Cosmo Clock 21, una de las ruedas de la fortuna más grandes del mundo, está a 5 minutos",
      "La telecabina YOKOHAMA AIR CABIN conecta con el parque Rinko desde 2021",
      "El museo de Historia del Ferrocarril Yokohama documenta el origen del tren en Japón"
    ],
    facilities:["Conbini","Minatomirai","Rueda de la fortuna","Museo ferroviario"]
  },
  "kannai": {
    id:"kannai", name:"Kannai", nameJa:"関内",
    lat:35.4434, lng:139.6380,
    operator:"JR East",
    dailyPassengers:220000, opened:1872,
    description:"El corazón histórico y administrativo de Yokohama. Kannai significa literalmente 'dentro de la barrera', la zona que antiguamente delimitaba el área de residencia extranjera.",
    curiosities:[
      "Kannai significa 'dentro de la barrera', zona reservada a extranjeros en el Japón Meiji",
      "El Estadio de Yokohama, sede histórica del béisbol, está a 5 minutos",
      "El barrio de Bluff (Yamate) con sus mansiones victorianas está cerca",
      "La China Town más grande de Japón está a 10 minutos caminando"
    ],
    facilities:["Conbini","Zona histórica","Estadio de béisbol"]
  },
  "isogo": {
    id:"isogo", name:"Isogo", nameJa:"磯子",
    lat:35.3977, lng:139.6302,
    operator:"JR East",
    dailyPassengers:95000, opened:1929,
    description:"Estación en el distrito industrial costero de Isogo al sur de Yokohama, con vistas a la bahía.",
    curiosities:[
      "La zona alberga importantes instalaciones de la industria naval y química",
      "Desde la estación se tienen vistas al puerto de Yokohama en días despejados"
    ],
    facilities:["Conbini"]
  },
  "minami_isogo": {
    id:"minami_isogo", name:"Minami-Isogo", nameJa:"南磯子",
    lat:35.3823, lng:139.6273,
    operator:"JR East",
    dailyPassengers:25000, opened:1970,
    description:"Pequeña estación residencial al sur de Isogo.",
    curiosities:[
      "Es una de las estaciones más pequeñas de la línea Negishi",
      "Zona tranquila con acceso a parques costeros de la bahía"
    ],
    facilities:["Conbini"]
  },
  "shin_sugita": {
    id:"shin_sugita", name:"Shin-Sugita", nameJa:"新杉田",
    lat:35.3701, lng:139.6234,
    operator:"JR East / Shikisen",
    dailyPassengers:85000, opened:1970,
    description:"Nodo de intercambio con el Seaside Line, el tren automático que conecta con el moderno barrio de Kanazawa Hakkei y las playas del sur de Yokohama.",
    curiosities:[
      "El Seaside Line es un tren automático sin conductor que recorre la costa sur de Yokohama",
      "Da acceso a las playas y parques de la zona de Kanazawa"
    ],
    facilities:["Conbini","Intercambio Seaside Line"]
  },
  "yokodai": {
    id:"yokodai", name:"Yokodai", nameJa:"洋光台",
    lat:35.3712, lng:139.5930,
    operator:"JR East",
    dailyPassengers:55000, opened:1973,
    description:"Barrio residencial construido en los años 70 como ciudad satélite de Yokohama en las colinas del sur.",
    curiosities:[
      "Fue diseñado como modelo de ciudad satélite planificada en los años 70",
      "Los bloques residenciales conservan la arquitectura característica de la época"
    ],
    facilities:["Conbini","Zona residencial"]
  },
  "konan_dai": {
    id:"konan_dai", name:"Konan-dai", nameJa:"港南台",
    lat:35.3647, lng:139.5776,
    operator:"JR East",
    dailyPassengers:70000, opened:1973,
    description:"Centro del distrito residencial de Konan en las colinas al sur de Yokohama, con el famoso Jardín Botánico de Yokohama.",
    curiosities:[
      "El Jardín Botánico de Yokohama (Yokohama Botanic Garden) está a 10 minutos",
      "Zona residencial tranquila con uno de los mejores índices de calidad de vida de Kanagawa"
    ],
    facilities:["Conbini","Jardín botánico"]
  },
  "hongodai": {
    id:"hongodai", name:"Hongodai", nameJa:"本郷台",
    lat:35.3557, lng:139.5505,
    operator:"JR East",
    dailyPassengers:45000, opened:1980,
    description:"Estación tranquila en el límite entre Yokohama y Kamakura, cerca del Centro de Investigación de Kanagawa.",
    curiosities:[
      "Es la estación más nueva de la línea Negishi, inaugurada en 1980",
      "Alberga el Centro de Investigación de la Prefectura de Kanagawa"
    ],
    facilities:["Conbini"]
  },
  "ofuna": {
    id:"ofuna", name:"Ofuna", nameJa:"大船",
    lat:35.3395, lng:139.5330,
    operator:"JR East / Shonan Monorail",
    dailyPassengers:480000, opened:1887,
    description:"Terminal sur de la Keihin-Tohoku/Negishi Line y gran nodo ferroviario. Puerta a Kamakura y a la costa de Shonan, famosa por su enorme estatua de Kannon.",
    curiosities:[
      "La estatua de Kannon de Ofuna (25m de altura) domina el paisaje desde los trenes",
      "El monorraíl Shonan conecta con las playas de Enoshima en 14 minutos",
      "Kamakura, con sus templos y el Gran Buda, está a solo dos estaciones",
      "Fue un importante nudo ferroviario desde la era Meiji por su posición estratégica"
    ],
    facilities:["Conbini","Acceso a Kamakura","Monorraíl Shonan","Zona histórica"]
  },

  // ── CHUO LINE — estaciones exclusivas ────────────────────────
  "ochanomizu": {
    id:"ochanomizu", name:"Ochanomizu", nameJa:"御茶ノ水",
    lat:35.6997, lng:139.7659,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:550000, opened:1904,
    description:"Encrucijada cultural entre el barrio universitario, los instrumentos musicales y los deportes. Ochanomizu significa literalmente 'agua del té', por un manantial que abastecía al Shogunato.",
    curiosities:[
      "La calle Ochanomizu es la meca mundial de las tiendas de guitarras y instrumentos musicales",
      "La Universidad de Meiji y otras cinco universidades rodean la estación",
      "El barrio de Kanda Jinbocho con sus librerías está a 5 minutos",
      "El nombre viene de un manantial que se usaba para preparar el té del Shogun Tokugawa"
    ],
    facilities:["Conbini","Tiendas de instrumentos","Zona universitaria"]
  },
  "yotsuya": {
    id:"yotsuya", name:"Yotsuya", nameJa:"四ツ谷",
    lat:35.6864, lng:139.7300,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:300000, opened:1894,
    description:"Barrio tranquilo y elegante entre Shinjuku y el Palacio Imperial. Conocido por sus capillas y por la Universidad Sophia, una de las más prestigiosas de Japón.",
    curiosities:[
      "La Universidad Sophia (Jochi Daigaku) está al lado de la estación",
      "El Palacio Akasaka, residencia oficial de los huéspedes de Estado, está a 10 minutos",
      "La historia de terror japonesa Yotsuya Kaidan tiene aquí su escenario original",
      "El foso del Palacio Imperial con sus cerezos está a 15 minutos caminando"
    ],
    facilities:["Conbini","Zona universitaria","Parques"]
  },
  "nakano": {
    id:"nakano", name:"Nakano", nameJa:"中野",
    lat:35.7057, lng:139.6655,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:680000, opened:1889,
    description:"El Akihabara alternativo de Tokio. El Nakano Broadway es el templo del manga y anime de culto, con tiendas de coleccionismo imposibles de encontrar en otro lugar.",
    curiosities:[
      "Nakano Broadway (1966) tiene más de 300 tiendas de manga, anime y coleccionismo",
      "Mandarake, la cadena de tiendas de segunda mano de manga más grande del mundo, nació aquí",
      "A diferencia de Akihabara, Broadway mantiene un carácter más underground y de culto",
      "El Sun Mall, el pasaje cubierto frente a la estación, es uno de los más animados de Tokio"
    ],
    facilities:["Conbini","Manga y anime","Shopping","Sun Mall"]
  },
  "higashi_nakano": {
    id:"higashi_nakano", name:"Higashi-Nakano", nameJa:"東中野",
    lat:35.7066, lng:139.6780,
    operator:"JR East / Toei",
    dailyPassengers:180000, opened:1921,
    description:"Pequeña estación residencial entre Nakano y Shinjuku, con ambiente de barrio tranquilo.",
    curiosities:[
      "La zona tiene una colonia artística activa con galerías y espacios independientes",
      "El río Kanda corre bajo el barrio, con parques lineales poco conocidos"
    ],
    facilities:["Conbini"]
  },
  "asagaya": {
    id:"asagaya", name:"Asagaya", nameJa:"阿佐ヶ谷",
    lat:35.7057, lng:139.6364,
    operator:"JR East",
    dailyPassengers:270000, opened:1922,
    description:"Barrio bohemio de músicos y artistas. El festival de Tanabata de Asagaya es uno de los más coloridos y auténticos de Tokio.",
    curiosities:[
      "El festival Asagaya Tanabata (agosto) llena la calle de enormes decoraciones de papel",
      "La zona tiene la mayor concentración de estudios de jazz y live houses del oeste de Tokio",
      "El escritor Osamu Dazai vivió en el barrio durante parte de su vida"
    ],
    facilities:["Conbini","Live houses","Mercado cubierto"]
  },
  "ogikubo": {
    id:"ogikubo", name:"Ogikubo", nameJa:"荻窪",
    lat:35.7055, lng:139.6199,
    operator:"JR East / Tokyo Metro",
    dailyPassengers:380000, opened:1891,
    description:"Histórico barrio residencial famoso por sus tiendas de antigüedades y su ramen. El primer ministro Tanaka Kakuei vivió aquí, lo que le dio el apodo de 'pueblo del primer ministro'.",
    curiosities:[
      "Tiene la mayor concentración de tiendas de antigüedades y objetos de segunda mano de Tokio oeste",
      "El ramen de Ogikubo tiene una escena propia con estilos únicos en varios locales históricos",
      "El primer ministro Tanaka vivió aquí, y varios políticos importantes le siguieron"
    ],
    facilities:["Conbini","Antigüedades","Ramen","Metro Marunouchi"]
  },
  "nishi_ogikubo": {
    id:"nishi_ogikubo", name:"Nishi-Ogikubo", nameJa:"西荻窪",
    lat:35.7053, lng:139.6038,
    operator:"JR East",
    dailyPassengers:130000, opened:1929,
    description:"El barrio más bohemio y auténtico del corredor Chuo. Famoso por sus cafés de especialidad, tiendas de antigüedades independientes y su comunidad artística.",
    curiosities:[
      "Considerado por los tokiotas como uno de los barrios con más personalidad propia",
      "Tiene más tiendas de antigüedades por metro cuadrado que casi cualquier otro barrio de Tokio",
      "El mercadillo mensual de antigüedades atrae coleccionistas de toda la ciudad"
    ],
    facilities:["Conbini","Cafés de especialidad","Antigüedades"]
  },
  "kichijoji": {
    id:"kichijoji", name:"Kichijoji", nameJa:"吉祥寺",
    lat:35.7028, lng:139.5797,
    operator:"JR East / Keio",
    dailyPassengers:900000, opened:1899,
    description:"Consistentemente elegida la ciudad más deseable para vivir en el Gran Tokio. Combina el Parque Inokashira, una vibrante escena musical, el Museo Ghibli cercano y una vida comercial única.",
    curiosities:[
      "Votada año tras año como el barrio más deseable para vivir en Tokio",
      "El Museo Ghibli de Mitaka está a 15 minutos caminando por el parque Inokashira",
      "El Parque Inokashira, con su estanque, es uno de los más queridos de Tokio",
      "La calle Harmonica Yokocho es un laberinto de bares diminutos de posguerra"
    ],
    facilities:["Conbini","Parque Inokashira","Shopping","Live houses"]
  },
  "mitaka": {
    id:"mitaka", name:"Mitaka", nameJa:"三鷹",
    lat:35.6983, lng:139.5604,
    operator:"JR East",
    dailyPassengers:420000, opened:1930,
    description:"Ciudad al oeste de Tokio famosa mundialmente por el Museo Ghibli del Studio de Hayao Miyazaki. Combina zona residencial tranquila con acceso directo al parque Inokashira.",
    curiosities:[
      "El Museo Ghibli, diseñado por el propio Miyazaki, requiere reserva con meses de antelación",
      "El autobús del Totoro hace el recorrido desde la estación hasta el museo",
      "El escritor Osamu Dazai se suicidó en el río Tamagawa Josui a 5 minutos de la estación"
    ],
    facilities:["Conbini","Acceso Museo Ghibli","Parques"]
  },
  "musashi_sakai": {
    id:"musashi_sakai", name:"Musashi-Sakai", nameJa:"武蔵境",
    lat:35.7024, lng:139.5451,
    operator:"JR East / Seibu",
    dailyPassengers:200000, opened:1889,
    description:"Nodo de intercambio entre la Chuo Line y la Seibu Tamagawa Line en el oeste del Gran Tokio.",
    curiosities:[
      "La Seibu Tamagawa Line conecta con las riberas del río Tama",
      "Zona residencial tranquila con fuerte comunidad universitaria"
    ],
    facilities:["Conbini","Intercambio Seibu"]
  },
  "higashi_koganei": {
    id:"higashi_koganei", name:"Higashi-Koganei", nameJa:"東小金井",
    lat:35.6991, lng:139.5286,
    operator:"JR East",
    dailyPassengers:100000, opened:1964,
    description:"Barrio residencial al oeste de Tokio con ambiente universitario y campus de la Universidad de Tokio de Agricultura.",
    curiosities:[
      "El campus de Tokio University of Agriculture and Technology está a 10 minutos",
      "La zona tiene parques fluviales a lo largo del canal Tamagawa Josui"
    ],
    facilities:["Conbini","Zona universitaria"]
  },
  "musashi_koganei": {
    id:"musashi_koganei", name:"Musashi-Koganei", nameJa:"武蔵小金井",
    lat:35.6996, lng:139.5032,
    operator:"JR East",
    dailyPassengers:210000, opened:1925,
    description:"Centro urbano de la ciudad de Koganei, famosa por el Parque Koganei, el mayor espacio verde del oeste del Gran Tokio.",
    curiosities:[
      "El Parque Koganei (80 hectáreas) es el mayor parque metropolitano del oeste de Tokio",
      "El Edo-Tokyo Open Air Architectural Museum dentro del parque preserva edificios históricos reubicados"
    ],
    facilities:["Conbini","Parque Koganei","Museo al aire libre"]
  },
  "kokubunji": {
    id:"kokubunji", name:"Kokubunji", nameJa:"国分寺",
    lat:35.7016, lng:139.4780,
    operator:"JR East / Seibu / Keio",
    dailyPassengers:310000, opened:1889,
    description:"Gran nodo de intercambio que toma su nombre del antiguo templo provincial Kokubunji del período Nara. Hub del oeste del Gran Tokio con tres líneas.",
    curiosities:[
      "El templo Kokubunji original data del siglo VIII, encargado por el Emperador Shomu",
      "Las excavaciones arqueológicas del templo son visitables en el parque histórico cercano",
      "La Seibu Kokubunji Line y la Keio Sagamihara Line parten desde aquí"
    ],
    facilities:["Conbini","Parque histórico","Intercambio Seibu y Keio"]
  },
  "nishi_kokubunji": {
    id:"nishi_kokubunji", name:"Nishi-Kokubunji", nameJa:"西国分寺",
    lat:35.7010, lng:139.4637,
    operator:"JR East",
    dailyPassengers:95000, opened:1973,
    description:"Estación de intercambio entre la Chuo Line y la Musashino Line, con acceso al corredor este-oeste sin pasar por Tokio.",
    curiosities:[
      "La Musashino Line permite llegar a Narita o Yokohama sin pasar por el centro",
      "Es una de las estaciones más nuevas de la línea, construida en 1973"
    ],
    facilities:["Conbini","Intercambio Musashino Line"]
  },
  "kunitachi": {
    id:"kunitachi", name:"Kunitachi", nameJa:"国立",
    lat:35.6914, lng:139.4445,
    operator:"JR East",
    dailyPassengers:220000, opened:1926,
    description:"Una de las ciudades más elegantes del oeste de Tokio, diseñada como ciudad jardín con avenidas arboladas que parten de la estación. Campus de la Universidad Hitotsubashi.",
    curiosities:[
      "La Avenida Daigaku, bordeada de cerezos, parte directamente desde la estación sur",
      "Fue planificada en 1926 como ciudad jardín con trazado radial desde la estación",
      "La Universidad Hitotsubashi, élite de las ciencias sociales japonesas, está aquí"
    ],
    facilities:["Conbini","Universidad Hitotsubashi","Avenida de cerezos"]
  },
  "tachikawa": {
    id:"tachikawa", name:"Tachikawa", nameJa:"立川",
    lat:35.6978, lng:139.4130,
    operator:"JR East / Tama Monorail",
    dailyPassengers:890000, opened:1889,
    description:"La capital no oficial del oeste de Tokio. Hub ferroviario masivo con el Tama Monorail y puerta al Parque Showa Memorial, uno de los mejores de Japón.",
    curiosities:[
      "El Parque Showa Memorial (165 hectáreas) es famoso por sus tulipanes y cosmos en otoño",
      "El Tama Monorail conecta con el norte y sur de la región del Tama",
      "IKEA, Lemon Gas y varias cadenas de entretenimiento tienen aquí sus tiendas más grandes del área"
    ],
    facilities:["Conbini","Parque Showa","Monorail Tama","Shopping"]
  },
  "hino": {
    id:"hino", name:"Hino", nameJa:"日野",
    lat:35.6889, lng:139.3940,
    operator:"JR East",
    dailyPassengers:130000, opened:1901,
    description:"Ciudad del oeste del Gran Tokio famosa por ser el hogar del Shinsengumi, la mítica milicia samurái del final del período Edo.",
    curiosities:[
      "El Shinsengumi, la legendaria policía samurái del Shogunato, nació en esta ciudad",
      "El festival anual del Shinsengumi atrae a decenas de miles de visitantes con recreaciones históricas",
      "El río Tama corre al sur de la ciudad con parques naturales y zonas de camping"
    ],
    facilities:["Conbini","Museos históricos"]
  },
  "toyoda": {
    id:"toyoda", name:"Toyoda", nameJa:"豊田",
    lat:35.6752, lng:139.3699,
    operator:"JR East",
    dailyPassengers:140000, opened:1901,
    description:"Barrio residencial tranquilo en la ciudad de Hino, con acceso a las orillas del río Tama y sus rutas de senderismo.",
    curiosities:[
      "El depósito central de trenes de la Chuo Line está en Toyoda",
      "Las orillas del Tama a 15 minutos ofrecen rutas de senderismo poco conocidas"
    ],
    facilities:["Conbini"]
  },
  "hachioji": {
    id:"hachioji", name:"Hachioji", nameJa:"八王子",
    lat:35.6558, lng:139.3388,
    operator:"JR East / Keio",
    dailyPassengers:690000, opened:1889,
    description:"Segunda ciudad más grande de Tokio con 570.000 habitantes. Capital académica del oeste de Tokio con más de 20 universidades y hub histórico de la ruta Koshu Kaido.",
    curiosities:[
      "Tiene más universidades por habitante que cualquier otra ciudad de la prefectura de Tokio",
      "Era una parada clave de la histórica ruta Koshu Kaido que unía Edo con el interior de Japón",
      "El castillo de Hachioji fue destruido en 1590 por las fuerzas de Toyotomi Hideyoshi",
      "Las montañas Takao-san están a solo 10 minutos en tren"
    ],
    facilities:["Conbini","Universidades","Shopping","Acceso a Takao"]
  },
  "nishi_hachioji": {
    id:"nishi_hachioji", name:"Nishi-Hachioji", nameJa:"西八王子",
    lat:35.6481, lng:139.3062,
    operator:"JR East",
    dailyPassengers:90000, opened:1929,
    description:"Estación tranquila al oeste de Hachioji, con acceso a las laderas del Monte Takao y zonas naturales.",
    curiosities:[
      "Es el punto de partida de varias rutas de senderismo hacia el Monte Takao",
      "El ambiente es notablemente más rural que el resto del corredor Chuo"
    ],
    facilities:["Conbini","Rutas de senderismo"]
  },
  "takao": {
    id:"takao", name:"Takao", nameJa:"高尾",
    lat:35.6426, lng:139.2825,
    operator:"JR East / Keio",
    dailyPassengers:175000, opened:1901,
    description:"Terminal de la Chuo Rapid Line y puerta al Monte Takao (599m), la montaña más visitada del mundo con más de 2,5 millones de visitantes al año.",
    curiosities:[
      "El Monte Takao recibe más de 2,5 millones de visitantes al año, más que el Fuji",
      "El teleférico Takao-san Ropeway sube hasta los 472m de altitud",
      "El templo Yakuo-in en la cima data del año 744 d.C.",
      "En días despejados desde la cima se ve el Monte Fuji perfectamente"
    ],
    facilities:["Conbini","Acceso Monte Takao","Teleférico","Templo Yakuo-in"]
  },

  // ── SOYA MAIN LINE ────────────────────────────────────────────
  "asahikawa": {
    id:"asahikawa", name:"Asahikawa", nameJa:"旭川",
    lat:43.7710, lng:142.3648,
    operator:"JR Hokkaido",
    dailyPassengers:280000, opened:1898,
    description:"Segunda ciudad de Hokkaido y punto de partida de la Soya Main Line. Hub ferroviario del interior de la isla, famosa por su zoo de clase mundial y por registrar las temperaturas más bajas de Japón en invierno.",
    curiosities:[
      "El Zoo de Asahikawa es el más visitado de Japón por su innovador diseño que deja a los animales en semilibertad",
      "En enero de 1902 se registraron aquí -41 grados, el récord histórico de temperatura en Japón",
      "Es el nodo donde confluyen cuatro líneas JR, convirtiendo la ciudad en la capital ferroviaria de Hokkaido",
      "El mercado de ramen de Asahikawa tiene un estilo propio reconocido a nivel nacional"
    ],
    facilities:["Conbini","Hub ferroviario","Acceso al Zoo","Ramen"]
  },
  "nagayama": {
    id:"nagayama", name:"Nagayama", nameJa:"永山",
    lat:43.8197, lng:142.3614,
    operator:"JR Hokkaido",
    dailyPassengers:1800, opened:1898,
    description:"Primera parada al norte de Asahikawa, en los arrabales de la ciudad. Zona agrícola con vastos campos que anuncian el paisaje que dominará todo el recorrido hacia el norte.",
    curiosities:[
      "Fue una de las primeras estaciones construidas por el Gobierno de Hokkaido en 1898",
      "Los campos de arroz y girasoles en verano crean uno de los paisajes más fotogénicos de la línea"
    ],
    facilities:["Conbini"]
  },
  "pippu": {
    id:"pippu", name:"Pippu", nameJa:"比布",
    lat:43.8897, lng:142.4697,
    operator:"JR Hokkaido",
    dailyPassengers:400, opened:1898,
    description:"Pequeña ciudad agrícola famosa en Japón por su peculiar campaña publicitaria de los años 90 protagonizada por el actor Pierrot. El nombre Pippu viene del ainu y significa 'lugar de hierbas'.",
    curiosities:[
      "La campaña publicitaria con el actor cómico Pippu-cho fue un fenómeno mediático nacional en los 90",
      "El nombre viene del idioma ainu: pie-p significa lugar donde crece cierto tipo de hierba",
      "Es uno de los mayores productores de cebolla de Hokkaido"
    ],
    facilities:["Conbini"]
  },
  "wassamu": {
    id:"wassamu", name:"Wassamu", nameJa:"和寒",
    lat:44.0603, lng:142.4286,
    operator:"JR Hokkaido",
    dailyPassengers:300, opened:1900,
    description:"Ciudad conocida por ser la mayor productora de col (repollo) de Japón. En verano los campos de col se extienden hasta el horizonte en todas las direcciones.",
    curiosities:[
      "Produce el 10% de toda la col de Japón, ganándose el apodo de 'ciudad de la col'",
      "El festival de la col en septiembre incluye recetas de todo el país",
      "Las temperaturas en invierno bajan habitualmente de -20 grados"
    ],
    facilities:["Conbini"]
  },
  "kenbuchi": {
    id:"kenbuchi", name:"Kenbuchi", nameJa:"剣淵",
    lat:44.1800, lng:142.4536,
    operator:"JR Hokkaido",
    dailyPassengers:250, opened:1901,
    description:"Pequeña ciudad agrícola en el corazón del centro de Hokkaido, famosa por sus caballos y por el Festival del Libro, que ha convertido a este pueblo de 3.000 habitantes en un destino literario.",
    curiosities:[
      "El Festival del Libro de Kenbuchi es un evento anual único en Japón que atrae visitantes de todo el país",
      "La ciudad tiene una de las mayores concentraciones de caballos por habitante de Hokkaido",
      "La nieve cubre el suelo de noviembre a abril, con acumulaciones de más de 2 metros"
    ],
    facilities:["Conbini","Festival del Libro"]
  },
  "shibetsu": {
    id:"shibetsu", name:"Shibetsu", nameJa:"士別",
    lat:44.1869, lng:142.3939,
    operator:"JR Hokkaido",
    dailyPassengers:1200, opened:1901,
    description:"Ciudad conocida como 'la ciudad del carnero y el samurái' por su historia de colonización por antiguos samuráis reconvertidos en ganaderos en la era Meiji. Importante productora de cordero y lana.",
    curiosities:[
      "Fue colonizada en la era Meiji por ex-samuráis del clan Shonai reconvertidos en granjeros",
      "El museo de la colonización documenta esta historia única de adaptación de la clase guerrera",
      "El cordero de Shibetsu es considerado de los mejores de Japón por su alimentación con pastos naturales"
    ],
    facilities:["Conbini","Museo histórico"]
  },
  "nayoro": {
    id:"nayoro", name:"Nayoro", nameJa:"名寄",
    lat:44.3564, lng:142.4641,
    operator:"JR Hokkaido",
    dailyPassengers:3200, opened:1903,
    description:"La ciudad más grande del norte de Hokkaido y punto de división operativa de la Soya Line. Al norte de aquí los trenes se espacian a uno cada 3-4 horas. Famosa por el 'mochi' de maíz y sus cielos despejados perfectos para la astronomía.",
    curiosities:[
      "Al norte de Nayoro la frecuencia de trenes cae a 3-4 al día, reflejo del despoblamiento rural",
      "Tiene uno de los observatorios astronómicos más activos de Hokkaido por la escasez de contaminación lumínica",
      "El mochi de maíz de Nayoro es un producto local famoso en toda la isla",
      "Es el nodo de la antigua línea Nayoro-Honmombetsu, clausurada en 1989"
    ],
    facilities:["Conbini","Observatorio","Nodo ferroviario norte"]
  },
  "bifuka": {
    id:"bifuka", name:"Bifuka", nameJa:"美深",
    lat:44.4742, lng:142.3342,
    operator:"JR Hokkaido",
    dailyPassengers:350, opened:1912,
    description:"Pueblo en el valle del río Teshio rodeado de bosques de abedules. Famoso por el Canoe Park del río Teshio y por el museo de la antigua línea ferroviaria Bifuka-Nishiokoppe.",
    curiosities:[
      "El río Teshio a su paso por Bifuka es uno de los mejores tramos de piragüismo de Hokkaido",
      "El museo del ferrocarril Bifuka conserva material de la antigua línea clausurada en 1985",
      "Los bosques de abedules en otoño crean un espectáculo de color amarillo dorado"
    ],
    facilities:["Conbini","Canoe Park","Museo ferroviario"]
  },
  "otoineppu": {
    id:"otoineppu", name:"Otoineppu", nameJa:"音威子府",
    lat:44.7381, lng:142.2392,
    operator:"JR Hokkaido",
    dailyPassengers:120, opened:1912,
    description:"Uno de los pueblos más pequeños de Japón con apenas 700 habitantes, pero famoso por tener los fideos soba más oscuros y sabrosos del país, elaborados con alforfón integral con cáscara. El maestro soba del pueblo fue una leyenda nacional.",
    curiosities:[
      "El soba negro de Otoineppu, elaborado con alforfón integral, es famoso en toda Japón",
      "El maestro soba Okui Kenichi convirtió al pueblo en destino gastronómico de culto antes de su muerte en 2021",
      "Es uno de los municipios más despoblados de Japón, con menos de 700 habitantes",
      "Estación clave donde antaño bifurcaba la línea Tenpoku hacia Hamatonbetsu, clausurada en 1989"
    ],
    facilities:["Soba negro","Pequeño museo ferroviario"]
  },
  "teshio_nakagawa": {
    id:"teshio_nakagawa", name:"Teshio-Nakagawa", nameJa:"天塩中川",
    lat:44.8731, lng:142.0761,
    operator:"JR Hokkaido",
    dailyPassengers:180, opened:1922,
    description:"Pueblo a orillas del río Teshio, uno de los ríos más largos de Hokkaido. Desde la estación en verano se ven ciervos y zorros con normalidad en los campos cercanos.",
    curiosities:[
      "El río Teshio es el tercero más largo de Hokkaido y alberga poblaciones de salmón salvaje",
      "Es común ver ciervos sika pastando junto a las vías en los amaneceres",
      "En invierno el río se hiela completamente y los locales practican pesca en hielo"
    ],
    facilities:["Conbini"]
  },
  "horonobe": {
    id:"horonobe", name:"Horonobe", nameJa:"幌延",
    lat:45.0072, lng:141.8461,
    operator:"JR Hokkaido",
    dailyPassengers:220, opened:1922,
    description:"Pueblo en la llanura de Sarobetsu, hogar de una de las mayores instalaciones de investigación de almacenamiento de residuos nucleares de Japón. Rodeado de extensas turberas protegidas con flores silvestres únicas.",
    curiosities:[
      "Alberga el Centro de Investigación de Almacenamiento Profundo de la JAEA, único en Japón",
      "La llanura de Sarobetsu es un humedal protegido con rododendros silvestres en junio",
      "Es hábitat del gallo lira (Tetrao tetrix), especie emblemática del norte de Hokkaido",
      "El ganado de Horonobe produce la leche que se usa en los famosos productos lácteos de la zona"
    ],
    facilities:["Conbini","Centro de investigación nuclear"]
  },
  "toyotomi": {
    id:"toyotomi", name:"Toyotomi", nameJa:"豊富",
    lat:45.1131, lng:141.7658,
    operator:"JR Hokkaido",
    dailyPassengers:280, opened:1922,
    description:"Famosa por sus aguas termales únicas en el mundo: las únicas onsen del planeta que contienen petróleo natural disuelto, lo que les da propiedades únicas para enfermedades de la piel.",
    curiosities:[
      "Las termas de Toyotomi son las únicas del mundo que contienen petróleo natural disuelto",
      "Dermatólogos de todo Japón recomiendan estas aguas para psoriasis y eczema",
      "El olor a petróleo de las aguas es inconfundible y sorprendente para los visitantes",
      "El pueblo descubrió el petróleo en los años 50 al hacer prospecciones, encontrando agua termal con él"
    ],
    facilities:["Onsen de petróleo","Conbini"]
  },
  "minami_wakkanai": {
    id:"minami_wakkanai", name:"Minami-Wakkanai", nameJa:"南稚内",
    lat:45.3903, lng:141.6908,
    operator:"JR Hokkaido",
    dailyPassengers:850, opened:1922,
    description:"Penúltima estación antes del fin de la línea, en el sur de la ciudad de Wakkanai. Aquí se encuentra el depósito de trenes y los talleres de mantenimiento de la línea.",
    curiosities:[
      "Hasta 1989 desde aquí bifurcaba la línea Tenpoku hacia el este de la costa norte",
      "Es la estación operativa más importante del extremo norte, con el depósito de JR Hokkaido",
      "En días claros desde aquí ya se divisa el mar de Japón a pocos kilómetros"
    ],
    facilities:["Conbini","Depósito de trenes"]
  },
  "wakkanai": {
    id:"wakkanai", name:"Wakkanai", nameJa:"稚内",
    lat:45.4160, lng:141.6741,
    operator:"JR Hokkaido",
    dailyPassengers:2100, opened:1928,
    description:"El punto más al norte de Japón accesible en tren. Terminal de la Soya Main Line y puerta al Cabo Soya, el extremo septentrional del archipiélago. En días despejados se ve la isla rusa de Sakhalin a solo 43 km.",
    curiosities:[
      "Es la estación más septentrional de Japón, a 45 grados 24 minutos de latitud norte",
      "La isla rusa de Sakhalin es visible a simple vista en días despejados, a 43 km de distancia",
      "Hasta 1945 un ferry unía Wakkanai con Otomari (hoy Korsakov) en Sakhalin, entonces territorio japonés",
      "El Cabo Soya, a 30 km, tiene un monumento al punto más norte de Japón visitado por millones"
    ],
    facilities:["Conbini","Ferry a Rishiri y Rebun","Acceso Cabo Soya","Punto más norte de Japón"]
  },


  // ── SHONAN MONORAIL ───────────────────────────────────────────
  "shonan_machiya": {
    id:"shonan_machiya", name:"Shonan-Machiya", nameJa:"湘南町屋駅",
    lat:35.3380, lng:139.5226,
    operator:"Shonan Monorail Co.",
    dailyPassengers:"N/A", opened:1970,
    description:"La estación de Shōnan-Machiya, inaugurada el 7 de marzo de 1970, es una parada clave en la línea Enoshima del monorraíl de Shōnan en Kamakura, Japón. Destaca por su estructura elevada y fue reconstruida en 2005 para modernizar sus instalaciones, ofreciendo acceso rápido hacia Ofuna y Nishi-Kamakura en la zona costera.",
    curiosities:[
      "Aunque inaugurada en 1970, el edificio de la estación fue reconstruido completamente en 2005 para mejorar la accesibilidad y el diseño.",
      "Es una ruta común para los viajeros que buscan evitar el tráfico para llegar a las playas y templos de la zona de Enoshima y Kamakura."
    ],
    facilities:["Conbini"]
  },
  "shonan_fukasawa": {
    id:"shonan_fukasawa", name:"Shonan-Fukasawa", nameJa:"湘南深沢",
    lat:35.332, lng:139.5188,
    operator:"Shonan Monorail Co.",
    dailyPassengers:6200, opened:1971,
    description:"Segunda estacion del monocarril, en el barrio residencial de Fukasawa en Kamakura. La linea comienza su caracteristico ascenso y descenso entre colinas a partir de aqui.",
    curiosities:[
      "El barrio de Fukasawa es uno de los mas tranquilos y cotizados de Kamakura",
      "Desde aqui el monocarril empieza a trepar las colinas con pendientes notables",
      "El nombre Shonan hace referencia a la costa sur de Kanagawa, famosa por el surf"
    ],
    facilities:["Conbini"]
  },
  "nishi_kamakura": {
    id:"nishi_kamakura", name:"Nishi-Kamakura", nameJa:"西鎌倉",
    lat:35.31942, lng:139.50433,
    operator:"Shonan Monorail Co.",
    dailyPassengers:4100, opened:1970,
    description:"Estacion en el barrio residencial del oeste de Kamakura. Punto de acceso a los templos menos conocidos y a las rutas de senderismo del interior.",
    curiosities:[
      "Fue una de las estaciones inaugurales del monocarril en 1970",
      "Da acceso a los templos menos turisticos del oeste de Kamakura",
      "El paisaje de casas y bosques visto desde el monocarril es muy evocador"
    ],
    facilities:["Conbini","Rutas de senderismo"]
  },
  "kataseyama": {
    id:"kataseyama", name:"Kataseyama", nameJa:"鎌倉山手",
    lat:35.31724, lng:139.49610,
    operator:"Shonan Monorail Co.",
    dailyPassengers:3800, opened:1971,
    description:"Estacion en las colinas residenciales de Kamakura. El monocarril alcanza aqui uno de sus puntos mas altos del recorrido con vistas al mar en dias despejados.",
    curiosities:[
      "En dias despejados hay vistas al oceano Pacifico desde las inmediaciones",
      "Es el punto de mayor altitud del recorrido, con una sensacion de vuelo especialmente intensa",
      "El barrio es conocido por sus mansiones y jardines privados bien cuidados"
    ],
    facilities:["Conbini"]
  },
  "mejiroyamashita": {
    id:"mejiroyamashita", name:"Mejiroyamashita", nameJa:"目白山下",
    lat:35.3141, lng:139.4916,
    operator:"Shonan Monorail Co.",
    dailyPassengers:3500, opened:1971,
    description:"Penultima estacion antes de Enoshima, en el descenso hacia la costa del Pacifico. Desde aqui el monocarril entra en el tunel de Kataseyama antes de llegar a la terminal.",
    curiosities:[
      "El tunel de Kataseyama (205 m), justo antes de la terminal, es la ultima curva del recorrido",
      "El descenso hacia la costa desde aqui ofrece las primeras vistas del oceano",
      "El nombre Mejiro hace referencia a un tipo de pajaro cantor muy comun en los jardines japoneses"
    ],
    facilities:["Conbini"]
  },
  "shonan_enoshima": {
    id:"shonan_enoshima", name:"Shonan-Enoshima", nameJa:"湘南江の島",
    lat:35.3116, lng:139.487778,
    operator:"Shonan Monorail Co.",
    dailyPassengers:9800, opened:1971,
    description:"Terminal del monocarril y puerta a la isla de Enoshima, uno de los destinos turisticos mas populares de la region de Shonan. A pocos minutos estan las playas, el santuario y las cuevas marinas.",
    curiosities:[
      "La isla de Enoshima con su santuario sintoista esta a 10 minutos caminando",
      "Las playas de Kamakura y Fujisawa son famosas por el surf y el voleibol playa",
      "El Gran Buda de Kamakura esta a unos 30 minutos en bicicleta",
      "Desde la Torre de Enoshima (Sea Candle) se ven el Monte Fuji en dias claros"
    ],
    facilities:["Conbini","Acceso a Enoshima","Playas","Santuario"]
  }

};
