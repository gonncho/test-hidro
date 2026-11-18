// Preguntas de Aitana Cortés García
// "correcta" es el índice de la opción correcta: 0 = a, 1 = b, 2 = c, 3 = d
registrarCompanero({
  id: "aitana",
  nombre: "Aitana Cortés García",
  preguntas: [
    {
      enunciado: "Selecciona la afirmación que NO sea cierta:",
      opciones: [
        "La evapotranspiración es el conjunto de pérdidas físicas y biológicas del suelo en vapor de agua.",
        "La precipitación, la evaporación y la evapotranspiración se miden en las mismas unidades.",
        "La relación entre la tasa pico de escorrentía directa y la intensidad promedio de precipitación en una tormenta es el coeficiente de caudal.",
        "La escorrentía puede ser superficial, subsuperficial o subterránea."
      ],
      correcta: 2
    },
    {
      enunciado: "El aire de la atmósfera es:",
      opciones: [
        "Un gas con moléculas siempre en la misma posición.",
        "Un fluido newtoniano compresible y ligero.",
        "Un gas incompresible.",
        "Un fluido no newtoniano."
      ],
      correcta: 1
    },
    {
      enunciado: "La ecuación modificada de Penman para el cálculo de la evapotranspiración horaria depende de:",
      opciones: [
        "La radiación solar incidente, la velocidad del viento, la humedad, la temperatura y la presión.",
        "La radiación solar incidente, la dirección del viento, la presión parcial del aire seco y la temperatura.",
        "La velocidad y dirección del viento, la temperatura del suelo y del aire, el albedo y el porcentaje de cielo cubierto.",
        "La humedad, la temperatura, el ángulo cenital, la presión en superficie y la presión parcial del vapor de agua."
      ],
      correcta: 0
    },
    {
      enunciado: "¿Cuál de estas variables NO hay que tener en cuenta en un modelo hidrológico?",
      opciones: [
        "Características geológicas del suelo",
        "La topografía de la cuenca",
        "La temperatura",
        "La presión"
      ],
      correcta: 3
    },
    {
      enunciado: "Identifica en qué etapa está cada célula de la tormenta multicelular de la Figura 1:",
      imagenes: [{ src: "img/aitana/p5_multicelular.png", pie: "Figura 1" }],
      opciones: [
        "Célula 1 y 2 en disipación, célula 3 en madurez, célula 4 y 5 en desarrollo.",
        "Célula 1 en disipación, célula 2 y 3 en madurez, célula 4 y 5 en desarrollo.",
        "Célula 1 en disipación, célula 2, 3 y 4 en madurez, célula 5 en desarrollo.",
        "Célula 1 y 2 en disipación, célula 3 y 4 en madurez, célula 5 en desarrollo."
      ],
      correcta: 1
    },
    {
      enunciado: "Selecciona la afirmación correcta:",
      opciones: [
        "Los episodios convectivos en Cataluña son más frecuentes e intensos en primavera.",
        "El parámetro β mide la convectividad de un episodio: si β > 1 se trata de un episodio convectivo y si β < 1 es un episodio estratiforme.",
        "Los episodios convectivos en Cataluña son más frecuentes en el litoral que en el interior.",
        "Todas las afirmaciones son ciertas."
      ],
      correcta: 2
    },
    {
      enunciado: "La Figura 2 muestra la curva IDF del municipio de Barcelona (Meteocat). Sabiendo que se han representado 8 períodos de retorno (2, 5, 10, 20, 50, 100, 200 y 500 años), ¿cuál es la intensidad máxima esperada para un periodo de retorno de 2 años y 2 horas?",
      imagenes: [{ src: "img/aitana/p7_idf_barcelona.png", pie: "Figura 2" }],
      opciones: ["38 mm/h", "60 mm/h", "120 mm/h", "20 mm/h"],
      correcta: 3
    },
    {
      enunciado: "La clasificación de Jenkinson & Collison para los tipos de tiempo:",
      opciones: [
        "Describe el patrón de circulación de un día específico utilizando la ubicación de los centros de alta y baja presión a nivel del mar, a 500 hPa y a 200 hPa.",
        "Permite clasificar el tipo de tiempo de un día específico a partir de la presión a nivel del mar y la temperatura en una rejilla de puntos.",
        "Necesita los cálculos aproximados del viento geostrófico y de la vorticidad a partir de la presión en superficie en una rejilla de puntos.",
        "Clasifica en tipo advectivo, ciclónico, anticiclónico e indeterminado."
      ],
      correcta: 2
    }
  ]
});
