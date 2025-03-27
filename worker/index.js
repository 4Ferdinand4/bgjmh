addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Chat endpoint
  if (url.pathname === '/chat') {
    return new Response('Ahoj, toto je tvoj chat!', { status: 200 });
  }

  // Login endpoint
  if (url.pathname === '/login') {
    const password = process.env.MOJE_HESLO || 'defaultheslo123';
    return new Response(`Prihlásenie funguje, heslo je: ${password}`, { status: 200 });
  }

  // Presmeruj na Pages pre ostatné cesty
  return fetch(request);
}