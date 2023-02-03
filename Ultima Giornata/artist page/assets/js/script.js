

// let url = new URLSearchParams (location.search);//prendi parametri di ricerca dall url della pagina

// let id = url.get("id");//da local host : 5005 /artist.html?id=125->125


// window.onload = async () => {
//     if (!id) window.location.assign('/index.html'); 
//     Promise.all([fetchArtist(id), fetchTracks(id), filterPopular()]);

// };
// const APIUrl = "https://striveschool-api.herokuapp.com/api/deezer";

// //fetch artista per id
// const fetchArtist = async(id) => {
//     try{
//         let res = await fetch (`${APIUrl}/artist/${id} `); //fetcha dati artista per id (=>id privine da url di inizio file)
//         let artist = await res.json();

//         //inserisci nome artista copertina e numero di fan
     
//         populateElement(".artist__header img", "src", artist.picture_xl );
//         populateElement("h1", "innerText", artist.name );

//         populateElement("monthly__listeners span.listeners ", "innerText ", artist.nb_fan);
//     } catch(error) {
//         let alert = document.querySelector('.alert strong');
//         alert.innerText = error;
//         alert.parentElement.classList.add('show');
//     }
// };


// //stessa funziona di index  JS    


// const populateElement = (elementQuery, prop, value) => {
//     let elementToPop = document.querySelector(elementQuery);
//     elementToPop[prop] =  value;



// };


// //=> fetcha le prime 50 canzoni dell'artista nell'id 

// const fetchTracks = async(id) => {
//     try{
//         let res = await fetch(`${APIUrl}/artist/${id}/top?limit=50`);
//         let {data:tracks} = await res.json();
//         let trackContainer = document.querySelector('.artist__popular-tracks');
//         tracks.forEach((song, i) => {
//             //per ogni canzone crea una riga nella tabella delle canzoni 
//             trackContainer.innerHTML += ``
//         }) 
// // quello che c'è nel dollaro è: song.title son.artist.name song.preview son.album.cover_big
//     } catch{}
// }












// let url = new URLSearchParams(location.search): //prende i parametri di ricerca dall'URL della pagina
// let id - url.get( "Id"): // da localhost:5588/artist.html?1d-125 -> 125
// window.onload - async () -> {
// 1f (!1d) window. location-assign( urt: "/index.html"); //SE NON C'E' UN ID NELL'URL, rispedisc1 l'utente nella home
// Promise.al1( waLues: [fetchartist(ld), fetchTracks(1d),
// filterPopular()1): //spacchetta 1 dati solo dopo che tutte le promise sono state esegulte
// //prendt tutti I dati dell'artista
// 7/prendt tutte le tracce dell'artista
// //filtra per popolari
// const APIUrI - "https://striveschool-api.herokuapp.com/apt/deezer"



















//  const APIUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
  
//  const fetchByQuery = async (query) => {
//    const res = await fetch(`${APIUrl}${query}`)
//     const {data:[,song]} = await res.json()
//    const { data: songs } = await res.json()
//    return songs
//  }

 //Sezione 1


//  const renderFavoriteSongs1 = async () => {
//  let canzoni = await fetchByQuery("techno")
//  console.log(canzoni)
//  let row = document.querySelector("#artist-info")
//  let canzoniPrefe = [canzoni[1]]
//  canzoniPrefe.forEach((album) => {
//    row.innerHTML += `
  
      
   
//    <div class="profile__img">
//    <img
//      src=${album.album.cover}
//      alt="G-Eazy"
//    />
//  </div>


//  <div class="artist__info__meta">
//    <div class="artist__info__type">Artist</div>

//    <div class="artist__info__name">${album.artist.name}</div>


//    <div class="artist__info__actions">
//      <button class="button-dark">
//        <i class="ion-ios-play"></i>
//        Play
//      </button>

