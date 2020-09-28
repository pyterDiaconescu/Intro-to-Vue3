const app = Vue.createApp({
  data(){
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inStock: true,
      details: ['50% cotton', '30% whool', '20% polyester']
    }
  }
})
