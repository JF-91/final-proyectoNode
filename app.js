import * as path from 'path';
import express from "express";

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/public/products.html`);
});

app.listen(8080, () => {
    console.log('Application listening on port 8080!');
});