//      <button class="button-light">Follow</button>
//    </div>


                   


                   
//                     `
//  })
//  }


 




 const APIUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

 const fetchByQuery = async (query) => {
   const res = await fetch(`${APIUrl}${query}`)
   // const {data:[,song]} = await res.json()
   const { data: songs } = await res.json()
   return songs
 }
 
 //prima sezione
 const renderFavoriteSongs = async () => {
   let canzoni = await fetchByQuery("blues")
   let row = document.querySelector("#artist-inf")
   let canzoniPrefe = [canzoni[2]]
   canzoniPrefe.forEach((album) => {
     row.innerHTML += `

     
   
   <div class="profile__img">
   <img
     src=${album.album.cover}
     alt="G-Eazy"
   />
 </div>


 <div class="artist__info__meta">
   <div class="artist__info__type">Artist</div>

   <div class="artist__info__name">${album.artist.name}</div>


   <div class="artist__info__actions">
     <button class="button-dark">
       <i class="ion-ios-play"></i>
       Play
     </button>

     <button class="button-light">Follow</button>
   </div>


         `
   })
 }






 window.onload = async () => {
  
  await renderFavoriteSongs()
  await renderFavoriteSongs1()
  await renderFavoriteSongs2()
  
}




 
 //seconda sezione
 const renderFavoriteSongs1 = async () => {
   let canzoni = await fetchByQuery("blues")
   console.log(canzoni)
   let row = document.querySelector("#track-popular")
   let canzoniPrefe = [canzoni[2],canzoni[6],canzoni[8],canzoni[10],canzoni[16],canzoni[1],canzoni[5],canzoni[7],canzoni[9],canzoni[15]]
   canzoniPrefe.forEach((album) => {
     row.innerHTML += `

     
   




   <div class="track">
   <div class="track__art">
     <img
       src=${album.album.cover}
       alt="When It's Dark Out"
     />
   </div>

   <div class="track__number"></div>

   <div class="track__added">
     <i class="ion-checkmark-round added"></i>
   </div>

   <div class="track__title">${album.artist.name}</div>

   <div class="track__explicit">
     <span class="label">Explicit</span>
   </div>

   <div class="track__plays"></div>
 </div>



         `
   })
 }



//  //terza sezione
//  const renderFavoriteSongs2 = async () => {
//    let canzoni = await fetchByQuery("blues")
//    console.log(canzoni)
//    let row = document.querySelector("#track-song")
//    let canzoniPrefe = [canzoni[2],canzoni[3],canzoni[4],canzoni[10],canzoni[16],canzoni[1],canzoni[0],canzoni[8],canzoni[11],canzoni[18],canzoni[22],canzoni[23],canzoni[24],canzoni[25],canzoni[26],]
//    canzoniPrefe.forEach((album) => {
//      row.innerHTML += `



//                                      <div class="track mb-5 w-100 h-25 d-flex justify-content-center align-content-center" >
//                                      <div class="track__number"></div>
    
//                                      <div class="track__added">
//                                        <i class="ion-checkmark-round added"></i>
//                                      </div>
    
//                                      <div class="track__title featured">
//                                        <span class="title">${album.album.title}</span>
//                                        <span class="feature">${album.album.title}</span>
//                                        <span class="feature">${album.album.title}</span>
//                                      </div>
    
//                                      <div class="track__explicit">
//                                        <span class="label">Explicit</span>
//                                      </div>
    
//                                      <div class="track__length"></div>
    
//                                      <div class="track__popularity">
//                                        <i class="ion-arrow-graph-up-right"></i>
//                                      </div>
//                                    </div>










//          `
//    })
//  }

























// // //Sezione dopo artist info


// // const renderFavoriteSongs2 = async () => {
// // let canzoni = await fetchByQuery("techno")
// // console.log(canzoni)
// // let row = document.querySelector("#artist-info")
// // let canzoniPrefe = [canzoni[1],canzoni[1],canzoni[1],canzoni[1],canzoni[1]]



// // canzoniPrefe.forEach((album) => {
// //   row.innerHTML += `
  
      
//   <div class="">

//    <div class="profile__img">
//                     <img
//                       src=${album.album.cover}
//                       alt="G-Eazy"
//                     />
//                   </div>

//                   <div class="artist__info__meta">
//                     <div class="artist__info__type">Artist</div>

//                     <div class="artist__info__name">${album.artist.name}</div>

//                     <div class="artist__info__actions">
//                       <button class="button-dark">
//                         <i class="ion-ios-play"></i>
//                         Play
//                       </button>

