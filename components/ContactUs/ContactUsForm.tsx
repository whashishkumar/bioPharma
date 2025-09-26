"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useOurServicesPageContext } from "@/context/OurServicesPageContext";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  message: string;
}

export default function ContactUsForm() {
  const { getServicesEnquiry } = useOurServicesPageContext();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitMessage, setFormSubmitMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10 digit phone no";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      getServicesEnquiry(formData);
      setFormSubmitMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        message: "",
      });
      setErrors({});
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="w-full  mx-auto lg:px-16 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center red-had">
        Send Us A Message
      </h2>
      <form className="flex flex-col gap-4 sanchez" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-100 focus:outline-none "
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="someone@example.com"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-100 focus:outline-none "
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone No"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-100 focus:outline-none "
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-100 focus:outline-none "
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="state"
            placeholder="Your State"
            value={formData.state}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-100 focus:outline-none "
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-100 focus:outline-none  resize-none h-32"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#00A859] text-white font-bold rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
        >
          Send Message
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="text-[#00A859] text-center font-medium mt-2">
            {formSubmitMessage}
          </p>
        )}
      </form>
    </div>
  );
}
