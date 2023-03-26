var express = require('express');
var router = express.Router();

const docsModel = require("..models/docs");

router.get(
    "/",
    async (req, res) => {
        const docs = await docsModel.getAllDocs();

        return res.json({
            data: docs
        });
    }
);

module.exports = router;