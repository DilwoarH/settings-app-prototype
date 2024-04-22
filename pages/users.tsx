import NoteIcon from "@/components/noteIcon";
import PageHeadings from "@/components/pageHeadings";
import { Drawer, Modal, Select, Table, Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [userSection, setUserSection] = useState(true);
  const [saveModal, setSaveModal] = useState(false);
  const [permissionModal, setPermissionModal] = useState(false);

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const userColumn: Array<object> = [
    {
      title: "Name",
      dataIndex: "name",

      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <form>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </form>{" "}
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div
            className="action_btn table-data-custom-color cursor-pointer"
            onClick={() => {
              setSaveModal(true);
            }}
          >
            email
          </div>
        </>
      ),
    },
    {
      title: "Permissions",
      dataIndex: "permissionpermissions",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.age - b.age,
      render: () => (
        <>
          <div
            className="action_btn table-data-custom-color cursor-pointer"
            onClick={() => {
              setPermissionModal(true);
            }}
          >
            ob par letter
          </div>
        </>
      ),
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
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
            <a className="arrow_btn" onClick={showDrawer}>
              <Image height={20} width={10} src="/images/edit.png" alt="edit" />
            </a>
            <a className="arrow_btn">
              <Image
                height={20}
                width={10}
                src="/images/left-arrow.png"
                alt="edit"
              />
            </a>
          </div>
        </>
      ),
    },
  ];
  const userData = [
    {
      name: "jhon",
      email: "tbc",
      status: true,
      permissions: "ob par letter",
      lastLogin: "22/2/23",
    },
    {
      name: "jhon",
      email: "tbc",
      status: true,
      permissions: "ob par letter",
      lastLogin: "22/2/23",
    },
    {
      name: "jhon",
      email: "tbc",
      status: true,
      permissions: "ob par letter",
      lastLogin: "22/2/23",
    },
    {
      name: "jhon",
      email: "tbc",
      status: true,
      permissions: "ob par letter",
      lastLogin: "22/2/23",
    },
    {
      name: "jhon",
      email: "tbc",
      status: true,
      permissions: "ob par letter",
      lastLogin: "22/2/23",
    },
  ];
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="common_class_for_bottom_stick">
        <div className="user_page_section">
          <div className="custom_container">
            <PageHeadings text={"All Users"} />

            <Table
              columns={userColumn}
              dataSource={userData}
              pagination={false}
            />
          </div>

          <div className="add_user_btn">
            <a onClick={showDrawer}>
              <i className="fal fa-plus"></i> Add User
            </a>
          </div>
        </div>

        <Drawer
          title={null}
          placement={"bottom"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"bottom"}
          height={"700px"}
          //need to change hieght
        >
          <div className="close-btn-container">
            <div className="close-btn" onClick={onClose}>
              X
            </div>
          </div>
          <div className="common_class_for_bottom_stick">
            <div className="user_page_section">
              <div className="custom_container">
                <div className="commen_header">
                  <a onClick={onClose}>
                    <Image
                      src="/images/back-arrow.png"
                      alt="back-arrow"
                      width={30}
                      height={30}
                    />
                  </a>
                  <h3>All Users</h3>
                </div>

                <div className="appraisal_radio">
                  <span>Is the user already in the MIS?</span>
                  <div className="appraisal_radio_box">
                    <div className="appraisal_single_radio">
                      <input
                        type="radio"
                        name="check1"
                        checked={userSection.valueOf()}
                        onChange={(e) => setUserSection(e.target.checked)}
                      />
                      <span>Yes </span>
                    </div>
                    <div className="appraisal_single_radio">
                      <input
                        type="radio"
                        name="check1"
                        checked={!userSection}
                        onChange={(e) => setUserSection(!e.target.checked)}
                      />
                      <span>No</span>
                    </div>
                  </div>
                </div>
                <div className="note_box_2">
                  <NoteIcon />

                  <p>
                    Appraisal items are in a draft state until confirmed. This
                    setting controls whether both manager and appraisee sign off
                    on each other&apos;s changes, or whether only the manager is
                    required to sign off on changes made by the appraisee.
                  </p>
                </div>

                <div className="add_user_form_section">
                  <div className="add_user_heading">
                    <h3>User Information</h3>
                  </div>
                  {userSection ? (
                    <div className="form_content_box">
                      <div className="form_field_box">
                        <span>Name</span>
                        <div className="form_single_field_box">
                          <i className="fad fa-user"></i>

                          <select>
                            <option>Name</option>
                          </select>
                        </div>
                        <label className="error" htmlFor="name"></label>
                      </div>

                      <div className="form_field_box">
                        <span>Email</span>
                        <div className="form_single_field_box">
                          <i className="fas fa-envelope"></i>

                          <select>
                            <option>Email</option>
                          </select>
                        </div>
                        <label className="error" htmlFor="email"></label>
                      </div>
                    </div>
                  ) : (
                    <div className="form_content_box">
                      <div className="no_option_data">
                        <div className="no_option_data_fields">
                          <div className="form_field_box">
                            <span>Title</span>
                            <div className="form_single_field_box">
                              <i className="fad fa-user"></i>

                              <select>
                                <option>Mr</option>
                              </select>
                            </div>
                            <label className="error" htmlFor="name"></label>
                          </div>

                          <div className="form_field_box">
                            <span>Gender</span>
                            <div className="form_single_field_box">
                              <i className="fal fa-mars"></i>

                              <select>
                                <option>Male</option>
                              </select>
                            </div>
                            <label className="error" htmlFor="Male"></label>
                          </div>
                        </div>
                        <div className="drag_logo">
                          <label>
                            <Image
                              height={50}
                              width={80}
                              src="/images/gallery-add2.png"
                              alt="edit"
                              style={{ objectFit: "contain" }}
                            />
                            Profile photo. Max size 10mb, jpeg or PNG only.
                            <input type="file" placeholder="change" />
                          </label>
                        </div>
                      </div>

                      <div className="no_option_data_name_fields">
                        <div className="form_field_box">
                          <span>Preferred Forename</span>
                          <div className="form_single_field_box">
                            <i className="fad fa-user"></i>
                            <input
                              type="text"
                              placeholder="Forename"
                              name="Forename"
                              id="Forename"
                              required
                            />
                          </div>
                          <label className="error" htmlFor="Forename"></label>
                        </div>
                        <div className="form_field_box">
                          <span>Preferred Surname</span>
                          <div className="form_single_field_box">
                            <i className="fad fa-user"></i>
                            <input
                              type="text"
                              placeholder="Surname"
                              name="Surname"
                              id="Surname"
                              required
                            />
                          </div>
                          <label className="error" htmlFor="Surname"></label>
                        </div>
                      </div>

                      <div className="form_field_box">
                        <span>Email</span>
                        <div className="form_single_field_box">
                          <i className="fas fa-envelope"></i>
                          <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                            required
                          />
                        </div>
                        <label className="error" htmlFor="email"></label>
                      </div>
                    </div>
                  )}

                  <div className="add_user_heading">
                    <h3>Access</h3>
                  </div>
                  <div className="form_content_box">
                    <div className="form_field_box">
                      <span>Permissions</span>
                      <div className="form_single_field_box">
                        <i className="far fa-key">
                          <Image
                            src="/images/key.png"
                            alt="back-arrow"
                            width={30}
                            height={30}
                          />
                        </i>
                        <Select
                          suffixIcon={
                            <Image
                              src="/images/key.png"
                              alt="back-arrow"
                              width={30}
                              height={30}
                            />
                          }
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Permissions"
                          defaultValue={["a10", "c12"]}
                          onChange={handleChange}
                          options={options}
                        />
                      </div>
                    </div>

                    <div className="add_user_form_des">
                      <p>
                        Select relevant permissions for this user. For
                        information on what these permissions do, please see{" "}
                        <a>this section</a> of the knowledge base.
                      </p>
                    </div>

                    <div className="signup_single_checkbox_field">
                      <div className="signup_single_checkbox_content">
                        <label className="signup_custom_checkbox_input">
                          <input type="radio" name="radio" />
                          <span className="checked_input_style">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </div>
                      <p>
                        If you leave this unchecked, the user will not be able
                        to log in to the platform. Please note that this field
                        may be changed via sync with the MIS. If, in your MIS, a
                        user&apos;s leaving date is not set or is in the future,
                        and the employment start date is not set or is in the
                        past, then the user will show as active following the
                        sync.
                      </p>
                    </div>
                    <div className="appraisal-acc-3-btn">
                      <a
                        className="cancle_btn"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </a>
                      <a
                        className="save_btn"
                        onClick={() => {
                          onClose();
                        }}
                      >
                        Save{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            visible={saveModal}
            footer={null}
            onCancel={() => {
              setSaveModal(false);
            }}
          >
            <div>
              <div role="document">
                <div>
                  <div className="popup-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setSaveModal(false);
                      }}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="popup-body">
                    <form>
                      <div className="popup_form_field_box">
                        <span>Email</span>
                        <div className="popup_form_single_field_box">
                          <input
                            type="text"
                            placeholder="tbc@tbc.com"
                            name="email"
                            id="email"
                            required
                          />
                        </div>
                        <label className="error" htmlFor="email"></label>
                      </div>
                      <div className="popup-footer">
                        <button type="button">Save</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </Drawer>
      </div>
      <Modal
        visible={permissionModal}
        footer={null}
        onCancel={() => {
          setPermissionModal(false);
        }}
      >
        <div>
          <div role="document">
            <div>
              <div className="popup-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setPermissionModal(false);
                  }}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="popup-body">
                <form>
                  <div className="popup_form_field_box">
                    <span>Permission</span>
                    <div className="popup_form_single_field_box">
                      <Select
                        suffixIcon={
                          <Image
                            src="/images/key.png"
                            alt="back-arrow"
                            width={30}
                            height={30}
                          />
                        }
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Permissions"
                        defaultValue={["a10", "c12"]}
                        onChange={handleChange}
                        options={options}
                      />
                    </div>
                    <label className="error" htmlFor="email"></label>
                  </div>
                  <div className="popup-footer">
                    <button type="button">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Users;
