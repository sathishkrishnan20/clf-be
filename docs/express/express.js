/*
    Express Module Provides below methods
        1. Router()
            Rotuer() provides below Functions/methods 
               1. get()
               2. post()
               3. put()
               4. delete
               5. options() and all http related mehtods


    express() provides below Object    
        1. use 
            it used to mount the specified middleware function or functions at the specified path
                ex: app.use('/path', RouterFunctions)        
        2. listen
            it used to listen or to run the application on specfic port 
        3. all http relater methods (get, post, put, delete, options, etc..)
        


Express Provides req and res object as a parameter for every Router/handler functions

    req object contains below properties and methods
       properties: 
        1. body
        2. params
        3. path
        4. url
        5. headers
        6. method

       methods:
        1. get()

    res object contains below 
       Methods
        1. send(responseData)
            Send is used to Send the Response
        2. status(statusCode)
            status is used to set any custom status code, by default it will send as 200
        3. setHeader(hearderName, headerValue)    
            setheader is used to set custom headers while responding the data

*/