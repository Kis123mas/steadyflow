import Link from 'next/link'
import Footer from '@/components/footer'

export default function Services() {
    const services = [
        {
            icon: '💻',
            title: 'Custom Software Development',
            description: 'Tailor-made solutions that solve your unique business challenges with scalable architecture and future-proof technology.',
            features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
        },
        {
            icon: '📱',
            title: 'Web & Mobile Applications',
            description: 'Responsive, high-performance apps built with modern frameworks that engage users and drive results.',
            features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
        },
        {
            icon: '🌐',
            title: 'Web Development',
            description: 'Responsive, scalable web applications built to increase engagement, improve customer experience, and support business growth.',
            features: ['Frontend Development', 'Backend Development', 'E-commerce', 'CMS Development']
        },
        {
            icon: '🔄',
            title: 'Digital Transformation',
            description: 'Modernize operations through cloud migration, process automation, and strategic platform modernization to improve efficiency and resilience.',
            features: ['Process Automation', 'Cloud Migration', 'Legacy System Upgrade', 'Digital Strategy']
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Intuitive, beautiful interfaces crafted through user research, wireframing, and prototyping for maximum engagement.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: '🔧',
            title: 'Maintenance & Support',
            description: 'Ongoing optimization, updates, and technical support to keep your digital assets running smoothly.',
            features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Technical Support']
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        What We Build
                        <span className="text-cyan-400 block">Custom Software • Web & Mobile • UI/UX</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Steadyflow delivers custom software, stunning websites, and seamless mobile apps with precision engineering and creative design.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-8 text-gray-300">
                        <p>We combine technical excellence with practical business insight to deliver measurable outcomes.</p>
                        <ul className="mt-4 flex flex-wrap gap-6 justify-center text-sm text-gray-400">
                            <li className="font-medium">Proven delivery</li>
                            <li className="font-medium">Security-first approach</li>
                            <li className="font-medium">Scalable architecture</li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-white font-medium mb-2">Includes:</h4>
                                    <ul className="space-y-1">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-400 text-sm flex items-center">
                                                <div className="w-1 h-1 bg-teal-400 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-end pt-4 border-t border-gray-700">
                                    <Link
                                        href="https://wa.me/2349155326252"
                                        className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-400 hover:to-blue-700 transition-colors duration-200"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Case Studies</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">Examples of how we deliver measurable business outcomes through software and digital strategy.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                            <h3 className="text-white font-semibold mb-2">Global logistics provider</h3>
                            <p className="text-gray-300 text-sm mb-2">Challenge: Fragmented legacy systems caused delays and operational complexity.</p>
                            <p className="text-gray-300 text-sm">Solution: Designed and delivered a centralized logistics platform integrating tracking, automation, and real-time reporting.</p>
                            <p className="text-teal-400 text-sm mt-3 font-medium">Result: Reduced processing time and improved on-time deliveries.</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                            <h3 className="text-white font-semibold mb-2">Fintech startup</h3>
                            <p className="text-gray-300 text-sm mb-2">Challenge: Low user activation due to friction in onboarding and product complexity.</p>
                            <p className="text-gray-300 text-sm">Solution: Delivered a streamlined onboarding flow and optimized mobile experience focused on conversion.</p>
                            <p className="text-cyan-400 text-sm mt-3 font-medium">Result: Improved activation and engagement metrics.</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                            <h3 className="text-white font-semibold mb-2">Regional retail chain</h3>
                            <p className="text-gray-300 text-sm mb-2">Challenge: Inventory inaccuracies and stockouts impacted sales and customer experience.</p>
                            <p className="text-gray-300 text-sm">Solution: Implemented a centralized inventory and forecasting system integrated with point-of-sale.</p>
                            <p className="text-blue-400 text-sm mt-3 font-medium">Result: Reduced stockouts and improved inventory turnover.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-cyan-400/20 mb-8">
                            <span className="text-sm font-medium text-teal-300">Our Process</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            A structured approach to delivering exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {[
                            { step: '01', title: 'Discover', desc: 'We dive deep into your goals, audience, and requirements to build the right strategy.' },
                            { step: '02', title: 'Design', desc: 'Our UI/UX team creates wireframes and prototypes for your approval.' },
                            { step: '03', title: 'Develop', desc: 'Our full-stack team codes with clean architecture and best practices.' },
                            { step: '04', title: 'Deliver', desc: 'Thorough testing, deployment, and launch with full documentation.' },
                            { step: '05', title: 'Support', desc: 'Continuous maintenance, updates, and improvements.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss your project. No obligation, just a friendly conversation about your needs.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-700 transition-colors duration-200"
                        >
                            Schedule a Free Consultation
                        </Link>
                        <Link
                            href="https://wa.me/message/5WGMY6PC2CO2B1"
                            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-200"
                        >
                            Chat with Our Team
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
