import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer MZUHhbFNJVxIJADJ0NAOEMUsiRqv6SHgS7qQ-1HyigHArtRIkLeefKU-pG5x6umm3DnDtAYLyKMA6-sv1Lh34uF_f9uWjRYe0kQFkyT9gcuKJdMKks90n6FlcyjfX3Yx'
    }
})