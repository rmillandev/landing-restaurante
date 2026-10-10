# Miga & Mesa

Landing de demostración para restaurante o cafetería. Hecha con Next.js, React y TypeScript, siguiendo la idea de WebBarberia: una página atractiva con una acción de reserva fácil de adaptar a un cliente real.

## Incluye

- Portada editorial, menú filtrable, historia y formulario de reserva.
- Selección de plato que se incorpora al mensaje de WhatsApp.
- Diseño adaptable a móvil y escritorio, con navegación por teclado y opción de movimiento reducido.
- Fotografías originales generadas para esta demo en `public/images`.

## Ejecutar

Requiere Node.js 20.9 o superior.

```bash
npm ci
npm run dev
```

Abre http://localhost:3000. Para comprobar: `npm run typecheck` y `npm run build`.

## Adaptar para un negocio real

1. Añade el número de WhatsApp, dirección, horario y enlace de Instagram en `lib/site-config.ts`.
2. Cambia el nombre, los platos, los precios y los textos en `app/page.tsx`.
3. Sustituye las fotografías de `public/images` por fotos reales si el negocio ya las tiene.

Los platos, precios e imágenes son ilustrativos. Mientras no haya número configurado, WhatsApp abrirá el mensaje sin destinatario.
