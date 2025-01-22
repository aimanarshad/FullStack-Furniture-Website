"use client"
import Image from "next/image"
import { useState } from "react";
import Link from 'next/link';
import Example from "../component/shopper"

export default function CardSlider(){
    const [quantity, setQuantity] = useState(1);

    return(
        <>
        <Example />
        <header className="bg-[#D9D9D9]">
        <div className="bg-[#D9D9D9] py-2 mt-[100px]">
  <div className="container ml-[100px] mx-auto gap-[15px] flex items-center">
    <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">Home</Link>
    <Image
              src="/arrow.png"
              alt="logo"
              width={30}
              height={30}
              className="leading-[41.45px] "
            />
    <span className="mx-2 text-gray-400"></span>
    <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">Shop</Link>
    <Image
              src="/arrow.png"
              alt="logo"
              width={30}
              height={30}
              className="leading-[41.45px] "
            />
    <span className="mx-2 text-gray-400"></span>
    <span className="text-gray-700 text-sm">Asgaard sofa</span>
  </div>
</div>

        </header>
        <main>
            <div className="flex bg-[#D9D9D9] gap-[60px]"> 
        <div className="w-[553px] h-[500px] top-[246px] left-[99px] flex ">
            <div className="w-[500px] h-[400px] top-[324px] left-[171px]">
            <Image
              src="/sofa4.png"
              alt="logo"
              width={481}
              height={500}
           
            />
            </div>
            <div className="w-[76px] h-[416px] top-[246px] left-[99px] flex flex-col ">
                <div className="w-[76px] h-[80px] top-[358px] left-[30px]">
                <Image
              src="/sofa4.png"
              alt="logo"
              width={100}
              height={100}
             
            />
                </div>
                <div className="w-[76px] h-[80px] top-[358px] left-[99px]">
                <Image
              src="/sofa1.png"
              alt="logo"
              width={100}
              height={100}
             
            />
                </div>
                <div className="w-[76px] h-[80px] top-[358px] left-[99px]">
                <Image
              src="/sofa3.png"
              alt="logo"
              width={100}
              height={100}
             
            />
                </div>
                <div className="w-[76px] h-[80px] top-[358px] left-[99px]">
                <Image
              src="/sofa2.png"
              alt="logo"
              width={100}
              height={100}
             
            />
                </div>
            </div>
        </div>
        <div className="flex bg-[#D9D9D9] justify-end mr-[200px p-6">
      <div className="w-96">
        <h1 className="text-2xl font-semibold">Asgaard sofa</h1>
        <p className="text-lg font-semibold text-gray-600 mt-2">Rs. 250000.00</p>

        <div className="flex items-center mt-4">
          <div className="flex text-yellow-500">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <span className="ml-2 text-sm text-gray-500">6 Customer Reviews</span>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Setting the bar as one of the loudest speakers in its class the
          Asgaard sofa is a compact stout-hearted hero with a well-balanced
          audio which boosts a clear midrange and extended highs for a sound.
        </p>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700">Size</p>
          <div className="flex space-x-2 mt-2">
            <span className="border rounded-full px-3 py-1 text-sm">L</span>
            <span className="border rounded-full px-3 py-1 text-sm">XL</span>
            <span className="border rounded-full px-3 py-1 text-sm">XS</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700">Color</p>
          <div className="flex space-x-2 mt-2">
            <span className="w-6 h-6 rounded-full bg-yellow-500 border"></span>
            <span className="w-6 h-6 rounded-full bg-purple-600 border"></span>
            <span className="w-6 h-6 rounded-full bg-gray-700 border"></span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-6">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 text-sm"
            >
              -
            </button>
            <span className="px-4 py-1 text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-sm"
            >
              +
            </button>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Add To Cart
          </button>
          <button className="border px-4 py-2 rounded-lg text-sm">
            + Compare
          </button>
        </div>

        <div className="mt-8 border-t pt-4 text-sm text-gray-600 space-y-2">
          <p>
            <span className="font-medium">SKU:</span> SS001
          </p>
          <p>
            <span className="font-medium">Category:</span> Sofas
          </p>
          <p>
            <span className="font-medium">Tags:</span> Sofa&apos; Chair&apos;Home&apos; Shop
          </p>
        </div>
      </div>
    </div>
    </div>
    <section className= "bg-[#D9D9D9] w-3/4 mx-auto p-6 shadow-lg rounded-lg mt-10">
  {/* Tabs Section */}
  <div className="flex bg-[#D9D9D9] justify-center mt-0 space-x-10 border-b border-gray-300 pb-4">
    <button className="font-semibold text-black border-b-2 border-black pb-2">
      Description
    </button>
    <button className="text-gray-500 hover:text-black">
      Additional Information
    </button>
    <button className="text-gray-500 hover:text-black">Reviews [5]</button>
  </div>

  {/* Description Content */}
  <div className="mt-4 bg-[#D9D9D9] text-gray-600 text-sm">
    <p>
      Embodying the raw wayward spirit of rock roll the Kilburn portable
      active stereo speaker takes the unmistakable look and sound of Marshall
      unplugs the chords and takes the show on the road.
    </p>
    <p className="mt-4">
      Weighing in under 7 pounds the Kilburn is a lightweight piece of vintage
      styled engineering. Setting the bar as one of the loudest speakers in its
      class the Kilburn is a compact stout-hearted hero with a well-balanced
      audio which boasts a clear midrange and extended highs for a sound that is
      both articulate and pronounced. The analogue knobs allow you to fine-tune
      the controls to your personal preferences while the guitar-influenced
      leather strap enables easy and stylish travel.
    </p>
  </div>

  {/* Images Section */}
  <div className="flex justify-between mt-6">
    <div className="w-1/2 bg-[#FF0F5] p-2">
      <Image
        src="/sofa3.png"
        alt="Sofa Image 1"
        width={30}
        height={30}
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-1/2 p-2">
      <Image
        src="/sofa3.png"
        alt="Sofa Image 2"
        width={30}
        height={30}
        className="rounded-lg shadow-md"
      />
    </div>
  </div>

</section>
 <section>
    <h1 className="text-[60px] text-center font-bolder text-balance">Related Goods</h1>
    <div className="w-[1200px] h-[446px] mt-[50px] gap-[32px]  flex flex-row">
            {/* b1 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={285}
                height={200}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i2.png"
                alt="logo"
                width={285}
                height={200}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={285}
                height={200}
                className="w-[300px] h-[446px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={285}
                height={200}
                className="w-[300px] h-[446px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
          </div>
 </section>
        </main>
        </>
    )
}


