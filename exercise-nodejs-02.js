// Per elencare i metodi forniti dal modulo Node.js "crypto", avvia il REPL
// ed eseguire il seguente codice: Object.getOwnPropertyNames(require('crypto')).sort()

const crypto = require('crypto');

function generateId() {
    return crypto.randomBytes(10).readUInt32BE();
    // se volessi generare un misto di numeri e lettere dovrei usare: return crypto.randomBytes(20).toString('hex');
}

console.log(generateId());
