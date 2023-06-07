import style from './css/RoadmapTimeline.module.css'

type Props = {
  weeks: number
  title: string
  description: string
  squad: string
  images: string[]
}

const TimelineItem: React.FC<Props> = ({ weeks, title, description, squad, images }) => {
  return (
    <div className={style[`timeline_item_${weeks}`]}>
      <div className={style.timeline_item_content}>
        <div className={style.timeline_item_content_title}>
          {title}
        </div>
        <div className={style.timeline_item_content_desc}>
          {description}
        </div>
      </div>
      <div className={style.timeline_item_footer}>
        <div className={style.timeline_item_footer_squad}>
          {squad}
        </div>
        <div className={style.timeline_item_footer_images}>
          {images.map((image) => (
            <img key={image} src={image} alt="team member image" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem