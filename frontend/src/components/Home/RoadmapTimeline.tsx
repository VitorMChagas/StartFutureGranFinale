import style from './css/RoadmapTimeline.module.css';
import TimelineItem from './TimelineItem';
import Swipe from '../../assets/images/swipe.svg';

type RoadmapType = {
  weeks: number
  title: string
  description: string
  squad: string
  images: string[]
}

const RoadmapTimeline: React.FC = () => {
  const design_team_roadmap: RoadmapType[] = [
    {
      weeks: 1,
      title: 'Onboarding',
      description: 'Introdução ao Start Future',
      squad: 'All squad',
      images: [
        "https://media.istockphoto.com/photos/smiling-and-relaxed-woman-picture-id1218066385?k=20&m=1218066385&s=612x612&w=0&h=9qQMc1iUBwA0L9EfOkS0G56ziW-3Wr_PM1yKaVLo-sM=",
        "https://s2.glbimg.com/7Xs692PWttum59e0PkdnElArM8k=/0x305:540x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/S/sTPA2HQkm1E8fSDPkwbg/luca.jpg",
        "https://s2.glbimg.com/d9Joki81F4U2gaZq2m3y4ExN_lI=/0x310:2000x1673/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/8/5eEPesR2Cv0KfUoDCLtA/agl2918-1.jpg"
      ]
    },
    {
      weeks: 1,
      title: 'Design Start',
      description: 'Alinhamento sobre as entregas',
      squad: 'Only designers',
      images: [
        "https://media.istockphoto.com/photos/smiling-and-relaxed-woman-picture-id1218066385?k=20&m=1218066385&s=612x612&w=0&h=9qQMc1iUBwA0L9EfOkS0G56ziW-3Wr_PM1yKaVLo-sM=",
        "https://s2.glbimg.com/7Xs692PWttum59e0PkdnElArM8k=/0x305:540x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/S/sTPA2HQkm1E8fSDPkwbg/luca.jpg",
        "https://s2.glbimg.com/d9Joki81F4U2gaZq2m3y4ExN_lI=/0x310:2000x1673/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/8/5eEPesR2Cv0KfUoDCLtA/agl2918-1.jpg"
      ]
    }
  ];
  const development_team_roadmap: RoadmapType[] = [
    {
      weeks: 1,
      title: 'Onboarding',
      description: 'Introdução ao Start Future',
      squad: 'All squad',
      images: [
        "https://media.istockphoto.com/photos/smiling-and-relaxed-woman-picture-id1218066385?k=20&m=1218066385&s=612x612&w=0&h=9qQMc1iUBwA0L9EfOkS0G56ziW-3Wr_PM1yKaVLo-sM=",
        "https://s2.glbimg.com/7Xs692PWttum59e0PkdnElArM8k=/0x305:540x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/S/sTPA2HQkm1E8fSDPkwbg/luca.jpg",
        "https://s2.glbimg.com/d9Joki81F4U2gaZq2m3y4ExN_lI=/0x310:2000x1673/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/8/5eEPesR2Cv0KfUoDCLtA/agl2918-1.jpg"
      ]
    },
    {
      weeks: 2,
      title: 'Develop Start',
      description: 'Alinhamento sobre as entregas + Github',
      squad: 'Only devs',
      images: [
        "https://media.istockphoto.com/photos/smiling-and-relaxed-woman-picture-id1218066385?k=20&m=1218066385&s=612x612&w=0&h=9qQMc1iUBwA0L9EfOkS0G56ziW-3Wr_PM1yKaVLo-sM=",
        "https://s2.glbimg.com/7Xs692PWttum59e0PkdnElArM8k=/0x305:540x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/S/sTPA2HQkm1E8fSDPkwbg/luca.jpg",
        "https://s2.glbimg.com/d9Joki81F4U2gaZq2m3y4ExN_lI=/0x310:2000x1673/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/8/5eEPesR2Cv0KfUoDCLtA/agl2918-1.jpg"
      ]
    }
  ];
  const manage_team_roadmap: RoadmapType[] = [
    {
      weeks: 1,
      title: 'Onboarding',
      description: 'Introdução ao Start Future',
      squad: 'All squad',
      images: [
        "https://media.istockphoto.com/photos/smiling-and-relaxed-woman-picture-id1218066385?k=20&m=1218066385&s=612x612&w=0&h=9qQMc1iUBwA0L9EfOkS0G56ziW-3Wr_PM1yKaVLo-sM=",
        "https://s2.glbimg.com/7Xs692PWttum59e0PkdnElArM8k=/0x305:540x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/S/sTPA2HQkm1E8fSDPkwbg/luca.jpg",
        "https://s2.glbimg.com/d9Joki81F4U2gaZq2m3y4ExN_lI=/0x310:2000x1673/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/8/5eEPesR2Cv0KfUoDCLtA/agl2918-1.jpg"
      ]
    },
    {
      weeks: 2,
      title: 'Manager Start',
      description: 'Alinhamento sobre as entregas + Notion',
      squad: 'Only managers',
      images: [
        "https://media.istockphoto.com/photos/smiling-and-relaxed-woman-picture-id1218066385?k=20&m=1218066385&s=612x612&w=0&h=9qQMc1iUBwA0L9EfOkS0G56ziW-3Wr_PM1yKaVLo-sM=",
        "https://s2.glbimg.com/7Xs692PWttum59e0PkdnElArM8k=/0x305:540x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/S/sTPA2HQkm1E8fSDPkwbg/luca.jpg",
        "https://s2.glbimg.com/d9Joki81F4U2gaZq2m3y4ExN_lI=/0x310:2000x1673/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/8/5eEPesR2Cv0KfUoDCLtA/agl2918-1.jpg"
      ]
    }
  ];

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>
          <h2 className={style.title}>
            E como funciona?
          </h2>
          <p className={style.desc}>Você irá trabalhar em equipe com profissionais de diversas áreas, acompanhe, evolua e se desenvolva.</p>
        </div>
        <div className={style.swipe}>
          <p>
            Arraste para ver<br />mais
          </p>
          <img src={Swipe} alt="swipe" />
        </div>
      </div>
      <div className={style.timeline}>
        <div className={style.row_week} />
        <div className={style.row}>
          <div className={style.team_name}>
            <h3 className={style.team_name_design}>Design team</h3>
          </div>
          {design_team_roadmap.map((item, index) => (
            <TimelineItem key={index} weeks={item.weeks} title={item.title} description={item.description} squad={item.squad} images={item.images} />
          ))}
        </div>
        <div className={style.row}>
          <div className={style.team_name}>
            <h3 className={style.team_name_dev}>Dev's team</h3>
          </div>
          {development_team_roadmap.map((item, index) => (
            <TimelineItem key={index} weeks={item.weeks} title={item.title} description={item.description} squad={item.squad} images={item.images} />
          ))}
        </div>
        <div className={style.row}>
          <div className={style.team_name}>
            <h3 className={style.team_name_manage}>Manage team</h3>
          </div>
          {manage_team_roadmap.map((item, index) => (
            <TimelineItem key={index} weeks={item.weeks} title={item.title} description={item.description} squad={item.squad} images={item.images} />
          ))}
        </div>
        <div className={style.week1} />
        <div className={style.week2} />
        <div className={style.week3} />
        <div className={style.week4} />
      </div>
    </div >
  )
}

export default RoadmapTimeline