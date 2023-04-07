import useSWR from "swr";

interface returnTypeArgs {
  data: any | undefined,
}

export function useLogedAccount(
  account: any
): returnTypeArgs {
  const fetcher = async (): Promise<any> => {
    const response = await account.get();
    return response;
  }

  const { data, error } = useSWR<any, Error>('getLogedUser', fetcher);
  return { data };
}