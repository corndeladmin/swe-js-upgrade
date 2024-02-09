const biggerStorage = {
  id: "bigger_storage",
  sortOrder: 10,
  name: "Bigger Storage",
  description: "Expand your inventory by 12 slots!",
  value: 120,
  applyUpgrade: (player, stats) => {
    stats.inventorySize += 12
  },
}

const evenBiggerStorage = {
  id: "even_bigger_storage",
  prerequisites: ["bigger_storage"],
  sortOrder: 10,
  name: "Even Bigger Storage",
  description: "Expand your inventory by 12 more slots!",
  value: 120,
  applyUpgrade: (player, stats) => {
    stats.inventorySize += 12
  },
}

const mineralCompression = {
  id: "mineral_compression",
  prerequisites: ["even_bigger_storage"],
  sortOrder: 20,
  name: "Mineral Compression",
  description: "Pack in more storage per storage! Doubles your storage",
  value: 400,
  applyUpgrade: (player, stats) => {
    stats.inventorySize *= 2
  },
}

const harderDrills = {
  id: "harder_drills",
  sortOrder: 10,
  value: 90,
  applyUpgrade: (player, stats) => {
    stats.mining.strength += 5
  },
}

const reinforcedChassis = {
  id: "reinforced_chassis",
  sortOrder: 10,
  name: "Reinforced Chassis",
  description:
    "Go deeper with a stronger chassis!\nYou can now go to a depth of 100ft",
  value: 600,
  applyUpgrade: (player, stats) => {
    stats.maxDepth = 100
  },
}

export const upgrades = [
  biggerStorage,
  evenBiggerStorage,
  mineralCompression,
  harderDrills,
  reinforcedChassis,
]
