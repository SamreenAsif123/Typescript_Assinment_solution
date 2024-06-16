let guestList: string[] = ["Sara", "Ali", "Fatimah", "Neha"];

guestList.forEach(listGuest => console.log(`Asslam o Alikum ${listGuest}, \n You are warmly invited for a dinner with me`))




let guestCantMakeIt = guestList[2];
console.log (` \n Unfortunately ${guestCantMakeIt}  can't make it  to the dinner `)

console.log('---------------------------------------------------')
guestList.splice(2,2,'Faiza')

guestList.forEach(newGuest => console.log(`Asslam o Alikum ${newGuest}, \n Would you like to dinner with me?`))


console.log ('Great news ! I found a bigger dinner table, so now I can invite more guests!')


//Add one new guest at the beginning of the list 

guestList.unshift('Samreen')

//Add new guest at the end of the list
guestList.push('Nadia')

//Get a  middle  index of the array list 
let middleGuestName : number =Math.floor(guestList.length /2);

//adding new guest name at middle of the arrray list
guestList.splice(middleGuestName, 0 , "Marium")


//Updated list of Our Guest 
console.log ('--------Updated Guest list----------')


//Print message to updated list
guestList.forEach( oneGuest=> {
    console.log(`Asslam o Alikum ${oneGuest}, \n  Would you like to dinner with me?`)
});


