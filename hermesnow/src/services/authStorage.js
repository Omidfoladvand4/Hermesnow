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
  const safeUser = {
    UserId: user.UserId,
    UserName: user.UserName,
    UserAvatar: user.UserAvatar,
    IsAdmin: user.IsAdmin,
    UserAge: user.UserAge,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser));
}

export function removeUser() {
  localStorage.removeItem(STORAGE_KEY);
}