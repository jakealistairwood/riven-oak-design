function Footer() {
    return (
        <footer>
            <div className="m-10 bg-[#F9F9F9]">
                <div className="container mx-auto pt-16 pb-7">
                    <div className="flex justify-between">
                        <img className="max-w-[224px] w-full h-fit" src="/images/footer-logo.png" alt="" />
                        <div className="flex gap-[140px]">
                            <nav>
                                <ul>
                                    <li className="mb-7 font-semibold">Site</li>
                                    <li className="mb-4"><a href="/">Home</a></li>
                                    <li className="mb-4"><a href="/about">About</a></li>
                                    <li className="mb-4"><a href="/gallery">Gallery</a></li>
                                    <li className="mb-4"><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li className="mb-7 font-semibold">Products</li>
                                    <li className="mb-4"><a href="">Gates</a></li>
                                    <li className="mb-4"><a href="">Swing Seats</a></li>
                                    <li className="mb-4"><a href="">Fences</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li className="mb-7 font-semibold">Social</li>
                                    <li className="mb-4"><a href="mailto:jack@rivenoakdesign.com">jack@rivenoakdesign.com</a></li>
                                    <li className="mb-4"><a href="tel:+447929795959">+44 7929 795959</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="pt-7 border-t border-solid border-[#E4E4E4] mt-14 flex justify-between items-center w-full">
                        <small>&copy; 2023, Riven Oak Design. All rights reserved.</small>
                        <div className="flex items-center gap-[10px]">
                            <a href="#" className="h-[45px] w-[45px] rounded-full bg-white flex items-center justify-center">
                                <img src="/images/x.svg" alt="X" />
                            </a>
                            <a href="#" className="h-[45px] w-[45px] rounded-full bg-white flex items-center justify-center">
                                <img src="/images/instagram.svg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;