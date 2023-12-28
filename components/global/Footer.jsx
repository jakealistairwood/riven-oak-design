"use client";

import { clientConfig } from "@/sanity/config/client-config";
import { createClient, groq } from "next-sanity";

async function fetchFooterData() {
    const data = await createClient(clientConfig).fetch(
        groq`*[_type == "global_options"] {
            footer{
              contact_info{
                email_address,
                phone_number,
              },
              social_icons[]{
                url,
                icon{
                  asset->
                }
              }
            }
        }`
    )
    return data[0];
}

async function Footer() {
    const data = await fetchFooterData();
    const { footer } = data;

    return (
        <footer>
            <div className="m-10 bg-[#F9F9F9]">
                <div className="container mx-auto pt-16 pb-7">
                    <div className="flex flex-wrap justify-between">
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
                                    <li className="mb-4"><a href={`mailto:${footer?.contact_info?.email_address}`}>{footer?.contact_info?.email_address}</a></li>
                                    <li className="mb-4"><a href={`tel:${footer?.contact_info?.phone_number.replace(/\s/g, '')}`}>{footer?.contact_info?.phone_number}</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="pt-7 border-t border-solid border-[#E4E4E4] mt-14 flex justify-between items-center w-full">
                        <small className="text-[#727272]">&copy; 2023, Riven Oak Design. All rights reserved.</small>
                        <div className="flex items-center gap-[10px]">
                            {footer?.social_icons?.map((icon, index) => (
                                <a key={`social-icon-${index}`} href={icon?.url} className="h-[45px] w-[45px] rounded-full bg-white flex items-center justify-center">
                                    <img src={icon?.icon?.asset?.url} alt="social icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;