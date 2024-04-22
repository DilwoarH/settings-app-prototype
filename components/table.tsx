import React from "react";
import { Table } from "antd";

const TableDesign = () => {
  const columns: Array<object> = [
    {
      title: "Name",
      dataIndex: "name",
      //   {
      //     text: "Joe",
      //     value: "Joe",
      //   },
      //   {
      //     text: "Jim",
      //     value: "Jim",
      //   },
      //   {
      //     text: "Submenu",
      //     value: "Submenu",
      //     children: [
      //       {
      //         text: "Green",
      //         value: "Green",
      //       },
      //       {
      //         text: "Black",
      //         value: "Black",
      //       },
      //     ],
      //   },
      // ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",

      sorter: (a: any, b: any) => a.age - b.age,
    },
  ];

  const data = [
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

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default TableDesign;
