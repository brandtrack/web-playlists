const getSong = (stepsArray) => {
  const stepsMix = stepsArray.toString()
  const songList = {
    "retail,foot-traffic,low": {
      "songUrl": "https://media.brandtrack.fm/web/86.mp3",
      "artist": "Corinne Bailey Rae",
      "title": "Put Your Records On",
      "genre": "Soul",
      "bpm": 96,
      "popularity": 77,
      "danceability": 73.9,
      "energy": 51.1
    },
    "retail,foot-traffic,mid": {
      "songUrl": "https://media.brandtrack.fm/web/60023.mp3",
      "artist": "Adore You - Harry Styles",
      "title": "Adore You",
      "genre": "Pop",
      "bpm": 99,
      "popularity": 86,
      "danceability": 67.6,
      "energy": 77.1
    },
    "retail,foot-traffic,high": {
      "songUrl": "https://media.brandtrack.fm/web/116405.mp3",
      "artist": "Avicii",
      "title": "Wake Me Up (Radio Edit)",
      "genre": "Pop Dance / EDM",
      "bpm": 124,
      "popularity": 87,
      "danceability": 52.7,
      "energy": 77.5
    },
    "hotel,weather,raining": {
      "songUrl": "https://media.brandtrack.fm/web/109017.mp3",
      "artist": "The North Sea Trio",
      "title": "Imagination",
      "genre": "Chill Jazz",
      "bpm": 118,
      "popularity": 57,
      "danceability": 49.1,
      "energy": 17.5
    },
    "hotel,weather,cloudy": {
      "songUrl": "https://media.brandtrack.fm/web/109138.mp3",
      "artist": "Brian Simpson",
      "title": "Moonlit Ocean",
      "genre": "Chill Jazz",
      "bpm": 99,
      "popularity": 47,
      "danceability": 66.7,
      "energy": 57.4
    },
    "hotel,weather,sunny": {
      "songUrl": "https://media.brandtrack.fm/web/109376.mp3",
      "artist": "Zachary Breaux",
      "title": "Cafe Reggio",
      "genre": "Chill Jazz",
      "bpm": 116,
      "popularity": 32,
      "danceability": 74.4,
      "energy": 66
    },
    "restaurant,consumer-rotation,slow": {
      "songUrl": "https://media.brandtrack.fm/web/7482.mp3",
      "artist": "Groove Da Praia",
      "title": "Is This Love",
      "genre": "Bossa Nova",
      "bpm": 119,
      "popularity": 37,
      "danceability": 92.4,
      "energy": 48.7
    },
    "restaurant,consumer-rotation,moderate": {
      "songUrl": "https://media.brandtrack.fm/web/109211.mp3",
      "artist": "Four80East",
      "title": "Cookie Strut",
      "genre": "Chill Jazz",
      "bpm": 98,
      "popularity": 48,
      "danceability": 73.5,
      "energy": 66
    },
    "restaurant,consumer-rotation,fast": {
      "songUrl": "https://media.brandtrack.fm/web/50435.mp3",
      "artist": "Jafunk",
      "title": "Dazed",
      "genre": "Deep House / Nu Disco",
      "bpm": 112,
      "popularity": 38,
      "danceability": 85.7,
      "energy": 62.8
    },
    "other,foot-traffic,low": {
      "songUrl": "https://media.brandtrack.fm/web/100866.mp3",
      "artist": "James Arthur",
      "title": "Say You Won't Let Go",
      "genre": "Pop",
      "bpm": 90,
      "popularity": 71,
      "danceability": 37.5,
      "energy": 60.3
    },
    "other,foot-traffic,mid": {
      "songUrl": "https://media.brandtrack.fm/web/107416.mp3",
      "artist": "Clobie Caillat",
      "title": "Fallin' For You",
      "genre": "Pop",
      "bpm": 117,
      "popularity": 61,
      "danceability": 64,
      "energy": 79.4
    },
    "other,foot-traffic,high": {
      "songUrl": "https://media.brandtrack.fm/web/107643.mp3",
      "artist": "Bruno Mars",
      "title": "Locked Out Of Heaven",
      "genre": "Pop / Pop Rock",
      "bpm": 143,
      "popularity": 88,
      "danceability": 72.6,
      "energy": 69.8
    }
  }

  return songList[stepsMix]
}
