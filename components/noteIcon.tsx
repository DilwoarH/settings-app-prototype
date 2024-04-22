import Image from "next/image";
import React from "react";

const NoteIcon = () => {
  return (
    <>
      <Image
        height={20}
        width={20}
        src="/images/information.png"
        alt="info"
        style={{ objectFit: "contain" }}
      />
    </>
  );
};

export default NoteIcon;
