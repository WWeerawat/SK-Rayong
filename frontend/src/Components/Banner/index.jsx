import React from "react";
import tree from "../../Asset/images/Tree.png";
import bird from "../../Asset/images/Bird.png";

const Banner = () => {
  return (
    <div>
      <img
        class="object-fill py-4 "
        src="https://media.istockphoto.com/photos/aerial-view-of-land-and-positioning-point-area-picture-id1254330782?k=20&m=1254330782&s=612x612&w=0&h=41xlEGuv95_fEDp1euilGldyDYSArI5VaIjPXMbWbEE="
        alt="headerImage"
      />
      <div class="text-3xl text-body font-display relative px-8 pb-12 ">
        <img src={bird} alt="" class="absolute top-4 right-0 pr-3" />
        <p class="text-left p-3">
          "<p class="inline text-4xl  font-bold">ที่</p>
          ดินระยอง
        </p>
        <p class=" underline text-primary">จัดสรรสวย</p>
        <p class="text-right p-3 pb-6">
          ผ่อนได้
          <p class="inline text-4xl  font-bold">ถูก</p>มาก"
        </p>
        <img src={tree} alt="" class="absolute bottom-0 left-0 " />
      </div>
    </div>
  );
};

export default Banner;
