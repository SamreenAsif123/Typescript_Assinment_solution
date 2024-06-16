let guestList: string[] = ["Sara", "Ali", "Neha"];

guestList.forEach(listGuest => console.log(`Asslam o Alikum ${listGuest}, \n You are warmly invited for a dinner with me`))




let guestCantMakeIt = guestList[2];
console.log (` \n Unfortunately ${guestCantMakeIt}  can't make it  to the dinner `)

console.log('---------------------------------------------------')
guestList.splice(2,2,'Faiza')

guestList.forEach(newGuest => console.log(`Asslam o Alikum ${newGuest}, \n Would you like to dinner with me?`))






