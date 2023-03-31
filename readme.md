# Rate Limiter middleware

You need to have express-rate-limit
to install it
```
    npm install express-rate-limit
```

# To use this middleware, you need to do:

- write this code in your main file.
 ```
    const rate_limit = require('path of the rate_limit.js file');
    const express = require('express');

    const app = express();

    app.listen(process.env.PORT || 3000);

    app.use(rate_limit);
    
 ```





or create a new repository on the command line
echo "# rate_limit_middleware" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/raghavaggarwal2000/rate_limit_middleware.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/raghavaggarwal2000/rate_limit_middleware.git
git branch -M main
git push -u origin main