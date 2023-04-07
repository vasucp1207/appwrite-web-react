import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

interface configRetArgs {
  client: Client,
  account: Account,
  database: Databases,
  storage: Storage,
  avatars: Avatars
}

export function useConfig(configs: any): configRetArgs {
  const client = new Client();
  if (configs.endpoint) client.setEndpoint(configs.endpoint).setProject(configs.projectId);

  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);
  const avatars = new Avatars(client);

  return {
    client,
    account,
    database,
    storage,
    avatars
  }
}