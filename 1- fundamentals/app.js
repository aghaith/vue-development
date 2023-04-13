const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Abbas',
            middleName: '',
            lastName: 'Ghaith',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 27,
            isPurple: false,
            selectedColor: '',
            size: 150,
            mode: 1,
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
                { name: 'Abbas', age: 27, message: 'Hello world!' },
                { name: 'Ahmad', age: 18, message: 'I like pie' },
                { name: 'Sami', age: 30, message: 'Skydiving is fun!' }
            ]
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            // event.preventDefault()

            // console.log(msg)

            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        },
        move() {
            const first = this.people.shift();

            this.people.push(first)
        }
    },
    computed: {
        fullName () {
            console.log('Full name method was called!')
            
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        circle_classes() {
            return { purple: this.isPurple }
        }
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20
            }, 3000)
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Ahmad',
//             lastName: 'Ghaith'
//         }
//     }
// }).mount('#app2')