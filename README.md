# Orion's Voyage Builder

Actúa como un Desarrollador Frontend Senior experto en UI/UX y un Especialista en Marketing de Conversión (Copywriter). 

Genera el código para una Landing Page de una agencia de viajes boliviana llamada "Orion Tours". La web debe ser estática (One-Page) pero sentirse extremadamente dinámica, moderna y viva al hacer scroll. Utiliza React, Tailwind CSS, y componentes de interfaz limpios (tipo shadcn/ui o lucide-react para íconos). No uses texto "Lorem Ipsum", utiliza el copy persuasivo que te indico a continuación.

**1. Sistema de Diseño (Design System):**

*   **Colores Principales:** Azul marino profundo (Primary, transmite seguridad) y Naranja vibrante (Accent/CTA, transmite energía y aventura). Fondo principal blanco o gris extra claro (#f8fafc).

*   **Tipografía:** Fuente sans-serif moderna, geométrica y amigable para títulos (ej. Poppins, Montserrat) y muy legible para el cuerpo (ej. Inter).

*   **Estilo Visual:** Bordes redondeados (soft-rounded), sombras suaves (drop-shadows) para dar profundidad a las tarjetas, y mucho espacio en blanco (margin/padding).

**2. Interactividad y Animaciones:**

*   Implementa animaciones de entrada al hacer scroll (fade-in, slide-up).

*   Efectos hover en botones y tarjetas (escalado suave, brillo en el color naranja).

*   Un navbar sticky con efecto glassmorphism al hacer scroll.

**3. Estructura de Secciones y Copywriting:**

*   **Header/Navbar:** Logo de Orion Tours a la izquierda. Enlaces: Inicio, Nosotros, Destinos Estrella, Contacto. Botón naranja: "Reserva tu aventura".

*   **Hero Section (Inicio):** 

    *   Un banner imponente. 

    *   Título grande y cautivador: "Descubrí la magia de Brasil con la seguridad que mereces."

    *   Subtítulo: "Desde las playas vibrantes de Río hasta la inmensidad de São Paulo. Hacemos de tu viaje soñado una realidad inolvidable, cuidando cada detalle de tu seguridad y confort."

    *   Dos botones: "Ver Destinos" (Primario) y "Hablar con un Asesor" (Secundario).

*   **Sección "Por qué elegirnos" (Nosotros & Seguridad):** 

    *   Diseño con iconos o tarjetas pequeñas.

    *   Enfoque principal: La Seguridad. 

    *   Textos a incluir: "Tu seguridad es nuestra prioridad. Viaja con total respaldo, coordinación experta y medidas garantizadas para que tu única preocupación sea disfrutar." "Armamos tu paquete completo: Transporte, Hospedaje, Desayuno, Almuerzo y Cena."

*   **Sección "Destinos Estrella: Lo Mejor de Brasil":** 

    *   Diseño de tarjetas (Cards) amplias y detalladas para resaltar los dos mejores destinos.

    *   **Tarjeta 1 (Río de Janeiro):** Título: "Río de Janeiro: La Ciudad Maravillosa". Incluye etiquetas (badges) que digan "Playas icónicas", "Cristo Redentor", "Vida Nocturna". Breve texto: "Siente la brisa en Copacabana e Ipanema. Te llevamos a los puntos estratégicos para unas fotos increíbles y una inmersión total en la cultura carioca, siempre con guías seguros."

    *   **Tarjeta 2 (São Paulo):** Título: "São Paulo: El Corazón Cosmopolita". Etiquetas: "Gastronomía Mundial", "Cultura", "Compras". Breve texto: "Explora la metrópolis vibrante. Desde el Parque Ibirapuera hasta la Avenida Paulista, descubre los secretos y curiosidades de la ciudad que nunca duerme con nuestra logística experta."

    *   Cada tarjeta debe tener iconos de lo que incluye (Bus, Hotel, Comida) y un botón de "Ver Itinerario".

*   **Footer:** 

    *   Limpio y ordenado. Derechos de autor (© 2024 Orion Tours).

    *   Ícono de Facebook grande y atractivo que dirija a: https://www.facebook.com/profile.php?id=61562322302252

**4. Elementos Globales de Conversión:**

*   **Botón Flotante de WhatsApp:** Un icono verde de WhatsApp fijo en la esquina inferior derecha, con animación de "pulso" constante. Al hacer clic, debe redirigir a: https://wa.me/59175542604

*   Diseño 100% Mobile-First y Responsivo. Asegúrate de que las tarjetas de destinos se apilen perfectamente en versión móvil.

## Development

Para ejecutar localmente:

```sh
npm i
npm run dev
```

