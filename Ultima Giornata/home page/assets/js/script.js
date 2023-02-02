

//Sezione 0 



 fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=muse`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [13636688];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("section1");
    filteredSongs.forEach((song) => {
      card.innerHTML += `





      <div
                   class="card bg-dark col-12 d-flex w-100 h-100 flex-row justify-content-between align-items-center"
                 >
                   <a href="../album page _01_02/index-album.html"><img id="img-center"
                     src=${song.album.cover_medium}
                     class="ms-5 card-img-top bg-dark w-100 h-100"
                     alt="..."
                   /></a>
                   <div
                     id="first-card"
                     class="card-body  w-25 h-100 d-flex flex-column justify-content-between"
                   >
                     <div class="w-100  d-flex justify-content-between">
                       <p>ALBUM</p>
                       <a class="btn rounded-pill text-light ">NASCONDI ANNUNCI</a>
                     </div>
                     <a href="../album page _01_02/index-album.html"><h5 class="card-title">${song.title}</h5></a>
                     <a href="../artist page/index-artist.html"><p class="card-text">${song.artist.name}</p></a>
                     <p class="card-text">Ascolta il singolo di ${song.artist.name}!</p>
                     <div class="d-flex">
                       <a href="#" class="btn btn-success rounded-pill me-3 w-25">Play</a>
                       <a
                         href="#"
                         class="btn btn-dark border border-light rounded-pill w-25"
                         >Salva</a
                       >
                     </div>
                   </div>
                 </div>
      
      



    `;
    });
  });
  
  
  
  const APIUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
  
  const fetchByQuery = async (query) => {
    const res = await fetch(`${APIUrl}${query}`)
    // const {data:[,song]} = await res.json()
    const { data: songs } = await res.json()
    return songs
  }
  
//Sezione 1


const renderFavoriteSongs1 = async () => {
  let canzoni = await fetchByQuery("techno")
  console.log(canzoni)
  let row = document.querySelector("#id-buonasera")
  let canzoniPrefe = [canzoni[1], canzoni[7], canzoni[16],canzoni[18], canzoni[3], canzoni[20]]
  canzoniPrefe.forEach((album) => {
    row.innerHTML += `
    
        
  
    <a class="col-6 col-md-4" style="width: 32%;" href="../album page _01_02/index-album.html"><div
    id="buonasera"
    class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
  >
    <img
      src="${album.album.cover}"
      class="card-img-top bg-dark w-50 h-100"
      alt="..."
    />
    <div
      class="card-body w-100 h-100 d-flex flex-column justify-content-between"
    >
      <h5 class="card-title">${album.album.title}</h5>
    </div>
  </div></a>


                     
                     
                     `
  })
}






//Sezione 2

//terza sezione
const renderFavoriteSongs = async () => {
  let canzoni = await fetchByQuery("blues")
  console.log(canzoni)
  let row = document.querySelector("#id-altro")
  let canzoniPrefe = [canzoni[0], canzoni[4], canzoni[8],canzoni[1], canzoni[9], canzoni[20]]
  canzoniPrefe.forEach((album) => {
    row.innerHTML += `
    
    
    
    
    
    
    <div id="card-altro" class="card bg-dark" style="width: 15%">
    <img
    src=${album.album.cover}
    class="card-img-top "
    alt="..."
                   />
                   <div class="card-body bg-dark text-light">
                     <a href="../album page _01_02/index-album.html"><h5 class="w-100 card-title">${album.album.title}</h5></a>
                     <a href="../artist page/index-artist.html"><p class=" card-text">${album.artist.name}</p></a>
                     
                     </div>
                     </div>
                     
                     
                     
                     
                     
                     `
  })
}


// window.onload = async () => {
 renderFavoriteSongs()
 renderFavoriteSongs1()
 fetchByQuery()
 




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
  
        let listReference = document.querySelector("#section4");
  
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
                        <a href="#"><h5>${album.album.title}</h5></a>
                      </li>
                      <li id="player_left_text_li">
                        <a href="#"><h6>${album.artist.name}</h6></a>
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
                    <a href="#"><i class="bi bi-volume-down"></i></a>
                    <progress
                      class="player-volume-bar"
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
  





  
  
  
  
  
  
  //   let button = document.getElementById('pause')
	
  
  
  
  // 	button.addEventListener('click', () => {
    // 		button.classList.toggle('none')
    // 	})
    
    // 	let button1 = document.getElementById('play')
    
    
    
    
    // 	button1.addEventListener('click', () => {
      // 		button1.innerHTML.toggle =
      //         button1.innerHTML +
      //         `<ion-icon class="" name="pause-outline"></ion-icon>`
      // 	})
      
      
      
      
      // }



      
      
      
      
      //Sezione click





// funzioneclick( ){






// }





















let api = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const fetchSongs = async function (query) {
  let res = await fetch(`${api}${query}`);
  let { data: song } = await res.json();
  return song;
};

const mainSong = async () => {
  let canzone = await fetchSongs("dumb");
  let div = document.getElementById("dataTrack");
  let favSong = canzone[2];
  div.innerHTML += `
  <img class="img py-3" src="${favSong.album.cover_medium}" style="width: 150px"/>
  <div class="mainAlbum">
    <p>${favSong.album.title}</p>
    <div class="bodyCard">
        <a href="../../Album.html"><h1>${favSong.title}</h1></a>
        <p id="artistPage1" type="button">${favSong.artist.name}</p>
        <p>Ascolta il nuovo singolo di</p>
        <div class="buttonCard">
            <ul>
                <li class="firstButton">Play</li>
                <li class="secondButton">Salva</li>
                <i class="bi bi-three-dots"></i>
            </ul>
        </div>
    </div>
  </div>
  `;

  let titolo = document.getElementById("titolo");
  titolo.innerText = `${favSong.title}`;

  let songInfo = document.getElementById("songInfo");
  songInfo.innerHTML = `
