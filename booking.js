

const bookingSchema = new mongoose.Schema({
  passengerName: String,
  contact: String,
  email: String,
  flightNumber: String,
  journeyDate: Date,
  from: String,
  to: String,
  totalPassengers: Number,
  assistanceRequired: Boolean,
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);