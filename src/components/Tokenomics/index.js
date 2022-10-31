import React from 'react'
import { TokenomicsContainer, TokenomicsHeader, TokenomicsWrapper, TokenomicsBlock, Card, TokenomicsTextWrapper, TextHeader, Text } from './TokenomicsElements'

const Tokenomics = () => {
  return (
    <>
        <TokenomicsContainer id='tokenomics'>
            <TokenomicsHeader>TOKENOMICS</TokenomicsHeader>
            <TokenomicsWrapper>
                <TokenomicsBlock>
                    <Card color='#FFFD33' color_dark='#9D9C1B'>
                        TOKEN NAME<br/> PONZI
                    </Card>
                    <Card color='#FF42D5' color_dark='#99237F'>
                        PLATFORM<br/> ETHEREUM
                    </Card>
                    <Card color='#22CD51' color_dark='#0C6123'>
                        TOTAL SUPPLY <br/> 666,000,999
                    </Card>
                </TokenomicsBlock>
                <TokenomicsTextWrapper>
                    <TextHeader>
                        Fair tokenomics
                    </TextHeader>
                    <Text>
                        In order to build its Ponzi game metaverse for democracy off-Earth, Ponzi is a network based on fair tokenomics and launch, without pre-sales and development tokens.
                    </Text>
                </TokenomicsTextWrapper>
            </TokenomicsWrapper>
        </TokenomicsContainer>
    </>
  )
}

export default Tokenomics