
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      description: 'Send us an email anytime',
      info: 'laalicompany@gmail.com',
      link: 'mailto:laalicompany@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      description: 'Call us during business hours',
      info: '+91 8957308346',
      link: 'tel:+918957308346'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Office',
      description: 'Visit our headquarters',
      info: '123 Gaming Street, Tech City, TC 12345',
      link: 'https://maps.google.com/?q=123+Gaming+Street,+Tech+City,+TC+12345'
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      description: 'Monday to Friday',
      info: '9:00 AM - 6:00 PM (EST)',
      link: ''
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-bl from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-gray-400">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${method.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                    {method.link ? (
                      <a 
                        href={method.link}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {method.info}
                      </a>
                    ) : (
                      <p className="text-cyan-400">{method.info}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="border-b border-cyan-500/20 pb-4">
                <h4 className="text-white font-medium mb-2">How can I report a bug in your games?</h4>
                <p className="text-gray-400 text-sm">Use our contact form above with "Bug Report" as the subject, or email us directly at laalicompany@gmail.com</p>
              </div>
              <div className="border-b border-cyan-500/20 pb-4">
                <h4 className="text-white font-medium mb-2">Do you offer game development services?</h4>
                <p className="text-gray-400 text-sm">Yes! Contact us with "Business Partnership" as the subject to discuss custom game development projects.</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">How can I become a beta tester?</h4>
                <p className="text-gray-400 text-sm">Visit our Join Us page to apply for beta testing opportunities and other roles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
