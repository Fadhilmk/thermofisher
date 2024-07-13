
// "use client"
// // Inside your ProductDetailPage component or where you want to display the specifications

// import React, { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../../firebase';
// import Navbar from '@/components/NavBar';
// import '../../../components/style.css';

// export default function ProductDetailPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [showAllSpecifications, setShowAllSpecifications] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         if (!productId) return;

//         const docRef = doc(db, 'products', 'allproducts', 'all-products', productId);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setProduct(docSnap.data());
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleModal = () => {
//     setShowModal(!showModal);
//   };

//   const toggleSpecifications = () => {
//     setShowAllSpecifications(!showAllSpecifications);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl font-semibold">Loading...</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl font-semibold">Product not found.</div>
//       </div>
//     );
//   }

//   // Prepare specifications to display
//   const specificationsToShow = showAllSpecifications
//     ? Object.entries(productSpecifications)
//     : Object.entries(productSpecifications).slice(0, 5);

//   return (
//     <div>
//       <Navbar />
//       <div className={`container mx-auto px-4 py-8 bg-white text-black ${showModal ? 'blur-sm' : ''}`}>
//         <div className="flex flex-col md:flex-row items-center md:items-start">
//           <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
//             <img 
//               src={product.image} 
//               alt={product.name}
//               width={300} 
//               height={300} 
//               className="rounded"
//             />
//           </div>
//           <div className="w-full md:w-1/2 md:pl-8">
//             <h1 className="text-xl font-semibold mb-4">{product.name}</h1>
           
//             <p className="text-xl font-semibold mb-4">Catalog Number: {product.catNumber}</p>
//             <p className="text-gray-700">{product.desc}</p>
//             <button
//               className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md mt-4"
//               onClick={handleModal}
//             >
//               Request a Quote
//             </button>
//           </div>
//         </div>

//         {/* Product Partial Specification Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Product Full Specifications</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {specificationsToShow.map(([specification, details]) => (
//                   <TableRow key={specification} label={specification} value={details} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {!showAllSpecifications && (
//             <div className="mt-4">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 onClick={toggleSpecifications}
//               >
//                 Show More
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div id='form-response' className="bg-white rounded shadow-lg max-w-md">
//             <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Contact" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">Product Model Number</label>
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="model" type="text" value={product.catNumber} readOnly />
//               </div>
//               <div className="flex items-center justify-between">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                   Submit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="button"
//                   onClick={handleModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function TableRow({ label, value }) {
//   return (
//     <tr>
//       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{label}</td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
//     </tr>
//   );
// }

// const productSpecifications = {
//   "Applications": "Non-destructive method to test the purity and chemistry of precious metals",
//   "Data Memory": "64MB internal system memory/ 128MB internal user storage",
//   "Data Storage": "Internal >10,000 readings with spectra",
//   "Data Transfer": "USB",
//   "Description": "Niton DXL Precious Metal Analyzer",
//   "Detector Type": "High-performance Si-PIN semiconductor",
//   "Display Type": "Color touch-screen display",
//   "Item Description": "Niton DXL Precious Metal Analyzer",
//   "Height (English)": "10.4 in.",
//   "Height (Metric)": "265 mm",
//   "Length (English)": "15.6 in.",
//   "Length (Metric)": "396 mm",
//   "Width (English)": "8.1 in.",
//   "Width (Metric)": "206 mm",
//   "Length (English) Chamber": "6.9 in.",
//   "Length (Metric) Chamber": "172 mm",
//   "Height (English) Chamber": "5.2 in.",
//   "Height (Metric) Chamber": "133 mm",
//   "Width (English) Chamber": "7.2 in.",
//   "Width (Metric) Chamber": "184 mm",
//   "Optional Accessories": "3mm small-spot focus feature; Additional battery pack; External battery charger; Locking shielded carrying case",
//   "Power Consumption": "80μA",
//   "Security Features": "Password-protected user security",
//   "Standard Accessories": "One 7.2V 4-cell lithium-ion battery pack (charges in the instrument while on external power); 110/220V AC adapter; USB PC connection cable; Thermo Scientific™ Niton Data Transfer (NDT™) PC software; 8mm measurement area; Internal CCD camera for precise sample positioning; Adhesive Tack for stabilization of samples; Spare puncture-resistant x-ray windows",
//   "Tube Type": "Ag anode 45kV maximum, 80µA maximum",
//   "Tube Voltage": "45 kV",
//   "Weight (English)": "17 lb.",
//   "Weight (Metric)": "7.7 kg",
//   "Voltage": "45 kV",
//   "System Electronics": "400MHz ARM 11 CPU; 300MHz dedicated DSP; 80MHz ASICS DSP for signal processing; 4096 channel MCA;",
//   "Data Entry": "Touch-screen keyboard, user-programmable pick lists",
//   "Licensing": "Varies by region. Contact your local distributor.",
//   "Dimensions (L x W x H)": "15.6 x 8.1 x 10.4 in. (396 x 206 x 265 mm)",
//   "Certifications/Compliance": "CE, RoHS",
//   "Unit Size": "Each"
// };


"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase";
import Navbar from "@/components/NavBar";
import "../../../components/style.css";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showAllSpecifications, setShowAllSpecifications] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return;

        const docRef = doc(db, "products", "allproducts", "all-products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSpecifications = () => {
    setShowAllSpecifications(!showAllSpecifications);
  };

  const handleDownloadPdf = async () => {
    if (!product || !product.pdfUrl) {
      console.error("PDF URL not found for product.");
      return;
    }

    try {
      console.log("PDF URL:", product.pdfUrl);
      const pdfRef = ref(storage, product.pdfUrl);
      const url = await getDownloadURL(pdfRef);

      console.log("Download URL:", url);

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${product.name}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Product not found.</div>
      </div>
    );
  }

  // Prepare specifications to display
  const specificationsToShow = showAllSpecifications
    ? Object.entries(productSpecifications)
    : Object.entries(productSpecifications).slice(0, 5);

  return (
    <div>
      <Navbar />
      <div className={`container mx-auto px-4 py-8 bg-white text-black ${showModal ? "blur-sm" : ""}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-xl font-semibold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold mb-4">Catalog Number: {product.catNumber}</p>
            <p className="text-gray-700">{product.desc}</p>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md mt-4"
              onClick={handleModal}
            >
              Request a Quote
            </button>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md mt-4"
              onClick={handleDownloadPdf}
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Product Partial Specification Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Product Full Specifications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {specificationsToShow.map(([specification, details]) => (
                  <TableRow key={specification} label={specification} value={details} />
                ))}
              </tbody>
            </table>
          </div>
          {!showAllSpecifications && (
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={toggleSpecifications}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div id="form-response" className="bg-white rounded shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="text"
                  placeholder="Contact"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">Product Model Number</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="model"
                  type="text"
                  value={product.catNumber}
                  readOnly
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function TableRow({ label, value }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{label}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
    </tr>
  );
}

const productSpecifications = {
  "Applications": "Non-destructive method to test the purity and chemistry of precious metals",
  "Data Memory": "64MB internal system memory/ 128MB internal user storage",
  "Data Storage": "Internal >10,000 readings with spectra",
  "Data Transfer": "USB",
  "Description": "Niton DXL Precious Metal Analyzer",
  "Detector Type": "Silicon PIN (Si-PIN) detector",
  "Dimensions (LxWxH)": "264x292x399 mm",
  "Element Range": "Mg-U",
  "Excitation Source": "Miniature X-ray tube",
  "Item Weight": "17 kg",
  "Model Number": "Niton DXL",
  "Notes": "Analyzes gold plating and differentiates gold plating from solid gold easily",
  "Product Type": "Analyzer",
  "Weight (English)": "38 lbs.",
  "Weight (Metric)": "17 kg",
  "Width (English)": "8.2 in.",
  "Width (Metric)": "206 mm",
};
