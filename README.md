You can view this app live here: https://latticemovies.herokuapp.com/

### Features: 
- view popular movies 
- can search movies
- view suggested [keywords](https://developers.themoviedb.org/3/search/search-keywords) while searching
- view movie information
- view [similar movies](https://developers.themoviedb.org/3/movies/get-similar-movies)


### How to run the app locally:

 - clone this repo
 - go to root folder `/LM` 
 - create `.env` file in the root folter and add your TMDB api token as shown below:
 
  ```
    MOVIEDB_API_KEY = YOUR_API_TOKEN
  ```
  
 - run `npm run build`. This will install all dependecies including the ones specified in server and client folders.
 - run `npm start` and visit `http://localhost:8000` to view the local build. 
 
 ### Possible Future work:
 - add icons
 - better api error handling
 - styling can always be better!
...
 
 
