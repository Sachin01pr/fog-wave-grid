useEffect(() => {
  const interval = setInterval(() => setFrame(f => f + 1), 100);
  return () => clearInterval(interval);
}, []);