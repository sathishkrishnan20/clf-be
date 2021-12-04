/*
  On Application two things to be make Sure 
    on index.js app.listen Line Should be as below
            app.listen(process.env.PORT || 3000)  
    Create a file Name as "procfile" and add below line inside it
            web: node index.js
    
    1. Login to heroku
    2. Click New and Create new App
    3. Enter App Name and Region as US and Create App
    4. Connect To Github
    5. Search Repo
    6. Choose the Repo and connect
    7. Choose the Branch under Manual Deployment and Deploy Branch

    Ref Link: https://www.freecodecamp.org/news/how-to-deploy-your-site-using-express-and-heroku/

    https://clg-fe.herokuapp.com/
    https://clg-be-api.herokuapp.com/

*/