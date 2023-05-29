import { Footer, Navbar } from "../components"
import loading from '../assets/loading.gif'

export default function LoadingPage() {
    return (
        <>
            <Navbar />
            <div className="text-center w-full mx-auto">
                <img src={loading} style={{ padding: '180px 0', width: '200px', margin: '0 auto' }} />
            </div>
            <Footer />
        </>
    )
}

