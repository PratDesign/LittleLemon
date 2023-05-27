const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/about', anchorable: true });
pages.set('menu', { name: 'Menue', path: '/menu', anchorable: true });
pages.set('bookings', {
  name: 'Reservation',
  path: '/bookings',
  anchorable: true
});
pages.set('confirmedBooking', {
  name: 'Confirmed Booking',
  path: '/confirmed-booking',
  anchorable: false
});
pages.set('orderOnline', {
  name: 'Order Online',
  path: '/order-online',
  anchorable: true
});
pages.set('signup', { name: 'Signup', path: '/login', anchorable: true });
pages.set('login', { name: 'Login', path: '/login', anchorable: true });

export default pages;