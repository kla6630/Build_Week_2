const music = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=rap", {
            method: "GET"
        });
        if (res.ok) {
            let musicList = await res.json();
            console.log(res)
            let card = document.getElementById("container-music");
            console.log(musicList.data)

            
            for (let i = 0; i < 8; i++) {
                const artista = musicList.data[i]
                card.innerHTML += 
                
                `


                    <div class="row">
                        <div class="col-2" id="altro_card">
                        <img src="${artista.album.cover_big}"/>
                        <h4>${artista.title}</h4>
                        <h5>${artista.album.title}</h5>
                        </div>
                    </div>


                        `;

            };
        } else {
            console.log("qualcosa è andato storto");
        }
    } catch (error) {
        console.log(error);
    }
};

music();


const header = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=rap", {
            method: "GET"
        });
        if (res.ok) {
            let pippoList = await res.json();
            console.log(res)
            let card = document.getElementById("headerFetch");
            console.log(pippoList.data)

            
            for (let i = 0; i < 1; i++) {
                const artista = pippoList.data[i]
                card.innerHTML += 
                
                `
                    <div>
              <a href="#"
                ><img
                  src="${artista.album.cover_big}"
                  id="album_pg_header_img"
              /></a>
            </div>

            <div>
              <div class="album_page_header_text_box">
                <h5 id="album_page_header_album_word">${artista.album.title}</h5>
                <h1 id="album_page_header_song_title">${artista.title}</h1>
                <ul id="album_page_header_last_row">
                  <li>
                    <a href="#"
                      ><img
                        src="http://placekitten.com/50/50"
                        id="author_img_album_page"
                    /></a>
                  </li>
                  <li><h5 id="album_page_header_song_author">Author</h5></li>
                  <li><h5 id="album_page_header_song_year">year</h5></li>
                  <li>
                    <h5 id="album_page_header_song_number_of_tracks">
                      8 tracks,
                    </h5>
                  </li>
                  <li>
                    <h5 id="album_page_header_song_album_length">
                      53 min 20sec.
                    </h5>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>


                        `;

            };
        } else {
            console.log("qualcosa è andato storto");
        }
    } catch (error) {
        console.log(error);
    }
};

header();






























let api = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let id = "12047934";

const fetchAlbum = async () => {
  let res = await fetch(api + id);
  let data = await res.json();
  console.log(data);
  return data;
};

const album = async () => {
  let albums = await fetchAlbum();
  let headAlbumPage = document.getElementById("headAlbumPage");
  headAlbumPage.innerHTML = `            
    <div class="col d-lg-flex align-items-end ">
    <div class="d-flex">
      <div class="arrowBack d-lg-none "><i class="bi bi-arrow-left"></i></div>
      <div class=" d-flex align-items-end"> <img id="imgAlbum" src="${albums.cover_medium}" alt=""></div>
    </div>
    <div class="mainAlbumPage">
      <p class="d-sm-none d-md-inline">Album</p>
      <h2 class="text-start ">${albums.title}</h2>
      <p class="detailsAlbum d-sm-none d-lg-inline"><img class="miniImgAlbum" src="${albums.artist.picture_small}" alt="">${albums.artist.name} • ${albums.realease_date}
      ${albums.realease_date} • ${albums.nb_tracks}, ${albums.tracks.data.duration}</p>
      <p class="d-sm-inline d-md-inline d-lg-none">${albums.artist.name} • ${albums.realease_date}</p>
    </div>
  </div>
  `;
};

window.onload= async ()=>{
    await album()
}
















//Sezione Player



const asyncAwaitExample7 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q= the highlights "
    );

    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      let listReference = document.querySelector("#footer");

      data.data.forEach((album) => {
        if (album.id === 1225758602) {
          listReference.innerHTML =
            listReference.innerHTML +
            `
            
                  
                  
                  








            <div class="col">
            <div class="row flex-nowrap">
              <div class="col col-bg d-flex align-items-center">
                <a href="#"
                  ><img src=${album.album.cover} id="player_left_img"
                /></a>
                <div id="player_left_text">
                  <ul>
                    <li id="player_left_text_li">
                      <a class="text-decoration-none" href="#"><h5>${album.title}</h5></a>
                    </li>
                    <li id="player_left_text_li">
                      <a class="text-decoration-none" href="#"><h6>${album.artist.name}</h6></a>
                    </li>
                  </ul>
                </div>
                <div id="player_left_icon"><i class="bi bi-heart-fill"></i></div>
              </div>
    
              <div
                class="col col-bg d-flex flex-wrap flex-column justify-content-between align-items-center"
              >
                <div class="player-buttons d-flex">
                  <a href="#"><i class="bi bi-shuffle"></i> </a>
                  <a href="#"><i class="bi bi-skip-start-fill"></i> </a>
                  <a href="#"
                    ><i class="player-button-play bi bi-play-circle-fill"></i>
                  </a>
                  <a href="#"><i class="bi bi-skip-end-fill"></i> </a>
                  <a href="#"><i class="bi bi-repeat"></i> </a>
                </div>
    
                <div class="player-timeline d-flex">
                  <span>0:00</span>
                  <progress
                    class="player-progress-bar"
                    id="file"
                    max="100"
                    value="20"
                  >
                    100%
                  </progress>
                  <span>3:00</span>
                </div>
              </div>
              <div class="col col-bg" id="player_right_items">
                <div class="player-buttons-right d-flex">
                  <a href="#"><i class="bi bi-mic-fill"></i></a>
                  <a href="#"><i class="bi bi-card-list"></i></a>
                  <a href="#"><i class="bi bi-pc-display"></i></a>
                  <div class="d-flex justify-content-center align-items-center">
            <a href="#"><i class="bi bi-volume-down"></i></a>
            <progress
              class="player-volume-bar mb-4"
              id="file"
              max="100"
              value="20"
            >
              100%
            </progress>
                </div>
              </div>
            </div>
          </div>





                  
                  `;
        }
      });
    } else {
      console.log("Qualcosa è andato storto con la nostra chiamata!");
    }
  } catch (error) {
    console.log(error);
  }
};

asyncAwaitExample7();













