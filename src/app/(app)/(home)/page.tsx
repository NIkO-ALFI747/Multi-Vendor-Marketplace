import configPromise from '@payload-config'
import { getPayload } from 'payload'

/**
 * Renders the list of documents from the `categories` collection as pretty-printed JSON.
 *
 * Fetches the Payload instance using the configured `configPromise`, retrieves all documents
 * from the `categories` collection, and returns a JSX element that contains the JSON string.
 *
 * @returns A JSX element containing the pretty-printed JSON representation of the fetched categories data.
 */
export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
  })

  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}