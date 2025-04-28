import { Head } from '@inertiajs/react';
import { useEffect, ReactNode } from 'react';
import Navbar from '@/components/welcomePage/Navbar';
import Hero from '@/components/welcomePage/Hero';
import About from '@/components/welcomePage/About';
import Services from '@/components/welcomePage/Services';
import Feedback from '@/components/welcomePage/Feedback';
import Footer from '@/components/welcomePage/Footer';
import { initScrollAnimations } from '@/utils/animations';

// Import custom white theme CSS
import '@/../../resources/css/white-theme.css';

// Create a simplified background component with white background
interface WhiteBackgroundProps {
    children: ReactNode;
}

const WhiteBackground = ({ children }: WhiteBackgroundProps) => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* White background base */}
            <div className="fixed inset-0 bg-white z-0"></div>

            {/* Content */}
            <div className="relative z-20">{children}</div>
        </div>
    );
};

export default function Welcome() {
    useEffect(() => {
        // Initialize animations when component mounts
        initScrollAnimations();

        // Override any link clicks to prevent actual navigation
        const handleLinkClick = (e: MouseEvent) => {
            // Check if it's a link or a button that would navigate
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' ||
                (target.tagName === 'BUTTON' && target.getAttribute('href'))) {
                e.preventDefault();
                // You can add a console message for debugging
                console.log('Navigation prevented');
            }
        };

        // Add event listener
        document.addEventListener('click', handleLinkClick);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);

    return (
        <>
            <Head title="Seigler's Karate Center">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <WhiteBackground>
                <div className="flex min-h-screen flex-col text-black">
                    <Navbar />
                    <Hero />
                    <About />
                    <Services />
                    <Feedback />
                    {/* Removed additional sections to simplify the landing page */}
                    <Footer />
                </div>
            </WhiteBackground>
        </>
    );
}
