import React from 'react'
import { AboutContainer, AboutHeader, AboutWrapper, AboutContent, AboutBlock, Image, TextWrapper, TextHeader, Text } from './AboutElements'
import about_1 from '../../images/about_1.png'
import about_2 from '../../images/about_2.png'

const About = () => {
  return (
    <>
    <AboutContainer id='about'>
        <AboutHeader>
            ABOUT US
        </AboutHeader>
        <AboutWrapper>
            <AboutContent>
                <AboutBlock>
                    <Image src={about_1}/>
                    <TextWrapper>
                        <TextHeader>
                            Blockchain game
                        </TextHeader>
                        <Text>
                            Ponzi is a P2E game based on blockchain technology.
                            You can gather your friends, form a team, fight against others and earn money using only your skills.
                        </Text>
                    </TextWrapper>
                </AboutBlock>
                <AboutBlock>
                    <Image src={about_2}/>
                    <TextWrapper>
                        <TextHeader>
                            P2E
                        </TextHeader>
                        <Text>
                        Ponzi NFTs are ferocious monkeys who love to fight, build and hunt for treasure!<br/><br/>Collect the collection and use it in the ever-expanding game universe!  Ponzi uses an advanced technology called Blockchain to reward players for their participation.
                        </Text>
                    </TextWrapper>
                    
                </AboutBlock>
            </AboutContent>
        </AboutWrapper>
    </AboutContainer>
    </>
  )
}

export default About