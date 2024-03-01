import { CategoryData } from "@/types/ToolData";
import toolsDataJson from "@/data/tools.json";

// 使用类型断言确保JSON数据符合CategoryData数组类型
// 调整类型断言来匹配JSON结构
export const toolsData: CategoryData[] = toolsDataJson.tools as CategoryData[];