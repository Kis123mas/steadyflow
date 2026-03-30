import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo and Name */}
                    <div className="flex items-center">
                        <Image
                            src="/icon/steadyflowlogo.png"
                            alt="Steadyflow Logo"
                            width={45}
                            height={45}
                            className="object-contain"
                        />
                        <span className="text-white ml-3 text-xl font-bold tracking-tight">Steadyflow</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 text-sm font-medium order-3 md:order-2">
                        © {new Date().getFullYear()} Steadyflow. All rights reserved.
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-end gap-2 order-2 md:order-3">
                        <a href="mailto:steadflowdevelopment@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            steadflowdevelopment@gmail.com
                        </a>
                        <a href="tel:09155326252" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            09155326252
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
