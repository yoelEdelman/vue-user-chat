import user from './components/user.js'
import notification from "./components/notification.js";
import message from "./components/message.js";

let bus = new Vue

bus.$on('add-user', (user) => {
    console.log(user)
})



var app = new Vue({
    components:{
        user, notification,message
    },
    el: '#app',
    data: {
        message: 'Hello Vue!',
        usersArray: [],
        messageCo: "a rejoint le chat",
        user: null,
        messages: []
    },


    mounted() {
        console.log(this)
        setInterval(this.addUser, 5000)

        bus.$on('add-user', user => {
            this.user = user
            setTimeout( () => {
                this.user = null
            },2000)
        })
        },

    methods:{
        addUser(){
            let user = faker.helpers.contextualCard()
            user.message = faker.random.words(9)
            this.usersArray.push(user)
            bus.$emit('add-user', user)
        },

        showUser(value){
            console.log(value)
            this.messages.push(value)
        }
    }
})