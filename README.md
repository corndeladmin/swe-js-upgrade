# Upgrade, upgrade, upgrade!

Welcome to the hit new game, _Upgrade, upgrade, upgrade!_

In this game, you play a mining robot. Mine minerals, sell them at the surface, and use the money to upgrade your robot. The more you upgrade, the more you can mine, and the more you can mine, the more you can upgrade!

## Getting started

1. Make sure you have `node`, `npm`, and `git` installed on your computer.
2. Clone this repository so you have it locally.
3. Run `npm install` to install the game's dependencies.

## Deep dive

### Basic Objects

1. Read the docs on [objects as key value stores]().
2. Complete Exercise 1a.
3. Complete Exercise 1b.

### Lists of objects

1. Read the docs on [lists of objects]().
2. Complete Exercise 2a.
3. Complete Exercise 2b.

### Object nesting

1. Read the docs on [object nesting]().
2. Complete Exercise 3.

### Reduce

1. Read the docs on [reduce]().
2. Complete Exercise 4.

## Workshop and hackathon

You've been tasked to make the game more fun to play by adding your own minerals and upgrades to the game, and by improving the console output.

### Suggestions for improvements

#### Add a new mineral

Data about minerals are stored in `./src/config/minerals.js`. 

As an example, you could add a mineral that appears on the surface, but doesn't have much value.

Or maybe you can add a mineral that's deep underground and hard to mine, but is worth a lot of money. You'll need to add a new upgrade to the game to mine it, though!

#### Add a new upgrade

Data about upgrades are stored in `./src/config/upgrades.js`.

An upgrade could increase your mining strength so you can mine harder minerals, it could let you go deeper so you can find rarer and more valuable minerals, or it could let you carry more minerals back to the surface.

Maybe you can do something really fancy, and add an upgrade that kicks in when certain conditions are met - like a faster drill that increases the number of mining cycles per action but only works in the depths of the mine, or a lucky charm that increases your chance to find minerals as long as there's still space in your backpack.

#### Make the cli output prettier

The console output for the various commands is stored in `./src/cli/game.js`.

Right now, the game's output is pretty ugly, with its minimal tables and lack of flavour text. You could make it much more readable and fun to play!

Maybe you can add some ASCII art to the game, or some fun messages when you find a mineral or upgrade your robot.

### Here be dragons

The game's logic and actions are stored in `./src/engine/engine.js`. There's also a bit of application set-up in `./src/app.js`. You won't need to touch or understand these files!

We encourage you to have a look _after_ you've finished making your improvements.