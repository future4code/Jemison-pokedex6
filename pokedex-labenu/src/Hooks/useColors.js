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

import bugBG from '../Styles/img/backgrounds1/Bug_BG.png'
import darkBG from '../Styles/img/backgrounds1/Dark_BG.png'
import dragonBG from '../Styles/img/backgrounds1/Dragon_BG.png'
import electricBG from '../Styles/img/backgrounds1/Electric_BG.png'
import fairyBG from '../Styles/img/backgrounds1/Fairy_BG.png'
import fightingBG from '../Styles/img/backgrounds1/Fighting_BG.png'
import fireBG from '../Styles/img/backgrounds1/Fire_BG.png'
import flyingBG from '../Styles/img/backgrounds1/Flying_BG.png'
import ghostBG from '../Styles/img/backgrounds1/Ghost_BG.png'
import grassBG from '../Styles/img/backgrounds1/Grass_BG.png'
import groundBG from '../Styles/img/backgrounds1/Ground_BG.png'
import iceBG from '../Styles/img/backgrounds1/Ice_BG.png'
import normalBG from '../Styles/img/backgrounds1/Normal_BG.png'
import poisonBG from '../Styles/img/backgrounds1/Poison_BG.png'
import psychicBG from '../Styles/img/backgrounds1/Psychic_BG.png'
import rockBG from '../Styles/img/backgrounds1/Rock_BG.png'
import steelBG from '../Styles/img/backgrounds1/Steel_BG.png'
import waterBG from '../Styles/img/backgrounds1/Water_BG.png'

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
  const backgroundGradient = () => {
    switch (firstType) {
      case 'bug':
        return 'linear-gradient(124.43deg, #59993B 3.03%, #0E4819 59.71%, #061501 99.96%)'
      case 'dark':
        return 'linear-gradient(124.43deg, #606B74 3.03%, #17272C 59.71%, #010402 99.96%)'
      case 'dragon':
        return 'linear-gradient(124.43deg, #7895FC 3.03%, #246670 59.71%, #0A0B0B 99.96%)'
      case 'electric':
        return 'linear-gradient(124.43deg, #F4E2B6 3.03%, #CC971A 59.71%, #7B2003 99.96%)'
      case 'fairy':
        return 'linear-gradient(124.43deg, #F347F3 3.03%, #DC2A89 59.71%, #761962 99.96%)'
      case 'fighting':
        return 'linear-gradient(124.43deg, #FA7E56 3.03%, #B64C2A 59.71%, #67140E 99.96%)'
      case 'fire':
        return 'linear-gradient(124.43deg, #FF5C38 3.03%, #C52E24 59.71%, #692011 99.96%)'
      case 'flying':
        return 'linear-gradient(124.43deg, #B9DAF0 3.03%, #537B98 59.71%, #1A2227 99.96%)'
      case 'ghost':
        return 'linear-gradient(124.43deg, #886595 3.03%, #462F77 59.71%, #0C233F 99.96%)'
      case 'grass':
        return 'linear-gradient(124.43deg, #25C24E 3.03%, #147B3F 59.71%, #0B4724 99.96%)'
      case 'ground':
        return 'linear-gradient(124.43deg, #CE9527 3.03%, #8D5A1F 59.71%, #4E240C 99.96%)'
      case 'ice':
        return 'linear-gradient(124.43deg, #D2F4FF 3.03%, #51B5D6 59.71%, #237A97 99.96%)'
      case 'normal':
        return 'linear-gradient(124.43deg, #DAD3D5 3.03%, #565354 59.71%, #352C27 99.96%)'
      case 'poison':
        return 'linear-gradient(124.43deg, #BF8CFF 3.03%, #8B43A4 59.71%, #50197E 99.96%)'
      case 'psychic':
        return 'linear-gradient(124.43deg, #EA1369 3.03%, #A11243 59.71%, #4F070B 99.96%)'
      case 'rock':
        return 'linear-gradient(124.43deg, #EBA844 3.03%, #9A4D21 59.71%, #621400 99.96%)'
      case 'steel':
        return 'linear-gradient(124.43deg, #A7DCE3 3.03%, #59B6AB 59.71%, #29525B 99.96%)'
      case 'water':
        return 'linear-gradient(124.43deg, #52CAF0 3.03%, #2E5BC5 59.71%, #0D2458 99.96%)'
      default:
        break;
    }
  }
  const backgroundBorder = () => {
    switch (firstType) {
      case 'bug':
        return '#0E4819'
      case 'dark':
        return '#17272C'
      case 'dragon':
        return '#246670'
      case 'electric':
        return '#CC971A'
      case 'fairy':
        return '#DC2A89'
      case 'fighting':
        return '#B64C2A'
      case 'fire':
        return '#C52E24'
      case 'flying':
        return '#537B98'
      case 'ghost':
        return '#462F77'
      case 'grass':
        return '#147B3F'
      case 'ground':
        return '#8D5A1F'
      case 'ice':
        return '#51B5D6'
      case 'normal':
        return '#565354'
      case 'poison':
        return '#8B43A4'
      case 'psychic':
        return '#A11243'
      case 'rock':
        return '#9A4D21'
      case 'steel':
        return '#59B6AB'
      case 'water':
        return '#2E5BC5'
      default:
        break;
    }
  }

  return [pokemonType, pokemonType2, backgroundImage, backgroundGradient, backgroundBorder]
}