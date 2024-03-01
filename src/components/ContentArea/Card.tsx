import React from 'react';
import { Tool } from '@/types/ToolData'; // 假设你有这样一个类型定义
import Image from 'next/image';
type CardProps = Tool;

const Card: React.FC<CardProps> = ({ name, is_free, image, description, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" 
        className="relative mb-6 flex min-h-[122px] min-w-0 cursor-pointer 
        flex-col break-words rounded-lg border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 
        hover:scale-105 hover:bg-border hover:shadow-lg  xl:mb-0">
            <div className="flex items-center">
                <div className="mr-3 flex size-10 overflow-hidden rounded-full">
                    <Image src={image} alt={name} 
                    loading='lazy' width={40} height={40} 
                    decoding='async' data-nimg="1"
                    className='object-fill'
                    />
                    
                </div>
                
                <h3 className="text-xl font-bold text-primary">{name}</h3>
                
            </div>
            <div className='flex mt-1 justify-center space-x-4'>
            <span className={`text-xs font-bold mt-1 px-1 py-1 rounded ${is_free ? 'bg-green-200' : 'bg-red-200'}`}>
                {is_free ? '免费' : '付费'}
                 </span>
            <h4 className="mt-2 line-clamp-3 text-sm text-primary">{description}</h4>
            </div>
            
        </a>
    );
};

export default Card;