//                       <button class="button-light">Follow</button>
//                     </div>

//                   </div>
//                 </div>
//                 </div>

//                 <div class="artist__listeners">
//                   <div class="artist__listeners__count">15,662,810</div>
                  
//                   <div class="artist__listeners__label">Monthly Listeners</div>
                  
//                 </div>
                

//                 <div class="track">
//                             <div class="track__art">
//                               <img
//                                 src=${album.album.cover}
//                                 alt="When It's Dark Out"
//                               />
//                             </div>

//                             <div class="track__number">1</div>

//                             <div class="track__added">
//                               <i class="ion-checkmark-round added"></i>
//                             </div>

//                             <div class="track__title">${album.album.cover}</div>

//                             <div class="track__explicit">
//                               <span class="label">Explicit</span>
//                             </div>

//                             <div class="track__plays">147,544,165</div>
//                           </div>


                   


                   
//                    `
// })
// }


// renderFavoriteSongs2()
  
//   <section class="header">
//             <div class="content__middle">
//               <div class="artist is-verified">
//                 <div class="artist__header">
//                   <div class="artist__info">
//                     <div class="profile__img">
//                       <img
//                         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
//                         alt="G-Eazy"
//                       />
//                     </div>
  
//                     <div class="artist__info__meta">
//                       <div class="artist__info__type">Artist</div>
  
//                       <div class="artist__info__name">G-Eazy</div>
  
//                       <div class="artist__info__actions">
//                         <button class="button-dark">
//                           <i class="ion-ios-play"></i>
//                           Play
//                         </button>
  
//                         <button class="button-light">Follow</button>
//                       </div>
//                     </div>
//                   </div>
  
//                   <div class="artist__listeners">
//                     <div class="artist__listeners__count">15,662,810</div>
                    
//                     <div class="artist__listeners__label">Monthly Listeners</div>
                    
//                   </div>
                  
                  
                  
//                 </div>
                
//                 <div class="artist__content">
//                   <div class="tab-content">
//                     <!-- Overview -->
//                     <div
//                       role="tabpanel"
//                       class="tab-pane active"
//                       id="artist-overview"
//                     >
//                       <div class="overview">
//                         <div class="overview__artist">
//                           <!-- Popular-->
//                           <div class="section-title">Popular</div>
  
//                           <div class="tracks">
//                             <div class="track">
//                               <div class="track__art">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
//                                   alt="When It's Dark Out"
//                                 />
//                               </div>
  
//                               <div class="track__number">1</div>
  
//                               <div class="track__added">
//                                 <i class="ion-checkmark-round added"></i>
//                               </div>
  
//                               <div class="track__title">Me, Myself & I</div>
  
//                               <div class="track__explicit">
//                                 <span class="label">Explicit</span>
//                               </div>
  
//                               <div class="track__plays">147,544,165</div>
//                             </div>




  
//                             <div class="track">
//                               <div class="track__art">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg"
//                                   alt="These Things Happen"
//                                 />
//                               </div>
  
//                               <div class="track__number">2</div>
  
//                               <div class="track__added">
//                                 <i class="ion-plus not-added"></i>
//                               </div>
  
//                               <div class="track__title">I Mean It</div>
  
//                               <div class="track__explicit">
//                                 <span class="label">Explicit</span>
//                               </div>
  
//                               <div class="track__plays">74,568,782</div>
//                             </div>
  
//                             <div class="track">
//                               <div class="track__art">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
//                                   alt="When It's Dark Out"
//                                 />
//                               </div>
  
//                               <div class="track__number">3</div>
  
//                               <div class="track__added">
//                                 <i class="ion-checkmark-round added"></i>
//                               </div>
  
//                               <div class="track__title">Calm Down</div>
  
//                               <div class="track__explicit">
//                                 <span class="label">Explicit</span>
//                               </div>
  
//                               <div class="track__plays">13,737,506</div>
//                             </div>
  
//                             <div class="track">
//                               <div class="track__art">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
//                                   alt="When It's Dark Out"
//                                 />
//                               </div>
  
//                               <div class="track__number">4</div>
  
//                               <div class="track__added">
//                                 <i class="ion-plus not-added"></i>
//                               </div>
  
//                               <div class="track__title">Some Kind Of Drug</div>
  
