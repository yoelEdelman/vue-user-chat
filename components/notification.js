let notification = {
    props : {
        name: '',
        message: ''
    },

    template: `
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
          <strong>{{name}}</strong> a rejoint la conversation
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
`
}

export default notification