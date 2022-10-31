import React from 'react'
import { HomeContainer, HomeContent, Links, Logo, PlayButton, Letter, Ponzi} from './HomeElements'
import PixelLink from '../PixelLink'
import github from '../../images/github.png'
import telegram from '../../images/telegram.png'
import twitter from '../../images/twitter.png'
import medium from '../../images/medium.png'
import etherscan from '../../images/etherscan.png'
import p from '../../images/p.png'
import o from '../../images/o.png'
import n from '../../images/n.png'
import z from '../../images/z.png'
import i from '../../images/i.png'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
            <Ponzi>
                <Logo>
                    <Letter src={p}></Letter>
                    <Letter src={o}></Letter>
                    <Letter src={n}></Letter>
                    <Letter src={z}></Letter>
                    <Letter src={i}></Letter>
                </Logo>
                <PlayButton>PLAY PONZI</PlayButton>
            </Ponzi>
            <Links>
                <PixelLink {...{img:telegram, href:'', color: '#127A00'}}/>
                <PixelLink {...{img:twitter, href:'', color: '#127A00'}}/>
                <PixelLink {...{img:etherscan, href:'', color: '#127A00'}}/>
                <PixelLink {...{img:github, href:'', color: '#127A00'}}/>
                <PixelLink {...{img:medium, href:'', color: '#127A00'}}/>
              </Links>
          
        </HomeContent>
      </HomeContainer>
    </>
  )
}

export default Home