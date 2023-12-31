import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }

    const minusOne = () => {
        setCount(count - 1);
    }

    return [count, addOne, minusOne];
}