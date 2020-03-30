let message = {
    props: {
        message:{},
    },

    template: `<div class="forLeft">
                <div class="leftMsg">
                    <article class="headerMsg">
                        <img :src="message.avatar">
                        <span>{{message.name}}</span>
                    </article>
                    <p>      {{ message.message }}             </p>
                </div>
            </div>`,

}

export default message