# Project Description 
For this project, I am using the Yelp API(specifically the /businesses/search end point). The app allows the user to search for businesses anywhere in the country and 32 other countries. It also automatically displays businesses near the user once the page loads in the browser.

**Project Link:** [sondar](http://sondar.surge.sh)

# WireFrames
![Markdown Logo](https://i.imgur.com/WoKJaYh.png)
![Markdown Logo](https://i.imgur.com/St0QxM8.png)


## MVP
* Find and use external API
* Render data on a page
* Allow users to search for places based off location
* Render data and images of search results

## Post MVP
* Add currency exchange functionality for users that are using the app during foreign travels.

# React Component Hierarchy
```javascript
  <Header />
  <HeaderTwo />
  <Home />
    1. <HomeSearch />
    2. <Suggestions />
  <SpecificHeader />
  <SpecificSearch />

  <Footer />
```

| Components | Description  |
| -------- | -------------- |
| Header   | Provides Logo and a sticky header effect upon scroll down |
| Home     | Renders image background|
| Home Search | Provides the modal for business search |
| Suggestions | Automatically displays recomendations based on users location |
| Header Two | This header follows the user with the same input fields so that the user can update the search if they so choose |     
| Specific Search | Takes user to a new page that renders the results of the search in Home Search |
| Footer | Displays standard footer information                               |

## Helper functions


## Code Snippet


