const express = require("express");
const commentRouter = express.Router();

const commentsController = require("../controllers/comment.controller");
const auth = require("../middlewares/auth.middleware");

commentRouter.get('/get_comment/:id'. auth, commentsController.get_comment);

module.exports = commentRouter;