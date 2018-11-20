# Project Overview

## Project Schedule

|  Day   | Deliverable          | Status
|--------|----------------------| ----------|
|Nov 5th | Project Description  | Complete
|Nov 5th | Wireframes / Priority Matrix | Complete
|Nov 6th | Core Application Structure   | Complete
|Nov 7th | Pseudocode / actual code | Complete
|Nov 8th | Initial Clickable Model  | Complete
|Nov 9th | MVP | Complete
|Nov 10th| MVP | Complete
|Nov 11th| Post-MVP| Complete
|Nov 12th| Post-MVP | Complete
|Nov 13th| Present | Incomplete


## Project Description

This app will be built in partnership with the UX team who came up with the idea of this app.  The point of this app is to help users maximize space within their rooms of their apartments or houses.  The landing page of this app will be a general page containing the app name.  Next, the user will be directed to a page with pictures of the quick tutorial of the app.  Once the user passes this, they will be directed to a default explore page similar to Instagram's explore.  When a User clicks on a picture, they will be directed to a page with general information of the user who posted the page. The bottom nav will route the user to the explore page, the users customization, and the faves of the user that comes from the explore page.  When the user clicks on the user icon, they will be directed to the rooms page where they select which room they will customize. Then, they would choose which furniture would go into their room.  Next, they will go to the next page where the user can drag and drop the furniture within their "room".  This page will also render a list of suggestions that come from a table in the db.

## Wireframes
Tables and Constraints:
(https://res.cloudinary.com/jperalta/image/upload/v1542727021/IMG_1047.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1542730064/IMG_1045.jpg)

Wireframes
(https://res.cloudinary.com/jperalta/image/upload/v1542723347/IMG_1041.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1542723403/IMG_1042.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1542723473/IMG_1039.jpg)
(https://res.cloudinary.com/jperalta/image/upload/v1542723522/IMG_1040.jpg)

App Structure:
(https://res.cloudinary.com/jperalta/image/upload/v1542727791/IMG_1048.jpg)
## Priority Matrix
(https://res.cloudinary.com/jperalta/image/upload/v1542723575/IMG_1043.jpg)

- Pages Layout | 15hrs
- React frontend build | 24hrs
- Server setup | 4 hrs
- MVC | 14 hrs
- Styles | 8 hrs
- DB and tables | 6 hours
- joining tables | 3hrs
- faves | 6hrs
- Drag and Drop | 8hrs
- User Auth Simulation | 4hrs
- User DB | 4hrs
- Advanced Styles | 4hrs

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Pages Layout
- React frontend build
- Server setup
- MVC
- Styles
- DB and tables
- joining tables
- faves
- Drag and Drop

#### PostMVP

- User Auth Simulation
- User DB
- Advanced Styles

## React Architectural Design

Define the the React components and the architectural design of your app.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |  
| Header | This will render the header include the nav |
| Footer | This will render the header include the nav |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Filler Pages | H | 3hrs|  |  |
| RoomList Component | H | 6hrs|  |  |
| SingleRoom Component | H | 4hrs|  |  |
| ExplorePage | H | 4hrs|  |  |
| ExploreSingle | H | 4hrs|  |  |
| React Router/Bottom Nav | H | 3hrs|  |  |
| Server Setup | H | 4hrs|  |  |
| Routes | H | 5hrs|  |  |
| Model | H | 5hrs |  |  |
| Controller | H | 4hrs|  |  |
| Styles | H | 8hrs|  |  |
| DB and Tables | H | 4hrs|  |  |
| Joining Tables | H | 3hrs|  |  |
| Faves | H | 5hrs|  |  |
| Drag and Drop | M | 5hrs|  |  |
| User Auth Sim | M | 4hrs|  |  |
| Advanced Styling | M | 6hrs|  |  |
| Total | H | 77hrs|  |  |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```

```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
