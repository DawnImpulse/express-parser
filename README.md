# express-parser
This is an [expressjs](https://expressjs.com/) middleware which is used in conjuction with [body-parser](https://www.npmjs.com/package/body-parser) & used to parse the nested json in urlencoded body params.
> supports typescript too

### Why?
The reason is many times while using `application/x-www-form-urlencoded` for body params, the body-parser middleware fails to parse the nested json *(e.g. for postman requests)*. Yes, **body-parser** provides `(urlencoded({ extended: true })` for this purpose only but it fails for postman requests containing nested json & maybe some others too.

This middleware is used specifically for parsing the nested json left by the **body-parser** middleware.

### Usage

```
... // initalizing other things

const express = require('express')
const expressParser = require("@dawnimpulse/express-parser")
const { urlencoded } = require("body-parser")

const app = express()

... // other middleware

app.use(urlencoded({ extended: true }))
app.use(expressParser)

// your objects are now properly parsed, use them from req.body 

```

### Contact  
  
+ Twitter - [@dawnimpulse](https://twitter.com/dawnimpulse)  
+ Email - [dawnimpulse@gmail.com](mailto:dawnimpulse@gmail.com)
  
    
  
### License (ISC)  
~~~~
ISC Licence

Copyright 2020 Saksham (DawnImpulse)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISIN
~~~~

> Written with [StackEdit](https://stackedit.io/).