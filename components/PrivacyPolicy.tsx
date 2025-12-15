import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-stone-900">Privacy Policy</h1>

            <div className="prose prose-stone">
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to Olive AI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
                <p className="mb-4">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information.</li>
                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Your Information</h2>
                <p className="mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Create and manage your account.</li>
                    <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                    <li>Email you regarding your account or order.</li>
                    <li>Enable user-to-user communications.</li>
                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
                <p className="mb-4">
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                    <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
                <p className="mb-4">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <address className="not-italic">
                    Olive AI HQ<br />
                    Email: support@olive.ai
                </address>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
