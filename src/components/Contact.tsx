'use client'
import React from 'react'
import Image from 'next/image'
import {siteConfig} from '@/config/site'

const Contact: React.FC = () => {
    return (
        <>
            <div className='my-4'>
                <h2 className='text-primary/80 mb-2 py-2 text-2xl font-bold sm:text-3xl'>
                    联系我
                </h2>
                <div className='items-center space-x-4'>
                    <p className='px-2 py-2 text-xl'>
                        欢迎关注康哥的公众号,持续更新AI开发、产品商业化日常~
                        <Image
                            className='rounded-lg px-2 py-2 '
                            src={siteConfig.official_image}
                            alt='GoOut.tools 联系我'
                            width={400}
                            height={300}></Image>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact
