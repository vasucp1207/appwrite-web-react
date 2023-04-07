export function useCreateRecovery(
  email: string,
  account: any,
  routeRst: string
): Promise<any> {
  return new Promise((resolve) => {
    const promise = account.createRecovery(
      email,
      routeRst // make this equal to the reset route
    );

    promise.then(function (response: any) {
      resolve(response);
    }, function (error: Error) {
      console.log(error);
      resolve(undefined);
    });
  })
}