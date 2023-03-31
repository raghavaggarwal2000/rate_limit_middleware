# Rate Limiter middleware

You need to have two packages in order to make this work, Also it can be run on express server.

## To install the packages

```
    npm install 
```

# Integration of the middleware, there are 2 methods:

### Method 1:

- write this code in your main file.

 ```
    const rate_limit = require('path of the rate_limit.js file');
    const express = require('express');
    const cookieParser = require('cookie-parser');

    const app = express();

    app.listen(process.env.PORT || 3000);
    app.use(cookieParser); // This is needed because it is used to parse the cookies and populates req.
    app.use(rate_limit);
    
 ```

### Method 2: 

 ```
    const rate_limit = require('path of the rate_limit.js file');
    const express = require('express');
    const cookieParser = require('cookie-parser');

    const app = express();

    app.listen(process.env.PORT || 3000);
    app.use(cookieParser); // This is needed because it is used to parse the cookies and populates req.
    app.get('/', (req, res) => {
        res.send('Testing');
    });

    // We are using rate_limit in only /login webpage
    app.get('/login', rate_limit, (req,res) =>{
        res.send('login');
    })
    
 ```

# Parameters in rate_limit.js file

- max: It is used to limit n request per window, default is 20
- time : The time for which n request can be made, default is 60 secs
- message: Message which you want to show to the user when limit is crossed. Default: "Too many requests, please try again later."