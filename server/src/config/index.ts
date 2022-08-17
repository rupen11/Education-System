const config = {
    get serverPort() {
        return process.env.PORT ?? 8080;
    },
    get mongodbUrl() {
        return process.env.MONGODB_URL;
    }
}

export { config };