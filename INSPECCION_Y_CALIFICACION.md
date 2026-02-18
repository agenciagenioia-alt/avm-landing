# Inspección minuciosa y calificación — Landing AVM Smile Design

**Fecha:** 18 feb 2025  
**Alcance:** Estructura, componentes, imágenes, estilos, UX, accesibilidad, rendimiento y conversión.

---

## 1. Estructura general

| Elemento | Estado | Detalle |
|----------|--------|---------|
| **App** | ✅ | Un solo `main`, orden lógico: Hero → Sinergia → Before/After → Servicios → Galería → Proceso → Turismo → FAQ → MiniBlog → Reviews → Footer. |
| **Header** | ✅ | Fijo, logo AVM, nav (Menú, Sinergia, Internacional, FAQ), CTA Agendar, menú hamburguesa en móvil. |
| **Footer** | ✅ | Logo, descripción, ubicación (Tequendama, Calle 5A), contacto (WhatsApp, email, Instagram), legal y enlaces Privacidad/Garantía. |
| **Skip link** | ✅ | "Saltar al contenido" con `.sr-only` y foco visible. |
| **WhatsApp flotante** | ✅ | Botón sticky para contacto directo. |

**Conclusión:** La arquitectura de la landing es clara y orientada a conversión (protocolos → sinergia → resultados → precios → proceso → turismo → FAQ → social proof).

---

## 2. Imágenes — Análisis detallado

### 2.1 Orígenes y formatos

| Ubicación | Origen | Parámetros / Formato | Problema potencial |
|-----------|--------|----------------------|--------------------|
| **Hero** | Unsplash | `w=1920&q=90` | ✅ Bien dimensionada para viewport grande. |
| **Synergy** | PostImg | URL fija (PNG) | Sin control de tamaño; puede venir en resolución baja o alta. |
| **BeforeAfter (carrusel)** | PostImg | 3 PNGs sin params | **Se ven pequeñas**: contenedor `aspect-[4/3]` + `object-contain` + imágenes posiblemente pequeñas o con otra relación de aspecto. |
| **Services (tarjetas)** | PostImg + 1 Unsplash | URLs fijas | **Mismo riesgo**: `aspect-[4/3]` + `object-contain`; si el PNG es pequeño, se pixela o se ve pequeña. |
| **GalleryCarousel** | Unsplash | `w=800&q=85` | **En desktop 800px es poco**: el carrusel tiene `max-w-5xl` (~1024px), la imagen queda limitada a 800px de ancho. |
| **MedicalTourism** | Picsum + Unsplash | Picsum 1200×1200; Unsplash `w=800` | Picsum es placeholder; Unsplash otra vez limitada a 800px en bloque grande. |

### 2.2 Cómo hacer que las imágenes no se vean pequeñas y se vean en “formato grande”

1. **Resolver tamaño de archivo / resolución**
   - **PostImg:** Subir versiones en **alta resolución** (ej. 1200–1600px de ancho) o usar su API/parámetros si permiten redimensionar. Si no, alojar las imágenes en un CDN o servidor donde puedas servir versiones grandes (ej. `?w=1200`).
   - **Unsplash:** En las URLs ya usas `w=...`. Para galería y bloques grandes, subir a **w=1200** o **w=1600** (y opcionalmente `dpr=2` para pantallas retina). Ejemplo: `...&w=1200&q=90`.

2. **Ajustar contenedores y CSS**
   - Donde quieras “imagen grande”:
     - Aumentar el **tamaño del contenedor** (ej. `max-w-4xl` → `max-w-6xl` en BeforeAfter; en GalleryCarousel ya está `max-w-5xl`, podría subir a `max-w-6xl`).
     - Para que la imagen **llene** el espacio sin bandas: usar `object-cover` en lugar de `object-contain` (asumiendo que recortar por los lados es aceptable). Si no quieres recortar, mantener `object-contain` pero asegurar que la **imagen de origen sea grande**.
   - Dar a la imagen **altura mínima** en secciones clave (ej. Hero ya usa `min-h-screen`; carruseles podrían usar `min-h-[60vh]` o similar) para que el bloque se sienta grande.

