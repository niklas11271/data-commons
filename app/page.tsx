
// Icons will be added as simple SVG elements for now

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation Header */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                <img
                    src="/images/UN Logo_Horizontal_English/Colour/UN Logo_Horizontal_Colour_English.svg"
                    alt="UN Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#about" className="text-gray-700 hover:text-un-blue px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#projects" className="text-gray-700 hover:text-un-blue px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                <a href="#news" className="text-gray-700 hover:text-un-blue px-3 py-2 rounded-md text-sm font-medium">News</a>
                                <a href="#contact" className="text-gray-700 hover:text-un-blue px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-un-blue to-faded-jade text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            UN Global Pulse
                            <span className="block text-2xl md:text-4xl font-light mt-2">Africa Hub</span>
                    </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            Fostering data discovery and access for social good across Africa. 
                            Supporting governments and organizations in developing data strategies 
                            and implementing data-driven solutions for sustainable development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#projects" className="bg-white text-un-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                                Explore Projects →
                            </a>
                            <a href="#about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-un-blue transition-colors">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-un-blue mb-2">8+</div>
                            <div className="text-gray-600">Years of Impact</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-un-blue mb-2">15+</div>
                            <div className="text-gray-600">Countries Engaged</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-un-blue mb-2">50+</div>
                            <div className="text-gray-600">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-un-blue mb-2">100+</div>
                            <div className="text-gray-600">Partners</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Africa Hub</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Established in 2015 in Uganda, the UN Global Pulse Africa Hub (formerly Pulse Lab Kampala) 
                                is dedicated to fostering data discovery and access for social good across the African continent.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We support governments in developing national data strategies, implement data use cases 
                                in cities, and collaborate on Ethical AI Frameworks. Our work spans from tourism statistics 
                                enhancement to analyzing public radio conversations to inform Sustainable Development Goals.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2 text-un-blue">📍</span>
                                    Based in Kampala, Uganda
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2 text-un-blue">🌍</span>
                                    Pan-African Focus
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-un-blue to-faded-jade rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg leading-relaxed mb-6">
                                To harness the power of data and artificial intelligence to accelerate 
                                progress towards the Sustainable Development Goals across Africa.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="mr-3 mt-1 text-yellow-300">🎯</span>
                                    <span>Supporting national data strategies</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="mr-3 mt-1 text-yellow-300">🛡️</span>
                                    <span>Promoting ethical AI frameworks</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="mr-3 mt-1 text-yellow-300">📈</span>
                                    <span>Enhancing data-driven decision making</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover how we're using data and AI to create positive impact across Africa
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-un-blue rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📚</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">National Data Strategy</h3>
                            <p className="text-gray-600 mb-4">
                                Supporting Uganda's government in developing a comprehensive national data strategy 
                                to enhance data governance and utilization.
                            </p>
                            <div className="text-sm text-un-blue font-medium">Uganda • 2023-2024</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-faded-jade rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📈</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tourism Statistics Enhancement</h3>
                            <p className="text-gray-600 mb-4">
                                Improving tourism data collection and analysis to support evidence-based 
                                policy making in the tourism sector.
                            </p>
                            <div className="text-sm text-un-blue font-medium">Uganda • 2022-2023</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-smoky rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">👥</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Spotlight Initiative</h3>
                            <p className="text-gray-600 mb-4">
                                Analyzing public radio conversations to understand perceptions on domestic violence 
                                and inform policy responses.
                            </p>
                            <div className="text-sm text-un-blue font-medium">Multi-country • 2021-2022</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section id="news" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Insights</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Stay updated with our latest research, publications, and insights from the Africa Hub
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-un-blue to-faded-jade"></div>
                            <div className="p-6">
                                <div className="text-sm text-un-blue font-medium mb-2">Research</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethical AI Frameworks for Africa</h3>
                                <p className="text-gray-600 mb-4">
                                    Developing comprehensive ethical guidelines for AI implementation across African contexts.
                                </p>
                                <a href="#" className="text-un-blue font-medium hover:underline">Read More →</a>
                            </div>
                        </article>
                        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-faded-jade to-camouflage-green"></div>
                            <div className="p-6">
                                <div className="text-sm text-un-blue font-medium mb-2">Publication</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Exchange Roadmaps</h3>
                                <p className="text-gray-600 mb-4">
                                    Creating frameworks for secure data sharing between Ghana and Uganda governments.
                                </p>
                                <a href="#" className="text-un-blue font-medium hover:underline">Read More →</a>
                            </div>
                        </article>
                        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-smoky to-pale-oyster"></div>
                            <div className="p-6">
                                <div className="text-sm text-un-blue font-medium mb-2">Insight</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">SDG Progress Through Data</h3>
                                <p className="text-gray-600 mb-4">
                                    How data-driven approaches are accelerating progress towards Sustainable Development Goals.
                                </p>
                                <a href="#" className="text-un-blue font-medium hover:underline">Read More →</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Interested in collaborating with us? We'd love to hear from you.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="mr-3 mt-1 text-un-blue">📍</span>
                                    <div>
                                        <div className="font-medium text-gray-900">Address</div>
                                        <div className="text-gray-600">Kampala, Uganda</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="mr-3 mt-1 text-un-blue">👥</span>
                                    <div>
                                        <div className="font-medium text-gray-900">Partnerships</div>
                                        <div className="text-gray-600">africa-hub@unglobalpulse.org</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-un-blue" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-un-blue" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-un-blue"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-un-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <img
                                src="/images/UN Logo_Horizontal_English/White/UN Logo_Horizontal_White_English.svg"
                                alt="UN Logo"
                                className="h-8 w-auto mb-4"
                            />
                            <p className="text-gray-400">
                                UN Global Pulse Africa Hub - Fostering data discovery and access for social good across Africa.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                                <li><a href="#news" className="text-gray-400 hover:text-white">News</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect</h3>
                            <div className="space-y-2">
                                <div className="text-gray-400">africa-hub@unglobalpulse.org</div>
                                <div className="text-gray-400">Kampala, Uganda</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 UN Global Pulse Africa Hub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            </div>
    );
}