//                               <div class="track__explicit">
//                                 <span class="label">Explicit</span>
//                               </div>
  
//                               <div class="track__plays">12,234,881</div>
//                             </div>
  
//                             <div class="track">
//                               <div class="track__art">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg"
//                                   alt="These Things Happen"
//                                 />
//                               </div>
  
//                               <div class="track__number">5</div>
  
//                               <div class="track__added">
//                                 <i class="ion-checkmark-round added"></i>
//                               </div>
  
//                               <div class="track__title">Let's Get Lost</div>
  
//                               <div class="track__explicit">
//                                 <span class="label">Explicit</span>
//                               </div>
  
//                               <div class="track__plays">40,882,954</div>
//                             </div>
//                           </div>
  
//                           <!-- / -->
//                         </div>
  
//                         <div class="overview__related">
//                           <div class="section-title">Related Artists</div>
  
//                           <div class="related-artists">
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
//                                   alt="Hoodie Allen"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name"
//                                 >Hoodie Allen</span
//                               >
//                             </a>
  
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg"
//                                   alt="Mike Stud"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name">Mike Stud</span>
//                             </a>
  
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg"
//                                   alt="Drake"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name">Drake</span>
//                             </a>
  
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg"
//                                   alt="J. Cole"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name">J. Cole</span>
//                             </a>
  
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg"
//                                   alt="Big Sean"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name">Big Sean</span>
//                             </a>
  
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg"
//                                   alt="Wiz Khalifa"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name"
//                                 >Wiz Khalifa</span
//                               >
//                             </a>
  
//                             <a href="#" class="related-artist">
//                               <span class="related-artist__img">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg"
//                                   alt="Yonas"
//                                 />
//                               </span>
  
//                               <span class="related-artist__name">Yonas</span>
//                             </a>
//                           </div>
//                         </div>
  









// inizio





//                         <div class="overview__albums">
//                           <div class="overview__albums__head">
//                             <span class="section-title">Albums</span>
  
//                             <span class="view-type">
//                               <i class="fa fa-list list active"></i>
  
//                               <i class="fa fa-th-large card"></i>
//                             </span>
//                           </div>
  
//                           <div class="album">
//                             <div class="album__info">
//                               <div class="album__info__art">
//                                 <img
//                                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
//                                   alt="When It's Dark Out"
//                                 />
//                               </div>
  
//                               <div class="album__info__meta">
//                                 <div class="album__year">2015</div>
  
//                                 <div class="album__name">When It's Dark Out</div>
  
//                                 <div class="album__actions">
//                                   <button class="button-light save">Save</button>
//                                 </div>
//                               </div>
//                             </div>
  
//                             <div class="album__tracks">
//                               <div class="tracks">
//                                 <div class="tracks__heading">
//                                   <div class="tracks__heading__number">#</div>
  
//                                   <div class="tracks__heading__title">Song</div>
  
//                                   <div class="tracks__heading__length">
//                                     <i class="ion-ios-stopwatch-outline"></i>
//                                   </div>
  
//                                   <div class="tracks__heading__popularity">
//                                     <i class="ion-thumbsup"></i>
//                                   </div>
//                                 </div>
  
//                                 <div id ="track-song" class="track">











// fine













//                                   <div class="track__number">1</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title">Intro</div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">1:11</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  










//                                 <div class="track">
//                                   <div class="track__number">2</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title">Random</div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:00</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">3</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Me, Myself & I</span>
//                                     <span class="feature">Bebe Rexha</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">4:11</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">4</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">One Of Them</span>
//                                     <span class="feature">Big Sean</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:20</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-down-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">5</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Drifting</span>
//                                     <span class="feature">Chris Brown</span>
//                                     <span class="feature">Tory Lanez</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">4:33</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">6</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Of All Things</span>
//                                     <span class="feature">Too $hort</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:34</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">7</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Order More</span>
//                                     <span class="feature">Starrah</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:29</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">8</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title">
//                                     <span>Calm Down</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">2:07</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">9</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-plus not-added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Don't Let Me Go</span>
//                                     <span class="feature">Grace</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:11</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-down-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">10</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title">
//                                     <span>You Got Me</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:28</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">11</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">What If</span>
//                                     <span class="feature">Gizzle</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">4:13</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">12</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title">
//                                     <span>Sad Boy</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:23</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">13</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Some Kind Of Drug</span>
//                                     <span class="feature">Marc E. Bassy</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">3:42</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">14</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Think About You</span>
//                                     <span class="feature">Quin</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">2:59</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">15</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title"
//                                       >Everything Will Be OK</span
//                                     >
//                                     <span class="feature">Kehlani</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">5:11</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">16</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">For This</span>
//                                     <span class="feature">Iamnobodi</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">4:11</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
  
