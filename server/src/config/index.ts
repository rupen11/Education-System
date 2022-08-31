const config = {
    get serverPort() {
        return process.env.PORT ?? 8080;
    },
    get mongodbUrl() {
        return process.env.MONGODB_URL;
    },
    get jwtSecret() {
        return process.env.JWT_SECRET_KEY;
    }
}

export { config };