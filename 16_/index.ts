let guestList: string[] = ["Sara", "Faiza", "Ali"];
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, \n You are warmly invited to dinner. `);
}

// print statement at the end of your program stating the name of the guest who can’t make it.
let guestUnableToAttend = "Ali";
console.log(`${guestUnableToAttend} can't make it to the dinner.`);

//Replace te name of the guest who can’t make it with the name of the new person who is  invited.
let newGuest = "Shahnaz";
let index = guestList.indexOf(guestUnableToAttend);
if (index !== -1) {
  guestList[index] = newGuest;
} else {
  // If the guest who can't make it isn't found in the list, add the new guest to the list.
  guestList.push(newGuest);
}
//Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest},\nYou are warmly invited to dinner.`);

}


// Print statement to inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");


// Add one new guest to the beginning of the array
guestList.unshift('Amna');

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, 'Farwa');

// Add one new guest to the end of the list
guestList.push('Namal');

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest},\nYou are warmly invited to dinner.`);

}