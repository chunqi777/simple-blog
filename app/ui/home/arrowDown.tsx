'use client'


export default function ArrowDown() {
    const arrowClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    return (
        <div className="arrow" onClick={arrowClick}>
            <svg data-slot="icon" fill="none" strokeWidth="2.3" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
            </svg>
        </div>
    )
}