export const logger = console
export const EIDOS_VERSION = "0.4.3"
export const isDevMode = import.meta.env.MODE === "development"

logger.info(`current version: ${EIDOS_VERSION}`)
