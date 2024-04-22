import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PageHeadings = ({ text }: { text: string }) => {
  const router = useRouter();

  return (
    <>
      <div className="commen_header">
        <a
          onClick={() => {
            router.back();
          }}
        >
          <Image
            src="/images/back-arrow.png"
            alt="back-arrow"
            width={30}
            height={30}
          />
        </a>
        <h3>{text}</h3>
        {text === "Attainment" && (
          <a
            // onClick={() => {
            //   router.back();
            // }}
          >
            <Image
              src="/images/log-out.png"
              alt="back-arrow"
              width={30}
              height={30}
            />
            <p>Logout</p>
            <p>Miss Mackay</p>
          </a>
        )}
      </div>
    </>
  );
};

export default PageHeadings;
