// types/ToolData.ts

export type Tool = {
    name: string;
    is_free: boolean;
    image: string;
    description: string;
    link: string;
  };
  
  export type CategoryData = {
    category: string;
    data: Tool[];
  };
  