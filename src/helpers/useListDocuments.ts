import useSWR, { useSWRConfig } from "swr";
import useSWRSubscription from "swr/subscription";
import { Models } from "appwrite";

interface returnTypeArgs {
  data: Models.Document[] | undefined,
  error: any
}

export function useListDocuments(
  client: any,
  database: any
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
      '6419e430d6e729855247',
      '641ac8e4d587151104b5'
    );
    return response.documents;
  };

  const { data, error } = useSWR<any, Error>('listDocs', fetcher);

  return {
    data,
    error,
  }
}
