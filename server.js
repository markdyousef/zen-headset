const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({message: "cool"}));

exports.server = server.listen(port, () => console.log(`Listeting on port ${port}`));