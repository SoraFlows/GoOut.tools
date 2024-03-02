
import os
import requests
import json
from urllib.parse import unquote, urlparse

# 检测文件夹是否存在，不存在则创建
def check_folder(folder_path:str):
    """
    检查文件夹是否存在，不存在则创建。
    
    参数:
    - folder_path: 文件夹路径
    """
    import os
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
        print(f"文件夹已创建：{folder_path}")
    else:
        print(f"文件夹已存在：{folder_path}")

def decoded_url(url:str)->str:
    """
    解码URL。
    
    参数:
    - url: URL地址
    """
    return unquote(url)

def get_git_commit(repo_owner:str, repo_name:str,path:str):
    """
    # 构建API URL来获取文件的提交历史数据
    """
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/commits?path={path}"
    # 发送请求
    response = requests.get(url)
    data = response.json()
    return data

def get_git_update_time(repo_owner:str, repo_name:str,path:str):
    from datetime import datetime
    # 获取最新的提交信息
    commit_data = get_git_commit(repo_owner=repo_owner, repo_name=repo_name,path=path)
    latest_commit = commit_data[0]
    commit_date = latest_commit['commit']['committer']['date']
    # 转换为更友好的格式
    formatted_date = datetime.strptime(commit_date, '%Y-%m-%dT%H:%M:%SZ').strftime('%Y-%m-%d %H:%M:%S')
    print("README文件的最后更新时间是:", formatted_date)
    return formatted_date

def get_readme(repo_owner:str, repo_name:str)->str:
    download_url_1 = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents/"
    response1 = requests.get(download_url_1)
    contents = response1.json()
    for content in contents:
        if content["type"] == "file" and content["name"].lower() == "readme.md":
            download_url_2 = content["download_url"]
            response2 = requests.get(download_url_2)
            markdown_content = response2.text
            return markdown_content
    return None

def decode_and_download_image(encoded_url:str, save_path:str):
    """
    下载图片并保存到指定路径。
    
    参数:
    - image_url: 图片的URL地址
    - save_path: 图片保存到本地的路径
    """
    try:
        # 发送GET请求
        # 解码URL
        decoded_url = unquote(encoded_url)
        response = requests.get(decoded_url, stream=True)
        
        # 检查请求是否成功
        if response.status_code == 200:
            # 打开一个文件用于写入二进制模式
            with open(save_path, 'wb') as file:
                # 写入图片数据
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            print(f"图片已下载到：{save_path}")
        else:
            print(f"下载失败，HTTP状态码：{response.status_code}")
    except Exception as e:
        print(f"下载过程中发生错误：{e}")

def extract_domain(url:str)->str:
    """
    从URL中提取域名。
    
    参数:
    - url: URL地址
    """
    try:
        parsed_url = urlparse(url)
        return parsed_url.netloc
    except Exception as e:
        print(f"Error parsing URL: {e}")
        return ""  # 返回一个空字符串或适当的错误处理

def save_json(data:dict, save_path:str):
    """
    保存数据到JSON文件。
    
    参数:
    - data: 要保存的数据
    - save_path: JSON文件保存到本地的路径
    """
    with open(save_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)
    print(f"数据已保存到：{save_path}")