import '../styles/index'
console.log('Hello World!')

const output = async module => {
    let hello = await import('./hello')

    const { parcel } = hello.default
    hello.default = Object.assign({}, hello.default, {
        parcel: 'Hello Parcel Bundler!'
    })

    return hello.default.parcel
}

output('./hello').then(hello => {
    document.querySelector('#app').innerHTML = hello
})

