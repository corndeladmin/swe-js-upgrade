const minerals = [
  {
    id: 'copper',
    displayName: 'copper ore',
    value: 24,
    distribution: {
      minDepth: 10,
      maxDepth: 60,
      abundance: 10,
    },
    hardness: 5,
  },
  {
    id: 'tin',
    displayName: 'tin ore',
    value: 50,
    distribution: {
      minDepth: 40,
      maxDepth: 80,
      abundance: 5,
    },
    hardness: 5,
  },
  {
    id: 'iron',
    displayName: 'iron ore',
    value: 60,
    distribution: {
      minDepth: 60,
      maxDepth: 100,
      abundance: 4,
    },
    hardness: 10,
  },
  {
    id: 'coal',
    displayName: 'coal',
    value: 100,
    distribution: {
      minDepth: 70,
      maxDepth: 200,
      abundance: 6,
    },
    hardness: 15,
  }
]

export default minerals
