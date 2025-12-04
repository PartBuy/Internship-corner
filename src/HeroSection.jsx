import React from "react";
import "./HeroSection.css";

function HeroSection({
  title = "Welcome",
  subtitle = "A short, descriptive subheadline goes here.",
  ctaText = "Get Started",
  gifSrc = "",
  videoFallback = "",
}) {

  const webpSrc =
    gifSrc && gifSrc.includes(".")
      ? gifSrc.replace(/\.[^/.]+$/, ".webp")
      : "";

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            {title}
          </h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__actions">
            <button className="hero__cta" type="button" aria-label={ctaText}>
              {ctaText}
            </button>
          </div>
        </div>

        <div className="hero__media" aria-hidden="false">
          {videoFallback ? (
 
            <video
              className="hero__video"
              controls
              muted
              loop
              playsInline
              width="640"
              height="360"
              poster={gifSrc}
            >
              <source src={videoFallback} type="video/mp4" />
              <picture>
                {webpSrc && (
                  <source srcSet={webpSrc} type="image/webp" />
                )}
                <img
                  src={gifSrc}
                  alt={title}
                  loading="lazy"
                  width="640"
                  height="360"
                />
              </picture>
            </video>
          ) : (
       
            <picture>
              {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
              <img
                src={gifSrc}
                alt={title}
                loading="lazy"
                width="640"
                height="360"
              />
            </picture>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;