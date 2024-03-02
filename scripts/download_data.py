import requests
from bs4 import BeautifulSoup
import re
import sys
sys.path.append('./')
from scripts.utils import check_folder,decode_and_download_image, decoded_url, extract_domain,save_json

# 目标网页URL
url = 'https://chuhai.tools/'
save_image_path = './public/images/'
save_json_path = './src/data/tools.json'

check_folder(save_image_path)


# 发送HTTP请求获取网页内容
response = requests.get(url)
html_content = response.text

# 解析HTML内容
soup = BeautifulSoup(html_content, 'html.parser')
# 初始化一个空列表来存储提取的数据
structured_data = []
# 使用正则表达式找到ID为数字的div标签
divs_with_numeric_id = soup.find_all('div', id=re.compile(r'^\d+$'))

# 查找所有<a>标签并提取href属性
category_num = 0
tool_num = 0
for div in divs_with_numeric_id:
    # 对于每个找到的div，提取<a>标签
    category = div.find('h2').text if div.find('h2') else '无标题'
    category_data = []
    links = div.find_all('a', target="_blank")
    for link in links:
        # 获取每个<a>标签内的信息
        title = link.find('h3').text if link.find('h3') else '无标题'
        href= link['href'] if link['href'] else '无链接'
        description = link.find('h4').text if link.find('h4') else '无描述'
        # image_src = link.find('img')['src'] if link.find('img') else '无图片'
        url = extract_domain(decoded_url(href))
        image_src = 'https://icon.horse/icon/' + url
        # decode_and_download_image(image_src, save_image_path + image_src.split('/')[-1])
        if '免费' in title or '免费' in description:
            is_free = True
        elif "付费" in title or "paid" in title or "付费" in description or "paid" in description:
            is_free = False
        else :
            is_free = None
        data = {
            'category': category,
            "href": href,
            'title': title,
            "is_free": is_free,
            'description': description,
            'image': image_src
        }
        category_data.append(data)
        tool_num+=1
    structured_data.append({
                            "category": category,
                            "data": category_data
                            })
    category_num+=1
save_data = {
    'tools': structured_data
}
save_json(save_data, save_json_path)
print(f"一共有{category_num}类别")
print(f"一共有{tool_num}个工具")

# # 将数据写入到excel
# import pandas as pd
# df = pd.DataFrame(structured_data)
# df.to_excel('./src/data/aitools.xlsx', index=False)
# print("Data exported to aitools.xlsx")