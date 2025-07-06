const AdsBoxSmall = () => {
  return (
    <div className="ads-box-small flex gap-2 container py-4">
      <div className="rounded-[10px] overflow-hidden">
        <img
          className="w-[full]"
          src="../../src/assets/AdsBoxSmall1.webp"
          alt=""
        />
      </div>
      <div className="rounded-[10px] overflow-hidden">
        <img src="../../src/assets/AdsBoxSmall2.gif" alt="" />
      </div>
      <div className="rounded-[10px] overflow-hidden">
        <img src="../../src/assets/AdsBoxSmall3.webp" alt="" />
      </div>
      <div className="rounded-[10px] overflow-hidden">
        <img src="../../src/assets/AdsBoxSmall4.jpg" alt="" />
      </div>
    </div>
  );
};
export default AdsBoxSmall;
