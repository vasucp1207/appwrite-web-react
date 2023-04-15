export function useUpdateRecovery(
  userId: string | null,
  secret: string | null,
  newPassword: string,
  confirmPassword: string,
  account: any
): Promise<any> {

  return new Promise((resolve) => {
    const promise = account.updateRecovery(userId, secret, newPassword, confirmPassword);

    promise.then(function (response: any) {
      if (newPassword === confirmPassword) {
        resolve(response);
      }
    }, function (error: Error) {
      console.log(error)
      resolve(undefined);
    });
  })
}