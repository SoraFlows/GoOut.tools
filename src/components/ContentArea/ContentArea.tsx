import React from 'react';
import { CategoryData } from '@/types/ToolData';
import CategoryBlock from '@/components/ContentArea/CategoryBlock';

const ContentArea: React.FC<{
    categories: CategoryData[];
    categoryRefs: React.RefObject<{ [key: string]: React.RefObject<HTMLDivElement> }>;
}> = ({ categories, categoryRefs }) => {
    return (
        <div className='w-full pb-96 pt-4'>
            <div id="main" className='mx-auto w-full px-4 md:px-6'>
                {categories.map((categoryData) => (
                // 使用 '!' 断言 categoryRefs.current 非空
                <div ref={categoryRefs.current![categoryData.category]} key={categoryData.category} className='mb-12'> 
                    <CategoryBlock categoryData={categoryData} />
                </div>
            ))}
            </div>
            
            </div>
    );
};

export default ContentArea;
