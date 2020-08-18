# Complete Free Coding Bootcamp 2020 - the MERN Stack (For Beginners) 

This is a series video were we going to build a full-stack application from scratch using the MERN STACK ( MongoDB, Express, React.js and Nodejs).

We will build a <strong>Sports Web App</strong> for creating sports events and the app will include:

* User registration and authentication (maybe add facebook/gmail login if the series becomes popular) 
* Hashing password for security 
* Session control
* CRUD operations (create, read, update and delete) 
* Search for events using filters (Running, Cycling or Swimming) 
* Sign UP for event in order to participate
* Upload images to the server
* Website notification using web sockets (in order to approve or refuse the Event Sign UP request) 

### Milestones of the project

Series get more than <strong>1000 Stars </strong> I will create a <strong>React-Native</strong> APP for it!<br />
Series get more than <strong>5000 Stars </strong> I will add Social Media functionality such as the USER profile<br />

So please share this video with your friends and leave the like.

## Need help?
[We have a discord group](https://discord.gg/7bsz7U5)

## Videos on youtube

* [Project Demo](https://www.youtube.com/watch?v=vtuciNQFpyA) - Demo the project we will building during the series
* [Episode 0](https://www.youtube.com/watch?v=_kP5e9fi9yo) - Setup env, mongoDB and User model and Controller
* [Episode 1](https://www.youtube.com/watch?v=U3B2TdYMmmU) - Add routes setup and more end points
* [Episode 2](https://www.youtube.com/watch?v=STbqBxgKD2I) - Add events route and controller
* [Episode 3](https://www.youtube.com/watch?v=73WRxi49Czo) - Add Approval and Reject controller and routes  
* [Episode 4](https://www.youtube.com/watch?v=T_3xUTF86L8) - Add React on the frontend and Login and Register pages
* [Episode 5](https://www.youtube.com/watch?v=cN8DFNteYDc) - Add EventsPage and create events from the frontend
* [Episode 6](https://www.youtube.com/watch?v=IQnNYIuOvxw) - Add Styles for EventsPage, Login, Register and fix some small bugs
* [Episode 7](https://www.youtube.com/watch?v=2by22YOUmG8) - Add Dashboard page and base styles
* [Episode 8](https://www.youtube.com/watch?v=aQTNZcy6tnU) - Finish Dashboard and Add delete functionality 
* [Episode 9](https://www.youtube.com/watch?v=prOC9Px4wtg) - Add JWT tokens and protecting the routes
* [Episode 10 - A](https://www.youtube.com/watch?v=sk_b31rfAKw) - Add Logout and sockets.io to web-app
* [Episode 10 - B](https://www.youtube.com/watch?v=mypkhAFXPPo) - Fix register user and add notification for registering to events
* [Episode 11 - A](https://www.youtube.com/watch?v=hYqadsJSpdY) - Add topNav, userContext (React ContextApi) and DropDown menu
* [Episode 11 - B](https://www.youtube.com/watch?v=-Zh37vkUdmc) - Add Accept and Reject actions and protect the routes
* [Episode 12](https://www.youtube.com/watch?v=3eKJv_DopSU) - Add My Registrations Page and talk about the future of this project
* [Episode 13 - A](https://www.youtube.com/watch?v=uhCCB8Vqi9E) - Change backend (API) to save image on S3 Bucket (AWS) 
* [Episode 13 - B](https://www.youtube.com/watch?v=Mrmdo50zRNU) - Deploying the API and Frontend to Heroku

## Deploying your webapp

For deploying this project we will modificate our backend and start using the S3 data storage from AWS.
Heroku does not keep your files into the server and because of that we are moving away from saving the images in disk to saving the images into the S3 that will host the images for us.
You will need to create an AWS account and a new bucket that will be explained into the Episode 13-A.
Following the next episode 13-B we are spliting the Backend and Frontend into two separeted projects to take the advantage of Heroku's CI/CD that basically deploys your code automatically when it detects a new code into your github repository.

## Want to know more about my motivation for this project?
[Read my blog post](http://italktech.io/mern-coding-bootcamp/)
