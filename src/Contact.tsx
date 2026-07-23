import React, { useState } from 'react';
import { MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  // 1. Paste your free Web3Forms Access Key between the quotes below
  const WEB3FORMS_ACCESS_KEY = "ac4d690c-eb59-4987-a2c5-90e5f5ff84d7";

  // Form input states
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('General Enquiry');
  const [message, setMessage] = useState('');

  // Submission tracker states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setSubmitStatus('ERROR');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('IDLE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'RAP Initiative Website',
          subject: `New ${enquiryType} from Website`,
          email: email,
          phone: phone,
          enquiry_type: enquiryType,
          message: message
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('SUCCESS');
        // Clear out the form fields upon successful delivery
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSubmitStatus('ERROR');
      }
    } catch (error) {
      setSubmitStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Official Directory Data */}
          <div className="space-y-12">
            <div>
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em] block mb-4">
                Connect Directly
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter">
                Get In <span className="text-[#FF9F00]">Touch.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* Abuja Headquarters */}
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#FF9F00] mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Headquarters</h4>
                  <p className="text-white font-bold uppercase tracking-wide mb-2">Abuja Office</p>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-2">
                    3 Atbara Street, off Cairo Street, off Adetokunbo Ademola Crescent, Wuse 2, Abuja.
                  </p>
                  <a href="tel:+2348038189849" className="text-sm font-mono text-[#FF9F00] hover:underline">
                    +234 (0) 803 8189 849
                  </a>
                </div>
              </div>

              {/* Ibadan Branch */}
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#FF9F00] mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Regional Branch</h4>
                  <p className="text-white font-bold uppercase tracking-wide mb-2">Ibadan Office</p>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-2">
                    Last Floor, Iyaniwura House, opposite Islamiyah High School, Ashi Junction, Basorun Road, Ibadan.
                  </p>
                  <a href="tel:+2348033772551" className="text-sm font-mono text-[#FF9F00] hover:underline">
                    +234 (0) 803 377 2551
                  </a>
                </div>
              </div>

              {/* Email Routes */}
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#FF9F00] mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Email Directory</h4>
                  <div className="space-y-1 text-sm mt-2">
                    <p className="text-neutral-400">
                      <span className="text-white font-bold uppercase tracking-wider text-xs mr-2">General:</span> 
                      info@rapinitiative.org
                    </p>
                    <p className="text-neutral-400">
                      <span className="text-white font-bold uppercase tracking-wider text-xs mr-2">Volunteering:</span> 
                      rapvolunteers@rapinitiative.org
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Form Application Container */}
          <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-8 lg:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Credentials Inputs Side-By-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF9F00] transition-colors text-sm"
                    placeholder="name@organisation.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF9F00] transition-colors text-sm"
                    placeholder="+234..."
                  />
                </div>
              </div>

              {/* Row 2: Categorization Dropdown Selector */}
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                  Enquiry Type
                </label>
                <select
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF9F00] transition-colors text-sm cursor-pointer appearance-none"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Volunteer Application">Volunteer Application</option>
                  <option value="Partnership Proposal">Partnership Proposal</option>
                  <option value="Media Request">Media Request</option>
                </select>
              </div>

              {/* Row 3: Narrative Text Block Area */}
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                  Message or Biodata Summary *
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF9F00] transition-colors text-sm resize-none leading-relaxed"
                  placeholder="If volunteering, please provide a brief background and availability..."
                />
              </div>

              {/* Dynamic Notification Banners */}
              {submitStatus === 'SUCCESS' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3 text-emerald-400 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Your details have been submitted successfully. Our team will review and connect shortly.</span>
                </div>
              )}

              {submitStatus === 'ERROR' && (
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 flex items-center gap-3 text-rose-400 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Transmission error. Please verify required fields or contact info@rapinitiative.org directly.</span>
                </div>
              )}

              {/* Transaction Action Submit Trigger Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF9F00] text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-500 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <span>Submit Details</span>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;