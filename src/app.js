let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'img/vmSocks-green.jpg',
    description: 'A pair of socks. Nothing fancy',
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender neutral"],
    cart: 0,
    variants: [
      {
        variantId: 1,
        variantColor: 'green',
        variantImage: './img/vmSocks-green.jpg'
      },
      {
        variantId: 2,
        variantColor: 'blue',
        variantImage: './img/vmSocks-blue.jpg'
      }
    ],
    sizes: [
      "S", "M", "L"
    ]
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if(this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});