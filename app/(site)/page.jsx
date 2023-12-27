import { clientConfig } from '@/sanity/config/client-config';
import Image from 'next/image'
import { getPage } from '@/sanity-utils'
import Masthead from '@/components/elements/Masthead';
import { createClient, groq } from "next-sanity";
import ImageCarousel from '@/components/elements/ImageCarousel';
import ScrollableImage from '@/components/elements/ScrollableImage';
import OurProducts from '@/components/elements/OurProducts';
import Homepage from '@/components/pages/Homepage';

async function fetchHomepageData() {
  const data = await createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == "/"][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      homepage{
        masthead{
          heading,
          description,
          image{
            asset->
          }
        },
        scrollable_image{
          heading,
          description,
          gallery[] {
            image
          }
        },
        image_swiper{
          heading,
          description,
          gallery[] {
            image{
              asset->
            },
            content
          }
        },
        our_products{
          heading,
          description,
          products[]{
            content{
              title,
              description,
            },
            image{
              asset->
            }
          }
        }
      }
    }`,
  )
  return data;
}

export default async function Home() {
  const data = await fetchHomepageData();

  const { homepage } = data;

  return (
    <main className="min-h-screen">
        <Homepage homepage={homepage} />
    </main>
  )
}
