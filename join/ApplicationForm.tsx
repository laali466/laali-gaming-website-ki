'use client';

import { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    motivation: '',
    portfolio: '',
    socialMedia: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/join-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: '',
          experience: '',
          availability: '',
          motivation: '',
          portfolio: '',
          socialMedia: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Apply Now
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to join our team? Fill out the application form below and we'll get back to you soon!
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <form id="join-application" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Role *</label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none text-sm pr-8 appearance-none"
                    >
                      <option value="">Select a role</option>
                      <option value="beta-tester">Beta Tester</option>
                      <option value="community-promoter">Community Promoter</option>
                      <option value="content-creator">Content Creator</option>
                      <option value="bug-hunter">Bug Hunter</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-cyan-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Gaming Experience *</label>
                  <div className="relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none text-sm pr-8 appearance-none"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-2 years)</option>
                      <option value="intermediate">Intermediate (2-5 years)</option>
                      <option value="advanced">Advanced (5+ years)</option>
                      <option value="professional">Professional</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-cyan-400"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Availability *</label>
                  <div className="relative">
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none text-sm pr-8 appearance-none"
                    >
                      <option value="">Select availability</option>
                      <option value="part-time">Part-time (5-10 hours/week)</option>
                      <option value="flexible">Flexible (10-20 hours/week)</option>
                      <option value="full-time">Full-time (20+ hours/week)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-cyan-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Portfolio/Website</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm"
                  placeholder="https://your-portfolio.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Social Media Profiles</label>
                <input
                  type="text"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm"
                  placeholder="Twitter, Instagram, YouTube handles"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Why do you want to join us? *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm resize-vertical"
                  placeholder="Tell us about your motivation and what you can bring to our team..."
                />
                <div className="text-right text-gray-400 text-sm mt-1">
                  {formData.motivation.length}/500 characters
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-semibold">
                  Application submitted successfully! We'll contact you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center text-red-400 font-semibold">
                  Error submitting application. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}