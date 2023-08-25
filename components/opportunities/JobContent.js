"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDivider from "../HeaderDivider";
import Button from "../Button";
import hiring from "../../public/assets/opportunities/hiring.png";
import onimisea from "../../public/onimisea.jpg";

const JobContent = () => {
  return (
    <section className="w-full h-auto relative ">
      <section className="content__container w-full z-20">
        <section className="w-[90%] mx-auto flex flex-col items-start justify-center py-20 gap-10 relative">
          <h4 className="text-black text-[16px] font-[600] leading-[24px]">
            Location: <span className="uppercase">Abuja, Nigeria</span>
          </h4>

          <section className="w-full flex flex-col gap-2">
            <h4 className="text-black text-[16px] font-[600] leading-[24px] uppercase">
              ORGANIZATIONAL BACKGROUND
            </h4>

            <p className="text-black text-[16px] font-[400] leading-[27px] text-justify">
              Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
              eros. Fusce rutrum, lectus in blandit sagittis, mi tortor
              ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris
              et neque sodales porta eu eget dui. Nunc eu quam sit amet justo
              elementum mollis. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed laoreet metus
              nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac
              posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit
              est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui
              a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam
              accumsan porta neque in viverra. Proin eleifend, eros in tristique
              hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a
              ipsum. Donec et fringilla neque. Aenean consequat purus quis
              lectus maximus fermentum. Maecenas quam nunc, sagittis non
              condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in
              blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum
              libero quam a nisi. In eu mauris et neque sodales porta eu eget
              dui. Nunc eu quam sit amet justo elementum mollis. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus
              in. Proin laoreet semper tortor ac posuere.
            </p>
          </section>

          <section className="w-full">
            <h4 className="text-black text-[16px] font-[600] leading-[24px]">
              Job Position
            </h4>
            <p className="text-black text-[16px] font-[400] leading-[24px] uppercase">
              HUMAN RESOURCES OFFICER
            </p>
          </section>

          <section className="w-full">
            <h4 className="text-black text-[16px] font-[600] leading-[24px]">
              Purpose of Position
            </h4>
            <p className="text-black text-[16px] font-[400] leading-[27px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
              fermentum augue, sit amet convallis augue. Integer eu iaculis sem,
              sed euismod eros. Nulla facilisi. Proin luctus odio nunc, sed
              laoreet est bibendum vitae. Sed a eleifend ex. Integer varius
              rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend
              ligula. Aliquam faucibus erat ut tincidunt cursus. Cras et
              ullamcorper velit. In hac habitasse platea dictumst. Nunc vitae
              dui quis risus elementum auctor.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default JobContent;
