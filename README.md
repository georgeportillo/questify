#Questify

#####Employment Engagement tool


###Installation:

This application assumes you have Compass install. 

	$ npm install -g generator-angular-fullstack
	$ brew install mongodb
	$ sudo mkdir -p /data/db
	$ yo angular-fullstack
	$ npm install
	$ bower install
	$ gem install compass
	
###Run Server

	$ sudo mongod
	$ cd path/to/project grunt serve
	
###Creating New Page

	$ yo angular-fullstack:route [page-name]
	Hit return on following prompts:
	? Where would you like to create this route? client/app/
	? What will the url of your route be? /[page-name]
	
####Tools:
Yeoman Generator

An [AngularJS Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack "Yoeman Generator")