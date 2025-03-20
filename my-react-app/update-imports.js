import fs from 'fs';
import path from 'path';

const mainFilePath = path.join(process.cwd(), 'src/main.tsx');
const oldImport = './styles/index.css';
const newImport = './styles/index.scss';

// 读取文件并替换导入路径
fs.readFile(mainFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    
    console.log('Original content of main.js:', data);  // 打印原始内容
    const result = data.replace(oldImport, newImport);
    
    console.log('Attempting to replace:', oldImport);
    console.log('Result after replacement:', result);
    
    // 确保这里的 result 不为空且包含替换内容
    if (result === data) {
      console.log('No changes made to main.js');
    } else {
      fs.writeFile(mainFilePath, result, 'utf8', (err) => {
        if (err) throw err;
        console.log('Updated imports in main.js');
      });
    }
  });