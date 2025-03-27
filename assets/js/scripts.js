document.addEventListener('DOMContentLoaded', () => {
    console.log('Stránka je načítaná!');
  
    // Príklad: Načítanie dát z Workera pre chat
    const chatLink = document.querySelector('a[href="/chat"]');
    if (chatLink) {
      chatLink.addEventListener('click', async (e) => {
        e.preventDefault();
        const response = await fetch('/chat');
        const message = await response.text();
        alert(message);
      });
    }
  });