async function FM_makeFetch(url, {method = 'GET', headers, body} = {}) {
  return fetch('http://{{website_domen}}/fetch_machine/getFetch', {
    method: 'POST',
    body: JSON.stringify({
      url: url,
      method: method,
      headers: headers,
      body: body
    })
  })
}
