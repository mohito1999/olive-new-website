import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-stone-900">Terms of Service</h1>

            <div className="prose prose-stone">
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Olive AI ("we," "concerning your access to and use of our website and services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h2>
                <p className="mb-4">
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. User Representations</h2>
                <p className="mb-4">
                    By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You are not a minor in the jurisdiction in which you reside.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Prohibited Activities</h2>
                <p className="mb-4">
                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Termination</h2>
                <p className="mb-4">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
                <p className="mb-4">
                    If you have questions or comments about these Terms of Service, please contact us at:
                </p>
                <address className="not-italic">
                    Olive AI HQ<br />
                    Email: support@olive.ai
                </address>
            </div>
        </div>
    );
};

export default TermsOfService;
