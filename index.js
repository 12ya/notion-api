const express = require('express');
require('dotenv').config();

const { Client } = require('@notionhq/client');

const app = express();
const port = 8080;
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

app.get('/', async (req, res) => {
    const listUsersResponse = await notion.users.list({});

    const response = await notion.databases.query({
        database_id: 'c633a3f5-f8f2-4b35-bfcf-822a36c6a7c0',
    });
    res.json(response);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
