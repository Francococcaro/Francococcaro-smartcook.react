# SmartCook

Aplicación web para explorar productos y ofertas de comida, consultar detalles, gestionar un carrito y administrar productos y cupones.

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`
- npm (incluido con Node.js)

## Instalación y ejecución local

1. Clona el repositorio y entra en la carpeta:

   ```bash
   git clone https://github.com/Francococcaro/Francococcaro-smartcook.react.git
   cd Francococcaro-smartcook.react
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la dirección que muestra Vite en la terminal, normalmente `http://localhost:5173`.

## Comandos disponibles

- `npm run dev`: inicia el servidor local con recarga en caliente.
- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: sirve localmente la compilación de producción (ejecuta primero `npm run build`).
- `npm run lint`: analiza el código con ESLint.

## Funcionalidades

- Página de inicio y ofertas destacadas.
- Catálogo y detalle de productos.
- Carrito de compras.
- Sección informativa del equipo.
- Gestión de productos y cupones.
- Persistencia de datos mediante Firebase Firestore.

## Rutas principales

| Ruta | Contenido |
| :--- | :--- |
| `/` | Inicio |
| `/productos` | Catálogo |
| `/productos/:id` | Detalle de un producto |
| `/nosotros` | Equipo |
| `/carrito` | Carrito |
| `/gestion` | Gestión de productos |
| `/cupones` | Gestión de cupones |

## Estructura del proyecto

```text
src/
├── components/   # Componentes y vistas de la aplicación
├── context/      # Contexto compartido, incluido el estado del carrito
├── firestore/    # Inicialización y configuración de Firebase
└── services/     # Operaciones de acceso a datos
public/           # Recursos estáticos
dist/             # Archivos generados por la compilación
```

## Firebase

La aplicación usa **Firebase Firestore**. Antes de ejecutar la aplicación, verifica que la configuración del proyecto Firebase y sus reglas de acceso sean válidas para las operaciones que utiliza la aplicación. No publiques credenciales privadas ni agregues secretos al repositorio.

## Compilación para producción

```bash
npm run build
npm run preview
```

El primer comando crea la compilación optimizada en `dist/`; el segundo permite revisarla localmente.