3. **Formato moderno (opcional)**
   - Servir **WebP** (con fallback JPEG/PNG) reduce peso y permite cargar más resolución con el mismo ancho de banda. En build se puede usar un plugin (vite-imagetools, etc.) o generar WebP en servidor/CDN.

**Resumen ejecutivo imágenes:**  
- **Hero:** Ya está bien (1920px).  
- **BeforeAfter y Services:** Subir/servir imágenes PostImg en **≥1200px** de ancho y, si quieres que “llenen”, valorar `object-cover` en algunos contenedores.  
- **GalleryCarousel y MedicalTourism:** Subir parámetro Unsplash a **w=1200** (o 1600) para que en desktop no se vean pequeñas.  
- **Synergy:** Misma idea: imagen en alta resolución para que no se pixele en pantallas grandes.

---

## 3. Componentes por sección

| Sección | Contenido | Observaciones |
|---------|-----------|---------------|
| **Hero** | Título “Estética de Autor”, CTA valoración VIP, imagen de fondo consultorio | Tipografía impactante, CTA claro. Imagen con overlay y gradiente correctos. |
| **Synergy** | Foto equipo + texto “Sinergia Orofacial”, perfiles doctoras | Bloque 4/5 bien usado. Falta `alt` descriptivo si la imagen es decorativa (ya tiene texto). |
| **BeforeAfter** | Carrusel 3 imágenes “Resultados Reales” + CTA | Carrusel accesible (ARIA, tabs). Imágenes pueden verse pequeñas (ver §2). |
| **Services** | Grid 2 cols, 8 tarjetas con precio COP/USD, CTA WhatsApp por servicio | Precios visibles, mensaje WhatsApp personalizado. Imágenes en tarjetas con mismo riesgo de tamaño. |
| **GalleryCarousel** | 3 fotos Unsplash en 16/9 | Transición suave, indicadores. URLs en 800px limitan nitidez en grande. |
| **Process** | 4 pasos (Concierge, Blueprint, Artistry, Reveal) | Sin imágenes; fondo con gradiente y patrón. Claro y premium. |
| **MedicalTourism** | Texto + 4 beneficios + imagen Cali/viaje | Imagen principal con Unsplash 800px; fondo con Picsum (placeholder). |
| **FAQ** | Acordeón + CTA “Consultar al Especialista” | Estado expandido/colapsado bien manejado, ARIA correcto. |
| **MiniBlog** | 3 artículos (valoración VIP, turismo dental, primera vez) | Schema Article, útil para SEO. Sin imágenes. |
| **Reviews** | Grid de citas por ciudad | Sin fotos; solo texto. Creíble y ordenado. |

---

## 4. Estilos y diseño

