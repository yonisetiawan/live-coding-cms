var register = new Vue({
  el: '#register',
  data: {
    message: 'Welcome to CMS LIVE',
    register: {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      console.log(app.register);
      // axios.post('http://localhost:3000/users/register', {
      //     addRegister: app.register,
      // }).then(function (result) {
      //     app.register.name = ''
      //     app.register.email = ''
      //     app.register.password = ''
      //   }).catch(function (error) {
      //     console.log(error)
      //   })
    },
  }
})
