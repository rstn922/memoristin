// app.js - Logika Modern Glassmorphism & Balon Rindu Interaktif

document.addEventListener('DOMContentLoaded', () => {
  // === 1. AUDIO PLAYER CONTROLLER (PLAYLIST LENGKAP DENGAN LIRIK INTEGRATIF) ===
  const playlist = [
    { 
      title: "Aku Disini Untukmu", 
      sub: "Dewa 19", 
      url: "assets/Aku Disini Untukmu.mp3",
      lyrics: [
        { time: 16, text: "Melayang kau cari cari arti" },
        { time: 21, text: "Yang pasti takkan kau temui" },
        { time: 26, text: "Tak perlu kau nilai nilai semua" },
        { time: 31, text: "Biarlah semua adanya" },
        { time: 40, text: "Kau coba meraba raba hati" },
        { time: 45, text: "Warna gejolak di sini" },
        { time: 50, text: "Alirkan semua rahasia" },
        { time: 55, text: "Taburkan dalam suasana" },
        { time: 63, text: "Tak usah kau cari makna hadirnya diriku" },
        { time: 72, text: "Aku di sini untukmu" },
        { time: 80, text: "Mungkin memberi arti cinta pada diriku" },
        { time: 89, text: "Aku di sini untukmu" },
        { time: 99, text: "Tak usah kau tanya tanya lagi" },
        { time: 104, text: "Coba kau hayati peranmu" },
        { time: 109, text: "Lupakan sekilas esok hari" },
        { time: 114, text: "Semua telah terjadi" },
        { time: 121, text: "Aku dan dirimu" },
        { time: 126, text: "Tenggelam dalam asa dan tak ingin lari" },
        { time: 133, text: "Tanggalkan rasa ini, cobalah entaskan" },
        { time: 140, text: "Pastikan lepas atau terus" },
        { time: 145, text: "Semoga perih terbang tinggi di awan" },
        { time: 153, text: "Tak usah kau cari makna hadirnya diriku" },
        { time: 162, text: "Aku di sini untukmu" },
        { time: 170, text: "Mungkin memberi arti cinta pada diriku" },
        { time: 179, text: "Aku di sini untukmu" },
        { time: 187, text: "Lepaskan sejenak berat beban di pundakmu" },
        { time: 196, text: "Aku di sini untukmu" },
        { time: 204, text: "Pastikan kau jawab semua ragu di cintamu" },
        { time: 213, text: "Aku di sini untukmu" },
        { time: 224, text: "Tak usah kau cari makna hadirnya diriku" },
        { time: 233, text: "Aku di sini untukmu" }
      ]
    },
    { 
      title: "Bed Of Roses", 
      sub: "Bon Jovi", 
      url: "assets/Bed Of Roses.mp3",
      lyrics: [
        { time: 5, text: "Sitting here wasted and wounded at this old piano" },
        { time: 15, text: "Trying hard to capture the moment this morning I don't know" },
        { time: 25, text: "'Cause a bottle of vodka is still lodged in my head" },
        { time: 32, text: "And some blond gave me nightmares, I think she's still in my bed" },
        { time: 40, text: "As I dream about movies they won't make of me when I'm dead" },
        { time: 50, text: "With an ironclad fist I wake up and French kiss the morning" },
        { time: 59, text: "While some marching band keeps its own beat in my head" },
        { time: 67, text: "While we're talking about all of the things that I long to believe" },
        { time: 76, text: "About love and the truth and what you mean to me" },
        { time: 84, text: "And the truth is baby you're all that I need" },
        { time: 95, text: "I want to lay you down on a bed of roses" },
        { time: 107, text: "For tonite I sleep on a bed of nails" },
        { time: 117, text: "I want to be just as close as the Holy Ghost is" },
        { time: 128, text: "And lay you down on bed of roses" },
        { time: 150, text: "Well I'm so far away, that each step that I take is on my way home" },
        { time: 162, text: "A king's ransom in dimes I'd given each night just to see through this payphone" },
        { time: 173, text: "Still I run out of time, or it's hard to get through" },
        { time: 181, text: "Till the bird on the wire flies me back to you" },
        { time: 190, text: "I'll just close my eyes and whisper, baby blind love is true" },
        { time: 203, text: "I want to lay you down on a bed of roses" },
        { time: 214, text: "For tonite I sleep on a bed of nails" },
        { time: 224, text: "I want to be just as close as the Holy Ghost is" },
        { time: 235, text: "And lay you down on bed of roses" },
        { time: 280, text: "The hotel bar hangover whiskey's gone dry" },
        { time: 289, text: "The barkeeper's wig's crooked, and she's giving me the eye" },
        { time: 298, text: "I might have said yeah, but I laughed so hard I think I died" },
        { time: 310, text: "When you close your eyes, know I'll be thinking about you" },
        { time: 320, text: "While my mistress she calls me to stand in her spotlight again" },
        { time: 329, text: "Tonite I won't be alone, but you know that don't mean I'm not lonely" },
        { time: 338, text: "I've got nothing to prove, for it's you that I'd die to defend" },
        { time: 349, text: "I want to lay you down on a bed of roses" },
        { time: 360, text: "For tonite I sleep on a bed of nails" },
        { time: 370, text: "I want to be just as close as the Holy Ghost is" },
        { time: 381, text: "And lay you down on bed of roses" }
      ]
    },
    { 
      title: "Tetaplah Di Sini", 
      sub: "Gie", 
      url: "assets/Tetaplah di Sini.mp3",
      lyrics: [
        { time: 12, text: "Walau pagi sebentar lagi menjelang" },
        { time: 18, text: "Aku tak ingin kau pulang" },
        { time: 24, text: "Karena ku masih ingin" },
        { time: 29, text: "Melihatmu di sini" },
        { time: 36, text: "Bolehkah ku simpan mata itu" },
        { time: 42, text: "Sebagai penghias malamku" },
        { time: 48, text: "Kan ku tuang dalam rindu" },
        { time: 53, text: "Jika nanti kau pulang" },
        { time: 60, text: "Aku memintamu" },
        { time: 65, text: "Tuk tetap di sini" },
        { time: 71, text: "Biarkan kita nikmati malam ini" },
        { time: 77, text: "Hanya berdua saja" },
        { time: 83, text: "Biarpun malam ingin meraih pagi" },
        { time: 89, text: "Ku tetap tak peduli" },
        { time: 104, text: "Aku memintamu" },
        { time: 109, text: "Tuk tetap di sini" },
        { time: 115, text: "Biarkan kita nikmati malam ini" },
        { time: 121, text: "Hanya berdua saja" },
        { time: 127, text: "Biarpun malam ingin meraih pagi" },
        { time: 133, text: "Ku tetap tak peduli" },
        { time: 141, text: "Biarkan kita nikmati malam ini" },
        { time: 147, text: "Hanya berdua, hanya berdua" },
        { time: 153, text: "Hanya berdua saja ho-oh" },
        { time: 162, text: "Ingin meraih pagi" },
        { time: 168, text: "Ku tetap tak peduli" }
      ]
    },
    { 
      title: "Terbuang Dalam Waktu", 
      sub: "Barasuara", 
      url: "assets/Barasuara - Terbuang Dalam Waktu (Official Video).mp3",
      lyrics: [
        { time: 46, text: "Teringat seru suaramu" },
        { time: 50, text: "Menepis keraguan" },
        { time: 53, text: "Namun dewasa mengubah" },
        { time: 56, text: "Cara pandang dan keikhlasan" },
        { time: 60, text: "Bersaut dan bergulat" },
        { time: 63, text: "Terperai-perai menghilang" },
        { time: 68, text: "Perih yang terasa" },
        { time: 72, text: "Sakit yang tak sirna" },
        { time: 76, text: "Harapan akankah ada?" },
        { time: 80, text: "Berputar arah" },
        { time: 85, text: "Angan tenggelam dalam kabut dan amarah" },
        { time: 92, text: "Luka terkuak dan menggebu tanpa arah" },
        { time: 99, text: "Tangis yang terbendung" },
        { time: 103, text: "Terbuang dalam waktu yang meluruh" },
        { time: 112, text: "Perih yang terasa" },
        { time: 116, text: "Sakit yang tak sirna" },
        { time: 120, text: "Harapan akankah ada?" },
        { time: 126, text: "Berubah" },
        { time: 155, text: "Melihatmu bersemi dan bermekaran" },
        { time: 162, text: "Tawa candamu berikan kekuatan" },
        { time: 169, text: "Sisa hariku" },
        { time: 173, text: "Pagi berganti waktu memelukmu" },
        { time: 182, text: "Kita kan tua dan kehilangan pegangan" },
        { time: 189, text: "Lihat senyummu memberikan kekuatan" },
        { time: 196, text: "Sisa nafasku" },
        { time: 200, text: "Cinta tak kenal waktu menjagamu" }
      ]
    },
    { 
      title: "Rindu Sendiri", 
      sub: "Iqbaal Ramadhan", 
      url: "assets/Rindu Sendiri.mp3",
      lyrics: [
        { time: 13, text: "Suara motor itu semakin mendekat" },
        { time: 18, text: "Kamu abaikan sapanya" },
        { time: 23, text: "Dia berupaya mencari senyummu" },
        { time: 28, text: "Dengan rayuan yang pelik" },
        { time: 34, text: "Waktu demi waktu pun berlalu" },
        { time: 39, text: "Keinginanmu mulai tumbuh" },
        { time: 46, text: "Biar dia merindukanmu sendiri oh" },
        { time: 55, text: "Jangan resah dia pasti pikirkanmu" },
        { time: 60, text: "Walau kau tak tahu" },
        { time: 66, text: "Hingga di ujung malam" },
        { time: 79, text: "Engkau menyusuri jalan bersamanya" },
        { time: 84, text: "Dikala dinginnya senja" },
        { time: 90, text: "Hanya berduaan tanpa tahu tujuan" },
        { time: 95, text: "Bahkan tidak mau tahu" },
        { time: 101, text: "Namun sudah saatnya untuk pulang" },
        { time: 106, text: "Tak ingin kau akhiri hari itu" },
        { time: 113, text: "Biar dia merindukanmu sendiri oh" },
        { time: 122, text: "Jangan resah dia pasti pikirkanmu" },
        { time: 127, text: "Walau kau tak tahu" },
        { time: 133, text: "Hingga di ujung malam" },
        { time: 145, text: "Biar dia merindukanmu sendiri oh" },
        { time: 154, text: "Jangan resah dia pasti pikirkanmu" },
        { time: 159, text: "Walau kau tak tahu" },
        { time: 165, text: "Hingga di ujung malam" }
      ]
    },
    { 
      title: "Kita usahakan rumah itu", 
      sub: "Sal Priadi", 
      url: "assets/Sal Priadi - Kita usahakan rumah itu (Official Lyric Video).mp3",
      lyrics: [
        { time: 14, text: "Kita usahakan rumah itu" },
        { time: 19, text: "Dari depan akan tampak sederhana" },
        { time: 26, text: "Tapi kebunnya luas, tanamannya mewah, megah" },
        { time: 35, text: "Kita usahakan rumah itu" },
        { time: 40, text: "Dari depan akan tampak sederhana" },
        { time: 47, text: "Tapi dibuat kuat, dirancang muat, lega" },
        { time: 57, text: "Urusan perabotan dan wangi-wangian" },
        { time: 64, text: "Kuserahkan pada s'leramu yang lebih maju" },
        { time: 72, text: "Tapi tata ruang, aku ikut pertimbangkan" },
        { time: 79, text: "Kar'na kalau nanti kita punya kesibukan" },
        { time: 87, text: "Malam tetap kumpul di meja panjang" },
        { time: 92, text: "Ruang makan kita" },
        { time: 97, text: "Berbincang tentang hari yang panjang" },
        { time: 112, text: "Kita usahakan rumah itu" },
        { time: 117, text: "Dari depan akan tampak sederhana" },
        { time: 124, text: "Tapi penerangannya diracik begitu romantis" },
        { time: 134, text: "Urusan perabotan dan wangi-wangian" },
        { time: 141, text: "Kuserahkan pada s'leramu yang lebih maju" },
        { time: 149, text: "Tapi tata ruang, aku ikut pertimbangkan" },
        { time: 156, text: "Kar'na kalau nanti kita punya kesibukan" },
        { time: 164, text: "Malam tetap kumpul di meja panjang" },
        { time: 169, text: "Ruang makan kita" },
        { time: 174, text: "Berbincang tentang hari yang panjang" },
        { time: 190, text: "Boleh kamu keliling dunia" },
        { time: 197, text: "Dan temukan banyak tempat-tempat 'tuk singgah sementara" },
        { time: 208, text: "Kamu boleh namai itu rumah" },
        { time: 215, text: "Selama ada m'reka yang kamu cinta di dalamnya" },
        { time: 228, text: "Kita usahakan rumah itu" }
      ]
    },
    { 
      title: "Impostor Syndrome", 
      sub: "Sidney Gish", 
      url: "assets/Impostor Syndrome-1.mp3",
      lyrics: [
        { time: 4, text: "Unfortunately, I am my own dog" },
        { time: 8, text: "My own fur companion" },
        { time: 11, text: "My own old lady on a forum" },
        { time: 14, text: "Who types in glittery decorum" },
        { time: 18, text: "Unfortunately I take myself out walking every day and" },
        { time: 24, text: "I hand my legs to the feet" },
        { time: 27, text: "And I give my head to the leash" },
        { time: 32, text: "Every other day I'm wondering:" },
        { time: 35, text: "What's a human being gotta be like?" },
        { time: 39, text: "What's a way to just be competent?" },
        { time: 42, text: "These sweet instincts ruin my life" },
        { time: 46, text: "Every other day I'm wondering:" },
        { time: 49, text: "Was it a mistake to try and define" },
        { time: 53, text: "What I'm certain's mad incompetence?" },
        { time: 56, text: "These sweet instincts ruin my life" },
        { time: 62, text: "I can't smell well, or tell the time" },
        { time: 66, text: "Not K through 8, nor K dash 9" },
        { time: 70, text: "For human, grossly underqualified" },
        { time: 74, text: "For canine, grossly overqualified" },
        { time: 79, text: "I don't blend in at Petsmart" },
        { time: 82, text: "And that truth remains for the Walmart" },
        { time: 86, text: "'Cause in either case they say to me:" },
        { time: 90, text: "What the fuck is lost in aisle 3?" },
        { time: 95, text: "Every other day I'm wondering:" },
        { time: 98, text: "What's a human being gotta be like?" },
        { time: 102, text: "What's a way to just be competent?" },
        { time: 105, text: "These sweet instincts ruin my life" },
        { time: 109, text: "Every other day I'm wondering:" },
        { time: 112, text: "Was it a mistake to try and define" },
        { time: 116, text: "What I'm certain's mad incompetence?" },
        { time: 119, text: "These sweet instincts ruin my life" },
        { time: 126, text: "Just watch me, moving far away" },
        { time: 130, text: "Nobody even knows my name and" },
        { time: 134, text: "No one suspects that I'm not fine" },
        { time: 138, text: "And nobody outs behavioral Frankenstein" },
        { time: 143, text: "Just look at Victor in LA" },
        { time: 147, text: "And Syd with the 'y' at U of A" },
        { time: 151, text: "And all the majors at the labels" },
        { time: 155, text: "Rebooting soon as I am able" },
        { time: 160, text: "Every other day I'm wondering:" },
        { time: 163, text: "What's a human being gotta be like?" },
        { time: 167, text: "What's a way to just be competent?" },
        { time: 170, text: "These sweet instincts ruin my life" },
        { time: 174, text: "Every other day I'm wondering:" },
        { time: 177, text: "Was it a mistake to try and define" },
        { time: 181, text: "What I'm certain's mad incompetence?" },
        { time: 184, text: "These sweet instincts ruin my life" }
      ]
    }
  ];

  let currentTrackIndex = 0;
  const audio = new Audio(playlist[currentTrackIndex].url);
  audio.loop = true;
  audio.volume = 0.5;

  const btnPlayPause = document.getElementById('btn-play-pause');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const audioTitle = document.getElementById('audio-title');
  const audioSub = document.getElementById('audio-sub');
  const diskNeon = document.getElementById('music-disk');
  const volumeSlider = document.getElementById('volume-slider');
  const lyricsScrollPanel = document.getElementById('lyrics-scroll-panel');
  let isPlaying = false;
  let updateSlideshowStatus; // Callback to control gallery slideshow

  // === FLOATING BACKGROUND PLAYER (EVERYTHING) ===
  const floatingAudio = new Audio('assets/EVERYTHING.mp3');
  floatingAudio.loop = true;
  floatingAudio.volume = 0.45;
  let isFloatingPlaying = false;

  const btnFloatingPlay = document.getElementById('btn-floating-play');
  const floatingPlayerStatus = document.getElementById('floating-player-status');

  function playFloatingMusic() {
    if (isPlaying) {
      pauseMusic();
    }
    floatingAudio.play().then(() => {
      if (btnFloatingPlay) btnFloatingPlay.textContent = 'Jeda';
      if (floatingPlayerStatus) floatingPlayerStatus.textContent = 'Memutar...';
      isFloatingPlaying = true;
      if (updateSlideshowStatus) updateSlideshowStatus();
    }).catch(err => {
      console.log("Autoplay lagu melayang dicegah browser.", err);
      if (floatingPlayerStatus) floatingPlayerStatus.textContent = 'Klik untuk Putar';
      if (btnFloatingPlay) btnFloatingPlay.textContent = 'Putar';
      isFloatingPlaying = false;
      if (updateSlideshowStatus) updateSlideshowStatus();
    });
  }

  function pauseFloatingMusic() {
    floatingAudio.pause();
    if (btnFloatingPlay) btnFloatingPlay.textContent = 'Putar';
    if (floatingPlayerStatus) floatingPlayerStatus.textContent = 'Dijeda';
    isFloatingPlaying = false;
    if (updateSlideshowStatus) updateSlideshowStatus();
  }

  function toggleFloatingPlay() {
    if (isFloatingPlaying) {
      pauseFloatingMusic();
    } else {
      playFloatingMusic();
    }
  }

  if (btnFloatingPlay) {
    btnFloatingPlay.addEventListener('click', toggleFloatingPlay);
  }

  // Coba autoplay langsung saat halaman dimuat
  playFloatingMusic();

  // Fallback: Autoplay pada klik pertama jika diblokir oleh browser
  const startAutoplayOnInteraction = (e) => {
    if (e.target.closest('#btn-start') || e.target.closest('#floating-player')) {
      document.removeEventListener('click', startAutoplayOnInteraction);
      document.removeEventListener('touchstart', startAutoplayOnInteraction);
      return;
    }
    if (!isFloatingPlaying && !isPlaying) {
      playFloatingMusic();
    }
    document.removeEventListener('click', startAutoplayOnInteraction);
    document.removeEventListener('touchstart', startAutoplayOnInteraction);
  };
  document.addEventListener('click', startAutoplayOnInteraction);
  document.addEventListener('touchstart', startAutoplayOnInteraction);

  // Render Lirik Dinamis ke Panel
  function renderLyrics(index) {
    lyricsScrollPanel.innerHTML = '';
    const trackLyrics = playlist[index].lyrics;

    trackLyrics.forEach(lyric => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'lyric-line';
      lineDiv.setAttribute('data-time', lyric.time);
      lineDiv.textContent = lyric.text;

      // Klik baris lirik untuk melompat ke detik lagu tersebut
      lineDiv.addEventListener('click', () => {
        audio.currentTime = lyric.time;
        if (!isPlaying) {
          playMusic();
        }
      });

      lyricsScrollPanel.appendChild(lineDiv);
    });
  }

  function loadTrack(index) {
    const wasPlaying = isPlaying;
    if (isPlaying) {
      audio.pause();
    }
    currentTrackIndex = index;
    audio.src = playlist[currentTrackIndex].url;
    audioTitle.textContent = playlist[currentTrackIndex].title;
    audioSub.textContent = playlist[currentTrackIndex].sub;
    
    // Render lirik untuk lagu baru
    renderLyrics(currentTrackIndex);
    
    if (wasPlaying) {
      playMusic();
    }
  }

  function playMusic() {
    if (isFloatingPlaying) {
      pauseFloatingMusic();
    }
    audio.play().then(() => {
      diskNeon.style.animationPlayState = 'running';
      btnPlayPause.textContent = 'Jeda Musik';
      isPlaying = true;
      if (updateSlideshowStatus) updateSlideshowStatus();
    }).catch(err => {
      console.log("Autoplay dicegah oleh browser.", err);
    });
  }

  function pauseMusic() {
    audio.pause();
    diskNeon.style.animationPlayState = 'paused';
    btnPlayPause.textContent = 'Putar Musik';
    isPlaying = false;
    if (updateSlideshowStatus) updateSlideshowStatus();
  }

  function togglePlay() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  btnPlayPause.addEventListener('click', togglePlay);
  
  btnNext.addEventListener('click', () => {
    let nextIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(nextIndex);
  });

  btnPrev.addEventListener('click', () => {
    let prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(prevIndex);
  });

  volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });

  // Auto-scroll lirik pelan mengikuti timestamp (tanpa highlight)
  let lastLyricIndex = -1;
  audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const currentTrackLyrics = playlist[currentTrackIndex].lyrics;
    
    let activeIndex = -1;
    for (let i = 0; i < currentTrackLyrics.length; i++) {
      if (currentTime >= currentTrackLyrics[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }
    
    // Hanya scroll jika baris lirik berubah
    if (activeIndex !== -1 && activeIndex !== lastLyricIndex) {
      lastLyricIndex = activeIndex;
      const lyricLines = lyricsScrollPanel.querySelectorAll('.lyric-line');
      if (lyricLines[activeIndex]) {
        const line = lyricLines[activeIndex];
        const panelHeight = lyricsScrollPanel.clientHeight;
        const lineHeight = line.clientHeight;
        const targetScroll = line.offsetTop - (panelHeight / 2) + (lineHeight / 2);
        
        // Scroll pelan otomatis
        lyricsScrollPanel.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  });

  // Render lirik dan detail lagu awal saat halaman dimuat
  renderLyrics(currentTrackIndex);
  audioTitle.textContent = playlist[currentTrackIndex].title;
  audioSub.textContent = playlist[currentTrackIndex].sub;

  // Deteksi ketika Iframe Video diklik (memutar video) untuk otomatis pause musik latar
  window.addEventListener('blur', () => {
    setTimeout(() => {
      if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
        pauseMusic();
        pauseFloatingMusic();
      }
    }, 150);
  });


  // === 2. DYNAMIC PHOTO GALLERY (GALERISTIN) ===
  // Daftar semua foto lama (1-38)
  const oldPhotos = [];
  for (let i = 1; i <= 38; i++) {
    oldPhotos.push(`assets/photos/memori-${String(i).padStart(2, '0')}.jpg`);
  }

  // Daftar foto baru (39-56)
  const newPhotos = [];
  for (let i = 39; i <= 56; i++) {
    newPhotos.push(`assets/photos/memori-${String(i).padStart(2, '0')}.jpg`);
  }

  // Shuffle acak (Fisher-Yates)
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const target1 = 'assets/photos/memori-11.jpg';
  const target2 = 'assets/photos/memori-12.jpg';
  
  // Filter target1 dan target2 dari foto lama
  const remainingOld = oldPhotos.filter(p => p !== target1 && p !== target2);
  const shuffledOld = shuffle(remainingOld);

  // Ambil 16 foto lama secara acak untuk polaroid
  const polaroidPhotos = shuffledOld.slice(0, 16);

  // Sisa 20 foto lama digabungkan dengan 18 foto baru untuk galeri
  const galleryPool = [...shuffledOld.slice(16), ...newPhotos];
  const shuffledGalleryPool = shuffle(galleryPool);

  // Susunan akhir galeri: target1 & target2 di depan, diikuti pool acak (total 40 foto)
  const galleryPhotos = [target1, target2, ...shuffledGalleryPool];

  // Render gallery
  let activeImgEl = document.getElementById('large-photo-img-1');
  let inactiveImgEl = document.getElementById('large-photo-img-2');
  const thumbnailsRow = document.getElementById('photo-thumbnails-row');
  const btnPhotoPrev = document.getElementById('btn-photo-prev');
  const btnPhotoNext = document.getElementById('btn-photo-next');
  const largePhotoFrame = document.getElementById('large-photo-frame');
  let activePhotoIndex = 0;

  // Buat thumbnail dari foto galeri
  galleryPhotos.forEach((src, idx) => {
    const card = document.createElement('div');
    card.className = 'photo-thumb-card' + (idx === 0 ? ' active-thumb' : '');
    const thumbSrc = src.replace('assets/photos/', 'assets/photos/thumbnails/');
    card.innerHTML = `<img src="${thumbSrc}" alt="Memori ${idx + 1}" loading="lazy">`;
    card.addEventListener('click', () => {
      handleUserInteraction();
      showPhoto(idx, false);
    });
    thumbnailsRow.appendChild(card);
  });

  // Tampilkan foto pertama
  if (activeImgEl) {
    activeImgEl.src = galleryPhotos[0];
  }

  // === SLIDESHOW & TRANSITION CONTROL ===
  let slideshowInterval = null;
  let interactionTimeout = null;
  let isSlideshowPausedByInteraction = false;

  function startSlideshow() {
    if (slideshowInterval) return; // Already running
    if (isSlideshowPausedByInteraction) return; // Paused due to recent interaction
    slideshowInterval = setInterval(() => {
      const nextIndex = (activePhotoIndex + 1) % galleryPhotos.length;
      showPhoto(nextIndex, true); // isAuto = true
    }, 5000);
  }

  function stopSlideshow() {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }
  }

  updateSlideshowStatus = function() {
    const musicActive = isPlaying || isFloatingPlaying;
    if (musicActive) {
      startSlideshow();
    } else {
      stopSlideshow();
    }
  };

  function handleUserInteraction() {
    isSlideshowPausedByInteraction = true;
    stopSlideshow();
    if (interactionTimeout) {
      clearTimeout(interactionTimeout);
    }
    interactionTimeout = setTimeout(() => {
      isSlideshowPausedByInteraction = false;
      updateSlideshowStatus();
    }, 15000); // 15 seconds
  }

  function showPhoto(index, isAuto = false) {
    if (!activeImgEl || !inactiveImgEl) return;
    activePhotoIndex = index;
    const thumbCards = thumbnailsRow.querySelectorAll('.photo-thumb-card');
    thumbCards.forEach(c => c.classList.remove('active-thumb'));
    if (thumbCards[index]) {
      thumbCards[index].classList.add('active-thumb');
      
      // Scroll horizontal container thumbnail HANYA jika dipicu secara manual oleh user
      if (!isAuto) {
        const card = thumbCards[index];
        const containerWidth = thumbnailsRow.clientWidth;
        const cardLeft = card.offsetLeft - thumbnailsRow.offsetLeft;
        const cardWidth = card.clientWidth;
        thumbnailsRow.scrollTo({
          left: cardLeft - (containerWidth / 2) + (cardWidth / 2),
          behavior: 'smooth'
        });
      }
    }

    // Double Image Crossfade
    activeImgEl.onload = null;
    inactiveImgEl.onload = null;

    inactiveImgEl.onload = () => {
      inactiveImgEl.onload = null;
      inactiveImgEl.classList.add('active-img');
      activeImgEl.classList.remove('active-img');

      // Swap references
      const temp = activeImgEl;
      activeImgEl = inactiveImgEl;
      inactiveImgEl = temp;
    };

    inactiveImgEl.src = galleryPhotos[index];
  }

  btnPhotoNext.addEventListener('click', () => {
    handleUserInteraction();
    showPhoto((activePhotoIndex + 1) % galleryPhotos.length, false);
  });

  btnPhotoPrev.addEventListener('click', () => {
    handleUserInteraction();
    showPhoto((activePhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length, false);
  });


  // === 3. GOOGLE DRIVE VIDEO PLAYLIST GALLERY ===
  const mainVideoPlayer = document.getElementById('main-video-player');
  const thumbCards = document.querySelectorAll('.video-thumb-card');

  thumbCards.forEach(card => {
    card.addEventListener('click', () => {
      pauseMusic();
      pauseFloatingMusic();
      thumbCards.forEach(c => c.classList.remove('active-thumb'));
      card.classList.add('active-thumb');
      const newVideoUrl = card.getAttribute('data-video-url');
      mainVideoPlayer.style.opacity = '0';
      setTimeout(() => {
        mainVideoPlayer.src = 'about:blank';
        requestAnimationFrame(() => {
          mainVideoPlayer.src = newVideoUrl;
          mainVideoPlayer.style.opacity = '1';
        });
      }, 300);
    });
  });



  // === 4.5 DEKORATIF POLAROID FRAMES (DENGAN FOTO ASLI) ===
  const polaroidsContainer = document.getElementById('polaroids-container');
  
  const polaroidConfigs = [
    { side: 'left', top: 8, maxOffset: 5, caption: 'Senja 🌅' },
    { side: 'right', top: 14, maxOffset: 5, caption: 'Ristin 🌸' },
    { side: 'left', top: 20, maxOffset: 4, caption: 'Tawa 💛' },
    { side: 'right', top: 26, maxOffset: 4, caption: 'Ada ☕' },
    { side: 'left', top: 32, maxOffset: 5, caption: 'Ketika 🌊' },
    { side: 'right', top: 38, maxOffset: 5, caption: 'Hebat 🎵' },
    { side: 'left', top: 44, maxOffset: 4, caption: 'Kita ⛵' },
    { side: 'right', top: 50, maxOffset: 4, caption: 'Momen ✨' },
    { side: 'left', top: 56, maxOffset: 5, caption: 'Sore itu 🌤️' },
    { side: 'right', top: 62, maxOffset: 5, caption: 'Bahagia 🎈' },
    { side: 'left', top: 68, maxOffset: 4, caption: 'Memori 🔒' },
    { side: 'right', top: 74, maxOffset: 4, caption: 'Senyum 😊' },
    { side: 'left', top: 80, maxOffset: 5, caption: 'Bintang ⭐' },
    { side: 'right', top: 86, maxOffset: 5, caption: 'Wow 🎸' },
    { side: 'left', top: 92, maxOffset: 4, caption: 'Rindu 💭' },
    { side: 'right', top: 95, maxOffset: 4, caption: 'Abadi ❤️' }
  ];

  function initPolaroids() {
    if (!polaroidsContainer) return;
    
    let leftCount = 0;
    let rightCount = 0;
    
    polaroidConfigs.forEach((config, configIdx) => {
      const frame = document.createElement('div');
      frame.className = 'polaroid-frame';
      
      let isPositiveTilt;
      if (config.side === 'left') {
        isPositiveTilt = (leftCount % 2 === 0);
        leftCount++;
      } else {
        isPositiveTilt = (rightCount % 2 === 0);
        rightCount++;
      }
      
      const baseTilt = Math.random() * 7 + 4.5;
      const finalTilt = isPositiveTilt ? baseTilt : -baseTilt;
      const randomTilt = finalTilt.toFixed(1);
      const randomOffset = Math.random() * config.maxOffset + 1.5;
      
      frame.style.top = `${config.top}%`;
      if (config.side === 'left') {
        frame.style.left = `${randomOffset}%`;
      } else {
        frame.style.right = `${randomOffset}%`;
      }
      frame.style.transform = `rotate(${randomTilt}deg)`;

      // Gunakan foto asli jika tersedia, fallback ke gradient
      const photoSrc = polaroidPhotos[configIdx] || '';
      const thumbSrc = photoSrc.replace('assets/photos/', 'assets/photos/thumbnails/');
      frame.innerHTML = `
        <div class="polaroid-photo-slot">
          <img src="${thumbSrc}" alt="${config.caption}" class="polaroid-photo-real" loading="lazy">
        </div>
        <div class="polaroid-caption">${config.caption}</div>
      `;

      // Event klik & dobel-klik (untuk desktop & mobile)
      let lastClickTime = 0;
      frame.addEventListener('click', (e) => {
        const currentTime = new Date().getTime();
        const clickDelay = currentTime - lastClickTime;
        lastClickTime = currentTime;

        if (clickDelay < 350) {
          // Dobel klik terdeteksi! Aktifkan polaroid
          triggerPolaroidActivation(frame);
        } else {
          // Efek getar dan partikel klik biasa
          frame.classList.add('wiggle');
          setTimeout(() => frame.classList.remove('wiggle'), 500);

          const particlesList = ['❤️', '✨', '🌸', '⭐', '🎈'];
          for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.className = 'polaroid-particle';
            particle.textContent = particlesList[Math.floor(Math.random() * particlesList.length)];
            const pageX = e.pageX + (Math.random() * 30 - 15);
            const pageY = e.pageY + (Math.random() * 30 - 15);
            particle.style.left = `${pageX}px`;
            particle.style.top = `${pageY}px`;
            particle.style.setProperty('--drift-x', `${Math.random() * 50 - 25}px`);
            particle.style.setProperty('--rot', `${Math.random() * 80 - 40}deg`);
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1200);
          }
        }
      });

      polaroidsContainer.appendChild(frame);
    });
  }

  // === POLAROID ACTIVATION & SHORTCUTS ===
  const activatedPolaroids = new Set();

  function triggerPolaroidActivation(frame) {
    if (activatedPolaroids.has(frame)) return; // Sudah aktif

    activatedPolaroids.add(frame);
    frame.classList.add('activated');

    // Tambah stempel hati kecil di pojok polaroid
    const heart = document.createElement('div');
    heart.className = 'polaroid-heart-stamp';
    heart.textContent = '❤️';
    frame.appendChild(heart);

    // Percikan aktivasi
    const rect = frame.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    spawnActivationSparks(x, y);

    // Cek jika seluruh 16 polaroid sudah aktif
    if (activatedPolaroids.size === polaroidConfigs.length) {
      triggerSecretFireworks();
    }
  }

  function spawnActivationSparks(x, y) {
    const particlesList = ['❤️', '✨', '🌸', '⭐', '🎈'];
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'polaroid-particle';
      particle.textContent = particlesList[Math.floor(Math.random() * particlesList.length)];
      particle.style.position = 'fixed';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--drift-x', `${Math.random() * 80 - 40}px`);
      particle.style.setProperty('--rot', `${Math.random() * 120 - 60}deg`);
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1200);
    }
  }

  // Shortcut Dobel Klik Judul MEMORISTIN (Mobile Fallback)
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    let titleClickCount = 0;
    let titleLastClick = 0;
    heroTitle.addEventListener('click', () => {
      const now = Date.now();
      if (now - titleLastClick < 400) {
        titleClickCount++;
        if (titleClickCount >= 1) { // 2 ketukan cepat
          triggerSecretFireworks();
          titleClickCount = 0;
        }
      } else {
        titleClickCount = 0;
      }
      titleLastClick = now;
    });
  }

  // === FIREWORKS ENGINE ===
  let fireworksActive = false;
  let fireworksAnimationId = null;
  let launchTextInterval = null;
  let launchNormalInterval = null;
  let canvas = null;
  let ctx = null;
  let particles = [];
  let rockets = [];
  let currentWordIndex = 0;

  const fireworksWords = [
    "YOU ARE MY EVERYTHING",
    "KAMU HEBAT, RISTIN!",
    "사랑해",
    "SEMANGAT TERUS YA!",
    "TETAPLAH DI SINI",
    "TERIMA KASIH CERITANYA"
  ];

  class Rocket {
    constructor(startX, startY, targetX, targetY, word) {
      this.x = startX;
      this.y = startY;
      this.targetX = targetX;
      this.targetY = targetY;
      this.word = word;
      this.speed = 12;
      const angle = Math.atan2(targetY - startY, targetX - startX);
      this.vx = Math.cos(angle) * this.speed;
      this.vy = Math.sin(angle) * this.speed;
      this.alive = true;
      this.trail = [];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 8) this.trail.shift();

      const dist = Math.hypot(this.targetX - this.x, this.targetY - this.y);
      if (dist < 15 || this.y <= this.targetY) {
        this.alive = false;
        explodeRocket(this.targetX, this.targetY, this.word);
      }
    }

    draw() {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 126, 95, 0.8)';
      ctx.lineWidth = 3;
      for (let i = 0; i < this.trail.length; i++) {
        const p = this.trail[i];
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }
  }

  class Particle {
    constructor(x, y, targetX, targetY, color) {
      this.x = x;
      this.y = y;
      this.vx = (targetX - x) / 35 + (Math.random() * 2 - 1) * 0.4;
      this.vy = (targetY - y) / 35 + (Math.random() * 2 - 1) * 0.4;
      this.targetX = targetX;
      this.targetY = targetY;
      this.color = color;
      this.alpha = 1;
      this.decay = Math.random() * 0.012 + 0.008;
      this.friction = 0.96;
      this.gravity = 0.04;
      this.lifeStage = 'assemble'; // 'assemble', 'hold', 'fade'
      this.timer = 0;
      this.holdTime = 70 + Math.random() * 30; // menahan bentuk tulisan
    }

    update() {
      if (this.lifeStage === 'assemble') {
        this.x += this.vx;
        this.y += this.vy;
        this.timer++;
        const dist = Math.hypot(this.targetX - this.x, this.targetY - this.y);
        if (dist < 2 || this.timer > 35) {
          this.x = this.targetX;
          this.y = this.targetY;
          this.vx = 0;
          this.vy = 0;
          this.lifeStage = 'hold';
          this.timer = 0;
        }
      } else if (this.lifeStage === 'hold') {
        this.timer++;
        if (this.timer > this.holdTime) {
          this.lifeStage = 'fade';
          const angle = Math.random() * Math.PI * 2;
          const force = Math.random() * 1.5;
          this.vx = Math.cos(angle) * force;
          this.vy = Math.sin(angle) * force;
        }
      } else if (this.lifeStage === 'fade') {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function explodeRocket(ex, ey, word) {
    if (!word) {
      // Ledakan dekoratif kembang api biasa (sangat meriah & acak)
      const colors = ['#ff5e36', '#00d2ff', '#ffa834', '#ffff80', '#ff3366', '#ffffff', '#a8ff34', '#ff34e8'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 70; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 1.5;
        const p = new Particle(ex, ey, ex + Math.cos(angle) * velocity * 30, ey + Math.sin(angle) * velocity * 30, color);
        p.lifeStage = 'fade'; // langsung memudar turun
        particles.push(p);
      }
      return;
    }

    // Ledakan teks kata-kata
    const offscreenCanvas = document.createElement('canvas');
    const offscreenCtx = offscreenCanvas.getContext('2d');
    
    offscreenCanvas.width = 650;
    offscreenCanvas.height = 120;
    
    offscreenCtx.fillStyle = '#ffffff';
    offscreenCtx.font = 'bold 36px Outfit, Montserrat, sans-serif';
    offscreenCtx.textAlign = 'center';
    offscreenCtx.textBaseline = 'middle';
    offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
    offscreenCtx.fillText(word, offscreenCanvas.width / 2, offscreenCanvas.height / 2);
    
    const imgData = offscreenCtx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
    const pixels = imgData.data;
    const points = [];
    
    const step = 3;
    for (let y = 0; y < offscreenCanvas.height; y += step) {
      for (let x = 0; x < offscreenCanvas.width; x += step) {
        const index = (y * offscreenCanvas.width + x) * 4;
        const alpha = pixels[index + 3];
        if (alpha > 128) {
          points.push({
            x: x - offscreenCanvas.width / 2,
            y: y - offscreenCanvas.height / 2
          });
        }
      }
    }
    
    const colors = [
      '#ff5e36', // Neon orange
      '#00d2ff', // Cyan
      '#ffa834', // Gold
      '#ffff80', // Yellow
      '#ff3366', // Pink
      '#ffffff'  // White
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    let scale = window.innerWidth < 768 ? 0.55 : 1.0;
    
    points.forEach(p => {
      const targetX = ex + p.x * scale;
      const targetY = ey + p.y * scale;
      const startX = ex + (Math.random() * 20 - 10);
      const startY = ey + (Math.random() * 20 - 10);
      particles.push(new Particle(startX, startY, targetX, targetY, color));
    });

    // Percikan acak background
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 5 + 1.5;
      const p = new Particle(ex, ey, ex + Math.cos(angle) * velocity * 25, ey + Math.sin(angle) * velocity * 25, color);
      p.lifeStage = 'fade';
      particles.push(p);
    }
  }

  function loopFireworks() {
    if (!fireworksActive) return;
    
    ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.update();
      if (r.alive) r.draw();
      else rockets.splice(i, 1);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.alpha <= 0) particles.splice(i, 1);
    }
    
    fireworksAnimationId = requestAnimationFrame(loopFireworks);
  }

  function startLaunchingRockets() {
    currentWordIndex = 0;
    
    // Luncurkan kembang api teks (lebih acak posisinya)
    const launchText = () => {
      if (!fireworksActive) return;
      const word = fireworksWords[currentWordIndex];
      currentWordIndex = (currentWordIndex + 1) % fireworksWords.length;
      
      const startX = canvas.width / 2 + (Math.random() * 160 - 80);
      const startY = canvas.height + 20;
      const targetX = canvas.width * 0.22 + Math.random() * (canvas.width * 0.56);
      const targetY = canvas.height * 0.25 + Math.random() * (canvas.height * 0.22);
      
      rockets.push(new Rocket(startX, startY, targetX, targetY, word));
    };

    // Luncurkan kembang api biasa yang ramai & acak
    const launchNormal = () => {
      if (!fireworksActive) return;
      const startX = Math.random() * canvas.width;
      const startY = canvas.height + 20;
      const targetX = canvas.width * 0.12 + Math.random() * (canvas.width * 0.76);
      const targetY = canvas.height * 0.15 + Math.random() * (canvas.height * 0.45);
      
      rockets.push(new Rocket(startX, startY, targetX, targetY, null));
    };

    // Pemicu awal
    launchText();
    setTimeout(launchNormal, 200);
    setTimeout(launchNormal, 600);
    setTimeout(launchNormal, 1000);

    // Set interval berkala (Teks tiap 2.8s, Biasa tiap 0.7s agar ramai)
    launchTextInterval = setInterval(launchText, 2800);
    launchNormalInterval = setInterval(launchNormal, 700);
  }

  function triggerSecretFireworks() {
    if (fireworksActive) return;
    
    fireworksActive = true;
    
    canvas = document.getElementById('fireworks-canvas');
    ctx = canvas.getContext('2d');
    const overlay = document.getElementById('fireworks-overlay');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    
    overlay.classList.add('active');
    
    window.addEventListener('resize', resizeFireworksCanvas);
    
    // Matikan musik utama, mainkan lagu melayang
    if (isPlaying) {
      pauseMusic();
    }
    playFloatingMusic();
    
    rockets = [];
    particles = [];
    loopFireworks();
    startLaunchingRockets();
    
    // Berhenti otomatis setelah 20 detik
    setTimeout(() => {
      stopSecretFireworks();
    }, 20000);
  }

  function resizeFireworksCanvas() {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  function stopSecretFireworks() {
    if (!fireworksActive) return;
    
    fireworksActive = false;
    
    if (fireworksAnimationId) {
      cancelAnimationFrame(fireworksAnimationId);
      fireworksAnimationId = null;
    }
    if (launchTextInterval) {
      clearInterval(launchTextInterval);
      launchTextInterval = null;
    }
    if (launchNormalInterval) {
      clearInterval(launchNormalInterval);
      launchNormalInterval = null;
    }
    
    window.removeEventListener('resize', resizeFireworksCanvas);
    
    const overlay = document.getElementById('fireworks-overlay');
    if (overlay) overlay.classList.remove('active');
    
    if (canvas) {
      canvas.style.opacity = '0';
      canvas.style.transition = 'opacity 1s ease-in-out';
      setTimeout(() => {
        canvas.style.display = 'none';
        canvas.style.opacity = '1';
        canvas.style.transition = '';
      }, 1000);
    }
    
    // Kembang api selesai, lagu melayang TIDAK dimatikan agar tetap berjalan indah
    
    // Reset polaroid teraktivasi
    activatedPolaroids.forEach(frame => {
      frame.classList.remove('activated');
      const stamp = frame.querySelector('.polaroid-heart-stamp');
      if (stamp) stamp.remove();
    });
    activatedPolaroids.clear();
  }

  initPolaroids();

  // === 5. START BUTTON SMOOTH SCROLL & AUTO PLAY ===
  const btnStart = document.getElementById('btn-start');
  const mainContainer = document.getElementById('main-content');

  btnStart.addEventListener('click', () => {
    mainContainer.scrollIntoView({ behavior: 'smooth' });
    if (!isPlaying) {
      togglePlay();
    }
  });
});
