import dotenv from 'dotenv'
dotenv.config()
import express, { json, urlencoded } from "express"
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
const [app, port] = [express(), process.env.PORT || 3000]
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Determine the base directory
const baseDir = process.env.NODE_ENV === 'production' ? path.join(process.cwd(), "/server") : __dirname;
const { connect } = mongoose;
connect(process.env.MONGO_ATLAS_URI, {
    serverSelectionTimeoutMS: 100000
})
    .then(() => console.log('Connected to Province db successfully'))
    .catch(err => console.log(`ERROR In Connection to Province db: \n ${err}`));
app.use(handlePreflight);
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(express.static(path.join(baseDir, "./public/")))
app.set('trust proxy', 1);
// trust first proxy

const allowedOrigins = {
    development: 'http://localhost:5173',
    production: 'https://provincetradehub.vercel.app/' // definitely modify when domain issue is solved
};
let corsOptions = {
    origin: allowedOrigins[process.env.NODE_ENV],
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 204
}
app.use(cors(corsOptions));
import './src/cronjobs/refreshTokenJob.js'
import authRouter from './src/auth/JWT.js'
import indexRouter from './src/routes/indexRouter.js'
import imageRouter from './src/routes/imageRouter.js'
import { handlePreflight } from './src/auth/middlware.js';
app.use('/api', indexRouter)
app.use('/api/img', imageRouter)
app.use('/api/auth', authRouter)
app.get('/', (req, res) => res.json({ message: 'Get a life bro!' }))
app.listen(port, () => console.log(`Client server listening on http://localhost:${port}/`))