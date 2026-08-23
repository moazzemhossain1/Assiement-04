"use strict";
function formatBookingConfirmation(booking) {
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
}
const rahime = formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" });
console.log(rahime);
