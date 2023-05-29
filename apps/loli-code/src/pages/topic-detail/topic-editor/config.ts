// 当前支持的语言
export const languages = ['c', 'java', 'javascript'];

// 当前支持的样式主题
export const themes = ['vs-dark', 'light'];

// 编辑器本身的能力
export const editorInitConfig = {
  value: '// Hello Loli-Code!',
  language: 'javascript',
  theme: 'vs-dark',
  automaticLayout: true,
  folding: true, // 是否折叠
  foldingHighlight: true, // 折叠等高线
  // foldingStrategy: 'indentation', // 折叠方式  auto | indentation
  // showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
  disableLayerHinting: true, // 等宽优化
  emptySelectionClipboard: false, // 空选择剪切板
  selectionClipboard: false, // 选择剪切板
  codeLens: false, // 代码镜头
  scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
  colorDecorators: true, // 颜色装饰器
};
