# 🔧 Logia Hipatia — Versión 2.0 (Fusión con diseño actual)

Este documento contiene los **7 cambios estratégicos** para transformar la web actual en una versión que no solo sea estética, sino también clara, orientadora y efectiva.

---

## 1. 🔥 Reemplazo del HERO (solo contenido)

**Objetivo:** claridad inmediata para el visitante no iniciado.

Reemplazar el texto actual por:

```html
<p class="text-gold/80 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium mb-4 md:mb-6">
Espacio de reflexión y desarrollo personal
</p>

<h1 class="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
Logia Hipatia de Alejandría
</h1>

<p class="text-white/70 text-sm md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
Una comunidad dedicada al estudio, la reflexión y el crecimiento interior a través de la tradición de la Francmasonería.
</p>

<a href="contacto.html"
   class="inline-block mt-8 bg-gold hover:bg-gold-light text-navy-dark font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
   Solicitar información
</a>
```

---

## 2. 🧠 Nueva sección: ¿Qué es esta Logia?

**Ubicación:** después de las 3 tarjetas principales.

```html
<section class="bg-cream py-20 md:py-28">
  <div class="max-w-4xl mx-auto px-6 md:px-10 text-center">

    <h2 class="font-display text-navy text-3xl md:text-4xl font-semibold mb-6">
      ¿Qué es esta Logia?
    </h2>

    <p class="text-navy/70 text-base md:text-lg leading-[1.8] mb-6">
      Somos una comunidad de personas que buscan comprender mejor al ser humano, desarrollar su pensamiento y cultivar valores como la razón, la ética y la fraternidad.
    </p>

    <p class="text-navy/60 text-base md:text-lg leading-[1.8]">
      Trabajamos dentro de la tradición de la Francmasonería, una escuela de formación simbólica y filosófica con siglos de historia.
    </p>

  </div>
</section>
```

---

## 3. ⚙️ Nueva sección: ¿Qué hacemos?

```html
<section class="bg-white py-20 md:py-28">
  <div class="max-w-5xl mx-auto px-6 md:px-10 text-center">

    <h2 class="font-display text-navy text-3xl md:text-4xl font-semibold mb-10">
      ¿Qué hacemos?
    </h2>

    <div class="grid md:grid-cols-2 gap-8 text-left">

      <div class="bg-cream p-6 rounded-xl">
        <h3 class="font-semibold text-navy mb-2">Estudio filosófico</h3>
        <p class="text-navy/60">Exploramos ideas, símbolos y tradiciones del pensamiento.</p>
      </div>

      <div class="bg-cream p-6 rounded-xl">
        <h3 class="font-semibold text-navy mb-2">Trabajo interior</h3>
        <p class="text-navy/60">Cada miembro desarrolla su propio proceso de crecimiento.</p>
      </div>

      <div class="bg-cream p-6 rounded-xl">
        <h3 class="font-semibold text-navy mb-2">Reflexión ética</h3>
        <p class="text-navy/60">Buscamos comprender mejor nuestras decisiones y acciones.</p>
      </div>

      <div class="bg-cream p-6 rounded-xl">
        <h3 class="font-semibold text-navy mb-2">Diálogo respetuoso</h3>
        <p class="text-navy/60">Intercambio de ideas sin dogmas ni imposiciones.</p>
      </div>

    </div>
  </div>
</section>
```

---

## 4. 🧭 Nueva sección: ¿Es para ti?

```html
<section class="bg-cream py-20 md:py-28">
  <div class="max-w-4xl mx-auto px-6 md:px-10 text-center">

    <h2 class="font-display text-navy text-3xl md:text-4xl font-semibold mb-6">
      ¿Es para ti?
    </h2>

    <p class="text-navy/70 mb-6">
      La masonería no es para todos.
    </p>

    <ul class="text-navy/60 space-y-2 mb-6">
      <li>• Interés genuino por el autoconocimiento</li>
      <li>• Valoración del pensamiento crítico</li>
      <li>• Búsqueda de crecimiento personal profundo</li>
    </ul>

    <p class="text-navy/50">
      No es un espacio para intereses económicos, políticos o de influencia.
    </p>

  </div>
</section>
```

---

## 5. 🚪 Nueva sección: ¿Cómo acercarse?

```html
<section class="bg-white py-20 md:py-28 text-center">
  <div class="max-w-3xl mx-auto px-6 md:px-10">

    <h2 class="font-display text-navy text-3xl md:text-4xl font-semibold mb-6">
      ¿Cómo acercarse?
    </h2>

    <p class="text-navy/60 mb-6">
      El primer paso es establecer contacto. A partir de allí se inicia un proceso gradual de conocimiento mutuo.
    </p>

    <a href="contacto.html"
       class="inline-block bg-gold text-navy-dark px-8 py-4 rounded-xl uppercase text-sm font-semibold">
       Iniciar contacto
    </a>

  </div>
</section>
```

---

## 6. 🔚 CTA Final

```html
<section class="bg-navy py-20 text-center">
  <h2 class="font-display text-white text-3xl mb-6">
    Si este camino resuena contigo
  </h2>

  <a href="contacto.html"
     class="bg-gold text-navy-dark px-8 py-4 rounded-xl font-semibold uppercase">
     Escríbenos
  </a>
</section>
```

---

## 7. 📩 Mejora en contacto

**Ubicación:** encima del formulario en `contacto.html`

```html
<p class="text-white/60 text-sm mb-6">
Si deseas conocer más o iniciar un proceso de acercamiento,
déjanos tu mensaje. Te responderemos de forma discreta.
</p>
```

---

# 🎯 Resultado esperado

* Mayor claridad para visitantes nuevos
* Mejor tasa de contacto
* Comunicación alineada con propósito masónico
* Mantiene elegancia + gana efectividad

---

# 🚀 Próximos pasos sugeridos

* SEO local (Ecuador / Ambato)
* Sistema de postulantes
* Blog filosófico (alto valor)

---
