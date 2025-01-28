const logger = {
    log: (message) => {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
};

module.exports = logger;
