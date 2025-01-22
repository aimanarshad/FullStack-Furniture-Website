import Image from "next/image";

export default function Example() {
  return (
    < >
      <div className="fixed top-0 right-0 m-4 bg-white shadow-lg rounded-lg p-4 w-80 z-50">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

        <div className="flex items-center justify-between mb-4">
          <Image
            src="/sofa5.jpg" // Ensure the image is in the public folder or use an external URL
            alt="Asgaard sofa"
            width={64} // Specify dimensions
            height={64}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div>
            <p className="text-sm font-semibold">Asgaard sofa</p>
            <p className="text-sm text-gray-500">1  Rs. 250,000.00</p>
          </div>
          <button className="text-xl text-gray-600 hover:text-gray-800">times</button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Image
            src="/sofa6.jpg" // Same note as above
            alt="Casaling Wood"
            width={64} // Specify dimensions
            height={64}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div>
            <p className="text-sm font-semibold">Casaling Wood</p>
            <p className="text-sm text-gray-500">1  Rs. 270,000.00</p>
          </div>
          <button className="text-xl text-gray-600 hover:text-gray-800">times</button>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="text-lg font-semibold text-right">
            Subtotal <span className="text-yellow-500">Rs 520,000.00</span>
          </p>
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
            Cart
          </button>
          <button className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
            Checkout
          </button>
        </div>

        <div className="mt-4 text-center">
          <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
            Comparison
          </button>
        </div>
      </div>
    </>
  );
}
