import { useEffect, useState } from "react";

export default function useMockFetch(data, delay = 450) {
  const [state, setState] = useState({
    loading: true,
    error: "",
    data: null
  });

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (!active) return;
      try {
        setState({ loading: false, error: "", data });
      } catch {
        setState({
          loading: false,
          error: "Unable to load data. Please try again.",
          data: null
        });
      }
    }, delay);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [data, delay]);

  return state;
}
