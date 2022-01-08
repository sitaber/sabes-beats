var player = document.getElementById("audioPlayer");
var albums = document.getElementsByClassName("playlist");
player.src = albums.item(0).firstElementChild.children[0];

function playOnClick(e) {
  let anchorElement = document.querySelector(".playlist-item.active");
  anchorElement.classList.remove("active");
  e.preventDefault();
  console.log(e.target);
  e.target.classList.add("active");
  player.src = e.target;
  player.play();
}

function playNext(e) {
  let anchorElement = document.querySelector(".playlist-item.active")
  //let nextSong = anchorElement.nextElementSibling;
  let nextSong = anchorElement.parentElement.nextElementSibling.children[0]
  if (nextSong) {
    anchorElement.classList.remove("active");
    nextSong.classList.add("active");
    player.src = nextSong;
    player.play();
  }  
}

// Add eventListener to each "album" track in playlists
for (album of albums) {
  for (child of album.children) {
    child.firstElementChild.addEventListener("click", playOnClick, false);
    console.log(child.firstElementChild);
  }
}

player.addEventListener("ended", playNext, false)
