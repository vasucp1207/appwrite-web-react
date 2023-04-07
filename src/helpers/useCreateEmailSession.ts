export function useCreateEmailSession(
  email: string,
  password: string,
  account: any
): Promise<any> {
  return new Promise((resolve) => {
    const promise = account.createEmailSession(
      email,
      password
    );

    promise.then(function (response: any) {
      console.log(response);
      resolve(response);
    }, function (error: Error) {
      resolve(error.message.split('.')[0])
    });
  })
}