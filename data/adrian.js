// Preguntas de Adrián Ruiz Muñoz
// "correcta" es el índice de la opción correcta: 0 = a, 1 = b, 2 = c, 3 = d
// Los enunciados admiten HTML sencillo (<sup>, <sub>, <i>...)
registrarCompanero({
  id: "adrian",
  nombre: "Adrián Ruiz Muñoz",
  preguntas: [
    {
      enunciado: "Cuando se estudia la hidrosfera, uno de los datos que más sorprende es lo poco que dura el agua en la atmósfera. Imagina que en un instante cualquiera la atmósfera contiene unos 12 900 km<sup>3</sup> de agua y que, como orden de magnitud, sobre los 510 millones de km<sup>2</sup> de la superficie terrestre cae una precipitación media de 1000 mm al año. Suponiendo que el sistema está en equilibrio (lo que entra por evaporación es lo que sale por precipitación), ¿cuánto tiempo permanece de media el agua en la atmósfera antes de volver a la superficie?",
      opciones: [
        "Del orden de 9 horas.",
        "Del orden de 9 días.",
        "Del orden de 9 meses.",
        "Del orden de 9 años."
      ],
      correcta: 1
    },
    {
      enunciado: "Abajo tienes dos bandas de registro. La primera (a) es el pluviograma de sifón del Observatorio de la Sociedad Anónima Marcet, conservado en el Archivo Meteorológico Municipal de Sabadell y correspondiente al 25 de septiembre de 1962. En aquel episodio se superaron los 200 mm en unas 3 horas. La segunda (b) es una banda de un pluviógrafo de intensidad Jardí del 3 de septiembre de 1972. ¿Qué afirmación es correcta?",
      imagenes: [
        { src: "img/adrian/p1b_sifon_sabadell.jpg", pie: "(a) Sifón, Sabadell, 25/09/1962 (Bonet, 1986)" },
        { src: "img/adrian/p1b_jardi_barcelona.jpg", pie: "(b) Jardí, Barcelona, 03/09/1972. Foto: Alfons Puertas" }
      ],
      opciones: [
        "Para (b) se puede afirmar que se superó el 1 mm/min mientras que en (a) no porque la banda recoge acumulados.",
        "Ambas bandas muestran el paso de diferentes tandas de precipitación destacando una por intensidad.",
        "En la banda (a) se acumuló una mayor cantidad fuera de los máximos de intensidad. En (b) el total se registró durante los picos de intensidad.",
        "Tanto en (a) como en (b) las caídas muestran una disminución de la intensidad."
      ],
      correcta: 1
    },
    {
      enunciado: "El domingo 4 de octubre de 2026 el Besòs, a su paso por Santa Coloma de Gramenet, pasó de unos 2.5 m<sup>3</sup>/s el sábado por la mañana a un máximo de unos 937 m<sup>3</sup>/s hacia las 7:00 hora oficial del domingo. La figura muestra el hidrograma de caudal medido en diferentes puntos de aforo de diferentes ríos para la misma franja temporal (Fuente: Agència Catalana de l’Aigua). La lluvia, ligada a un sistema convectivo, dejó más de 100 mm acumulados entre el sábado y las 6:00 hora oficial del domingo en diferentes puntos de la cuenca, con máximos de 247.9 mm en Granollers (Fuente: Meteocat). Con estos datos, ¿qué afirmación es correcta para simular el caudal de esa crecida?",
      imagenes: [{ src: "img/adrian/p1c_hidrogramas.png" }],
      opciones: [
        "Es un río efímero y basta un modelo determinista agregado, usando la lluvia media de la cuenca.",
        "Es un río perenne con respuesta muy rápida, y hace falta un modelo determinista distribuido, que reparta la lluvia en el espacio.",
        "Es un río perenne, pero basta un modelo determinista agregado, usando la lluvia media de la cuenca.",
        "Es un río efímero, y lo mejor es un modelo determinista distribuido, que reparta la lluvia en el espacio."
      ],
      correcta: 1
    },
    {
      enunciado: "En un episodio de lluvias en la costa catalana, un reanálisis a 850 hPa muestra sobre Barcelona un flujo del sur de 10 m/s, como el que se da en el flanco oriental de una DANA situada al oeste de la Península Ibérica. Las isotermas son prácticamente paralelas a los paralelos y la temperatura disminuye hacia el norte a razón de 1.5 K cada 100 km. Suponiendo que cada parcela de aire conserva su temperatura mientras se desplaza (d<i>T</i>/d<i>t</i> = 0), ¿qué cambio de temperatura cabe esperar a 850 hPa sobre Barcelona al cabo de 6 horas?",
      opciones: [
        "Un descenso de unos 3.2 K.",
        "Ningún cambio, puesto que cada parcela conserva su temperatura.",
        "Un aumento de unos 0.5 K, porque la advección solo actúa mientras la parcela pasa por encima de Barcelona.",
        "Un aumento de unos 3.2 K."
      ],
      correcta: 3
    },
    {
      enunciado: "La figura recoge las curvas IDF de la estación de Sabadell – Parc Agrari (código XF) gestionada por el Servei Meteorològic de Catalunya para varios periodos de retorno (2, 5, 10, 25, 50, 100, 200 y 500 años). El comportamiento responde a la expresión regional <i>I</i>(<i>T</i>, <i>t</i>) = <i>aT<sup>d</sup></i> / (<i>t<sup>c</sup></i> + <i>b</i>) con los parámetros de Sordo et al. (2024) para esa estación (<i>a</i> = 32.50, <i>b</i> = 0.196, <i>c</i> = 0.801, <i>d</i> = 0.225). La estación registró en un episodio una precipitación máxima de 60 mm en 60 min consecutivos aunque 46 mm cayeron en 30 min. Teniendo en cuenta que AEMET puso el aviso naranja en el Prelitoral de Barcelona y sabiendo que, según el color, los umbrales de superación en 1 h son: amarillo (20 mm), naranja (40 mm) y rojo (90 mm), ¿qué afirmación es correcta?",
      imagenes: [{ src: "img/adrian/p3_idf_sabadell.png" }],
      opciones: [
        "El periodo de retorno es de unos 5 años, porque la curva de T = 5 años pasa por unos 40 mm/h como marca el aviso naranja de AEMET.",
        "El periodo de retorno está entre 25 y 50 años pero el aviso naranja de AEMET hubiese justificado un episodio con T < 10 años.",
        "El episodio superó el umbral rojo de AEMET ya que se registraron intensidades medias máximas superiores a 90 mm/h en 30 min.",
        "Ninguna de las anteriores."
      ],
      correcta: 1
    },
    {
      enunciado: "Un ayuntamiento costero quiere saber hasta dónde llegaría el agua en el tramo urbano final de una riera ante el episodio de lluvias más desfavorable (<i>T</i> = 500 años). El equipo técnico ha calibrado un modelo hidrológico distribuido (con precipitación procedente de radar corregida con pluviómetros, modelo digital del terreno y coeficientes de escorrentía de los usos del suelo) y obtiene en la desembocadura un hidrograma con un caudal punta de 850 m<sup>3</sup>/s. ¿Qué afirmación es correcta?",
      imagenes: [{ src: "img/adrian/p4_besos.jpg", pie: "Desembocadura del río Besòs el 04/10/2026 (fotografía de fuente desconocida)." }],
      opciones: [
        "Con ese hidrograma ya es suficiente: se puede conseguir la cartografía de zonas inundables simplemente con el caudal de la riera.",
        "Hay que sustituir el modelo hidrológico por uno hidráulico, porque el primero no sirve para eventos extremos como el de 500 años.",
        "Hay que alimentar con ese caudal un modelo hidráulico y contemplar el nivel del mar.",
        "Hay que alimentar un modelo hidráulico con el caudal punta sin tener en cuenta la geometría del sistema ya que de forma intrínseca la da el caudal."
      ],
      correcta: 2
    },
    {
      enunciado: "Una tarde de julio una tormenta cruza la ciudad de Berga de norte a sur. En la estación automática se anota que a las 16:40 UTC la temperatura cae de 31 a 23 °C en unos 10 minutos, la presión ha subido, la precipitación es moderada-intensa, y el viento rola y da una racha de 22 m/s. También se registra gran actividad eléctrica. ¿Cuál es la interpretación más coherente?",
      opciones: [
        "La célula está en fase de desarrollo, hay convergencia de vientos en superficie y por eso la presión sube. El calor se invierte en el ascenso de las corrientes, de ahí que la temperatura baje.",
        "La célula está en plena madurez. Las corrientes descendentes han arrastrado granizo que ha acabado por fundirse y por eso la temperatura ha disminuido.",
        "La célula está en disipación. Existe divergencia de vientos en superficie. El aire frío se deposita modificando el campo de presión en superficie.",
        "Se trata de una supercélula, porque una racha de 22 m/s se produce en tormentas con mesociclón."
      ],
      correcta: 2
    },
    {
      enunciado: "La figura es un pluviograma de un episodio registrado con un pluviómetro de balancín, con intensidades medias máximas en intervalos de 5 minutos. ¿Cómo clasificarías el episodio?",
      imagenes: [{ src: "img/adrian/p6_pluviograma.png" }],
      opciones: [
        "Estratiforme, porque durante gran parte del tiempo la intensidad queda por debajo del umbral (un 72 % del tiempo).",
        "Débilmente convectivo, porque solo 5 de los 18 intervalos superan el umbral (un 28 % del tiempo).",
        "Moderadamente convectivo, porque gran parte de la lluvia es convectiva (un 70 % del total).",
        "Muy convectivo, porque la intensidad media máxima, de 120 mm/h, triplica el umbral."
      ],
      correcta: 2
    },
    {
      enunciado: "Tras un episodio de lluvia intensa entra agua en unas instalaciones y hay que decidir quién paga la reparación. La ley establece que, si el episodio supera <i>T</i> = 100 años, el instalador queda exento: no hay defecto de la instalación, sino que esta no estaba dimensionada para ese episodio. Se desconoce el periodo de retorno del episodio y solo se dispone de una serie de 60 años de un pluviómetro situado a varios kilómetros. Con el método frecuencial, si <i>N</i> es el número total de años de la serie y <i>n</i> el número de años en los que se registra el evento, la frecuencia de superación y el periodo de retorno son <i>f</i> = <i>n</i>/<i>N</i> y <i>T</i><sub>ret</sub> = 1/<i>f</i> = <i>N</i>/<i>n</i>. ¿Qué afirmación sobre este cálculo es correcta?",
      opciones: [
        "Si ya ha ocurrido un episodio de T = 100 años, no puede repetirse en los próximos 100 años.",
        "Con 60 años de serie, T_ret = N/n permite obtener directamente si se supera T = 100 años.",
        "Con una serie más corta que 100 años hay que extrapolar, no sirve el método frecuencial.",
        "El periodo de retorno obtenido con ese pluviómetro vale igual para las instalaciones. En pocos kilómetros la precipitación no varía mucho."
      ],
      correcta: 2
    },
    {
      enunciado: "El método de Jenkinson y Collison clasifica cada día usando únicamente la presión a nivel del mar de una malla. Se obtienen los índices <i>F</i> y <i>Z</i>, que miden la intensidad del flujo y la vorticidad total, respectivamente. Los criterios de asignación son: si |<i>Z</i>| &lt; <i>F</i>, el tipo es puramente advectivo; si |<i>Z</i>| &gt; 2<i>F</i>, el tipo es puramente ciclónico (<i>Z</i> &gt; 0) o anticiclónico (<i>Z</i> &lt; 0); si <i>F</i> &lt; |<i>Z</i>| &lt; 2<i>F</i>, el tipo es híbrido; y si <i>F</i> &lt; 6 y |<i>Z</i>| &lt; 6, el día se clasifica como indeterminado. Se analiza el día más cálido del año en un punto de malla sobre Cataluña, un día de agosto con cielo despejado y brisa costera. Los valores obtenidos son <i>F</i> = 1.5 y <i>Z</i> = +7.7. ¿Qué tipo de tiempo resulta y cómo se interpreta?",
      opciones: [
        "Anticiclónico, porque se trata de un día despejado y soleado, que es lo que caracteriza a los anticiclones.",
        "Indeterminado, porque F es muy pequeño, lo que indica que el campo de presión apenas tiene gradiente.",
        "Ciclónico puro debido a la singularidad térmica del centro peninsular.",
        "Ciclónico puro, porque una borrasca atlántica al oeste peninsular genera una advección cálida hacia Cataluña."
      ],
      correcta: 2
    }
  ]
});
