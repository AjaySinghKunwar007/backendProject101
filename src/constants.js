
const constants={
    DB_NAME: "videotube",
    port: String(process.env.PORT),
    mongoDBUri: String(process.env.MONGODB_URI),
    crossOrigin: String(process.env.CORS_ORIGIN)
}
export default constants