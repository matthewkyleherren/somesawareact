import { InView } from "react-intersection-observer";
import hero_desktop from "../../assets/images/hero_desktop.webp";
export const Intro = () => {
  return (
    <>
      <InView threshold="0" triggerOnce>
        {({ inView, ref }) => (
          <>

            <div ref={ref} className="headline">
              <div>
                <h1
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  <span class="hero gradient-text1">Development:</span>
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  <span class="hero gradient-text2">Powered by</span>
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  <span class="hero gradient-text3">Education.</span>
                </h1>
              </div>
              <div
                style={{
                  transform: inView ? "translateY(0)" : "translateY(200%)",
                  lineHeight: inView ? "1.2em" : "3em",
                }}
                className="leading-text"
              >
                <span class="color: grey; font-weight:500;">
                  We are committed to mobilizing Africa's future by ensuring quality edcuation for its youth.
                </span>
              </div>
              
            </div>
            <div className="bottom-row">
              <div className="cricles">
                <div>
                  <noscript>cricle</noscript>
                </div>
                <div>
                  <noscript>cricle</noscript>
                </div>
                <div>
                  <noscript>cricle</noscript>
                </div>
              </div>
              
              <div
                style={{
                  background: inView
                    ? "linear-gradient(transparent 10% , #fff 40%)"
                    : "linear-gradient(transparent 10% , #fff 80% )",
                  transform: inView ? "translateY(100%)" : "translateY(-50%)",
                  height: inView ? "100%" : "500%",
                }}
                className="leading-text-animation-support"
              ></div>
            </div>
          </>
        )}
      </InView>
    </>
  );
};
