import React from 'react'
import {Link, Image} from './PixelLinkElements'

const PixelLink = ({img, href, color}) => {
  return (
    <>
      <Link href={href} color={color}>
        <Image src={img} ></Image>
      </Link>
    </>
  )
}

export default PixelLink