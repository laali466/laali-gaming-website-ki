'use client';

export default function Opportunities() {
  const opportunities = [
    {
      role: 'Beta Tester',
      type: 'Game Testing',
      icon: 'ri-gamepad-line',
      description: 'Play our games before release and provide valuable feedback',
      requirements: [
        'Passionate about gaming',
        'Good communication skills',
        'Attention to detail',
        'Available 5-10 hours per week'
      ],
      benefits: [
        'Early access to games',
        'Direct impact on game development',
        'Gaming merchandise',
        'Certificate of participation'
      ]
    },
    {
      role: 'Community Promoter',
      type: 'Marketing',
      icon: 'ri-megaphone-line',
      description: 'Help spread the word about our games on social media and gaming communities',
      requirements: [
        'Active on social media',
        'Strong communication skills',
        'Understanding of gaming culture',
        'Creative content creation'
      ],
      benefits: [
        'Revenue sharing program',
        'Exclusive content access',
        'Networking opportunities',
        'Portfolio building'
      ]
    },
    {
      role: 'Content Creator',
      type: 'Content',
      icon: 'ri-video-line',
      description: 'Create engaging content like gameplay videos, reviews, and tutorials',
      requirements: [
        'Video editing skills',
        'Engaging personality',
        'Gaming knowledge',
        'Consistent content creation'
      ],
      benefits: [
        'Monetization opportunities',
        'Professional equipment support',
        'Collaboration with developers',
        'Audience growth support'
      ]
    },
    {
      role: 'Bug Hunter',
      type: 'Quality Assurance',
      icon: 'ri-bug-line',
      description: 'Specialized testing to identify and report technical issues',
      requirements: [
        'Technical background preferred',
        'Systematic testing approach',
        'Detailed reporting skills',
        'Various device access'
      ],
      benefits: [
        'Bug bounty rewards',
        'Technical skill development',
        'Industry recognition',
        'Career advancement opportunities'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the role that matches your skills and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <i className={`${opportunity.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{opportunity.role}</h3>
                  <p className="text-cyan-400">{opportunity.type}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{opportunity.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Requirements</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                          <i className="ri-check-line text-cyan-400 text-sm"></i>
                        </div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                          <i className="ri-star-line text-yellow-400 text-sm"></i>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}