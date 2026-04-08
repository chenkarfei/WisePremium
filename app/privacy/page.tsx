'use client';

import React from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, Language } from '@/lib/translations';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-gold max-w-none font-light text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">1. SCOPE OF POLICY</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Policy of General Terms Apply</h3>
            <p className="mb-6">
              This policy together with the General Terms of Service and/or our Business Terms of Service apply to your use of: our website at www.wisepremium.com (the &ldquo;Sites&rdquo;) the Wise Premium App (&ldquo;App&rdquo;) once you have downloaded a copy of the App onto your mobile telephone or handheld device (&ldquo;Device&rdquo;); and any of the services accessible through the App or the Site (the &ldquo;Services&rdquo;).
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Policy Set Out of Personal data</h3>
            <p className="mb-6">
              This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed and used by us. If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact us or our Wise Premium Support Team by sending an email to support@wisepremium.com. So that we&rsquo;re clear and there&rsquo;s no misunderstanding about how we handle your personal data, we will: Always keep your data safe and private. Never sell your data. Allow you to manage and review your marketing choices at any time.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">2. COOKIES</h2>
            <p className="mb-6">
              We use cookies to distinguish you from other users of the App or the Site.This helps us to provide you with a good experience when you use the App or browse our Site and also allows us to improve the App and our Site. For detailed information on the cookies we use and the purposes for which we use them.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">3. INFORMATION WE COLLECT ABOUT YOU</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information We Collect From You</h3>
            <p className="mb-6">
              We will collect and process the following data about you: Information you give us &ldquo;Submitted Information&rdquo;: This is the information you give us about you by filling in forms on the App and/or the Site, or by corresponding with us (for example, by email or via the chat functions on the App and/or the Site). It includes information you provide when you register to use the App, download or register the App, subscribe to any of our services, enter into any transaction on the App or the Site, participate in discussion boards or other social media functions on the App or the Site, enter a competition, promotion or survey and when you report a problem with an App, the Services, or the Site. If you contact us, we will keep a record of that correspondence. The information you give us may include your name, address, date of birth, e-mail address, phone number, the Device&rsquo;s phone number, username, password and other registration information you provide us in order to prove your eligibility to use our services.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information We Collect From Your Device</h3>
            <p className="mb-6">
              Information we collect about you and your device. Each time you visit our Site or App, we may automatically collect the following information: Technical information, including the internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, device information and the type of mobile device you use, a unique device identifier, mobile network information, your mobile operating system, the type of mobile browser you use, time zone setting &ldquo;Device Information&ldquo;; (information about your visit, including the full uniform resource locators (URL), clickstream to, through and from our site (including date and time), services you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), the methods used to browse away from the page, device information;
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">4. USES MADE OF THE INFORMATION</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Use Of WP Service</h3>
            <p className="mb-6">
              Below is a summary of the key types of data that we make use of as part of the WP Services. For more information on how these types of data are used and for which purposes then please see the table below. We use information held about you in the following ways:
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Submitted Information:</h4>
            <p className="mb-6">
              We will use this information: to carry out our obligations arising from any transactions you enter into with us, for example top-up and membership purchases and to provide you with the information, products and services that you request from us; to provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about; to provide you, or permit selected third parties to provide you with information about goods or services we feel may interest you. Please see the section on &lsquo;Third Party Services&rsquo; below for more information; to verify your identity to protect against fraud, comply with financial crime laws and to confirm your eligibility to use our products and services; to notify you about changes to our service; to ensure that content from our site is presented in the most effective manner for you and for your computer.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Device Information:</h4>
            <p className="mb-6">
              We will use this information: to administer our Site and the App for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes; to improve our Site and the App to ensure that content is presented in the most effective manner for you and for your computer; to allow you to participate in interactive features of our service, when you choose to do so; as part of our efforts to keep our Site and the App safe and secure; to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you; to make suggestions and recommendations to you and other users of our Site and the App about goods or services that may interest you or them; to verify your identity, protect against fraud, comply with anti-financial crime laws and to confirm your eligibility to use our products and services; and to comply with our regulatory obligations.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Location Information:</h4>
            <p className="mb-6">
              We will use this information: to deliver relevant advertising to you, for example, information on nearby merchants; to protect against fraud; and
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Third Party Information:</h4>
            <p className="mb-6">
              We will combine this information with information you give to us and information we collect about you. We will use this information and the combined information: to help us better understand your interest and spending behaviour so that we may make decisions about how we manage your WP Membership; to process applications for products and services available through us, including making decisions about whether to agree to approve any applications; and for the purposes set out above (depending on the types of information we receive).
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information Categorize of Personal Data Use</h3>
            <p className="mb-6">
              We may associate any category of information with any other category of information and will treat the combined information as personal data in accordance with this policy for as long as it is combined.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Personal data Use of Advertisers</h3>
            <p className="mb-6">
              If we decide to engage advertisers to promote our products and services, the advertisers and their advertising networks may require anonymized personal data to serve relevant adverts to you and others.We will never disclose identifiable information about individuals to advertisers, but we may provide them with aggregate information about our users. We may also use such aggregate information to help our advertising partners provide a tailored and targeted campaign, relevant for a subsection of our users. In some instances, we may use personal data we have collected from you to enable our advertising partners to display their advertisement to their target audience.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Purposes for which we will use your personal data</h3>
            <p className="mb-6">
              We have set out below, in a table format, a description of all the ways we use your personal data as stated above, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact our Support Team if you need details about the specific legal ground we are relying on to process your personal data.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">5. MARKETING</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Use of Marketing Communication</h3>
            <p className="mb-6">
              We want to make it crystal clear how we use your data for marketing purposes and how you can &lsquo;opt-out&rsquo; from receiving any marketing communications from us whenever you want.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information relate of Marketing</h3>
            <p className="mb-6">
              We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. If you receive any marketing related communications such as email and wish to end your subscription, follow the unsubscribe links on any marketing message sent to you.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Promotion From Us</h3>
            <p className="mb-6">
              We may use your personal data (such as your Submitted Information, Location Information or transaction information) to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Purposes for which we will use your personal data</h3>
            <p className="mb-6">
              You will receive marketing communications from us if you have signed up to and/or utilise the WP Services and, in each case, you have not opted out of receiving marketing notifications.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">6. DISCLOSURE OF YOUR INFORMATION</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Processing Partners</h3>
            <p className="mb-6">
              We will disclose the data we collect from you to certain third parties who use personal data in delivering their services to us, they use data securely and confidentially and under strict contractual controls in accordance with data protection laws and enforced by WP.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Process of WP Services</h3>
            <p className="mb-6">
              We send personal data to the following sets of data processors in order to perform the WP Services: Fraud prevention agencies This is in order to verify your identity, protect against fraud, comply with anti-money laundering laws and to confirm your eligibility to use our products and services; Cloud storage providers This is in order to safely and securely store your data with WP; Banking and financial services partners Financial services providers that help us provide the WP Services; Credit reference agencies For the purpose of verifying your personal details. Please see section 4.2 above for more information; Card manufacturing/personalization and delivery companies For the purpose of creating your personalized WS card and delivering this to you at your requested address; Advertisers and analytics providers If we decide to engage advertisers to promote our products and services, the advertisers and their advertising networks may require anonymized personal data to serve relevant adverts to you and others. We will never disclose identifiable information about individuals to advertisers, but we may provide them with aggregate information about our users.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information disclosure of Various Circumstances</h3>
            <p className="mb-6">
              We may also disclose your personal information in the following circumstances: If we are under a duty to disclose or share your personal data in order to comply with any legal or regulatory obligation or request. In order to: (i) enforce or apply the General Terms of Service and/or the Business Terms and/or any other agreements between you and us or to investigate potential breaches; or (ii) protect the rights, property or safety of WP, our customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Use of Processing Transaction</h3>
            <p className="mb-6">
              We may share your data in order to provide certain services to you upon your request. For example, we will share your data with our credit referencing agency partners so that they may verify details you provided us when you submitted the application or card processor, in order to process card transactions. Your data will only be sent across in these instances once you have requested to utilize member services. You can withdraw your consent at any time by contacting support team, however, please be aware that this may impact your ability to use such services going forward. Please remember that when we share your data with our partners in such instances that you will also be subject to our partner&rsquo;s privacy policy as well.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information use of Promotion offers</h3>
            <p className="mb-6">
              From time-to-time, we may partner with certain third parties in order to offer you co-branded services or promotional offers. In order to provide these services to you and to allow us and any associated third party to optimize their/our offering to you, we will share some of your personal data with such third parties. We will obtain your express opt-in consent before we share your personal data with any company outside the WP group of companies for these purposes.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Consent Withdraw</h3>
            <p className="mb-6">
              You can withdraw your consent at any time after giving your explicit opt-in consent by contacting support team and letting us know.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">7. STORAGE SECURITY & INTERNATIONAL TRANSFERS</h2>
            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Data Use of Overseas</h3>
            <p className="mb-6">
              The data that we collect from you will be transferred to and stored at a destination within the Singapore. As we provide an international service your data may be processed outside of the Singapore in order for us to fulfil our contract with you to provide the WP Services. We will need to process your personal data in order for us. We will take all steps to ensure that your data is treated securely and in accordance with this privacy policy.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Information Storing & Security</h3>
            <p className="mb-6">
              All information you provide to us is stored on our secure servers. Any payment transactions carried out by us or our chosen third-party provider of payment processing services will be encrypted. Where we have given you (or where you have chosen) a password that enables you to access certain parts of our App, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Security Declaration of Data Use</h3>
            <p className="mb-6">
              Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Site or our App; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">8. RETAINING YOUR INFORMATION</h2>
            <p className="mb-6">
              In order to comply with applicable regulations, WP will retain personal data about you and your WP Transactions. We therefore use this retention requirement as a benchmark for all personal data that we receive from you. In order to not hold your information for longer than is strictly necessary we will not hold any of your personal data after the termination of our business relationship.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">9. YOUR LEGAL RIGHTS</h2>
            <p className="mb-6">
              You have rights under the data protection laws in relation to your personal data. Please see below to find out more about these rights: You have the right to:
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Purposes for which we will use your personal data</h3>
            <p className="mb-6">
              This enables you to receive a copy of the personal data we hold about you. If you require this, then please reach out to our support team either by phone or email.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Request correction of the personal data that we hold about you.</h3>
            <p className="mb-6">
              This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us. If you require this, then please reach out to our support team either by phone or email.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Request erasure of your personal data</h3>
            <p className="mb-6">
              This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request. Please note that these retention requirements supersede any right to erasure requests under applicable data protection laws.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Object to processing of your personal data</h3>
            <p className="mb-6">
              This is in situations where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights. Please note that these requirements supersede any right to objection requests under applicable data protection laws. If you object to the processing of certain data, then we may not be able to provide the WP Services and it is likely we will have to terminate your account.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Request restriction of processing of your personal data</h3>
            <p className="mb-6">
              This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data&rsquo;s accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it. Please note that any requests in relation to the restriction of the processing of your data means that we may not be able to perform the contract we have or are trying to enter with you (including the WP Services). In this case, we may have to cancel your use of the WP Services, but we will notify you if this is the case at the time.
            </p>

            <h3 className="text-xl font-serif text-gray-900 mt-8 mb-4">Withdraw consent at any time where we are relying on consent to process your personal data</h3>
            <p className="mb-6">
              However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide the WP Services to you. We will advise you if this is the case at the time you withdraw your consent.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">10. CHANGES TO PRIVACY POLICY</h2>
            <p className="mb-6">
              Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail and/or when you next log onto the App. The new terms may be displayed on-screen and you may be required to read and accept them to continue your use our App or the Services.
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6 uppercase tracking-wider">11. CONTACT</h2>
            <p className="mb-6">
              All questions relating to data and your privacy are welcomed and should be addressed to our support team. If you have any questions, comments or requests regarding this privacy policy then please contact WP Support Team via email at support@wisepremium.com
            </p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
