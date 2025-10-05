import styles from "../../../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex-col sm:max-w-[350px] min-w-[210px]">
    <div
      className={`${styles.flexCenter}  w-[70px] h-[70px] rounded-[24] bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h2 className="my-[26px]  font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h2>
    <ul className="space-y-3">
      {subtitle.map((val, ind) => (
        <li
          key={ind}
          className="flex items-start gap-3 text-gray-700 text-base"
        >
          {/* Bullet Icon */}
          <span className="w-2 h-2 rounded-full bg-white mt-2"></span>
          <span className="leading-relaxed text-white">{val}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default NewFeatures;
