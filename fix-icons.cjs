const fs = require("fs");
const path = require("path");

// 모든 TSX 파일 찾기
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }

  return files;
}

// TSX 파일 수정
function fixTsxFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // 잘못된 구문 수정
  content = content.replace(/width=\{props\.size"/g, "width={size}");
  content = content.replace(/height=\{props\.size"/g, "height={size}");
  content = content.replace(/fill=\{props\.fill"/g, "fill={fill}");
  content = content.replace(/<svg -if="[^"]*"/g, "");
  content = content.replace(/props\./g, "");

  // 기본 인터페이스와 props가 없는 경우 추가
  const filename = path.basename(filePath, ".tsx");
  const componentName = filename.charAt(0).toUpperCase() + filename.slice(1);

  if (!content.includes("interface") && !content.includes("Props")) {
    const propsInterface = `interface ${componentName}IconProps {
  size?: string;
  fill?: string;
}

`;
    const functionDeclaration = `export default function ${componentName}Icon({ size = "2.4rem", fill = "#222" }: ${componentName}IconProps) {`;

    content = content.replace(
      /export default function \w+Icon\(\) \{/,
      functionDeclaration,
    );
    content = propsInterface + content;
  }

  // JSX 문법 수정
  content = content.replace(/fill-rule/g, "fillRule");
  content = content.replace(/clip-rule/g, "clipRule");

  // 중복된 SVG 태그 정리
  const svgMatches = content.match(/<svg[^>]*>[\s\S]*?<\/svg>/g);
  if (svgMatches && svgMatches.length > 1) {
    // 첫 번째 SVG만 유지
    const firstSvg = svgMatches[0];
    content = content
      .replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, "")
      .replace(/  return \(\s*\);/, `  return (\n    ${firstSvg}\n  );`);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
}

// 실행
const iconDir = "./shared/assets/icon";
const tsxFiles = findTsxFiles(iconDir);

console.log(`Found ${tsxFiles.length} TSX files to fix...`);
tsxFiles.forEach(fixTsxFile);
console.log("Fix completed!");
