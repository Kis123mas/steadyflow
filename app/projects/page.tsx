import Link from 'next/link'
import Footer from '@/components/footer'

export default function Projects() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                        Our Portfolio & <span className="text-cyan-400">Expertise</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        With over a decade of experience, we have successfully delivered hundreds of projects across various industries. From enterprise solutions to innovative startups, we have the expertise to bring any vision to life.
                    </p>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-8">
                                <span className="text-sm font-medium text-cyan-300">Unmatched Versatility</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                We Build Any Type of <span className="text-cyan-400">Digital Solution</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Our team has a proven track record of building countless projects over the years, spanning across multiple domains and technologies. Whether you need a complex enterprise system, a high-performance mobile app, or a cutting-edge web platform, we have the experience and technical depth to deliver exceptional results.
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 mt-1">✓</span>
                                    <span>Enterprise-grade software and complex system integrations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 mt-1">✓</span>
                                    <span>Scalable web applications and high-traffic platforms</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 mt-1">✓</span>
                                    <span>Intuitive mobile experiences for iOS and Android</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 mt-1">✓</span>
                                    <span>Digital transformation and legacy system modernization</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all group">
                                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">100+</div>
                                <div className="text-gray-400 font-medium">Projects Delivered</div>
                            </div>
                            <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all group">
                                <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">10+</div>
                                <div className="text-gray-400 font-medium">Years Experience</div>
                            </div>
                            <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all group">
                                <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">50+</div>
                                <div className="text-gray-400 font-medium">Happy Clients</div>
                            </div>
                            <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                                <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">24/7</div>
                                <div className="text-gray-400 font-medium">Expert Support</div>
                            </div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss your next project. No obligation, just a friendly conversation about your needs.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-700 transition-colors duration-200"
                        >
                            Schedule a Free Consultation
                        </Link>
                        <Link
                            href="https://wa.me/message/5WGMY6PC2CO2B1"
                            target="_blank"
                            rel="noopener noreferrer"
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