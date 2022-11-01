import React from 'react'
import PixelLink from '../PixelLink'
import { FooterContainer, FooterWrapper, RulesWrapper, RulesHeader, Rules, PrivacyPolicy, Rights, LinksWrapper, Links, Email, GoldImage } from './FooterElements'
import github from '../../images/github.png'
import telegram from '../../images/telegram.png'
import twitter from '../../images/twitter.png'
import medium from '../../images/medium.png'
import etherscan from '../../images/etherscan.png'
import {LINKS, EMAIL_ADDRESS} from '../config'
import gold from '../../images/gold.png'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            
            <FooterWrapper>
                <RulesWrapper>
                    <RulesHeader>Rules</RulesHeader>
                    <Rules>
                    1. No bullying<br/>2. No flooding<br/>3. No spam
                    </Rules>
                    <PrivacyPolicy to='/terms'>Privacy policy</PrivacyPolicy>
                </RulesWrapper>
                <Rights>
                    © {new Date().getFullYear()}<br/>Ponzi – all rights<br/>Reserved
                </Rights>
                <LinksWrapper>
                    <Links>
                        <PixelLink {...{img:telegram, href:LINKS.TELEGRAM, color: '#ffffff'}}/>
                        <PixelLink {...{img:twitter, href:LINKS.TWITTER, color: '#ffffff'}}/>
                        <PixelLink {...{img:etherscan, href:LINKS.ETHERSCAN, color: '#ffffff'}}/>
                        <PixelLink {...{img:github, href:LINKS.GITHUB, color: '#ffffff'}}/>
                        <PixelLink {...{img:medium, href:LINKS.MEDIUM, color: '#ffffff'}}/>
                    </Links>
                    <Email>
                        Email: {EMAIL_ADDRESS}
                    </Email>
                </LinksWrapper>
            
            </FooterWrapper>
            <GoldImage src={gold}/>
        </FooterContainer>
    </>
  )
}

export default Footer