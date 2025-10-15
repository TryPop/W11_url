//@ts-check
import url from 'url';
import http from 'http';
import fs from 'fs';
import { addLog } from './logger.js'

/**
 * Router for the website
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 */
export default function router(req, res) {
    // Add logging if url is undefined
    if (!req.url) {
        addLog("ERR", "Url not found");
        return;
    }
    const urlParse = url.parse(req.url);

    switch (urlParse.path) {
    case '/': // Index path
        addLog("OK", "Request at url: /")
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('templates/index.html', (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        })
        break;
    case '/about': // About path
        addLog("OK", "Request at url: /about")
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('templates/about.html', (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        })
        break;
    case '/styles.css': // Stylesheet
        addLog("OK", "Request at url: /styles.css")
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.readFile('public/styles.css', (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        })
        break;
    default: // Return 404 page for all other cases
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        addLog("ERR", `Tried to fetch: ${urlParse.path}`)
        res.end("404 not found");
            break;
        }
}