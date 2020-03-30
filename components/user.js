let user = {
    props: {
        user:{},
        index:''
    },

    template: `<div class="user">
            <article>{{user.name}}</article>
        </div>`,

    methods:{
        userClick(){
            console.log(this)
            this.$emit('click-user', this.user)
        }
    }
}

export default user