<div class="image-container">
            <img src="${favSong.album.cover_medium}" />
          </div>
          <div class="song-description">
            <p class="title">${favSong.title}</p>
            <p class="artist">${favSong.artist.name}</p>
          </div>
`;

  let idArtist = favSong.artist.id;
  let idAlbum = favSong.album.id;
  let artista = document.getElementById("artistPage1");

  const pageArtist = () => {
    window.location.assign(`../../artist-page.html?idArtist=${idArtist}`);
    console.log(idArtist);
  };

  artista.addEventListener("click", () => {
    pageArtist();
  });

  //artista.onclick = pageArtist;

  return idArtist, idAlbum;
};

/* FIRST SECTION */
const nascondi = () => {
  let element = document.querySelectorAll(".box");
  console.log(element);
  element[0].classList.toggle("d-none");
};

let bottone = document.getElementById("hidden");

bottone.addEventListener("click", () => {
  nascondi();
});

/* SECOND SECTION */
const secondSection = async () => {
  let canzoni = await fetchSongs("song");
  let second = document.getElementById("second");
  let favSongs = [
    canzoni[6],
    canzoni[1],
    canzoni[2],
    canzoni[3],
    canzoni[4],
    canzoni[5]
  ];
  favSongs.forEach(({ title_short, album, artist }) => {
    second.innerHTML += `<div class="card col p-0" id="second-section">
      <img src="${album.cover_small}" alt="image" class="p-0 m-0">
      <div class="card-body">
        <p class="card-title">${title_short}</p>
      </div>`;
  });
};

/* THIRD SECTION */
const thirdSection = async () => {
  let canzoni = await fetchSongs("album");
  let third = document.getElementById("thirdJs");
  let albums = [
    canzoni[1],
    canzoni[2],
    canzoni[3],
    canzoni[6],
    canzoni[10],
    canzoni[11],
    canzoni[13],
    canzoni[14],
    canzoni[18],
    canzoni[19]
  ];
  let idArtist = [];
  for (let i = 0; i < albums.length; i++) {
    third.innerHTML += `
    <div class="col p-0">
    <div class="card thirdCard d-flex justify-content-between">
    <div class="d-flex flex-row d-md-block">
      <div class="img pt-1 d-flex justify-content-center">
        <img
          src="${albums[i].album.cover_medium}"
          alt=""
        />
      </div>
      <div class="cardBody p-3">
        <h5>${albums[i].album.title}</h5>
        <p class="artistPage2" type="button">${albums[i].artist.name}</p>
      </div>
    </div>
    <div
      class="albumCardFooter pt-3 d-flex justify-content-between align-items-center d-md-none"
    >
      <div>
        <i class="bi bi-heart-fill text-success"></i>
        <i class="bi bi-three-dots-vertical px-3"></i>
      </div>
      <div class="d-flex align-items-center">
        <p class="px-3">16 brani</p>
        <div
          class="palyAlbum rounded-circle d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-play-fill text-light"></i>
        </div>
      </div>
    </div>
  </div>
  </div>

    `;
    idArtist.push(albums[i].artist.id);
  }
  console.log(idArtist);
  let artista = document.querySelectorAll(".artistPage2");
  console.log(artista);
  for (let i = 0; i < artista.length; i++) {
    let pageArtist2 = () => {
      window.location.assign(`../../artist-page.html?idArtist=${idArtist[i]}`);
    };
    artista[i].addEventListener("click", pageArtist2);
  }
};

let playList = [
  "Hit italiane",
  "Top 10",
  "Sanremo 2022",
  "Alta rotazione",
  "Novità pop",
  "Internazionali",
  "Codda con sorriso",
  "No stress",
  "ASMR",
  "Cardio"
];

const play = () => {
  let div = document.getElementById("playlist");
  playList.forEach((e) => {
    div.innerHTML += `<li class="list-group-item py-1">${e}</li>`;
  });
};

window.onload = async function () {
  await mainSong();
  await secondSection();
  await thirdSection();
  play();
};
































