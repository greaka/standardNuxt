const msg = 'world!'

self.addEventListener('message', event => {
    console.log(JSON.stringify(event.data))
    self.postMessage({ hello: msg })
})

self.postMessage({ hello: 'from web worker' })