let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'img/vmSocks-green.jpg',
    description: 'A pair of socks. Nothing fancy',
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender neutral"],
    variants: [
      {
        variantId: 1,
        variantColor: 'green'
      },
      {
        variantId: 2,
        variantColor: 'blue'
      }
    ],
    sizes: [
      "S", "M", "L"
    ]
  }
});