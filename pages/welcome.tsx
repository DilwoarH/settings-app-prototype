import Image from "next/image"
import React from "react"

import "../styles/css/main.css"
import AppLayout from "@/components/layout/app-layout"

const Welcome = (props: any) => {
  return (
    <AppLayout title="Welcome">
      <section className="Welcome_page_section">
        <div className="custom_container">
          <div className="Welcome_page">
            <figure className="logo">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={160}
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div className="Welcome_page_data">
              <figure>
                <Image
                  src="/images/Artwork.png"
                  alt="art"
                  width={150}
                  height={190}
                  style={{ objectFit: "contain" }}
                />
              </figure>
              <h5>welcome to</h5>
              <h2>Progress teaching</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <a
                className="Welcome_page_continue_btn"
                onClick={() => props.router.push("./login")}
              >
                Continue
              </a>
              <a
                className="Welcome_page_signin_btn"
                onClick={() => props.router.push("./login")}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}

export default Welcome
