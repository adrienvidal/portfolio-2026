import { footer } from '../../data/content'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">{footer.left}</div>
    </footer>
  )
}
