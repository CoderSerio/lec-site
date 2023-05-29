import { Button, Select } from '@arco-design/web-react';
import MonacoEditor from '@monaco-editor/react';
import { useState } from 'react';
import styles from '../index.module.css';
import { editorInitConfig, languages, themes } from './config';

function TopicEditor() {
  const [editorValue] = useState<string>('');
  const [editorLanguage, setEditorLanguage] = useState<string>(languages[0]);
  const [editorTheme, setEditorTheme] = useState<string>(themes[0]);

  return (
    <div className={styles['editor-wrapper']}>
      <div className={styles.header}>
        <div className={styles.selects}>
          <Select
            placeholder="选择语言"
            defaultValue={editorLanguage}
            onChange={(lan: string) => {
              setEditorLanguage(lan);
            }}
          >
            {languages.map((lan) => (
              <Select.Option key={lan} value={lan}>
                {lan}
              </Select.Option>
            ))}
          </Select>

          <Select
            placeholder="选择主题颜色"
            defaultValue={editorTheme}
            onChange={(the: string) => {
              setEditorTheme(the);
            }}
          >
            {themes.map((the) => (
              <Select.Option key={the} value={the}>
                {the}
              </Select.Option>
            ))}
          </Select>
        </div>

        <div>
          <Button type="primary">运行</Button>
        </div>
      </div>
      {/* <div ref={editorElRef} id="container" className={styles.editor}></div> */}
      <MonacoEditor
        loading={<div style={{ textAlign: 'center' }}>加载中...</div>}
        className={styles.editor}
        value={editorValue}
        path={editorLanguage}
        theme={editorTheme}
        language={editorLanguage}
        options={editorInitConfig}
      />
      {/* onChange={onChangeHandle} */}
      {/* beforeMount={handleEditorWillMount} */}
      {/* onMount={handleEditorDidMount} */}
    </div>
  );
}

export default TopicEditor;
