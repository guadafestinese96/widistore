import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

export default function Layout({ children }) {
    return (
        <div className="divLayout">
            <Header/>
            <div className="children">
                {children}
            </div>
            <Footer />
        </div>
    )
}