"use strict";
//Store name of places in the world I would  like to visit in array .
let places = ['Turkey', 'Kazakhstan', 'Saudia Arabia', 'Palestin', 'Nepal'];
//print array in its original order
console.log('Original Order :', places);
//Print array in alphabetical order without modifying the actual list.
console.log('Alphabetical Order : ', [...places].sort());
//Show that  array is still in its original order by printing it.
console.log('Check Order', places);
//Print  array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse Alphabetical Order: ', [...places].sort().reverse());
//Print  array to check array  is still in its original order by printing it again.
console.log('Check Order:', places);
//reverse the order of the array and print it
places.reverse();
console.log('Reverse Alphabetical Order:', places);
//// Reverse the order again to return to the original and print it
places.reverse();
console.log("Original array restored:", places);
//Sort  array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Sorted array in alphabetical order:", places);
//Sort to change  array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort().reverse();
console.log("Sorted array in reverse alphabetical order:", places);
