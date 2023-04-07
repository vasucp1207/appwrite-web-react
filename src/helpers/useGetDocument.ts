import useSWR from 'swr';
import { Models } from "appwrite";

interface returnTypeArgs {
  data: Models.Document | undefined;
}

export function useGetDocument(
  database: any
): returnTypeArgs {
  const fetcher = async () => {
    const response = await database.getDocument(
      '6419e430d6e729855247',
      '641ac8e4d587151104b5',
      '64246762620574ef6fbb',
    );
    return response;
  }

  const { data, error } = useSWR<any, Error>('getDoc', fetcher);
  return { data }
}