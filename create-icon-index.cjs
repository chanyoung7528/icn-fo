const fs = require("fs");
const path = require("path");

// 각 폴더에 index.ts 파일 생성
function createIndexFiles(baseDir) {
  const createIndex = (dir) => {
    const items = fs.readdirSync(dir);
    const tsxFiles = [];
    const subDirs = [];

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        subDirs.push(item);
        createIndex(fullPath); // 재귀적으로 하위 디렉토리 처리
      } else if (item.endsWith(".tsx") && item !== "index.tsx") {
        const componentName = path.basename(item, ".tsx");
        tsxFiles.push(componentName);
      }
    }

    if (tsxFiles.length > 0 || subDirs.length > 0) {
      let indexContent = "";

      // TSX 파일들 export
      tsxFiles.forEach((componentName) => {
        indexContent += `export { default as ${componentName}Icon } from './${componentName}';\n`;
      });

      // 하위 디렉토리들 export
      subDirs.forEach((subDir) => {
        indexContent += `export * as ${subDir} from './${subDir}';\n`;
      });

      const indexPath = path.join(dir, "index.ts");
      fs.writeFileSync(indexPath, indexContent);
      console.log(`Created index.ts in ${dir}`);
    }
  };

  createIndex(baseDir);
}

// 실행
const iconDir = "./shared/assets/icon";
createIndexFiles(iconDir);

// 루트 아이콘 index.ts도 생성
const rootIndexContent = `// Icon exports
export * as category from './category';
export * as contents from './contents';
export * as cs from './cs';
export * as dashboard from './dashboard';
export * as direction from './direction';
export * as feedback from './feedback';
export * as form from './form';
export * as member from './member';
export * as menu from './menu';
export * as mypage from './mypage';
export * as setting from './setting';

// Root level icons
export { default as CautionIcon } from './Caution';
export { default as FileSearchIcon } from './FileSearch';
export { default as PadDelIcon } from './PadDel';
`;

fs.writeFileSync("./shared/assets/icon/index.ts", rootIndexContent);
console.log("Created root index.ts");
console.log("All index files created!");
