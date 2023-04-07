import { ID } from "appwrite";

export function useCreateDocuments(
  data: object,
  database: any
): void {
  const promise = database.createDocument(
    '6419e430d6e729855247',
    '641ac8e4d587151104b5',
    ID.unique(),
    data
  );

  promise.then(function (response: any) {
    console.log(response);
  }, function (error: Error) {
    console.log(error);
  });
}