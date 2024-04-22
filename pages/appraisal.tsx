import NoteIcon from "@/components/noteIcon";
import PageHeadings from "@/components/pageHeadings";
import TrashIcon from "@/components/trashIcon";
import { Collapse, Table, Tabs } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const Appraisal = () => {
  const [tabKey, setTabKey] = useState("Permissions");

  const { TabPane } = Tabs;
  const { Panel } = Collapse;

  const targetcolumns: Array<object> = [
    {
      title: "Target Area",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Target Area 1
          </div>
        </>
      ),
    },
    {
      title: "Category/ Categories",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Teacher / Leaders
          </div>
        </>
      ),
    },
    {
      title: "Area Description",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Words words</div>
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
  const defaultTargetcolumns: Array<object> = [
    {
      title: "Target Area",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Target Area 1
          </div>
        </>
      ),
    },

    {
      title: "Target Description",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Words words</div>
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
  const objectivecolumns: Array<object> = [
    {
      title: "Objective Type",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">School</div>
        </>
      ),
    },

    {
      title: "Objective",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Words words</div>
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
  const staffcolumns: Array<object> = [
    {
      title: "Group",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Teacher</div>
        </>
      ),
    },

    {
      title: "Active users in this group",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">13</div>
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
  const linecolumns: Array<object> = [
    {
      title: "Staff Name",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Name Smith</div>
        </>
      ),
    },

    {
      title: "Group",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Teacher</div>
        </>
      ),
    },
    {
      title: "Appraiser",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">Name</div>
        </>
      ),
    },
  ];
  const WindowsColumn: Array<object> = [
    {
      title: "Category",
      dataIndex: "name",
      defaultSortOrder: "descend",
      width: "30%",
      sorter: (a: any, b: any) => a.age - b.age,
      render: (record: any) => {
        return (
          <>
            <div>Name</div>
          </>
        );
      },
    },
    {
      title: "Target Setting",
      dataIndex: "name",
      defaultSortOrder: "descend",

      children: [
        {
          title: "Open",
          dataIndex: "age",
          key: "age",

          render: () => {
            return (
              <>
                <div className="action_btn table-data-custom-color">01/09</div>
              </>
            );
          },
        },
        {
          title: "Close",
          dataIndex: "age",
          key: "age",

          render: () => {
            return (
              <>
                <div className="action_btn table-data-custom-color">01/09</div>
              </>
            );
          },
        },
      ],
    },
    {
      title: "Review",
      dataIndex: "name",
      defaultSortOrder: "descend",

      children: [
        {
          title: "Open",
          dataIndex: "age",
          key: "age",

          render: () => {
            return (
              <>
                <div className="action_btn table-data-custom-color">01/09</div>
              </>
            );
          },
        },
        {
          title: "Close",
          dataIndex: "age",
          key: "age",

          render: () => {
            return (
              <>
                <div className="action_btn table-data-custom-color">01/09</div>
              </>
            );
          },
        },
      ],
    },
    {
      title: "End of Year",
      dataIndex: "name",
      defaultSortOrder: "descend",

      children: [
        {
          title: "Open",
          dataIndex: "age",
          key: "age",

          render: () => {
            return (
              <>
                <div className="action_btn table-data-custom-color">01/09</div>
              </>
            );
          },
        },
        {
          title: "Close",
          dataIndex: "age",
          key: "age",

          render: () => {
            return (
              <>
                <div className="action_btn table-data-custom-color">01/09</div>
              </>
            );
          },
        },
      ],
    },
  ];
  const dataArray: Array<object> = [
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
  ];
  const managementDummyArray: Array<object> = [
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
  ];

  return (
    <>
      <div className="common_class_for_bottom_stick">
        <div className="appraisal_page_section">
          <div className="custom_container">
            <PageHeadings text={"Appraisal"} />
            <Tabs
              centered
              type="card"
              activeKey={tabKey}
              onChange={(key) => {
                setTabKey(key);
              }}
            >
              <TabPane tab={<h2>{"Permissions"}</h2>} key={"Permissions"} />
              <TabPane tab={<h2>{"Form"}</h2>} key={"Email"} />
            </Tabs>
            {tabKey === "Permissions" ? (
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
                          <Image
                            height={70}
                            width={50}
                            src="/images/Icon3.png"
                            alt="icon"
                            style={{ objectFit: "contain" }}
                          />
                          <span>Staff Categories</span>
                        </figure>
                      </button>
                    </div>
                  }
                  key="1"
                >
                  <div className="acc-1-body acc-body">
                    <div className="note_box_2">
                      <NoteIcon />
                      <p>
                        Staff categories allow you to control the target areas
                        that appear on each form. The four default categories
                        (teachers, leaders, teaching assistants, and
                        administrative staff) cannot be deleted, but you can add
                        more if you wish.
                      </p>
                    </div>

                    <div className="common_table">
                      <Table
                        columns={staffcolumns}
                        dataSource={dataArray}
                        pagination={false}
                      />
                    </div>
                    <div className="add_row_btn">
                      <a>
                        <i className="fal fa-plus"></i>Add Row
                      </a>
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
                            src="/images/Icon5.png"
                            alt="icon"
                            style={{ objectFit: "contain" }}
                          />
                          <span>Line Management Structure</span>
                        </figure>
                      </button>
                    </div>
                  }
                  key="2"
                >
                  <div className="acc-2-body acc-body">
                    <div className="note_box_2">
                      <NoteIcon />
                      <p>
                        Appraisers work with staff to review appraisal forms and
                        consider new targets. Appraiser permission operates in a
                        hierarchical chain, i.e. if Alice manages Ben, and Ben
                        manages Cara, Alice can also see Cara&apos;s form. If
                        you do not want this to happen, please uncheck the
                        &apos;chain&apos; box on the right of the relevant
                        manager column.
                      </p>
                    </div>

                    <div className="common_table">
                      <Table
                        columns={linecolumns}
                        dataSource={managementDummyArray}
                        pagination={{ pageSize: 5 }}
                      />
                    </div>
                  </div>
                </Panel>
                <Panel
                  header={
                    <div className="card-title" id="appraisal-acc-3-heading">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#appraisal-acc-3"
                        aria-expanded="true"
                        aria-controls="appraisal-acc-3"
                      >
                        <figure>
                          <Image
                            height={70}
                            width={50}
                            src="/images/Icon6.png"
                            alt="icon"
                            style={{ objectFit: "contain" }}
                          />
                          <span>Windows</span>
                        </figure>
                      </button>
                    </div>
                  }
                  key="3"
                >
                  <div className="acc-2-body acc-body">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <Image
                          height={70}
                          width={50}
                          src="/images/arrow-left.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="mt-4">
                        <h6>Appraisal windows 22/23</h6>
                      </div>
                      <div>
                        <Image
                          height={70}
                          width={50}
                          src="/images/arrow-right.png"
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>

                    <Table
                      columns={WindowsColumn}
                      dataSource={dataArray}
                      pagination={false}
                    />
                  </div>
                </Panel>
              </Collapse>
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
                      <div className="card-title" id="appraisal-acc-4-heading">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#appraisal-acc-4"
                          aria-expanded="true"
                          aria-controls="appraisal-acc-4"
                        >
                          <figure>
                            <Image
                              height={70}
                              width={50}
                              src="/images/Icon8.png"
                              alt="info"
                              style={{ objectFit: "contain" }}
                            />
                            <span>Targets</span>
                          </figure>
                        </button>
                      </div>
                    }
                    key="1"
                  >
                    <div className="acc-1-body acc-body">
                      <div className="note_box_2">
                        <NoteIcon />
                        <p>
                          Targets sit under areas on the appraisal form for your
                          chosen categories. The target area descriptions guide
                          appraisees and managers on the form.
                        </p>
                      </div>

                      <div className="common_table">
                        <Table
                          columns={targetcolumns}
                          dataSource={dataArray}
                          pagination={false}
                        />
                      </div>
                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add Row
                        </a>
                      </div>
                      <div className="appraisal-acc-3-btn">
                        <a className="cancle_btn">Cancel</a>
                        <a className="save_btn">Save </a>
                      </div>

                      <div className="appraisal_target_heading">
                        <h3>Default Targets</h3>
                      </div>
                      <div className="note_box_2">
                        <NoteIcon />
                        <p>
                          Default targets appear in every staff member&apos;s
                          form in a target area of your choosing.
                        </p>
                      </div>

                      <div className="common_table">
                        <Table
                          columns={defaultTargetcolumns}
                          dataSource={dataArray}
                          pagination={false}
                        />
                      </div>
                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add Row
                        </a>
                      </div>
                      <div className="appraisal-acc-3-btn">
                        <a className="cancle_btn">Cancel</a>
                        <a className="save_btn">Save </a>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="card-title" id="appraisal-acc-5-heading">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#appraisal-acc-5"
                          aria-expanded="true"
                          aria-controls="appraisal-acc-5"
                        >
                          <figure>
                            <Image
                              height={70}
                              width={50}
                              src="/images/Icon9.png"
                              alt="info"
                              style={{ objectFit: "contain" }}
                            />
                            <span>Objective</span>
                          </figure>
                        </button>
                      </div>
                    }
                    key="2"
                  >
                    <div className="acc-2-body acc-body">
                      <div className="appraisal_radio">
                        <span>
                          Would you like users to link targets to school
                          objectives?
                        </span>
                        <div className="appraisal_radio_box">
                          <div className="appraisal_single_radio">
                            <input type="radio" name="check1" />
                            <span>Yes</span>
                          </div>
                          <div className="appraisal_single_radio">
                            <input type="radio" name="check1" />
                            <span>No</span>
                          </div>
                        </div>
                      </div>

                      <div className="note_box_2">
                        <NoteIcon />
                        <p>
                          Schools can store lists of both &apos;school
                          objectives&apos; and &apos;professional
                          standards&apos; within the platform. These can be
                          linked to targets. School objectives concern
                          overarching school themes; professional standards can
                          be a wider set of goals.
                        </p>
                      </div>

                      <div className="common_table">
                        <Table
                          columns={objectivecolumns}
                          dataSource={dataArray}
                          pagination={false}
                        />
                      </div>
                      <div className="add_row_btn">
                        <a>
                          <i className="fal fa-plus"></i>Add 5 Rows
                        </a>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="card-title" id="appraisal-acc-6-heading">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#appraisal-acc-6"
                          aria-expanded="true"
                          aria-controls="appraisal-acc-6"
                        >
                          <figure>
                            <Image
                              height={70}
                              width={50}
                              src="/images/Icon10.png"
                              alt="info"
                              style={{ objectFit: "contain" }}
                            />
                            <span>Form Sign-Off</span>
                          </figure>
                        </button>
                      </div>
                    }
                    key="3"
                  >
                    <div className="appraisal-acc-6-body acc-body">
                      <div className="appraisal_radio">
                        <span>Who should sign off appraisal items?</span>
                        <div className="appraisal_radio_box">
                          <div className="appraisal_single_radio">
                            <input type="radio" name="check1" />
                            <span>Manager & Apprasiee</span>
                          </div>
                          <div className="appraisal_single_radio">
                            <input type="radio" name="check1" />
                            <span>Manager Only</span>
                          </div>
                        </div>
                      </div>

                      <div className="note_box_2">
                        <NoteIcon />
                        <p>
                          Appraisal items are in a draft state until confirmed.
                          This setting controls whether both manager and
                          appraisee sign off on each other&apos;s changes, or
                          whether only the manager is required to sign off on
                          changes made by the appraisee.
                        </p>
                      </div>

                      <div className="appraisal_radio">
                        <span>Who can rate appraisal items?</span>
                        <div className="appraisal_radio_box">
                          <div className="appraisal_single_radio">
                            <input type="radio" name="check1" />
                            <span>Manager & Apprasiee</span>
                          </div>
                          <div className="appraisal_single_radio">
                            <input type="radio" name="check1" />
                            <span>Manager Only</span>
                          </div>
                        </div>
                      </div>

                      <div className="note_box_2">
                        <NoteIcon />
                        <p>
                          Appraisal items once confirmed, can be RAG-rated to
                          show progress towards their goals.
                        </p>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appraisal;
