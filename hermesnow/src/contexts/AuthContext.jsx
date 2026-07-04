import { createContext, useContext, useState, useEffect, useMemo  , useCallback} from "react";
import { getStoredUser, saveUser, removeUser } from "../services/authStorage";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userData = getStoredUser();

    if (userData) {
      setUser(userData);
    }
    
    setLoading(false);
  }, []);

  const login = useCallback((userData) => {
  setUser(userData);
  saveUser(userData);
}, []);

const logout = useCallback(() => {
  setUser(null);
  removeUser();
}, []);

const updateUser = useCallback(
  (updatedData) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      ...updatedData,
    };
    
    setUser(updatedUser);
    saveUser(updatedUser);
  },
  [user]
);;

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
      updateUser,
      isAuthenticated: !!user,
    }),
    [user, loading , login , logout , updateUser],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
