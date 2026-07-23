import React, { useState, useEffect } from 'react';
import { Heart, Loader2 } from 'lucide-react';

// Declare global window properties to satisfy the TypeScript compiler
declare global {
  interface Window {
    FlutterwaveCheckout: any;
  }
}

interface DonateProps {
  isDark: boolean;
}

const Donate: React.FC<DonateProps> = ({ isDark }) => {
  // Replace with your live public key from the dashboard settings panel
  const publicKey = "FLWPUBK_TEST-SANDBOXDEMOKEY-X";

  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load the secure transaction library script seamlessly onto the page
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Determine the precise numerical total allocated for the session
  const getFinalAmount = (): number => {
    return parseFloat(customAmount) || 0;
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    const targetAmount = getFinalAmount();

    if (targetAmount <= 0 || !donorEmail || !donorName) {
      alert('Please fill in all mandatory donor fields and establish an allocation total.');
      return;
    }

    if (!scriptLoaded || !window.FlutterwaveCheckout) {
      alert('The secure transaction framework is currently loading. Please wait a brief moment.');
      return;
    }

    // Call the payment overlay script
    window.FlutterwaveCheckout({
      public_key: publicKey,
      tx_ref: `RAP-INITIATIVE-${Date.now()}`,
      amount: targetAmount,
      currency: 'NGN',
      payment_options: 'card, banktransfer, ussd',
      customer: {
        email: donorEmail,
        name: donorName,
      },
      customizations: {
        title: 'RAP Initiative',
        description: 'Support Our Mission to Prevent Road Crashes',
        logo: 'https://rapinitiative.org/rap-logo.png',
      },
      callback: function (data: any) {
        if (data.status === 'successful' || data.status === 'completed') {
          alert('Thank you for your generous contribution. Your payment was processed successfully.');
          // Reset form metrics upon conclusion
          setCustomAmount('');
          setDonorName('');
          setDonorEmail('');
        }
      },
      onclose: function () {
        // Modal window container dismissed by user
      },
    });
  };

  function setSelectedTier(_arg0: null) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={`min-h-screen pt-36 pb-24 transition-colors duration-500 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F9F9F9]'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}>
            <Heart className="w-4 h-4 text-[#FF9F00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Support Our Mission
            </span>
          </div>
          <h1 className={`text-5xl lg:text-7xl font-black leading-[1.1] mb-8 uppercase italic tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Your Support <br />
            <span className="text-[#FF9F00]">Saves Lives.</span>
          </h1>
          <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Every contribution helps us reach more schools, train more volunteers, run more campaigns and protect more road users. Support a project and give today.
          </p>
        </div>

        <hr className={isDark ? 'border-neutral-900 mb-20' : 'border-neutral-200 mb-20'} />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
          {/* Secure Checkout Controller Box */}
          <div className={`border rounded-2xl p-8 lg:p-10 sticky top-28 ${isDark ? 'bg-[#141414] border-neutral-800' : 'bg-white border-neutral-200 shadow-lg'}`}>
            <h3 className={`text-xl font-bold uppercase tracking-wider mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Contribution Details
            </h3>

            <form onSubmit={handlePayment} className="flex flex-col gap-6">
              {/* Custom Amount Entry */}
              <div>
                <label htmlFor="custom-amount" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                  Custom Amount (NGN)
                </label>
                <input
                  type="number"
                  id="custom-amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier(null);
                  }}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF9F00] transition-colors ${
                    isDark ? 'bg-[#0D0D0D] border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                  }`}
                  placeholder="Enter custom amount"
                />
              </div>

              {/* Personal Information */}
              <div>
                <label htmlFor="donor-name" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                  Full Name or Organisation *
                </label>
                <input
                  type="text"
                  id="donor-name"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF9F00] transition-colors ${
                    isDark ? 'bg-[#0D0D0D] border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                  }`}
                  placeholder="Your identity preference"
                />
              </div>

              <div>
                <label htmlFor="donor-email" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="donor-email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF9F00] transition-colors ${
                    isDark ? 'bg-[#0D0D0D] border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                  }`}
                  placeholder="For receipts and updates"
                />
              </div>

              {/* Summary Display Block */}
              <div className={`border rounded-xl p-4 mt-2 ${isDark ? 'bg-[#0D0D0D] border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  Selected Allocation
                </span>
                <span className="text-xl font-black text-[#FF9F00]">
                  {getFinalAmount() > 0 ? `₦${getFinalAmount().toLocaleString()}` : 'Select an option above'}
                </span>
              </div>

              {/* Transaction Trigger */}
              <button
                type="submit"
                disabled={!scriptLoaded}
                className="w-full bg-[#FF9F00] text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-neutral-900 hover:text-white transition-colors duration-300 mt-2 flex items-center justify-center gap-2 disabled:bg-neutral-300 disabled:text-neutral-500"
              >
                {!scriptLoaded ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Securing Connection...</span>
                  </>
                ) : (
                  <span>Proceed to Payment</span>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Donate;