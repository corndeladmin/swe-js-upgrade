import { strict as assert } from 'node:assert';
import { isUpgradeAvailable, getAvailableUpgrades } from '../../../exercises/extension/exercise-extension.js';

describe('Exercise Extension', () => {
    describe('isUpgradeAvailable', () => {
        it('should return false if the player does not have the prerequisite upgrade', () => {
            const player = {
                upgrades: ['bigger_storage'],
            };

            const result = isUpgradeAvailable(player, biggerStorage);

            assert.strictEqual(result, false);
        });

        it('should return false if the player already owns the upgrade', () => {
            const player = {
                upgrades: ['even_bigger_storage'],
            };

            const result = isUpgradeAvailable(player, evenBiggerStorage);

            assert.strictEqual(result, false);
        });

        it('should return true if the player has the prerequisite upgrade and does not own the upgrade', () => {
            const player = {
                upgrades: ['bigger_storage'],
            };

            const result = isUpgradeAvailable(player, evenBiggerStorage);

            assert.strictEqual(result, true);
        });
    });

    describe('getAvailableUpgrades', () => {
        it('should return the available upgrades for the player', () => {
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
