//MY FAVOURITE SONGS//
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
    let selectedIds = [13636688, 3590194, 1877068657, 3599714];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("container-fav-songs");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <div class="col-5 col-sm-4 col-md-3 my-2 d-flex">
      <div class="card my_card" style="width: 18rem">
        <img
          src="${song.album.cover_big}"
          class="card-img-top"
          alt="${song.album.title} pic"
          style="height: 65%"
        />
        <div class="card-body d-flex flex-column justify-content-center">
          <h5 class="card-title" id="title">${song.title}</h5>
          <p class="card-text">${song.album.title}</p>
          
        </div>
      </div>
    </div>
    `;
    });
  });

//MY FAVOURITE SONG//
fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=guns`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [518458092];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("container-fav-song");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
        <div>
          <img
            src="${song.album.cover_big}"
            class="card-img img-fluid rounded-start"
            alt="${song.album.title}"
          />
        <div class="my_card_text">
          <h5 class="card-title">${song.artist.name} : ${song.title}</h5>
          <p class="card-text">${song.album.title}</p>
          <p class="card-text"></p>
        </div>
      </div>
`;
    });
  });

//MY FAVOURITE ALBUMS CAROUSEL//
fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [9997018];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_01");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body d-none">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [116348612];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_02");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body d-none">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=guns`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [2171464];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_03");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body d-none">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=adele`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [8086130];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_04");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body d-none">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=anastacia`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [832546];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_05");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body d-none">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=aretha`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [2133626];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_06");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body d-none">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      ${song.rank}
      </p>
    </div>
    
      `;
    });
  });

//ALERT BUTTON//

//RAGIONAMENTI VARI DA CANCELLARE!!!//

/*DEVO CREARE UN'ARRAY CHE CONTIENE TUTTE LE CANZONI INDIVIDUATE IN PRECEDENZA
FINO AD ORA LE HO SELEZIONATE TRAMITE ID FACENDO PRIMA LA RICHIESTA USANDO IL FETCH AL JSON REMOTO

IN TEORIA HO GIA ACCESSO A TUTTO IL JSON PERO' COME FACCIO A PRENDERE IL RANK: POSSO FARLO TRAMITE SEMPLICE RICHIESTA
USANDO ${song.rank} SU OGNI CANZONE... ho stabilito che funziona..

COME PESCARLO DA OGNI CANZONE E CREARE UN ARRAY CHE LI CONTIENE TUTTI?
COME FACCIO A CREARE L'ARRAY SE HO TUTTE LE FUNZIONI(VARIABILI) SEPARATE? [const array  = () => {....]*/

const arrayDiTitoli = () => {
  let p = document.querySelectorAll("p");
  let titoli = [];
  p.forEach((song) => {
    titoli.push({
      titolo: song.innerText,
      rank: Number(song.getAttribute("song.rank")),
    });
  });
  return titoli;
};

//codice bootrap per alert : //
/*

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Nice, you triggered this alert message!", "success");
  });
} */

//MODAL BUTTON//
