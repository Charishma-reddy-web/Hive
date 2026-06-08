import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const defaultOrigins = [
  'http://localhost:3001',
  'http://127.0.0.1:3001',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

const parseOrigins = (value?: string): string[] =>
  (value || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)

const corsOrigins = parseOrigins(process.env.CORS_ORIGINS)
const csrfOrigins = parseOrigins(process.env.CSRF_ORIGINS)
const useS3Storage = Boolean(
  process.env.S3_BUCKET &&
    process.env.S3_REGION &&
    process.env.S3_ACCESS_KEY_ID &&
    process.env.S3_SECRET_ACCESS_KEY,
)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: corsOrigins.length > 0 ? corsOrigins : defaultOrigins,
  csrf: csrfOrigins.length > 0 ? csrfOrigins : defaultOrigins,
  collections: [Users, Media],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  secret: process.env.PAYLOAD_SECRET || 'replace-this-with-a-long-random-string',
  plugins: [
    s3Storage({
      enabled: useS3Storage,
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
      },
      collections: {
        media: {
          disablePayloadAccessControl: true,
          prefix: 'media',
        },
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    blocksAsJSON: true,
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: process.env.PAYLOAD_DB_PUSH === 'true' || process.env.NODE_ENV !== 'production',
  }),
  sharp,
})
