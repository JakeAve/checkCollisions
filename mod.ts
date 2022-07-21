interface Results {
  [key: string]: true;
}

export const checkCollisions = (
  callback: () => string | number,
  iterations: number
) => {
  const results: Results = {};
  let collisions = 0;
  for (let i = 0; i < iterations; i++) {
    const r = callback();
    if (results[r]) collisions += 1;
    results[r] = true;
  }
  return { collisions, iterations };
};
