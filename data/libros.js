const LIBROS = [

    /* ---------- H2 - Comic y Novela Grafica ---------- */
    { titulo: "Maus",              autor: "Art Spiegelman",   editorial: "Reservoir Books", categoria: "Comic y Novela Grafica", estante: "H2", seccion: 3, cantidad: 5,  disponibles: 4 },
    { titulo: "Watchmen",          autor: "Alan Moore",       editorial: "ECC Ediciones",    categoria: "Comic y Novela Grafica", estante: "H2", seccion: 2, cantidad: 4,  disponibles: 2 },
    { titulo: "Persepolis",        autor: "Marjane Satrapi",  editorial: "Debolsillo",       categoria: "Comic y Novela Grafica", estante: "H2", seccion: 1, cantidad: 6,  disponibles: 1 },

    /* ---------- H3 - Poesia ---------- */
    /* Aun no hay libros cargados en esta categoria. */

    /* ---------- H4 - Novela ---------- */
    { titulo: "Letras Cardinales",                    autor: "Maria Luisa Perez W. y David Wallace C.",              editorial: "-", categoria: "Novela", estante: "H4", seccion: 6, cantidad: 15, disponibles: 15 },
    { titulo: "Prisma",                                autor: "Cesar Cabello Salazar",                                 editorial: "-", categoria: "Novela", estante: "H4", seccion: 6, cantidad: 21, disponibles: 21 },
    { titulo: "Palabras de Cada Puerta",               autor: "Maria Luisa Perez W. y David Wallace C.",              editorial: "-", categoria: "Novela", estante: "H4", seccion: 4, cantidad: 4,  disponibles: 4 },
    { titulo: "Palabras que Cuentan el Mundo",         autor: "Rosio Rodriguez / Juan Andres Pina",                    editorial: "-", categoria: "Novela", estante: "H4", seccion: 5, cantidad: 59, disponibles: 59 },
    { titulo: "Relatos",                               autor: "Carla Morales y Gabriela Precht",                       editorial: "-", categoria: "Novela", estante: "H4", seccion: 3, cantidad: 8,  disponibles: 8 },
    { titulo: "Literoscopio",                          autor: "Carmen Gloria Robles S.",                               editorial: "-", categoria: "Novela", estante: "H4", seccion: 2, cantidad: 59, disponibles: 59 },
    { titulo: "La Vuelta al Mundo en Mas de 100 Textos", autor: "Varios autores",                                      editorial: "-", categoria: "Novela", estante: "H4", seccion: 1, cantidad: 18, disponibles: 18 },
    { titulo: "Santiago en 100 Palabras",              autor: "Varios autores",                                        editorial: "-", categoria: "Novela", estante: "H4", seccion: 6, cantidad: 6,  disponibles: 6 },
    { titulo: "Voces del Mundo",                       autor: "Maria Magdalena Browne",                                editorial: "-", categoria: "Novela", estante: "H4", seccion: 4, cantidad: 45, disponibles: 45 },
    { titulo: "La Quinta Pata",                        autor: "Silvia Aguilera / Florencia Velasco / Daniel Aguilera", editorial: "-", categoria: "Novela", estante: "H4", seccion: 5, cantidad: 6,  disponibles: 6 },

];

/* Lista de categorias en orden, con su icono y estante - usada por el menu.       */

const CATEGORIAS = [
    { estante: "H2",  nombre: "Comic y Novela Grafica",          icono: "🦸" },
    { estante: "H3",  nombre: "Poesia",                          icono: "✏️" },
    { estante: "H4",  nombre: "Novela",                          icono: "📖" },
    { estante: "H5",  nombre: "Literatura Infantil y Juvenil",   icono: "🧸" },
    { estante: "H6",  nombre: "Textos Escolares y Manuales",     icono: "📐" },
    { estante: "H7",  nombre: "Ciencia, Atlas y Referencia",     icono: "🔬" },
    { estante: "H8",  nombre: "Historia, Sociedad y Biografias", icono: "🏛️" },
    { estante: "H9",  nombre: "Arte, Musica y Diseno",           icono: "🎨" },
    { estante: "H10", nombre: "Cuento",                          icono: "📗" },
    { estante: "H11", nombre: "Teatro.",                          icono: "🎭" },
];
