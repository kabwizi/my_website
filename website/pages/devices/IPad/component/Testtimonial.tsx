import React from "react";
import Image from "next/image";

interface testimonial {
  src: string;
  fullName: string;
  description: string;
}
const testimonialList: testimonial[] = [
  {
    src: "/devices/iPad/img/user_testimonial_img_2.png",
    fullName: "Jean gauthier",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dui. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  },
  {
    src: "/devices/iPad/img/user_testimonial_img_1.png",
    fullName: "Justine Flambeau",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dui. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  },
  {
    src: "/devices/iPad/img/user_testimonial_img_2.png",
    fullName: "Jeff Rack",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dui. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  },
];

function Testtimonial() {
  return (
    <div className="bg-black p-10 flex gap-5">
      <div className="relative h-20 w-20 flex-none">
        <Image src={testimonialList[0].src} layout="fill" objectFit="cover" />
      </div>
      <div className="relative">
        <h2 className="font-bold">{testimonialList[0].fullName}</h2>
        <p className="text-2xs">{testimonialList[0].description} </p>
      </div>
      <div className="absolute -top-8 left-5">
        <Image
          src="/devices/iPad/quotation_left.svg"
          width={120}
          height={120}
        />
      </div>
      <div className="absolute -bottom-10 right-7">
        <Image
          src="/devices/iPad/quotation_right.svg"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
}

export default Testtimonial;
