import { Button, Select } from '@arco-design/web-react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import { useEffect, useRef } from 'react';
import styles from '../index.module.css';
import { editorInitConfig } from './config';

function TopicEditor() {
  const editorElRef = useRef(null);
  const editor = useRef<monaco.editor.IStandaloneCodeEditor>();
  useEffect(() => {
    // 避免重复创建
    if (!editor.current) {
      editor.current = monaco.editor.create(
        editorElRef.current as unknown as HTMLElement,
        editorInitConfig,
      );
    }
  }, []);

  return (
    <div className={styles['editor-wrapper']}>
      <div className={styles.header}>
        <div className={styles.selects}>
          <Select placeholder="选择语言"></Select>
          <Select placeholder="选择主题颜色"></Select>
        </div>
        <div>
          <Button type="primary">运行</Button>
        </div>
      </div>
      <div ref={editorElRef} id="container" className={styles.editor}></div>
    </div>
  );
}

export default TopicEditor;
