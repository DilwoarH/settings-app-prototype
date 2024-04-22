import React, { useState } from "react";
import NoteIcon from "@/components/noteIcon";
import PageHeadings from "@/components/pageHeadings";
import {
  Collapse,
  Radio,
  Switch,
  Table,
  Input,
  Space,
  InputNumber,
  Checkbox,
} from "antd";
import Head from "next/head";
import Image from "next/image";
import "../styles/css/main.css";
import "../styles/css/attainments.css";
import { setCommentRange } from "typescript";

const Attainment = () => {
  const { Panel } = Collapse;
  const [grade, setGrade] = useState("");
  const [areaImprovement, setAreaImprovement] = useState("");
  const [area, setArea] = useState("");
  const [addComments, setAddComments] = useState("");
  const [commentType, setAddCommentType] = useState("");
  const [model, setModel] = useState("");
  const [emailReminders, setEmailReminders] = useState("");

  const userColumn: Array<object> = [
    {
      title: "Year",
      dataIndex: "year",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Au1 Open",
      dataIndex: "au1Open",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Au1 Close",
      dataIndex: "au1Close",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Au1 Trust Close",
      dataIndex: "au1TrustClose",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Au2 Open",
      dataIndex: "au2OPen",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Au2 Close",
      dataIndex: "au2Close",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Au2 Trust Close",
      dataIndex: "au2TrustClose",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Sp 1 Open",
      dataIndex: "sp1Open",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Sp 1 Close",
      dataIndex: "sp1Close",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Sp 1 Trust Close",
      dataIndex: "sp1TrustClose",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Sp2 Open",
      dataIndex: "sp2Open",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Sp2 Close",
      dataIndex: "sp2Close",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Sp 2 Trust Close",
      dataIndex: "sp2TrustClose",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Su 1 Open",
      dataIndex: "su1Open",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Su 1 Close",
      dataIndex: "su1Close",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Su 1 Trust Close",
      dataIndex: "su1TrustClose",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Su 2 Open",
      dataIndex: "su2Open",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Su 2 Close",
      dataIndex: "su2Close",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="date" className="table_input" />
        </>
      ),
    },
    {
      title: "Su 2 Trust Close",
      dataIndex: "su2TrustClose",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
  ];

  const gldColoums: Array<object> = [
    {
      title: "ELG",
      dataIndex: "elg",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Year Groups(s)",
      dataIndex: "yearGroups",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="text" className="table_input" />

      //     <i className="fa fa-times close_icon" aria-hidden="true"></i>
      //   </>
      // ),
    },
    {
      title: "Assessment Term(s)",
      dataIndex: "assesmentTerms",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      // render: () => (
      //   <>
      //     <input type="text" className="table_input" />
      //     <i className="fa fa-times close_icon" aria-hidden="true"></i>
      //   </>
      // ),
    },
  ];

  const courseColoums: Array<object> = [
    {
      title: "Course",
      dataIndex: "course",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Label",
      dataIndex: "label",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Year Group(s)",
      dataIndex: "yearGroups",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
          <i className="fa fa-times close_icon" aria-hidden="true"></i>
        </>
      ),
    },
    {
      title: "Assessment Term(s)",
      dataIndex: "assesmentTerms",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
          <i className="fa fa-times close_icon" aria-hidden="true"></i>
        </>
      ),
    },
  ];

  const ks3Courses: Array<object> = [
    {
      title: "Timetabled subject",
      dataIndex: "timetabledSubject",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Year Group(s)",
      dataIndex: "yearGroup",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Assessment Term(s)",
      dataIndex: "assesmentTerms",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: <></>,
      key: "",
      dataIndex: "",
      render: () => (
        <>
          <div className="action_btn">
            {/* <a className="arrow_btn">
              <Image height={20} width={10} src="/images/edit.png" alt="edit" />
            </a> */}
            <a className="arrow_btn">
              <Image
                height={20}
                width={10}
                src="/images/trash.png"
                alt="edit"
              />
            </a>
          </div>
        </>
      ),
    },
  ];

  const ks3CoursesData = [
    {
      timetabledSubject: "English",
      yearGroup: "All",
      assesmentTerms: "All",
    },
    {
      timetabledSubject: "Maths",
      yearGroup: "All",
      assesmentTerms: "All",
    },
  ];

  const ks4Courses: Array<object> = [
    {
      title: "Timetabled subject",
      dataIndex: "timetabledSubject",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },

    {
      title: "QAN Code",
      dataIndex: "qanCode",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Discount code",
      dataIndex: "discountCode",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Syllabus code",
      dataIndex: "syllabusCode",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Year Group(s)",
      dataIndex: "yearGroup",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Assessment Term(s)",
      dataIndex: "assessmentTerms",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: <></>,
      key: "",
      dataIndex: "",
      render: () => (
        <>
          <div className="action_btn">
            {/* <a className="arrow_btn">
              <Image height={20} width={10} src="/images/edit.png" alt="edit" />
            </a> */}
            <a className="arrow_btn">
              <Image
                height={20}
                width={10}
                src="/images/trash.png"
                alt="edit"
              />
            </a>
          </div>
        </>
      ),
    },
  ];

  const ks4CoursesData = [
    {
      timetabledSubject: "English",
      courseName: "GCSE English",
      qanCode: "60142923",
      yearGroup: "All",
      assessmentTerms: "All",
    },
  ];

  const courseAttainmentTypesColoums: Array<object> = [
    {
      title: "Year Group(s)",
      dataIndex: "yearGroup",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Data Window(s)",
      dataIndex: "dataWindows",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },

    {
      title: "Attainment Type(s)",
      dataIndex: "AttainmentType",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: <></>,
      key: "",
      dataIndex: "",
      render: () => (
        <>
          <div className="action_btn">
            <a className="arrow_btn">
              <Image
                height={20}
                width={10}
                src="/images/trash.png"
                alt="edit"
              />
            </a>
          </div>
        </>
      ),
    },
  ];
  const assessmentColoums: Array<object> = [
    {
      title: "Year Group(s)",
      dataIndex: "yearGroup",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      title: "Data Window(s)",
      dataIndex: "dataWindows",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },

    {
      title: <></>,
      key: "",
      dataIndex: "",
      render: () => (
        <>
          <div className="action_btn">
            <a className="arrow_btn">
              <Image
                height={20}
                width={10}
                src="/images/trash.png"
                alt="edit"
              />
            </a>
          </div>
        </>
      ),
    },
  ];
  const assessmentDate = [
    {
      yearGroup: "Y1, Y2, Y3, Y4",
      dataWindows: "All",
    },
  ];
  const courseAttainmentTypesDate = [
    {
      yearGroup: "All",
      dataWindows: "All",
      AttainmentType: "Current",
    },
  ];

  const assessmentTermsColoums: Array<object> = [
    {
      title: "Year Group(s)",
      dataIndex: "yearGroup",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Assessment Term(s)",
      dataIndex: "assessmentTerm",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },

    {
      title: <></>,
      key: "",
      dataIndex: "",
      render: () => (
        <>
          <div className="action_btn">
            <a className="arrow_btn">
              <Image
                height={20}
                width={10}
                src="/images/trash.png"
                alt="edit"
              />
            </a>
          </div>
        </>
      ),
    },
  ];
  const assessmentTermsDate = [
    {
      yearGroup: "Y1, Y2, Y3, Y4",
      assessmentTerm: "All",
    },
  ];

  const windowsData = [
    {
      year: "7, 8, 9",
      au1Open: "22/06/2023",
      au1Close: "22/06/2023",
      au1TrustClose: "22/06/2023",
      au2OPen: "22/06/2023",
      au2Close: "22/06/2023",
      au2TrustClose: "22/06/2023",
      sp1Open: "22/06/23",
      sp1Close: "22/06/23",
      sp1TrustClose: "22/06/23",
      sp2Open: "22/06/23",
      sp2Close: "22/06/23",
      sp2TrustClose: "22/06/23",
      su1Open: "22/06/23",
      su1Close: "22/06/23",
      su1TrustClose: "22/06/23",
      su2Open: "22/06/23",
      su2Close: "22/06/23",
      su2TrustClose: "22/06/23",
    },
    {
      year: "7, 8, 9",
      au1Open: "22/06/2023",
      au1Close: "22/06/2023",
      au1TrustClose: "22/06/2023",
      au2OPen: "22/06/2023",
      au2Close: "22/06/2023",
      au2TrustClose: "22/06/2023",
      sp1Open: "22/06/23",
      sp1Close: "22/06/23",
      sp1TrustClose: "22/06/23",
      sp2Open: "22/06/23",
      sp2Close: "22/06/23",
      sp2TrustClose: "22/06/23",
      su1Open: "22/06/23",
      su1Close: "22/06/23",
      su1TrustClose: "22/06/23",
      su2Open: "22/06/23",
      su2Close: "22/06/23",
      su2TrustClose: "22/06/23",
    },
  ];
  const gldData = [
    {
      elg: "All GLD ELGs",
      yearGroups: (
        <>
          <input type="text" className="table_input" />

          <i className="fa fa-times close_icon" aria-hidden="true"></i>
        </>
      ),
      // assesmentTerms: "All",
      assesmentTerms: (
        <>
          <input type="text" className="table_input" />

          <i className="fa fa-times close_icon" aria-hidden="true"></i>
        </>
      ),
    },
    {
      elg: "Listening, Attention, and Understanding",
      yearGroups: (
        <>
          <input type="text" className="table_input" />
        </>
      ),
      assesmentTerms: (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
    {
      elg: "Speaking",
      yearGroups: (
        <>
          <input type="text" className="table_input" />
        </>
      ),
      assesmentTerms: (
        <>
          <input type="text" className="table_input" />
        </>
      ),
    },
  ];
  const courseData = [
    {
      course: "Reading",
      label: "Reading",
      yearGroups: "All",
      assesmentTerms: "All",
    },
    {
      course: "Writing",
      label: "Writing",
      yearGroups: "All",
      assesmentTerms: "Au2, Sp2, Su2",
    },
  ];
  return (
    <>
      <div className="common_class_for_bottom_stick">
        <div className="site_setting_page_section">
          <div className="custom_container">
            <PageHeadings text={"Attainment"} />
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
                  <div className="card-title" id="acc-1-heading">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#acc-1"
                      aria-expanded="true"
                      aria-controls="acc-1"
                    >
                      <figure>
                        <Image
                          height={70}
                          width={50}
                          src="/images/Icon.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                        <span>Data Windows</span>
                      </figure>
                    </button>
                  </div>
                }
                key="1"
              >
                <div className="acc-2-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <p className="ml-3">
                      Data windows drive reports: for example, if you have a
                      data window configured for Y11 Au1, there will be an Au1
                      report showing all attainment data recorded against that
                      window for the year group. Data windows drive reports: for
                      example, if you have a data window configured for Y11 Au1,
                      there will be an Au1 report showing all attainment data
                      recorded against that window for the year group. Data
                      windows control when a teacher may enter data for a
                      particular year group. At the close of a data window,
                      reports will be available, though they will show how
                      complete their data is. Admins can always enter data for
                      any data window or year group using their attainment page.
                      These features work with the &apos;Quality Checks&apos;
                      feature to ensure data is complete and, where it is not
                      complete, this can be identified and rectified.
                    </p>
                  </div>
                  <div className="table_main">
                    <Table
                      columns={userColumn}
                      dataSource={windowsData}
                      pagination={false}
                      scroll={{ x: 400 }}
                    />
                  </div>
                </div>
                {/* <h6>
                  <b>Secure IP Range</b>
                </h6> */}
                {/* <div className="form_field_box">
                  <div className="form_single_field_box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="email"
                      id="email"
                      required
                    />
                  </div>

                  <label className="error" htmlFor="email"></label>
                </div>
                <h5 className="text-muted">Add current IP...</h5>

                <div className="note_box_2">
                  <NoteIcon />
                  <p>
                    The secure IP ranges specified here are those from which
                    users can always log in. You can then, in the Users page,
                    configure who, if anyone, can log in from outside this
                    range.
                  </p>
                </div> */}
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
                        <span>Courses</span>
                      </figure>
                    </button>
                  </div>
                }
                key="2"
              >
                <div className="acc-2-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <p className="ml-3">
                      At ProgressTeaching, a &apos;course&apos; refers to a
                      topic of study for attached to a year group, stage, or
                      qualification (e.g. &apos;Year 9 Maths&apos;, or
                      &apos;GCSE Maths&apos;), whilst a subject refers is a more
                      general label for something that is studied (e.g.
                      &apos;Maths&apos;).
                    </p>
                  </div>
                  <Collapse
                    style={{ marginTop: 20 }}
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
                              <span>Primary</span>
                            </figure>
                          </button>
                        </div>
                      }
                      key="3"
                    >
                      <div className="acc-2-body">
                        <p className="font-bold">Early Years</p>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <i
                            className="fa fa-info-circle"
                            aria-hidden="true"
                          ></i>
                          <p className="ml-3">
                            Early Years assessment is split into 17 &apos;Early
                            Learning Goals&apos; (ELGs) by the statutory
                            framework. 12 of these ELGs - those for prime areas
                            of learning and the specific areas of mathematics
                            and literacy - contribute toward achieving a Good
                            Level of Development (&apos;GLD&apos;). All ELGs are
                            shown individually below, but for convenience&apos;s
                            sake the top row of each table can also be used to
                            control assessment policy for all its other rows, if
                            you so wish.
                          </p>
                        </div>
                        <i className="underline gld_heading">GLD</i>
                        <div className="table_main">
                          <Table
                            columns={gldColoums}
                            dataSource={gldData}
                            pagination={false}
                            scroll={{ x: 400 }}
                          />
                        </div>
                        <i className="underline gld_heading">Non-GLD</i>
                        <div className="table_main">
                          <Table
                            columns={gldColoums}
                            dataSource={gldData}
                            pagination={false}
                            scroll={{ x: 400 }}
                          />
                        </div>
                        <p className="font-bold mt-4">
                          <b>Y1-6</b>
                        </p>
                        <div className="d-flex justify-content-between align-items-center mb-1 mt-4">
                          <i
                            className="fa fa-info-circle"
                            aria-hidden="true"
                          ></i>
                          <div className="ml-3 mt-10">
                            <p>
                              Default courses are as below. You may add others,
                              or relabel existing courses to reflect the
                              language used by your school (e.g. by changing
                              &apos;Mathematics&apos; to &apos;Maths&apos;).
                              Please do not change the meaning of the course in
                              your label (e.g. by labelling &apos;Reading&apos;
                              as &apos;Spanish&apos;) as this will impact your
                              reporting.
                            </p>
                            <p>
                              If you do not wish to collect data for a course,
                              please leave the assessment terms and year groups
                              blank by clicking the &apos;x&apos; button in the
                              relevant fields.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Table
                            columns={courseColoums}
                            dataSource={courseData}
                            pagination={false}
                            scroll={{ x: 400 }}
                          />
                        </div>
                        <button className="mt-4 add_course_btn">
                          <i className="fal fa-plus"></i> Add Course
                        </button>
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
                              <span>Secondary</span>
                            </figure>
                          </button>
                        </div>
                      }
                      key="4"
                    >
                      <div className="acc-2-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <p>
                            <b>KS3 courses - </b>
                            <span>Years 7, 8, and 9</span>
                          </p>
                        </div>

                        <div className="d-flex align-items-center mb-1">
                          <i
                            className="fa fa-info-circle"
                            aria-hidden="true"
                          ></i>
                          <div className="ml-3 mt-8">
                            <p>
                              Please add your KS3 courses here. The name of your
                              course should correspond to the name given to it
                              on the timetable.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Table
                            columns={ks3Courses}
                            dataSource={ks3CoursesData}
                            pagination={false}
                            scroll={{ x: 400 }}
                          />
                        </div>
                        <button className="mt-4 add_course_btn">
                          <i className="fal fa-plus"></i> Add Course
                        </button>
                        <div className="d-flex justify-content-between align-items-center mb-1 mt-4">
                          <p>
                            <b>KS4 courses - </b>
                            <span>Years 10 and 11</span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-1">
                          <i
                            className="fa fa-info-circle"
                            aria-hidden="true"
                          ></i>
                          <div className="ml-3 mt-8">
                            <p>
                              Please add your KS4 courses here. The
                              &apos;subject&apos; field should correspond with
                              your timetable. We generally advise that the
                              course name reflects the qualification name (e.g.
                              &apos;GCSE Biology&apos;).
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Table
                            columns={ks4Courses}
                            dataSource={ks4CoursesData}
                            pagination={false}
                            scroll={{ x: 400 }}
                          />
                        </div>
                        <button className="mt-4 add_course_btn">
                          <i className="fal fa-plus"></i> Add Course
                        </button>
                        <div className="d-flex justify-content-between align-items-center mb-1 mt-4">
                          <p>
                            <b>KS5 courses - </b>
                            <span>Years 12 and 13</span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-1">
                          <i
                            className="fa fa-info-circle"
                            aria-hidden="true"
                          ></i>
                          <div className="ml-3 mt-8">
                            <p>
                              Please add your KS5 courses here. The name of your
                              course should correspond with your timetable. We
                              generally advise that the course name reflects the
                              qualification name (e.g. &apos;A Level
                              Biology&apos;).
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Table
                            columns={ks4Courses}
                            dataSource={ks4CoursesData}
                            pagination={false}
                            scroll={{ x: 400 }}
                          />
                        </div>
                        <button className="mt-4 add_course_btn">
                          <i className="fal fa-plus"></i> Add Course
                        </button>
                      </div>
                    </Panel>
                  </Collapse>
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
                        <span>Course Attainment Types</span>
                      </figure>
                    </button>
                  </div>
                }
                key="5"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        You may wish to collect different types of course /
                        subject attainment data at different times of the year.
                        For example, you may wish to collect end of year
                        predictions at the start of the year.
                      </p>
                      <p>
                        Later, in the Attitude to Learning (&apos;ATL&apos;)
                        section, you can choose the data windows for which you
                        would like to collect this data.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Table
                      columns={courseAttainmentTypesColoums}
                      dataSource={courseAttainmentTypesDate}
                      pagination={false}
                      scroll={{ x: 400 }}
                    />
                  </div>
                  <button className="mt-4 add_course_btn">
                    <i className="fal fa-plus"></i> Add year group(s)
                  </button>
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
                        <span>Attitude to Learning</span>
                      </figure>
                    </button>
                  </div>
                }
                key="6"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        ProgressTeaching allows schools to collect Attitude to
                        Learning grades. These can drive interventions that
                        improve the quality of teaching and learning. You can
                        collect up to three &apos;Attitude to Learning&apos;
                        grades, e.g. for &apos;Classwork&apos;,
                        &apos;Homework&apos;, and &apos;Effort&apos;
                      </p>
                    </div>
                  </div>
                  <h4 className="mt-4">
                    How many Attitude to Learning grades would you like to
                    collect?
                  </h4>
                  <InputNumber
                    size="large"
                    min={1}
                    max={3}
                    defaultValue={1}
                    className="mt-4"
                  />
                  <h6 className="mt-4">What grade style are you using?</h6>
                  <Radio.Group
                    className="mt-4"
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}
                  >
                    <Space direction="vertical">
                      <Radio value={" A, B, C, D"} name="grade">
                        A, B, C, D
                      </Radio>
                      <Radio
                        value={"Excellent, Good, Concern, Serious Concern"}
                        name="grade"
                      >
                        Excellent, Good, Concern, Serious Concern
                      </Radio>
                      <Radio
                        value={"Excellent, Good, Satisfactory, Concern"}
                        name="grade"
                      >
                        Excellent, Good, Satisfactory, Concern
                      </Radio>
                    </Space>
                  </Radio.Group>
                  <h6 className="mt-4">
                    Please enter the names of your ATL grades below (e.g.
                    &apos;classwork&apos;, &apos;homework&apos;,
                    &apos;effort&apos;, etc.)
                  </h6>
                  <Input size="large" className="mt-4 text_input" />
                  <div className="mt-4">
                    <h6>
                      For which assessment terms would you like to collect this
                      information?
                    </h6>
                    <div className="mt-4">
                      <Table
                        columns={assessmentColoums}
                        dataSource={assessmentDate}
                        pagination={false}
                        scroll={{ x: 400 }}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        Area for Improvement grades can also be recorded. These
                        allow teachers to identify specific areas on which
                        students should focus to improve the quality of their
                        learning.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
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
                  </div>
                  <div className="mt-4">
                    <h6>What would you like this to be called?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setArea(e.target.value)}
                      value={area}
                    >
                      <Space direction="vertical">
                        <Radio value={"Area for Improvement"} name="grade">
                          Area for Improvement
                        </Radio>
                        <Radio value={"Area for Development"} name="grade">
                          Area for Development
                        </Radio>
                        <Radio value={"Underachievement Concern"} name="grade">
                          Underachievement Concern
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  <div className="mt-4">
                    <h6>
                      In which assessment terms would you like to collect area
                      for improvement information?
                    </h6>
                    <div className="mt-4">
                      <Table
                        columns={assessmentColoums}
                        dataSource={assessmentDate}
                        pagination={false}
                        scroll={{ x: 400 }}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>Which areas of improvement would you like to use?</h6>
                    <div className="d-flex align-items-center mb-1 mt-4">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                      <div className="ml-3 mt-8">
                        <p>
                          Teachers can select the option, from the list
                          configured here, that they feel is the most important
                          area of improvement for a pupil. We recommend a fairly
                          limited selection so that the data gathered is useful
                          for teachers and leaders.
                        </p>
                      </div>
                    </div>
                    <Space direction="vertical">
                      <Checkbox.Group
                        options={[
                          "Behaviour",
                          "Focus",
                          "Homework",
                          "Application",
                          "Quality of work",
                          "Absenteeism",
                        ]}
                        defaultValue={["Behaviour"]}
                        // onChange={onChange}
                      />
                    </Space>
                  </div>
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
                        <span>Teacher Report Comments</span>
                      </figure>
                    </button>
                  </div>
                }
                key="7"
              >
                <div className="acc-2-body">
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        Subject teachers can add report comments in the same
                        place as they enter attainment data. This saves time and
                        effort, providing a seamless and efficient experience.
                      </p>
                      <p>Comments are a maximum of 255 characters each.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      Would you like subject teachers to add comments to
                      reports?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setAddComments(e.target.value)}
                      value={addComments}
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
                      Would you like these comments to be from a
                      school-configured &apos;bank&apos;, or should they be
                      free-typed by teachers?
                    </h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setAddCommentType(e.target.value)}
                      value={commentType}
                    >
                      <Space direction="vertical">
                        <Radio value={"Free-typed comments"} name="grade">
                          Free-typed comments
                        </Radio>
                        <Radio value={"Comment bank"} name="grade">
                          Comment bank
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  {commentType === "Comment bank" && (
                    <div className="mt-4">
                      <p>
                        Please enter your comment bank below, up to a maximum of
                        40 comments.
                      </p>
                      <div>
                        <Input
                          size="large"
                          placeholder="Write your comment here..."
                          className="mt-4 text_input"
                        />
                      </div>
                      <div>
                        <Input
                          size="large"
                          placeholder="Write your comment here..."
                          className="mt-4 text_input"
                        />
                      </div>
                      <div>
                        <Input
                          size="large"
                          placeholder="Write your comment here..."
                          className="mt-4 text_input"
                        />
                      </div>
                      <button className="mt-4 add_course_btn">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
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
                        <span>Quality Checks</span>
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
                        For each assessment term, ProgressTeaching&apos;s
                        Quality Check functionality ensures that data is
                        complete by feeding into the &apos;quality check&apos;
                        page on the Admin attainment area. This page allows you
                        to configure what constitutes &apos;complete&apos; data
                        for your school, choosing between two models.
                      </p>
                      <ul className="ml-4">
                        <li>
                          <b>Model A: </b>
                          All available attainment types for the assessment term
                          must have an entry. If this includes a prediction, it
                          must be greater than or equal to the current
                          attainment entered for the period.
                        </li>
                        <li>
                          <b>Model B: </b>
                          All available attainment types for the assessment term
                          must have an entry, aside from ‘Area for Improvement’,
                          which is only required if the ‘Attitude to Learning’
                          grade is in the lower half of the gradeset. If this
                          includes a prediction, it must be greater than or
                          equal to the current attainment entered for the
                          period.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>What quality check model would you like to use?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setModel(e.target.value)}
                      value={model}
                    >
                      <Space direction="horizontal">
                        <Radio value={"Model A"} name="grade">
                          Model A
                        </Radio>
                        <Radio value={"Model B"} name="grade">
                          Model B
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                  <div className="d-flex align-items-center mb-1 mt-4">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="ml-3 mt-8">
                      <p>
                        Email reminders help encourage staff to enter data on
                        time, reducing the burden for admins. If you choose to
                        use these, we use the dates below to send reminder
                        emails:
                      </p>
                      <ul className="ml-4">
                        <li>
                          <b>When an data window opens, </b>an email is sent to
                          all subject teachers informing them of this and of the
                          closing date.
                        </li>
                        <li>
                          <b>2 days before the deadline, </b>an email is sent to
                          a reminder is sent to teachers with missing data.
                        </li>
                        <li>
                          <b>On the day of the deadline, </b>an email is sent to
                          a reminder is sent to teachers with missing data, with
                          their line managers CCed.
                        </li>
                      </ul>
                      <p>
                        After the deadline, admins can add missing results
                        manually on their attainment page. They can also reopen
                        the window to allow other users to add data--this does
                        not result in the emails being sent again.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>Would you like to use email reminders?</h6>
                    <Radio.Group
                      className="mt-4"
                      onChange={(e) => setEmailReminders(e.target.value)}
                      value={emailReminders}
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
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attainment;
