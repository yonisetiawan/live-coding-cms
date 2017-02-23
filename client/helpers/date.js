const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var date = {
  localDate: function(input) {
    return input.toLocaleDateString("en-US",options)
  }
}

window.Images = date
