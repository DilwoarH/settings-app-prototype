import React, { useState } from "react";
import { Collapse, Table, Tabs } from "antd";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PageHeadings from "@/components/pageHeadings";
import TextEditor from "@/components/textEditor";
import TrashIcon from "@/components/trashIcon";
import NoteIcon from "@/components/noteIcon";
import Image from "next/image";

// Dynamically import the Editor component on the client-side

const Behaviour = () => {
  const [tabKey, setTabKey] = useState("form");

  //local state of editor

  const incidentsColumn: Array<object> = [
    {
      title: "Incident Name",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Point Value (Negative)",
      dataIndex: "age",
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
              <TrashIcon />
            </a>
          </div>
        </>
      ),
    },
  ];
  const sectionColumn: Array<object> = [
    {
      title: "Sanction",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "School  Detention",
      dataIndex: "age",
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
              <TrashIcon />
            </a>
          </div>
        </>
      ),
    },
  ];
  const dayColumn: Array<object> = [
    {
      title: "Day",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Day",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "End Time",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
  ];
  const extraColumn: Array<object> = [
    {
      title: "Extra Actions",
      dataIndex: "name",
      defaultSortOrder: "descend",
      render: (record: any) => {
        return (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{record}</div>
              <div className="action_btn">
                <a className="arrow_btn">
                  <TrashIcon />
                </a>
              </div>
            </div>
          </>
        );
      },
    },
  ];
  const incidentsdata = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const pointColumn: Array<object> = [
    {
      title: "Points Threshold",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Period",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Year Groups",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "School Group",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Recipient Type",
      dataIndex: "age",
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
              <TrashIcon />
            </a>
          </div>
        </>
      ),
    },
  ];
  const behaviourColumn: Array<object> = [
    {
      title: "Types",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Swearing Vandalism
          </div>
        </>
      ),
    },

    {
      title: "Year Groups",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">7,8,9</div>
        </>
      ),
    },
    {
      title: "School Group",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            intervention Group 1
          </div>
        </>
      ),
    },
    {
      title: "Recipient Type",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Teacher, Head o...
          </div>
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
              <TrashIcon />
            </a>
          </div>
        </>
      ),
    },
  ];
  const behaviourdata = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  return (
    <>
      {/* Form section */}

      <div className="common_class_for_bottom_stick">
        <div className="appraisal_page_section">
          <div className="custom_container">
            <PageHeadings text={"Behaviour"} />
            <Tabs
              centered
              type="card"
              activeKey={tabKey}
              onChange={(key) => {
                setTabKey(key);
              }}
            >
              <TabPane tab={<h2>{"Form "}</h2>} key={"form"} />
              <TabPane tab={<h2>{"Email Trigger "}</h2>} key={"email"} />
            </Tabs>
            {tabKey === "form" ? (
              <>
                <Collapse
                  // onChange={onChange}
                  // expandIconPosition={expandIconPosition}
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
                      <div className="card-title" id="appraisal-acc-1-heading">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#appraisal-acc-1"
                          aria-expanded="true"
                          aria-controls="appraisal-acc-1"
                        >
                          <figure>
                            {" "}
                            <Image
                              height={70}
                              width={50}
                              src="/images/user-profile.png"
                              alt="info"
                              style={{ objectFit: "contain" }}
                            />
                            <span>Types</span>
                          </figure>
                        </button>
                      </div>
                    }
                    key="1"
                  >
                    {/* <div
                      id="appraisal-acc-1"
                      className="collapse"
                      aria-labelledby="appraisal-acc-1-heading"
                      data-parent="#accordion"
                    > */}
                    <div className="acc-1-body acc-body">
                      <div className="note_box_2">
                        <NoteIcon />
                        <p>
                          When logging behaviour, staff choose from a
                          pre-defined list of possible incidents and rewards.
                          Please enter or edit lists of incidents and rewards
                          below, adding new rows if necessary and point values
                          if required.
                        </p>
                      </div>

                      <div className="common_table">
                        <h4 className="heading">Incidents</h4>
                        <Table
                          columns={incidentsColumn}
                          dataSource={incidentsdata}
                          pagination={false}
                        />
                      </div>
                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add Row
                        </a>
                      </div>
                      <div className="common_table">
                        <h4 className="heading">Rewards</h4>
                        <Table
                          columns={incidentsColumn}
                          dataSource={incidentsdata}
                          pagination={false}
                        />
                      </div>
                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add Row
                        </a>
                      </div>
                    </div>
                    {/* </div> */}
                  </Panel>
                  <Panel
                    header={
                      <div className="card-title" id="appraisal-acc-2-heading">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#appraisal-acc-2"
                          aria-expanded="true"
                          aria-controls="appraisal-acc-2"
                        >
                          <figure>
                            {" "}
                            <Image
                              height={70}
                              width={50}
                              src="/images/share-arrow.png"
                              alt="info"
                              style={{ objectFit: "contain" }}
                            />
                            <span>Actions</span>
                          </figure>
                        </button>
                      </div>
                    }
                    key="2"
                  >
                    <div
                      id="appraisal-acc-2"
                      // className="collapse"
                      aria-labelledby="appraisal-acc-2-heading"
                      data-parent="#accordion"
                    >
                      <div className="acc-2-body acc-body">
                        <div className="note_box_2">
                          <NoteIcon />
                          <p>
                            When incidents are logged, the user can select a
                            sanction from the list maintained here. This data
                            allows you to encourage and track actions,
                            encouraging consistent behaviour management across
                            the school. You can also choose whether a sanction
                            can result in a detention.
                          </p>
                        </div>

                        <Table
                          columns={sectionColumn}
                          dataSource={incidentsdata}
                          pagination={false}
                        />
                      </div>
                      <div className="acc-2-body acc-body">
                        <div className="note_box_2">
                          <NoteIcon />
                          <p>
                            When a member of staff assigns a sanction that
                            allows a detention, they will be prompted to place
                            the student onto a detention register. The staff
                            member in charge of this detention can access the
                            register and mark students as present/absent. Use
                            this table to control when school detentions can
                            take place during the week.
                          </p>
                        </div>

                        <Table
                          columns={dayColumn}
                          dataSource={incidentsdata}
                          pagination={false}
                        />
                      </div>{" "}
                      <div className="acc-2-body acc-body">
                        <div className="note_box_2">
                          <NoteIcon />
                          <p>
                            At the bottom of the behaviour form, a user can
                            choose to record an additional action they took, or
                            plan to take, such as informing parents of the
                            incident. Add the options you would like to provide
                            to this table.
                          </p>
                        </div>

                        <Table
                          columns={extraColumn}
                          dataSource={incidentsdata}
                          pagination={false}
                        />
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </>
            ) : (
              <>
                <Collapse
                  // onChange={onChange}
                  // expandIconPosition={expandIconPosition}
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
                      <div className="card-title" id="appraisal-acc-1-heading">
                        <div
                          className="card-title"
                          id="appraisal-acc-1-heading"
                        >
                          <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#appraisal-acc-1"
                            aria-expanded="true"
                            aria-controls="appraisal-acc-1"
                          >
                            <figure>
                              <Image
                                height={70}
                                width={50}
                                src="/images/point.png"
                                alt="info"
                                style={{ objectFit: "contain" }}
                              />
                              <span>Point Thresholds</span>
                            </figure>
                          </button>
                        </div>
                      </div>
                    }
                    key="1"
                  >
                    <div className="acc-1-body acc-body data">
                      <Table
                        columns={pointColumn}
                        dataSource={incidentsdata}
                        pagination={false}
                      />
                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add New Trigger
                        </a>
                      </div>
                      {/* <p>
                        If{" "}
                        <span className="text-primary">{">?/=< #-POINT"}</span>{" "}
                        threshold is reached over a{" "}
                        <span className="text-primary">
                          {"ROLLING #-DAY PERIOD / DEFINED PERIOD"}
                        </span>{" "}
                        for pupils in {"X YEAR GROUPS"} and{" "}
                        <span className="text-primary">
                          {"Y SCHOOL GROUPS"}
                        </span>
                        , email{" "}
                        <span className="text-primary">
                          {"PARENTS / TEACHERS."}
                        </span>
                      </p> */}
                      <h4 className="heading">Parent Email</h4>
                      <div className="form_field_box">
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

                      <TextEditor />

                      <h4 className="heading">Teacher Email</h4>
                      <div className="form_field_box">
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
                        <TextEditor />
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="card-title" id="appraisal-acc-2-heading">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#appraisal-acc-2"
                          aria-expanded="true"
                          aria-controls="appraisal-acc-2"
                        >
                          <figure>
                            <Image
                              height={70}
                              width={50}
                              src="/images/Icon12.png"
                              alt="info"
                              style={{ objectFit: "contain" }}
                            />
                            <span>Behaviour Types</span>
                          </figure>
                        </button>
                      </div>
                    }
                    key="2"
                  >
                    <div className="acc-1-body acc-body data">
                      <Table
                        columns={behaviourColumn}
                        dataSource={behaviourdata}
                        pagination={false}
                      />

                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add New Trigger
                        </a>
                      </div>

                      {/* <p>
                        If <span className="text-primary">{"X behaviour"}</span>{" "}
                        threshold is recorded in{" "}
                        <span className="text-primary">{"X YEAR GROUPS"}</span>{" "}
                        and{" "}
                        <span className="text-primary">
                          {"Y SCHOOL GROUPS"}
                        </span>
                        , email{" "}
                        <span className="text-primary">
                          {"PARENTS / TEACHERS."}
                        </span>
                      </p> */}
                      <h4 className="heading">Parent Email</h4>
                      <div className="form_field_box">
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

                      <TextEditor />

                      <h4 className="heading">Teacher Email</h4>
                      <div className="form_field_box">
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
                        <TextEditor />
                      </div>
                      {/* <h4 className="heading">Rewards</h4>
                            <Table
                              columns={behaviourColumn}
                              dataSource={incidentsdata}
                              pagination={false}
                            />

                            <div className="add_row_btn">
                              <a>
                                <i className="fal fa-plus"></i>Add New Trigger
                              </a>
                            </div>*/}
                    </div>
                  </Panel>
                </Collapse>
              </>
            )}
          </div>
        </div>
      </div>

      <br />

      {/* Email Section */}
    </>
  );
};

export default Behaviour;
