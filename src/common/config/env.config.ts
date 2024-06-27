export const EnvConfiguration = () => ({
    isDev: process.env.ISDEV || true,
    port: process.env.PORT || 3000,
    mongoDb: process.env.MONGODB_URL || ''
})