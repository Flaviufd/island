function generateIsland(islandSize) {
  if (islandSize < 1) {
    throw new Error("Island size must be at least 1.");
  }

  const island = [];

  for (let i = 0; i < islandSize; i++) {
    island.push([]);
    for (let j = 0; j < islandSize; j++) {
      //primul element
      if (i === 0 && j === 0) {
        island[i].push(Math.floor(Math.random() * 6));
        continue;
      }
      //prima linie
      if (i === 0 && j > 0) {
        const leftElement = island[0][j-1];
        const currentPosibility = [leftElement - 1, leftElement, leftElement + 1].filter((number) => number >= 0 && number <= 5);
        island[i].push(currentPosibility[Math.floor(Math.random() * currentPosibility.length)]);
        continue;
      }
      //prima coloana
      if (i > 0 && j === 0) {
        const upElement = island[i-1][0];
        const currentPosibility = [upElement - 1, upElement, upElement + 1].filter((number) => number >=0 && number <= 5);
        island[i].push(currentPosibility[Math.floor(Math.random() * currentPosibility.length)]);
        continue;
      }
      //restul insulei
      const upElement = island[i-1][j];
      const leftElement = island[i][j-1];

      const currentUpPosibility = [upElement - 1, upElement, upElement + 1].filter((number) => number >=0 && number <= 5);
      const currentLeftPosibility = [leftElement - 1, leftElement, leftElement + 1].filter((number) => number >=0 && number <= 5);

      const currentPosibility = currentUpPosibility.filter((element) => currentLeftPosibility.includes(element));

      island[i].push(currentPosibility[Math.floor(Math.random() * currentPosibility.length)]);
      continue;

    }
  }

  const hasZero = island.some(row => row.includes(0));
  const hasFive = island.some(row => row.includes(5));

  if (!hasZero || !hasFive) {
    return generateIsland(islandSize);
  }

  return island;
}

const islandSize = 5;
const newIsland = generateIsland(islandSize);

console.log(newIsland);