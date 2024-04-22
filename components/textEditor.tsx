import Image from "next/image";
import React from "react";

const TextEditor = () => {
  return (
    <>
      <div>
        <Image
          height={300}
          width={600}
          src="/images/text-editor.png"
          alt="info"
          style={{ objectFit: "contain" }}
        />
      </div>
      <span style={{ color: "blue", fontWeight: "600" }}>Placeholders:</span>
      <p>
        [[behaviourType]] [[StudentFullNamesCommaSeprate]] [[behaviourLink]]
        [[SchoolName]] [[behaviorCategory]] [[behaviourDetention]]
        [[behaviourDetentionWhen]] [[behaviourDetentionLenght]]
        [[behaviourFullName]] [[studentYearGroup]] [[studentRegGroup]]
      </p>
      <div className="appraisal-acc-3-btn">
        <a className="cancle_btn">Cancel</a>
        <a className="save_btn">Save </a>
      </div>
    </>
  );
};

export default TextEditor;
