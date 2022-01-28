import React from "react";
import { Link } from "react-router-dom";
import land from "../../Asset/images/land1.png";
const LockCard = () => {
  return (
    <div>
      <div class="relative m-5 shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
        <img src={land} alt="" class="w-full" />

        <div class="py-4 px-4 bg-white">
          <p class="text-xl text-left text-body font-display">
            เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
            ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
            ไม่บดบังทิวทัศน์
          </p>
          <div class="grid justify-items-end">
            <button class="bg-yellow shadow-lg hover:bg-yellow-500 px-8 py-2 mt-2 rounded text-md font-display">
              <Link to="/Lock">รายละเอียดเพิ่มเติม</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockCard;
