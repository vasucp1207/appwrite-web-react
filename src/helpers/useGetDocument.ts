import useSWR from 'swr';
import { Models } from "appwrite";

interface returnTypeArgs {
  data: Models.Document | undefined;
}

export function useGetDocument(
  database: any,
  databaseId: string,
  collectionId: string,
  documentId: string
): returnTypeArgs {
  const fetcher = async () => {
    const response = await database.getDocument(
      databaseId,
      collectionId,
      documentId
    );
    return response;
  }

  const { data } = useSWR<any, Error>('getDoc', fetcher);
  return { data }
}