| Aspecto | Valoración | Notas |
|---------|------------|--------|
| **Variables CSS** | ✅ | `--navy`, `--gold`, `--gold-light`, `--marble` en `:root` e `index.html`. |
| **Tipografía** | ✅ | Playfair Display (serif) + DM Sans; uso consistente de `.font-luxury`. |
| **Colores** | ✅ | Navy (#0A1128), oro (#D4AF37), mármol; contraste suficiente. |
| **Responsive** | ✅ | Breakpoints sm/md/lg en Tailwind; grid y espaciado adaptativos. |
| **Scrollbar** | ✅ | Estilizada en `index.css`. |
| **Reduced motion** | ✅ | `prefers-reduced-motion` respetado. |
| **Foco** | ✅ | `focus-visible` con anillo oro en enlaces y botones. |

---

## 5. Accesibilidad

| Criterio | Estado |
|----------|--------|
| Saltar al contenido | ✅ |
| Encabezados semánticos (h1, h2, h3) | ✅ |
| `aria-label` en botones de carrusel y menú | ✅ |
| `aria-expanded` / `aria-controls` en FAQ y menú móvil | ✅ |
| Contraste texto/fondo | ✅ Aceptable (navy/oro sobre blanco/navy) |
| Alt en imágenes | ⚠️ Algunas con `alt=""` (decorativas); Hero y carruseles con alt descriptivo |

Recomendación: Revisar que todas las imágenes informativas tengan `alt` descriptivo; las puramente decorativas pueden mantener `alt=""`.

---

## 6. Rendimiento

| Práctica | Estado |
|----------|--------|
| Preload LCP (Hero) | ✅ |
| Preconnect Unsplash / PostImg | ✅ |
| `loading="lazy"` en imágenes below-the-fold | ✅ |
| `fetchPriority="high"` en Hero | ✅ |
| Fuentes (Google Fonts) | ✅ Preconnect |

Mejoras sugeridas: WebP, URLs de mayor resolución solo donde se necesiten, y minificación de CSS/JS en build para acercar Lighthouse a 90+.

---

## 7. SEO y meta

| Elemento | Estado |
|----------|--------|
| `title` | ✅ Descriptivo (AVM \| Arquitectura Facial & Smile Design — Cali) |
| `meta description` | ✅ |
| `lang="es"` | ✅ |
| `theme-color` | ✅ |
| OG (og:image, og:title, og:description) | ❌ No presentes — mejoran compartido en redes |

---

## 8. Calificación global

| Criterio | Puntuación | Comentario |
|----------|------------|------------|
| **Identidad visual** | 9/10 | Navy, oro, mármol, tipografía y jerarquía muy coherentes. |
| **Estructura y contenido** | 8,5/10 | Flujo claro, precios, FAQ, reseñas, proceso. MiniBlog y Sinergia suman credibilidad. |
| **Imágenes** | 6,5/10 | Hero bien; resto con riesgo de verse pequeñas o pixeladas (PostImg sin tamaño, Unsplash 800px en bloques grandes). |
| **Conversión (CRO)** | 8/10 | CTAs claros, WhatsApp por servicio, sticky button. |
| **Mobile-first** | 8/10 | Nav y botones usables; imágenes con object-contain evitan recortes raros. |
| **Accesibilidad** | 8/10 | Skip link, ARIA en carrusel/FAQ/menú, focos visibles. |
| **Rendimiento** | 7,5/10 | Buenas bases; falta WebP y optimización de tamaño de imagen. |
| **SEO / Meta** | 7,5/10 | Title y description bien; faltan meta OG. |

---

## Puntuación global: **7,9 / 10**

La landing transmite **lujo clínico**, **claridad** y **confianza**. El principal punto débil es la **optimización y tamaño de las imágenes** (origen, resolución y uso de `object-contain`/`object-cover`), que afecta percepción de calidad y, en parte, rendimiento. Con los ajustes de imágenes indicados en §2.2 y meta OG, es razonable apuntar a **8,5–9/10** sin cambiar la estructura.

---

## Resumen de acciones recomendadas (sin aplicar aún)

1. **Imágenes “grandes” y nítidas**  
   - PostImg: usar/servir versiones **≥1200px** de ancho.  
   - Unsplash: en GalleryCarousel y MedicalTourism (y cualquier bloque ancho), usar **w=1200** o **w=1600**.  
   - Valorar **object-cover** en carruseles/tarjetas si se acepta recorte para que “llenen” el espacio.

2. **Contenedores**  
   - Aumentar ancho máximo donde se quiera más impacto (ej. BeforeAfter, GalleryCarousel).

3. **Meta OG**  
   - Añadir `og:image`, `og:title`, `og:description` (y Twitter card si aplica).

4. **WebP**  
   - Introducir en build o en servidor para reducir peso y mejorar rendimiento.

Cuando quieras, podemos bajar esto a cambios concretos archivo por archivo (por ejemplo: “solo cambiar URLs de imágenes” o “solo BeforeAfter y GalleryCarousel”) y los voy aplicando según me indiques.
