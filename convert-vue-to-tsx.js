const fs = require("fs");
const path = require("path");

// Vue 파일을 TSX로 변환하는 함수
function convertVueToTsx(vuePath) {
  const content = fs.readFileSync(vuePath, "utf8");

  // 파일명에서 확장자를 제거하고 첫 글자를 대문자로
  const filename = path.basename(vuePath, ".vue");
  const componentName = filename.charAt(0).toUpperCase() + filename.slice(1);

  // props 추출
  const propsMatch = content.match(/defineProps\(\{([^}]+)\}\)/s);
  let propsInterface = "";
  let defaultProps = "";

  if (propsMatch) {
    const propsContent = propsMatch[1];

    // size와 fill은 기본으로 있다고 가정
    const hasSize = propsContent.includes("size:");
    const hasFill = propsContent.includes("fill:");
    const hasType = propsContent.includes("type:");

    let interfaceProps = [];
    let defaults = [];

    if (hasSize) {
      interfaceProps.push("  size?: string;");
      defaults.push('size = "2.4rem"');
    }
    if (hasFill) {
      interfaceProps.push("  fill?: string;");
      defaults.push('fill = "#222"');
    }
    if (hasType) {
      interfaceProps.push("  type?: 'regular' | 'bold';");
      defaults.push('type = "regular"');
    }

    propsInterface = `interface ${componentName}IconProps {\n${interfaceProps.join("\n")}\n}`;
    defaultProps = `{ ${defaults.join(", ")} }: ${componentName}IconProps`;
  }

  // 템플릿 추출 및 변환
  const templateMatch = content.match(/<template>(.*?)<\/template>/s);
  let jsxContent = "";

  if (templateMatch) {
    jsxContent = templateMatch[1]
      .trim()
      // Vue 바인딩을 JSX로 변환
      .replace(/:(\w+)="/g, "$1={")
      .replace(/"/g, "}")
      .replace(/}/g, '"')
      .replace(/(\w+)=\{([^}]+)\}"/g, "$1={$2}")
      // kebab-case를 camelCase로 변환
      .replace(/fill-rule/g, "fillRule")
      .replace(/clip-rule/g, "clipRule")
      // v-if를 조건부 렌더링으로 변환
      .replace(/v-if="([^"]+)"/g, "")
      .replace(/v-else/g, "")
      // 자체 닫는 태그 수정
      .replace(/<(\w+)([^>]*?)\/>/g, "<$1$2 />")
      // 템플릿 정리
      .replace(/\n\s*\n/g, "\n")
      .trim();
  }

  // 조건부 렌더링 처리
  const hasConditionalRender = content.includes("v-if=");
  let finalJsxContent;

  if (hasConditionalRender && content.includes("type")) {
    // type에 따른 조건부 렌더링
    const boldSvgMatch = content.match(
      /<svg v-if="type === 'bold'"[^>]*>(.*?)<\/svg>/s,
    );
    const regularSvgMatch = content.match(/<svg v-else[^>]*>(.*?)<\/svg>/s);

    if (boldSvgMatch && regularSvgMatch) {
      let boldSvg = boldSvgMatch[0]
        .replace(/v-if="[^"]*"/, "")
        .replace(/:(\w+)="/g, "$1={")
        .replace(/"/g, "}")
        .replace(/}/g, '"')
        .replace(/(\w+)=\{([^}]+)\}"/g, "$1={$2}");
      let regularSvg = regularSvgMatch[0]
        .replace(/v-else/, "")
        .replace(/:(\w+)="/g, "$1={")
        .replace(/"/g, "}")
        .replace(/}/g, '"')
        .replace(/(\w+)=\{([^}]+)\}"/g, "$1={$2}");

      // SVG 속성 수정
      boldSvg = boldSvg
        .replace(/fill-rule/g, "fillRule")
        .replace(/clip-rule/g, "clipRule");
      regularSvg = regularSvg
        .replace(/fill-rule/g, "fillRule")
        .replace(/clip-rule/g, "clipRule");

      finalJsxContent = `  if (type === 'bold') {
    return (
      ${boldSvg}
    );
  }

  return (
    ${regularSvg}
  );`;
    } else {
      finalJsxContent = `  return (\n    ${jsxContent}\n  );`;
    }
  } else {
    finalJsxContent = `  return (\n    ${jsxContent}\n  );`;
  }

  // 최종 TSX 파일 내용 생성
  const tsxContent = `${propsInterface ? propsInterface + "\n\n" : ""}export default function ${componentName}Icon(${defaultProps || ""}) {
${finalJsxContent}
}`;

  // TSX 파일 경로 생성
  const tsxPath = vuePath.replace(".vue", ".tsx");

  // TSX 파일 작성
  fs.writeFileSync(tsxPath, tsxContent);

  // Vue 파일 삭제
  fs.unlinkSync(vuePath);

  console.log(`Converted: ${vuePath} -> ${tsxPath}`);
}

// 모든 Vue 파일 찾기
function findVueFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findVueFiles(fullPath));
    } else if (item.endsWith(".vue")) {
      files.push(fullPath);
    }
  }

  return files;
}

// 변환 실행
const iconDir = "./shared/assets/icon";
const vueFiles = findVueFiles(iconDir);

console.log(`Found ${vueFiles.length} Vue files to convert...`);

vueFiles.forEach(convertVueToTsx);

console.log("Conversion completed!");
