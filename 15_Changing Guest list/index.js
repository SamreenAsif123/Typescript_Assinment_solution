"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ['Sara', 'Faiza', 'Ali'];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, \n You are warmly invited to dinner. `);
}
// print statement at the end of your program stating the name of the guest who can’t make it.
let guestUnableToAttend = 'Ali';
console.log(`${guestUnableToAttend} can't make it to the dinner.`);
//Replace te name of the guest who can’t make it with the name of the new person who is  invited.
let newGuest = 'Shahnaz';
let index = guestList.indexOf(guestUnableToAttend);
if (index !== -1) {
    guestList[index] = newGuest;
}
else {
    // If the guest who can't make it isn't found in the list, add the new guest to the list.
    guestList.push(newGuest);
}
//Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach(guest => {
    console.log(`Dear ${guest},\nYou are warmly invited to dinner.`);
});
