# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrectly updating state within the effect's dependency array, leading to a continuous re-rendering cycle.

## Bug Description
The component `MyComponent` uses `useState` to manage a count. The `useEffect` hook is intended to reset the count to 0 when it exceeds 5. However, due to the way the state is updated, the effect is triggered repeatedly.  This causes an infinite loop.

## Solution
The solution involves restructuring the state update logic to prevent the infinite loop.  By using a conditional statement outside the effect, the state update only happens once when a certain condition is met, preventing the infinite render loop.