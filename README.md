# 🎬 Portfolio - Gerardo Corona López

Sitio de portfolio personal construido con **React** y **Vite**, mostrando proyectos seleccionados de desarrollo web.

## 📋 Requisitos

- **Node.js** 16.0 o superior
- **npm** o **yarn**

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/GerardoCL31/Porfolio.git
cd Porfolio
```

2. Instala las dependencias:
```bash
npm install
```

## 🏃 Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173/`

Para acceder desde otro dispositivo (móvil):
```bash
npm run dev -- --host
```

## 🔨 Build para Producción

Genera la versión optimizada:
```bash
npm run build
```

Los archivos listos para producción se generarán en la carpeta `dist/`.

## 👁️ Vista Previa

Para ver la versión compilada antes de desplegar:
```bash
npm run preview
```

## 📦 Despliegue

### Opción 1: one.com

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu hosting via FTP/SFTP
3. Asegúrate de que los archivos vayan en `public_html` o la carpeta pública de tu dominio

### Opción 2: Vercel (Recomendado)

1. Vincula el repositorio con [Vercel](https://vercel.com)
2. Vercel detectará automáticamente que es un proyecto Vite
3. Deploy automático en cada push a `main`

### Opción 3: GitHub Pages

1. Modifica `vite.config.js` agregando `base: '/Porfolio/'`
2. Ejecuta `npm run build`
3. Sube a la rama `gh-pages`

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Verifica código con ESLint |

## 📁 Estructura del Proyecto

```
Porfolio/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos del app
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/
│   └── images/          # Imágenes públicas
├── dist/                # Build de producción (generado)
├── package.json         # Dependencias
├── vite.config.js       # Configuración de Vite
└── README.md            # Este archivo
```

## 🎨 Personalización

### Agregar Nuevos Proyectos

Edita `src/App.jsx` y agrega un objeto a la array `repos`:

```javascript
{
  name: 'Nombre del Proyecto',
  description: 'Descripción breve',
  icon: 'URL de imagen',
  link: 'URL de GitHub',
  demoLink: 'URL del demo (opcional)'
}
```

### Cambiar Estilos

- Estilos globales: `src/index.css`
- Estilos del app: `src/App.css`

## 📱 Responsive

El sitio está optimizado para:
- Desktop (1200px+)
- Tablet (640px - 960px)
- Mobile (< 640px)

## 🐛 Issues

Si encuentras problemas, asegúrate de:

1. Tener Node.js actualizado: `node --version`
2. Limpiar cache: `rm -rf node_modules && npm install`
3. Limpiar caché del navegador: `Ctrl+Shift+R` o `Cmd+Shift+R`

## 📄 Licencia

Este proyecto es de uso personal. Todos los proyectos listados tienen sus propios repositorios en GitHub.

## ✨ Autor

**Gerardo Corona López** - [GitHub](https://github.com/GerardoCL31)

---

¿Preguntas? Abre un issue en el repositorio.
