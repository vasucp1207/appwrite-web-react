export function useCreateRecovery(
  email: string,
  account: any
): Promise<any> {
  return new Promise((resolve) => {
    const promise = account.createRecovery(
      email,
      'http://localhost:3000/reset' // make this equal to the reset route
    );

    promise.then(function (response: any) {
      resolve(response);
    }, function (error: Error) {
      console.log(error);
      resolve(undefined);
    });
  })
}