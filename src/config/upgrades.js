const biggerStorage = {
  id: 'bigger_storage',
  sortOrder: 10,
  name: 'Bigger Storage',
  description: 'Expand your inventory by 12 slots!',
  value: 120,
  applyUpgrade: (player, stats) => {
    stats.inventorySize += 12
  }
}

const evenBiggerStorage = {
  id: 'even_bigger_storage',
  prerequisite: ['bigger_storage'],
  sortOrder: 10,
  name: 'Even Bigger Storage',
  description: 'Expand your inventory by 12 more slots!',
  value: 120,
  applyUpgrade: (player, stats) => {
    stats.inventorySize += 12
  }
}

const mineralCompression = {
  id: 'mineral_compression',
  prerequisite: ['even_bigger_storage'],
  sortOrder: 20,
  name: 'Mineral Compression',
  description: 'Pack in more storage per storage! Doubles your storage',
  value: 400,
  applyUpgrade: (player, stats) => {
    stats.inventorySize *= 2
  }
}

const harderDrills = {
  id: 'harder_drills',
  sortOrder: 10,
  value: 90,
  applyUpgrade: (player, stats) => {

  }
}

const reinforcedChassis = {
  id: 'reinforced_chassis',
  sortOrder: 10,
  name: 'Reinforced Chassis',
  description: 'Go deeper with a stronger chassis! You can now go to a depth of 100ft',
  value: 600,
  applyUpgrade: (player, stats) => {

  }
}

const upgrades = [
  biggerStorage,
  evenBiggerStorage,
  mineralCompression,
  harderDrills,
  grapplingHook,
]

export default upgrades
