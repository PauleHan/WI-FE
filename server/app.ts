import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as path from "path";
import * as favicon from "serve-favicon";
import * as cors from "cors";

import { articleRouter } from "./routes/article";
import { articlesRouter } from "./routes/articles";
import { authRouter } from "./routes/auth";
import { indexRouter } from "./routes/index";
import { userRouter } from "./routes/user";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(cors());
// const whitelist = ['https://wiki-investigation-paulehan.c9users.io/'];
const whitelist = ['*'];

const corsOptions = {
	'origin': function(origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		}
		else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	'preflightContinue':	false,
	'methods':				['GET', 'POST'],
	'credentials':			true
}

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

app.use(favicon(path.join(__dirname + '/static/favicon.ico')));

app.options('*', cors(corsOptions));
// api routes
app.use("/api/article", articleRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api", indexRouter);

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../wiki-feindex.html'));
// });

if (app.get("env") === "production") {

	// in production mode run application from dist folder
	app.use(express.static(path.join(__dirname, "/../wiki-fe")));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
	const err = new Error("Not Found");
	next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

	res.status(err.status || 500);
	res.json({
		error: {},
		message: err.message,
	});
});

export { app };