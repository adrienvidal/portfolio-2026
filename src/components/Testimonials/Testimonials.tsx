import TestimonialCard from './TestimonialCard'
import './Testimonials.scss'

const items = [
  {
    quote:
      'Adrien a fait partie de mon équipe front pendant presque 3 ans chez Chanel, dans un environnement SAP Hybris avec React et Sass. Il est intervenu sur des sujets run 100% front, en prenant en charge des projets de A à Z, dans un contexte exigeant, avec des contraintes fortes de pixel perfect et de performance. Les livraisons ont toujours été réalisées dans les délais, avec un bon niveau de qualité. Je vous recommande Adrien pour une collaboration fiable et efficace 🤝🏼',
    name: 'Marine BENOIT-JANNIN (DELBECK) ',
    role: 'Lead développeur front-end CHANEL'
  },
  {
    quote:
      "Je suis ravi de recommander Adrien pour son travail en tant que développeur front. Pendant plus d'un an et demi, Adrien a travaillé sur des sujets autour de sites web à fort trafic, où il a montré une expertise impressionnante en matière de développement. Adrien est un développeur qui a le souci du détail et qui s'engage à fournir un travail de qualité. Il est également très communicatif et travaille très bien en équipe, ce qui en fait un atout précieux pour tout projet. Je suis convaincu qu'Adrien continuera d'exceller dans ce qu'il entreprendra et je recommande vivement ses compétences et son expertise à tous ceux qui cherchent un développeur front de haut niveau.",
    name: 'Quentin Vuong ',
    role: 'Business Manager Globalis'
  },
  {
    quote:
      'Adrien est une personne avec qui il est très facile de travailler. Il est en effet rare de trouver un développeur flexible, toujours à l’écoute et qui comprend les enjeux business. Il s’est rapidement intégré à l’équipe et a apporté de le sérénité à des projets compliqués.',
    name: 'Aurélia Baudelaire',
    role: 'Global Marketplaces Manager Yves Rocher'
  }
]

export default function Testimonials() {
  return (
    <div className='section-bg'>
      <div className='section-bg-inner'>
        <h2 className='section-title'>Ils m&apos;ont fait confiance</h2>
        <p className='section-sub'>
          Des équipes marketing, e-commerce et médias avec qui j&apos;ai travaillé.
        </p>
        <div className='testi-grid'>
          {items.map(t => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </div>
  )
}
