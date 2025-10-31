// FILE: src/services/authService.js
export const login = async (username, password) => {
  if (username === 'admin' && password === 'admin') return { ok: true, token: 'FAKE_TOKEN' };
  return { ok: false, message: 'Invalid' };
};
