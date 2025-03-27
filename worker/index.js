addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    if (url.pathname === '/chat') {
      return new Response('Ahoj, toto je tvoj chat!', { status: 200 });
    }
    if (url.pathname === '/login') {
      return new Response('Prihlásenie funguje, heslo je: ' + process.env.MOJE_HESLO, { status: 200 });
    }
    return fetch(request); // Ak nie je /chat ani /login, vráti tvoju stránku
  }