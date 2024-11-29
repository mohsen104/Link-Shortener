import express from 'express';
import ConnectedToMongodb from './configs/mongodb.config.js';
import URLController from './controllers/URL.controller.js';

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json());

ConnectedToMongodb();

app.post("api/shortener", URLController.createShortLink);
app.get("api/s/:shortId", URLController.getURL);

app.use((req, res) => {
    res.status(404).json({
        message: "NotFound Route",
    });
});

app.use((err, req, res) => {
    let status = err?.status ?? err?.statusCode ?? err?.code;
    if (!status || isNaN(+status) || status > 511 || status < 200) status = 500;
    const message = err?.message ?? err?.stack ?? "InternalServer Error";
    res.status(status).json({
        message: message || "an error occurred",
    });
});

app.listen(3000, () => {
    console.log('server run on port 3000');
})