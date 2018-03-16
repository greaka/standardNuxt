const msg = 'world!'

self.addEventListener('message', event => {
    console.log(event.data)
    self.postMessage({ hello: msg })
})

self.postMessage({ hello: 'from web worker' })