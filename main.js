require('./app.scss');

var globalJson = {
	'tweetData' : {
		'totalTweets': '200',
		'totalAssets' : '200',
		'totalFollowing' : '200',
		'totalFollowers' : '1M'
	},

	'feeds' : [
		{
			'profileImgPath': 'https://a3-images.myspacecdn.com/images03/25/d2b8244c7ecd4dbc8cf8b02d3ea36e6f/300x300.jpg',
			'profileName' : 'kerem',
			'name': 'Kerem Suer',
			'type': 'text',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'retweets': '20',
			'timeDiff' : '1m'
		},
		{
			'profileImgPath': 'http://blog.sight-management.com/wp-content/uploads/2013/03/6a00e54ecca8b98833017d42010b2a970c1-e1363789086287.jpg',
			'profileName' : 'axel_hermann',
			'name': 'Axel Hermann',
			'type': 'text',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'retweets': '20',
			'timeDiff' : '2h'
		},
		{
			'profileImgPath': 'https://a3-images.myspacecdn.com/images03/25/d2b8244c7ecd4dbc8cf8b02d3ea36e6f/300x300.jpg',
			'profileName' : 'kerem',
			'name': 'Kerem Suer',
			'type': 'text',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'retweets': '17',
			'timeDiff' : '4h'
		},
		{
			'profileImgPath': 'https://d2fab04skj7pig.cloudfront.net/c270118e9f77f1489b84e2ea8016a657f3032a38_1617717680_1465244901358?&size=160',
			'profileName' : 'kelly_braveheart',
			'name': 'Kelly Braveheart',
			'type': 'text',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'retweets': '2',
			'timeDiff' : '9h'
		}
	]
}

var twitterApp = (function(){
	var displayTweetData = function() {
		$('.tweet-value').text(globalJson.tweetData.totalTweets);
		$('.asset-value').text(globalJson.tweetData.totalAssets);
		$('.following-value').text(globalJson.tweetData.totalFollowing);
		$('.followers-value').text(globalJson.tweetData.totalFollowers);
	}

	var displayFeedData = function() {
		var feedDataList = globalJson.feeds;
		var feedList = $('.feed-list');
		for(var i=0; i<feedDataList.length; i++) {
			var tempList = $('<li class="feed-list-item"></li>');
			var containerWrapper = $('<div class="feed-container"></div>');
			var imageDiv = $('<img>');
			imageDiv.attr('src', feedDataList[i].profileImgPath).addClass('profile-image');
			var tempDiv = $('<div class="profile-image-container"></div>');
			tempDiv.append(imageDiv);
			var tempDivWrapper = $('<div class="profile-image-wrapper"></div>');
			tempDivWrapper.append(tempDiv);
			var feedDiv = $('<div class="feed-row"></div>');
			var feedFirstRow = $('<div class="feed-first-row"></div>');
			var feedName = $('<span class="name"></span>');
			var feedProfileName = $('<span class="profile-name"></span>');
			var feedTimeDifference = $('<span class="time-diff"></span>');
			feedName.text(feedDataList[i].name);
			feedProfileName.text('@' + feedDataList[i].profileName);
			feedTimeDifference.text(feedDataList[i].timeDiff);
			feedFirstRow.append(feedName);
			feedFirstRow.append(feedProfileName);
			feedFirstRow.append(feedTimeDifference);
			var feedSecondRow = $('<div class="feed-second-row"></div>');
			feedSecondRow.text(feedDataList[i].description);
			feedDiv.append(feedFirstRow);
			feedDiv.append(feedSecondRow);
			var iconList = $('<div class="feed-third-row"><span><i class="fas fa-reply"></i></span>\
				<span><i class="far fa-star"></i></span>\
				<span><i class="fas fa-sync"></i>'+ feedDataList[i].retweets +'</span>\
				<span><i class="fas fa-expand"></i></span></div>');
			feedDiv.append(iconList);
			containerWrapper.append(tempDivWrapper);
			containerWrapper.append(feedDiv);
			tempList.append(containerWrapper);
			feedList.append(tempList);
		}
	}

	var initialiseElements = function() {
		displayTweetData();
		displayFeedData();
	}

	var init = function(){
		initialiseElements();
	}

	return {
		init : init
	}
})(window);

$(document).ready(function(){
	twitterApp.init();
})