import style from './css/IDE.module.css';
import CodeMirror from '@uiw/react-codemirror'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { html } from '@codemirror/lang-html'
import MacButtons from '../../assets/images/mac-buttons.svg'
import { useEffect, useState } from 'react';

const IDE: React.FC = () => {
  const [code, setCode] = useState(`<!-- Tente você mesmo alterando o código daqui -->
<h2>Conheça mais sobre programação</h2>
<p>Com uma equipe multidisciplinar</p>



`);
  const [srcDoc, setSrcDoc] = useState('')

  const handleChange = (value: string) => {
    setCode(value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          </head>
          <body>${code}</body>
          <style>h2 {color: #782DD4; font-weight: 'bold'} body { padding: 50px 40px 0}</style>
          <script></script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [code]);

  return (
    <div className={style.background}>
      <div className={style.wrapper}>
        <div className={style.iframe_frame}>
          <div className={style.iframe_header}>
            <img src={MacButtons} alt="" />
            <div>https://www.startfuture.com.br</div>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
        <div className={style.editor_frame}>
          <div className={style.editor_header}>
            <img src={MacButtons} alt="" />
          </div>
          <CodeMirror
            value={code}
            onChange={handleChange}
            className={style.editor}
            height="100%"
            theme={okaidia}
            extensions={[html()]}
            style={{ overflowX: 'unset' }}
          />
        </div>
      </div>
    </div>
  )
}

export default IDE