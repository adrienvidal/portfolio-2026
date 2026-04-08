import { Link } from 'react-router-dom'
import { footer } from '../../data/content'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">{footer.left}</div>
      <div className="footer__right">
        <Link to="/lab">Lab →</Link>
      </div>
    </footer>
  )
}
