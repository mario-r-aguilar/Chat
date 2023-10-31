import express from 'express';
import handlebars from 'express-handlebars';
import path from 'node:path';
import getDirname from './utils/utils.js';
import { socketServer } from './utils/socketServer.js';
import { viewsRouter } from './routes/views.routes.js';

const app = express();
const __dirname = getDirname(import.meta.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');

app.use('/static', express.static(path.join(__dirname, '/public')));

app.use('/', viewsRouter);

const PORT = process.env.PORT || 8080;

const httpServer = app.listen(PORT, () => {
	console.info('Server listening...');
});

socketServer(httpServer);
