export function useDelelteDocument(
  doc: any,
  database: any
): void {

  const promise = database.deleteDocument(
    doc.$databaseId,
    doc.$collectionId,
    doc.$id
  );

  promise.then(function (response: any) {
    console.log(response);
  }, function (error: Error) {
    console.log(error);
  });
}