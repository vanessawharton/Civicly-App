
  

![REPO SIZE]

  

![TOP_LANGUAGE]

  

![FORKS]

# Civicly

_Duration: Two Week Sprint_

  

  ## Summary

Communication between citizens and local governments is important but can be cumbersome. Reciprocal communication is even non-existent at times, which leads to a breakdown of the relationship between citizens and their local government.

Civicly is a reporting app where citizens can report non-emergency issues they find in their municipality. Things like potholes, graffiti, loose animals, and many others can be more easily reported by citizens and handled by their city. Citizens can report a geo-tagged location, violation/issue, attach a photo, and include comments to inform the municipality. An admin/city worker can look at the reports and dispatch appropriate resources and communicate back to citizens who requested help. A huge win for everyone!

This workable prototype is mobile first for citizens, desktop for admins. 

This project was a team effort -  built in its entirety over the course of two weeks as a part of [Prime Digital Academy](www.primeacademy.io).

## Approach:

With this project being a much larger workload than previous projects in our experience, and the added layer of client involvement-- planning was integral to results. Before starting development, we spent a week scoping the project to connect with our client to clarify their needs and establish a timeline. 

##### Wireframe / User Flow Prototype:
  
Through the sprint, our team met with the Client on multiple occasions to provide updates, and clarify questions. In order to remain on schedule, our group utilized a Trello board to visualize tasks that were in-progress, waiting to be reviewed, or completed. This helped clarify which pieces of the puzzle still needed clarification and streamlined the team's workflow.

As a representation of the planning spent on this project - we have included the scope document. This process involved spending time considering user flow, component structure, and design potential for the application. This experience also involved setting a timeline for certain features and was an interesting venture into estimating development time for a small team of developers.

[Scope Document with Wireframes](https://docs.google.com/document/d/1KP1pOUiBFMbrFIzqj-Oz6PArrrHwvRoKoHIDeLrmhUo/edit#heading=h.lhguc6hte2r4)

  

If you would like to see a draft of the database structure created during scoping - we have included the relevant ERD. This shows how the tables interact with one another and gives context to functions within the program.

  

[Entity-Relationship Diagram](https://app.dbdesigner.net/designer/schema/0-civicly)

  

  

## Getting Started:

  

  

### Prerequisites

  

- React.js *(built on version 17.0.2)*

  

- Keys for Google Map API's

  

- DotEnv file 



-  [Node.js](https://nodejs.org/en/)

  

- Axios

  

- Redux

  

- Redux-Saga

  

- [Material.UI](https://mui.com)

  

- Express

  

- Body-Parser

  

- 'PG'

  

- Database Manager (we utilized [Postico 2](https://eggerapps.at/postico2/))

  

  

### Installation
Using your package manager - install the dependencies

```
$ ~ npm install
```
In your database manager - create a database named `civicly` use the provided database.sql file to create the necessary tables for this project. 
*(We have included optional dummy data for testing purposes)*

Populate dotEnv file with:

> SERVER_SESSION_SECRET= 'string'
> REACT_APP_GOOGLE_MAPS_API_KEY= 'string'

With your database set up - start the server.
```
$ ~ npm run server
```

With the server running - open another terminal window and start your client.

Navigate to http://localhost:3000 if the run client script doesn't automatically open the application.

```
$ ~ npm run client
```

Since the app is not client facing at this time - there is no registration page. You will have to add an account through a `SQL INSERT` in your database manager.

## Built With:

* [React.js](https://reactjs.org/docs/getting-started.html)
* [Node.js](https://nodejs.org/en/docs/)
* [Material-UI](https://mui.com) - components and styling
* [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Drag and Drop functionality for mobile view
* [SweetAlert 2](https://sweetalert2.github.io/) - Visual feedback for users
* [Passport](https://www.passportjs.org) - Secure Login & Account Management

*For a full list of dependencies - see the Package.json*

## Screen Shots

  ![]

## Usage

  This application is meant to serve as a proof of concept for Civicly's development.

### Desktop *(Admin)*

 1. **Log In** - when logging in on a desktop using admin level credentials users will be brought to a desktop 'Dashboard'
 2. **Dashboard** - 
 3. **Report Detail** -


### Mobile *(Citizen)*

 1. **Landing Page** -  
 2. **Log In/Register** - users can log in on a mobile device to access the mobile features. 
 3. **Report Map View** - 
 4. **Add New Report** -  
 5. **Top Citizens** -  
 6. **Citizen Profile** - Users may view their total upvotes and tickets submitted. User's can upload a profile picture. From here users can also navigate to view all your reports submitted which contains ticket information. These individual tickets can also navigate the user to the Report Map where it was placed.

## Developer Notes

#### Mapping location
  

## Authors & Acknowledgement

Thanks to [Firebase](https://firebase.google.com/) whose API supplied image upload capabilities for multiple parts of this application.

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us make this application a reality.

Special thanks to the services that made the start of our Map display development possible:

 - [Radar](https://radar.com) - for Geo Coding
 - [MapTiler](https://www.maptiler.com) 
 - [Pigeon Maps](https://pigeon-maps.js.org) - React Maps