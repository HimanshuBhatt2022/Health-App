import { createContext, useContext, useMemo, useState } from "react";
import { activities as seedActivities, appointments as seedAppointments } from "../data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activities, setActivities] = useState(seedActivities);
  const [appointments, setAppointments] = useState(seedAppointments);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({
    name: "Himanshu Bhatt",
    email: "himanshu@gmail.com",
    goal: "Build a consistent wellbeing routine",
  });

  const toggleActivity = (id) => {
    setActivities((current) =>
      current.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    );
  };

  const addAppointment = (appointment) => {
    setAppointments((current) => [
      {
        ...appointment,
        id: Date.now(),
        status: "Upcoming",
      },
      ...current,
    ]);
  };

  const value = useMemo(
    () => ({
      activities,
      appointments,
      theme,
      user,
      toggleActivity,
      addAppointment,
      setTheme,
      setUser,
    }),
    [activities, appointments, theme, user],
  );

  return (
    <AppContext.Provider value={value}>
      <div data-theme={theme}>{children}</div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
