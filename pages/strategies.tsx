import NoteIcon from "@/components/noteIcon";
import PageHeadings from "@/components/pageHeadings";
import { Table } from "antd";
import React from "react";

const strategies = () => {
  const incidentsdata = [
    {
      key: "1",
      name: "Overarching area",
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
      title: "Area",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Overarching area
          </div>
        </>
      ),
    },
    {
      title: "Category",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            ONarrower Category
          </div>
        </>
      ),
    },
    {
      title: "Strategy",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div className="action_btn table-data-custom-color">
            Words words words
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="common_class_for_bottom_stick">
        <div className="appraisal_page_section">
          <div className="custom_container">
            <PageHeadings text={"Student Strategies"} />

            <p className="mt-4 mb-2 font-weight-bold">
              Which Student Strategies structure would you like to use for
              initial setup?
            </p>
            <div className="appraisal_radio_box mb-4">
              <div className="appraisal_single_radio">
                <input type="radio" name="check1" />
                <span>Standard</span>
              </div>
              <div className="appraisal_single_radio">
                <input type="radio" name="check1" />
                <span>Basic</span>
              </div>
            </div>
            <div className="note_box_2 mb-4">
              <NoteIcon />
              <p>
                There are two default models for Student Strategies, available
                to view here (default model - basic; default model - standard).
                Once you have chosen a structure, a table will appear below
                showing your strategies. You can then add, remove, or edit
                strategies as you see fit.
              </p>
            </div>
            <div
              className="mb-4"
              style={{
                color: "#005CBA",
              }}
            >
              <h3 className="font-weight-bold">Strategy Framework</h3>
            </div>

            <Table
              columns={pointColumn}
              dataSource={incidentsdata}
              pagination={false}
            />
            <div className="mt-2">
              <div className="appraisal-acc-3-btn mb-3">
                <a className="cancle_btn">Append Default Framework</a>
                <a className="save_btn">Add New Row</a>
              </div>
              <div className="note_box_2">
                <NoteIcon />
                <p>
                  This table shows your existing strategy framework. You can add
                  new areas, categories, and strategies. You can also click
                  ‘Append default framework’ to append our default frameworks to
                  this framework. Click here to view the standard framework and
                  here to view the basic framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default strategies;
