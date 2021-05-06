import Constants from './constants';

const tokens = (tokenQty, goldQty) => [
    {
        id:1,
        gem: Constants.Gems.RED,
        qty: tokenQty
    },
    {
        id:2,
        gem: Constants.Gems.BLACK,
        qty: tokenQty
    },
    {
        id:3,
        gem: Constants.Gems.BLUE,
        qty: tokenQty
    },
    {
        id:4,
        gem: Constants.Gems.GREEN,
        qty: tokenQty
    },
    {
        id:5,
        gem: Constants.Gems.WHITE,
        qty: tokenQty
    },
    {
        id:6,
        gem: Constants.Gems.YELLOW,
        qty: goldQty
    }
]

export default tokens;