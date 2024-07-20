
"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase";
import Navbar from "../../../components/NavBar";
import "../../../components/style.css";
import Image from "next/image";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalPDF, setShowModalPDF] = useState(false);
  const [showAllSpecifications, setShowAllSpecifications] = useState(false);
  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [formData2, setFormData2] = useState({
    name: '',
    contact: '',
    email:'',
  });
  const [formFilled, setFormFilled] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value
    });
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });

    if (formData2.name && formData2.contact && formData2.email) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };

  const validateMobileNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!validateMobileNumber(formData1.contact)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      await addDoc(collection(db, "quoteRequests"), {
        ...formData1,
        productId: productId,
        timestamp: new Date(),
      });
      setShowModal(false);
      alert("Quote request submitted successfully!");
    } catch (error) {
      console.error("Error submitting quote request:", error);
    }
  };

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

  const handleModalPDF = () => {
    setShowModalPDF(!showModalPDF);
  };

  const toggleSpecifications = () => {
    setShowAllSpecifications(!showAllSpecifications);
  };

  const handleDownloadPdf = async (e) => {
    e.preventDefault();
    if (!product || !product.pdfUrl) {
      console.error("PDF URL not found for product.");
      return;
    }

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;

      if (!emailRegex.test(formData2.email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!phoneRegex.test(formData2.contact)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }

      const docRef = await addDoc(collection(db, "pdfDownloadForms"), {
        name: formData2.name,
        contact: formData2.contact,
        email: formData2.email,
        productId: productId, 
        timestamp: new Date(),
      });

      console.log("Form data stored with ID: ", docRef.id);
      const pdfRef = ref(storage, product.pdfUrl);
      const url = await getDownloadURL(pdfRef);

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

  const specificationsToShow = showAllSpecifications
    ? Object.entries(product.specifications || {})
    : Object.entries(product.specifications || {}).slice(0, 5);

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
              onClick={handleModalPDF}
            >
              Download Datasheet
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Product Full Specifications</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {specificationsToShow.map(([label, value]) => (
                <TableRow key={label} label={label} value={value} />
              ))}
            </tbody>
          </table>
          {Object.keys(product.specifications || {}).length > 5 && (
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md mt-4"
              onClick={toggleSpecifications}
            >
              {showAllSpecifications ? "Show Less" : "Show All"}
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div id="form-response" className="bg-white rounded shadow-lg max-w-md">
            <div onClick={handleModal} className="w-full flex justify-end relative" style={{ left: 10, top: -10 }}>
              <Image
                src="/icons/close.png"
                alt="Close"
                width={25}
                height={25}
                className="object-contain hover:cursor-pointer"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact Number</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="Contact Number"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showModalPDF && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div id="form-response" className="bg-white rounded shadow-lg max-w-md">
            <div onClick={handleModalPDF} className="w-full flex justify-end relative" style={{ left: 10, top: -10 }}>
              <Image
                src="/icons/close.png"
                alt="Close"
                width={25}
                height={25}
                className="object-contain hover:cursor-pointer"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Download PDF</h2>
            <form onSubmit={handleDownloadPdf}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={handleData}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact Number</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="Contact Number"
                  required
                  onChange={handleData}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleData}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!formFilled ? "opacity-50 cursor-not-allowed" : ""}`}
                  type="submit"
                  disabled={!formFilled}
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const TableRow = ({ label, value }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{label}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
  </tr>
);

