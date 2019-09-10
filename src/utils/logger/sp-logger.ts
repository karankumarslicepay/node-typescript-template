const splogger = require("sp-uni-logger/index.js");
const config = {
    // eventLogger: {
    // filenamePrefix: "events"
    // },
    accessLogger: {
        // filenamePrefix: "access",\
        logResponseBody: false,
        logRequestBody: false
        // requestWhitelist: ["url", "headers", "method", "httpVersion", "originalUrl", "query", "params"],
        // responseWhitelist: ["_header", "statusCode", "statusMessage"]
    },
    logger: {
        filenamePrefix: "dev",
    },
    conditions: {
        generateRequestId: false,
        strict: false,
    },
    logDir: process.env.LOG_DIR || "sp-logger/",
    blackList: ["x-access-token","u-access-token", "otp", "password"]
};

export default splogger.init(config);