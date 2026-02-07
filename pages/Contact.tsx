import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    locationType: 'Mall',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*New Franchise Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*City:* ${formData.city}%0A*Location Type:* ${formData.locationType}%0A*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919347838756?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      locationType: 'Mall',
      message: ''
    });
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-heading text-4xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-gray-600 mt-4">We are looking for partners who share our vision for quality.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
               <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                            <MapPin className="text-fruitlinq-orange" size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">FRUITLINQ AGRO PRIVATE LIMITED</p>
                            <p className="text-gray-600">Hyderabad, India.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                            <Phone className="text-fruitlinq-orange" size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Phone & WhatsApp</p>
                            <p className="text-gray-600">+91 93478 38756</p>
                            <p className="text-gray-600">+91 93988 30801</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                            <Mail className="text-fruitlinq-orange" size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Email</p>
                            <p className="text-gray-600">sales@fruitlinq.in</p>
                        </div>
                    </div>
                  </div>
               </div>

               <div className="bg-green-50 border border-green-100 p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                  <h3 className="font-bold text-xl text-green-900 mb-2">Quick Chat?</h3>
                  <p className="text-green-800 mb-6">Connect with our franchise team directly on WhatsApp.</p>
                  <a
                    href="https://wa.me/919347838756"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] text-white font-heading font-semibold rounded-full hover:bg-[#128C7E] hover:shadow-lg focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300 transform active:scale-95 gap-2"
                  >
                    <MessageCircle size={20} /> Chat with Team
                  </a>
               </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg animate-slide-in-right">
                <h3 className="font-bold text-2xl mb-6">Request a Callback</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-fruitlinq-orange focus:ring-1 focus:ring-fruitlinq-orange outline-none transition-colors"
                              placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-fruitlinq-orange focus:ring-1 focus:ring-fruitlinq-orange outline-none transition-colors"
                              placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-fruitlinq-orange focus:ring-1 focus:ring-fruitlinq-orange outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-fruitlinq-orange focus:ring-1 focus:ring-fruitlinq-orange outline-none transition-colors"
                              placeholder="Hyderabad"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested Location Type</label>
                            <select
                              name="locationType"
                              value={formData.locationType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-fruitlinq-orange focus:ring-1 focus:ring-fruitlinq-orange outline-none transition-colors bg-white"
                            >
                                <option>Mall</option>
                                <option>IT Park</option>
                                <option>University</option>
                                <option>Hospital</option>
                                <option>Metro Station</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-fruitlinq-orange focus:ring-1 focus:ring-fruitlinq-orange outline-none transition-colors"
                          placeholder="Tell us about your investment plans..."
                        ></textarea>
                    </div>

                    <Button type="submit" fullWidth size="lg" className="hover:scale-[1.02]">Submit Request</Button>
                </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;