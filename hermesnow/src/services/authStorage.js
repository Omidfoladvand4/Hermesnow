const STORAGE_KEY = "user";

export function getStoredUser() {
  const user = localStorage.getItem(STORAGE_KEY);

  if (!user) return null;

  try {
    return JSON.parse(user);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem(STORAGE_KEY);
}