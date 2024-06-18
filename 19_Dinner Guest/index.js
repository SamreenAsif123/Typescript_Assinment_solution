"use strict";
let guestList = ["Sara", "Ali", "Fatimah", "Neha"];
guestList.forEach((listGuest) => console.log(`Asslam o Alikum ${listGuest}, \n You are warmly invited for a dinner with me`));
let guestCantMakeIt = guestList[2];
console.log(` \n Unfortunately ${guestCantMakeIt}  can't make it  to the dinner `);
console.log("---------------------------------------------------");
guestList.splice(2, 2, "Faiza");
guestList.forEach((newGuest) => console.log(`Asslam o Alikum ${newGuest}, \n Would you like to dinner with me?`));
console.log("Great news ! I found a bigger dinner table, so now I can invite more guests!");
//Add one new guest at the beginning of the list
guestList.unshift("Samreen");
//Add new guest at the end of the list
guestList.push("Nadia");
//Get a  middle  index of the array list
let middleGuestName = Math.floor(guestList.length / 2);
//adding new guest name at middle of the arrray list
guestList.splice(middleGuestName, 0, "Marium");
//Updated list of Our Guest
console.log("--------Updated Guest list----------");
//Print message to updated list
guestList.forEach((oneGuest) => {
    console.log(`Asslam o Alikum ${oneGuest}, \n  Would you like to dinner with me?`);
});
//Shrinking Guest List
//Print a messsage we can invite only two people for dinner
console.log("Unfortunately new dinner table won’t arrive in time for the dinner,so I can invite only two people for dinner");
//print a message to people that I can't not invite you
while (guestList.length > 2) {
    let removeGuestName = guestList.pop();
    console.log(`Sorry,  ${removeGuestName} I can't invite you for dinner today `);
}
console.log("------Sending Invitation to the Last two guest-------");
//print a message to remaining guest to inform them that you are invited
guestList.forEach((lastTwoName) => {
    console.log(`Dear ${lastTwoName}, You are still invited for a dinner today`);
});
//Remove Remaining guest names from the list
guestList.pop();
guestList.pop();
console.log('------guest list after removing remaining guest names------');
//print guest list to check for guest
console.log(`Empty guest list : ${guestList}`);
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`\nNumber of people invited to dinner: ${guestList.length}`);
