import React from 'react'
import PixelLink from '../PixelLink'
import { FooterContainer, FooterWrapper, RulesWrapper, RulesHeader, Rules, PrivacyPolicy, Rights, LinksWrapper, Links, Email } from './FooterElements'
import github from '../../images/github.png'
import telegram from '../../images/telegram.png'
import twitter from '../../images/twitter.png'
import medium from '../../images/medium.png'
import etherscan from '../../images/etherscan.png'

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
                        <PixelLink {...{img:telegram, href:'', color: '#ffffff'}}/>
                        <PixelLink {...{img:twitter, href:'', color: '#ffffff'}}/>
                        <PixelLink {...{img:etherscan, href:'', color: '#ffffff'}}/>
                        <PixelLink {...{img:github, href:'', color: '#ffffff'}}/>
                        <PixelLink {...{img:medium, href:'', color: '#ffffff'}}/>
                    </Links>
                    <Email>
                        Email: ponzi@ponzi.is 
                    </Email>
                </LinksWrapper>
                
            </FooterWrapper>
        </FooterContainer>
    </>
  )
}

export default Footer