//                                 <div class="track">
//                                   <div class="track__number">17</div>
  
//                                   <div class="track__added">
//                                     <i class="ion-checkmark-round added"></i>
//                                   </div>
  
//                                   <div class="track__title featured">
//                                     <span class="title">Nothing to Me</span>
//                                     <span class="feature">Keyshia Cole</span>
//                                     <span class="feature">E-40</span>
//                                   </div>
  
//                                   <div class="track__explicit">
//                                     <span class="label">Explicit</span>
//                                   </div>
  
//                                   <div class="track__length">5:30</div>
  
//                                   <div class="track__popularity">
//                                     <i class="ion-arrow-graph-up-right"></i>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
  
  
  
  

























  
  
  
//   // devo inserire url
// let url = new URLSearchParams(location.search);

// // mi prendo dall'url il vaore result
// let id = url.get("idArtist");
// console.log(id);

// let api = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
// let endpoint = "/top?limit=50";
// const fetchArtist = async () => {
//   let res = await fetch(api + id);
//   let artist = await res.json();
//   return artist;
// };

// let artist = async () => {
//   let artista = await fetchArtist();
//   let bodyCard = document.getElementById("cardPageArtist");
//   bodyCard.innerHTML = `
//         <div class="card border-0 text-bg-dark p-0">
//         <img id="cardOverlay"
//           src="${artista.picture_big}"
//           class="card-img rounded-0" alt="..." />
//         <div class="card-img-overlay d-flex flex-column justify-content-between justify-content-md-end textBox">
//           <div class="arrow arrowMobile d-flex justify-content-center align-items-center">
//             <i class="bi bi-chevron-left d-flex d-md-none"></i>
//           </div>
//           <p class="hiddenMobile">
//             <i class="bi bi-patch-check-fill me-2 hiddenMobile"></i><small>Artista verificato</small>
//           </p>
//           <h5 class="card-title">${artista.name}</h5>
//           <p class="card-text downMobile">
//             <small>${artista.nb_fan} ascoltatori mensili</small>
//           </p>
//         </div>
//       </div>
//         `;
// };

// let tracks = async () => {
//   try {
//     let res = await fetch(api + id + endpoint);
//     if (res.ok) {
//       let data = await res.json();
//       let tracks = data.data;
//       let div = document.getElementById("cardPageTracks");
//       for (let i = 0; i < tracks.length; i++) {
//         let numb = i + 1;
//         let durata = [];
//         durata.push(tracks[i].duration);
//         let stringDurata = durata[0].toString();
//         let pippo = stringDurata.split("");
//         pippo.splice(1, 0, ":");
//         let finalDurata = pippo.join("");

//         console.log(finalDurata);
//         div.innerHTML += `
//         <div class="d-flex mt-2 justify-content-between align-items-center hoverArtist">
//           <div class="left d-flex align-items-center">
//             <p class="me-3 numbRanks">${numb}</p>
//             <img id="smallCover" src="${tracks[i].album.cover_small}" alt=""
//                 class="me-3" />
//             <div>
//               <p class="noneMobile albumName">${tracks[i].title}</p>
//               <p class="noneDesktop">276.968.994</p>
//             </div>
//           </div>
//           <div class="center">
//             <p>${tracks[i].rank}</p>
//           </div>
//           <div class="right">
//             <p class="">${finalDurata}</p>
//             <i class="bi bi-three-dots"></i>
//           </div>
//         </div>
//         `;
//       }
//     }
//   } catch (error) {
//     console.log("error");
//   }
// };

// window.onload = async function () {
//   await artist();
//   await tracks();
// };
  
  



















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