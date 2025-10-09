# NavegaLasRutas-Velazquez

Aplicación web desarrollada con **React**, **Vite** y **Firebase**. Incluye integración con Firestore, Data Connect y TanStack React Query para manejo avanzado de datos y estado.

---

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Principales Componentes](#principales-componentes)
- [Integración con Firebase](#integración-con-firebase)
- [Scripts Disponibles](#scripts-disponibles)
- [Estilos y Recursos](#estilos-y-recursos)
- [Experiencia de Usuario](#experiencia-de-usuario)


## Estructura del Proyecto

.
├── .firebaserc
├── .gitignore
├── firebase.json
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── firebase.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── main.jsx
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── cartwidget/
│   ├── components/
│   ├── context/
│   ├── dataconnect-generated/
│   ├── navbar/
│   └── pages/
└── dataconnect/
    ├── dataconnect.yaml
    ├── seed_data.gql
    ├── example/
    └── schema/
```
```
## Dependencias

Principales dependencias (ver [package.json](package.json)):

- **React**: ^19.1.1
- **Vite**: ^7.1.7
- **Firebase**: ^12.3.0
- **@mui/material**: ^7.3.4
- **TanStack React Query**: ^5.x
- **@tanstack-query-firebase/react**: ^2.0.0
- **React Router DOM**: ^7.9.1


## Principales Componentes

- **Catálogo**: [`src/pages/catalogo.jsx`](src/pages/catalogo.jsx)
- **Página de Ofertas**: [`src/pages/homepage.jsx`](src/pages/homepage.jsx)
- **Detalle de Producto**: [`src/pages/DetailPage.jsx`](src/pages/DetailPage.jsx)
- **Carrito de Compras**: [`src/components/Carrito.jsx`](src/components/Carrito.jsx)
- **ItemCount**: [`src/components/ItemCount.jsx`](src/components/ItemCount.jsx)
- **Spinner**: [`src/components/Spinner.jsx`](src/components/Spinner.jsx)
- **Navbar**: [`src/navbar/navbar.jsx`](src/navbar/navbar.jsx)
`
## Integración con Firebase

La configuración de Firebase está en [`src/firebase.js`](src/firebase.js):

```js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
```

## Scripts Disponibles

Ver [package.json](package.json):

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción.
- `npm run deploy` — Despliega la aplicación en GitHub Pages.
- `npm test` — Ejecuta los tests.


## Estilos y Recursos

- Estilos globales: [`src/index.css`](src/index.css), [`src/App.css`](src/App.css)
- Estilos de componentes: [`src/pages/homepage.css`](src/pages/homepage.css), [`src/navbar/navbar.css`](src/navbar/navbar.css)
- Recursos estáticos: [`public/`](public/)

## Experiencia de Usuario

La aplicación está diseñada para ofrecer una experiencia de usuario fluida y moderna:

- **Navegación intuitiva:** El menú principal permite acceder rápidamente al catálogo, ofertas y categorías específicas.  
- **Responsive Design:** Los estilos y componentes se adaptan a dispositivos móviles y escritorio, garantizando accesibilidad desde cualquier pantalla.
- **Carga de datos:** Se utiliza el componente [`Spinner`](src/components/Spinner.jsx) para indicar el estado de carga, evitando confusión al usuario.
- **Interacción con el carrito:** El usuario puede agregar, eliminar y modificar cantidades de productos en el carrito. Al finalizar la compra, se muestra un formulario y un código de seguimiento único.
- **Feedback visual:** Los botones y acciones muestran estados activos/deshabilitados, y se utilizan alertas para informar sobre stock insuficiente.
- **Accesibilidad:** Se recomienda el uso de etiquetas semánticas y atributos `alt` en imágenes para mejorar la accesibilidad.
- **Animaciones y transiciones:** Se emplean efectos visuales en el logo y botones para mejorar la experiencia visual.
- **Confirmación de compra:** Al finalizar la compra, se muestra un mensaje de éxito y el código de seguimiento, mejorando la confianza del usuario.
---