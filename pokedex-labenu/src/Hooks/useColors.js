import bug from '../Styles/img/icons/Bug_icon.png'
import dark from '../Styles/img/icons/Dark_icon.png'
import dragon from '../Styles/img/icons/Dragon_icon.png'
import electric from '../Styles/img/icons/Electric_icon.png'
import fairy from '../Styles/img/icons/Fairy_icon.png'
import fighting from '../Styles/img/icons/Fighting_icon.png'
import fire from '../Styles/img/icons/Fire_icon.png'
import flying from '../Styles/img/icons/Flying_icon.png'
import ghost from '../Styles/img/icons/Ghost_icon.png'
import grass from '../Styles/img/icons/Grass_Icon.png'
import ground from '../Styles/img/icons/Ground_icon.png'
import ice from '../Styles/img/icons/Ice_icon.png'
import normal from '../Styles/img/icons/Normal_icon.png'
import poison from '../Styles/img/icons/Poison_Icon.png'
import psychic from '../Styles/img/icons/Psychic_icon.png'
import rock from '../Styles/img/icons/Rock_icon.png'
import steel from '../Styles/img/icons/Steel_icon.png'
import water from '../Styles/img/icons/Water_icon.png'

import bugBG from '../Styles/img/backgrounds/Bug_BG.png'
import darkBG from '../Styles/img/backgrounds/Dark_BG.png'
import dragonBG from '../Styles/img/backgrounds/Dragon_BG.png'
import electricBG from '../Styles/img/backgrounds/Electric_BG.png'
import fairyBG from '../Styles/img/backgrounds/Fairy_BG.png'
import fightingBG from '../Styles/img/backgrounds/Fighting_BG.png'
import fireBG from '../Styles/img/backgrounds/Fire_BG.png'
import flyingBG from '../Styles/img/backgrounds/Flying_BG.png'
import ghostBG from '../Styles/img/backgrounds/Ghost_BG.png'
import grassBG from '../Styles/img/backgrounds/Grass_BG.png'
import groundBG from '../Styles/img/backgrounds/Ground_BG.png'
import iceBG from '../Styles/img/backgrounds/Ice_BG.png'
import normalBG from '../Styles/img/backgrounds/Normal_BG.png'
import poisonBG from '../Styles/img/backgrounds/Poison_BG.png'
import psychicBG from '../Styles/img/backgrounds/Psychic_BG.png'
import rockBG from '../Styles/img/backgrounds/Rock_BG.png'
import steelBG from '../Styles/img/backgrounds/Steel_BG.png'
import waterBG from '../Styles/img/backgrounds/Water_BG.png'

export const useColors = (firstType, secondType) => {

  const pokemonType = () => {
    switch (firstType) {
      case 'bug':
        return bug
      case 'dark':
        return dark
      case 'dragon':
        return dragon
      case 'electric':
        return electric
      case 'fairy':
        return fairy
      case 'fighting':
        return fighting
      case 'fire':
        return fire
      case 'flying':
        return flying
      case 'ghost':
        return ghost
      case 'grass':
        return grass
      case 'ground':
        return ground
      case 'ice':
        return ice
      case 'normal':
        return normal
      case 'poison':
        return poison
      case 'psychic':
        return psychic
      case 'rock':
        return rock
      case 'steel':
        return steel
      case 'water':
        return water
      default:
        break;
    }
  }

  const pokemonType2 = () => {
    switch (secondType) {
      case 'bug':
        return bug
      case 'dark':
        return dark
      case 'dragon':
        return dragon
      case 'electric':
        return electric
      case 'fairy':
        return fairy
      case 'fighting':
        return fighting
      case 'fire':
        return fire
      case 'flying':
        return flying
      case 'ghost':
        return ghost
      case 'grass':
        return grass
      case 'ground':
        return ground
      case 'ice':
        return ice
      case 'normal':
        return normal
      case 'poison':
        return poison
      case 'psychic':
        return psychic
      case 'rock':
        return rock
      case 'steel':
        return steel
      case 'water':
        return water
      default:
        break;
    }
  }

  const backgroundImage = () => {
    switch (firstType) {
      case 'bug':
        return bugBG
      case 'dark':
        return darkBG
      case 'dragon':
        return dragonBG
      case 'electric':
        return electricBG
      case 'fairy':
        return fairyBG
      case 'fighting':
        return fightingBG
      case 'fire':
        return fireBG
      case 'flying':
        return flyingBG
      case 'ghost':
        return ghostBG
      case 'grass':
        return grassBG
      case 'ground':
        return groundBG
      case 'ice':
        return iceBG
      case 'normal':
        return normalBG
      case 'poison':
        return poisonBG
      case 'psychic':
        return psychicBG
      case 'rock':
        return rockBG
      case 'steel':
        return steelBG
      case 'water':
        return waterBG
      default:
        break;
    }
  }

  return [pokemonType, pokemonType2, backgroundImage]
}