import { ID } from "appwrite";

export function useCreateFile(
  file: File | null,
  storage: any
): void {
  const promise = storage.createFile(
    '641ad60f30c8c272648e',
    ID.unique(),
    file
  );

  promise.then(function (response: any) {
    console.log(response);
  }, function (error: Error) {
    console.log(error);
  });
}