
  

![REPO SIZE](https://img.shields.io/github/repo-size/vanessawharton/Civicly-App?style=flat-square)

  

![TOP_LANGUAGE](https://img.shields.io/github/languages/top/vanessawharton/Civicly-App?style=flat-square)

  

![FORKS](https://img.shields.io/github/forks/vanessawharton/Civicly-App?style=social)

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
  
Through the sprint, our team met with the Client to provide updates and clarify questions. In order to remain on schedule, our group utilized a Trello board to visualize tasks that were in-progress, waiting to be reviewed, or completed. This helped clarify which pieces of the puzzle still needed to be done and streamlined the team's workflow.

As a representation of the planning spent on this project - we have included the scope document. This process involved spending time considering user flow, component structure, and design potential for the application. This experience also involved setting a timeline for certain features and was an interesting venture into estimating development time for a small team of developers.

[Scope Document with Wireframes](https://docs.google.com/document/d/1KP1pOUiBFMbrFIzqj-Oz6PArrrHwvRoKoHIDeLrmhUo/edit?usp=sharing)

  

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

### Deployment
We are currently running our application on [Heroku](https://www.heroku.com/)-- directions for deployment below are based on using this tool and assume it has been installed prior to following the steps below.

#### Create a Heroku project

From your terminal, navigate into your project directory. Note that your project must be setup as a git repository for these commands to work.

Run the following commands from within your project folder.

1. `heroku create`
2. Login in if prompted -- it might ask to open a browser
3. Type `git remote -v` to ensure it added successfully. You should see a remote called `heroku`

Make sure your PORT is configured correctly as:

```JavaScript
const PORT = process.env.PORT || 5000;
```

This will allow heroku to tell your app which port to listen on.

Next, commit your changes and push them to Heroku:

```
git add .
git commit -m "MESSAGE"
git push heroku main
```

Lastly, open terminal and type `heroku open` as a shortcut to open your website in a browser.


#### Heroku Deployment Resources

More detailed instructions can be found here: 

- [https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)


## Built With:

* [React.js](https://reactjs.org/docs/getting-started.html)
* [Node.js](https://nodejs.org/en/docs/)
* [Material-UI](https://mui.com) - Components and Styling
* [SweetAlert 2](https://sweetalert2.github.io/) - Visual Feedback for Admin Users
* [Passport](https://www.passportjs.org) - Secure Login & Account Management

*For a full list of dependencies - see the Package.json*

## Screen Shots

  * Landing Page

  <img src="https://user-images.githubusercontent.com/111813443/219004293-571f1b6f-d054-4ad0-b48a-d82648783e61.png" width="250">

  * Home Page

  <img src="https://user-images.githubusercontent.com/111813443/219003189-db69981f-053e-430e-85a3-441a23a2d9d9.png" width="250">

  * Report Map Page

  <img src="https://user-images.githubusercontent.com/111813443/219005594-42389330-96ff-4e35-89f1-d9dfbed05030.png" width="250">

  * Add New Report
  <img src="https://user-images.githubusercontent.com/111813443/219012167-e006fb78-0e5d-4493-8a46-691dad7acc28.mov">


  * Top Citizens Page

  <img src="https://user-images.githubusercontent.com/111813443/219003355-ad480768-6efc-4942-806d-008cfdd0ae8a.png" width="250">

  * User Profile Page

  <img src="https://user-images.githubusercontent.com/111813443/219005572-e022e260-7858-4af6-b53a-202d080623d5.png" width="250">

  * Admin Dashboard

  <img src="https://user-images.githubusercontent.com/111813443/219004791-f3cfc55e-e34e-4e89-a2d1-ef06ac47da8d.png" width="600">

  * Admin- Report Details

  <img src="https://user-images.githubusercontent.com/111813443/219004805-60b01dd0-d47b-48d5-a318-e4ef02b5a31d.png" width="250">

## Usage

  This application is meant to serve as a proof of concept for Civicly's development.

## Desktop *(Admin)*

 1. **Log In** 
 2. **Dashboard** 
 3. **Report Detail** 

 ### Admin Usage
1. Enter your username and password on the admin login page, and user will be navigated to the Admin Dashboard.
2. The Admin Dashboard will display a data grid with all submitted tickets from all users. The admin will have the option to sort this data by Status, Category, SubCategory or Date.
3. Clicking anywhere in a report row will open a report details window displaying all relevant details for the report, as well as a field for the admin to add notes to a report. These notes will only be visible to admins looking at the report.
4. By clicking the 'Update Status' button in the report details view, a pop-up window will show with a dropdown menu. The menu will include options to update the status of a report to 'Accepted', 'Dispatched', or 'Closed'. Selecting one of these options and clicking the 'Send Status Update' button will update the report status and send a notification to the user, keeping them up to date on the statuses of their report as the municipality addresses the issue.
5. Choosing the status 'Closed', will signify to the citizen that this report has been addressed, dispatched and corrected. This action will eliminate the report from the citizen map view as well.


## Mobile *(Citizen)*

1. **Landing Page**
2. **Log In/Register**
3. **Report Map View**
4. **Add New Report**
5. **Top Citizens**
6. **Citizen Profile**

  ### Citizen Usage
 1. **Landing Page** -  This is an initial splash page which shows options to log in or register as a new user.

 2. **Log In/Register** - Users can log in on a mobile device to access the mobile features. Users can also register as a new user by clicking the register link, and entering a username password, and zip code in the registration form.

 3. **Report Map View** - By clicking on the map pin icon in the bottom nav bar, users can see all citizen reports in a google map view that centers on user geo-location. In this view, the users can zoom in and out via the map, and click on any of the color-coded report pins to view a details card of the report that will pop up on top of the map. Users can up-vote a report as well. Up-voting lets other users and admins know that the community agrees an issue is important.

 4. **Add New Report** -  By clicking on the large '+' icon in the bottom nav bar, users can submit a new report. 
  - Step One (Create New Report): Users can click and drag in the map view to set the precise location of the issue. Clicking the "Confirm Issue Location" button will navigate users to step two.
  - Step Two (Choose Category): Users can now choose from an icon list, the category the issue falls under. Clicking on the icon will reveal the category in text underneath it. Once the correct category is chosen, users can click on the "Next" button which will take them to step three.
  - Step Three (Submit Report Form): Users can now choose a specific issue based on the category selected in step two by clicking the "Choose Issue" drop down and selecting an option. Users can then add an optional description of the issue to give admins more details about the problem at hand. Users have the option to submit a report anonymously, as well as attach a photo of the issue. Clicking the "submit" button send the report to Civicly admins, and navigates users to a success page, where they can view the status of their reports.

 5. **Top Citizens** -  Users can potentially see their status as  "top citizen" by the amount of reports  submitted and upvotes received. Top filter buttons are meant to sort and display by week, year, and overall scoreboard for game-ification and community involvement purposes.
 
 6. **Citizen Profile** - Users may view their total upvotes and tickets submitted. User's can upload a profile picture. From here users can also navigate to view all your reports submitted which contains ticket information. These individual tickets can also navigate the user to the Report Map where it was placed.

## Developer Notes

#### Mapping
  -React Google Maps Api is used for the Admin Detail, Report Map, and New Report Location.  MarkerF is used for creating pins on the map.  InfoWindowF is used for displaying report deatails when clicking a pin. 

## Authors & Acknowledgement

This app was built by:
 [Dylan Roets](https://github.com/dylanroets), 
 [Vanessa Wharton](https://github.com/vanessawharton), 
 [Andrew Carey](https://github.com/arcarey), 
 [Jared Lindquist](https://github.com/jared-lindquist),  
 and [Paul Norling](https://github.com/PaulNorling).

Thanks to [Firebase](https://firebase.google.com/) and [Google Maps](https://maps.google.com/) whose APIs supplied image upload and mapping capabilities for multiple parts of this application.

Special thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us make this application a reality.