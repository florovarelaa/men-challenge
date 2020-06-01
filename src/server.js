import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerOptions from './swagger';
import { setEnvVariables } from './utils/envUtil';
import indexRouter from './routes';
import apiRouter from './router';
import errorHandler from './middlewares/common/errorHandler';

setEnvVariables();

const server = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

server.use(logger('dev'));

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(errorHandler);

server.use(cookieParser());
server.use(express.static(path.join(process.cwd(), 'public')));

server.use('/', indexRouter);
server.use('/api', apiRouter);
server.use(errorHandler);

export default server;
