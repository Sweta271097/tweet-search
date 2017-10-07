[![Node.js](https://cdn.rawgit.com/aleen42/badges/master/src/node.svg)](#) [![angular](https://rawgit.com/aleen42/badges/master/src/angular.svg)](#) [![npm](https://rawgit.com/aleen42/badges/master/src/npm.svg)](#) [![Heroku](http://heroku-badge.herokuapp.com/?app=newsnest&root=/)](#)
# TweetSearch

Search functionality on a plain log file containing Tweets from Twitter

## HIGHLIGHTS

* Client side implementation in Angular2 with Typescript best practices
* MVC pattern
* Using Twitter Bootstrap4 for responsive and materialzed UI 
* Implemented custom Angular pipe to mark embedded HTML as safe
* Front-end validation on search box
* All links to users(@) are hyperlinks, trigerring a new search
* All hashtags(#) are hyperlinks, trigerring a new search
* Falling to 404 Not Found page in case user hits unknown routes (NotfoundComponent)
* Custom data parser (backend/data/parser.js) for converting given file into a valid JSON
* Elasticsearch implementation for searching string with relevance (backend/elastic-search)

## INSTALLATION

### BACK-END:-

#### Prerequisites: 
	1. Node.js - (download from https://nodejs.org/en/)
	2. NPM - (download from https://www.npmjs.com/get-npm)
	3. Elasticsearch - (download from https://www.elastic.co/downloads/elasticsearch)
		For mac users: brew install elasticsearch
					   brew services start elasticsearch

#### Setup:
	1. Open folder 'back-end' (Or browse in IDE)
	2. Run 'npm install'
	3. Open folder 'data'
	4. Run 'node parser.js'. This will generate 'data.json' file from given 'assignment_tweet (1).txt'
	5. Open folder 'elastic-search'  
	6. Run 'node index.js'
	7. (Optional) Run 'node indices.js'. This will verify if the indexing is done successfully
	8. Open folder 'back-end' and Run 'node app.js'. This will open port 3000 as Node express.js server
	9. (Optional) Browse to 'localhost:3000' to verify if the server is running successfully

### FRONT-END:-

#### Prerequisites:
	1. Angular 2 - (https://angular.io/)
	2. Angular CLI - (https://github.com/angular/angular-cli)
	3. NPM - (download from https://www.npmjs.com/get-npm)

#### Setup:
	1. Open folder 'front-end' (Or browse in IDE)
	2. Run 'npm install'
	3. Run 'ng serve' // this will run the Angular app on port 4200
	4. Browse to 'localhost:4200'


## TEST CASES

1. Search without entering any text
2. Search for keyword 'via'. This should list many results with @--- tags.
3. Click on @--- tags in search results
4. Search for hashtags.
5. Click on #--- tags in search results


## Note:
	1. Please make sure that ports 9200, 3000 and 4200 are free as Elasticsearch, Node.js express and Angular run on these ports respectively by default.
	2. The given dataset doesn't contains any hashtag. Although the code is written to search for the HashTags
