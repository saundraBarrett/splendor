import Constants from './constants';

const nobles = [
    {
        id: 1,
        victoryPoints: 3,
        imageCode: "CAT_MEDICI",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 }]
    },
    {
        id: 2,
        victoryPoints: 3,
        imageCode: "ELI_AUSTRIA",
        cost: [{ gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 3 }]
    },
    {
        id: 3,
        victoryPoints: 3,
        imageCode: "ISA_CASTILE",
        cost: [{ gem: Constants.Gems.BLACK, qty: 4 },
            { gem: Constants.Gems.WHITE, qty: 4 }]
    },
    {
        id: 4,
        victoryPoints: 3,
        imageCode: "NIC_MACHIA",
        cost: [{ gem: Constants.Gems.BLUE, qty: 4 },
            { gem: Constants.Gems.WHITE, qty: 4 }]
    },
    {
        id: 5,
        victoryPoints: 3,
        imageCode: "SUL_MAGNI",
        cost: [{ gem: Constants.Gems.BLUE, qty: 4 },
            { gem: Constants.Gems.GREEN, qty: 4 }]
    },
    {
        id: 6,
        victoryPoints: 3,
        imageCode: "ANN_BRITAN",
        cost: [{ gem: Constants.Gems.GREEN, qty: 3 },
            { gem: Constants.Gems.BLUE, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 3 }]
    },
    {
        id: 7,
        victoryPoints: 3,
        imageCode: "CHARLES_V",
        cost: [{ gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 },
            { gem: Constants.Gems.WHITE, qty: 3 }]
    },
    {
        id: 8,
        victoryPoints: 3,
        imageCode: "FRAN_FRANCE",
        cost: [{ gem: Constants.Gems.BLACK, qty: 3 },
            { gem: Constants.Gems.RED, qty: 3 },
            { gem: Constants.Gems.GREEN, qty: 3 }]
    },
    {
        id: 9,
        victoryPoints: 3,
        imageCode: "HENRY_VIII",
        cost: [{ gem: Constants.Gems.BLACK, qty: 4 },
            { gem: Constants.Gems.RED, qty: 4 }]
    },
    {
        id: 10,
        victoryPoints: 3,
        imageCode: "MARY_STUART",
        cost: [{ gem: Constants.Gems.GREEN, qty: 4 },
            { gem: Constants.Gems.RED, qty: 4 }]
    }
];

export default nobles;