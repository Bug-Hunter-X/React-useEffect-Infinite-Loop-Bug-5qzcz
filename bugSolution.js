```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here
  }, []); //Empty dependency array to run only once

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    if (count > 5) {
      setCount(0);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```