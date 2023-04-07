export function useLogOut(account: any): void {
  account.deleteSession('current');
  window.location.href = '/';
}