"use client";

import Link from "next/link";
import { format } from "date-fns";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDivider from "../HeaderDivider";
import Button from "../Button";
import hiring from "../../public/assets/opportunities/hiring.png";
import onimisea from "../../public/onimisea.jpg";
import { useEffect, useState } from "react";

const imgHost = "https://res.cloudinary.com/deneyjtsc";

const JobContent = ({ job }) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [desc, setDesc] = useState("");
  const [requ, setRequ] = useState("");

  useEffect(() => {
    if (job) {
      setDesc(job ? job.description : "");
      setRequ(job ? job.requirements : "");
      const date_format = "dd MMMM, yyyy h:mm a";
      setFormattedDate(format(new Date(job.application_deadline), date_format));
    }
  }, [job]);

  return (
    <section className="w-full h-auto relative ">
      <section className="content__container w-full z-20">
        <section className="w-[90%] mx-auto flex flex-col items-start justify-center py-20 gap-10 relative">
          <h4 className="text-black text-[16px] font-[600] leading-[24px]">
            Location:{" "}
            <span className="uppercase">{job ? job.location : ""}</span>
          </h4>

          <section className="w-full">
            <h4 className="text-black text-[16px] font-[600] leading-[24px]">
              Position
            </h4>
            <p className="text-black text-[16px] font-[400] leading-[24px] uppercase">
              {job ? job.title : ""}
            </p>
          </section>

          <h4 className="text-black text-[16px] font-[600] leading-[24px]">
            Company: <span className="uppercase">{job ? job.company : ""}</span>
          </h4>

          <section className="w-full">
            <h4 className="text-black text-[16px] font-[600] leading-[24px]">
              Description
            </h4>
            <p
              className="text-black text-[16px] font-[400] leading-[24px] "
              dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
          </section>

          <section className="w-full">
            <h4 className="text-black text-[16px] font-[600] leading-[24px]">
              Requirements
            </h4>
            <p
              className="text-black text-[16px] font-[400] leading-[24px]"
              dangerouslySetInnerHTML={{ __html: requ }}
            ></p>
          </section>

          <h4 className="text-black text-[16px] font-[600] leading-[24px]">
            Apply:{" "}
            <Link
              href={job ? job.application_url : ""}
              className="text-blue-600"
            >
              {job ? job.application_url : ""}
            </Link>
          </h4>

          <h4 className="text-black text-[16px] font-[600] leading-[24px]">
            Application Deadline:{" "}
            <span className="text-red-600">{formattedDate}</span>
          </h4>
        </section>
      </section>
    </section>
  );
};

export default JobContent;
