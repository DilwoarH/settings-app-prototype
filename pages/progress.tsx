import React, { useState } from "react";
import NoteIcon from "@/components/noteIcon";
import PageHeadings from "@/components/pageHeadings";
import { Collapse, Radio, Switch, Table, Input, Space } from "antd";
import Image from "next/image";
import "../styles/css/main.css";
import "../styles/css/attainments.css";

const Progress = () => {
  const { Panel } = Collapse;
  const [grade, setGrade] = useState("");
  const [externalTargets, setExternalTargets] = useState("");
  const [flightPathsForAge, setFlightPathsForAge] = useState("");
  const [assessmentStyle, setAssessmentStyle] = useState("");
  const [graeScale, setGraeScale] = useState("");
  const [gradeType, setGradeType] = useState("");
  const [inputGrades, setInputGrades] = useState("");
  const [importEnternalTargets, setImportEnternalTargets] = useState("");
  const [importEnternalTargets2, setImportEnternalTargets2] = useState("");
  const [importEnternalTargets3, setImportEnternalTargets3] = useState("");
  const [filepathGovernmentExpectedKS4, setFilepathGovernmentExpectedKS4] =
    useState("");
  const [filePathForAgeRelated, setFilePathForAgeRelated] = useState("");
  const [filePathForGovernment, setFilePathForGovernment] = useState("");
  const [filePathForExternalTargets, setFilePathForExternalTargets] =
    useState("");
  const [grade1, setGrade1] = useState("");
  const [grade2, setGrade2] = useState("");
  const [grade3, setGrade3] = useState("");
  const [grade4, setGrade4] = useState("");
  const [grade5, setGrade5] = useState("");
  const [grade6, setGrade6] = useState("");
  const [grade7, setGrade7] = useState("");
  const [grade8, setGrade8] = useState("");
  const [grade9, setGrade9] = useState("");
  const [flightPathsForExternalTargets, setFlightPathsForExternalTargets] =
    useState("");
  const [schoolExpectedTarget, setSchoolExpectedTarget] = useState("");
  const [schoolExpectedTargetKS4, setSchoolExpectedTargetKS4] = useState("");
  const [externalTargetsKS4, setExternalTargetsKS4] = useState("");
  const [vaType, setVaType] = useState("");
  const [areaImprovement, setAreaImprovement] = useState("");
  const [filePathForGovernmentKS5, setFilePathForGovernmentKS5] = useState("");
  const [filePathForExternalTargetsKS4, setFilePathForExternalTargetsKS4] =
    useState("");
  const [gradesPredictedAttainment, setGradesPredictedAttainment] =
    useState("");
  const [au1, setAu1] = useState<string>("-2");
  const [au2, setAu2] = useState<string>("-1.67");
  const [sp1, setSp1] = useState<string>("-1.33");
  const [sp2, setSp2] = useState<string>("-1");
  const [su1, setSu1] = useState<string>("-0.67");
  const [su2, setSu2] = useState<string>("-0.33");

  const filePathColoums: Array<object> = [
    {
      title: "Au1",
      dataIndex: "au1",
      width: "40%",
      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="number" className="table_input" />
      //   </>
      // ),
    },
    {
      title: "Au2",
      dataIndex: "au2",
      defaultSortOrder: "descend",
      width: "60%",

      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="number" className="table_input" />
      //   </>
      // ),
    },
    {
      title: "Sp1",
      dataIndex: "sp1",
      defaultSortOrder: "descend",
      width: "60%",

      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="number" className="table_input" />
      //   </>
      // ),
    },
    {
      title: "Sp2",
      dataIndex: "sp2",
      defaultSortOrder: "descend",
      width: "60%",

      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="number" className="table_input" />
      //   </>
      // ),
    },
    {
      title: "Su1",
      dataIndex: "su1",
      defaultSortOrder: "descend",
      width: "60%",

      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="number" className="table_input" />
      //   </>
      // ),
    },
    {
      title: "Su2",
      dataIndex: "su2",
      defaultSortOrder: "descend",
      width: "60%",

      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="number" className="table_input" />
      //   </>
      // ),
    },
    {
      title: "EOY target",
      dataIndex: "eOyTarget",
      defaultSortOrder: "descend",
      width: "60%",
      sorter: (a: any, b: any) => a.age - b.age,
    },
  ];
  const filePathData = [
    {
      au1: (
        <>
          <input
            type="number"
            className="table_input"
            value={au1}
            onChange={(e) => setAu1(e.target.value)}
          />
        </>
      ),
      au2: (
        <>
          <input
            type="number"
            className="table_input"
            value={au2}
            onChange={(e) => setAu2(e.target.value)}
          />
        </>
      ),
      sp1: (
        <>
          <input
            type="number"
            className="table_input"
            value={sp1}
            onChange={(e) => setSp1(e.target.value)}
          />
        </>
      ),
      sp2: (
        <>
          <input
            type="number"
            className="table_input"
            value={sp2}
            onChange={(e) => setSp2(e.target.value)}
          />
        </>
      ),
      su1: (
        <>
          <input
            type="number"
            className="table_input"
            value={su1}
            onChange={(e) => setSu1(e.target.value)}
          />
        </>
      ),
      su2: (
        <>
          <input
            type="number"
            className="table_input"
            value={su2}
            onChange={(e) => setSu2(e.target.value)}
          />
        </>
      ),
      eOyTarget: "TBC",
    },
  ];

  return (
    <>
      <div className="common_class_for_bottom_stick">
        <div className="site_setting_page_section">
          <div className="custom_container">
            <PageHeadings text={"Progress"} />
            <Collapse
              expandIcon={(panelProps) => {
                return (
                  <>
                    {panelProps?.isActive ? (
                      <svg
                        width="18"
                        height="9"
                        viewBox="0 0 18 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.07992 8.04999L7.59992 1.52999C8.36992 0.759987 9.62992 0.759987 10.3999 1.52999L16.9199 8.04999"
                          stroke="#1F854B"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="9"
                        viewBox="0 0 18 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.9201 0.949997L10.4001 7.47C9.63008 8.24 8.37008 8.24 7.60008 7.47L1.08008 0.949997"
                          stroke="#1F854B"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                );
              }}
              expandIconPosition="end"
            >
              <Panel
                header={
                  <div className="card-title" id="acc-2-heading">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#acc-2"
                      aria-expanded="true"
                      aria-controls="acc-2"
                    >
                      <figure>
                        <Image
                          height={70}
                          width={50}
                          src="/images/Icon2.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                        <span>Primary Methodology</span>
                      </figure>
                    </button>
                  </div>
                }
                key="1"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        Schools can use a 3 or 4 point scale for primary
                        assessment. The use of &apos;year group&apos; grading,
                        set out below, allows for effective tracking of students
                        who are significantly below Age Related Expecations
                        (&apos;ARE&apos;).
                      </p>
                      <p>
                        With this grading style, each year group has a specific
                        gradeset, and teachers can award any grade from current
                        or lower years.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>How many grades will you use?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setGrade(e.target.value)}
                      value={grade}
                    >
                      <Space direction="vertical">
                        <Radio value={"3 (Gd, Ex, Wt)"} name="grade">
                          3 (Gd, Ex, Wt)
                        </Radio>
                        <Radio value={"4 (Gd, Ex+, Ex, Wt)"} name="grade">
                          4 (Gd, Ex+, Ex, Wt)
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {/* <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        Schools can use a 3 or 4 point scale for primary
                        assessment. The use of &apos;year group&apos; grading, set out
                        below, allows for effective tracking of students who are
                        significantly below Age Related Expecations (&apos;ARE&apos;).
                      </p>
                      <p>
                        With this grading style, each year group has a specific
                        gradeset, and teachers can award any grade from current
                        or lower years.
                      </p>
                    </div>
                  </div> */}
                  <p className="mt-4">
                    Progress is calculated in a number of ways in Primary.
                  </p>
                  <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <ul className="ml-4">
                        <li>
                          <b>Method 1: </b>
                          Progress is measured by analysing students&apos;
                          grades against the cohort&apos;s ARE, which is always
                          &apos;Expected&apos;
                        </li>
                        <li>
                          <b>Method 2: </b>KS2 pupils&apos; prior attainment
                          groups, assigned at the end of KS1, generate targets
                          for Reading, Writing, and Maths (&apos;RWM&apos;). In
                          Years 5 and 6, RWM attainment can be measured relative
                          to these targets.
                        </li>
                        <li>
                          <b>Method 3: </b>Progress is measured by analysing
                          students&apos; grades against a target grade imported
                          from an external source such as FFT.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      In addition to Methods 1 and 2, which are default, would
                      you like to import external targets? If you select
                      &apos;yes&apos;, you can import these on the
                      &apos;Attainment Import&apos; screen once your pupil
                      details have been imported from your MIS.{" "}
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setExternalTargets(e.target.value)}
                      value={externalTargets}
                    >
                      <Space direction="vertical">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {/* <div className="mt-4">
                    <h6>Will you collect an Area for Improvement?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setAreaImprovement(e.target.value)}
                      value={areaImprovement}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div> */}
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        The platform allows schools to set a flightpath to their
                        pupils&apos; Age Related Expectations and external
                        targets. The target rises incrementally by assessment
                        term so that schools can check whether their pupils are
                        &apos;on track&apos;.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      Would you like to use flightpaths for Age Related
                      Expectations in Primary?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setFlightPathsForAge(e.target.value)}
                      value={flightPathsForAge}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {externalTargets === "Yes" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths for external targets
                        in Primary?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) =>
                          setFlightPathsForExternalTargets(e.target.value)
                        }
                        value={flightPathsForExternalTargets}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {flightPathsForExternalTargets === "Yes" && (
                    <>
                      <div className="d-flex align-items-center mb-1 mt-4">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="ml-3 mt-8">
                          <p>
                            Please set your flightpath increaments below. The
                            numbers will be interpreted with reference to a
                            grade&apos;s value, e.g. -0.33 means that the target
                            for a term is a third of a grade below the EOY
                            target.
                          </p>
                        </div>
                      </div>
                      <Table
                        columns={filePathColoums}
                        dataSource={filePathData}
                        pagination={false}
                        className="mt-4"
                        scroll={{ x: 400 }}
                      />
                    </>
                  )}
                </div>
              </Panel>
              <Panel
                header={
                  <div className="card-title" id="acc-2-heading">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#acc-2"
                      aria-expanded="true"
                      aria-controls="acc-2"
                    >
                      <figure>
                        <Image
                          height={70}
                          width={50}
                          src="/images/Icon2.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                        <span>KS3 Methodology</span>
                      </figure>
                    </button>
                  </div>
                }
                key="7"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        ProgressTeaching offers two assessment styles at KS3.
                      </p>
                      <ul className="ml-4">
                        <li>
                          <b>Primary style: </b>
                          current attainment is recorded on a four or five-point
                          scale​. Schools can name the grades on this scale​.
                        </li>
                        <li>
                          <b>KS4 style: </b> students&apos; current attainment
                          is assessed using the GCSE 9-1 grades.
                        </li>
                      </ul>
                      <p className="mt-4">
                        We believe that the ‘primary style’ methodology best
                        supports KS3 as it:
                      </p>
                      <ul className="ml-4">
                        <li>
                          supports a clear focus on evaluating pupils&apos;
                          understanding of the curriculum
                        </li>
                        <li>
                          allows schools to track a pupil’s progress from their
                          starting points
                        </li>
                        <li>supports clear communication with parents</li>
                        <li>
                          supports observers when providing teachers with
                          feedback.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>Which assessment style will you use?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setAssessmentStyle(e.target.value)}
                      value={assessmentStyle}
                    >
                      <Space direction="vertical">
                        <Radio value={"Primary style"} name="grade">
                          Primary style
                        </Radio>
                        <Radio value={"KS4 style"} name="grade">
                          KS4 style
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {assessmentStyle === "Primary style" && (
                    <>
                      <div className="d-flex align-items-center mb-1 mt-4">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="ml-4">
                          <p>
                            The gradescales available for the primary style
                            methodology are as follows:
                          </p>
                          <ul className="ml-4">
                            <li>
                              4 point scale
                              <ul className="ml-4">
                                <li>Excellent (E)</li>
                                <li>Secure (S)</li>
                                <li>Developing (D)</li>
                                <li>Foundation (F)</li>
                              </ul>
                            </li>

                            <li>
                              5 point scale
                              <ul className="ml-4">
                                <li>Excellent (E)</li>
                                <li>Secure (S)</li>
                                <li>Developing (D)</li>
                                <li>Foundation (F)</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h6>What grade scale are you using?</h6>
                        <Radio.Group
                          className="mt-4"
                          onChange={(e) => setGraeScale(e.target.value)}
                          value={graeScale}
                        >
                          <Space direction="horizontal">
                            <Radio value={"4 point scale"} name="grade">
                              4 point scale
                            </Radio>
                            <Radio value={"5 point scale"} name="grade">
                              5 point scale
                            </Radio>
                          </Space>
                        </Radio.Group>
                      </div>
                    </>
                  )}
                  {assessmentStyle === "KS4 style" && (
                    <>
                      <div className="d-flex align-items-center mb-1 mt-4">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="ml-4">
                          <p>
                            Most schools choose to use fine grades to give a
                            more nuanced picture, but whole grades can also be
                            used. Fine grades represent one third of a whole
                            grade. An example of the two options is outlined
                            below.​
                          </p>
                          <ul className="ml-4">
                            <li>
                              Whole grades: 3 (3.00), 4 (4.00), 5 (5.00) etc.
                            </li>
                            <li>Fine grades: 4- (3.67), 4 (4.00), 4+ (4.33)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h6>
                          Will you use whole grades or fine grades for current
                          and predicted attainment?
                        </h6>
                        <Radio.Group
                          className="mt-4"
                          onChange={(e) => setGradeType(e.target.value)}
                          value={gradeType}
                        >
                          <Space direction="horizontal">
                            <Radio value={"Whole grades"} name="grade">
                              Whole grades
                            </Radio>
                            <Radio value={"Fine grades"} name="grade">
                              Fine grades
                            </Radio>
                          </Space>
                        </Radio.Group>
                      </div>
                    </>
                  )}
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-4">
                      <p>
                        Regardless of the KS3 assessment methodology a school
                        chooses, the current attainment grades can either be
                        directly input by a teacher, or be generated by
                        ProgressTeaching based off of an exam % score entered by
                        the teacher. If the latter is chosen, then the school
                        must provide the grade boundaries for converting the
                        exam % to the current attainment grade​.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>How will staff input grades?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setInputGrades(e.target.value)}
                      value={inputGrades}
                    >
                      <Space direction="vertical">
                        <Radio
                          value={"input the current grade themselves"}
                          name="grade"
                        >
                          input the current grade themselves
                        </Radio>
                        <Radio
                          value={
                            "input an assessment % which ProgressTeaching will then use to generate the current grade"
                          }
                          name="grade"
                        >
                          input an assessment % which ProgressTeaching will then
                          use to generate the current grade
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {inputGrades ===
                    "input an assessment % which ProgressTeaching will then use to generate the current grade" && (
                    <div className="mt-4">
                      <h6>
                        What are the boundaries for each grade? These must be
                        standardised across subjects:
                      </h6>
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="9-%"
                        value={grade9}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade9(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="8-%"
                        value={grade8}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade8(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="7-%"
                        value={grade7}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade7(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="6-%"
                        value={grade6}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade6(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="5-%"
                        value={grade5}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade5(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="4-%"
                        value={grade4}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade4(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="3-%"
                        value={grade3}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade3(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="2-%"
                        value={grade2}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade2(e.target.value);
                          }
                        }}
                      />
                      <Input
                        size="large"
                        className="mt-4 text_input"
                        placeholder="1-%"
                        value={grade1}
                        type="number"
                        onChange={(e) => {
                          if (Number(e.target.value) <= 100) {
                            setGrade1(e.target.value);
                          }
                        }}
                      />
                    </div>
                  )}
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-4">
                      <p>Progress is calculated a number of ways at KS3:</p>
                      <ul className="ml-4">
                        <li>
                          <b>Method 1 (&apos;Primary Expected&apos;):</b> If
                          using the Primary grading style, progress can be
                          measured by analysing students&apos; grades against
                          the cohort&apos;s ARE, which is always
                          &apos;Expected&apos;.
                        </li>
                        <li>
                          <b>Method 2 (&apos;Government Expected&apos;):</b> If
                          using the KS4 grading style, progress can be measured
                          using KS2 scaled scores. ProgressTeaching generates an
                          expected grade at the end of KS4 using the government
                          tables.
                        </li>
                        <li>
                          <b>Method 3 (&apos;External&apos;):</b> Progress is
                          measured by analysing students&apos; progress against
                          a target grade imported from an external source such
                          as FFT or school-generated grades.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      In addition to Methods 1 and 2, which are default
                      depending on grade style, would you like to import
                      external targets? If you select &apos;yes&apos;, you can
                      import these on the &apos;Attainment Import&apos; screen
                      once your pupil details have been imported from your MIS.
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setImportEnternalTargets(e.target.value)}
                      value={importEnternalTargets}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>

                  {assessmentStyle === "Primary style" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths for Age Related
                        Expectations in KS3?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) =>
                          setFilePathForAgeRelated(e.target.value)
                        }
                        value={filePathForAgeRelated}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {assessmentStyle === "KS4 style" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths to government
                        expectation targets in KS3?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) =>
                          setFilePathForGovernment(e.target.value)
                        }
                        value={filePathForGovernment}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {importEnternalTargets === "Yes" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths for external targets
                        in KS3?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) =>
                          setFilePathForExternalTargets(e.target.value)
                        }
                        value={filePathForExternalTargets}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {filePathForExternalTargets === "Yes" && (
                    <>
                      <div className="d-flex align-items-center mb-1 mt-4">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="ml-3 mt-8">
                          <p>
                            Please set your flightpath increaments below. The
                            numbers will be interpreted with reference to a
                            grade&apos;s value, e.g. -0.33 means that the target
                            for a term is a third of a grade below the EOY
                            target.
                          </p>
                        </div>
                      </div>
                      <Table
                        columns={filePathColoums}
                        dataSource={filePathData}
                        pagination={false}
                        className="mt-4"
                        scroll={{ x: 400 }}
                      />
                    </>
                  )}
                </div>
              </Panel>
              <Panel
                header={
                  <div className="card-title" id="acc-2-heading">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#acc-2"
                      aria-expanded="true"
                      aria-controls="acc-2"
                    >
                      <figure>
                        <Image
                          height={70}
                          width={50}
                          src="/images/Icon2.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                        <span>KS4 Methodology</span>
                      </figure>
                    </button>
                  </div>
                }
                key="8"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        Most schools choose to use fine grades to give a more
                        nuanced picture, but whole grades can also be used.
                      </p>
                      <p>
                        Fine grades represent one third of a whole grade. An
                        example of the two options is outlined below.​
                      </p>
                      <ul className="ml-4">
                        <li>Whole grades: 3 (3.00), 4 (4.00), 5 (5.00) etc.</li>
                        <li>Fine grades: 4- (3.67), 4 (4.00), 4+ (4.33)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      What grading style would you like to use for current and
                      predicted attainment?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) =>
                        setGradesPredictedAttainment(e.target.value)
                      }
                      value={gradesPredictedAttainment}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Whole grades"} name="grade">
                          Whole grades
                        </Radio>
                        <Radio value={"Fine grades"} name="grade">
                          Fine grades
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>Progress is calculated in a number of ways at KS4:</p>
                      <ul>
                        <li>
                          <b>Method 1 (&apos;Government Expected&apos;):</b>{" "}
                          Progress can be measured using KS2 scaled scores.
                          ProgressTeaching generates an expected grade at the
                          end of KS4 using the government tables.
                        </li>
                        <li>
                          <b>Method 2 (&apos;School Expected&apos;):</b> The
                          school can create a &apos;target Value Add
                          (&apos;VA&apos;)&apos; by adding a number to the KS4
                          government-expected target. Commonly, schools will
                          round up to the nearest whole grade, which gives the
                          school a target VA of approximately 0.5.
                        </li>
                        <li>
                          <p>Method 3 (&apos;External&apos;):</p> Progress is
                          measured by analysing students&apos; progress against
                          a target grade imported from an external source such
                          as FFT or school-generated grades.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      In addition to Method 1, which is default, would you like
                      to use a School Expected target?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setSchoolExpectedTarget(e.target.value)}
                      value={schoolExpectedTarget}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {schoolExpectedTarget === "Yes" && (
                    <div className="mt-4">
                      <h6>What VA would you like to use?</h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) => setVaType(e.target.value)}
                        value={vaType}
                      >
                        <Space direction="horizontal">
                          <Radio
                            value={"Round up to nearest whole grade (VA =~0.5)"}
                            name="grade"
                          >
                            Round up to nearest whole grade (VA =~0.5)
                          </Radio>
                          <Radio value={"Add my own VA"} name="grade">
                            Add my own VA
                          </Radio>
                        </Space>
                      </Radio.Group>
                      <div>
                        {vaType === "Add my own VA" && (
                          <Input
                            size="large"
                            className="mt-4 text_input"
                            placeholder=""
                            type="number"
                          />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="mt-4">
                    <h6>
                      Would you like to import external targets? If you select
                      &apos;yes&apos;, you can import these on the
                      &apos;Attainment Import&apos; screen once your pupil
                      details have been imported from your MIS.
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) =>
                        setImportEnternalTargets2(e.target.value)
                      }
                      value={importEnternalTargets2}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        The platform allows schools to set a flightpath to any
                        pupil targets. The target rises incrementally by
                        assessment term so that schools can check whether their
                        pupils are &apos;on track&apos;.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      Would you like to use flightpaths to Government Expected
                      targets in KS4?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) =>
                        setFilepathGovernmentExpectedKS4(e.target.value)
                      }
                      value={filepathGovernmentExpectedKS4}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {schoolExpectedTarget === "Yes" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths to School Expected
                        targets in KS4?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) =>
                          setSchoolExpectedTargetKS4(e.target.value)
                        }
                        value={schoolExpectedTargetKS4}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {importEnternalTargets2 === "Yes" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths for external targets
                        in KS4?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) => setExternalTargetsKS4(e.target.value)}
                        value={externalTargetsKS4}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {externalTargetsKS4 === "Yes" && (
                    <>
                      <div className="d-flex align-items-center mb-1 mt-4">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="ml-3 mt-8">
                          <p>
                            Please set your flightpath increaments below. The
                            numbers will be interpreted with reference to a
                            grade&apos;s value, e.g. -0.33 means that the target
                            for a term is a third of a grade below the EOY
                            target.
                          </p>
                        </div>
                      </div>
                      <Table
                        columns={filePathColoums}
                        dataSource={filePathData}
                        pagination={false}
                        className="mt-4"
                        scroll={{ x: 400 }}
                      />
                    </>
                  )}
                </div>
              </Panel>
              <Panel
                header={
                  <div className="card-title" id="acc-2-heading">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#acc-2"
                      aria-expanded="true"
                      aria-controls="acc-2"
                    >
                      <figure>
                        <Image
                          height={70}
                          width={50}
                          src="/images/Icon2.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                        <span>KS5 Methodology</span>
                      </figure>
                    </button>
                  </div>
                }
                key="9"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>Progress is calculated in a number of ways at KS5:</p>
                      <ul className="ml-4">
                        <li>
                          <b>Method 1 (&apos;Government Expected&apos;):</b>{" "}
                          ProgressTeaching performs a linear interpolation to,
                          for each subject and pupil generate an average grade
                          with reference to their Average Points Scores at KS4.
                        </li>
                        <li>
                          <b>Method 2 (&apos;External&apos;):</b> T Progress is
                          measured by analysing students&apos; progress against
                          a target grade imported from an external source such
                          as ALPS, FFT, or school-generated grades.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      In addition to Method 1, which is default, would you like
                      to import external targets? If you select &apos;yes&apos;,
                      you can import these on the &apos;Attainment Import&apos;
                      screen once your pupil details have been imported from
                      your MIS.
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) =>
                        setImportEnternalTargets3(e.target.value)
                      }
                      value={importEnternalTargets3}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  <div className="mt-4">
                    <h6>
                      Would you like to use flightpaths to Government Expected
                      targets in KS5?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) =>
                        setFilePathForGovernmentKS5(e.target.value)
                      }
                      value={filePathForGovernmentKS5}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Yes"} name="grade">
                          Yes
                        </Radio>
                        <Radio value={"No"} name="grade">
                          No
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {importEnternalTargets3 === "Yes" && (
                    <div className="mt-4">
                      <h6>
                        Would you like to use flightpaths for external targets
                        in KS4?
                      </h6>
                      <Radio.Group
                        className="mt-4"
                        onChange={(e) =>
                          setFilePathForExternalTargetsKS4(e.target.value)
                        }
                        value={filePathForExternalTargetsKS4}
                      >
                        <Space direction="horizontal">
                          <Radio value={"Yes"} name="grade">
                            Yes
                          </Radio>
                          <Radio value={"No"} name="grade">
                            No
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  )}
                  {filePathForExternalTargetsKS4 === "Yes" && (
                    <>
                      <div className="d-flex align-items-center mb-1 mt-4">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="ml-3 mt-8">
                          <p>
                            Please set your flightpath increaments below. The
                            numbers will be interpreted with reference to a
                            grade&apos;s value, e.g. -0.33 means that the target
                            for a term is a third of a grade below the EOY
                            target.
                          </p>
                        </div>
                      </div>
                      <Table
                        columns={filePathColoums}
                        dataSource={filePathData}
                        pagination={false}
                        className="mt-4"
                        scroll={{ x: 400 }}
                      />
                    </>
                  )}
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
