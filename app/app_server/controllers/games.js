'use strict';

const gamesList = function(req, res) {
  res.render('game-list', { 
  	title: 'StubCam -  A Camosun Ticket Site',
  	pageSlogan: {
  		tagline1: 'Never miss a game!',
  		tagline2: 'Never miss an Event!',
  		title: 'StubCam!',
  		moto: 'StubCam is Camosun College go to ticket agency. If you need a ticket for the BIG game. WE GOT IT!'
  	},
  	games: [{
  		homeTeam: 'Camosun Chargers',
  		awayTeam: 'UFV Cascades',
  		sport: 'Men\'s Volleyball'
  	}, {
  		homeTeam: 'Camosun Chargers',
  		awayTeam: 'DC Royals',
  		sport: 'Women\'s Volleyball'
  	}, {
  	 	homeTeam: 'Camosun Chargers',
  	 	awayTeam: 'DC Royals',
  	 	sport: 'Men\'s Volleyball'
  	}]  
  });
};

const gamesDetails = function(req, res) {
  res.render('game-details', { 
  	title: 'Game Details',
  	gameDetails: {
  	  homeTeam: 'Camosun Chargers',
  		awayTeam: 'DC Royals',
  		sport: 'Men\'s Volleyball',
  		gameImage: 'https://farm1.staticflickr.com/701/31246214194_4890d62d26.jpg',
  	  preview: 'Watch the undefeated Chargers take-on the DC Royals in a battle to end all battles',
  		location: 'Victoria - Camosun College (PISE)',
  		gameDate: 'Fri Nov 3, 2017',
  		time: '6:00 pm'
  	},
  	admissions: [{
  		group: 'Camosun Student (with ID)',
  		price: 'Free!'
  	}, {
  		group: 'Non-Camosun Student',
  		price: '$4'
  	}, {
  		group: 'Adults',
  		price: '$6'
  	}, {
  		group: 'Seniors',
  		price: '$4'
  	}, {
  		group: 'Youth (13-17)',
  		price: '$4'
  	}, {
  		group: 'Children (12 and under)',
  		price: 'Free!'
  	}]
  
  
  });
};

const tickets = function(req, res) {
  res.render('game-tickets', { 
  	title: 'Get Tickets',
  	admissions: [{ 
  		category: 'General Admissions',
			group: 'Camosun Student (with ID)',
  		price: 'Free!',
  		cost: 0
  	}, {
  		category: 'General Admissions',
  		group: 'Non-Camosun Student',
  		price: '$4',
  		cost: 4
  	}, {
  		category: 'General Admissions',
  		group: 'Adults',
  		price: '$6',
  		cost: 6
  	}, {
  		category: 'General Admissions',
  		group: 'Seniors',
  		price: '$4',
  		cost: 4
  	}, {
  		category: 'General Admissions',
  		group: 'Youth (13-17)',
  		price: '$4',
  		cost: 4
  	}, {
  		category: 'General Admissions',
  		group: 'Children (12 and under)',
  		price: 'Free!',
  		cost: 0
  	}]  
  
  
  });
};

module.exports = {
    gamesList,
    gamesDetails,
    tickets
};

