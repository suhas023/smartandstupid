import { useState } from "preact/hooks";

export const Button = () => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>my button {count}</button>
}