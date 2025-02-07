import { useEffect, useRef } from "react";
import "../css/Gallery.css"
import { Link, Element } from "react-scroll";
import { FaAngleDown } from "react-icons/fa";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { motion } from 'framer-motion';

const images = [
  { largeURL: "/altos-fotos/1.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/2.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/1.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/3.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/2.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/4.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/3.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/5.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/5.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/6.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/4.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/7.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/8.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/8.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/9.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/9.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/10.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/10.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/11.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/11.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/13.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/12.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/12.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/13.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/14.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/14.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/15.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/15.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/16.jpg", width: 1200, height: 800 },
  { largeURL: "/altos-fotos/16.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/17.jpg", width: 1200, height: 800 },
  // { largeURL: "/altos-fotos/17.jpg", thumbnailURL: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/392/18.jpg", width: 1200, height: 800 },
];
const galleryID = "hotel-gallery";
export default function Gallery() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Reproducción automática bloqueada:", error);
      });
    }
  }, []);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.on("uiRegister", function () {
      lightbox.pswp.ui.registerElement({
        name: "download-button",
        order: 8,
        isButton: true,
        tagName: "a",
        html: {
          isCustomSVG: true,
          inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
          outlineID: "pswp__icn-download",
        },
        onInit: (el, pswp) => {
          el.setAttribute("download", "");
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener");

          pswp.on("change", () => {
            el.href = pswp.currSlide.data.src;
          });
        },
      });
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="gallery-container">
      <div className="video-container">
        <video ref={videoRef} loop muted>
          <source src="/altos-fotos/video1.mp4" type="video/mp4" preload="auto" />
          Tu navegador no soporta este video.
        </video>
        <Link to='gallery' offset={-150} smooth={true} duration={1500}>
          <FaAngleDown className='down-section' />

        </Link>
      </div>

      <Element name="gallery">
        <div id={galleryID} className="pswp-gallery">
          {images.map((image, index) => (
            <a
              key={`image-${index}`}
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4 }}
              >

                <img
                  className="gallery-thumbnail"
                  src={image.largeURL}
                  alt={`Imagen ${index + 1} del Hotel Altos del Iguazú`}
                  loading="lazy" 
                />
              </motion.div>
            </a>
          ))}
        </div>
      </Element>
      <section className="instagram-feed">
        <div className="elfsight-app-2c3c732b-c214-4507-b61e-56430936c462" data-elfsight-app-lazy></div>
      </section>
    </section>
  );
}