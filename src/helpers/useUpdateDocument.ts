export function useUpdateDocument(
  doc: any,
  data: object,
  database: any
): Promise<any> {
  return new Promise(resolve => {
    const promise = database.updateDocument(
      doc.$databaseId,
      doc.$collectionId,
      doc.$id,
      data
    );

    promise.then(function (response: any) {
      console.log(response);
      resolve(response);
    }, function (error: Error) {
      console.log(error);
      resolve(error);
    });
  })
}