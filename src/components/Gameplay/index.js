import React from 'react'
import { GameplayContainer, GameplayHeader, GameplayContent, GameplayBlock, GameplayDiv1, GameplayDiv2, Image1, Image2, TextWrapper1, TextWrapper2, TextHeader, Text,  Button, TextInnerWrapper1, TextInnerWrapper2 } from './GameplayElements'
import gameplay_1 from '../../images/gameplay_1.png'
import gameplay_2 from '../../images/gameplay_2.png'
import {LINKS} from '../config'


const Gameplay = () => {
  return (
    <>
        <GameplayContainer id='gameplay'>
            <GameplayHeader>
                GAMEPLAY MODES
            </GameplayHeader>
            <GameplayContent>
              <GameplayBlock>
                <GameplayDiv1>
                <Image1 image={gameplay_1} id='image-1' />
                    <TextWrapper1 id='text-1'>
                      <TextInnerWrapper1>
                        <TextHeader>
                        MEME PVP<br/>PONZI STONKS
                        </TextHeader>
                        <Text>
                          Ponzi Stonks is a meme investment simulator where you will be given a lifelong dream to find out how well you would do if you invested your money without suffering financial losses. The main feature of this mode is the use of real stocks and cryptocurrencies. So you will be playing with real data!
                        </Text>
                        <Button href={LINKS.PONZI_GAME}>
                          PLAY PONZI
                        </Button>
                      </TextInnerWrapper1>
                      
                    </TextWrapper1>
                </GameplayDiv1>
                <GameplayDiv2>
                    <TextWrapper2 id='text-2'>
                      <TextInnerWrapper2>
                        <TextHeader>
                          P2E<br/>Free to Play & Earn
                        </TextHeader>
                        <Text>
                          Fight in P2E multiplayer mode against real ponzi players.  The better your skills, the higher your ranking in the overall leaderboard.  Complete daily quests and earn PONZI rewards.
                        </Text>
                        <Button href={LINKS.PONZI_GAME}>
                          PLAY PONZI
                        </Button>
                      </TextInnerWrapper2>
                    </TextWrapper2>
                    <Image2 image={gameplay_2} id='image-2'></Image2>
                </GameplayDiv2>  
                    
                    
              </GameplayBlock>
            </GameplayContent>
        </GameplayContainer>
    </>
  )
}

export default Gameplay