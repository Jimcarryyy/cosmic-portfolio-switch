
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Email</h4>
                <p className="text-gray-300">alex@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Location</h4>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Social</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">GitHub</a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
