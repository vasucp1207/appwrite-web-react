import useSWR, { useSWRConfig } from "swr";
import useSWRSubscription from "swr/subscription";
import { Models } from "appwrite";

interface returnTypeArgs {
  data: Models.Document[] | undefined,
  error: any
}

export function useListDocuments(
  client: any,
  database: any,
  databaseID: string,
  collectionID: string
): returnTypeArgs {
  const { mutate } = useSWRConfig();

  useSWRSubscription(['docs'], () => {
    const unsubscribe = client.subscribe('documents', () => {
      mutate('listDocs');
    });
    return () => unsubscribe;
  });

  const fetcher = async (): Promise<any> => {
    const response = await database.listDocuments(
      databaseID,
      collectionID
    );
    return response.documents;
  };

  const { data, error } = useSWR<any, Error>('listDocs', fetcher);
  mutate('listDocs');

  return {
    data,
    error,
  }
}
