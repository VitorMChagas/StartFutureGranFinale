import style from './css/Video.module.css'

const Video = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <div className={style.container}>
        <div className={style.video}>
          <iframe title='Vídeo de apresentação' className={style.iframe} src="https://www.youtube.com/embed/AnBqk1ejYbg" frameBorder="0" allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default Video;
