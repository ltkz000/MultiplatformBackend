const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const Account = require('../models/account.model');
const Post = require("../models/post.model");
const Video = require('../models/video.model');
const {setAndSendResponse, responseError} = require('../constants/response_code');

const commentsController = {};
commentsController.get_comment = expressAsyncHandler(async (req, res) => {

});

commentsController.set_comment = expressAsyncHandler(async (req, res) => {

});

module.exports = commentsController;