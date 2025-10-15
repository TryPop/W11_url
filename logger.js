//@ts-check
import { appendFile } from "fs";

const LOG_FILE = 'log.txt';

/**
 * Utility function to write to a file
 * @param {string} type 
 * @param {string} msg 
 */
export function addLog(type, msg) {
    const log = `[${type}] ${msg}\n`
    appendFile(LOG_FILE, log, (err) => {
        if (err) throw err;
    });
}
