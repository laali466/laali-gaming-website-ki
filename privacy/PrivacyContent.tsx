'use client';

export default function PrivacyContent() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <div className="text-gray-400 space-y-3">
                <p>At LAALI Gaming, we collect information to provide better services to our users. We collect information in the following ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information you give us directly (account registration, contact forms)</li>
                  <li>Information we get from your use of our games and services</li>
                  <li>Technical information about your device and gameplay</li>
                  <li>Analytics data to improve our games and services</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Information</h2>
              <div className="text-gray-400 space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our games and services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends and usage patterns</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <div className="text-gray-400 space-y-3">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your consent</li>
                  <li>For external processing by trusted service providers</li>
                  <li>For legal reasons or to protect our rights</li>
                  <li>In connection with business transfers</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <div className="text-gray-400 space-y-3">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure development practices</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
              <div className="text-gray-400 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Children's Privacy</h2>
              <div className="text-gray-400 space-y-3">
                <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Similar Technologies</h2>
              <div className="text-gray-400 space-y-3">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how our games and services are used</li>
                  <li>Provide personalized content and experiences</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
              <div className="text-gray-400 space-y-3">
                <p>Our games may include third-party services such as:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Advertising networks</li>
                  <li>Social media platforms</li>
                  <li>Payment processors</li>
                </ul>
                <p>These services have their own privacy policies, and we encourage you to review them.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
              <div className="text-gray-400 space-y-3">
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <div className="text-gray-400 space-y-3">
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
              </div>
            </div>

            <div className="border-t border-cyan-500/20 pt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <div className="text-gray-400 space-y-3">
                <p>If you have any questions about this privacy policy, please contact us:</p>
                <ul className="space-y-2">
                  <li>Email: privacy@laaligaming.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Gaming Street, Tech City, TC 12345</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}