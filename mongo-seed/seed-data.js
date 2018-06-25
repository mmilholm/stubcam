// Game Data

db.games.save({
  homeTeam: 'Camosun Chargers',
  awayTeam: 'UFV Cascades',
  sport: 'Men\'s Volleyball',
  gameDetails: [{
    _id: ObjectId(),
    gameImage: 'https://farm1.staticflickr.com/701/31236214194_4890d62d26.jpg',
    location: 'Victoria-Camosun College (PISE)',
    preview: 'Join us to for a most likely dull eventing where the ok Chargers Men\'s Volleyball team take on the University of Fraser Valley Cascades.',
    gameDate: new Date('2017-11-03T18:00:00Z')
  }]
});

db.games.save({
  homeTeam: 'Camosun Chargers',
  awayTeam: 'DC Royals',
  sport: 'Women\'s Volleyball',
  gameDetails: [{
    _id: ObjectId(),
    gameImage: 'https://farm1.staticflickr.com/701/31236214194_4890d62d26.jpg',
    location: 'Victoria-Camosun College (PISE)',
    preview: 'Tonight the Camosun Chargers women take on the DC Royals in volleyball',
    gameDate: new Date('2017-11-010T16:00:00Z')
  }]
});

db.games.save({
  homeTeam: 'Camosun Chargers',
  awayTeam: 'DC Royals',
  sport: 'Men\'s Volleyball',
  gameDetails: [{
    _id: ObjectId(),
    gameImage: 'https://farm1.staticflickr.com/701/31236214194_4890d62d26.jpg',
    location: 'Victoria-Camosun College (PISE)',
    preview: 'If your going to miss a game all year, this is the one! We encourage you not to show up',
    gameDate: new Date('2017-11-10T18:00:00Z')
  }]
});



//Admissions data

db.admissions.save({
    category: 'General Admissions',
    group: 'Camosun Student (with ID)',
    price: '0'
});

db.admissions.save({
    category: 'General Admissions',
    group: 'Non-Camosun Student',
    price: '4'
});

db.admissions.save({
    category: 'General Admissions',
    group: 'Adults',
    price: '6'
});

db.admissions.save({
    category: 'General Admissions',
    group: 'Seniors',
    price: '4'
});

db.admissions.save({
    category: 'General Admissions',
    group: 'Youth (13-17)',
    price: '4'
});

db.admissions.save({
    category: 'General Admissions',
    group: 'Children (12 and under)',
    price: '0'
});

