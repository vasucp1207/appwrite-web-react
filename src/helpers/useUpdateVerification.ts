export function useUpdateVerification(
  userId: string | null,
  secret: string | null,
  account: any
): Promise<any> {
  return new Promise((resolve) => {
    const promise = account.updateVerification(userId, secret);

    promise.then(function (response: any) {
      resolve(response);
    }, function (error: Error) {
      console.log(error);
      resolve(undefined);
    });
  })
}