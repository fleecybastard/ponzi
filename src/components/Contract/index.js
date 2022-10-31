import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {FaCopy} from 'react-icons/fa'
import { ContractContainer, ContractHeader, ContractWrapper, ContractAddress, Text, CopyButton, ContractDetails, Column1, Column2, Cards, Card, Image } from './ContractElements'
import globe from '../../images/globe.png'
import {ShakeSlow} from 'reshake'

const Contract = () => {
  return (
    <>
    <ContractContainer>
        <ContractHeader>
            CONTRACT
        </ContractHeader>
        <ContractWrapper>
            
            <ContractAddress>
                <Text>
                0x654f8C82217d4a5d0Ad37B4D8bf1130Dfdf52eb9
                </Text>
                <CopyToClipboard text='0x654f8C82217d4a5d0Ad37B4D8bf1130Dfdf52eb9'>
                    <CopyButton><FaCopy/></CopyButton>
                </CopyToClipboard>
            </ContractAddress>
            
            
            <ContractDetails>
                <Cards>
                    <Column1>
                        <Card color='#FF42D5'>TAX 5%</Card>
                        <Card color='#FEF938'>NO PRESALE</Card>
                        <Card color='#BDE9FF'>NO DEV TOKENS </Card>
                    </Column1>
                    <Column2>
                        <Card color='#25CC52'>WHITEPAPER</Card>
                        <Card color='#947536'>AUDITED & KYC</Card>
                    </Column2>
                </Cards>
                <ShakeSlow>
                    <Image src={globe}/>
                </ShakeSlow>
            </ContractDetails>
        </ContractWrapper>
    </ContractContainer>
    </>
  )
}

export default Contract