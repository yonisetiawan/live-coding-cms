var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to HousePedia',
    houses: [],
    detailHouse: [],
    inputHouse: {
      name: '',
      address: '',
      description: '',
      price: '',
      phone: '',
      imageUrl: '',
      lat: '',
      lng: ''
    },
    editHouse: {
      _id: '',
      name: '',
      address: '',
      description: '',
      price: '',
      phone: '',
      imageUrl: '',
      lat: '',
      lng: ''
    },register: {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      axios.post('http://localhost:3000/users/register', {
          addRegister: app.register,
      }).then(function (result) {
          app.register.name = ''
          app.register.email = ''
          app.register.password = ''
        }).catch(function (error) {
          console.log(error)
        })
    },
    getAllHouses: function () {
      axios.get('http://localhost:3000/api/getAll')
        .then(function (result) {
          app.houses = result.data.reverse()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    deleteOneHouse: function (inputid) {
      axios.delete(`http://localhost:3000/api/houses/${inputid}`, {})
        .then(function (result) {
          console.log(result)
          document.getElementById(`${result.data._id}`).remove()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    editOneHouse: function (editid) {
      axios.put(`http://localhost:3000/api/houses`, {
        id: app.editHouse._id,
        name: app.editHouse.name,
        description: app.editHouse.description
      })
        .then(function (result) {
          console.log(result)
          document.getElementById(`${result.data._id}`)
          $(`#${result.data._id} span`).html(result.data.name)
          $(`#${result.data._id} p`).html(result.data.description)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    preEditOneHouse: function (editid) {
      $('#modal-edit-home').modal('open')
      axios.get(`http://localhost:3000/api/houses/${editid}`)
        .then(function (result) {
          app.editHouse._id = result.data._id
          app.editHouse.name = result.data.name
          app.editHouse.description = result.data.description
          app.editHouse.imageUrl = result.data.imageUrl
          // add maps to modal form
          var map2 = new GMaps({
            div: '#map2',
            zoom: 11,
            lat: -6.230259,
            lng: 106.8537713,
            click: function (e) {
              map.removeMarkers()
              map.addMarker({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              })
              console.log(e.latLng.lat())
              console.log(e.latLng.lng())
              x = e.latLng.lat()
              y = e.latLng.lng()
            }
          })
          // add marker
          map.addMarker({
            lat: -12.043333,
            lng: -77.028333,
            title: 'Lima',
            click: function (e) {
              alert('You clicked in this marker')
            }
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})


app.getAllHouses()
function openModalCreate () {
  $('#modal-create-home').modal('open')
  var map = new GMaps({
    div: '#map',
    zoom: 11,
    lat: -6.230259,
    lng: 106.8537713,
    click: function (e) {
      map.removeMarkers()
      map.addMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      })
      console.log(e.latLng.lat())
      console.log(e.latLng.lng())
      x = e.latLng.lat()
      y = e.latLng.lng()
    }
  })
}
function createIklan() {
    $('.small.modal')
        .modal('show');
}
