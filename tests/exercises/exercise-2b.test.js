import { strict as assert } from 'node:assert';
import { getAffordableUpgrades } from '../../exercises/exercise-2b.js';

describe('getAffordableUpgrades', () => {
    it('should return an array of affordable upgrades', () => {
        const player = {
            money: 100,
        };
        const upgrades = [
            {
                id: 'rocket_boots',
                value: 50,
            },
            {
                id: 'diamond_pickaxe',
                value: 100,
            },
            {
                id: 'quantum_drive',
                value: 200,
            },
        ];
        const expectedUpgrades = ['rocket_boots', 'diamond_pickaxe'];

        const affordableUpgrades = getAffordableUpgrades(player, upgrades);

        assert.deepStrictEqual(affordableUpgrades, expectedUpgrades);
    });
});
