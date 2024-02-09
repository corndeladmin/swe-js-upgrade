import { strict as assert } from 'node:assert';
import { isUpgradeAvailable, getAvailableUpgrades } from '../../../exercises/extension/exercise-extension.js';

describe('Exercise Extension', () => {
    describe('isUpgradeAvailable', () => {
        it('should return false if the player does not have the prerequisite upgrade', () => {
            const player = {
                upgrades: ['bigger_storage'],
            };
            const biggerStorage = {
                id: 'bigger_storage',
                prerequisite: ['even_bigger_storage'],
            };

            const result = isUpgradeAvailable(player, biggerStorage);

            assert.strictEqual(result, false);
        });

        it('should return false if the player already owns the upgrade', () => {
            const player = {
                upgrades: ['even_bigger_storage'],
            };
            const evenBiggerStorage = {
                id: 'even_bigger_storage',
                prerequisite: ['bigger_storage'],
            };

            const result = isUpgradeAvailable(player, evenBiggerStorage);

            assert.strictEqual(result, false);
        });

        it('should return true if the player has the prerequisite upgrade and does not own the upgrade', () => {
            const player = {
                upgrades: ['bigger_storage'],
            };
            const evenBiggerStorage = {
                id: 'even_bigger_storage',
                prerequisite: ['bigger_storage'],
            };

            const result = isUpgradeAvailable(player, evenBiggerStorage);

            assert.strictEqual(result, true);
        });
    });

    describe('getAvailableUpgrades', () => {
        it('should return the available upgrades for the player', () => {
            const biggerStorage = {
                id: 'bigger_storage',
                prerequisite: [],
            };

            const evenBiggerStorage = {
                id: 'even_bigger_storage',
                prerequisite: ['bigger_storage'],
            };

            const mineralCompression = {
                id: 'mineral_compression',
                prerequisite: ['even_bigger_storage'],
            };

            const harderDrills = {
                id: 'harder_drills',
                prerequisite: [],
            };

            const reinforcedChassis = {
                id: 'reinforced_chassis',
                prerequisite: [],
            };

            const player = {
                money: 100,
                depth: 0,
                inventory: [],
                upgrades: ['bigger_storage'],
            };

            const upgrades = [
                biggerStorage,
                evenBiggerStorage,
                mineralCompression,
                harderDrills,
                reinforcedChassis,
            ];

            const expectedUpgrades = [evenBiggerStorage, harderDrills, reinforcedChassis];

            const result = getAvailableUpgrades(player, upgrades);

            assert.deepStrictEqual(result, expectedUpgrades);
        });
    });
});
