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

const httpServer = app.listen(8080, () => {
	console.info('Listening port 8080...');
});

socketServer(httpServer);
