'use client';

import React from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, Language } from '@/lib/translations';

export default function TermsPage() {
  const lang: Language = 'en';
  const t = translations[lang].footer;

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-400 mb-6 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Terms & Conditions
            </h1>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-gold max-w-none font-light text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 1: ABOUT YOUR ACCOUNT</h2>
            <p className="mb-6">
              Your account is not transferable. This account is issued under the laws of Singapore. This Agreement and your Account is operating in the SG and these terms shall be governed by and construed under and in accordance with law of Singapore. We may amend or change the terms and conditions of the charges at any time. We may cancel or suspend your Account and any related agreements at any time at our sole discretion. Your Accounts are issued by and are the property of Wise Premium. When referring to &ldquo;WP&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo; or &ldquo;Us&rdquo; this is considered to mean Wise Premium. All credits top-up to your Account is held in segregated custodial pooled accounts on your behalf and can be redeemed at any time upon request for the current monetary value held, subject to our fees, local laws and exchange regulations. The Accounts are held for the purposes described in this Agreement which includes payments, card purchases, adjustment of balances for corrections, Account Transactions, fees, and other actions described herein.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 2: MEMBERSHIP APPLICATIONS AND MEMBERSHIP CARD</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Membership Application</h3>
            <p className="mb-6">
              All Membership applications are subject to acceptance by Wise Premium at its sole discretion. Wise Premium shall notify applicants in the event that your Membership application has been accepted. Wise Premium is under no duty to disclose its reasons for rejecting any Membership application.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information Apply of Membership</h3>
            <p className="mb-6">
              You are obliged to provide correct personal details when you apply for Membership. Failure to do so may invalidate your Membership and any subsequent transactions. Your responsibility to provide accurate information is a continuing obligation and you must notify Wise Premium promptly in the event that any information provided by you in connection with your Membership changes.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Membership Privacy</h3>
            <p className="mb-6">
              Your Membership is personal to you. You are responsible for ensuring that no one (other than your personal assistant on your behalf, where applicable) uses your Membership.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Membership Access of Username and Password</h3>
            <p className="mb-6">
              Access to and use of your personalized Membership section of the Mobile Application is through a combination of user name and password. You are solely responsible for maintaining the confidentiality of your user name and password and you agree to notify Wise Premium immediately if you believe that there has been any breach of security, including the unauthorized use of your name and password.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Security & Storing</h3>
            <p className="mb-6">
              We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with the Wise Premium privacy policy, further details of which are set out in Clause 10.1. Please note that all information you provide to us is stored on our secure servers. Any payment transactions carried out by us or our chosen third-party provider of payment processing services will be encrypted using Secured Sockets Layer technology.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Card Lost Or Stolen Report</h3>
            <p className="mb-6">
              You must notify Wise Premium immediately by e-mail at support@wisepremium.com if your Membership Card is lost or stolen.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 3: MEMBERSHIP FEES, UPGRADES, CANCELLATIONS AND CARD RENEWALS</h2>
            <p className="mb-6">
              Please refer to your Wise premium Membership Agreement for more information regarding the list of fees associated with your Membership. All fees and payments are calculated in USD. If a payment cannot be attributed to USD, foreign exchange fees may apply. If there are no credits or insufficient credits for a calculated fee, then we may partially deduct any of your Account.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Condition of Fees and Card</h3>
            <p className="mb-6">
              For the first year of your Membership, Membership Fees and Card Fees payable shall be confirmed to you prior to acceptance of your Membership application. The Membership Fee shall be payable in full upon acceptance of your Membership application. Any increase or decrease to the Monthly Card Fees will be notified to all Members in advance or their Renewal Dates.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Service Acknowledgement</h3>
            <p className="mb-6">
              You acknowledge that your payment of the Membership Fee and Card Fee constitutes your express request for us to begin to supply you with the Services.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Condition of Refund</h3>
            <p className="mb-6">
              Membership Fees are non-refundable. Your Membership Fee covers our costs in setting up your Membership and is non-refundable in all circumstances.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Cancellation Membership</h3>
            <p className="mb-6">
              You have the right to cancel your Membership until the end of 14 days after the day on which we accept your Membership application (&ldquo;Cancellation Period&rdquo;) and we would ask that you inform us of your decision in writing.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Wise Premium Payment Condition</h3>
            <p className="mb-6">
              Membership Fees are due on acceptance of your Membership application and annually thereafter (the &ldquo;Renewal Date&rdquo;), and full payment will be taken by Wise Premium annually in advance which you have authorised us to deduct such payment from (&ldquo;Wise Premium Credits&rdquo;) in accordance with the relevant invoice.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Card Fee Monthly Processing</h3>
            <p className="mb-6">
              Card Fee is due on acceptance of your card application and monthly thereafter (the &ldquo;Subscription Date&rdquo;), and full payment will taken by Mastercard monthly in advance which you have authorised us to deduct such payment from (&ldquo;Wise Premium Prepaid Card&rdquo;) in accordance with the relevant invoice.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Membership or Prepaid Card Renewal</h3>
            <p className="mb-6">
              If you do not wish to renew your Membership or Prepaid Card you must notify us at least 30 days prior to your Renewal Date.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Processing of Renewal Recharge</h3>
            <p className="mb-6">
              If you do not notify us in accordance with Clause 3.7, Wise Premium reserves the right to recharge the then current Membership Fee and Card Fee in order to renew the Membership and Prepaid Card.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Services Provide Under Conditions</h3>
            <p className="mb-6">
              Wise Premium reserve the right to refuse to provide the Services should any payment due under these Conditions not be received.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Upgrade Membership</h3>
            <p className="mb-6">
              If, during the course of your current Membership, you wish to upgrade your Membership to a higher level of Membership or Wise Premium may suggest you to upgrade your Membership based on your usage of the Services, the difference in price between the two categories of Membership will be payable on a pro rata basis.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Wise Premium of Purchasing Goods or Services</h3>
            <p className="mb-6">
              Wise Premium may at your request purchase goods or services on your behalf. In the event that we act as a credit agent in this regard, you hereby authorize Wise Premium to deduct the credit sum from your Wise Premium Credits or Prepaid Card immediately.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 4: SUPPLY OF SERVICES</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Services Of Supply</h3>
            <p className="mb-6">
              Wise Premium shall supply the Services to the Member during the Membership in accordance with the Member&rsquo;s particular Requests, provided that Wise Premium shall not be required to provide or facilitate the supply of goods and/or services that it deems at its sole discretion may violate applicable laws, standards and/or regulations or may offend taste and decency in the relevant jurisdiction.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Service and Performance</h3>
            <p className="mb-6">
              Wise Premium shall use its reasonable endeavours to meet any performance dates specified, but any such dates shall be estimates only and time shall not be of the essence for performance of any Services.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Services Changes</h3>
            <p className="mb-6">
              Wise Premium shall have the right to make any changes to the Services which are necessary to comply with any applicable law or safety requirement, or which do not materially affect the nature or quality of the Services, and Wise Premium shall notify the Member in any such event.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Service of Languages</h3>
            <p className="mb-6">
              Services will be provided in English and Mandarin.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Reservation Service</h3>
            <p className="mb-6">
              (a) When you use the booking service you hereby authorize us to deduct your Wise Premium Credits for any booking on your behalf to the shop which is forfeited as a result your cancellation of the booking. (b) When you use the booking service you agree that where you cancel a booking within 24 hours of the time the reservation is made by you shall not be entitled to any refund of any credits paid to secure the booking. (c) Wise Premium reserves the right to deny restaurant requests from Members if Members repeatedly fail to honor their bookings or continuously violate cancellation policies. (d) Admission of Members to any shop premises is at all times at the sole discretion of the Supplier and Wise Premium shall have no liability where a Member is refused admission to a shop.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 5: PLACING A REQUEST</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Methods of Member Request</h3>
            <p className="mb-6">
              Members may place Requests through telephone, message or e-mail.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Request of Wise Premium Process</h3>
            <p className="mb-6">
              Wise Premium, acting reasonably, reserves the right to withdraw any of the Services and/or to refuse to accept any Requests at its sole discretion.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Request of Notice</h3>
            <p className="mb-6">
              If Wise Premium is unable or not obliged to deal with any Request, it will inform the Member as soon as reasonably practicable.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Membership details of Product or Service Purpose</h3>
            <p className="mb-6">
              You undertake that all details you provide to us for the purpose of booking, ordering or purchasing products or services are correct, that the Wise Premium Credits and/or Prepaid Card you use from time to time is your own and that you have sufficient funds to cover the cost of the product or service.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Charges of Services</h3>
            <p className="mb-6">
              From time to time the procurement or provision of certain services, products or benefits may incur a Wise Premium services fee or handling charge (of which you will be notified in advance) and in such event you hereby authorise Wise Premium to deduct your Wise Premium Credits with any such handling charges or, alternatively, to invoice you in respect of such fees or charges.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 6: CANCELLATIONS, REFUNDS AND RETURNS</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Cancellation Parties Acknowledgement</h3>
            <p className="mb-6">
              The Member acknowledges that the sales contract for the supply of goods and/or services made as a result of a Request is between the Member and the relevant Supplier and that Wise Premium is not a party to such contract. Cancellation of contracts with Suppliers should be addressed with the Supplier directly and will be subject to the relevant Supplier&rsquo;s policies.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Service Promotion and Methods</h3>
            <p className="mb-6">
              If a request for a specific product or service is not available, Wise Premium may offer you substitute products or services of a similar description and standard. You may at your sole discretion refuse acceptance of such substitute products and/or services and request a full refund in the event that payment has already been made to the Supplier for the unavailable product or service.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Product declaration</h3>
            <p className="mb-6">
              All descriptions of any products, services or Benefits on the Mobile Application has been approved by the relevant Supplier. Wise Premium shall not be liable for inaccurate or misleading descriptions.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Order Payment</h3>
            <p className="mb-6">
              Payment for all products and services shall be due immediately upon acceptance of the order by the relevant Supplier.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Service of Charges</h3>
            <p className="mb-6">
              The Member further acknowledges that for goods purchased on his or her behalf by Wise Premium directly from a Supplier, returns and exchanges will be subject to the terms and conditions of that Supplier and returns or exchange of goods purchased may not always be permitted. In circumstances where Wise Premium is asked to source a specific item for a Member, Wise Premium shall inform the Member of the refund and exchange policy of that Supplier in advance. Wise Premium shall not be liable to the Member where a Supplier does not accept the return or exchange of an item.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Recommend of Returning Good</h3>
            <p className="mb-6">
              It shall be the Member&rsquo;s sole responsibility to retain all proof of return of goods to a Supplier, we recommend returning the goods by registered delivery, or by any other similar means of ascertaining the date of the return dispatch and tracking the return.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Order Refund</h3>
            <p className="mb-6">
              We will inform you when we become aware that a refund of an order has been processed by a Supplier.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Delivery Attempt</h3>
            <p className="mb-6">
              In the case of premium courier services, if the Member is not at the specified Delivery address to receive their Order at the scheduled time, the Member may incur further charges for subsequent attempts to re-deliver the goods.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 7: SUPPLIERS</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Services and Products</h3>
            <p className="mb-6">
              Suppliers are responsible for providing you with the services and products you request us to order on your behalf from time to time. Wise Premium shall communicate with Suppliers on your behalf unless it is more appropriate for you to contact the Supplier directly.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Terms and Condition of Supplier</h3>
            <p className="mb-6">
              Suppliers may impose their own terms and conditions which, in every case apply to the supply of goods and/or services by that Supplier to you, and such terms and conditions shall be binding upon you at the time of order.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Offers Availability</h3>
            <p className="mb-6">
              You acknowledge that the offers are subject to availability and may change from time to time without notice.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Liability of Services</h3>
            <p className="mb-6">
              If Wise Premium&rsquo;s performance of any of its obligations under these Conditions is prevented or delayed by any act or omission by the Member or failure by the Member to perform any relevant obligation (Member Default): (a) Wise Premium shall without limiting its other rights or remedies have the right to suspend performance of the Services until the Member remedies the Member Default, and to rely on the Member Default to relieve it from the performance of any of its obligations to the extent the Member Default prevents or delays Wise Premium&rsquo;s performance of any of its obligations; (b) Wise Premium shall not be liable for any costs or losses sustained or incurred by the Member arising directly or indirectly from Wise Premium&rsquo;s failure or delay to perform any of its obligations as set out in this clause 7.4; and (c) the Member shall reimburse Wise Premium on written demand for any costs or losses sustained or incurred by Wise Premium arising directly or indirectly from the Member Default.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 8: LIMITATION OF LIABILITY</h2>
            <p className="mb-6">
              Subject to any condition, warranty or right implied by any statutory consumer guarantee contained in any law which cannot by law be excluded by agreement: we give no warranties, and you have no other rights, apart from those expressly set out in these Terms of Conditions; and all implied conditions, warranties and rights are excluded. Where any condition, warranty or right is implied by law, or any statutory consumer guarantee applies and cannot be excluded, we limit our liability for breach of, or other act contrary to, that implied condition, warranty or right, or statutory consumer guarantee to the fullest extent permitted by law. Subject to the preceding paragraphs, we (including, in this limitation of liability clause, our related bodies corporate, directors, officers, employees, agents and suppliers) expressly disclaim all liability to you or any other persons for any losses, damages, liabilities, claims and expenses (including but not limited to legal costs and defence or settlement costs) whatsoever, whether direct, indirect or consequential, arising out of or referable to the Webiste Content or Mobile Application (or material accessed via the Website or Mobile Application), or to access of this Website by you, howsoever caused, whether in contract, tort including negligence, statute or otherwise. Except as expressly set out in these Conditions, all warranties, conditions and other terms implied by statute or common law are, to the fullest extent permitted by law, excluded from these Conditions.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 9: COMMENCEMENT AND TERMINATION</h2>
            <p className="mb-6">
              These Conditions shall take effect and be binding upon the Member and Wise Premium upon acceptance by Wise Premium of your Membership application. These Conditions shall be applicable for the duration of your Membership and shall only cease to have effect upon the expiry or termination of your Membership. You agree that your only rights and remedies under these Conditions shall be against Wise Premium and no other entity.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">SECTION 10: GENERAL</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Privacy and Data Protection:</h3>
            <p className="mb-6">
              The Services and your Membership are subject to the Wise Premium privacy policy, incorporated into these Conditions by reference and set out at the following web address: Privacy Policy which applies at all times in relation to any data that we collect from you.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Assignment and subcontracting:</h3>
            <p className="mb-6">
              (a) Wise Premium may at any time assign, transfer, charge, subcontract or deal in any other manner with all or any of its rights under these Conditions and may subcontract or delegate in any manner any or all of its obligations under these Conditions to any third party or agent. (b) The Member shall not, without the prior written consent of Wise Premium, assign, transfer, charge, subcontract or deal in any other manner with all or any of its rights or obligations under these Conditions.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Waiver:</h3>
            <p className="mb-6">
              (a) A waiver of any right under these Conditions is only effective if it is in writing and shall not be deemed to be a waiver of any subsequent breach or default. No failure or delay by a party in exercising any right or remedy under these Conditions or by law shall constitute a waiver of that or any other right or remedy, nor preclude or restrict its further exercise. No single or partial exercise of such right or remedy shall preclude or restrict the further exercise of that or any other right or remedy. (b) Unless specifically provided otherwise, rights arising under these Conditions are cumulative and do not exclude rights provided by law.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Variation:</h3>
            <p className="mb-6">
              Wise Premium may vary these Conditions from time to time and will notify you of any changes in a timely manner. Notification will be by some or all of the following: Wise Premium Newsletter, the Website, by Email or by phone. Your continued use of your Membership constitutes acceptance of such variations to these Conditions.
            </p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
