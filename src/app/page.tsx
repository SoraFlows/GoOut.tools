"use client";
import Image from "next/image";
// pages/index.tsx

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from "@/components/Sidebar/Sidebar";
import { toolsData } from "@/data/toolsData";
import ContentArea from "@/components/ContentArea/ContentArea";
import { Header } from "@/components/Header/Header";
import TopDownButton from "@/components/TopDownButton";

export default function Home() {
  // 设置初始活跃分类，这里我们默认设置为数组的第一个分类的名称
  const [activeCategory, setActiveCategory] = useState(toolsData[0].category);

  // 更新活跃分类的方法
  // 使用明确的索引签名初始化 categoryRefs
  const categoryRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    toolsData.reduce((acc, category) => {
      acc[category.category] = React.createRef();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement> }) // 明确指定初始值类型
  );

  const handleCategoryClick = (category: string) => {
    const categoryData = toolsData.find((data) => data.category === category);
    setActiveCategory(category);
    const ref = categoryRefs.current[category];
    if (ref.current){
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
    <main className="min-h-screen bg-background font-sans antialiased">
      <script>

      </script>

        {/* 传递 categories, activeCategory 和 onCategoryClick 给 Sidebar */}
        <div className="container relative ma-auto min-h-screen w-full px-0">
          <div className="flex">
            <div className="flex z-20 hidden min-h-screen w-{16rem} transition-all duration-300 ease-in-out sm:block">
              <Sidebar
                categories={toolsData}
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
              />

            </div>
            <div className="sm:pl-[16em]">
              <Header></Header>
              {/* 传递 categories 和 activeCategory 给 ContentArea */}
              <ContentArea
                categories={toolsData}
                categoryRefs={categoryRefs}
              />
            </div>
          </div>
      </div>
      {/* 两个 Button 组件 */}
      <TopDownButton /> {/* 在这里使用组件 */}
    </main>

    </>
  );
}
