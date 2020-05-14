/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// https://api.github.com/users/shighetari
// axios.get(`https://api.github.com/users/shighetari`)
// .then(response =>{
// // debugger
// })
// .catch(error => {

// })
// .finally(()=>{
  
//   console.log('done')
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
 

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function markUp(objattrs){
console.log(objattrs)
  // let {imageUrl, usersName, usersUserName, usersLocation, addressToUserProfile, 
  //   userFollowCount, userFollowingCount, UserBio} = objattrs
  
  // consts create element  \\

  const divCard = document.createElement('div')
  const imgURL = document.createElement('img')
  const divCardInfo = document.createElement('div')
  const h3User = document.createElement('h3')
  const pUsername = document.createElement('p')
  const pLocations = document.createElement('p')
  const pProfile = document.createElement('p')
  const aLink = document.createElement('a')
  const pFollowers = document.createElement('p')
  const pFollowing = document.createElement('p')
  const pBio = document.createElement('p')

// append child \\

  divCard.appendChild(imgURL)
  divCard.appendChild(divCardInfo)
  divCardInfo.appendChild(h3User)
  divCardInfo.appendChild(pUsername)
  divCardInfo.appendChild(pLocations)
  divCardInfo.appendChild(pProfile)
  pProfile.appendChild(aLink)
  divCardInfo.appendChild(pFollowers)
  divCardInfo.appendChild(pFollowing)
  divCardInfo.appendChild(pBio)
  
  // class list \\

  divCard.classList.add('card')
  divCardInfo.classList.add('card-info')
  h3User.classList.add('name')
  pUsername.classList.add('username')
  
  // adding text content \\
 
  imgURL.src = objattrs.imageUrl
  h3User.textContent = objattrs.usersName
  pUsername.textContent = objattrs.usersUserName
  pLocations.textContent = `Location: ${objattrs.usersLocation}`
  pProfile.textContent = `Profile:` 
  aLink.href = objattrs.addressToUserProfile
  pFollowers.textContent = `Followers: ${objattrs.userFollowCount}`
  pFollowing.textContent = `Following: ${objattrs.userFollowingCount}`
  pBio.textContent =`Bio: ${objattrs.UserBio}`
  console.log(divCard)
  return divCard
}
// console.log(markUp())


function fetchmarkUp(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(response =>{
    console.log(response)
    const user = markUp({
       
        imageUrl: response.data[`avatar_url`],
        usersName: response.data.name,
        usersUserName:username,
        usersLocation:response.data.location, 
        addressToUserProfile:response.data[`html_url`], 
        userFollowCount:response.data.followers, 
        userFollowingCount:response.data.following, 
        UserBio:response.data.bio  
      })
        console.log(user)
        document.querySelector(".cards").appendChild(user)
  })
  .catch(error => {
      console.log(`you failure`)
  })
  .finally(()=>{
    
    console.log('done')
  })

}

fetchmarkUp(`shighetari`)


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const friendsArray = ['martakode', `dustinmyers`, `justsml`, `luishrd`, `bigknell`];
friendsArray.forEach(element => {
  fetchmarkUp(element)
})