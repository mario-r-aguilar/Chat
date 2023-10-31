import { Server } from 'socket.io';

const messages = [];

export function socketServer(server) {
	const io = new Server(server);

	io.on('connection', async (socket) => {
		console.info('Cliente conectado');

		socket.on('message', (data) => {
			messages.push(data);
			const lastTenMessages = messages.slice(-10);
			io.emit('messages', lastTenMessages);
		});

		socket.on('getMessages', () => {
			const lastTenMessages = messages.slice(-10);
			socket.emit('messages', lastTenMessages);
		});

		socket.on('newUserConnect', (newUser) => {
			socket.broadcast.emit('userConnected', newUser);
		});

		socket.on('disconnect', () => {
			console.info('Cliente desconectado');
		});
	});

	return io;
}
