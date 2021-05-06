import sapphire from '../assets/gems/sapphire.png';
import emerald from '../assets/gems/emerald.png';
import ruby from '../assets/gems/ruby.png';
import diamond from '../assets/gems/diamond.png';
import onyx from '../assets/gems/onyx.png';
import gold from '../assets/gems/gold.png';

// return image to be used in different places
const GemImage = (props) => {
    switch (props.gem) {
        case "SAPPHIRE":
            return <img src={sapphire} />
            break;
        case "EMERALD":
            return <img src={emerald} />
            break;
        case "RUBY":
            return <img src={ruby} />
            break;
        case "DIAMOND":
            return <img src={diamond} />
            break;
        case "ONYX":
            return <img src={onyx} />
            break;
        case "GOLD":
            return <img src={gold} />
            break;
        default:
            return null
            break;
    }
}

export default GemImage;