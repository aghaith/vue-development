const data = {
    name: 'Abbas'
}
const observedData = new Proxy(data, {
    set (target, key, value) {
        document.querySelector("#name").innerText = value
        target[key] = value
    }
})
observedData.name = 'Ahmad'
console.log(observedData.name)
