import NoteIcon from "@/components/noteIcon";
import PageHeadings from "@/components/pageHeadings";
import { Collapse, Radio, Switch } from "antd";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import "../styles/css/main.css";
const siteSetting = () => {
  const { Panel } = Collapse;
  return (
    <>
      <div className="common_class_for_bottom_stick">
        <div className="site_setting_page_section">
          <div className="custom_container">
            <PageHeadings text={"Site Settings"} />
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
                        <span>Access</span>
                      </figure>
                    </button>
                  </div>
                }
                key="1"
              >
                <div className="acc-2-body">
                  <div className="d-flex justify-content-between mb-1">
                    <h6>
                      <b>Two-factor authentication</b>
                    </h6>
                    <Switch />
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
                        <span>Branding</span>
                      </figure>
                    </button>
                  </div>
                }
                key="2"
              >
                <div className="acc-2-body">
                  <form>
                    <div className="branding_parent">
                      <div className="branding_single_box">
                        <div className="drag_pic">
                          <label>
                            <Image
                              height={70}
                              width={50}
                              src="/images/gallery-add.png"
                              alt="icon"
                              style={{ objectFit: "contain" }}
                            />{" "}
                            School Logo
                            <input type="file" placeholder="change" />
                          </label>
                        </div>
                        <div className="branding_custom_input_btn_main">
                          <p>
                            <NoteIcon />
                            This logo will be displayed on the log-in screen for
                            the platform.
                          </p>
                          <div className="branding_custom_input_btn">
                            <label>
                              <i className="fas fa-file-upload"></i>
                              Upload Logo
                              <input type="file" />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="branding_single_box">
                        <div className="drag_pic">
                          <label>
                            <Image
                              height={70}
                              width={50}
                              src="/images/gallery-add.png"
                              alt="icon"
                              style={{ objectFit: "contain" }}
                            />
                            Parent Message / Reports Logo
                            <input type="file" placeholder="change" />
                          </label>
                        </div>
                        <div className="branding_custom_input_btn_main">
                          <p>
                            <NoteIcon />
                            This letterhead will be displayed on all Parent
                            messages sent by the platform. It can also be added
                            to school reports.
                          </p>
                          <div className="branding_custom_input_btn">
                            <label>
                              <i className="fas fa-file-upload"></i>
                              Upload Logo
                              <input type="file" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default siteSetting;
