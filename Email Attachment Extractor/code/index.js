// Import S3 Client
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");

// Import MailParser
const simpleParser = require('mailparser').simpleParser;

// Get the 