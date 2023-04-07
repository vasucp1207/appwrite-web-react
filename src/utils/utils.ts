export function getElement(field: string): any {
  if(field === 'name') return document.getElementById('name-warning');
  else if(field === 'email') return document.getElementById('email-warning');
  else if(field === 'password') return document.getElementById('password-warning');
  else if(field === 'forgot') return document.getElementById('forgot-warning');
  else if(field === 'new') return document.getElementById('new-warning');
  else if(field === 'confirm') return document.getElementById('confirm-warning');
}