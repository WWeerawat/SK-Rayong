import React from "react";
import { Link } from "react-router-dom";
import land from "../../Asset/images/land1.png";
const Card = () => {
  return (
    <div>
      {/* <!-- ====== Cards Section Start --> */}
      <div class="relative m-4 shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
        <img src={land} alt="" class="w-full" />
        <button class="absolute right-3 top-2 bg-red shadow-lg px-5 py-1 rounded text-md text-white font-display">
          หลุดจอง 4 ล็อค
        </button>
        <div class="py-4 px-4 bg-white">
          <h3 class="text-xl text-left text-body font-display">
            เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
            ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
            ไม่บดบังทิวทัศน์
          </h3>
          <div class="grid justify-items-end">
            <button class="bg-yellow shadow-lg hover:bg-yellow-500 px-8 py-2 mt-2 rounded text-md font-display">
              <Link to="/phase">ดูล็อคหลุดจอง</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
