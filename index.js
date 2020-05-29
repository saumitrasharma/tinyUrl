const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
npm.use(express.json());

app.put('/generate-tiny-url', (req, res) => {
    console.log(req);
    res.json({
        message: 'Tiny URL successfully generated'
    });
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});