import React from 'react'
import { GameplayContainer, GameplayHeader, GameplayContent, GameplayBlock, Image, TextWrapper, TextHeader, Text,  Button } from './GameplayElements'
import gameplay_1 from '../../images/gameplay_1.png'
import gameplay_2 from '../../images/gameplay_2.png'



const Gameplay = () => {
  return (
    <>
        <GameplayContainer id='gameplay'>
            <GameplayHeader>
                GAMEPLAY MODES
            </GameplayHeader>
            <GameplayContent>
                <GameplayBlock>
                    <Image src={gameplay_1}/>
                    <TextWrapper>
                      <TextHeader>
                      MEME PVP<br/>PONZI STONKS
                      </TextHeader>
                      <Text>
                        Ponzi Stonks is a meme investment simulator where you will be given a lifelong dream to find out how well you would do if you invested your money without suffering financial losses. The main feature of this mode is the use of real stocks and cryptocurrencies. So you will be playing with real data!
                      </Text>
                      <Button>
                        PLAY PONZI
                      </Button>
                    </TextWrapper>
                </GameplayBlock>
                <GameplayBlock>
                <Image src={gameplay_2}/>
                    <TextWrapper>
                      <TextHeader>
                        P2E<br/>Free to Play & Earn
                      </TextHeader>
                      <Text>
                        Fight in P2E multiplayer mode against real ponzi players.  The better your skills, the higher your ranking in the overall leaderboard.  Complete daily quests and earn PONZI rewards.
                      </Text>
                      <Button>
                        PLAY PONZI
                      </Button>
                    </TextWrapper>
                    
                </GameplayBlock>
            </GameplayContent>
        </GameplayContainer>
    </>
  )
}

export default Gameplay