import { ID } from "appwrite";

type retrunFn = () => Promise<any>;

export function useCreateAccount(
  email: string,
  password: string,
  name: string,
  account: any
): retrunFn {
  const createUser = async (): Promise<any> => {
    try {
      const response = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      return response;
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  };

  const logedUser = async (): Promise<any> => {
    try {
      const response = await account.createEmailSession(
        email,
        password,
      );
      return response;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  const createVerification = async (): Promise<any> => {
    try {
      const response = await account.createVerification(
        'http://localhost:3000', // make this the route of signup screen
      );
      return response;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const handleCreateAccount = async (): Promise<any> => {
    const userResponse = await createUser();

    let logedIn;
    if (userResponse !== 'A user with the same email already exists in your project.') {
      logedIn = await logedUser();
    } else {
      return new Promise(resolve => {
        resolve('Email already exists.');
      })
    }

    if (logedIn) {
      const verificationResponse = await createVerification();
      if (verificationResponse) {
        return new Promise((resolve) => {
          resolve('✅ Verification email sent.');
        })
      }
    }

    return new Promise((resolve) => {
      resolve(undefined);
    })
  };

  return handleCreateAccount;
}