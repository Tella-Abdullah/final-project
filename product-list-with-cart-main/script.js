function cartApp() {
    return {
      items: [
      { id: 1, name: 'Waffle with Berries', price: 6.50, image: '../src/images/image-waffle-desktop.jpg', inCart: false, quantity: 0 },
        { id: 2, name: 'Vanilla Bean Crème Brûlée', price: 7.00, image: '../src/images/image-creme-brulee-desktop.jpg', inCart: false, quantity: 0 },
        { id: 3, name: 'Macaron Mix of Five', price: 8.00, image: '../src/images/image-macaron-desktop.jpg', inCart: false, quantity: 0 },
        { id: 4, name: 'Classic Tiramisu', price: 5.50, image: '../src/images/image-tiramisu-desktop.jpg', inCart: false, quantity: 0 },
        { id: 5, name: 'Pistachio Baklava', price: 4.00, image: '../src/images/image-baklava-desktop.jpg', inCart: false, quantity: 0 },
        { id: 6, name: 'Lemon Meringue Pie', price: 5.00, image: '../src/images/image-meringue-desktop.jpg', inCart: false, quantity: 0 },
        { id: 7, name: 'Red Velvet Cake', price: 4.50, image: '../src/images/image-cake-desktop.jpg', inCart: false, quantity: 0 },
        { id: 8, name: 'Salted Caramel Brownie', price: 5.50, image: '../src/images/image-brownie-desktop.jpg', inCart: false, quantity: 0 },
        { id: 9, name: 'Vanilla Panna Cotta', price: 6.50, image: '../src/images/image-panna-cotta-desktop.jpg', inCart: false, quantity: 0 }
      ],
      cart: [],
      orderConfirmed: false,

      addToCart(item) {
        item.inCart = true;
        item.quantity = 1;
        this.cart.push(item);
      },

      increaseQuantity(item) {
        item.quantity++;
      },

      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(item);
        }
      },

      removeFromCart(item) {
        item.inCart = false;
        item.quantity = 0;
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
      },

      get cartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      confirmOrder() {
        this.orderConfirmed = true;
      },

      startNewOrder() {
        this.cart.forEach(item => {
          item.inCart = false;
          item.quantity = 0;
        });
        this.cart = [];
        this.orderConfirmed = false;
      },
    };
  }