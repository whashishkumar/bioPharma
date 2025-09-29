"use client";
import { useAllProductsPageContext } from "@/context/AllProductsContext";
import React, { useState, useEffect } from "react";

interface EnquiryFormProps {
  productName?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  product_name?: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function EnquiryForm({ productName }: EnquiryFormProps) {
  const initialState: FormData = {
    name: "",
    email: "",
    phone: "",
    product_name: productName || "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const { getProductEnquary } = useAllProductsPageContext();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
        break;
      case "phone":
        if (!value.trim()) return "Contact number is required";
        if (!/^\d{10}$/.test(value)) return "Contact number must be 10 digits";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        break;
      default:
        return undefined;
    }
    return undefined;
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value || "");
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setFormData(initialState);
      getProductEnquary(formData);
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({ ...prev, product_name: productName }));
    }
  }, [productName]);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="w-full lg:max-w-lg mx-auto  bg-white py-10 max-w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 red-hat">
        Get Updates about Products
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sanchez">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Contact No.</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Contact No."
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name || ""}
            readOnly
            className="p-3 border border-gray-200 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-[#00A859] text-white rounded-md font-medium hover:bg-[#00A859] transition cursor-pointer"
        >
          Submit
        </button>

        {/* Success message */}
        {submitted && (
          <p className="text-green-600 text-center mt-2">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}
