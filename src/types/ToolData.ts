// types/ToolData.ts

export type Tool = {
    category: string;
    title: string;
    is_free: boolean;
    image: string;
    description: string;
    href: string;
  };
  
  export type CategoryData = {
    category: string;
    data: Tool[];
  };
  