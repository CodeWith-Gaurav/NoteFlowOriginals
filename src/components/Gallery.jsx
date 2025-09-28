// src/components/Gallery.jsx

import Section from "./Section";
import Heading from "./Heading";
import DomeGallery from "./DomeGallery"; // Import the gallery component
import { galleryImages } from "../constants"; // Import the images

const Gallery = () => {
    return (
        <Section>
            <div className="container">
                <Heading
                    title="Explore a World of AI-Generated Visuals"
                    text="Our AI transforms complex data into stunning, easy-to-understand infographics and visualizations."
                />

                <div className="relative h-screen max-h-[65rem]">
                    <DomeGallery images={galleryImages}
                        autoRotate={true}
                        autoRotateSpeed={0.05}
                        pauseOnHover={true}
                        overlayBlurColor="#0B031A"

                    />
                </div>
            </div>
        </Section>
    );
};

export default Gallery;