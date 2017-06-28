$(document).ready( () => {



  $.get('/api/hotels')
  .then((hotels) => {
    console.log('hello');
    hotels.forEach((hotel) => {
      console.log(hotel.name);
    });
  })
  .catch(console.error.bind(console));





})
