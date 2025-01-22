import Features from "../component/features";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/img.jpg')" }}
        className="bg-cover bg-center h-[330px] opacity-80 w-full relative mt-[100px]"
      >
        <div className="absolute top-[60px] left-[50%] transform -translate-x-1/2">
          <Image
            className="w-[77px] h-[77px] top-[30px] left-[682px]"
            src="/logo.png"
            alt="logo"
            width={70}
            height={60}
          />
          <h1 className=" text-[48px] font-medium leading-[72px] text-5xl text-left top-0 ">
            Product Comparision
          </h1>
          <div className="w-[145px] h-[24px] flex flex-row gap-7 top-[295px] left-[680px] ">
            <span className="font-bold text-sm ">Home</span>
            <Image
              src="/arrow.png"
              alt="arrow"
              width={100}
              height={100}
              className=" w-[30px] h-[15px]  top-[150px] left-[37px] absolute "
            />
            <span className="font-bold text-sm text-black">Product </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="container mx-auto p-6 grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Go to Product page for more Products
            </h3>
            <Link
              href="#"
              className="text-sm text-gray-600 underline hover:text-gray-800"
            >
              View More
            </Link>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg shadow">
              <Image
                src="/sofa1.png"
                alt="Asgaard Sofa"
                className="w-full h-48 object-cover rounded-md"
                width={100}
                height={100}
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Asgaard Sofa
                </h4>
                <p className="text-sm text-gray-600">Rs. 250,000.00</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-sm">4.7</span>
                  <div className="flex ml-1 space-x-1">
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star-half-alt text-yellow-500"></i>
                  </div>
                  <p className="ml-2 text-xs text-gray-500">324 Reviews</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg shadow">
              <Image
                src="/sofa2.png"
                alt="Outdoor Sofa Set"
                className="w-full h-48 object-cover rounded-md"
                width={100}
                height={100}
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Outdoor Sofa Set
                </h4>
                <p className="text-sm text-gray-600">Rs. 224,000.00</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-sm">4.2</span>
                  <div className="flex ml-1 space-x-1">
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star-half-alt text-yellow-500"></i>
                    <i className="fas fa-star text-gray-300"></i>
                  </div>
                  <p className="ml-2 text-xs text-gray-500">145 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Add A Product
            </h3>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center justify-between w-full shadow hover:bg-yellow-600">
              Choose a Product
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 border border-gray-300">
          <div className="p-4 border-r flex flex-col gap-8 border-gray-300">
            <h3 className="font-semibold mb-4 text-lg">General</h3>
            <p>
              <strong>Sales Package:</strong>{" "}
            </p>
            <p>
              <strong>Model Number:</strong>{" "}
            </p>
            <p>
              <strong>Material:</strong>{" "}
            </p>
            <p>
              <strong>Configuration:</strong>{" "}
            </p>
            <p>
              <strong>Upholstery Material:</strong>{" "}
            </p>
            <p>
              <strong>Upholstery Color:</strong>{" "}
            </p>

            <h3 className="font-semibold mt-6 mb-4 text-lg">Product</h3>
            <p>
              <strong>Filling Material:</strong>{" "}
            </p>
            <p>
              <strong>Finish Type:</strong>{" "}
            </p>
            <p>
              <strong>Max Load:</strong>{" "}
            </p>
            <p>
              <strong>Origin:</strong>
            </p>

            <h3 className="font-semibold mt-6 mb-4 text-lg">Dimensions</h3>
            <p>
              <strong>Width:</strong>{" "}
            </p>
            <p>
              <strong>Height:</strong>{" "}
            </p>
            <p>
              <strong>Depth:</strong>
            </p>
            <p>
              <strong>Weight:</strong>{" "}
            </p>
          </div>

          <div className="p-4 border-r flex flex-col gap-8 border-gray-300">
            <h3 className="font-semibold mb-4 text-lg">General</h3>
            <p> 1 sectional sofa</p>
            <p> TSOFA12345</p>
            <p> Solid wood</p>
            <p>L-shaped</p>
            <p> Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>

            <h3 className="font-semibold mt-6 mb-4 text-lg">Product</h3>
            <p> Foam</p>
            <p> Matte</p>
            <p>350 KG</p>
            <p> India</p>
            <h3 className="font-semibold mt-6 mb-4 text-lg">Dimensions</h3>
            <p> 293.52 cm</p>
            <p> 70 cm</p>
            <p>167.67 cm</p>
            <p> 45.62 kg</p>
          </div>

          <div className="p-4">
            <h3 className="font-semibold  mb-4 text-lg">General</h3>
            <p>1 three-seater, 2 single seats</p>
            <p> DT123456</p>
            <p> Solid wood</p>
            <p>L-shaped</p>
            <p> Fabric + Cotton</p>
            <p> Bright Grey & Lion</p>
            <h3 className="font-semibold mt-6 mb-4 text-lg">Product</h3>
            <p> MAtte</p>
            <p> Grey/lion</p>
            <p>350 KG</p>
            <p> India</p>
            <h3 className="font-semibold mt-6 mb-4 text-lg">Dimensions</h3>
            <p> 293.52 cm</p>
            <p>70 cm</p>
            <p>167.67 cm</p>
            <p> 45.62 kg</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-gray-300 mt-4">
          <div className="p-4 border-r flex flex-col gap-8 border-gray-300">
            <h3 className="font-semibold mb-4 text-lg">Warranty</h3>
            <p>
              <strong>Warranty Summary:</strong>
            </p>
            <p>
              <strong>Warranty Service Type:</strong>{" "}
            </p>
            <p>
              <strong>Covered in Warranty:</strong>{" "}
            </p>
            <p>
              <strong>Not Covered:</strong>
            </p>
            <p>
              <strong>Domestic Warranty:</strong>{" "}
            </p>
          </div>

          <div className="p-4 border-r flex flex-col gap-8 border-gray-300">
            <h3 className="font-semibold mb-4 text-lg">Warranty</h3>
            <p> 1 Year Manufacturing Warranty</p>
            <p> For Warranty Claims or Issues, Email at support@example.com</p>
            <p> Warranty Against Manufacturing Defects</p>
            <p> Wear and Tear</p>
            <p> 1 Year</p>
            <button className="mt-8 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
              Add To Cart
            </button>
          </div>

          <div className="p-4 flex flex-col gap-8">
            <h3 className="font-semibold mb-4 text-lg">Warranty</h3>
            <p> 1 Year Manufacturing Warranty</p>
            <p> For Warranty Claims or Issues, Email at support@example.com</p>
            <p> Warranty Against Manufacturing Defects</p>
            <p> Wear and Tear</p>
            <p> 1 Year</p>
            <button className="mt-8 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <Features />
    </>
  );
}
