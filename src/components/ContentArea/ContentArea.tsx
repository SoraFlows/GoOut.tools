import React from 'react';
import { CategoryData } from '@/types/ToolData';
import CategoryBlock from '@/components/ContentArea/CategoryBlock';

const ContentArea: React.FC<{
    categories: CategoryData[];
    categoryRefs: React.RefObject<{ [key: string]: React.RefObject<HTMLDivElement> }>;
}> = ({ categories, categoryRefs }) => {
    return (
        <>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-10">
            <h2 className='mb-2 text-2xl font-bold text-primary/80 sm:text-3xl text-center'>
            Go Out出海第一步，搞定工具库
            </h2>
            <h3 className="mb-2 text-1xl font-bold text-primary/80 sm:text-2xl text-left px-10 py-5">
            独立开发者出海技术栈和工具, 收集的一些有用的出海工具和资源，可以帮助你更好地了解和进入海外市场。
                </h3>
                <h4 className="mb-2 py-5 text-md text-gray-700 px-5">
                    <ul className="list-disc pl-5">
                        <li>帮助独立开发者提升开发效率</li>
                        <li>帮助独立开发者降低成本</li>
                        <li>市场上足够流行</li>
                    </ul>
                </h4>
        </div>
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
        </>
    );
};

export default ContentArea;
