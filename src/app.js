let app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description: 'A pair of socks. Nothing fancy',
    details: ["80% cotton", "20% polyester", "Gender neutral"],
    onSale: true,
    cart: 0,
    selectedVariant: 0,
    variants: [
      {
        variantId: 1,
        variantColor: 'green',
        variantImage: './img/vmSocks-green.jpg',
        variantQuantity: 15
      },
      {
        variantId: 2,
        variantColor: 'blue',
        variantImage: './img/vmSocks-blue.jpg',
        variantQuantity: 10
      }
    ],
    sizes: [
      "S", "M", "L"
    ]
  },
  computed: {
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0;
    },
    variantInventory() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    emptyCart() {
      return this.cart === 0;
    },
    saleMessage() {
      return `${this.brand} ${this.product} is currently on sale; hurry and get yours before it's too late!`
    }
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
    updateProduct(index) {
      this.selectedVariant = index;
    }
  }
});