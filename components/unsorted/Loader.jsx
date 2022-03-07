export default function Page({ show }) {
    return show && <div className="loader"></div>
    // return show ? <div className="loader"></div> : null
}