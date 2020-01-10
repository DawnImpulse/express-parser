/*

ISC License

Copyright 2020, Saksham (DawnImpulse)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE
OR PERFORMANCE OF THIS SOFTWARE.

Written by Saksham <dawnimpulse@gmail.com>, 10 January 2020

------------------------

@info - use to parse the string to objects left by body-parser
        usually this happens in POSTMAN x-www-urlencoded data

@author Saksham
@note Last Branch Update - master
     
@note Created on 2020-01-10 by Saksham
@note Updates :

*/

/**
 * try to parse string to json
 *
 * @param input
 * @return object | string
 */
function parse(input: string): object | string {
    try {
        return JSON.parse(input);
    } catch (e) {
        return input;
    }
}

/**
 * default exported function
 * @param req
 * @param resp
 * @param next
 */
export default function(req, resp, next) {
    const body = {};

    // check if post request & type form urlencoded
    if (req.headers["content-type"] === "application/x-www-form-urlencoded" && req.method == "POST") {
        // check if body is not empty
        if (req.body !== undefined && req.body !== {}) {
            Object.keys(req.body).forEach((key) => {
                if (typeof req.body[key] === "string") {
                    body[key] = parse(req.body[key]);
                } else body[key] = req.body[key];
            });

            req.body = body;
            next();
            // check if typeof data is string
        } else next();
    } else next();
}
